"use client";

import { useState } from "react";
import { ImageGenerator } from "@/components/image-generator/image-generator";
import { ImageDisplay } from "@/components/image-generator/image-display";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

export type GeneratedImage = {
  url: string;
  prompt: string;
  timestamp: number;
};

export default function TextToImagePage() {
  const [images, setImages] = useState<GeneratedImage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async (prompt: string) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/generate-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error("圖像生成失敗");
      }

      const data = await response.json();
      setImages((prev) => [
        {
          url: data.url,
          prompt,
          timestamp: Date.now(),
        },
        ...prev,
      ]);
    } catch (error) {
      toast.error("圖像生成失敗，請稍後再試。");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            AI 圖像生成器
          </h1>
          <p className="text-muted-foreground">
            使用 AI 將您的想法轉化為精美的視覺作品
          </p>
        </div>

        <Card className="p-6 mb-8">
          <ImageGenerator onGenerate={handleGenerate} isLoading={isLoading} />
        </Card>

        <ImageDisplay images={images} />
      </div>
    </div>
  );
}