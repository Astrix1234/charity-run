import scss from './IconArrow.module.scss';

export const IconArrow = () => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 32"
      className={scss.icon}
    >
      <title>arrow</title>
      <path
        fill="none"
        stroke="#1ca2a7"
        stroke-linejoin="round"
        stroke-linecap="round"
        stroke-miterlimit="4"
        stroke-width="0.5079"
        d="M21.863 28.127c1.962-11.127-7.831-21.062-20.472-19.727M24.841 25.030l-2.978 3.471-2.694-3.471"
      ></path>
    </svg>
  );
};
