import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
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
  const { isLogin } = useIsLoginStore();
  const { setUserData, userData } = useUserDataStore();
  const { setParticipantUserData } = useParticipantUserDataStore();
  const [hasFetchedParticipantData, setHasFetchedParticipantData] =
    useState(false);
  const navigate = useNavigate();

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
    if (!isLogin) {
      navigate('/login');
    }
  }, [isLogin, navigate]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true);
        const response = await getCurrentUser();
        if (response) {
          setUserData(response);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (userData && !hasFetchedParticipantData) {
      const fetchUserParticipation = async () => {
        try {
          setIsLoading(true);
          const response = await getUserParticipation();
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

      fetchUserParticipation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
