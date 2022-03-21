import React from 'react';
import './Slider.scss';

type HandleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => void;

type Props = {
  maxTime: number;
  time: number;
  powerOn: boolean;
  handleRangeChange: HandleRangeChange;
};

const Slider: React.FC<Props> = ({
  maxTime,
  time,
  powerOn,
  handleRangeChange,
}) => {
  return (
    <div className="Slider">
      <input
        className="Slider__range-back"
        type="range"
        min="0"
        max={maxTime}
        value={time}
        name="range"
        step="1"
        disabled={!powerOn}
        tabIndex={-1}
      />
      <input
        className="Slider__range"
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

export default Slider;
