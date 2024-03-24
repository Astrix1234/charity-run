import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';
import { IconStart } from '../../Icons/TimetableIcons/IconStart/IconStart';
import { IconRegistration } from '../../Icons/TimetableIcons/IconRegistration/IconRegistration';
import { IconWalk } from '../../Icons/TimetableIcons/IconWalk/IconWalk';
import { IconMumChildren } from '../../Icons/TimetableIcons/IconMumChildren/IconMumChildren';
import { IconAwards } from '../../Icons/TimetableIcons/IconAwards/IconAwards';

export const useCreateData = () => {
  const { language } = useLanguageStore();
  const t = translations[language];

  const data = [
    {
      icon: <IconRegistration />,
      comment: t.registry,
      place: t.office,
      address: t.slowackiego,
      time: t.inHours,
      hours: '08:00 - 09:00',
    },
    {
      icon: <IconStart />,
      comment: t.start,
      place: t.hospital,
      address: 'Pabianicka 62',
      time: t.startHour,
      hours: '09:30',
    },
    {
      icon: <IconWalk />,
      comment: t.walk,
      place: t.hospital,
      address: 'Pabianicka 62',
      time: t.startHour,
      hours: '10:30',
    },
    {
      icon: <IconMumChildren />,
      comment: t.mumChildren,
      place: t.hospital,
      address: 'Pabianicka 62',
      time: t.startHour,
      hours: '11:30',
    },
    {
      icon: <IconAwards />,
      comment: t.awards,
      place: t.hospital,
      address: 'Pabianicka 62',
      time: t.startHour,
      hours: '12:00',
    },
  ];
  return data;
};
