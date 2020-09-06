import { useQuery } from "react-query";
import axios from "axios";
import { baseUrl } from "../settings";

export function useJobs(pageNumber) {
  let url = baseUrl;
  url += `positions.json?page=${pageNumber}`;
  return useQuery("jobs", async () => {
    const { data } = await axios.get(url);
    return data;
  });
}
