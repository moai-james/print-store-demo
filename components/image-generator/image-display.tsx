"use client";

import { useState } from "react";
import Image from "next/image";
import { Download, Share2, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { GeneratedImage } from "@/app/text-to-image/page";
import { toast } from "sonner";

interface ImageDisplayProps {
  images: GeneratedImage[];
}

export function ImageDisplay({ images }: ImageDisplayProps) {
  const [selectedImage, setSelectedImage] = useState<GeneratedImage | null>(null);

  const handleDownload = async (url: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `generated-image-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      toast.error("下載圖像失敗");
    }
  };

  const handleShare = async (url: string) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "AI 生成圖像",
          text: "看看這張 AI 生成的圖像！",
          url: url,
        });
      } else {
        await navigator.clipboard.writeText(url);
        toast.success("圖像連結已複製到剪貼簿！");
      }
    } catch (error) {
      toast.error("分享圖像失敗");
    }
  };

  if (images.length === 0) {
    return (
      <div className="text-center py-12 bg-muted/50 rounded-lg">
        <p className="text-muted-foreground">
          尚未生成任何圖像。請在上方輸入描述開始生成！
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">已生成的圖像</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={image.timestamp}
            className="relative group rounded-lg overflow-hidden bg-muted aspect-square"
          >
            <Image
              src={image.url}
              alt={image.prompt}
              fill
              className="object-cover transition-all duration-300 group-hover:scale-105 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
              <Button
                size="icon"
                variant="ghost"
                className="text-white hover:text-white hover:bg-white/20"
                onClick={() => handleDownload(image.url)}
              >
                <Download className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-white hover:text-white hover:bg-white/20"
                onClick={() => handleShare(image.url)}
              >
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-lg">生成的圖像</DialogTitle>
          </DialogHeader>
          {selectedImage && (
            <div className="space-y-4">
              <div className="relative aspect-square">
                <Image
                  src={selectedImage.url}
                  alt={selectedImage.prompt}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                提示詞：{selectedImage.prompt}
              </p>
              <div className="flex justify-end gap-2">
                <Button
                  variant="outline"
                  onClick={() => handleDownload(selectedImage.url)}
                >
                  <Download className="mr-2 h-4 w-4" />
                  下載
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleShare(selectedImage.url)}
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  分享
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}