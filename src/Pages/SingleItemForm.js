import React, { useState, useEffect, useRef } from "react";

import { useSettingsStore } from "../Contexts/SettingsZustand";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Checkbox } from "primereact/checkbox";
import { InputNumber } from "primereact/inputnumber";
import { Toast } from "primereact/toast";
import { updateItem } from "../restAPIs";

import { menu } from "./Menu";

import { Title, SubInfo } from "../CommonStyles";
import { time_convert, date_convert } from "./utils";

function SingleItemForm({
  promocode,
  displayBasic,
  setDisplayBasic,
  menuGroup,
  setMenuGroup,
  item,
  setItem,
  qty,
  setQty,
  modifiers,
  setModifiers,
}) {
  const delivDate = useSettingsStore((state) => state.delivDate);
  const delivTime = useSettingsStore((state) => state.delivTime);
  const location = useSettingsStore((state) => state.location);
  const selected = useSettingsStore((state) => state.selected);
  const cartOrder = useSettingsStore((state) => state.cartOrder);
  const setCartOrder = useSettingsStore((state) => state.setCartOrder);
  const toast = useRef(null);

  console.log('singleItempromocode', promocode)
  useEffect(() => {
    console.log("modifiers", modifiers);
  }, [modifiers]);

  let menuItems = menu[menuGroup].items[item];

  const itemName = menuItems.name;
  const itemDescription = menuItems.description;
  const price = menuItems.price;

  const onHide = () => {
    setDisplayBasic(false);
  };

  const cartAdd = () => {
    console.log("price", price);
    let addPrice = modifiers.map((mod) => Number(mod.value.split("_")[1]));
    const sum = addPrice.reduce((partialSum, a) => partialSum + a, 0);
    console.log("addPrice", addPrice);
    let total = qty * (price + sum);
    return "ADD TO CART $" + total.toFixed(2);
  };

  const updateItem = (e, qty, modifiers, selected) => {
    let addPrice = modifiers.map((mod) => Number(mod.value.split("_")[1]));
    const sum = addPrice.reduce((partialSum, a) => partialSum + a, 0);

    let total = qty * (price + sum);
    let addTo = false;
    let newItem = {
      item: selected,
      qty: qty,
      modifiers: modifiers,
      price: total,
    };
    let cart = [...cartOrder];
    for (let item of cart) {
      console.log('item', item)
      console.log('selected', selected)
      if (item.item.name === selected.name && item.modifiers.length===0) {
        item.price += qty*price
        item.qty += qty;
        addTo = true;
      }
    }
    if (addTo === false) {
      cart.push(newItem);
    }

    setCartOrder(cart);
    toast.current.show({
      severity: "success",
      summary: "Added To Cart",
      detail: `${qty} x ${selected.name} $${total.toFixed(2)}`,
    });
    setDisplayBasic(false);
  };

  const pickupInfo = (
    <React.Fragment>
      <SubInfo>Pickup: {location}</SubInfo>
      <SubInfo>
        {date_convert(delivDate)} at {time_convert(delivTime * 60)}
      </SubInfo>
      <SubInfo>A 20% preorder discount will be applied at checkout.</SubInfo>
    </React.Fragment>
  );

  const onModChange = (e) => {
    console.log("e", e);
    let selectedModifiers = [...modifiers];
    if (e.checked)
      selectedModifiers.push({
        name: e.target.name,
        value: e.value,
      });
    else selectedModifiers.splice(selectedModifiers.indexOf(e.value), 1);
    setModifiers(selectedModifiers);
  };

  return (
    <React.Fragment>
      <Toast ref={toast} />
      <Dialog
        visible={displayBasic}
        style={{ width: "50vw", minWidth: "300px" }}
        onHide={onHide}
      >
        <div className="selectedItemContainer">
          <div className="lgImageBox">
            <img className="foodPicBig" src={menuItems.url} alt="sandwich" />
          </div>
          <div className="itemSelectBox">
            <Title>{itemName}</Title>
            <SubInfo>{itemDescription}</SubInfo>
            <div className="inputConfig">
              <InputNumber
                inputId="horizontal"
                disabled={false}
                value={qty}
                onChange={(e) => setQty(e.value)}
                size={5}
                showButtons
                buttonLayout="horizontal"
                min={0}
                decrementButtonClassName="p-button-secondary"
                incrementButtonClassName="p-button-secondary"
                incrementButtonIcon="pi pi-plus"
                decrementButtonIcon="pi pi-minus"
              />
            </div>
            {pickupInfo}
            <Accordion multiple>
              {menuItems.modifiers &&
                menuItems.modifiers.map((men, index1) => {
                  return (
                    <AccordionTab key={men.name} header={men.name}>
                      {men.options.map((opt) => {
                        return (
                          <div key={opt.value} className="field-checkbox">
                            <Checkbox
                              inputId={opt.value}
                              name={opt.label}
                              value={opt.value}
                              checked={modifiers
                                .map((mod) => mod.value)
                                .includes(opt.value)}
                              onChange={onModChange}
                            />
                            <label htmlFor={opt.value}>
                              &nbsp;&nbsp;{opt.label}
                            </label>
                          </div>
                        );
                      })}
                    </AccordionTab>
                  );
                })}
            </Accordion>

            <div className="inputConfig">
              <Button
                type="button"
                disabled={qty > 0 ? false : true}
                icon="pi pi-shopping-cart"
                label={cartAdd(qty)}
                className="p-button-raised"
                aria-label="Bookmark"
                onClick={(e) => updateItem(e, qty, modifiers, selected)}
              />
            </div>
          </div>
        </div>
      </Dialog>
    </React.Fragment>
  );
}

export default SingleItemForm;
