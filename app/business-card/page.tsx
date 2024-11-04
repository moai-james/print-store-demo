"use client";

import { useState } from "react";
import { BusinessCardForm } from "@/components/business-card/business-card-form";
import { BusinessCardPreview } from "@/components/business-card/business-card-preview";
import { TemplateSelector } from "@/components/business-card/template-selector";
import { CustomizationPanel } from "@/components/business-card/customization-panel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { templates } from "@/lib/business-card-templates";

export type BusinessCardData = {
  name: string;
  jobTitle: string;
  phone: string;
  email: string;
  website: string;
  socialLinks: {
    linkedin: string;
    twitter: string;
  };
  company: {
    name: string;
    logo: string;
    address: string;
  };
  additionalInfo: string;
};

export type CustomizationOptions = {
  template: string;
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
  fontSize: number;
};

const defaultCardData: BusinessCardData = {
  name: "",
  jobTitle: "",
  phone: "",
  email: "",
  website: "",
  socialLinks: {
    linkedin: "",
    twitter: "",
  },
  company: {
    name: "",
    logo: "",
    address: "",
  },
  additionalInfo: "",
};

const defaultCustomization: CustomizationOptions = {
  template: "modern",
  primaryColor: "#1d4ed8",
  secondaryColor: "#ffffff",
  fontFamily: "inter",
  fontSize: 14,
};

export default function BusinessCardPage() {
  const [cardData, setCardData] = useState<BusinessCardData>(defaultCardData);
  const [customization, setCustomization] = useState<CustomizationOptions>(defaultCustomization);
  const [activeView, setActiveView] = useState<"front" | "back">("front");

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tight mb-2">
          Business Card Designer
        </h1>
        <p className="text-muted-foreground">
          Create professional business cards with our easy-to-use designer
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card className="p-6">
            <Tabs defaultValue="info" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-4">
                <TabsTrigger value="info">Information</TabsTrigger>
                <TabsTrigger value="template">Template</TabsTrigger>
                <TabsTrigger value="customize">Customize</TabsTrigger>
              </TabsList>
              <TabsContent value="info">
                <BusinessCardForm
                  data={cardData}
                  onChange={setCardData}
                />
              </TabsContent>
              <TabsContent value="template">
                <TemplateSelector
                  templates={templates}
                  selected={customization.template}
                  onSelect={(template) =>
                    setCustomization({ ...customization, template })
                  }
                />
              </TabsContent>
              <TabsContent value="customize">
                <CustomizationPanel
                  options={customization}
                  onChange={setCustomization}
                />
              </TabsContent>
            </Tabs>
          </Card>
        </div>

        <div className="lg:sticky lg:top-24 space-y-6">
          <BusinessCardPreview
            data={cardData}
            customization={customization}
            activeView={activeView}
            onViewChange={setActiveView}
          />
        </div>
      </div>
    </div>
  );
}