import React from 'react';
import './PowerButton.scss';

type TogglePower = () => void;

type Props = {
  powerOn: boolean;
  togglePower: TogglePower;
};

const PowerButton: React.FC<Props> = ({ powerOn, togglePower }) => {
  return (
    <div className="Power-button-block">
      <button
        className={powerOn ? 'Power-button-block__button Power-button-block__button--on' : 'Power-button-block__button'}
        type="button"
        onClick={togglePower}
        aria-label="power button"
      />
    </div>
  );
};

export default PowerButton;
