import React from 'react';
import './Screen.scss';
import Digit from '../Digit/Didit';

type Props = {
  time: number;
  powerOn: boolean;
  minHrsToggler: string;
};

const Screen: React.FC<Props> = ({ time, powerOn, minHrsToggler }) => {
  const timeDigits = String(time).split('');

  timeDigits.reverse();

  const getScreenDigits = () => {
    if (powerOn) {
      return (
        <div className="Screen__digits-container">
          <Digit digit={timeDigits[3]} />
          <Digit digit={timeDigits[2]} />
          <Digit digit={timeDigits[1]} />
          <Digit digit={timeDigits[0]} />
        </div>
      );
    }

    return null;
  };

  return (
    <div className="Screen">
      {powerOn && <div className="Screen__clock" />}

      {getScreenDigits()}

      {powerOn && <span className="Screen__min-hrs">{minHrsToggler}</span>}
    </div>
  );
};

export default Screen;
