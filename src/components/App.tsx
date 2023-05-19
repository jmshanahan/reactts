import React from "react";
import { Provider } from "react-redux";
import { store } from "../store";
import RepositoriesList from "./RepositoriesList";
function App() {
  return (
    <Provider store={store}>
      <h1>Search for a package</h1>
      <RepositoriesList />
    </Provider>
  );
}

export default App;
