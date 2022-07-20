import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { v4 as uuidv4 } from 'uuid';

import * as S from './style';

import { CLIENT_FREELANCER } from 'utils/config/api';

const EnterpriseContact = () => {
  const [Datas, setDatas] = useState('');
  const navi = useNavigate();

  const FetchData = async () => {
    try {
      const res = await CLIENT_FREELANCER('/contacts');
      if (res.data.code === '401') {
        window.localStorage.clear();
        navi('/login');
      }
      const data = await res.data;
      setDatas(data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  useEffect(() => {
    if (Datas === '') {
      FetchData();
    }
  }, [Datas]);
  return (
    <S.Container>
      {Datas !== '' &&
        Datas?.map((data) => (
          <S.FlexDiv key={uuidv4()}>
            <S.Text>
              {data.title} {`(${data.localDate})`}
            </S.Text>
            <S.ColorBox>문의</S.ColorBox>
          </S.FlexDiv>
        ))}
    </S.Container>
  );
};

export default EnterpriseContact;
