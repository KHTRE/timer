import React from 'react';
import './Digit.scss';

type Props = {
  digit: string;
};

const Digit: React.FC<Props> = ({ digit }) => {
  return (
    <div className="Digit">
      {digit && digit}
    </div>
  );
};

export default Digit;
