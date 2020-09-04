import { useQuery } from "react-query";
import axios from "axios";
import { baseUrl } from "../settings";

export function useJobs() {
  return useQuery("jobs", async () => {
    const { data } = await axios.get(baseUrl);
    return data;
  });
}
