import React from 'react';
import './Toggle.scss';

type HandleMinHrsToggle = () => void;

type Props = {
  minHrsToggler: string;
  handleMinHrsToggle: HandleMinHrsToggle;
};

const Toggle: React.FC<Props> = ({ minHrsToggler, handleMinHrsToggle }) => {
  return (
    <div className="Toggle">
      <div
        role="button"
        tabIndex={0}
        className={minHrsToggler === 'MIN' ? 'toggler' : 'toggler toggler--hrs'}
        onClick={handleMinHrsToggle}
        onKeyDown={handleMinHrsToggle}
      >
        <div className="Toggle__button" />
      </div>
    </div>
  );
};

export default Toggle;
