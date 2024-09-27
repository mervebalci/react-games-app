import platforms from "../data/platforms";
import useData from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}


// Shipping static data
// const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });


// Fetching dynamic data from API
const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;