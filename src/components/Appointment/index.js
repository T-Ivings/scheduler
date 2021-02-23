import React from 'react';
import useVisualMode from 'hooks/useVisualMode';

import 'components/Appointment/styles.scss'

import Header from 'components/Appointment/header';
import Show from 'components/Appointment/show';
import Empty from 'components/Appointment/empty';
import Form from 'components/Appointment/form';
import Status from 'components/Appointment/status';
import Confirm from 'components/Appointment/confirm';
import Error from "components/Appointment/error";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETING";
const CONFIRM = "CONFIRM";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE"


export default function Appointment(props) {
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );
  
  function save(name, interviewer) {
    transition(SAVING)
   props.bookInterview(props.id, { student: name, interviewer })
   .then(() => transition(SHOW))
   .catch(error => transition(ERROR_SAVE, true));
    
  }

  function edit(name, interviewer) {
    transition(SAVING)
    props.editInterview(props.id, {student: name, interviewer})
    .then(() => transition(SHOW));
  }
  
  function cancel() {
    transition(DELETING, true)
    props.cancelInterview(props.id)
    .then(() => {
      transition(EMPTY)
    })
    .catch(error => transition(ERROR_DELETE, true));
  }

  function confirm() {
    transition(CONFIRM)
  }

 return ( 
   <article className="appointment" data-testid="appointment">
     <Header time={props.time}/>
      {mode === EMPTY && <Empty onAdd={ () => transition(CREATE) } /> }
      {mode === SHOW && (
       <Show
         student={ props.interview.student }
         interviewer={ props.interview.interviewer.name }
         onDelete={ confirm }
         onEdit={()=> transition(EDIT) }

       />
    )}
    {mode === CREATE && (
      <Form
      interviewers={ props.interviewers }
      onCancel={ () => back() }
      onSave={ save }
    />
    )}

    { mode === SAVING && <Status message={ "Saving"} /> }

    { mode === DELETING && <Status message={ "Deleting"} /> }

    { mode === CONFIRM && <Confirm message={ "Are you sure you want to delete your appointment?" } onCancel={ () => back() } onConfirm={ cancel } /> }

    { mode === EDIT && 
    <Form
      interviewer={ props.interview.interviewer.id }
      student={ props.interview.student }
      interviewers={ props.interviewers }
      onCancel={ ()=> back() }
      onSave={ edit }
    /> }

    {mode === ERROR_DELETE && (
      <Error 
      message={ "Could not delete appointment :(" }
      onClose={ () => back() }
      />
    )}

    { mode === ERROR_SAVE && (
      <Error 
      message={ "Could not save appointment :(" }
      onClose={ () => back() }
      />
    ) }

  </article>
  )
}