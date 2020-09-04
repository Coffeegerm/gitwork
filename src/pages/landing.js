import React from "react";
import { useJobs } from "../hooks/useJobs";

export const Landing = () => {
  const { data, isLoading, error } = useJobs();
  return (
    <div className="container mx-auto">
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
      <div className="flex flex-row">
        <div>
          <div className="flex flex-row">
            <input type="checkbox" />
            <p>Full time</p>
          </div>
        </div>

        <div>
          {isLoading && <h4>Loading</h4>}
          {data &&
            data.map((job) => (
              <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-xl">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12"
                    src={job.company_logo}
                    alt="Company Logo"
                  />
                </div>
                <div className="ml-6 pt-1">
                  <p className="text-base text-gray-600 leading-normal">
                    {job.company}
                  </p>
                  <h4 className="text-xl text-gray-900 leading-tight">
                    {job.title}
                  </h4>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
