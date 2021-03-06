import axios from 'axios';
import { useEffect, useState } from 'react';

import * as S from './style';
import Cancel from 'assets/images/cancel-dark.png';
import SubmitButton from 'components/Button/SubmitButton';
import useCloseOutside from 'hooks/useCloseOutside';
import { BaseUrl, CLIENT_FREELANCER } from 'utils/config/api';

const ContactModal = ({ setModalBool, index, setReLoading }) => {
  const domNode = useCloseOutside(() => {
    setModalBool(false);
  });

  const [userData, setUserData] = useState('');

  const fetchData = async () => {
    try {
      const res = await CLIENT_FREELANCER('/enterprise');
      const data = await res.data;
      setUserData(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const [comName, setComName] = useState('');
  const [comPhone, setComPhone] = useState('');
  const [comEmail, setComEmail] = useState('');

  const [contactTitle, setContactTitle] = useState('');
  const [contactContent, setContactContent] = useState('');

  const SubmitContact = (e) => {
    e.preventDefault();
    axios({
      method: 'POST',
      url: `${BaseUrl}/contact-save`,
      headers: {
        Authorization: `${window.localStorage.accessToken}`,
      },
      data: {
        title: contactTitle,
        content: contactContent,
      },
    })
      .then((res) => {
        setReLoading(true);
        alert('문의가 등록되었습니다.');
        setModalBool(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

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
      <form onSubmit={SubmitContact}>
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
          <S.Input value={comName} readOnly />
        </S.FlexInputDiv>
        <S.FlexInputDiv top="0.8rem">
          <S.H2 width="198px" tabletWidth="150px">
            휴대폰
          </S.H2>
          <S.Input value={comPhone} readOnly />
        </S.FlexInputDiv>
        <S.FlexInputDiv top="0.8rem">
          <S.H2 width="198px" tabletWidth="150px">
            이메일
          </S.H2>
          <S.Input value={comEmail} readonly />
        </S.FlexInputDiv>
        <S.FlexInputDiv top="0.8rem">
          <S.H2 width="200px" tabletWidth="151px">
            제목
          </S.H2>
          <S.Input
            placeholder="제목입니다."
            value={contactTitle}
            onChange={(e) => {
              setContactTitle(e.target.value);
            }}
          />
        </S.FlexInputDiv>
        <S.FlexInputDiv top="0.9rem">
          <S.H2 width="85px" tabletWidth="140px" top="-2rem">
            문의내용
          </S.H2>
          <S.Textarea
            placeholder="문의내용을 입력해주세요."
            value={contactContent}
            onChange={(e) => {
              setContactContent(e.target.value);
            }}
          />
        </S.FlexInputDiv>
        <S.BorderDiv>
          <S.ButtonDiv>
            <SubmitButton text="문의하기" heights="0.8rem" marginTop="1rem" />
          </S.ButtonDiv>
        </S.BorderDiv>
      </form>
    </S.Container>
  );
};

export default ContactModal;
