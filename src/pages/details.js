import React from "react";
import { useParams } from "react-router-dom";
import { Page } from "../components";
import { useJobDetails } from "../hooks/useJobDetails";
import { Link } from "react-router-dom";

export const Details = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useJobDetails(id);
  console.log(data);
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
    <Page>
      {isLoading && <h1>Loading...</h1>}
      {error && (
        <div>
          <h1>Uh, oh. We hit a snag captain.</h1>
          <h3>{error.message}</h3>
        </div>
      )}
      {data && (
        <div className="flex lg:flex-row sm:flex-col">
          <div className="pr-3">
            <Link to="/">
              <p className="mb-6 text-blue-600">Back to search</p>
            </Link>
            <p className="text-base text-gray-600">How To Apply</p>
            <p className="mt-3">{data.how_to_apply}</p>
          </div>
          <div>
            <div className="flex flex-row items-center">
              <h1 className="mr-3 text-2xl text-blue-900">{data.title}</h1>
              <p className="rounded-md border border-blue-900 p-1 text-blue-900">
                {data.type}
              </p>
            </div>
            <p className="text-gray-500 text-sm mt-2">
              {getNumberOfDaysSincePost(data.created_at)}
            </p>

            <div className="flex flex-row mt-6">
              <div>
                <img
                  className="h-12 w-12"
                  src={data.company_logo}
                  alt="Company Logo"
                />
              </div>
              <div className="flex-column ml-3">
                <p className="text-blue-900 text-xl">{data.company}</p>
                <p className="text-gray-500 text-sm">{data.location}</p>
              </div>
            </div>
            <div className="mt-3 text-blue-800">{data.description}</div>
          </div>
        </div>
      )}
    </Page>
  );
};
