import React, { useEffect, useState } from "react";
import { CustomInputs } from "../FormComponents/CustomInputs";

import { validationSchema } from "./ValidationSchema";

import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

import { infoChosen } from "../restAPIs.js";
import { withFadeIn } from "../hoc/withFadeIn";
import { withBPBForm } from "../hoc/withBPBForm";
import { GroupBox, Title } from "../CommonStyles";
import { compose } from "../utils";
import "./Choose.css";
import { useSettingsStore } from "../Contexts/SettingsZustand";


const { DateTime } = require("luxon");

let now = DateTime.now()
  .setZone("America/Los_Angeles")

let newDate = new Date(Date.parse(now))
let newTime = new Date(Date.parse('01 Jan 2022 07:00:00'))

console.log('now', now)
  

const BPB = new CustomInputs();

const initialState = {
  location: "carlton",
  pickup: newDate,
  time: newTime,
};

const locations = [
  { label: "Prado", value: "prado", open: 7, close: 11 },
  { label: "Carlton", value: "carlton", open: 7, close: 14 },
];

export const Choose = () => {
  const setLocation = useSettingsStore((state) => state.setLocation);
  const setIsEdit = useSettingsStore((state) => state.setIsEdit);
  const [showMessage, setShowMessage] = useState(false);

  const dialogFooter = (
    <div className="flex justify-content-center">
      <Button
        label="OK"
        className="p-button-text"
        autoFocus
        onClick={() => setShowMessage(false)}
      />
    </div>
  );

  useEffect(() => {
    setIsEdit(true);
  });

  const BPBLocationForm = compose(
    withBPBForm,
    withFadeIn
  )((props) => {
    console.log("Locprops", props);

    return (
      <React.Fragment>
       
        <GroupBox>
          <div className="flex justify-content-center">
            <div className="card">
              <Title>Choose Pickup Time and Location</Title>

              <BPB.CustomDropdownInput
                label="Location"
                name="location"
                options={locations}
                converter={props}
              />
              <BPB.CustomCalendarInput
                label="Pickup Date?"
                name="pickup"
                converter={props}
              />
              <BPB.CustomTimeInput
                label="Pickup Time?"
                name="time"
                stepMinute={10}
                converter={props}
              />
           
              {props.values.location === "carlton" && setLocation("carlton")}
              {props.values.location === "prado" && setLocation("prado")}
           
            </div>
           
          </div>
        </GroupBox>
        <div id="locationName">{props.values.location}</div>

        <Dialog
          visible={showMessage}
          onHide={() => setShowMessage(false)}
          position="top"
          footer={dialogFooter}
          showHeader={false}
          breakpoints={{ "960px": "80vw" }}
        >
          <div className="flex align-items-center flex-column pt-6 px-3">
            <i
              className="pi pi-exclamation-circle"
              style={{ fontSize: "5rem", color: "var(--red-500)" }}
            ></i>
            <h5>Invalid Email or Password</h5>
            <p style={{ lineHeight: 1.5, textIndent: "1rem" }}>
              Please check email and password to make sure they are correct.
            </p>
          </div>
        </Dialog>
       
      </React.Fragment>
    );
  });

  return (
    <BPBLocationForm
      name="pickup"
      validationSchema={validationSchema}
      initialState={initialState}
      update={infoChosen}
      setShowMessage={setShowMessage}
     
    />
  );
};
