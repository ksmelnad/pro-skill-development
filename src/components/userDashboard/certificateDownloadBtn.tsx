"use client";

import { generateCertificate } from "@/app/actions/certificate";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

export default function CertificateDownloadBtn({
  course,
  attempt,
}: {
  course: string;
  attempt: number;
}) {
  const [url, setUrl] = useState<string | null>(null);

  // toast
  const { toast } = useToast();

  const handleClick = async () => {
    try {
      const response = await generateCertificate({ course, attempt: 1 });
      // if (!response.ok) {
      //   throw new Error('Failed to fetch PDF');
      // }
      const blob = new Blob([response], { type: "application/pdf" });

      const url = URL.createObjectURL(blob);
      setUrl(url);
      toast({
        title: "Certificate Generated",
        description: "Your certificate is ready for download.",
        action: (
          <ToastAction altText={"Download"}>
            <a href={url} target="_blank">
              Download
            </a>
          </ToastAction>
        ),
      });
    } catch (error) {
      console.error("Error fetching PDF:", error);
    }
  };
  return (
    <Button variant="ghost" onClick={handleClick}>
      Download
    </Button>
  );
}
