import React from "react";
import { useSettingsStore } from "../Contexts/SettingsZustand";
import { Button } from "primereact/button";

function InfoChosen() {
  const delivDate = useSettingsStore((state) => state.delivDate);
  const delivTime = useSettingsStore((state) => state.delivTime);
  const location = useSettingsStore((state) => state.location);

  return (
    <React.Fragment>
      <div>InfoChosen</div>
      <div>{delivDate}</div>
      <div>{delivTime}</div>
      <div>{location}</div>
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
      
      <div className="itemContainer">
      <h1>BACK PORCH BAKERY</h1>
        <div className="menuGroup">
          <h2>Breakfast Sandwiches</h2>
          <div className="menuGroupDescription">
            The cafe is OPEN with all of our pastries, cookies, breads, and
            drinks!
          </div>
          <div className="menuGroupDescription">
            Breakfast Sandwiches are available all day.
          </div>
        </div>
        <div className="menuGroupGrid">
        <div className="itemContainer">
         
          <h3>Turkey, Egg, and Avocado Croissant</h3>
          <div className="itemDescrip">
            Egg, Turkey, Avocado, Aioli on a Back Porch Croissant
          </div>
          <h4>$10.25</h4>
          <div className="itemPic">PIC</div>
        </div>
        <div className="itemContainer">
          <h3>Turkey, Egg, and Avocado Croissant</h3>
          <div className="itemDescrip">
            Egg, Turkey, Avocado, Aioli on a Back Porch Croissant
          </div>
          <h4>$10.25</h4>
          <div className="itemPic">PIC</div>
        </div>
        <div className="itemContainer">
          <h3>Turkey, Egg, and Avocado Croissant</h3>
          <div className="itemDescrip">
            Egg, Turkey, Avocado, Aioli on a Back Porch Croissant
          </div>
          <h4>$10.25</h4>
          <div className="itemPic">PIC</div>
          </div>
       
        </div>
        <div className="menuGroup">
          <h2>Breakfast Sandwiches</h2>
          <div className="menuGroupDescription">
            The cafe is OPEN with all of our pastries, cookies, breads, and
            drinks!
          </div>
          <div className="menuGroupDescription">
            Breakfast Sandwiches are available all day.
          </div>
        </div>
        <div className="itemContainer">
          <h3>Turkey, Egg, and Avocado Croissant</h3>
          <div className="itemDescrip">
            Egg, Turkey, Avocado, Aioli on a Back Porch Croissant
          </div>
          <h4>$10.25</h4>
          <div className="itemPic">PIC</div>
        </div>
        <div className="itemContainer">
          <h3>Turkey, Egg, and Avocado Croissant</h3>
          <div className="itemDescrip">
            Egg, Turkey, Avocado, Aioli on a Back Porch Croissant
          </div>
          <h4>$10.25</h4>
          <div className="itemPic">PIC</div>
        </div>
        <div className="itemContainer">
          <h3>Turkey, Egg, and Avocado Croissant</h3>
          <div className="itemDescrip">
            Egg, Turkey, Avocado, Aioli on a Back Porch Croissant
          </div>
          <h4>$10.25</h4>
          <div className="itemPic">PIC</div>
        </div>
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
