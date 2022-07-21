import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { v4 as uuidv4 } from 'uuid';
import * as S from './style';

import Cancel from 'assets/images/cancel-dark.png';
import SubmitButton from 'components/Button/SubmitButton';
import useCloseOutside from 'hooks/useCloseOutside';
import { BaseUrl } from 'utils/config/api';

const ProjectWait = ({ setWaitModal, Datas, newReloading, setNewReloading }) => {
  const [checkedInterview, setCheckedInterview] = useState('');
  const [newArray, setNewArray] = useState([]);

  const domNode = useCloseOutside(() => {
    setWaitModal(true);
  });

  const changeWait = (e) => {
    const num = Number(e.target.id);
    if (e.currentTarget.checked) {
      setCheckedInterview([...checkedInterview, num]);
    } else {
      // 체크 해제
      setCheckedInterview(checkedInterview.filter((a) => a !== num));
    }
  };

  const deleteInterview = () => {
    const newData = checkedInterview.join();
    axios({
      method: 'DELETE',
      url: `${BaseUrl}/exclude-wait-project`,
      headers: {
        Authorization: `${window.localStorage.accessToken}`,
      },
      data: {
        projectNum: Datas.projectNum,
        freelancerNum: newData,
      },
    })
      .then((res) => {
        alert('해당프리랜서를 프로젝트에서 제외했습니다..');
        setNewReloading(false);
      })
      .catch((err) => {
        alert(err.response.data.errorMessage);
        console.log(err.message);
      });
  };

  useEffect(() => {
    setNewArray(Datas);
    window.scrollTo(0, 0);
  }, [Datas, newReloading]);

  console.log(newArray);

  return (
    <S.Container ref={domNode}>
      <S.FlexDiv>
        <S.Img
          src={Cancel}
          alt="cancel"
          onClick={() => {
            setWaitModal(true);
          }}
        />
        <S.Title>조율중 투입된 프리랜서</S.Title>
      </S.FlexDiv>
      <S.RequesterDiv>
        <S.CountSpan>투입된 프리랜서 {newArray?.waitCount}명</S.CountSpan>
        {newArray.length === undefined &&
          newArray.waitFreelancerList.map((data) => {
            return (
              <S.Li key={uuidv4()}>
                <S.InputCheck
                  type="checkbox"
                  name="applicant"
                  id={data.num}
                  value={data.num}
                  onChange={(e) => changeWait(e)}
                />
                <S.ViewBlock color="#b57360">투입</S.ViewBlock>
                <S.Name>
                  {data.name}[{data.positionType}] 경력{data.careerYear}년 {data.phone}
                </S.Name>
                <Link to={`/partner-detail/${data.num}`}>
                  <S.ProfileSpan>프로필 보기</S.ProfileSpan>
                </Link>
              </S.Li>
            );
          })}
      </S.RequesterDiv>
      <S.FirstSubmitDiv border="1px">
        <S.MobileButonDiv>
          <S.PaddingLeftDiv>
            <S.Button onClick={deleteInterview}>투입 취소</S.Button>
          </S.PaddingLeftDiv>
        </S.MobileButonDiv>
        <S.ButtonDiv>
          <S.PaddingLeftDiv>
            <SubmitButton text="투입 취소" heights="0.8rem" sides="1.8rem" click={deleteInterview} />
          </S.PaddingLeftDiv>
        </S.ButtonDiv>
      </S.FirstSubmitDiv>
    </S.Container>
  );
};

export default ProjectWait;
