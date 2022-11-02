import React, { useState } from "react";
import { useSettingsStore } from "../Contexts/SettingsZustand";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputNumber } from "primereact/inputnumber";

import { menu } from "./Menu";

import { Title, SubInfo } from "../CommonStyles";
import { time_convert, date_convert } from "./utils";

function SingleItem({
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

  const [qty, setQty] = useState(0);

  let menuItems = menu[menuGroup].items[item];

  const itemName = menuItems.name;
  const itemDescription = menuItems.description;

  const pickupInfo = (
    <React.Fragment>
      <SubInfo>Pickup: {location}</SubInfo>
      <SubInfo>
        {date_convert(delivDate)} at {time_convert(delivTime * 60)}
      </SubInfo>
    </React.Fragment>
  );

  const onHide = () => {
    setQty(0);
    setDisplayBasic(false);
  };

  const cartAdd = (price) => {
    let total = qty * price;
    return "ADD TO CART $" + total.toFixed(2);
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
                value={qty}
                onValueChange={(e) => setQty(e.value)}
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
            <div className="inputConfig">
              {menuItems.modifiers &&
                menuItems.modifiers.map((mod) => {
                  let response;
                  if (mod.modType === "chooseOne") {
                    response = mod.name + " chooseOne";
                  }
                  if (mod.modType === "chooseMany") {
                    response = mod.name + " chooseMany";
                  }

                  return response;
                })}
            </div>
            <div className="inputConfig">
              <Button
                type="submit"
                icon="pi pi-shopping-cart"
                label={cartAdd(menuItems.price)}
                className="p-button-raised"
                aria-label="Bookmark"
              />
            </div>
          </div>
        </div>
      </Dialog>
    </React.Fragment>
  );
}

export default SingleItem;
