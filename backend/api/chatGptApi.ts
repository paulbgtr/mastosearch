import type { GenericResponse } from "../types/GenericResponse";
import { NotFoundError } from "../utils/CustomError";

/**
 * A function that uses the OpenAI Chat API to get a category from a user query.
 * It uses a custom prompt to get a single category from a list of categories.
 *
 * The prompt basically asks the AI to suggest a single relevant category from a list of categories. If the query doesn't match any category, it returns 'not-found'.
 *
 * If the category is not found, it throws a `NotFoundError`.
 *
 * @param apiKey
 * @param query
 * @param categories
 * @returns A string that represents a category of Mastodon instances
 */
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
            )}]. Return only one word from the list that best matches the user input. Don't change the words and return a single word as it is.
                If the query doesn't match any category, return 'not-found'.
            `,
          },
        ],
      }),
    }
  );

  const jsonResponse = (await fetchResponse.json()) as GenericResponse;
  const category = jsonResponse.choices[0].message.content.toLowerCase();

  if (!categories.includes(category)) {
    throw new NotFoundError("Category not found");
  }

  return category;
};
