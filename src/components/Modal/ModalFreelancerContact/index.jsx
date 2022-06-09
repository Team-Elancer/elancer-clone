import axios from 'axios';
import { useEffect, useState } from 'react';

import * as S from './style';
import Cancel from 'assets/images/cancel-dark.png';

import useCloseOutside from 'hooks/useCloseOutside';

import { CLIENT_FREELANCER } from 'utils/config/api';

const ModalFreelancerContactModal = ({ setModalBool, FetchData, setPutModalBool, ContactData, contactNum }) => {
  const domNode = useCloseOutside(() => {
    if (setPutModalBool) {
      setPutModalBool(false);
    }

    if (setModalBool) {
      setModalBool(false);
    }
  });

  const [userData, setUserData] = useState('');

  const fetchFreelancerData = async () => {
    try {
      const res = await CLIENT_FREELANCER('/freelancer');
      const data = await res.data;

      setUserData(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const [title, setTitle] = useState(ContactData?.title);
  const [content, setContent] = useState(ContactData?.content);

  const submitQuestion = (e) => {
    e.preventDefault();

    axios({
      method: 'POST',
      url: 'http://ec2-13-209-114-196.ap-northeast-2.compute.amazonaws.com:8080/contact-save',
      headers: {
        Authorization: `${window.localStorage.accessToken}`,
      },
      data: {
        title,
        content,
      },
    })
      .then((res) => {
        alert('1:1 문의가 등록되었습니다.');
        FetchData();
        setModalBool(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const ReSubmitQuestion = async (e) => {
    e.preventDefault();

    axios({
      method: 'PUT',
      url: 'http://ec2-13-209-114-196.ap-northeast-2.compute.amazonaws.com:8080/contact-cover',
      headers: {
        Authorization: `${window.localStorage.accessToken}`,
      },
      data: {
        num: contactNum,
        title,
        content,
      },
    })
      .then((res) => {
        alert('수정됐습니다.');
        FetchData();
        setPutModalBool(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    if (userData.length < 1) {
      fetchFreelancerData();
    }

    if (userData) {
      setName(userData.name);
      setPhone(userData.phone);
      setEmail(userData.email);
    }
  }, [userData]);

  const cancelModal = () => {
    if (setPutModalBool) {
      setPutModalBool(false);
    }

    if (setModalBool) {
      setModalBool(false);
    }
  };

  return (
    <S.Container
      ref={domNode}
      style={{ position: 'fixed', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
    >
      <form onSubmit={submitQuestion}>
        <S.FlexDiv>
          <S.Img
            src={Cancel}
            alt="cancel"
            onClick={() => {
              cancelModal();
            }}
          />
          <S.H1>1:1 문의/요청</S.H1>
        </S.FlexDiv>
        <S.FlexInputDiv top="0.3rem">
          <S.H2 width="200px" tabletWidth="151px">
            성명
          </S.H2>
          <S.Input defaultValue={name || ''} readOnly />
        </S.FlexInputDiv>
        <S.FlexInputDiv top="0.8rem">
          <S.H2 width="198px" tabletWidth="150px">
            휴대폰
          </S.H2>
          <S.Input defaultValue={phone || ''} readOnly />
        </S.FlexInputDiv>
        <S.FlexInputDiv top="0.8rem">
          <S.H2 width="198px" tabletWidth="150px">
            이메일
          </S.H2>
          <S.Input defaultValue={email || ''} readonly />
        </S.FlexInputDiv>
        <S.FlexInputDiv top="0.8rem">
          <S.H2 width="200px" tabletWidth="150px">
            제목
          </S.H2>
          <S.Input
            placeholder="제목입니다."
            value={title || ''}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </S.FlexInputDiv>
        <S.FlexInputDiv top="0.9rem">
          <S.H2 width="200px" tabletWidth="150px" top="-2rem">
            문의내용
          </S.H2>
          <S.Textarea
            placeholder="문의내용을 입력해주세요."
            value={content || ''}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </S.FlexInputDiv>
        <S.BorderDiv>
          {ContactData?.title || ContactData?.content ? (
            <S.SubmitButton type="button" onClick={ReSubmitQuestion}>
              수정하기
            </S.SubmitButton>
          ) : (
            <S.SubmitButton>문의하기</S.SubmitButton>
          )}
        </S.BorderDiv>
      </form>
    </S.Container>
  );
};

export default ModalFreelancerContactModal;
