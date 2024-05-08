import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bd8ad14eb9634301aba4124070988d4c",
  },
});
