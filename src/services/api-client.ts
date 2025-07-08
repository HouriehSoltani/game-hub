import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1bfca1ef4db84f4182ef1ef2ae08990c",
  },
});
