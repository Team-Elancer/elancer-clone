import axios from 'axios';
import { useEffect, useState } from 'react';

import * as S from './style';
import Cancel from 'assets/images/cancel-dark.png';
import SubmitButton from 'components/Button/SubmitButton';
import useCloseOutside from 'hooks/useCloseOutside';

const ContactModal = ({ setModalBool }) => {
  const domNode = useCloseOutside(() => {
    setModalBool(false);
  });

  const [userData, setUserData] = useState('');

  const authAxios = axios.create({
    baseURL: 'http://ec2-13-209-114-196.ap-northeast-2.compute.amazonaws.com:8080',
    headers: {
      Authorization: `${window.localStorage.accessToken}`,
    },
  });

  const fetchData = async () => {
    try {
      const res = await authAxios('/enterprise');
      const data = await res.data;
      setUserData(data);
    } catch (err) {
      console.log(err.message);
    }
  };
  console.log(userData);

  const [comName, setComName] = useState('');
  const [comPhone, setComPhone] = useState('');
  const [comEmail, setComEmail] = useState('');

  useEffect(() => {
    if (userData.length < 1) {
      fetchData();
    }
    if (userData) {
      setComName(userData.name);
      setComPhone(userData.phone);
      setComEmail(userData.email);
    }
  }, [userData]);

  return (
    <S.Container ref={domNode}>
      <S.FlexDiv>
        <S.Img
          src={Cancel}
          alt="cancel"
          onClick={() => {
            setModalBool(false);
          }}
        />
        <S.H1>1:1 문의/요청</S.H1>
      </S.FlexDiv>
      <S.FlexInputDiv top="0.3rem">
        <S.H2 width="200px" tabletWidth="151px">
          성명
        </S.H2>
        <S.Input
          value={comName}
          onChange={(e) => {
            setComName(e.target.value);
          }}
        />
      </S.FlexInputDiv>
      <S.FlexInputDiv top="0.8rem">
        <S.H2 width="198px" tabletWidth="150px">
          휴대폰
        </S.H2>
        <S.Input
          value={comPhone}
          onChange={(e) => {
            setComPhone(e.target.value);
            if (comPhone.length === 13) {
              setComPhone(comPhone.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
            }
          }}
        />
      </S.FlexInputDiv>
      <S.FlexInputDiv top="0.8rem">
        <S.H2 width="198px" tabletWidth="150px">
          이메일
        </S.H2>
        <S.Input
          value={comEmail}
          onChange={(e) => {
            setComEmail(e.target.value);
          }}
        />
      </S.FlexInputDiv>
      <S.FlexInputDiv top="0.8rem">
        <S.H2 width="200px" tabletWidth="151px">
          제목
        </S.H2>
        <S.Input placeholder="제목입니다." />
      </S.FlexInputDiv>
      <S.FlexInputDiv top="0.9rem">
        <S.H2 width="85px" tabletWidth="140px" top="-2rem">
          문의내용
        </S.H2>
        <S.Textarea placeholder="문의내용을 입력해주세요." />
      </S.FlexInputDiv>
      <S.BorderDiv>
        <S.ButtonDiv>
          <SubmitButton text="문의하기" heights="0.8rem" marginTop="1rem" />
        </S.ButtonDiv>
      </S.BorderDiv>
    </S.Container>
  );
};

export default ContactModal;
