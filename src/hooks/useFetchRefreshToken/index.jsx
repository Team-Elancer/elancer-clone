import { CLIENT_FREELANCER_GET_REFRESHTOKEN } from 'utils/config/api';

const useFetchRefreshToken = async () => {
  const { data } = await CLIENT_FREELANCER_GET_REFRESHTOKEN('/reissue');

  if (!data) {
    alert('다시 로그인해주세요.');
    window.localStorage.clear();
  }

  localStorage.setItem('accessToken', data?.accessToken);
  localStorage.setItem('refreshToken', data?.refreshToken);

  window.location.reload();

  return data;
};

export default useFetchRefreshToken;
