import type { GenericResponse } from "../types/GenericResponse";

export const getCategoryFromChatGpt = async (
  apiKey: string,
  query: string,
  categories: string[]
) => {
  const fetchResponse = await fetch(
    "https://api.openai.com/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          {
            role: "user",
            content: `Based on this user input: '${query}', suggest a single relevant category from this list: [${categories.join(
              ", "
            )}]. Return only one word from the list that best matches the user input. Don't change the words and return a single word as it is.`,
          },
        ],
      }),
    }
  );

  const jsonResponse = (await fetchResponse.json()) as GenericResponse;
  return jsonResponse.choices[0].message.content.toLowerCase();
};
