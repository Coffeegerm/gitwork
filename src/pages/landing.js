import React, { useState } from "react";
import { useJobs } from "../hooks/useJobs";

export const Landing = () => {
  const { data, isLoading, error } = useJobs();
  const [onlyFulltime, setOnlyFulltime] = useState(false);
  return (
    <div className="container mx-auto">
      <h1 className="mt-6 mb-2 text-black text-3xl">GitWork</h1>
      <h1 className="mb-4 text-base text-gray-800 text-xl">Github Jobs</h1>
      <div className="mb-4 mx-auto">
        <div className="flex flex-row">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline flex-grow"
            type="text"
            placeholder="Title, companies, expertise or benefits"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4">
            Search
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-1">
        <div>
          <div className="flex flex-row">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox"
                checked={onlyFulltime}
                onChange={() => {
                  setOnlyFulltime(!onlyFulltime);
                }}
              />
              <span className="ml-2">Fulltime</span>
            </label>
          </div>
          <h1 className="text-base text-gray-600">Location</h1>
        </div>

        <div>
          {error && <h1>Error getting jobs. {error.message}</h1>}
          {isLoading && <h4>Loading</h4>}
          {data &&
            data.map((job, i) => (
              <div
                className="max-w-lg mx-auto flex p-6 bg-white rounded-lg shadow-x mb-2 mt-2"
                key={i}
              >
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
