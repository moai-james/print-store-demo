"use client";

import { BusinessCardData, CustomizationOptions } from "@/app/business-card/page";

interface TemplateProps {
  data: BusinessCardData;
  customization: CustomizationOptions;
}

export function BoldFrontTemplate({ data, customization }: TemplateProps) {
  return (
    <div
      className="w-full h-full relative overflow-hidden"
      style={{ backgroundColor: customization.primaryColor }}
    >
      <div
        className="absolute inset-0 p-6 flex flex-col justify-between"
        style={{ backgroundColor: customization.secondaryColor }}
      >
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold">{data.name}</h2>
            <p className="text-sm opacity-80">{data.jobTitle}</p>
          </div>
          {data.company.logo && (
            <div className="relative w-16 h-16">
              <img
                src={data.company.logo}
                alt={data.company.name}
                className="object-contain"
              />
            </div>
          )}
        </div>
        {data.company.name && (
          <p className="text-lg font-semibold">{data.company.name}</p>
        )}
      </div>
    </div>
  );
}

export function BoldBackTemplate({ data, customization }: TemplateProps) {
  return (
    <div
      className="w-full h-full p-6 flex flex-col justify-center space-y-3"
      style={{ backgroundColor: customization.primaryColor }}
    >
      <div
        className="rounded-lg p-6 space-y-2"
        style={{ backgroundColor: customization.secondaryColor }}
      >
        {data.phone && <p className="text-sm">📞 {data.phone}</p>}
        {data.email && <p className="text-sm">✉️ {data.email}</p>}
        {data.website && <p className="text-sm">🌐 {data.website}</p>}
        {data.company.address && (
          <p className="text-sm">📍 {data.company.address}</p>
        )}
      </div>
    </div>
  );
}