import { useState, useEffect } from 'react';

import * as S from './style';

import { CLIENT_FREELANCER } from 'utils/config/api';

const EnterpriseContact = () => {
  const [Datas, setDatas] = useState('');

  const FetchData = async () => {
    try {
      const res = await CLIENT_FREELANCER('/contacts');
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
        Datas.map((data) => (
          <S.FlexDiv>
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
