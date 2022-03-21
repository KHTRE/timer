import React, { useState } from 'react';
import './App.css';
import Timer from './components/Timer/Timer';

const App: React.FC = () => {
  const [powerOn, togglePowerOn] = useState(false);
  const [time, setTime] = useState(0);
  const [minHrsToggler, toggleMinHrs] = useState('MIN');
  const maxTime = 100;

  const togglePower = () => {
    togglePowerOn((prevPowerOn) => {
      if (prevPowerOn === true) {
        toggleMinHrs('MIN');
        setTime(0);
      }

      return !prevPowerOn;
    });
  };

  const upTime = () => {
    if (powerOn) {
      setTime((prevTime) => {
        let currentTime = maxTime;

        if (prevTime < maxTime) {
          currentTime = prevTime + 1;
        }

        return currentTime;
      });
    }
  };

  const downTime = () => {
    if (powerOn) {
      setTime((prevTime) => {
        let currentTime = 0;

        if (prevTime >= 1) {
          currentTime = prevTime - 1;
        }

        return currentTime;
      });
    }
  };

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTime(+event.target.value);
  };

  const handleMinHrsToggle = () => {
    if (powerOn) {
      toggleMinHrs((prevMinHrs) => {
        if (prevMinHrs === 'MIN') {
          return 'HRS';
        }

        return 'MIN';
      });
    }
  };

  return (
    <div className="App">
      {powerOn && <img className="clock" src="./images/Clock_simple.svg" alt="clock" />}
      <button className="power-button" type="button" onClick={togglePower}>
        {powerOn ? <img src="./images/Pwr_on.png" alt="power button" />
          : <img src="./images/Pwr_off.png" alt="power button" />}
      </button>

      <div className="buttons-block">
        <button type="button" onClick={upTime}>
          <img src="./images/Up_btn.png" alt="up time button" />
        </button>
        <button type="button" onClick={downTime}>
          <img src="./images/Down_btn.png" alt="down time button" />
        </button>
      </div>

      {powerOn && <Timer time={time} />}

      {powerOn && <span className="min-hrs">{minHrsToggler}</span>}

      <div
        role="button"
        tabIndex={0}
        className={minHrsToggler === 'MIN' ? 'toggler' : 'toggler--hrs'}
        onClick={handleMinHrsToggle}
        onKeyDown={handleMinHrsToggle}
      >
        <img src="./images/toggle.png" alt="toggle min / hrs" />
      </div>

      <input
        className="range-back"
        type="range"
        min="0"
        max={maxTime}
        value={time}
        name="range"
        step="1"
        disabled={!powerOn}
      />
      <input
        className="range"
        type="range"
        min="0"
        max={maxTime}
        value={time}
        name="range"
        step="1"
        onChange={handleRangeChange}
        disabled={!powerOn}
      />
    </div>
  );
};

export default App;
