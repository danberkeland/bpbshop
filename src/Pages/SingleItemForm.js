import React, { useState, useEffect } from "react";

import { useSettingsStore } from "../Contexts/SettingsZustand";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Checkbox } from "primereact/checkbox";
import { InputNumber } from "primereact/inputnumber";
import { updateItem } from "../restAPIs"

import { menu } from "./Menu";

import { Title, SubInfo } from "../CommonStyles";
import { time_convert, date_convert } from "./utils";

function SingleItemForm({
  displayBasic,
  setDisplayBasic,
  menuGroup,
  setMenuGroup,
  item,
  setItem,
}) {
  const delivDate = useSettingsStore((state) => state.delivDate);
  const delivTime = useSettingsStore((state) => state.delivTime);
  const location = useSettingsStore((state) => state.location);
  const selected = useSettingsStore((state) => state.selected);

  const [qty, setQty] = useState(0);
  const [modifiers, setModifiers] = useState([]);

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
    let total = qty * price;
    return "ADD TO CART $" + total.toFixed(2);
  };

  const pickupInfo = (
    <React.Fragment>
      <SubInfo>Pickup: {location}</SubInfo>
      <SubInfo>
        {date_convert(delivDate)} at {time_convert(delivTime * 60)}
      </SubInfo>
    </React.Fragment>
  );

  const onModChange = (e) => {
    console.log("e", e);
    let selectedModifiers = [...modifiers];
    if (e.checked) selectedModifiers.push(e.value);
    else selectedModifiers.splice(selectedModifiers.indexOf(e.value), 1);
    setModifiers(selectedModifiers);
  };

  return (
    <React.Fragment>
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
              {menuItems &&
                menuItems.modifiers.map((men, index1) => {
                  return (
                    <AccordionTab key={men.name} header={men.name}>
                      {men.options.map((opt) => {
                        return (
                          <div key={opt.value} className="field-checkbox">
                            <Checkbox
                              inputId={opt.value}
                              name={opt.label + opt.value}
                              value={opt.value}
                              checked={modifiers.includes(opt.value)}
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
                icon="pi pi-shopping-cart"
                label={cartAdd(qty)}
                className="p-button-raised"
                aria-label="Bookmark"
                onClick={e => updateItem(e,qty, modifiers, selected)}
              />
            </div>
          </div>
        </div>
      </Dialog>
    </React.Fragment>
  );
}

export default SingleItemForm;
