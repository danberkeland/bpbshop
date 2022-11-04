import React, { useRef } from "react";

import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";

import { Toast } from "primereact/toast";
import { useSettingsStore } from "../Contexts/SettingsZustand";

function Cart({ displayCart, setDisplayCart }) {
  const cartOrder = useSettingsStore((state) => state.cartOrder);
  const toast = useRef(null);

  const onHide = () => {
    setDisplayCart(false);
  };

  return (
    <React.Fragment>
      <Toast ref={toast} />
      <Dialog
        visible={displayCart}
        style={{ width: "50vw", minWidth: "300px" }}
        onHide={onHide}
      >
        {cartOrder.map((cart) => {
          return (
            <React.Fragment>
              <Button label="REMOVE"/>
              <div>{cart.qty}</div>
              <InputNumber
                inputId="horizontal"
                disabled={false}
                value={1}
               
                size={5}
                showButtons
                buttonLayout="horizontal"
                min={0}
                decrementButtonClassName="p-button-secondary"
                incrementButtonClassName="p-button-secondary"
                incrementButtonIcon="pi pi-plus"
                decrementButtonIcon="pi pi-minus"
              />
              <div>{cart.item.name}</div>
              {cart.modifiers.map(mod => {
                return <div>{mod.name}</div>
              })}
              <div>{cart.price}</div>
            </React.Fragment>
          );
        })}
      </Dialog>
    </React.Fragment>
  );
}

export default Cart;
