import React from "react";

import "./styles.scss"

import Header from "components/Appointment/header";
import Show from "components/Appointment/show";
import Empty from "components/Appointment/empty";

export default function Appointment(props) {
  
    if (props.interview) {
      return ( 
        <article className="appointment">
          <Header time={props.time}/>
          <Show student={props.interview.student} interviewer={props.interview.interviewer.name}/>
          </article>
      )
    } else {
      return ( 
        <article className="appointment">
          <Header time={props.time}/>
          <Empty/>
          </article>
  )
 }
}