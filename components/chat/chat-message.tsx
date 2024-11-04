import { Message } from "./chat-context";
import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";

export function ChatMessage({ message }: { message: Message }) {
  const isBot = message.role === "assistant";

  return (
    <div
      className={cn(
        "flex items-start space-x-4 fade-in",
        isBot ? "justify-start" : "justify-end"
      )}
    >
      {isBot && (
        <div className="flex-shrink-0 rounded-full bg-primary/10 p-2">
          <Bot className="h-4 w-4" />
        </div>
      )}
      <div
        className={cn(
          "rounded-lg px-4 py-2 max-w-[80%] break-words",
          isBot
            ? "bg-muted text-foreground"
            : "bg-primary text-primary-foreground"
        )}
      >
        <p className="text-sm">{message.content}</p>
        <span className="text-xs opacity-50 mt-1 block">
          {new Date(message.timestamp).toLocaleTimeString()}
        </span>
      </div>
      {!isBot && (
        <div className="flex-shrink-0 rounded-full bg-primary p-2">
          <User className="h-4 w-4 text-primary-foreground" />
        </div>
      )}
    </div>
  );
}