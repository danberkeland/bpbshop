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
import InfoChosen from "./Pages/InfoChosen";

import styled from "styled-components";

Amplify.configure(awsmobile);

const LoaderBack = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 199;
  background-color: rgba(65, 64, 99, 0.5);
`;

export function App() {
  const formType = useSettingsStore((state) => state.formType);
  const isLoading = useSettingsStore((state) => state.isLoading);

  return (
    <React.Fragment>
      {isLoading && <Loader />}


      <Router>
        {formType === "infoChosen" ? (
          <InfoChosen />
        ) : (
          <React.Fragment>
            <InfoChosen />
            <LoaderBack>
              <Choose />
            </LoaderBack>
          </React.Fragment>
        )}
      </Router>
    </React.Fragment>
  );
}

export default App;
