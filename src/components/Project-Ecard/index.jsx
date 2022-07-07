import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import DesignEcard from './DesignEcard';
import DevelopEcard from './Develop-Ecard';
import EtcEcard from './EtcEcard';
import PlanEcard from './PlanEcard';
import PublishEcard from './PublishEcard';

import * as S from 'styles/Ecard';
import { BaseUrl, FILTERED_DATA } from 'utils/config/api';

const Ecard = ({ darkMode, selectId }) => {
  const [Datas, setDatas] = useState('');

  console.log(selectId);

  const fetchData = async () => {
    try {
      const res = await FILTERED_DATA(`/project-index-list`);
      const data = await res.data;
      setDatas(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const eCard = [1, 2, 3];
  const blackLi = ['개발자', '상주', '9개월', '서울', '8,000 만원'];
  const redLi = ['무관', 'Javascript', 'React', 'vue.js'];

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {selectId === '개발' && <DevelopEcard darkMode={darkMode} blackLi={blackLi} redLi={redLi} />}
      {selectId === '퍼블' && <PublishEcard darkMode={darkMode} blackLi={blackLi} redLi={redLi} />}
      {selectId === '디자인' && <DesignEcard darkMode={darkMode} blackLi={blackLi} redLi={redLi} />}
      {selectId === '기획' && <PlanEcard darkMode={darkMode} blackLi={blackLi} redLi={redLi} />}
      {selectId === '기타' && <EtcEcard darkMode={darkMode} blackLi={blackLi} redLi={redLi} />}
    </>
  );
};

export default Ecard;
