import { StyledPhoto } from './StyledParticipantAreaPhoto';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';
import { IconPencil } from '../../Icons/IconPencil/IconPlus';
import { userAvatar } from '../../Zustand/api';
import { getCurrentUser } from '../../Zustand/api';
import { useIsLoadingStore } from '../../Zustand/useIsLoadingStore';
import { useUserDataStore } from '../../Zustand/useUserDataStore';
import { apiUrl } from '../../Zustand/api';

export const ParticipantAreaPhoto = () => {
  const { language } = useLanguageStore();
  const t = translations[language];

  const { setIsLoading } = useIsLoadingStore();
  const { userData } = useUserDataStore();

  const handleAvatarChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      try {
        setIsLoading(true);
        const uploadAvatar = await userAvatar(event.target.files[0]);
        if (uploadAvatar) {
          console.log('Avatar uploaded:', uploadAvatar);
        }
      } catch (error) {
        console.error('Error updating user avatar:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <StyledPhoto className="photo">
      <div className="imgContainer">
        <img
          className="image"
          src={
            userData?.avatarURL
              ? `${apiUrl}/users/avatar`
              : 'images/running_man.png'
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
    </StyledPhoto>
  );
};
