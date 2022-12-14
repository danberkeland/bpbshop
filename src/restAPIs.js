import { Auth } from "aws-amplify";
import axios from "axios";
import { time_convert } from "./Pages/utils";

const API_bpbrouterAuth =
  "https://8gw70qn5eb.execute-api.us-east-2.amazonaws.com/auth";

const API_cognitoUser =
  "https://wj4mb7q3xi.execute-api.us-east-2.amazonaws.com/auth";

// NEW STUFF

export const fetcher = async (event, path, fetchType) => {
  let root;
  let user;
  let token;
  let headers;
  if (fetchType === "route") {
    root = API_bpbrouterAuth;
    user = await Auth.currentAuthenticatedUser();
    token = user.signInUserSession.idToken.jwtToken;
    headers = {
      "content-type": "application/json",
      Authorization: token,
    };
  } else if (fetchType === "cognito") {
    root = API_cognitoUser;
    headers = {
      "content-type": "application/json",
    };
  }

  let obj;
  try {
    obj = await axios.post(root + path, event, {
      headers: headers,
    });
  } catch (err) {
    console.log(`Error creating ${path}`, err);
  }
  console.log(`${path} Response:`, obj);
  return obj.data.body;
};

export const createProduct = (event) => {
  return fetcher(event, "/products/createProduct", "route");
};

export const updateProduct = (event) => {
  return fetcher(event, "/products/updateProduct", "route");
};

export const infoChosen = (event, location, init, setInit) => {
  console.log("event", event);
 
  let newTime = new Date(Date.parse(event.time));
  let newDate = new Date(Date.parse(event.pickup));
  

  console.log("newDate", newDate);
  let fullTime = newTime.getHours() + newTime.getMinutes() / 60;
  let fullDate =
    newDate.getFullYear() +
    "-" +
    (newDate.getMonth() + 1 < 10
      ? "0" + (newDate.getMonth() + 1)
      : newDate.getMonth() + 1) +
    "-" +
    (newDate.getDate() < 10 ? "0" + newDate.getDate() : newDate.getDate());
  if ((init===false && event.location !== location && fullTime>11) || newDate.getDate() === 24) {
    newTime = new Date(Date.parse("01 Jan 2022 07:00:00"));
    fullTime = newTime.getHours() + newTime.getMinutes() / 60;
    event.time = newTime
  }
  console.log("fullDate", fullDate);
  event.setDelivTime(fullTime);
  event.setLocation(event.location);
  event.setDelivDate(fullDate);
  event.setDelivDateProgram(event.pickup);
  event.setDelivTimeProgram(event.time);
  event.setIsLoading(false);
  setInit(false)
  event.setFormType("infoChosen");
};
