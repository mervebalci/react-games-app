import genres from "../data/genres";
import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}


// Shipping static data
// const useGenres = () => ({ data: genres, isLoading: false, error: null });


// Fetching dynamic data from API
const useGenres = () => useData<Genre>("/genres");

export default useGenres;