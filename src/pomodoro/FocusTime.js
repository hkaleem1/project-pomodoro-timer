import React from "react";
import timeConverter from "./timeConverter";

function FocusTime(props) {
    const {setInFocusTime, inFocusTime, playCounter} = props;

    const disabled = () => playCounter ? true : false;

    const handleClick = ({target}) => {
        if (playCounter) return;
        if (target.id === "increase") {
            if ((inFocusTime + 300) > 3600) return;
            setInFocusTime((current) => current + 300);
        } else {
            if ((inFocusTime - 300) < 300) return;
            setInFocusTime((current) => current - 300);
        }
    };

  return (
    <div className="input-group input-group-lg mb-2">
      <span className="input-group-text" data-testid="duration-focus">
        {/* TODO: Update this text to display the current focus session duration */}
        Focus Duration: {timeConverter(inFocusTime)}
      </span>
      <div className="input-group-append">
        {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
        <button
          type="button"
          onClick={handleClick}
          id="decrease"
          className="btn btn-secondary"
          data-testid="decrease-focus"
          disabled={disabled()}
        >
          <span className="oi oi-minus" />
        </button>
        {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
        <button
          type="button"
          onClick={handleClick}
          id="increase"
          className="btn btn-secondary"
          data-testid="increase-focus"
          disabled={disabled()}
        >
          <span name="focus" id="increase" className="oi oi-plus" />
        </button>
      </div>
    </div>
  );
}

export default FocusTime;
