"use client";

import { BusinessCardData, CustomizationOptions } from "@/app/business-card/page";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { templates } from "@/lib/business-card-templates";
import { Download, Share2, RotateCw } from "lucide-react";
import { toast } from "sonner";

interface BusinessCardPreviewProps {
  data: BusinessCardData;
  customization: CustomizationOptions;
  activeView: "front" | "back";
  onViewChange: (view: "front" | "back") => void;
}

export function BusinessCardPreview({
  data,
  customization,
  activeView,
  onViewChange,
}: BusinessCardPreviewProps) {
  const template = templates[customization.template];

  const handleDownload = () => {
    toast.info("Download functionality will be implemented soon!");
  };

  const handleShare = () => {
    toast.info("Share functionality will be implemented soon!");
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Preview</h2>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewChange(activeView === "front" ? "back" : "front")}
          >
            <RotateCw className="h-4 w-4 mr-2" />
            {activeView === "front" ? "Show Back" : "Show Front"}
          </Button>
          <Button variant="outline" size="sm" onClick={handleShare}>
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
          <Button variant="default" size="sm" onClick={handleDownload}>
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
        </div>
      </div>

      <Card className="p-6 bg-muted">
        <div
          className="w-full aspect-[1.75] rounded-lg shadow-lg overflow-hidden"
          style={{
            backgroundColor: customization.secondaryColor,
            color: customization.primaryColor,
            fontFamily: customization.fontFamily,
          }}
        >
          {activeView === "front" ? (
            <template.FrontTemplate
              data={data}
              customization={customization}
            />
          ) : (
            <template.BackTemplate
              data={data}
              customization={customization}
            />
          )}
        </div>
      </Card>

      <div className="text-sm text-muted-foreground text-center">
        <p>Standard business card size: 3.5" × 2"</p>
        <p>Click the rotate button to view both sides</p>
      </div>
    </div>
  );
}