import { BusinessCardData, CustomizationOptions } from "@/app/business-card/page";
import {
  ModernFrontTemplate,
  ModernBackTemplate,
} from "@/components/business-card/templates/modern-template";
import {
  MinimalFrontTemplate,
  MinimalBackTemplate,
} from "@/components/business-card/templates/minimal-template";
import {
  BoldFrontTemplate,
  BoldBackTemplate,
} from "@/components/business-card/templates/bold-template";

interface Template {
  name: string;
  preview: string;
  FrontTemplate: React.FC<{
    data: BusinessCardData;
    customization: CustomizationOptions;
  }>;
  BackTemplate: React.FC<{
    data: BusinessCardData;
    customization: CustomizationOptions;
  }>;
}

export const templates: Record<string, Template> = {
  modern: {
    name: "Modern",
    preview: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=200",
    FrontTemplate: ModernFrontTemplate,
    BackTemplate: ModernBackTemplate,
  },
  minimal: {
    name: "Minimal",
    preview: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=200",
    FrontTemplate: MinimalFrontTemplate,
    BackTemplate: MinimalBackTemplate,
  },
  bold: {
    name: "Bold",
    preview: "https://images.unsplash.com/photo-1606293926075-69a00dbfde81?q=80&w=200",
    FrontTemplate: BoldFrontTemplate,
    BackTemplate: BoldBackTemplate,
  },
};