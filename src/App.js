import React from "react";

import { Amplify } from "aws-amplify";
import awsmobile from "./aws-exports";

import { BrowserRouter as Router } from "react-router-dom";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./index.css";

import Loader from "./AppStructure/Loader";

import { useSettingsStore } from "./Contexts/SettingsZustand";
import { Choose } from "./Pages/Choose";

Amplify.configure(awsmobile);

export function App() {
  const formType = useSettingsStore((state) => state.formType);
  const isLoading = useSettingsStore((state) => state.isLoading);

  return (
    <React.Fragment>
      {isLoading && <Loader />}

      <h1>Back Porch Bakery</h1>

      <Router>
        {formType === "infoChosen" ? (
          <React.Fragment>Info Chosen</React.Fragment>
        ) : <Choose /> }
      </Router>
    </React.Fragment>
  );
}

export default App;
