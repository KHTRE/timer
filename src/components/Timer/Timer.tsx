import React from 'react';
import './Timer.css';

type Props = {
  time: number;
};

const Timer: React.FC<Props> = ({ time }) => {
  return (
    <div className="Timer">{time}</div>
  );
};

export default Timer;
