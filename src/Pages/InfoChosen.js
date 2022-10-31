import React from "react";
import { useSettingsStore } from "../Contexts/SettingsZustand";
import { Button } from "primereact/button";
import { menu } from "./Menu";
import { DateTime } from "luxon";

function InfoChosen() {
  const delivDate = useSettingsStore((state) => state.delivDate);
  const delivTime = useSettingsStore((state) => state.delivTime);
  const location = useSettingsStore((state) => state.location);

  function time_convert(num) {
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    return hours + ":" + minutes;
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
    let todayPlus21 = DateTime.now()
      .setZone("America/Los_Angeles")
      .plus({ days: 21 });
    todayPlus21 = todayPlus21.toString().split("T")[0];

    if (item.specialStart > todayPlus21) {
      isComingUp = false;
    }

    if (item.specialEnd < today) {
      isComingUp = false;
    }

    return item.location === location && isComingUp;
  };

  return (
    <React.Fragment>
      <div className="header">
        <div className="homeFlag">
          <img
            srcSet="https://backporchbakery.square.site/uploads/b/08070970-0939-11ea-b111-29f3aeaebae0/e426db4990a8af339ea09b0f7e2396a6.jpeg?width=400 400w, https://backporchbakery.square.site/uploads/b/08070970-0939-11ea-b111-29f3aeaebae0/e426db4990a8af339ea09b0f7e2396a6.jpeg?width=800 800w, https://backporchbakery.square.site/uploads/b/08070970-0939-11ea-b111-29f3aeaebae0/e426db4990a8af339ea09b0f7e2396a6.jpeg?width=1200 1200w, https://backporchbakery.square.site/uploads/b/08070970-0939-11ea-b111-29f3aeaebae0/e426db4990a8af339ea09b0f7e2396a6.jpeg?width=1600 1600w, https://backporchbakery.square.site/uploads/b/08070970-0939-11ea-b111-29f3aeaebae0/e426db4990a8af339ea09b0f7e2396a6.jpeg?width=2000 2000w, https://backporchbakery.square.site/uploads/b/08070970-0939-11ea-b111-29f3aeaebae0/e426db4990a8af339ea09b0f7e2396a6.jpeg?width=2400 2400w"
            sizes="(min-width: 600px) 70.35809523809523px, 43.45174603174603px"
            src="https://backporchbakery.square.site/uploads/b/08070970-0939-11ea-b111-29f3aeaebae0/e426db4990a8af339ea09b0f7e2396a6.jpeg"
            alt="Back Porch Bakery logo"
          />
        </div>
        <div className="buttons">
          <Button
            label="BUY A GIFT CARD"
            className="p-button-text p-button-plain"
          />
          <Button
            label="BUY A T-SHIRT"
            className="p-button-text p-button-plain"
          />
        </div>
        <div className="cartButton">
          <Button
            icon="pi pi-shopping-cart"
            className="p-button-rounded p-button-plain p-button-text"
            aria-label="Cart"
          />
        </div>
      </div>

      <div className="mainContainer">
        <div className="banner">
          <h1>BACK PORCH BAKERY</h1>
        </div>

        {menu.map((group, index) => {
          return (
            group.items.filter(itemFilter).length > 0 && (
              <React.Fragment>
                <div id={index} key={"menuGroup"+index} className="menuGroup">
                  <h2 key={"groupTitle"+index}>{group.title}</h2>
                  <div className="menuGroupDescripContainer">
                    <div className="menuGroupDescription">
                      The cafe is OPEN with all of our pastries, cookies,
                      breads, and drinks!
                    </div>
                    <div className="menuGroupDescription">{group.info}</div>
                  </div>
                  <div key={"menuGroupGrid"+index} className="menuGroupGrid">
                    {group.items
                      .filter((item) => item.location === location)
                      .map((item, index) => (
                        <div id={index} key={"itemContainer"+index} className="itemContainer">
                          <div className="descripGroup">
                            <h3>{item.name}</h3>
                            <div className="itemDescrip">
                              {item.description}
                            </div>
                            <h4>${item.price}</h4>

                            {checkAvailable(item) ? (
                              <Button
                                icon="pi pi-shopping-cart"
                                label="SELECT"
                                className="p-button-rounded p-button-primary p-button-outlined"
                                aria-label="Bookmark"
                              />
                            ) : (
                              <div>
                                {item.specialStart ? (
                                  item.specialEnd ? (
                                    <div className="itemAlert">
                                      Item available between {item.specialStart}{" "}
                                      and {item.specialEnd}
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
                                    {item.days.map((item) => item + ", ")} after{" "}
                                    {time_convert(item.start * 60)} am
                                  </div>
                                ) : !item.specialStart ? (
                                  <div className="itemAlert">
                                    Available everyday after{" "}
                                    {time_convert(item.start * 60)} am
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
                          </div>
                          <img
                            className="foodPic"
                            src={
                              "https://backporchbakery.square.site/" + item.url
                            }
                            alt="sandwich"
                          />
                        </div>
                      ))}
                  </div>
                </div>
              </React.Fragment>
            )
          );
        })}
      </div>

      <div className="locationInfoBox">
        <div className="locationInfoTitle">Location & Hours</div>
        <div className="column">
          <div>Back Porch Bakery</div>
          <div>6005 El Camino Real</div>
          <div>Atascadero, California 93422</div>
          <div>(805) 914-5443</div>
          <div>backporchbakeryslo@gmail.com</div>
          <div>GET DIRECTIONS</div>
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
      <div className="footer">
        <div className="homeFlag">
          <Button label="FLAG" />
        </div>
        <div className="copyright">2022</div>
      </div>
    </React.Fragment>
  );
}

export default InfoChosen;
