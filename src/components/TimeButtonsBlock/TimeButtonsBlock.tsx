import React from 'react';
import './TimeButtonsBlock.scss';

type UpTime = () => void;
type DownTime = () => void;

type Props = {
  upTime: UpTime;
  downTime: DownTime;
};

const TimeButtonsBlock: React.FC<Props> = ({ upTime, downTime }) => {
  return (
    <div className="Time-buttons-block">
      <button
        className="Time-buttons-block__button Time-buttons-block__button--up"
        type="button"
        onClick={upTime}
        aria-label="button up"
      />
      <button
        className="Time-buttons-block__button Time-buttons-block__button--down"
        type="button"
        onClick={downTime}
        aria-label="button down"
      />
    </div>
  );
};

export default TimeButtonsBlock;
