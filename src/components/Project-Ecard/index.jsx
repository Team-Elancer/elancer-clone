import { useState, useEffect } from 'react';

import DesignEcard from './DesignEcard';
import DevelopEcard from './Develop-Ecard';
import EtcEcard from './EtcEcard';
import PlanEcard from './PlanEcard';
import PublishEcard from './PublishEcard';

import { FILTERED_DATA } from 'utils/config/api';

const Ecard = ({ selectId }) => {
  const [Datas, setDatas] = useState('');

  const fetchData = async () => {
    try {
      const res = await FILTERED_DATA(`/project-index-list`);
      const data = await res.data;
      setDatas(data);
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
