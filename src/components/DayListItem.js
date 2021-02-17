import React from "react";
import className from "classnames";

import "components/DayListItem.scss";

export default function DayListItem(props) {
  const DayList = className("day-list__item", {
    "day-list__item--selected": props.selected === true,
    "day-list__item--full": props.spots === 0
  });

  


  return (
    <li className={DayList} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
}

const formatSpots = (spots) => {
  if (spots === 0) {
    return "no spots remaining";
  } 
  if (spots === 1) {
    return "1 spot remaining";
  }
  return `${spots} spots remaining`
 }