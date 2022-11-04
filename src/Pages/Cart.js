import React, { useRef } from "react";

import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { time_convert, date_convert, checkAvailable, itemFilter } from "./utils";
import { Toast } from "primereact/toast";
import { useSettingsStore } from "../Contexts/SettingsZustand";
import { Title, SubInfo } from "../CommonStyles";

function Cart({ displayCart, setDisplayCart }) {
  const delivDate = useSettingsStore((state) => state.delivDate);
  const delivTime = useSettingsStore((state) => state.delivTime);
  const location = useSettingsStore((state) => state.location);
  const cartOrder = useSettingsStore((state) => state.cartOrder);
  const setFormType = useSettingsStore((state) => state.setFormType);
  const toast = useRef(null);

  const onHide = () => {
    setDisplayCart(false);
  };

  
  const handleChangePickup = () => {
    setDisplayCart(false);
    setFormType("");
  };

  return (
    <React.Fragment>
      <Toast ref={toast} />
      <Dialog
        visible={displayCart}
        style={{ width: "50vw", minWidth: "300px" }}
        onHide={onHide}
      >
        <Title>Cart</Title>
        <div className="tabInfo lgscreen">
          <div>For pickup at&nbsp;&nbsp; </div>
          <h2>{location}&nbsp;&nbsp;</h2>
          <div> on &nbsp;&nbsp; </div>
          <h2>{date_convert(delivDate)}&nbsp;&nbsp;</h2>
          <div> at&nbsp;&nbsp; </div>
          <h2> {time_convert(delivTime * 60)}</h2>
        </div>
        <div className="smscreen medscreen">
          <Button
            type="button"
            label={
              location +
              ` - ` +
              date_convert(delivDate) +
              " - " +
              time_convert(delivTime * 60)
            }
            className="p-button-text p-button-warning"
            aria-label="Bookmark"
            onClick={handleChangePickup}
          />
        </div>
        <div className="lgscreen">
          <Button
            type="button"
            icon="pi pi-clock"
            label="Change Pickup"
            className="p-button-raised"
            aria-label="Bookmark"
            onClick={handleChangePickup}
          />
        </div>
        {cartOrder.map((cart) => {
          return (
            <div className="cartItem">
               <Button icon="pi pi-times" className="p-button-outlined p-button-rounded p-button-danger" aria-label="Cancel" />
              <img
                className="foodPicSmall"
                src={cart.item.url}
                alt="sandwich"
              />
              <div>
                <div>{cart.item.name}</div>
                {cart.modifiers.map((mod) => {
                  return <div>{mod.name}</div>;
                })}
              </div>

              <div>
                <InputNumber
                  inputId="horizontal"
                  disabled={false}
                  value={1}
                  size={2}
                  showButtons
                  buttonLayout="horizontal"
                  min={0}
                  decrementButtonClassName="p-button-secondary"
                  incrementButtonClassName="p-button-secondary"
                  incrementButtonIcon="pi pi-plus"
                  decrementButtonIcon="pi pi-minus"
                />
                <div>${cart.price.toFixed(2)}</div>
              </div>

              
              
            </div>
          );
        })}
        <div>TOTAL</div>
        <Button label="PAY NOW" />
      </Dialog>
    </React.Fragment>
  );
}

export default Cart;
