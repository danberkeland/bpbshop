import axios from "axios";
import { DateTime } from "luxon";
import { menu } from "./Menu";

export function time_convert(num) {
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

export function date_convert(num) {
  let newDate = DateTime.fromISO(num);
  console.log("newDate", newDate);
  console.log("newDate", newDate.DATE_MED_WITH_WEEKDAY);
  return newDate.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);
}

export function checkAvailable(
  item,
  delivDate,
  delivTime,
  location,
  cartOrder,
  setCartOrder
) {
  // check location match
  let loc = false;

  if (item.location !== location) {
    for (let cat of menu) {
      let ind = cat.items.findIndex(
        (men) => men.location === location && men.name === item.name
      );
      console.log("ind", ind);
      if (ind > -1) {
        loc = true;
      }
    }
  } else {
    loc = true;
  }

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
  let timeOfDay = item.start <= delivTime;

  return loc && leadTime && specialDays && dayOfWeek && timeOfDay;
}

export const itemFilter = (item, delivDate, location) => {
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

  return item.location === location && isComingUp;
};

export const checkout = async (event, setIsLoading) => {
  try {
   
    let response = await axios.post(
      "https://1fjluffgld.execute-api.us-east-2.amazonaws.com/prod/grabsquarecheckouturl",
      event,
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );

    //let url = await response.json();
    //url = JSON.parse(url);
   setIsLoading(false)
    window.location.href = await JSON.parse(response.data)
  } catch {
    console.log("Error on Square load");
  }
};
