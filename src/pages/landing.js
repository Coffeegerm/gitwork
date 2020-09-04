import React from "react";
import { useJobs } from "../hooks/useJobs";

export const Landing = () => {
  const { data, isLoading, error } = useJobs();
  return (
    <div>
      <h1>GitWork</h1>
      <div>
        <div>
          <input
            type="text"
            placeholder="Title, companies, expertise or benefits"
          />
          <button>Search</button>
        </div>
      </div>
      <div>
        <div></div>

        <div>
          {isLoading && <h4>Loading</h4>}
          {console.log(data)}
        </div>
      </div>
    </div>
  );
};
