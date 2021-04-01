import React from "react";
import timeConverter from "./timeConverter";

function BreakTime (props) {
  const {inBreakTime, setInBreakTime, playCounter} = props;

  const disabled = () => playCounter ? true : false;

  const handleClick = ({target}) => {
    if (playCounter) return;
    if (target.id === "increase") {
      if ((inBreakTime + 60) > 900) return;
      setInBreakTime((value) => value + 60);
    } else {
      if ((inBreakTime - 60) < 60) return;
      setInBreakTime((value) => value - 60);
    };
  }

    return (
        <div className="input-group input-group-lg mb-2">
              <span className="input-group-text" data-testid="duration-break">
                {/* TODO: Update this text to display the current break session duration */}
                Break Duration: {timeConverter(inBreakTime)}
              </span>
              <div className="input-group-append">
                {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
                <button
                  type="button"
                  onClick={handleClick}
                  name="break"
                  id="decrease"
                  className="btn btn-secondary"
                  data-testid="decrease-break"
                  disabled={disabled()}
                >
                  <span className="oi oi-minus" />
                </button>
                {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
                <button
                  type="button"
                  onClick={handleClick}
                  name="break"
                  id="increase"
                  className="btn btn-secondary"
                  data-testid="increase-break"
                  disabled={disabled()}
                >
                  <span name="break" id="increase" className="oi oi-plus" />
                </button>
              </div>
            </div>
    );
}

export default BreakTime;