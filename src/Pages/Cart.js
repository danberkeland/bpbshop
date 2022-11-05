import React, { useRef } from "react";

import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import {
  time_convert,
  date_convert,
  checkAvailable,
  itemFilter,
} from "./utils";
import { Toast } from "primereact/toast";
import { useSettingsStore } from "../Contexts/SettingsZustand";
import { Title, SubInfo } from "../CommonStyles";

function Cart({ displayCart, setDisplayCart }) {
  const delivDate = useSettingsStore((state) => state.delivDate);
  const delivTime = useSettingsStore((state) => state.delivTime);
  const location = useSettingsStore((state) => state.location);
  const cartOrder = useSettingsStore((state) => state.cartOrder);
  const setCartOrder = useSettingsStore((state) => state.setCartOrder);
  const setFormType = useSettingsStore((state) => state.setFormType);
  const toast = useRef(null);

  const onHide = () => {
    setDisplayCart(false);
  };

  const handleChangePickup = () => {
    setDisplayCart(false);
    setFormType("");
  };

  const handleRemove = (e, index) => {
    console.log("index", index);
    let cart = [...cartOrder];
    cart.splice(index, 1);
    setCartOrder(cart);
  };

  const totalPrice = () => {
    let prices = cartOrder.map((cart) => cart.price);
    const sum = prices.reduce((partialSum, a) => partialSum + a, 0);
    return sum;
  };

  const isValid = () => {
    return false;
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
        {cartOrder.length > 0 ? (
          <React.Fragment>
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
            {cartOrder.map((cart, index) => {
              return (
                <React.Fragment>
                  <div
                    className={
                      checkAvailable(cart.item, delivDate, delivTime)
                        ? "cartItem"
                        : "redItem"
                    }
                  >
                    <Button
                      icon="pi pi-times"
                      onClick={(e) => handleRemove(e, index)}
                      className="p-button-outlined p-button-rounded p-button-danger"
                      aria-label="Cancel"
                    />
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
                      {!checkAvailable(cart.item, delivDate, delivTime) && (
                        <React.Fragment>
                          <div className="alert">
                          <div>
                                  {cart.item.specialStart ? (
                                    cart.item.specialEnd ? (
                                      <div className="itemAlert">
                                        Available {cart.item.specialStart} to{" "}
                                        {cart.item.specialEnd}
                                      </div>
                                    ) : (
                                      <div className="itemAlert">
                                        Item available after {cart.item.specialStart}
                                      </div>
                                    )
                                  ) : (
                                    <div></div>
                                  )}
                                  {cart.item.days ? (
                                    <div className="itemAlert">
                                      Available{" "}
                                      {cart.item.days.map((item) => item + ", ")}{" "}
                                      after {time_convert(cart.item.start * 60)}
                                    </div>
                                  ) : !cart.item.specialStart ? (
                                    <div className="itemAlert">
                                      Available everyday after{" "}
                                      {time_convert(cart.item.start * 60)}
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                  {cart.item.lead > 0 && (
                                    <div className="itemAlert">
                                      LEAD TIME: {cart.item.lead} days
                                    </div>
                                  )}

                                  <div>WILL NOT BE INCLUDED IN THIS ORDER.</div>
                                </div>
                          </div>
                        </React.Fragment>
                      )}
                    </div>

                    <div>
                      <div>Quantity: {cart.qty}</div>
                      <div>${cart.price.toFixed(2)}</div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
            <div>TOTAL: ${totalPrice().toFixed(2)} + tax</div>
            <Button label="CHECKOUT" />
          </React.Fragment>
        ) : (
          <div>Cart is empty.</div>
        )}
      </Dialog>
    </React.Fragment>
  );
}

export default Cart;
