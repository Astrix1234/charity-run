import scss from './Wave.module.scss';

export const Wave = () => {
  return (
    <svg
      //   width="1440"
      //   height="1268"
      className={scss.waves}
      preserveAspectRatio="none"
      viewBox="0 0 1440 1268"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="top-wave"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M-147.007 74.1782L-50.0617 103.838C47.8828 131.851 242.772 189.523 437.662 161.511C632.552 131.851 827.441 16.5056 1022.33 1.67554C1217.22 -13.1545 1412.11 74.1782 1509.06 117.021L1607 161.511V669.854H1509.06C1412.11 669.854 1217.22 669.854 1022.33 669.854C827.441 669.854 632.552 669.854 437.662 669.854C242.772 669.854 47.8828 669.854 -50.0617 669.854H-147.007V74.1782Z"
        fill="#1CA2A7"
        fillOpacity="0.2"
      />
      <path
        id="bottom-wave"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1595.01 1193.82L1498.06 1164.16C1400.12 1136.15 1205.23 1078.48 1010.34 1106.49C815.448 1136.15 620.559 1251.49 425.669 1266.32C230.779 1281.15 35.8896 1193.82 -61.0555 1150.98L-159 1106.49L-147.007 669.854H-50.0617C46.8834 669.854 242.772 669.854 437.662 669.854C632.552 669.854 827.441 669.854 1022.33 669.854C1217.22 669.854 1411.11 669.854 1509.06 669.854H1607L1595.01 1193.82Z"
        fill="#1CA2A7"
        fillOpacity="0.2"
      />
      <g className={scss.parallax}>
        <use xlinkHref="#top-wave" />
        <use xlinkHref="#bottom-wave" />
        <use xlinkHref="#top-wave" y="15" />
        <use xlinkHref="#bottom-wave" y="15" />
        <use xlinkHref="#top-wave" y="20" />
        <use xlinkHref="#bottom-wave" y="20" />
        <use xlinkHref="#top-wave" y="25" />
        <use xlinkHref="#bottom-wave" y="25" />
      </g>
    </svg>
  );
};
