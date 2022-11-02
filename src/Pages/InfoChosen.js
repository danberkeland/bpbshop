import React, { useState } from "react";
import { useSettingsStore } from "../Contexts/SettingsZustand";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputNumber } from "primereact/inputnumber";
import { Dropdown } from "primereact/dropdown";
import { Accordion, AccordionTab } from "primereact/accordion";
import { menu } from "./Menu";
import { DateTime } from "luxon";
import { Title, SubInfo } from "../CommonStyles";
import background from "../pastryblock.jpg";

const breads = [
  { label: "NONE", value: "NONE" },
  { label: "Croissant ($1.00)", value: "croix" },
  { label: "Brioche ($0.50)", value: "bri" },
  { label: "Baguette ($0.50)", value: "bag" },
  { label: "Multigrain ($0.50)", value: "multi" },
  { label: "Levain ($0.50)", value: "lev" },
];

function InfoChosen() {
  const delivDate = useSettingsStore((state) => state.delivDate);
  const delivTime = useSettingsStore((state) => state.delivTime);
  const location = useSettingsStore((state) => state.location);

  const [displayBasic, setDisplayBasic] = useState(false);
  const [menuGroup, setMenuGroup] = useState(0);
  const [item, setItem] = useState(0);
  const [qty, setQty] = useState(0);
  const [selectedBread, setSelectedBread] = useState("NONE");

  function time_convert(num) {
    let result;
    let ampm = " am";
    var hours = Math.floor(num / 60);
    if (hours > 12) {
      hours -= 12;
      ampm = " pm";
    }
    var minutes = num % 60;
    if (minutes < 10) {
      result = hours + ":0" + minutes + ampm;
    } else {
      result = hours + ":" + minutes + ampm;
    }

    return result;
  }

  function date_convert(num) {
    let newDate = DateTime.fromISO(num);
    console.log("newDate", newDate);
    console.log("newDate", newDate.DATE_MED_WITH_WEEKDAY);
    return newDate.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);
  }

  function checkAvailable(item) {
    // check if within lead time
    let todayPlusLead = DateTime.now()
      .setZone("America/Los_Angeles")
      .plus({ days: item.lead });
    todayPlusLead = todayPlusLead.toString().split("T")[0];
    let leadTime = delivDate >= todayPlusLead;

    // check if within special days
    let specialDays = true;
    if (item.specialStart > delivDate || item.specialEnd < delivDate) {
      specialDays = false;
    }

    // check match on dayofweek
    let dayOfWeek = true;
    let newDate = DateTime.fromISO(delivDate);
    let weekday = newDate.weekdayShort;
    dayOfWeek = item.days ? item.days.includes(weekday) : true;

    // check on time of day
    let timeOfDay = item.start < delivTime;

    return leadTime && specialDays && dayOfWeek && timeOfDay;
  }

  const itemFilter = (item) => {
    // check if available within the week
    let isComingUp = true;
    let today = DateTime.now().setZone("America/Los_Angeles");
    today = today.toString().split("T")[0];
    let delivDatePlus21 = DateTime.fromISO(delivDate)
      .setZone("America/Los_Angeles")
      .plus({ days: 21 });
    delivDatePlus21 = delivDatePlus21.toString().split("T")[0];

    if (item.specialStart > delivDatePlus21) {
      isComingUp = false;
    }

    if (item.specialEnd < today) {
      isComingUp = false;
    }

    console.log("isComingUp", isComingUp);

    return item.location === location && isComingUp;
  };

  const onDisplay = (index1, index2) => {
    console.log("index", index1 + index2);
    setMenuGroup(index1);
    setItem(index2);
    setDisplayBasic(true);
  };

  const onHide = () => {
    setQty(0);
    setSelectedBread("NONE");
    setDisplayBasic(false);
  };

  const onBreadChange = (e) => {
    setSelectedBread(e.value);
  };

  const cartAdd = (price) => {
    let total = qty * price;
    return "ADD TO CART $" + total;
  };

  return (
    <React.Fragment>
      <Dialog
        visible={displayBasic}
        style={{ width: "50vw", minWidth: "300px" }}
        onHide={onHide}
      >
        <img
          className="foodPicBig"
          src={menu[menuGroup].items[item].url}
          alt="sandwich"
        />
        <Title>{menu[menuGroup].items[item].name}</Title>
        <SubInfo>{menu[menuGroup].items[item].description}</SubInfo>
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
        <SubInfo>For Pickup from {location} on:</SubInfo>
        <SubInfo>
          {delivDate} at {delivTime}
        </SubInfo>

        {menu[menuGroup].items[item].modifiers && (
          <React.Fragment>
            <label>Substitute Bread:</label>
            <Dropdown
              value={selectedBread}
              options={breads}
              onChange={onBreadChange}
              optionLabel="label"
            />
          </React.Fragment>
        )}
        <Button
          type="button"
          icon="pi pi-shopping-cart"
          label={cartAdd(menu[menuGroup].items[item].price)}
          className="p-button-raised"
          aria-label="Bookmark"
          onClick={() => {}}
        />
      </Dialog>
      <div className="tabContainer">
        <div className="tabInfo">
          <div>For pickup at&nbsp;&nbsp; </div>
          <h2>{location}</h2>
          <div> &nbsp;&nbsp; on &nbsp;&nbsp; </div>
          <h2>{date_convert(delivDate)}</h2>
          <div> &nbsp;&nbsp;at&nbsp;&nbsp; </div>
          <h2> {time_convert(delivTime * 60)}</h2>
        </div>

        <Button
          type="button"
          icon="pi pi-clock"
          label="Change Pickup"
          className="p-button-raised"
          aria-label="Bookmark"
          onClick={() => {}}
        />
        <Button
          type="button"
          icon="pi pi-shopping-cart"
          label="CART"
          className="p-button-raised"
          aria-label="Bookmark"
          onClick={() => {}}
        />
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
              group.items.filter(itemFilter).length > 0 && (
                <AccordionTab header={group.title}>
                  <div
                    id={index1}
                    key={"menuGroup" + index1}
                    className="menuGroup"
                  >
                    {/*  <Title key={"groupTitle" + index1}>{group.title}</Title>
                  <div className="menuGroupDescripContainer">
                    <div className="menuGroupDescription">
                      The cafe is OPEN with all of our pastries, cookies,
                      breads, and drinks!
                    </div>
                    <div className="menuGroupDescription">{group.info}</div>
            </div>*/}
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

                              {checkAvailable(item) ? (
                                <Button
                                  type="button"
                                  icon="pi pi-shopping-cart"
                                  label="SELECT"
                                  className="p-button-rounded p-button-primary p-button-outlined"
                                  aria-label="Bookmark"
                                  onClick={() => onDisplay(index1, index2)}
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

      <div className="locationInfoBox">
        <Title>Location & Hours</Title>
        <div className="twoColumns">
          <div className="column">
            <div>Back Porch Bakery</div>
            <div>6005 El Camino Real</div>
            <div>Atascadero, California 93422</div>
            <div>(805) 914-5443</div>
            <div>backporchbakeryslo@gmail.com</div>
            <div className="gap"> </div>
            <Button
              type="button"
              icon="pi pi-map"
              label="GET DIRECTIONS"
              className="p-button-rounded p-button-primary p-button-outlined"
              aria-label="Bookmark"
              onClick={() => {}}
            />
          </div>
          <div className="column">
            <div>Sunday 7:00 am - 2:00 pm</div>
            <div>Monday 7:00 am - 2:00 pm</div>
            <div>Tuesday 7:00 am - 2:00 pm</div>
            <div>Wednesday 7:00 am - 2:00 pm</div>
            <div>Thursday 7:00 am - 2:00 pm</div>
            <div>Friday 7:00 am - 2:00 pm</div>
            <div>Saturday 7:00 am - 2:00 pm</div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="homeFlag">
          <img
            srcSet="https://backporchbakery.square.site/uploads/b/08070970-0939-11ea-b111-29f3aeaebae0/e426db4990a8af339ea09b0f7e2396a6.jpeg?width=400 400w, https://backporchbakery.square.site/uploads/b/08070970-0939-11ea-b111-29f3aeaebae0/e426db4990a8af339ea09b0f7e2396a6.jpeg?width=800 800w, https://backporchbakery.square.site/uploads/b/08070970-0939-11ea-b111-29f3aeaebae0/e426db4990a8af339ea09b0f7e2396a6.jpeg?width=1200 1200w, https://backporchbakery.square.site/uploads/b/08070970-0939-11ea-b111-29f3aeaebae0/e426db4990a8af339ea09b0f7e2396a6.jpeg?width=1600 1600w, https://backporchbakery.square.site/uploads/b/08070970-0939-11ea-b111-29f3aeaebae0/e426db4990a8af339ea09b0f7e2396a6.jpeg?width=2000 2000w, https://backporchbakery.square.site/uploads/b/08070970-0939-11ea-b111-29f3aeaebae0/e426db4990a8af339ea09b0f7e2396a6.jpeg?width=2400 2400w"
            sizes="(min-width: 600px) 70.35809523809523px, 43.45174603174603px"
            src="https://backporchbakery.square.site/uploads/b/08070970-0939-11ea-b111-29f3aeaebae0/e426db4990a8af339ea09b0f7e2396a6.jpeg"
            alt="Back Porch Bakery logo"
          />
        </div>
        <div className="copyright">&#169; 2022</div>
        <div className="cartButton">
          <Button
            icon="pi pi-shopping-cart"
            className="p-button-rounded p-button-plain p-button-text"
            aria-label="Cart"
          />
        </div>
      </div>
    </React.Fragment>
  );
}

export default InfoChosen;
