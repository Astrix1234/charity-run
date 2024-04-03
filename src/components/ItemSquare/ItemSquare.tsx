import { ReactNode } from 'react';
import DotsSquare from '../../Icons/DotsSquare/DotsSquare';
import NumberCircle from '../NumberCircle/NumberCircle';
import scss from './ItemSquare.module.scss';

type ItemSquareProps = {
  contentType?: { type: 'image'; src: string; alt: string } | { type: 'text' };
  children?: ReactNode;
  heading?: string;
  pos: number;
  backgroundColor?: 'beige' | 'grey';
};

function ItemSquare({
  contentType = { type: 'text' },
  children,
  heading,
  pos = 0,
  backgroundColor = 'beige',
}: ItemSquareProps) {
  return (
    <li
      className={`${scss.container} ${scss[`container__${backgroundColor}`]}`}
    >
      {contentType.type === 'image' && (
        <div className={scss.header__image}>
          <div className={scss.pos}>
            <NumberCircle number={pos} />
          </div>
          <p className={scss.heading}>{heading}</p>
        </div>
      )}
      {contentType.type === 'text' && (
        <div className={scss.header__text}>
          <div>
            <NumberCircle number={pos} />
          </div>
          <p className={scss.heading}>{heading}</p>
        </div>
      )}
      <div className={scss.content}>
        {contentType.type === 'image' && (
          <div className={scss.image}>
            <img src={contentType.src} alt={contentType.alt} />
          </div>
        )}
        {contentType.type === 'text' && children}
      </div>
      <DotsSquare />
    </li>
  );
}

export default ItemSquare;
