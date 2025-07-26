import React from "react";

import { CenteredContainer, GroupBoxCenter, Title } from "../CommonStyles";

import "./Choose.css";

import { Button } from "primereact/button";
import { useSearchParams } from "react-router-dom";
import { time_convert, date_convert } from "./utils";

export const Confirm = () => {
  
  const [searchParams] = useSearchParams()
  console.log('searchParams', searchParams)

  const handleClick = () => {
    window.location.href = "https://www.backporchbakery.com"
  }
  let location = ""
  let delivDate = ""
  let delivTime = ""

  try {location = searchParams.get('location').charAt(0).toUpperCase()+searchParams.get('location').slice(1)
  delivDate = date_convert(searchParams.get('delivDate'))
  delivTime = time_convert(searchParams.get('delivTime')*60)} catch{}


  return (
    <CenteredContainer>
      <GroupBoxCenter>
        <Title>Thank you for your order!</Title>

        <div className="space">We'll see you at {location}</div>
        <div className="space">{delivDate}</div>
        <div className="space">{delivTime}</div>
        <div className="space">A receipt has been sent to your email</div>
        <Button label="www.backporchbakery.com" className="p-button-text" onClick={handleClick}/>
      </GroupBoxCenter>
    </CenteredContainer>
  );
};
