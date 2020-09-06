import React, { useState } from "react";
import { Sidebar, Jobs, Page } from "../components";

export const Landing = () => {
  const [onlyFulltime, setOnlyFulltime] = useState(false);
  return (
    <Page>
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
      <div className="flex flex-row sm:flex-col lg:flex-row">
        <div className="flex-1">
          <Sidebar
            onlyFulltime={onlyFulltime}
            setOnlyFulltime={setOnlyFulltime}
          />
        </div>
        <div style={{ flexBasis: "66%" }}>
          <Jobs onlyFulltime={onlyFulltime} />
        </div>
      </div>
    </Page>
  );
};
