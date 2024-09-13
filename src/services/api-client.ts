import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ac9be689b7594757b046753e358c54ca",
  },
});