import React from "react";
import className from "classnames";


import "components/Button.scss";

//exports functional button, props are atribs
export default function Button(props) {
   const buttonClass = className("button", {
      "button--confirm": props.confirm,
      "button--danger": props.danger
    });


   return (
      <button
        className={buttonClass}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </button>
   );
 };