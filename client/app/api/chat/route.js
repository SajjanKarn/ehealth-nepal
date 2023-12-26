import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

const openai = new OpenAI({
  apiKey: "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",
});

export const runtime = 'edge';

export async function POST(req) {
  const { messages } = await req.json();
  const content = messages[messages.length - 1].content
  messages[messages.length - 1].content = "You are dermatology specialist. Your response must be like a dermat. Here is the input from user " + content

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages,
  });
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}