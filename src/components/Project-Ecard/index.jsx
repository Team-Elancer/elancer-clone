import axios from 'axios';

import { useState, useEffect } from 'react';

import DesignEcard from './DesignEcard';
import DevelopEcard from './Develop-Ecard';
import EtcEcard from './EtcEcard';
import PlanEcard from './PlanEcard';
import PublishEcard from './PublishEcard';

import { FILTERED_DATA, CLIENT_FREELANCER } from 'utils/config/api';

const Ecard = ({ selectId }) => {
  const [Datas, setDatas] = useState('');

  const token = window.localStorage.accessToken;
  const member = window.localStorage.memberType;

  const fetchData = async () => {
    try {
      if (token && member === '"FREELANCER"') {
        const { data } = await CLIENT_FREELANCER(`/project-index-list`);
        setDatas(data);
      }
      if (!token) {
        const { data } = await FILTERED_DATA(`/project-index-list`);
        setDatas(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {selectId === '개발' && <DevelopEcard Datas={Datas.developerProjectList} />}
      {selectId === '퍼블' && <PublishEcard Datas={Datas.publisherProjectList} />}
      {selectId === '디자인' && <DesignEcard Datas={Datas.designerProjectList} />}
      {selectId === '기획' && <PlanEcard Datas={Datas.plannerProjectList} />}
      {selectId === '기타' && <EtcEcard Datas={Datas.etcProjectList} />}
    </>
  );
};

export default Ecard;
