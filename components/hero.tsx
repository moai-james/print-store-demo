"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";

export function Hero() {
  const params = useParams();
  const locale = params.locale as string;

  const translations = {
    en: {
      title: "Experience the Future of AI",
      description: "Explore our collection of cutting-edge AI demos showcasing the power of artificial intelligence in real-world applications.",
      exploreDemos: "Explore Demos",
      learnMore: "Learn More"
    },
    "zh-TW": {
      title: "體驗 AI 的未來",
      description: "探索我們的尖端 AI 演示，展示人工智能在現實應用中的強大功能。",
      exploreDemos: "探索演示",
      learnMore: "了解更多"
    }
  };

  const t = translations[locale as keyof typeof translations] || translations.en;

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              {t.title}
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              {t.description}
            </p>
          </div>
          <div className="space-x-4">
            <Button asChild size="lg">
              <Link href="#demos">
                {t.exploreDemos}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={`/${locale}/about`}>
                {t.learnMore}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}