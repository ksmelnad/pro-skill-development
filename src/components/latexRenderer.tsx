import React from "react";

interface LatexRendererProps {
  text: string;
}

const LatexRenderer: React.FC<LatexRendererProps> = ({ text }) => {
  const renderLatex = (latexString: string): React.ReactNode => {
    // Basic parsing and rendering logic will go here
    // For now, let's just handle a few basic things as examples

    let output: React.ReactNode[] = [];
    let currentText = "";

    for (let i = 0; i < latexString.length; i++) {
      const char = latexString[i];

      if (char === "$") {
        // Check if it's inline or block (double $$)
        if (i + 1 < latexString.length && latexString[i + 1] === "$") {
          // Block formula
          if (currentText) {
            output.push(currentText);
            currentText = "";
          }
          const endBlockIndex = latexString.indexOf("$$", i + 2);
          if (endBlockIndex !== -1) {
            const latexBlock = latexString.substring(i + 2, endBlockIndex);
            output.push(renderBlockFormula(latexBlock));
            i = endBlockIndex + 1; // Skip past the closing $$
          } else {
            // Error: Unclosed block formula (for now, just treat as text)
            currentText += "$$";
          }
        } else {
          // Inline formula
          if (currentText) {
            output.push(currentText);
            currentText = "";
          }
          const endInlineIndex = latexString.indexOf("$", i + 1);
          if (endInlineIndex !== -1) {
            const latexInline = latexString.substring(i + 1, endInlineIndex);
            output.push(renderInlineFormula(latexInline));
            i = endInlineIndex; // Skip past the closing $
          } else {
            // Error: Unclosed inline formula (for now, just treat as text)
            currentText += "$";
          }
        }
      } else {
        currentText += char;
      }
    }

    if (currentText) {
      output.push(currentText);
    }

    return <>{output}</>;
  };

  const renderInlineFormula = (latex: string): React.ReactNode => {
    // Basic inline formula rendering (e.g., fractions, superscripts, subscripts)
    if (latex.startsWith("\\frac{")) {
      const parts = extractFractionParts(latex);
      if (parts) {
        return (
          <span className="inline-fraction">
            <span className="numerator">{renderLatex(parts.numerator)}</span>
            <span className="fraction-line"></span>
            <span className="denominator">
              {renderLatex(parts.denominator)}
            </span>
          </span>
        );
      }
    } else if (latex.startsWith("^")) {
      const baseAndExponent = extractSuperscriptParts(latex);
      if (baseAndExponent) {
        return (
          <sup className="superscript">
            {renderLatex(baseAndExponent.exponent)}
          </sup>
        );
      }
    } else if (latex.startsWith("_")) {
      const baseAndSubscript = extractSubscriptParts(latex);
      if (baseAndSubscript) {
        return (
          <sub className="subscript">
            {renderLatex(baseAndSubscript.subscript)}
          </sub>
        );
      }
    }
    // Add more inline formula handling here as needed
    return <span className="inline-math">{latex}</span>; // Default for unhandled inline math
  };

  const renderBlockFormula = (latex: string): React.ReactNode => {
    // Basic block formula rendering (similar to inline but displayed as block)
    if (latex.startsWith("\\frac{")) {
      const parts = extractFractionParts(latex);
      if (parts) {
        return (
          <div className="block-fraction">
            <div className="numerator">{renderLatex(parts.numerator)}</div>
            <div className="fraction-line"></div>
            <div className="denominator">{renderLatex(parts.denominator)}</div>
          </div>
        );
      }
    }
    // Add more block formula handling here as needed
    return <div className="block-math">{latex}</div>; // Default for unhandled block math
  };

  // Helper functions to extract parts from LaTeX commands (very basic for now)
  const extractFractionParts = (
    latex: string,
  ): { numerator: string; denominator: string } | null => {
    const regex = /\\frac{(.*?)}{(.*?)}/;
    const match = latex.match(regex);
    if (match && match[1] && match[2]) {
      return { numerator: match[1], denominator: match[2] };
    }
    return null;
  };

  const extractSuperscriptParts = (
    latex: string,
  ): { base: string; exponent: string } | null => {
    const regex = /^\^(.*?)$/; // Assumes only exponent after ^ for simplicity
    const match = latex.match(regex);
    if (match && match[1]) {
      return { base: "", exponent: match[1] }; // Base is empty for now, could be extended
    }
    return null;
  };

  const extractSubscriptParts = (
    latex: string,
  ): { base: string; subscript: string } | null => {
    const regex = /^_(.*?)$/; // Assumes only subscript after _ for simplicity
    const match = latex.match(regex);
    if (match && match[1]) {
      return { base: "", subscript: match[1] }; // Base is empty for now, could be extended
    }
    return null;
  };

  return <div className="latex-container">{renderLatex(text)}</div>;
};

export default LatexRenderer;
