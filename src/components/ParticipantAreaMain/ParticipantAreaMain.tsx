import { StyledMain } from './StyledParticipantAreaMain';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';
import { ParticipantAreaNavigation } from '../ParticipantAreaNavigation/ParticipantAreaNavigation';
import { IconPencil } from '../../Icons/IconPencil/IconPlus';
import { userAvatar } from '../../Zustand/api';
import { getCurrentUser } from '../../Zustand/api';
import { useIsLoadingStore } from '../../Zustand/useIsLoadingStore';
import { useUserDataStore } from '../../Zustand/useUserDataStore';
import { apiUrl } from '../../Zustand/api';
g;
export const ParticipantAreaMain = () => {
  const { language } = useLanguageStore();
  const t = translations[language];

  const { setIsLoading } = useIsLoadingStore();
  const { setUserData, userData } = useUserDataStore();

  const handleAvatarChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      try {
        setIsLoading(true);
        const uploadAvatar = await userAvatar(event.target.files[0]);
        if (uploadAvatar) {
          console.log('Avatar uploaded:', uploadAvatar);
          const response = await getCurrentUser();
          console.log('Response:', response);
          if (response) {
            setUserData(response);
          }
        }
      } catch (error) {
        console.error('Error updating user avatar:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <StyledMain as="section" id="participantMain">
      <div className="photo">
        <div className="imgContainer">
          <img
            className="image"
            src={
              userData?.avatarURL
                ? `${apiUrl}users/avatar/${userData.avatarURL}`
                : '../images/running_man.png'
            }
            alt={t.alt}
          />
        </div>
        <div className="addPhoto">
          <IconPencil />
          <div className="upload">
            <label htmlFor="file-upload">{t.addPhoto}</label>
            <input id="file-upload" type="file" onChange={handleAvatarChange} />
          </div>
        </div>
      </div>
      <ParticipantAreaNavigation />
    </StyledMain>
  );
};
