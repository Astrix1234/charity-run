import AmbassadorsAndLeaderContainerHeading from '../AmbassadorsAndLeaderContainerHeading/AmbassadorsAndLeaderContainerHeading';
import AmbassadorsAndLeadersList from '../AmbassadorsAndLeadersList/AmbassadorsAndLeadersList';

type AmbassadorsAndLeaderContainerProps = {
  headingText: string;
  list: { name: string; role: { eng: string; pl: string }; photo: string }[];
  type: 'ambassador' | 'leader';
};

function AmbassadorsAndLeaderContainer({
  headingText,
  list,
  type,
}: AmbassadorsAndLeaderContainerProps) {
  return (
    <div>
      <AmbassadorsAndLeaderContainerHeading>
        {headingText}
      </AmbassadorsAndLeaderContainerHeading>
      <AmbassadorsAndLeadersList type={type} list={list} />
    </div>
  );
}

export default AmbassadorsAndLeaderContainer;
