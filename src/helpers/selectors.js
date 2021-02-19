export function getInterviewersForDay(state, day) {
  const arr = []

  for(const stateDay of state.days){
    for(const apmt in state.appointments) {

      const thisAppointment = state.appointments[apmt];
      if (stateDay.name === day) {
      
        for(const interviewer in state.interviewers) {

          if(thisAppointment.interview !== null) {
      
            if(thisAppointment.interview.interviewer === state.interviewers[interviewer].id) {
      
              if(!arr.includes(state.interviewers[interviewer])) {
                arr.push(state.interviewers[interviewer])
              }
            }
          }
        }  
      }
    }
  }
    if (arr.length === 0) {
      return [];
  } 
    return arr;
}
export function getAppointmentsForDay(state, day) {
  const arr = []

  for(const stateDay of state.days){
    for(const apmt in state.appointments) {
      if (stateDay.name === day) {
        const thisAppointment = state.appointments[apmt];
        if (stateDay.appointments.includes(thisAppointment.id)) {
          arr.push(thisAppointment)
          }
        }
      }
    }
    if (arr.length === 0) {
      return [];
  } 
    return arr;
}

export function getInterview(state, interview) {
  let obj = { };
  if(!interview) {
    return null;
  }
  const interviewerId = interview.interviewer;
  const name = state.interviewers[interviewerId].name
  const avatar = state.interviewers[interviewerId].avatar

  obj["student"] = interview.student;
  obj["interviewer"] = {
    id: interviewerId,
    name,
    avatar
  }
  return obj;
}


