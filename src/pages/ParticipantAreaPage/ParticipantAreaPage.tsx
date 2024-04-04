import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ParticipantArea } from '../../components/ParticipantArea/ParticipantArea';
import { useIsLoginStore } from '../../Zustand/useIsLoginStore';
import { useIsLoadingStore } from '../../Zustand/useIsLoadingStore';
import { useParticipantUserDataStore } from '../../Zustand/useParticipantUserDataStore';
import { useUserDataStore } from '../../Zustand/useUserDataStore';
import { getCurrentUser } from '../../Zustand/api';
import { getUserParticipation } from '../../Zustand/api';

export default function ParticipantAreaPage() {
  const { hash } = useLocation();
  const { setIsLoading } = useIsLoadingStore();
  const { setIsLogin } = useIsLoginStore();
  const { setUserData, userData } = useUserDataStore();
  const { setParticipantUserData } = useParticipantUserDataStore();
  const [hasFetchedParticipantData, setHasFetchedParticipantData] =
    useState(false);

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true);
        const response = await getCurrentUser();
        console.log('Response:', response);
        if (response) {
          setIsLogin(true);
          setUserData(response);
        }
      } catch (error) {
        console.error('Error checking login:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const fetchUserParticipation = async () => {
      try {
        setIsLoading(true);
        const response = await getUserParticipation();
        console.log('Response:', response);
        console.log('ok');
        if (response) {
          setParticipantUserData(response);
          setHasFetchedParticipantData(true);
        }
      } catch (error) {
        console.error('Error checking participation:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (userData && !hasFetchedParticipantData) {
      fetchUserParticipation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  useEffect(() => {
    console.log('Participant data:', userData);
  }, [userData]);

  return (
    <div>
      <Helmet>
        <title>Participant Area</title>
      </Helmet>
      <ParticipantArea />
    </div>
  );
}
