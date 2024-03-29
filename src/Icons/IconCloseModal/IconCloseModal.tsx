import React from 'react';

interface IconCloseModalProps {
  onClick: () => void;
}

export const IconCloseModal: React.FC<IconCloseModalProps> = ({ onClick }) => {
  return (
    <div onClick={onClick}>
      <svg
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="10.0237"
          y1="9.72803"
          x2="24.8729"
          y2="24.5773"
          stroke="#2E2530"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <line
          x1="10"
          y1="24.8489"
          x2="24.8492"
          y2="9.99965"
          stroke="#2E2530"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
