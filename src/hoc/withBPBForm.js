import React, { useEffect } from "react";

import { Button } from "primereact/button";
import { ConfirmDialog } from "primereact/confirmdialog";
import { Formik, Form } from "formik";
import { useSettingsStore } from "../Contexts/SettingsZustand";
import { CenteredContainer, FlexSpaceBetween } from "../CommonStyles";

export const withBPBForm = (Component) => (props) => {
  const isEdit = useSettingsStore((state) => state.isEdit);
  const setIsEdit = useSettingsStore((state) => state.setIsEdit);
  const isCreate = useSettingsStore((state) => state.isCreate);
  const setIsCreate = useSettingsStore((state) => state.setIsCreate);
  const isChange = useSettingsStore((state) => state.isChange);
  const setFormType = useSettingsStore((state) => state.setFormType);
  const formType = useSettingsStore((state) => state.formType);
  const isLoading = useSettingsStore((state) => state.isLoading);
  const setIsLoading = useSettingsStore((state) => state.setIsLoading);
  const location = useSettingsStore((state) => state.location);
  const setLocation = useSettingsStore((state) => state.setLocation);
  const delivDate = useSettingsStore((state) => state.delivDate);
  const setDelivDate = useSettingsStore((state) => state.setDelivDate);
  const delivTime = useSettingsStore((state) => state.delivTime);
  const setDelivTime = useSettingsStore((state) => state.setDelivTime);
  const delivDateProgram = useSettingsStore((state) => state.delivDateProgram);
  const setDelivDateProgram = useSettingsStore((state) => state.setDelivDateProgram);
  const delivTimeProgram = useSettingsStore((state) => state.delivTimeProgram);
  const setDelivTimeProgram = useSettingsStore((state) => state.setDelivTimeProgram);


  console.log("Firstprops", props);

  props = {
    ...props,
    isEdit,
    formType,
    isCreate,
    isChange,
    setIsEdit,
    setIsCreate,
    setFormType,
    isLoading,
    setIsLoading,
    location,
    setLocation,
    delivDate,
    setDelivDate,
    delivTime,
    setDelivTime,
    delivDateProgram,
    setDelivDateProgram,
    delivTimeProgram,
    setDelivTimeProgram
  };

  const editButtonStyle = {
    width: "100px",
    margin: "20px",
    fontSize: "1.2em",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const handleEdit = (e, props) => {
    window.scrollTo(0, 0);
    setIsEdit(true);
  };

  console.log("BPBprops", props);
  let fns = props;

  return (
    <div>
      <CenteredContainer>
        <ConfirmDialog />
        <Formik
          initialValues={props.initialState}
          validationSchema={props.validationSchema(props)}
          onSubmit={(props) => {
            console.log("submitprops", props);
            setIsLoading(true);
            window.scrollTo(0, 0);
            setIsEdit(false);

            fns.update({ ...fns, ...props });
          }}
        >
          {(props) => (
            <React.Fragment>
              <div className="signInBox">
                <Form>
                  <Component {...props} />
                </Form>
              </div>
            </React.Fragment>
          )}
        </Formik>

        <div className="bottomSpace"></div>
      </CenteredContainer>
    </div>
  );
};
