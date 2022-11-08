import React, { useRef } from "react";

import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import {
  time_convert,
  date_convert,
  date_convert_simple,
  checkAvailable,
  itemFilter,
  checkout,
} from "./utils";
import { Toast } from "primereact/toast";
import { useSettingsStore } from "../Contexts/SettingsZustand";
import { Title, SubInfo } from "../CommonStyles";

const { DateTime } = require("luxon");

function Cart({ displayCart, setDisplayCart }) {
  const delivDate = useSettingsStore((state) => state.delivDate);
  const delivDateProgram = useSettingsStore((state) => state.delivDateProgram);
  const delivTime = useSettingsStore((state) => state.delivTime);
  const delivTimeProgram = useSettingsStore((state) => state.delivTimeProgram);
  const location = useSettingsStore((state) => state.location);
  const cartOrder = useSettingsStore((state) => state.cartOrder);
  const setCartOrder = useSettingsStore((state) => state.setCartOrder);
  const setFormType = useSettingsStore((state) => state.setFormType);
  const setIsLoading = useSettingsStore((state) => state.setIsLoading);
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

  const handleCheckout = () => {
    let loc = location === "carlton" ? "16VS30T9E7CM9" : "KTQGYHG092NK8";
    let lineItems = cartOrder
      .filter((cart) =>
        checkAvailable(
          cart.item,
          delivDate,
          delivTime,
          location,
          cartOrder,
          setCartOrder
        )
      )
      .map((ord) => {
        console.log("ord", ord);
       
        let applied = ord.item.discount ? {
          discountUid: ord.item.discount
        } : {discountUid: "000000"}
         

        return {
          appliedDiscounts: [applied],
          quantity: ord.qty.toString(),
          catalogObjectId: ord.item.variations[0].varid,
          modifiers: ord.modifiers.map((mod) => {
            return {
              catalogObjectId: mod.value.split("_")[0],
            };
          }),
        };
      });

    let newDelivDate = DateTime.fromISO(delivDate)
      .setZone("America/Los_Angeles")
      .set({ hour: delivTime })
      .set({ minutes: (delivTime - Math.floor(delivTime)) * 60 });
    console.log("newDelivDate", newDelivDate);
    let newDate = new Date(Date.parse(newDelivDate));

    console.log("newDate", newDate);
    let pickup = newDate;
    let fulfill = {
      location: location,
      delivDate: delivDate,
      delivTime: delivTime
    }
    

    let event = {
      fulfill: fulfill,
      order: {
        locationId: loc,
        lineItems: lineItems,

        fulfillments: [
          {
            type: "PICKUP",
            pickupDetails: {
              scheduleType: "SCHEDULED",
              pickupAt: pickup,
            },
          },
        ],
        discounts: [
          {
            uid: "123456",
            scope: "LINE_ITEM",

            type: "FIXED_PERCENTAGE",
            percentage: "20",
            name: "Preorder discount",
          },
          {
            uid: "000000",
            scope: "LINE_ITEM",

            type: "FIXED_PERCENTAGE",
            percentage: "0",
            name: "Preorder discount",
          },
        ],
      },
    };

    setDisplayCart(false);
    setIsLoading(true);
    console.log("event", event);
    checkout(event, setIsLoading);
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
            <div className=" center smscreen medscreen">
              <Button
                type="button"
                label={
                  location +
                  ` - ` +
                  date_convert_simple(delivDate) +
                  " - " +
                  time_convert(delivTime * 60)
                }
                className="p-button-raised p-button-primary"
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
                      checkAvailable(
                        cart.item,
                        delivDate,
                        delivTime,
                        location,
                        cartOrder,
                        setCartOrder
                      )
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
                      <h3>{cart.item.name}</h3>

                      {cart.modifiers.map((mod) => {
                        return <SubInfo>{mod.name}</SubInfo>;
                      })}

                      {!checkAvailable(
                        cart.item,
                        delivDate,
                        delivTime,
                        location,
                        cartOrder,
                        setCartOrder
                      ) && (
                        <React.Fragment>
                          <div className="alert">
                            <div>
                              {cart.item.location !== location ? (
                                <div className="itemAlert">
                                  NOT AVAILABLE AT THIS LOCATION
                                </div>
                              ) : (
                                <React.Fragment>
                                  {cart.item.specialStart ? (
                                    cart.item.specialEnd ? (
                                      <div className="itemAlert">
                                        Available {cart.item.specialStart} to{" "}
                                        {cart.item.specialEnd}
                                      </div>
                                    ) : (
                                      <div className="itemAlert">
                                        Item available after{" "}
                                        {cart.item.specialStart}
                                      </div>
                                    )
                                  ) : (
                                    <div></div>
                                  )}
                                  {cart.item.days ? (
                                    <div className="itemAlert">
                                      Available{" "}
                                      {cart.item.days.map(
                                        (item) => item + ", "
                                      )}{" "}
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
                                </React.Fragment>
                              )}
                              <div>WILL NOT BE INCLUDED IN THIS ORDER.</div>
                            </div>
                          </div>
                        </React.Fragment>
                      )}
                    </div>

                    <div>
                      <div className="itemDescrip">Quantity: {cart.qty}</div>
                      <h4>${cart.price.toFixed(2)}</h4>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
            <div className="center">
              <h4>TOTAL: ${totalPrice().toFixed(2)} + tax</h4>
              <h4>A 20% preorder discount will be applied to breads and pastries at checkout.</h4>
              <Button
                type="button"
                icon="pi pi-shopping-cart"
                label="CHECKOUT"
                className="p-button-raised"
                aria-label="Bookmark"
                onClick={handleCheckout}
              />
            </div>
          </React.Fragment>
        ) : (
          <div>Cart is empty.</div>
        )}
      </Dialog>
    </React.Fragment>
  );
}

export default Cart;
