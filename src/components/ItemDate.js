import React from "react";
import "./ItemDate.css";

const ItemDate = (props) => {
  const day = props.day;
  const month = props.month;
  const year = props.year;

  return (
    <div className="mfg-date">
      <span>{day}</span>
      <span>{month}</span>
      <span>{year}</span>
      {props.children};
    </div>
  );
};

export default ItemDate;
