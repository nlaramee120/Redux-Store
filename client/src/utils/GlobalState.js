import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers'
import { Provider} from 'react-redux'
import { createStore } from 'redux';

// const StoreContext = createContext();
// const { Provider } = StoreContext;

const storeProvider = createStore(reducer, 
  {
    cart: [],
    cartOpen: false,
    categories: [],
    currentCategory: ''
  })

  const StoreProvider = (props) => {

  return <Provider store={storeProvider} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
