import React, { useState } from "react";
import useInterval from "../utils/useInterval";
import FocusTime from "./FocusTime";
import BreakTime from "./BreakTime";
import TimerControl from "./TimerControl";
import WhileRunning from "./WhileRunning";

function Pomodoro() {
  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timer, setTimer] = useState(1500);
  const [style, setStyle] = useState(0);
  const [inFocus, setInFocus] = useState(true);
  const [inFocusTime, setInFocusTime] = useState(1500);
  const [inBreakTime, setInBreakTime] = useState(300);
  const [intervalStyle, setIntervalStyle] = useState(0);
  const [playCounter, setPlayCounter] = useState(0);

  useInterval(
    () => {
      // ToDo: Implement what should happen when the timer is running
      setTimer((current) => current - 1);
      setStyle((style) => style + 100 / intervalStyle);
      if (timer === 0) {
        new Audio(`https://bigsoundbank.com/UPLOAD/mp3/1482.mp3`).play();
        if (inFocus) {
          setTimer(() => inBreakTime);
          setIntervalStyle(() => inBreakTime);
        } else {
          setTimer(() => inFocusTime);
          setIntervalStyle(() => inFocusTime);
        }
        setInFocus((prev) => !prev);
        setStyle(() => 0);
      }
    },
    isTimerRunning ? 1000 : null
  );

  return (
    <div className="pomodoro">
      <div className="row">
        <div className="col">
          <FocusTime
            setInFocusTime={setInFocusTime}
            inFocusTime={inFocusTime}
            playCounter={playCounter}
          />
        </div>
        <div className="col">
          <div className="float-right">
            <BreakTime
              inBreakTime={inBreakTime}
              setInBreakTime={setInBreakTime}
              playCounter={playCounter}
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <TimerControl
            isTimerRunning={isTimerRunning}
            setIsTimerRunning={setIsTimerRunning}
            inFocusTime={inFocusTime}
            setTimer={setTimer}
            setInFocus={setInFocus}
            setStyle={setStyle}
            playCounter={playCounter}
            setPlayCounter={setPlayCounter}
            setIntervalStyle={setIntervalStyle}
          />
        </div>
      </div>
      <WhileRunning
      playCounter={playCounter}
      inFocusTime={inFocusTime}
      inBreakTime={inBreakTime}
      timer={timer}
      style={style}
      inFocus={inFocus} />
    </div>
  );
}

export default Pomodoro;
