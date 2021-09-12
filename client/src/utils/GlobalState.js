import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers' //change reducer name to corret one

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useProductReducer({ //change reducer name and initialize correct variables
    // products: [],
    // cart: [],
    // cartOpen: false,
    // categories: [],
    // currentCategory: '',
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };