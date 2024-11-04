"use client";

import { BusinessCardData, CustomizationOptions } from "@/app/business-card/page";

interface TemplateProps {
  data: BusinessCardData;
  customization: CustomizationOptions;
}

export function ModernFrontTemplate({ data, customization }: TemplateProps) {
  return (
    <div className="w-full h-full p-6 flex flex-col justify-between">
      {data.company.logo && (
        <div className="relative w-16 h-16">
          <img
            src={data.company.logo}
            alt={data.company.name}
            className="object-contain"
          />
        </div>
      )}
      <div>
        <h2 className="text-2xl font-bold">{data.name}</h2>
        <p className="text-sm opacity-80">{data.jobTitle}</p>
        {data.company.name && (
          <p className="text-sm mt-1">{data.company.name}</p>
        )}
      </div>
    </div>
  );
}

export function ModernBackTemplate({ data }: TemplateProps) {
  return (
    <div className="w-full h-full p-6 flex flex-col justify-center space-y-2">
      {data.phone && <p className="text-sm">📞 {data.phone}</p>}
      {data.email && <p className="text-sm">✉️ {data.email}</p>}
      {data.website && <p className="text-sm">🌐 {data.website}</p>}
      {data.company.address && (
        <p className="text-sm">📍 {data.company.address}</p>
      )}
    </div>
  );
}