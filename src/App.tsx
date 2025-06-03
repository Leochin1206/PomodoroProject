import { Home } from "./pages/Home";
import { useState } from "react";

import "./styles/theme.css";
import "./styles/global.css";
import type { TaskStateModel } from "./model/TaskStateModel";

const initialState: TaskStateModel = { 
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTak: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15
  }
}

export function App() {

  const [state, setState] = useState(initialState);

  return (
    <Home state={state} setState={setState}/>
  );
}
