import React from "react";
import classNames from "../utils/class-names";

function TimerControl(props) {
  const {
    isTimerRunning,
    setIsTimerRunning,
    inFocusTime,
    setTimer,
    setInFocus,
    setStyle,
    playCounter,
    setPlayCounter,
    setIntervalStyle,
  } = props;

  const disabled = () => !playCounter ? true : false;

  const playPause = () => {
    if (!playCounter) {
      setTimer(() => inFocusTime);
      setIntervalStyle(() => inFocusTime);
    }
    setIsTimerRunning((preValue) => !preValue);
    setPlayCounter((value) => value + 1)
  }

  const stopBtn = () => {
    if (playCounter) {
      setIsTimerRunning(() => false);
      setTimer(() => inFocusTime);
      setInFocus(() => true);
      setStyle(() => 0);
      setPlayCounter(() => 0);
      setIntervalStyle(() => inFocusTime);
    }
  };

  return (
    <>
      <div
        className="btn-group btn-group-lg mb-2"
        role="group"
        aria-label="Timer controls"
      >
        <button
          type="button"
          className="btn btn-primary"
          data-testid="play-pause"
          title="Start or pause timer"
          onClick={playPause}
        >
          <span
            className={classNames({
              oi: true,
              "oi-media-play": !isTimerRunning,
              "oi-media-pause": isTimerRunning,
            })}
          />
        </button>
        {/* TODO: Implement stopping the current focus or break session and disable when there is no active session */}
        <button
          type="button"
          onClick={stopBtn}
          className="btn btn-secondary"
          title="Stop the session"
          disabled={disabled()}
        >
          <span className="oi oi-media-stop" />
        </button>
      </div>
    </>
  );
}

export default TimerControl;
