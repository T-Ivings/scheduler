import React from 'react';
import { useVisualMode } from 'hooks/useVisualMode';

import 'components/Appointment/styles.scss'

import Header from 'components/Appointment/header';
import Show from 'components/Appointment/show';
import Empty from 'components/Appointment/empty';
import Form from 'components/Appointment/form';

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";

const interviewers = [];


export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

 return ( 
   <article className="appointment">
     <Header time={props.time}/>
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
       <Show
         student={props.interview.student}
         interviewer={props.interview.interviewer}
       />
    )}
    {mode === CREATE && (
      <Form
      interviewers={interviewers}
      onCancel={() => back()}
      
      />
    )}
  </article>
  )
}