"use client";

import { BusinessCardData } from "@/app/business-card/page";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface BusinessCardFormProps {
  data: BusinessCardData;
  onChange: (data: BusinessCardData) => void;
}

export function BusinessCardForm({ data, onChange }: BusinessCardFormProps) {
  const handleNestedChange = (
    section: keyof BusinessCardData,
    subfield: string,
    value: string
  ) => {
    // Type guard to ensure we're working with an object
    const sectionData = data[section];
    if (typeof sectionData === 'object' && sectionData !== null) {
      onChange({
        ...data,
        [section]: {
          ...sectionData,
          [subfield]: value,
        },
      });
    }
  };

  return (
    <div className="space-y-6">
      {/* Basic Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">基本資訊</h3>
        <div className="grid gap-4">
          <div>
            <Label htmlFor="name">姓名</Label>
            <Input
              id="name"
              value={data.name}
              onChange={(e) => onChange({ ...data, name: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="jobTitle">職稱</Label>
            <Input
              id="jobTitle"
              value={data.jobTitle}
              onChange={(e) => onChange({ ...data, jobTitle: e.target.value })}
            />
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">聯絡資訊</h3>
        <div className="grid gap-4">
          <div>
            <Label htmlFor="phone">電話</Label>
            <Input
              id="phone"
              value={data.phone}
              onChange={(e) => onChange({ ...data, phone: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="email">電子郵件</Label>
            <Input
              id="email"
              value={data.email}
              onChange={(e) => onChange({ ...data, email: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="website">網站</Label>
            <Input
              id="website"
              value={data.website}
              onChange={(e) => onChange({ ...data, website: e.target.value })}
            />
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">社群連結</h3>
        <div className="grid gap-4">
          <div>
            <Label htmlFor="linkedin">LinkedIn</Label>
            <Input
              id="linkedin"
              value={data.socialLinks.linkedin}
              onChange={(e) =>
                handleNestedChange("socialLinks", "linkedin", e.target.value)
              }
            />
          </div>
          <div>
            <Label htmlFor="twitter">Twitter</Label>
            <Input
              id="twitter"
              value={data.socialLinks.twitter}
              onChange={(e) =>
                handleNestedChange("socialLinks", "twitter", e.target.value)
              }
            />
          </div>
        </div>
      </div>

      {/* Company Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">公司資訊</h3>
        <div className="grid gap-4">
          <div>
            <Label htmlFor="companyName">公司名稱</Label>
            <Input
              id="companyName"
              value={data.company.name}
              onChange={(e) =>
                handleNestedChange("company", "name", e.target.value)
              }
            />
          </div>
          <div>
            <Label htmlFor="companyLogo">公司標誌 URL</Label>
            <Input
              id="companyLogo"
              value={data.company.logo}
              onChange={(e) =>
                handleNestedChange("company", "logo", e.target.value)
              }
            />
          </div>
          <div>
            <Label htmlFor="companyAddress">公司地址</Label>
            <Input
              id="companyAddress"
              value={data.company.address}
              onChange={(e) =>
                handleNestedChange("company", "address", e.target.value)
              }
            />
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">其他資訊</h3>
        <div>
          <Label htmlFor="additionalInfo">補充資訊</Label>
          <Input
            id="additionalInfo"
            value={data.additionalInfo}
            onChange={(e) => onChange({ ...data, additionalInfo: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
}