import { useQuery } from "react-query";
import axios from "axios";
import { baseUrl } from "../settings";

export const useJobDetails = (id) => {
  return useQuery("jobDetails", async () => {
    const { data } = await axios.get(
      baseUrl + `positions/${id}.json?markdown=true`
    );
    return data;
  });
};
