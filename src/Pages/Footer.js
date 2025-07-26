import React from "react";

import { Button } from "primereact/button";

import { Title } from "../CommonStyles";

function Footer() {

  const handleDirections1 = () => {
    window.open('https://www.google.com/maps/dir/?api=1&destination=6005+El+Camino+Real+Atascadero+CA+93422','_blank')
  }

  const handleDirections2 = () => {
    window.open('https://maps.app.goo.gl/veL9a1WuBBP69La67','_blank')
  }

  return (
    <React.Fragment>
      <div className="locationInfoBox">
        <Title>Location & Hours Carlton Hotel</Title>
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
              onClick={handleDirections1}
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
      <div className="locationInfoBox">
        <Title>Location & Hours San Luis Obispo</Title>
        <div className="twoColumns">
          <div className="column">
            <div>Back Porch Bakery</div>
            <div>3536 S. Higuera #210</div>
            <div>San Luis Obispo, California 93401</div>
            <div>backporchbakeryslo@gmail.com</div>
            <div className="gap"> </div>
            <Button
              type="button"
              icon="pi pi-map"
              label="GET DIRECTIONS"
              className="p-button-rounded p-button-primary p-button-outlined"
              aria-label="Bookmark"
              onClick={handleDirections2}
            />
          </div>
          <div className="column">
            <div>Sunday 7:00 am - 12:00 pm</div>
            <div>Monday 7:00 am - 12:00 pm</div>
            <div>Tuesday 7:00 am - 12:00 pm</div>
            <div>Wednesday 7:00 am - 12:00 pm</div>
            <div>Thursday 7:00 am - 12:00 pm</div>
            <div>Friday 7:00 am - 12:00 pm</div>
            <div>Saturday 7:00 am - 12:00 pm</div>
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

export default Footer;
