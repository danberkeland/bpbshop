import React, { useState } from "react";
import { useSettingsStore } from "../Contexts/SettingsZustand";
import { Button } from "primereact/button";
import { Accordion, AccordionTab } from "primereact/accordion";
import { menu } from "./Menu";
import { time_convert, date_convert, checkAvailable, itemFilter } from "./utils";
import background from "../pastryblock.jpg";
import SingleItemForm from "./SingleItemForm";
import Footer from "./Footer";
import Cart from "./Cart";



function InfoChosen() {
  const delivDate = useSettingsStore((state) => state.delivDate);
  const delivTime = useSettingsStore((state) => state.delivTime);
  const location = useSettingsStore((state) => state.location);
  const setFormType = useSettingsStore((state) => state.setFormType);
  const setSelected = useSettingsStore((state) => state.setSelected);
  const cartOrder = useSettingsStore((state) => state.cartOrder);


  const [displayBasic, setDisplayBasic] = useState(false);
  const [displayCart, setDisplayCart] = useState(false);
  const [menuGroup, setMenuGroup] = useState(0);
  const [item, setItem] = useState(0);
  const [qty, setQty] = useState(0);
  const [modifiers, setModifiers] = useState([]);
 

  const onDisplay = (index1, index2, item) => {
    console.log("index", index1 + index2);
    setMenuGroup(index1);
    setItem(index2);
    setSelected(item);
    setQty(1);
    setModifiers([]);
    setDisplayBasic(true);
  };

  const handleChangePickup = () => {
    setFormType("");
  };

  const addUpCart = () => {
    let countList = cartOrder.map(cart => Number(cart.qty))
    const sum = countList.reduce((partialSum, a) => partialSum + a, 0);
    return sum.toString()
  }

  const handleCartDisplay = () => {
    setDisplayCart(true)
  }

  return (
    <React.Fragment>
      <Cart 
      displayCart={displayCart} 
      setDisplayCart={setDisplayCart}
      />

      <SingleItemForm
        displayBasic={displayBasic} 
        setDisplayBasic={setDisplayBasic}
        menuGroup={menuGroup}
        setMenuGroup={setMenuGroup}
        item={item}
        setItem={setItem}
        qty={qty}
        setQty={setQty}
        modifiers={modifiers}
        setModifiers={setModifiers}/>
      <div className="tabContainer">
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
        <div className="lgscreen">
          <Button
            type="button"
            disabled={cartOrder.length===0}
            icon="pi pi-shopping-cart"
            label={`Cart (${addUpCart()} items)`}
            className="p-button-raised"
            aria-label="Bookmark"
            onClick={handleCartDisplay}
          />
        </div>

        <div className="floatButtonsTop smscreen medscreen">
          <Button
            type="button"
            icon="pi pi-shopping-cart"
            label={`${addUpCart()}`}
            className="p-button-raised p-button-rounded"
            aria-label="Bookmark"
            onClick={handleCartDisplay}
          />
        </div>
      </div>

      <div className="mainContainer">
        <div
          className="banner"
          style={{ backgroundImage: `url(${background})` }}
        >
          <h1 className="bigTitle">BACK PORCH BAKERY</h1>
        </div>
        <Accordion multiple>
          {menu.map((group, index1) => {
            return (
              group.items.filter(item => itemFilter(item,delivDate,location)).length > 0 && (
                <AccordionTab header={group.title}>
                  <div
                    id={index1}
                    key={"menuGroup" + index1}
                    className="menuGroup"
                  >
                    <div
                      key={"menuGroupGrid" + index1}
                      className="menuGroupGrid"
                    >
                      {group.items
                        .filter((item) => item.location === location)
                        .map((item, index2) => (
                          <div
                            id={index2}
                            key={"itemContainer" + index2}
                            className="itemContainer"
                          >
                            <div className="descripGroup">
                              <h3>{item.name}</h3>
                              <div className="itemDescrip">
                                {item.description}
                              </div>
                              <h4>${item.price.toFixed(2)}</h4>

                              {checkAvailable(item, delivDate, delivTime) ? (
                                <Button
                                  type="button"
                                  icon="pi pi-shopping-cart"
                                  label="SELECT"
                                  className="p-button-rounded p-button-primary p-button-outlined"
                                  aria-label="Bookmark"
                                  onClick={() => onDisplay(index1, index2, item)}
                                />
                              ) : (
                                <div>
                                  {item.specialStart ? (
                                    item.specialEnd ? (
                                      <div className="itemAlert">
                                        Available {item.specialStart} to{" "}
                                        {item.specialEnd}
                                      </div>
                                    ) : (
                                      <div className="itemAlert">
                                        Item available after {item.specialStart}
                                      </div>
                                    )
                                  ) : (
                                    <div></div>
                                  )}
                                  {item.days ? (
                                    <div className="itemAlert">
                                      Available{" "}
                                      {item.days.map((item) => item + ", ")}{" "}
                                      after {time_convert(item.start * 60)}
                                    </div>
                                  ) : !item.specialStart ? (
                                    <div className="itemAlert">
                                      Available everyday after{" "}
                                      {time_convert(item.start * 60)}
                                    </div>
                                  ) : (
                                    ""
                                  )}
                                  {item.lead > 0 && (
                                    <div className="itemAlert">
                                      LEAD TIME: {item.lead} days
                                    </div>
                                  )}
                                </div>
                              )}
                              <div className="gap"> </div>
                            </div>

                            <img
                              className="foodPicSmall"
                              src={item.url}
                              alt="sandwich"
                            />
                          </div>
                        ))}
                    </div>
                  </div>
                </AccordionTab>
              )
            );
          })}
        </Accordion>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default InfoChosen;
