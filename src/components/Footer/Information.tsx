import { StyledInformation } from './FooterStyles';
import { Link } from 'react-router-dom';

interface InformationProps {
  title: string;
  paragraphs?: string[];
  links?: any;
  mail?: string;
}

export const Information: React.FC<InformationProps> = ({
  title,
  paragraphs,
  links,
  mail,
}) => {
  return (
    <StyledInformation>
      <h3>{title}</h3>
      {paragraphs &&
        paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      {links &&
        Object.keys(links).map(linkVisual => (
          <p>
            <Link to={links.linkVisual}>{linkVisual}</Link>
          </p>
        ))}
      {mail && (
        <p>
          <a href={`mailto: ${mail}`}>{mail}</a>
        </p>
      )}
    </StyledInformation>
  );
};
