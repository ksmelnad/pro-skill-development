"use client";
import React, { useEffect, useRef } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

interface KaTeXRendererProps {
  latex: string;
  displayMode?: boolean;
}

const KaTeXRenderer: React.FC<KaTeXRendererProps> = ({
  latex,
  displayMode = false,
}) => {
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      katex.render(latex, elementRef.current, {
        throwOnError: false,
        displayMode: displayMode,
      });
    }
  }, [latex, displayMode]);

  return <span ref={elementRef} />;
};

export default KaTeXRenderer;
