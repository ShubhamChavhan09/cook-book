import React, { createContext, useReducer, useContext } from "react";

const dispatchContext = createContext();
const storeContext = createContext();

export const StoreProvider = ({ children, reducer, initialState = {} }) => {
  const [store, dispatch] = useReducer(reducer, initialState);
  return (
    <dispatchContext.Provider value={dispatch}>
      <storeContext.Provider value={store}>{children}</storeContext.Provider>
    </dispatchContext.Provider>
  );
};

export function useStore() {
  return useContext(storeContext);
}

export function useDispatch() {
  return useContext(dispatchContext);
}
