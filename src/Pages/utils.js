import { DateTime } from "luxon";

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



export function checkAvailable(item, delivDate, delivTime) {
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

    return leadTime && specialDays && dayOfWeek && timeOfDay;
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

    console.log("isComingUp", isComingUp);

    return item.location === location && isComingUp;
  };

