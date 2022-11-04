import React, { useRef } from "react";

import { Dialog } from "primereact/dialog";

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
              <div>{cart.qty}</div>
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
