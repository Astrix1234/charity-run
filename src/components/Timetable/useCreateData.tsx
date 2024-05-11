import { useLanguageStore } from '../../Zustand/useLanguageStore';
import translations from './translations';
import { IconStart } from '../../Icons/TimetableIcons/IconStart/IconStart';
import { IconRegistration } from '../../Icons/TimetableIcons/IconRegistration/IconRegistration';
import { IconWalk } from '../../Icons/TimetableIcons/IconWalk/IconWalk';
import { IconMumChildren } from '../../Icons/TimetableIcons/IconMumChildren/IconMumChildren';
import { IconAwards } from '../../Icons/TimetableIcons/IconAwards/IconAwards';
import { IconPicnic } from '../../Icons/TimetableIcons/IconPicnic/IconPicnic';

export const useCreateData = () => {
  const { language } = useLanguageStore();
  const t = translations[language];

  const data = [
    {
      icon: <IconRegistration />,
      comment: t.registry,
      address: t.slowackiego,
      time: t.startHour,
      hours: '09:00',
    },
    {
      icon: <IconMumChildren />,
      comment: t.mumChildren,
      address: t.street,
      time: t.startHour,
      hours: '10:45',
    },
    {
      icon: <IconStart />,
      comment: t.start,
      address: t.street,
      time: t.startHour,
      hours: '11:00',
    },

    {
      icon: <IconWalk />,
      comment: t.walk,
      address: t.street,
      time: t.startHour,
      hours: '11:30',
    },
    {
      icon: <IconAwards />,
      comment: t.awards,
      address: t.slowackiego,
      time: t.startHour,
      hours: '12:00',
    },
    {
      icon: <IconPicnic />,
      comment: t.walk,
      address: t.slowackiego,
      time: t.startHour,
      hours: '12:00-18:00',
    },
  ];
  return data;
};
