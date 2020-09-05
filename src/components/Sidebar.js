import React, { useState, useContext } from "react";
import { jobSearchContext } from "../context/jobSearchContext";

export const Sidebar = (props) => {
  const [locationSearchTerm, setLocationSearchTerm] = useState("");
  const { jobSearchState, dispatch } = useContext(jobSearchContext);
  console.log(jobSearchState);
  return (
    <div className="flex-column pr-2">
      <label className="inline-flex items-center flex flex-row">
        <input
          type="checkbox"
          className="form-checkbox"
          checked={props.onlyFulltime}
          onChange={() => {
            props.setOnlyFulltime(!props.onlyFulltime);
          }}
        />
        <span className="ml-2">Fulltime</span>
      </label>
      <h1 className="text-base text-gray-600">Location</h1>
      <input
        type="text"
        className="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline flex-grow"
        placeholder="City, state, zip code or country"
        value={locationSearchTerm}
        onChange={(e) => {
          dispatch({ type: "SetSearchTerm", payload: e.target.value });
        }}
      />
      <div>
        <label className="items-center flex flex-row pt-2">
          <input
            type="checkbox"
            className="form-checkbox"
            checked={jobSearchState.londonOnly}
            onChange={() => {
              dispatch({ type: "ToggleLondon" });
            }}
          />
          <span className="ml-2">London</span>
        </label>
        <label className="items-center flex flex-row pt-2">
          <input
            type="checkbox"
            className="form-checkbox"
            checked={jobSearchState.amsterdamOnly}
            onChange={() => {
              dispatch({ type: "ToggleAmsterdam" });
            }}
          />
          <span className="ml-2">Amsterdam</span>
        </label>
        <label className="items-center flex flex-row pt-2">
          <input
            type="checkbox"
            className="form-checkbox"
            checked={jobSearchState.newYorkOnly}
            onChange={() => {
              dispatch({ type: "ToggleNewYork" });
            }}
          />
          <span className="ml-2">New York</span>
        </label>
        <label className="items-center flex flex-row pt-2">
          <input
            type="checkbox"
            className="form-checkbox"
            checked={jobSearchState.berlinOnly}
            onChange={() => {
              dispatch({ type: "ToggleBerlin" });
            }}
          />
          <span className="ml-2">Berlin</span>
        </label>
      </div>
    </div>
  );
};
