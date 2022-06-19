import { CLIENT_FREELANCER_GET_REFRESHTOKEN } from 'utils/config/api';

const useFetchRefreshToken = async () => {
  console.log('access token 재발급 시작');

  const { data } = await CLIENT_FREELANCER_GET_REFRESHTOKEN('/reissue');

  if (!data) {
    alert('다시 로그인해주세요.');
    window.localStorage.clear();
  }
  console.log('localstorage에 새로운 토큰 저장 시작');

  localStorage.setItem('accessToken', data?.accessToken);
  localStorage.setItem('refreshToken', data?.refreshToken);

  console.log('access token 재발급 완료', data);

  return data;
};

export default useFetchRefreshToken;
