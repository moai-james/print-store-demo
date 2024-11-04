"use client";

import { BusinessCardData, CustomizationOptions } from "@/app/business-card/page";

interface TemplateProps {
  data: BusinessCardData;
  customization: CustomizationOptions;
}

export function MinimalFrontTemplate({ data, customization }: TemplateProps) {
  return (
    <div className="w-full h-full p-6 flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-light">{data.name}</h2>
        <p className="text-sm opacity-80">{data.jobTitle}</p>
        {data.company.name && (
          <p className="text-sm mt-2">{data.company.name}</p>
        )}
      </div>
      {data.company.logo && (
        <div className="relative w-12 h-12">
          <img
            src={data.company.logo}
            alt={data.company.name}
            className="object-contain"
          />
        </div>
      )}
    </div>
  );
}

export function MinimalBackTemplate({ data }: TemplateProps) {
  return (
    <div className="w-full h-full p-6 grid grid-cols-2 gap-4">
      <div className="space-y-2">
        {data.phone && <p className="text-sm">{data.phone}</p>}
        {data.email && <p className="text-sm">{data.email}</p>}
      </div>
      <div className="space-y-2 text-right">
        {data.website && <p className="text-sm">{data.website}</p>}
        {data.company.address && (
          <p className="text-sm">{data.company.address}</p>
        )}
      </div>
    </div>
  );
}