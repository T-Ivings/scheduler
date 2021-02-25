import React, {useState} from 'react';

const useVisualMode = (initial) => {
  const [history, setHistory] = useState([initial]);

  const transition = function(newMode, replace = false) {

    if (!replace) {
      setHistory(prevState => {

        return [...prevState, newMode]
      
      });

    } else {

      back()

      setHistory(prevState => {  
        return [...prevState, newMode]
      })
    
    }
  }

  const back = function() {
    //set new state of previous, remove state on the end, return newstate as old state
    setHistory(prevState => {
      const newHistory = [...prevState];
      newHistory.pop();
      return newHistory;

    });
  }

const mode = history.slice(-1)[0]; //gets last item in array v cool gary
  return {mode, transition, back}
}

export default useVisualMode;