"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MessageSquare, Image, CreditCard, Maximize } from "lucide-react";
import { useParams } from "next/navigation";

const getFeatures = (locale: string) => {
  const translations = {
    en: {
      features: [
        {
          icon: <MessageSquare className="h-10 w-10" />,
          title: "AI Chatbot",
          description: "Intelligent customer support automation with natural language processing",
          href: "/chatbot",
        },
        {
          icon: <Image className="h-10 w-10" />,
          title: "Text to Image",
          description: "Transform your ideas into stunning visuals with AI-powered image generation",
          href: "/text-to-image",
        },
        {
          icon: <CreditCard className="h-10 w-10" />,
          title: "Business Card Designer",
          description: "Create professional business cards instantly with AI design assistance",
          href: "/business-card",
        },
        {
          icon: <Maximize className="h-10 w-10" />,
          title: "Image Enhancer",
          description: "Upgrade your images with AI-powered resolution enhancement",
          href: "/image-enhancer",
        },
      ],
      cta: {
        title: "Ready to Get Started?",
        description: "Choose any of our AI demos and experience the power of artificial intelligence firsthand.",
        button: "Contact Us",
      },
    },
    "zh-TW": {
      features: [
        {
          icon: <MessageSquare className="h-10 w-10" />,
          title: "AI 聊天機器人",
          description: "智能客戶支援自動化，具備自然語言處理能力",
          href: "/chatbot",
        },
        {
          icon: <Image className="h-10 w-10" />,
          title: "文字生成圖像",
          description: "使用 AI 將您的想法轉化為令人驚嘆的視覺效果",
          href: "/text-to-image",
        },
        {
          icon: <CreditCard className="h-10 w-10" />,
          title: "名片設計師",
          description: "使用 AI 設計協助，即時創建專業名片",
          href: "/business-card",
        },
        {
          icon: <Maximize className="h-10 w-10" />,
          title: "圖像增強器",
          description: "使用 AI 技術提升圖像解析度",
          href: "/image-enhancer",
        },
      ],
      cta: {
        title: "準備開始了嗎？",
        description: "選擇任何一個 AI 演示，親身體驗人工智能的強大功能。",
        button: "聯絡我們",
      },
    },
  };

  return translations[locale as keyof typeof translations] || translations.en;
};

export function Features() {
  const params = useParams();
  const locale = params.locale as string;
  const t = getFeatures(locale);

  return (
    <>
      <section id="demos" className="container px-4 py-12 md:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.features.map((feature) => (
            <Card key={feature.title} className="transition-all hover:shadow-lg">
              <Link href={`/${locale}${feature.href}`}>
                <CardHeader>
                  <div className="p-2 w-fit rounded-lg bg-primary/10">
                    {feature.icon}
                  </div>
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full">
                    {locale === "zh-TW" ? "立即體驗 →" : "Try Demo →"}
                  </Button>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {t.cta.title}
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                {t.cta.description}
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href={`/${locale}/contact`}>
                  {t.cta.button}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}