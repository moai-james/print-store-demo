"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";

interface TemplateSelectorProps {
  templates: Record<string, any>;
  selected: string;
  onSelect: (template: string) => void;
}

export function TemplateSelector({
  templates,
  selected,
  onSelect,
}: TemplateSelectorProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {Object.entries(templates).map(([id, template]) => (
        <Card
          key={id}
          className={cn(
            "relative cursor-pointer overflow-hidden transition-all hover:ring-2 hover:ring-primary/50",
            selected === id && "ring-2 ring-primary"
          )}
          onClick={() => onSelect(id)}
        >
          <div className="aspect-[1.75] relative">
            <Image
              src={template.preview}
              alt={template.name}
              fill
              className="object-cover"
            />
          </div>
          {selected === id && (
            <div className="absolute top-2 right-2 h-5 w-5 bg-primary rounded-full flex items-center justify-center">
              <Check className="h-3 w-3 text-primary-foreground" />
            </div>
          )}
          <div className="p-2 text-center text-sm font-medium">
            {template.name}
          </div>
        </Card>
      ))}
    </div>
  );
}