import React, { createContext, useReducer } from "react";

const initialState = {
  locationSearchTerm: "",
  londonOnly: false,
  amsterdamOnly: false,
  newYorkOnly: false,
  berlinOnly: false,
  fullTimeOnly: false,
};
export const jobSearchContext = createContext(initialState);
const { Provider } = jobSearchContext;

const jobSearchReducer = (state, action) => {
  switch (action.type) {
    case "ToggleLondon":
      return { ...state, londonOnly: !state.londonOnly };
    case "ToggleAmsterdam":
      return { ...state, amsterdamOnly: !state.amsterdamOnly };
    case "ToggleNewYork":
      return { ...state, newYorkOnly: !state.newYorkOnly };
    case "ToggleBerlin":
      return { ...state, berlinOnly: !state.berlinOnly };
    case "ToggleFullTimeOnly":
      return { ...state, fullTimeOnly: !state.fullTimeOnly };
    case "SetSearchTerm":
      return {
        ...state,
        locationSearchTerm: action.payload,
      };
    default:
      return state;
  }
};

export const JobSearchProvider = ({ children }) => {
  const [jobSearchState, dispatch] = useReducer(jobSearchReducer, initialState);
  return <Provider value={{ jobSearchState, dispatch }}>{children}</Provider>;
};
