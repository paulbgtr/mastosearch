import { Request, Response } from "express";
import { categories } from "../data/categories";
import { getCategoryFromChatGpt } from "../api/chatGptApi";
import { getInstancesByCategory } from "../api/mastodonInstancesApi";

const openaiApiKey = process.env.OPENAI_API_KEY;
const mastodonInstancesApiKey = process.env.MASTODON_INSTANCES_API_KEY;

if (!openaiApiKey || !mastodonInstancesApiKey) {
  throw new Error("API keys not provided");
}

export const searchHandler = async (req: Request, res: Response) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: "Query not provided" });
  }

  try {
    const category = await getCategoryFromChatGpt(
      openaiApiKey,
      query,
      categories
    );
    console.log(category);

    const instances = await getInstancesByCategory(
      mastodonInstancesApiKey,
      category
    );
    res.json({ instances });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
