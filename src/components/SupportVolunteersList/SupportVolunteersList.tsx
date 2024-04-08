// SupportVolunteersList.tsx

import React from 'react';
import { ParticipantAreaItemSquare } from '../ParticipantAreaItemSquare/ParticipantAreaItemSquare';
import { useLanguageStore } from '../../Zustand/useLanguageStore';
import { translations } from './translations';
import scss from './SupportVolunteersList.module.scss';

const SupportVolunteersList: React.FC = () => {
    const { language } = useLanguageStore();
    const t = translations[language];

    return (
        <div className={scss.supportVolunteersList}>
            <ParticipantAreaItemSquare pos={1}>
                <div className={scss.item}>
                    <h1>{t.train1Header}</h1>
                    <p>{t.train1Text}</p>
                </div>
            </ParticipantAreaItemSquare>
            <ParticipantAreaItemSquare pos={2}>
                <div className={scss.item}>
                    <h1>{t.train2Header}</h1>
                    <p>{t.train2Text}</p>
                </div>
            </ParticipantAreaItemSquare>
            <ParticipantAreaItemSquare pos={3}>
                <div className={scss.item}>
                    <h1>{t.train3Header}</h1>
                    <p>{t.train3Text}</p>
                </div>
            </ParticipantAreaItemSquare>
            <ParticipantAreaItemSquare pos={4}>
                <div className={scss.item}>
                    <h1>{t.train4Header}</h1>
                    <p>{t.train4Text}</p>
                </div>
            </ParticipantAreaItemSquare>
        </div>
    );
}

export default SupportVolunteersList;
