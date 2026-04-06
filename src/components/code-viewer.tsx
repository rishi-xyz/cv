"use client";

import { useState, useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-python";
import { Check, Copy, Download, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { cn } from "@/src/lib/utils";

interface CodeViewerProps {
  name: string;
  description: string;
  path: string;
  index: number;
}

export function CodeViewer({ name, description, path, index }: CodeViewerProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [code, setCode] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    fetch(path)
      .then((res) => res.text())
      .then((text) => {
        setCode(text);
        setIsLoading(false);
      })
      .catch(() => {
        setCode("// Failed to load code");
        setIsLoading(false);
      });
  }, [path]);

  useEffect(() => {
    if (code && codeRef.current && !isLoading) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code, isExpanded, isLoading]);

  const handleCopy = async () => {
    if (!code) return;
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const previewLines = 8;
  const lines = code.split("\n");
  const needsExpansion = lines.length > previewLines;
  const displayCode = isExpanded ? code : lines.slice(0, previewLines).join("\n");

  return (
    <div
      className={cn(
        "glass-dark rounded-xl overflow-hidden hover-lift hover-glow animate-slide-up"
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <div>
          <h3 className="font-mono text-sm font-medium text-white">{name}</h3>
          <p className="text-xs text-neutral-400 mt-1">{description}</p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={handleCopy}
            className="text-neutral-400 hover:text-white hover:bg-white/10"
          >
            {copied ? (
              <Check className="size-4 text-green-400" />
            ) : (
              <Copy className="size-4" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={handleDownload}
            className="text-neutral-400 hover:text-white hover:bg-white/10"
          >
            <Download className="size-4" />
          </Button>
        </div>
      </div>

      <div className="relative">
        <div
          className={cn(
            "overflow-hidden transition-all duration-300",
            !isExpanded && needsExpansion && "max-h-48"
          )}
        >
          {isLoading ? (
            <div className="p-4 font-mono text-sm">
              <div className="h-4 w-32 bg-white/5 rounded animate-pulse" />
            </div>
          ) : (
            <pre className="p-4 text-sm overflow-x-auto">
              <code ref={codeRef} className="language-python">
                {displayCode}
              </code>
            </pre>
          )}
        </div>

        {!isExpanded && needsExpansion && (
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
        )}
      </div>

      {needsExpansion && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-3 flex items-center justify-center gap-2 text-sm text-neutral-400 hover:text-white hover:bg-white/5 transition-colors border-t border-white/10"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="size-4" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="size-4" />
              Show More ({lines.length - previewLines} more lines)
            </>
          )}
        </button>
      )}
    </div>
  );
}
