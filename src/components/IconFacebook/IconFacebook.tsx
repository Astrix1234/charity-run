import { Link } from 'react-router-dom';
import scss from './IconFacebook.module.scss';

export const IconFacebook = () => {
  return (
    <>
      <Link
        className={scss.link}
        to="https://www.facebook.com/Fundacja.Hematologiczna"
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="devicon:facebook">
            <path
              id="Vector"
              d="M27.3406 1.13208H2.66328C1.81803 1.13208 1.13281 1.81729 1.13281 2.66255V27.3399C1.13281 28.1851 1.81803 28.8704 2.66328 28.8704H27.3406C28.1859 28.8704 28.8711 28.1851 28.8711 27.3399V2.66255C28.8711 1.81729 28.1859 1.13208 27.3406 1.13208Z"
              fill="#3D5A98"
            />
            <path
              id="Vector_2"
              d="M20.268 28.8679V18.1265H23.8727L24.4117 13.9406H20.268V11.2687C20.268 10.057 20.6055 9.22962 22.3422 9.22962H24.5594V5.47962C23.4857 5.36772 22.4068 5.31452 21.3273 5.32024C18.1352 5.32024 15.9367 7.26555 15.9367 10.8538V13.9406H12.332V18.1265H15.9367V28.8679H20.268Z"
              fill="white"
            />
          </g>
        </svg>
      </Link>
    </>
  );
};
