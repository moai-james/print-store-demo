"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Upload, Image as ImageIcon, Download } from "lucide-react";

export default function ImageEnhancer() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [enhancedImage, setEnhancedImage] = useState<string | null>(null);
  const [scale, setScale] = useState(2);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setEnhancedImage(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const enhanceImage = async () => {
    // Placeholder for actual enhancement logic
    setEnhancedImage(selectedImage);
  };

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">AI Image Enhancer</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Upload Image</h2>
            <div className="space-y-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="image">Image</Label>
                <Input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </div>
              
              <div className="space-y-2">
                <Label>Enhancement Scale ({scale}x)</Label>
                <Slider
                  value={[scale]}
                  min={1}
                  max={4}
                  step={0.5}
                  onValueChange={([value]) => setScale(value)}
                />
              </div>

              <Button
                className="w-full"
                onClick={enhanceImage}
                disabled={!selectedImage}
              >
                <ImageIcon className="w-4 h-4 mr-2" />
                Enhance Image
              </Button>
            </div>

            {selectedImage && (
              <div className="mt-4">
                <p className="text-sm text-muted-foreground mb-2">Original Image</p>
                <div className="relative aspect-video rounded-lg overflow-hidden border">
                  <img
                    src={selectedImage}
                    alt="Original"
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            )}
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Enhanced Result</h2>
            {enhancedImage ? (
              <div className="space-y-4">
                <div className="relative aspect-video rounded-lg overflow-hidden border">
                  <img
                    src={enhancedImage}
                    alt="Enhanced"
                    className="object-contain w-full h-full"
                  />
                </div>
                <Button className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Enhanced Image
                </Button>
              </div>
            ) : (
              <div className="aspect-video rounded-lg border border-dashed flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <Upload className="w-8 h-8 mx-auto mb-2" />
                  <p>Enhanced image will appear here</p>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}