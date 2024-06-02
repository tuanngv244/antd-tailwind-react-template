import { PATHNAMES } from '@/configs/pathname';
import { BASE_URL } from '@/constants/env';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useLiveServer = () => {
  const navigate = useNavigate();
  const fetch = async () => {
    try {
      const res: any = await axios.get(`${BASE_URL}/auth/health`);
    } catch (error) {
      navigate(PATHNAMES.MAINTENANCE);
    }
  };
  useEffect(() => {
    fetch();
  }, []);

  return;
};

export default useLiveServer;
