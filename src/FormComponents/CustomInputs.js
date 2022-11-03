import React from "react";

import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { SelectButton } from "primereact/selectbutton";
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";
import { Password } from "primereact/password";
import { Calendar } from "primereact/calendar";

import { withFormComponentWrap } from "../hoc/withFormComponentWrap";

const { DateTime } = require("luxon");

let now = DateTime.now().setZone("America/Los_Angeles");
let newDate = new Date(Date.parse(now));

const options = [
  { label: "Yes", value: true },
  { label: "No", value: false },
];

const CustomIDInputBase = ({ label, ...props }) => {
  return (
    <InputText
      {...props}
      value={props.value ? props.value : ""}
      type="string"
      autoCapitalize="none"
      securetextentry="true"
      keyboardtype="visible-password"
    />
  );
};

const CustomTextInputBase = ({ label, ...props }) => {
  return (
    <InputText
      {...props}
      type="string"
      value={props.value ? props.value : ""}
    />
  );
};

const CustomCalendarBase = ({ label, ...props }) => {
  return (
    <Calendar
      {...props}
      type="string"
      minDate={newDate}
      value={props.value ? props.value : ""}
    />
  );
};

const CustomTimeBase = ({ label, ...props }) => {
  console.log("Timeprops", props);
  return (
    <Calendar
      {...props}
      timeOnly
      hourFormat="12"
      type="string"
      value={props.value ? props.value : ""}
    />
  );
};

const CustomPasswordInputBase = ({ label, ...props }) => {
  return (
    <Password
      {...props}
      type="string"
      toggleMask={true}
      value={props.value ? props.value : ""}
    />
  );
};

const CustomFloatInputBase = ({ label, ...props }) => {
  return (
    <InputNumber
      {...props}
      type="tel"
      value={isNaN(props.value) ? 0 : Number(props.value)}
      onChange={(values) => {
        props.converter.setFieldValue(props.name, Number(values.value));
      }}
      mode="decimal"
      minFractionDigits={2}
      maxFractionDigits={2}
    />
  );
};

const CustomIntInputBase = ({ label, ...props }) => {
  return (
    <InputNumber
      {...props}
      type="tel"
      value={isNaN(props.value) ? 0 : Number(props.value)}
      onChange={(values) => {
        props.converter.setFieldValue(props.name, Number(values.value));
      }}
    />
  );
};

const CustomQtyInputBase = ({ label, ...props }) => {
  console.log('Qtyprops', props)
  return (
    <InputNumber
      {...props}
      inputId="horizontal"
      disabled={false}
      value={props.value}
      size={5}
      onChange={(values) => {
        props.converter.setFieldValue(props.name, Number(values.value));
      }}
      showButtons
      buttonLayout="horizontal"
      min={0}
      decrementButtonClassName="p-button-secondary"
      incrementButtonClassName="p-button-secondary"
      incrementButtonIcon="pi pi-plus"
      decrementButtonIcon="pi pi-minus"
    />
  );
};

const CustomYesNoInputBase = ({ label, ...props }) => {
  return (
    <SelectButton
      {...props}
      value={props.value ? props.value : false}
      onChange={() => {
        props.converter.setFieldValue(
          props.name,
          !props.converter.values[props.name]
        );
      }}
      options={options}
    />
  );
};

const CustomDropdownInputBase = ({ label, ...props }) => {
  console.log('Dropprops', props)
  return (
    <Dropdown
      {...props}
      type="string"
      disabled={false}
      value={props.value ? props.value : null}
    />
  );
};

const CustomMultiSelectInputBase = ({ label, ...props }) => {
  console.log('Multiprops', props)
  return <MultiSelect {...props}  disabled={false} value={props.value ? props.value : null} />;
};

export class CustomInputs {
  constructor() {
    this.CustomTextInput = withFormComponentWrap(CustomTextInputBase);
    this.CustomPasswordInput = withFormComponentWrap(CustomPasswordInputBase);
    this.CustomIDInput = withFormComponentWrap(CustomIDInputBase);
    this.CustomFloatInput = withFormComponentWrap(CustomFloatInputBase);
    this.CustomIntInput = withFormComponentWrap(CustomIntInputBase);
    this.CustomQtyInput = withFormComponentWrap(CustomQtyInputBase);
    this.CustomYesNoInput = withFormComponentWrap(CustomYesNoInputBase);
    this.CustomDropdownInput = withFormComponentWrap(CustomDropdownInputBase);
    this.CustomMultiSelectInput = withFormComponentWrap(
      CustomMultiSelectInputBase
    );
    this.CustomCalendarInput = withFormComponentWrap(CustomCalendarBase);
    this.CustomTimeInput = withFormComponentWrap(CustomTimeBase);
  }
}
