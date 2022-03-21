import React, { useState } from 'react';
import './App.scss';
import Screen from './components/Screen/Screen';
import Toggle from './components/Toggle/Toggle';
import Slider from './components/Slider/Slider';
import PowerButton from './components/PowerButton/PowerButton';
import TimeButtonsBlock from './components/TimeButtonsBlock/TimeButtonsBlock';

const App: React.FC = () => {
  const [powerOn, togglePowerOn] = useState(false);
  const [time, setTime] = useState(0);
  const [minHrsToggler, toggleMinHrs] = useState('MIN');
  const maxTime = 9999;

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
      <div className="power-button-container">
        <PowerButton powerOn={powerOn} togglePower={togglePower} />
      </div>

      <div className="time-buttons-block-container">
        <TimeButtonsBlock upTime={upTime} downTime={downTime} />
      </div>

      <div className="screen-container">
        <Screen time={time} powerOn={powerOn} minHrsToggler={minHrsToggler} />
      </div>

      <div className="toggle-container">
        <Toggle minHrsToggler={minHrsToggler} handleMinHrsToggle={handleMinHrsToggle} />
      </div>

      <div className="slider-container">
        <Slider
          maxTime={maxTime}
          time={time}
          powerOn={powerOn}
          handleRangeChange={handleRangeChange}
        />
      </div>
    </div>
  );
};

export default App;
