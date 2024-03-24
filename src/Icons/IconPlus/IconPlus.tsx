interface IconPlusProps {
  onClick?: (event: React.MouseEvent<SVGElement>) => void;
}

export const IconPlus: React.FC<IconPlusProps> = ({ onClick }) => {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <line y1="8.5" x2="18" y2="8.5" stroke="#2E2530" stroke-width="3" />
      <line
        x1="9.5"
        y1="6.55671e-08"
        x2="9.5"
        y2="18"
        stroke="#2E2530"
        stroke-width="3"
      />
    </svg>
  );
};
