import { json } from "@sveltejs/kit";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: "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",
});

export const POST = async ({ request }) => {
  const { url, style } = await request.json();

  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `what can i add to these for a ${style} outfit?`,
            },
            {
              type: "image_url",
              image_url: {
                url,
              },
            },
          ],
        },
      ],
      model: "llama-3.2-90b-vision-preview",
      temperature: 1,
      max_tokens: 1024,
      top_p: 1,
      stream: false,
      stop: null,
    });
    return json(chatCompletion.choices[0].message.content);
  } catch (error) {
    return json("error");
  }
};
