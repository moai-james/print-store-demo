"use client";

import { ChatInterface } from "@/components/chat/chat-interface";
import { ChatProvider } from "@/components/chat/chat-context";

export default function ChatbotPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight mb-2">印刷服務助手</h1>
          <p className="text-muted-foreground">
            歡迎詢問任何關於我們的印刷服務、價格或材料的問題
          </p>
        </div>
        <ChatProvider>
          <ChatInterface />
        </ChatProvider>
      </div>
    </div>
  );
}