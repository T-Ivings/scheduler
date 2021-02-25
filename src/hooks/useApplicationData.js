import { useState, useEffect } from "react";
import axios from "axios";

export function useApplicationData(props) {

  const setDay = day => setState ({
    ...state, day });

    //contains all states, best practice better written
const [state, setState] = useState({
  day: "Monday",
  days: [],
  appointments: {},
  interviewers: {}

});

//takes props.id + props.interview, creates appointment with correct info and adds appointment to appointments, then sets appointment to new state
function bookInterview(id, interview) {
  const appointment = {
    ...state.appointments[id],
    interview: { ...interview },
  };

  const appointments = {
    ...state.appointments,
    [id]: appointment,
  };
  return axios.put(`/api/appointments/${id}`, { interview })
  .then(() => {
      changeSpotsByDay(id, -1)
    setState({ ...state, appointments });
  });
}

//"""""""" line 17, without changing spots num
function editInterview(id, interview) {
  const appointment = {
    ...state.appointments[id],
    interview: { ...interview },
  };

  const appointments = {
    ...state.appointments,
    [id]: appointment,
  };

  return axios.put(`/api/appointments/${id}`, { interview })
  .then(() => {   
    setState({ ...state, appointments });
  });
}

function changeSpotsByDay(id, num) {
  const days = [...state.days]
  days.map(day => {
    for (const appointment of day.appointments){
      if (appointment === id) {
        day.spots += num;
      }
    }
  })
  return days;
}



function cancelInterview(id) {
  const appointment = {
    ...state.appointments[id],
    interview: null,
  };

  const appointments = {
    ...state.appointments,
    [id]: appointment,
  };


  return axios.delete(`/api/appointments/${id}`)
  .then(() => {
    changeSpotsByDay(id, 1);
    setState({ ...state, appointments });
  })
}


  useEffect(() => {

    Promise.all([
      axios.get('/api/days'),
      axios.get('/api/appointments'),
      axios.get('/api/interviewers')

    ]).then((all) => {

      setState(prevState => ({...prevState, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
  })
  }, []);


  return {
    bookInterview,
    cancelInterview,
    editInterview,
    setDay,
    state,
  };
}