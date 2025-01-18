import { PDFDocument, rgb } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import fs from "fs/promises";
import path from "path";

interface CertificateData {
  name: string;
  course: string;
  grade: string;
}

export async function createCertificatePDF(
  data: CertificateData
): Promise<Uint8Array> {
  if (!data.name || !data.course || !data.grade) {
    throw new Error("Missing certificate data");
  }
  console.log("Creating certificate PDF...", data);
  try {
    // const templateFilePath = new URL(
    //   "/certificate-template.pdf",
    //   import.meta.url
    // );
    const templateFilePath = path.join(
      process.cwd(),
      "public",
      "certificate-template.pdf"
    );
    console.log("Template File Path", templateFilePath);
    const templateBytes = await fs.readFile(templateFilePath);
    const pdfDoc = await PDFDocument.load(templateBytes);

    pdfDoc.registerFontkit(fontkit);
    const radleyFontFilePath = path.join(
      process.cwd(),
      "public",
      "Radley-Regular.ttf"
    );
    // const radleyFontFilePath = new URL("/Radley-Regular.ttf", import.meta.url);
    const radleyFontBytes = await fs.readFile(radleyFontFilePath);
    const radleyFont = await pdfDoc.embedFont(radleyFontBytes);

    // const greatVibesFontFilePath = new URL(
    //   "/GreatVibes-Regular.ttf",
    //   import.meta.url
    // );
    const greatVibesFontFilePath = path.join(
      process.cwd(),
      "public",
      "GreatVibes-Regular.ttf"
    );

    const greatVibesBytes = await fs.readFile(greatVibesFontFilePath);
    const greatVibesFont = await pdfDoc.embedFont(greatVibesBytes);
    const [firstPage] = pdfDoc.getPages();
    const pageWidth = firstPage.getWidth();

    const TEXT_COLOR = rgb(168 / 255, 131 / 255, 36 / 255);
    const dateStr = new Date().toLocaleDateString();

    const fields = [
      {
        text: data.name,
        size: 40,
        font: greatVibesFont,
        y: 299,
        offsetX: 0,
      },
      {
        text: data.course,
        size: 30,
        font: radleyFont,
        y: 195,
        offsetX: 0,
      },
      {
        text: dateStr,
        size: 16,
        font: radleyFont,
        y: 120,
        fixedX: 210,
        offsetX: 0,
      },
      {
        text: data.grade,
        size: 16,
        font: radleyFont,
        y: 165,
        offsetX: -5,
      },
    ];

    fields.forEach(({ text, size, font, y, offsetX, fixedX }) => {
      const x = fixedX ?? centerX(text, size, font, pageWidth);
      firstPage.drawText(text, {
        x: x + offsetX,
        y: y,
        size: size,
        font: font,
        color: TEXT_COLOR,
      });
    });

    const pdfBytes = await pdfDoc.save();
    // await fs.writeFile(`../data/${data.name}-${data.course}.pdf`, pdfBytes);
    return pdfBytes;
  } catch (error: any) {
    throw new Error(`Failed to create certificate PDF: ${error.message}`);
  }
}

function centerX(text: string, size: number, font: any, pageWidth: number) {
  const textWidth = font.widthOfTextAtSize(text, size);
  return (pageWidth - textWidth) / 2;
}
