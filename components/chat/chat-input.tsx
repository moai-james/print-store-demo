"use client";

import { useState } from "react";
import { useChat } from "./chat-context";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { SendHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export function ChatInput() {
  const [input, setInput] = useState("");
  const { state, dispatch } = useChat();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      role: "user" as const,
      content: input.trim(),
      timestamp: Date.now(),
    };

    dispatch({ type: "ADD_MESSAGE", message: userMessage });
    dispatch({ type: "SET_LOADING", isLoading: true });
    setInput("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...state.messages, userMessage].map(({ role, content }) => ({
            role,
            content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error('回應失敗');
      }

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }

      dispatch({ type: "ADD_MESSAGE", message: data });
    } catch (error: any) {
      toast.error("無法取得回應，請稍後再試。");
      console.error("聊天錯誤:", error);
    } finally {
      dispatch({ type: "SET_LOADING", isLoading: false });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-end space-x-2">
      <div className="flex-1">
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="詢問關於我們的印刷服務..."
          className="min-h-[60px] resize-none"
          rows={1}
        />
      </div>
      <Button 
        type="submit" 
        disabled={!input.trim()}
        className={cn(
          "transition-all duration-200",
          !input.trim() && "opacity-50 cursor-not-allowed"
        )}
      >
        <SendHorizontal className="h-4 w-4" />
        <span className="sr-only">發送訊息</span>
      </Button>
    </form>
  );
}