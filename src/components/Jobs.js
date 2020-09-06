import React, { useContext } from "react";
import { useJobs } from "../hooks/useJobs";
import { paginationContext } from "../context/paginationContext";
import { jobSearchContext } from "../context/jobSearchContext";
import { Link } from "react-router-dom";

export const Jobs = (props) => {
  const { pageNumber } = useContext(paginationContext);
  const { jobSearchState } = useContext(jobSearchContext);
  let { data, isLoading, error } = useJobs(pageNumber, jobSearchState);
  if (props.onlyFulltime) {
    data = data.filter((job) => job.type === "Full Time");
  }
  const getNumberOfDaysSincePost = (dateString) => {
    const now = new Date();
    const then = new Date(dateString);
    const diff = now.getTime() - then.getTime();
    const numberOfDays = (diff / (1000 * 3600 * 24)).toFixed(0);
    if (numberOfDays === 0) {
      return "1 day ago";
    } else {
      return `${numberOfDays} days ago`;
    }
  };
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
              <Link to={`/details/${job.id}`}>
                <h4 className="text-xl text-gray-900 leading-tight">
                  {job.title}
                </h4>
              </Link>

              <div className="flex flex-row justify-between">
                <div>
                  {job.type === "Full Time" ? "Full time" : "Part time"}
                </div>

                <div className="flex flex-row">
                  <div>{job.location}</div>
                  <div>{getNumberOfDaysSincePost(job.created_at)}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
