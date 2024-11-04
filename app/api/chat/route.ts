import { NextResponse } from 'next/server';
import { openai, printShopSystemPrompt } from '@/lib/openai';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: printShopSystemPrompt },
        ...messages.map((msg: any) => ({
          role: msg.role,
          content: msg.content,
        })),
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    return NextResponse.json({
      id: response.id,
      role: "assistant",
      content: response.choices[0].message.content,
      timestamp: Date.now(),
    });
  } catch (error: any) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'Failed to get response from OpenAI' },
      { status: 500 }
    );
  }
}