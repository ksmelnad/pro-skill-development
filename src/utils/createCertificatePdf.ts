import { PDFDocument, rgb } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";

interface CertificateData {
  name: string;
  course: string;
  date: Date;
  grade?: string;
}

export async function createCertificatePDF(
  data: CertificateData
): Promise<Uint8Array> {
  if (!data.name || !data.course) {
    throw new Error("Missing certificate data");
  }
  // console.log("Creating certificate PDF...", data);
  try {
    const templateUrl = data.grade
      ? `https://pro-skill-development.s3.ap-south-1.amazonaws.com/certificate-template.pdf`
      : `https://pro-skill-development.s3.ap-south-1.amazonaws.com/certificate-template-no-grade.pdf`;

    const responseTemplate = await fetch(templateUrl);
    if (!responseTemplate.ok) {
      throw new Error(
        `Failed to fetch PDF template: ${responseTemplate.statusText}`
      );
    }

    const templateBytes = await responseTemplate.arrayBuffer();

    const pdfDoc = await PDFDocument.load(templateBytes);

    pdfDoc.registerFontkit(fontkit);

    const responseRadleyFont = await fetch(
      `${
        process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"
      }/Radley-Regular.ttf`
    );
    if (!responseRadleyFont.ok) {
      throw new Error(
        `Failed to fetch Radley font: ${responseRadleyFont.statusText}`
      );
    }
    const radleyFontBytes = await responseRadleyFont.arrayBuffer();

    const radleyFont = await pdfDoc.embedFont(radleyFontBytes);

    const responseGreatVibesFont = await fetch(
      `${
        process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"
      }/GreatVibes-Regular.ttf`
    );
    if (!responseGreatVibesFont.ok) {
      throw new Error(
        `Failed to fetch GreatVibes font: ${responseGreatVibesFont.statusText}`
      );
    }
    const greatVibesBytes = await responseGreatVibesFont.arrayBuffer();
    const greatVibesFont = await pdfDoc.embedFont(greatVibesBytes);
    const [firstPage] = pdfDoc.getPages();
    const pageWidth = firstPage.getWidth();

    const TEXT_COLOR = rgb(168 / 255, 131 / 255, 36 / 255);
    const dateStr = data.date.toLocaleDateString()

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
      ...(data.grade
        ? [
            {
              text: data.grade,
              size: 16,
              font: radleyFont,
              y: 165,
              offsetX: -5,
            },
          ]
        : []),
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
    return pdfBytes;
    
  } catch (error: any) {
    throw new Error(`Failed to create certificate PDF: ${error.message}`);
  }
}

function centerX(text: string, size: number, font: any, pageWidth: number) {
  const textWidth = font.widthOfTextAtSize(text, size);
  return (pageWidth - textWidth) / 2;
}
