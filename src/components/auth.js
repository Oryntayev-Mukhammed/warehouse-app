import { useQuery } from 'react-query';

const checkAuth = async () => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('User not authenticated');
  }

  // Дополнительная логика проверки токена, если необходимо

  return token;
};

export const useAuth = () => {
  return useQuery('auth', checkAuth, {
    retry: false, // Отключаем автоматическую попытку повтора запроса
  });
};
