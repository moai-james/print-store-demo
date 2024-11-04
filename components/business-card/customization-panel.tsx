"use client";

import { CustomizationOptions } from "@/app/business-card/page";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";

interface CustomizationPanelProps {
  options: CustomizationOptions;
  onChange: (options: CustomizationOptions) => void;
}

const fonts = [
  { value: "inter", label: "Inter" },
  { value: "roboto", label: "Roboto" },
  { value: "poppins", label: "Poppins" },
  { value: "playfair", label: "Playfair Display" },
];

export function CustomizationPanel({
  options,
  onChange,
}: CustomizationPanelProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label>Primary Color</Label>
        <div className="flex gap-2">
          <div className="flex-1">
            <Input
              type="text"
              value={options.primaryColor}
              onChange={(e) =>
                onChange({ ...options, primaryColor: e.target.value })
              }
            />
          </div>
          <Input
            type="color"
            value={options.primaryColor}
            onChange={(e) =>
              onChange({ ...options, primaryColor: e.target.value })
            }
            className="w-12 h-10 p-1"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Secondary Color</Label>
        <div className="flex gap-2">
          <div className="flex-1">
            <Input
              type="text"
              value={options.secondaryColor}
              onChange={(e) =>
                onChange({ ...options, secondaryColor: e.target.value })
              }
            />
          </div>
          <Input
            type="color"
            value={options.secondaryColor}
            onChange={(e) =>
              onChange({ ...options, secondaryColor: e.target.value })
            }
            className="w-12 h-10 p-1"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Font Family</Label>
        <Select
          value={options.fontFamily}
          onValueChange={(value) => onChange({ ...options, fontFamily: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a font" />
          </SelectTrigger>
          <SelectContent>
            {fonts.map((font) => (
              <SelectItem key={font.value} value={font.value}>
                {font.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>Font Size</Label>
        <div className="flex items-center gap-4">
          <Slider
            value={[options.fontSize]}
            min={10}
            max={24}
            step={1}
            onValueChange={([value]) =>
              onChange({ ...options, fontSize: value })
            }
            className="flex-1"
          />
          <span className="text-sm tabular-nums">
            {options.fontSize}px
          </span>
        </div>
      </div>
    </div>
  );
}