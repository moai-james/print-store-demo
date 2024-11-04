"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { BusinessCardData, CustomizationOptions } from "./page";
import { templates } from "@/lib/business-card-templates";
import { cn } from "@/lib/utils";

interface PreviewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  data: BusinessCardData;
  customization: CustomizationOptions;
  selectedTemplate: string;
}

export function PreviewDialog({
  open,
  onOpenChange,
  data,
  customization,
  selectedTemplate,
}: PreviewDialogProps) {
  const template = templates[selectedTemplate];

  if (!template) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl">
        <DialogTitle>Business Card Preview</DialogTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
          <div
            className={cn(
              "w-full aspect-[1.75] rounded-lg overflow-hidden shadow-lg",
              "border border-border"
            )}
          >
            <template.FrontTemplate data={data} customization={customization} />
          </div>
          <div
            className={cn(
              "w-full aspect-[1.75] rounded-lg overflow-hidden shadow-lg",
              "border border-border"
            )}
          >
            <template.BackTemplate data={data} customization={customization} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}