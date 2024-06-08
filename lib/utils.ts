import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const GOOGLE_BOOKS_API_URL = "https://www.googleapis.com/books/v1/volumes";

export const searchBooks = async (query: string) => {
  const apiKey = process.env.GOOGLE_BOOKS_API_KEY;
  try {
    const response = await axios.get(GOOGLE_BOOKS_API_URL, {
      params: {
        q: query,
        key: apiKey,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data from Google Books API", error);
    throw error;
  }
};
