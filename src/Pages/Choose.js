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

let now = DateTime.now().setZone("America/Los_Angeles");

let newDate = new Date(Date.parse(now));
let newTime = new Date(Date.parse("01 Jan 2022 07:00:00"));

const BPB = new CustomInputs();

const initialState = {
  location: "carlton",
  pickup: newDate,
  time: newTime,
};

const locations = [
  {
    label: "Prado",
    value: "prado",
    open: "01 Jan 2022 07:00:00",
    close: "01 Jan 2022 11:00:00",
  },
  {
    label: "Carlton",
    value: "carlton",
    open: "01 Jan 2022 07:00:00",
    close:
      newDate.getDate() !== 24
        ? "01 Jan 2022 14:00:00"
        : "01 Jan 2022 11:30:00",
  },
];

export const Choose = () => {
  const setIsEdit = useSettingsStore((state) => state.setIsEdit);
  const delivDateProgram = useSettingsStore((state) => state.delivDateProgram);
  const delivTimeProgram = useSettingsStore((state) => state.delivTimeProgram);
  const init = useSettingsStore((state) => state.init);
  const setInit = useSettingsStore((state) => state.setInit);
  const location = useSettingsStore((state) => state.location);
  const [showMessage, setShowMessage] = useState(false);

  const initialState = {
    location: location,
    pickup: delivDateProgram,
    time: delivTimeProgram,
  };

  const editButtonStyle = {
    width: "100px",
    margin: "20px",
    fontSize: "1.2em",
  };

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

    const ind = locations.findIndex(
      (loc) => loc.value === props.values.location
    );

    let openTime = new Date(Date.parse(locations[ind].open));
    let closeTime =
      props.values.pickup.getDate() !== 24
        ? new Date(Date.parse(locations[ind].close))
        : new Date(Date.parse("01 Jan 2022 11:30:00"));

    console.log("closeTime", closeTime);

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
                minDate={openTime}
                maxDate={closeTime}
                stepMinute={10}
                converter={props}
              />
            </div>
          </div>
        </GroupBox>

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
        <div className="lgscreen">
          <Button label="Submit" type="submit" style={editButtonStyle} />
        </div>
        <div className="smscreen medscreen floatButtonBottom">
          <Button
            label="Submit"
            type="submit"
            className="p-button-rounded p-button-success"
            style={editButtonStyle}
          />
        </div>
      </React.Fragment>
    );
  });

  return (
    <BPBLocationForm
      name="pickup"
      validationSchema={validationSchema}
      initialState={initialState}
      update={(e) => infoChosen(e, location, init, setInit)}
      setShowMessage={setShowMessage}
    />
  );
};
