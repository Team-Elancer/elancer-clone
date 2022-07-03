import axios from 'axios';

const baseURL = 'http://ec2-13-209-114-196.ap-northeast-2.compute.amazonaws.com:8080';

export const getAxios = (headers) =>
  axios.create({
    baseURL,
    headers,
  });

export const FILTERED_DATA = getAxios({});

export const CLIENT_FREELANCER = getAxios({
  Authorization: `${window.localStorage.accessToken}`,
});

export const CLIENT_FREELANCER_GET_REFRESHTOKEN = getAxios({
  Authorization: `${window.localStorage.accessToken}`,
  RefreshAuthorization: `${window.localStorage.refreshToken}`,
});
