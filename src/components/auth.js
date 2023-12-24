import { useQuery } from 'react-query';

const checkAuth = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('User not authenticated');
  }

  return token;
};

export const useAuth = () => {
  return useQuery('auth', checkAuth, {
    retry: false, 
  });
};
