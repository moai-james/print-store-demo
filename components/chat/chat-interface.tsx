"use client";

import { useRef, useEffect } from "react";
import { useChat } from "./chat-context";
import { ChatInput } from "./chat-input";
import { ChatMessage } from "./chat-message";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

export function ChatInterface() {
  const { state, dispatch } = useChat();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [state.messages]);

  const handleClearChat = () => {
    dispatch({ type: "CLEAR_CHAT" });
  };

  return (
    <div className="flex flex-col rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-semibold">對話紀錄</span>
          {state.messages.length > 0 && (
            <span className="text-xs text-muted-foreground">
              ({state.messages.length} 則訊息)
            </span>
          )}
        </div>
        {state.messages.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClearChat}
            className="text-muted-foreground hover:text-destructive"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            清除對話
          </Button>
        )}
      </div>
      
      <ScrollArea className="flex-1 h-[500px] p-4" ref={scrollRef}>
        <div className="space-y-4">
          {state.messages.length === 0 ? (
            <div className="text-center text-muted-foreground py-8">
              <p>尚未開始對話，請輸入您的問題！</p>
            </div>
          ) : (
            state.messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))
          )}
          {state.isLoading && <ChatMessage message={{
            id: "loading",
            role: "assistant",
            content: "思考中...",
            timestamp: Date.now(),
          }} />}
        </div>
      </ScrollArea>

      <div className="border-t p-4">
        <ChatInput />
      </div>
    </div>
  );
}