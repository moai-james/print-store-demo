"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Wand2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageGeneratorProps {
  onGenerate: (prompt: string) => Promise<void>;
  isLoading: boolean;
}

export function ImageGenerator({ onGenerate, isLoading }: ImageGeneratorProps) {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    await onGenerate(prompt.trim());
    setPrompt("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Textarea
          placeholder="描述您想要生成的圖像..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="min-h-[100px] resize-none"
        />
        <p className="text-xs text-muted-foreground">
          請盡可能詳細描述，以獲得更好的結果。
        </p>
      </div>
      <Button
        type="submit"
        disabled={!prompt.trim() || isLoading}
        className={cn(
          "w-full transition-all duration-200",
          (!prompt.trim() || isLoading) && "opacity-50 cursor-not-allowed"
        )}
      >
        <Wand2 className="mr-2 h-4 w-4" />
        {isLoading ? "生成中..." : "生成圖像"}
      </Button>
    </form>
  );
}