import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const app: Express = express();
const port = 8080;

app.use(express.json());

const openaiApiKey = process.env.OPENAI_API_KEY;
const mastodonInstancesApiKey = process.env.MASTODON_INSTANCES_API_KEY;

if (!openaiApiKey || !mastodonInstancesApiKey) {
  throw new Error("API keys not provided");
}

interface GenericResponse {
  [key: string]: any;
}

app.post("/search", async (req: Request, res: Response) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ error: "Query not provided" });
  }

  const categories = [
    "tech",
    "lgbt",
    "science",
    "art",
    "gaming",
    "music",
    "books",
    "news",
    "furry",
    "academic",
    "regional",
    "activism",
    "hobbies",
    "culture",
    "geek",
    "social",
    "general",
    "memes",
    "linux",
    "environment",
    "travel",
    "food",
    "health",
    "fitness",
    "movies",
    "tv",
    "spirituality",
    "parenting",
    "photography",
    "writing",
    "education",
    "sports",
    "politics",
    "animals",
  ];

  try {
    const fetchResponse = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openaiApiKey}`,
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
    const category = jsonResponse.choices[0].message.content.toLowerCase();

    console.log(category);

    const apiUrl = "https://instances.social/api/1.0/instances/list";
    const apiRes = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${mastodonInstancesApiKey}`,
      },
      params: {
        category: category,
      },
    });
    const instancesData = apiRes.data;

    const instances = instancesData.instances || [];

    res.json({ instances });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
