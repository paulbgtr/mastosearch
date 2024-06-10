import { Request, Response, Next } from "express";
import { categories } from "../data/categories";
import { getCategoryFromChatGpt } from "../api/chatGptApi";
import { MastodonInstancesAPI } from "../api/mastodonInstancesApi";
import { BadRequestError } from "../utils/CustomError";

const openaiApiKey = process.env.OPENAI_API_KEY;
const mastodonInstancesApiKey = process.env.MASTODON_INSTANCES_API_KEY;

if (!openaiApiKey || !mastodonInstancesApiKey) {
  throw new Error("API keys not provided");
}

const mastodonInstancesAPI = new MastodonInstancesAPI(mastodonInstancesApiKey);

/**
 * A handler that searches for Mastodon instances based on a user query.
 *
 * If the query is not provided, it throws a `BadRequestError`.
 *
 * @param req
 * @param res
 * @returns A list of Mastodon instances that belong to a specific category.
 */
export const searchHandler = async (
  req: Request,
  res: Response,
  next: Next
) => {
  const { query } = req.body;

  if (!query) {
    return next(new BadRequestError("Query not provided"));
  }

  try {
    const category = await getCategoryFromChatGpt(
      openaiApiKey,
      query,
      categories
    );

    const instances =
      await mastodonInstancesAPI.getInstancesByCategory(category);
    res.json({ instances });
  } catch (err) {
    next(err);
  }
};
