import type { NextApiRequest, NextApiResponse } from "next";
import { searchBooks } from "@/lib/utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req.query;
  if (!query || typeof query !== "string") {
    res.status(400).json({ error: "Invalid query parameter" });
    return;
  }

  try {
    const data = await searchBooks(query);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch books" });
  }
}
