"use client";

import { generateCertificate } from "@/app/actions/certificate";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState, useTransition } from "react";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Loader2 } from "lucide-react";

export default function CertificateDownloadBtn({
  courseId,
  courseTitle,
  attempt,
}: {
  courseId: string;
  courseTitle: string;
  attempt: number;
}) {
  const [isPending, startTransition] = useTransition();
  const [url, setUrl] = useState<string | null>(null);
  const [mentionGrade, setMentionGrade] = useState<boolean>(true);

  // toast
  const { toast } = useToast();

  const handleClick = async () => {
    try {
      const response = await generateCertificate({
        courseId,
        courseTitle,
        attempt,
        isAddGrade: mentionGrade,
      });
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
              Open
            </a>
          </ToastAction>
        ),
      });
    } catch (error) {
      console.error("Error fetching PDF:", error);
    }
  };
  return (
    <>
      <div className="flex items-center space-x-2">
        <Switch
          id="mention-grade"
          checked={mentionGrade}
          onCheckedChange={() => setMentionGrade(!mentionGrade)}
        />
        <Label htmlFor="mention-grade">Mention grade</Label>
      </div>

      {url ? (
        <Button asChild>
          <a href={url} target="_blank" className="">
            Open
          </a>
        </Button>
      ) : (
        <Button
          disabled={isPending}
          onClick={() => startTransition(handleClick)}
        >
          {isPending && <Loader2 className="animate-spin mr-2" size={16} />}
          Download
        </Button>
      )}
    </>
  );
}
