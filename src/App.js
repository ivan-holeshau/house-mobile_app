import React from "react";

import { Provider } from "react-redux";
import { store } from "./core/store/store";
import Main from './core/routes/main' 
function App() {
  return (
    <>
      <Provider store={store}>
    <Main/>
      </Provider>
    </>
  );
}

export default App;
