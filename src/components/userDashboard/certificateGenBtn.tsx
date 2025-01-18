"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function CertificateGenBtn({ course }: { course: string }) {
  const [url, setUrl] = useState<string | null>(null);

  const handleClick = async () => {};
  return (
    <Button variant="ghost" onClick={handleClick}>
      <a href={url!} download={url}>
        Generate
      </a>
    </Button>
  );
}
