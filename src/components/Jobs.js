import React, { useContext } from "react";
import { useJobs } from "../hooks/useJobs";
import { paginationContext } from "../context/paginationContext";
import { jobSearchContext } from "../context/jobSearchContext";

export const Jobs = (props) => {
  const { pageNumber } = useContext(paginationContext);
  const { jobSearchState } = useContext(jobSearchContext);
  let { data, isLoading, error } = useJobs(pageNumber, jobSearchState);
  if (props.onlyFulltime) {
    data = data.filter((job) => job.type === "Full Time");
  }
  return (
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
  );
};
