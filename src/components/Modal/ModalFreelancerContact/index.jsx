import axios from 'axios';
import { useState } from 'react';

import * as S from './style';
import Cancel from 'assets/images/cancel-dark.png';

import Loader from 'components/Loader';

import useCloseOutside from 'hooks/useCloseOutside';
import { BaseUrl } from 'utils/config/api';

const ModalFreelancerContactModal = ({ setIsShowing, isSetEdingShowing, contactData, contactNum, userData }) => {
  const domNode = useCloseOutside(() => {
    if (isSetEdingShowing) {
      isSetEdingShowing(false);
    }

    if (setIsShowing) {
      setIsShowing(false);
    }
  });

  const [title, setTitle] = useState(contactData?.title);
  const [content, setContent] = useState(contactData?.content);

  const handleSubmitQuestion = (e) => {
    e.preventDefault();

    axios({
      method: 'POST',
      url: `${BaseUrl}/contact-save`,
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
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleResubmitQuestion = async (e) => {
    e.preventDefault();

    axios({
      method: 'PUT',
      url: `${BaseUrl}/contact-cover`,
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
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleCancelButton = () => {
    if (isSetEdingShowing) {
      isSetEdingShowing(false);
    }

    if (setIsShowing) {
      setIsShowing(false);
    }
  };

  return (
    <S.Container
      ref={domNode}
      style={{ position: 'fixed', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
    >
      {!userData ? (
        <Loader />
      ) : (
        <form onSubmit={handleSubmitQuestion}>
          <S.FlexDiv>
            <S.Img src={Cancel} alt="cancel" onClick={handleCancelButton} />
            <S.H1>1:1 문의/요청</S.H1>
          </S.FlexDiv>
          <S.FlexInputDiv top="0.3rem">
            <S.H2 width="200px" tabletWidth="151px">
              성명
            </S.H2>
            <S.Input defaultValue={userData.name || ''} readOnly />
          </S.FlexInputDiv>
          <S.FlexInputDiv top="0.8rem">
            <S.H2 width="198px" tabletWidth="150px">
              휴대폰
            </S.H2>
            <S.Input defaultValue={userData.phone || ''} readOnly />
          </S.FlexInputDiv>
          <S.FlexInputDiv top="0.8rem">
            <S.H2 width="198px" tabletWidth="150px">
              이메일
            </S.H2>
            <S.Input defaultValue={userData.email || ''} readonly />
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
            {contactData?.title || contactData?.content ? (
              <S.SubmitButton type="button" onClick={handleResubmitQuestion}>
                수정하기
              </S.SubmitButton>
            ) : (
              <S.SubmitButton>문의하기</S.SubmitButton>
            )}
          </S.BorderDiv>
        </form>
      )}
    </S.Container>
  );
};

export default ModalFreelancerContactModal;
