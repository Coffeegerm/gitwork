import React, { useState } from "react";
import { Sidebar, Jobs } from "../components";
import { Pagination } from "../components/Pagination";

export const Landing = () => {
  const [onlyFulltime, setOnlyFulltime] = useState(false);
  return (
    <div className="container mx-auto">
      <h1 className="mt-6 mb-2 text-black text-3xl">GitWork</h1>
      <h1 className="mb-4 text-base text-gray-800 text-xl">Github Jobs</h1>
      <div className="mb-4 mx-auto">
        <div className="flex flex-row">
          <input
            className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline flex-grow"
            type="text"
            placeholder="Title, companies, expertise or benefits"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4">
            Search
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-1">
        <Sidebar
          onlyFulltime={onlyFulltime}
          setOnlyFulltime={setOnlyFulltime}
        />
        <div>
          <Jobs onlyFulltime={onlyFulltime} />
          <Pagination />
        </div>
      </div>
    </div>
  );
};
