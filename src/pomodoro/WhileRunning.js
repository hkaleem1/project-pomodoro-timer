import React from "react";
import timeConverter from "./timeConverter";

function WhileRunning(props) {
  const {
    inFocusTime,
    timer,
    style,
    inFocus,
    playCounter,
    inBreakTime,
  } = props;

  const timerType = () => inFocus ? "Focusing" : "On Break";

  const paused = () => {
    if (playCounter % 2 === 0) return <h1>PAUSED</h1>;
  };

  const minSecTimer = () => {
    return inFocus ? timeConverter(inFocusTime) : timeConverter(inBreakTime);
  }

  if (playCounter) {
    return (
      <div>
        <div className="row mb-2">
          <div className="col">
            <h2 data-testid="session-title">
              {timerType()} for {minSecTimer()} minutes
            </h2>
            <p className="lead" data-testid="session-sub-title">
              {timeConverter(timer)} remaining
            </p>
            {paused()}
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={`${style}`}
                style={{ width: `${style}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}
 export default WhileRunning;