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

const features = [
  {
    icon: <MessageSquare className="h-10 w-10" />,
    title: "AI 聊天機器人",
    description: "透過自然語言處理技術，提供智能客戶支援服務",
    href: "/chatbot",
  },
  {
    icon: <Image className="h-10 w-10" />,
    title: "文字生成圖像",
    description: "運用 AI 技術，將您的文字描述轉換成精美的視覺作品",
    href: "/text-to-image",
  },
  {
    icon: <CreditCard className="h-10 w-10" />,
    title: "名片設計工具",
    description: "使用 AI 輔助，快速製作專業的名片設計",
    href: "/business-card",
  },
  {
    icon: <Maximize className="h-10 w-10" />,
    title: "圖像優化工具",
    description: "透過 AI 技術提升圖像品質與解析度",
    href: "/image-enhancer",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                體驗 AI 的未來
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                探索我們的尖端 AI 示範，展示人工智能在實際應用中的強大功能。
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="#demos">
                  探索示範
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">
                  了解更多
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="demos" className="container px-4 py-12 md:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="transition-all hover:shadow-lg">
              <Link href={feature.href}>
                <CardHeader>
                  <div className="p-2 w-fit rounded-lg bg-primary/10">
                    {feature.icon}
                  </div>
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full">
                    立即體驗 →
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
                準備開始了嗎？
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                選擇任何一個 AI 示範，親身體驗人工智能的強大功能。
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild size="lg">
                <Link href="/contact">
                  聯絡我們
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}