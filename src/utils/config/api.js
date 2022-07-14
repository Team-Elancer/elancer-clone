import axios from 'axios';

//  ============== MAIN BASE URL -> GET ==============
const baseURL = 'http://ec2-13-125-109-116.ap-northeast-2.compute.amazonaws.com:8080/';

// ==============  BASE URL -> POST, PUT, DELETE ==============
export const BaseUrl = 'http://ec2-13-125-109-116.ap-northeast-2.compute.amazonaws.com:8080';

// ==============  Axios config ==============

export const getAxios = (headers) =>
  axios.create({
    baseURL,
    headers,
  });

// ==============  GET FREELANCER DATA ==============

export const CLIENT_FREELANCER = getAxios({
  Authorization: `${window.localStorage.accessToken}`,
});

// ==============  GET NEW TOKEN (REFRESH TOKEN) ==============

export const CLIENT_FREELANCER_GET_REFRESHTOKEN = getAxios({
  Authorization: `${window.localStorage.accessToken}`,
  RefreshAuthorization: `${window.localStorage.refreshToken}`,
});

// ==============  GET FILTERED DATA ==============
export const FILTERED_DATA = getAxios({});
