"use client";

import { BusinessCardData } from "@/app/business-card/page";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FileUpload } from "@/components/business-card/file-upload";

interface BusinessCardFormProps {
  data: BusinessCardData;
  onChange: (data: BusinessCardData) => void;
}

export function BusinessCardForm({ data, onChange }: BusinessCardFormProps) {
  const handleChange = (
    field: string,
    value: string,
    section?: string,
    subfield?: string
  ) => {
    if (section && subfield) {
      onChange({
        ...data,
        [section]: {
          ...data[section as keyof BusinessCardData],
          [subfield]: value,
        },
      });
    } else {
      onChange({
        ...data,
        [field]: value,
      });
    }
  };

  return (
    <div className="space-y-6">
      <Accordion type="single" collapsible defaultValue="personal">
        <AccordionItem value="personal">
          <AccordionTrigger>Personal Information</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={data.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="jobTitle">Job Title</Label>
                <Input
                  id="jobTitle"
                  value={data.jobTitle}
                  onChange={(e) => handleChange("jobTitle", e.target.value)}
                  placeholder="Software Engineer"
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="contact">
          <AccordionTrigger>Contact Information</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={data.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={data.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website (Optional)</Label>
                <Input
                  id="website"
                  type="url"
                  value={data.website}
                  onChange={(e) => handleChange("website", e.target.value)}
                  placeholder="https://example.com"
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="social">
          <AccordionTrigger>Social Media</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn Profile</Label>
                <Input
                  id="linkedin"
                  value={data.socialLinks.linkedin}
                  onChange={(e) =>
                    handleChange("socialLinks", e.target.value, "linkedin")
                  }
                  placeholder="linkedin.com/in/johndoe"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="twitter">Twitter Handle</Label>
                <Input
                  id="twitter"
                  value={data.socialLinks.twitter}
                  onChange={(e) =>
                    handleChange("socialLinks", e.target.value, "twitter")
                  }
                  placeholder="@johndoe"
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="company">
          <AccordionTrigger>Company Information</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  value={data.company.name}
                  onChange={(e) =>
                    handleChange("company", e.target.value, "name")
                  }
                  placeholder="Acme Inc."
                />
              </div>
              <div className="space-y-2">
                <Label>Company Logo</Label>
                <FileUpload
                  value={data.company.logo}
                  onChange={(value) =>
                    handleChange("company", value, "logo")
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="companyAddress">Company Address</Label>
                <Textarea
                  id="companyAddress"
                  value={data.company.address}
                  onChange={(e) =>
                    handleChange("company", e.target.value, "address")
                  }
                  placeholder="123 Business St, Suite 100&#10;City, State 12345"
                  rows={3}
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="additional">
          <AccordionTrigger>Additional Information</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <Label htmlFor="additionalInfo">Additional Details</Label>
              <Textarea
                id="additionalInfo"
                value={data.additionalInfo}
                onChange={(e) => handleChange("additionalInfo", e.target.value)}
                placeholder="Add a slogan, tagline, or any other information..."
                rows={3}
              />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}