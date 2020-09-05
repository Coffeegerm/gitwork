import React, { createContext, useReducer } from "react";

export const paginationContext = createContext(0);
const { Provider } = paginationContext;

const paginationReducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
    case "SetPageNumber":
      return action.payload;
    default:
      return state;
  }
};

export const PaginationProvider = ({ children }) => {
  const [pageNumber, dispatch] = useReducer(paginationReducer, 1);
  return <Provider value={{ pageNumber, dispatch }}>{children}</Provider>;
};
