import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform} [];
}
/* parent_platform is not Platform[] array.
It is an array of objects where each object has a property called platform of type Platform. */

interface FetchGamesResponse {
  count: number; 
  results: Game[];
}

export default function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  // Using the Effect hook to send a fetch request to the backend
  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>("./games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)});

    return () => controller.abort();
  }, []);

  return { games, error };
};