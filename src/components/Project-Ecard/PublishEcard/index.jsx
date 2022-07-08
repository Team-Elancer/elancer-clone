import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from 'styles/Ecard';

const PublishEcard = ({ Datas }) => {
  const [nowWorkType, setNowWorkType] = useState('');
  const [postionType, setPostionType] = useState('');

  const positionSwitch = () => {
    switch (Datas.positionKind) {
      case 'PUBLISHER':
        setNowWorkType('퍼블리셔');
        break;
      case 'DESIGNER':
        setNowWorkType('디자이너');
        break;
      case 'PLANNER':
        setNowWorkType('기획자');
        break;
      case 'CROWD_WORKER':
        setNowWorkType('클라우드 워커');
        break;
      case 'ETC':
        setNowWorkType('기타');
        break;
      default:
        setNowWorkType('개발자');
        break;
    }
  };

  const chageWorkShip = () => {
    switch (Datas.freelancerWorkmanShip) {
      case 'MIDDLE':
        setPostionType('중급');
        break;
      case 'SENIOR':
        setPostionType('고급');
        break;
      default:
        setPostionType('초급');
        break;
    }
  };
  const checkAddress = (data) => {
    const addressArray = [];
    addressArray.push(data.split(' '));
    if (addressArray[0][0] === '우편번호') {
      return '재택';
    }
    const selectArray = addressArray[0].filter((a, i) => i < 2);
    return selectArray.join('|');
  };

  useEffect(() => {
    if (Datas !== undefined) {
      positionSwitch();
      chageWorkShip();
    }
  }, [Datas]);
  return (
    <div>
      {Datas &&
        Datas.map((item) => {
          return (
            <S.EcardDiv>
              <S.FirstDiv>
                <S.HeartBackDiv>
                  <S.HeartDiv>🤍</S.HeartDiv>
                </S.HeartBackDiv>
                <S.EcardUlTag>
                  <S.EcardBlackLiTag>{nowWorkType}</S.EcardBlackLiTag>
                  <S.EcardBlackLiTag>{item.projectType === 'TELEWORKING' ? '상주' : '재택'}</S.EcardBlackLiTag>
                  <S.EcardBlackLiTag>{item.projectPeriod === 0 ? 1 : item.projectPeriod}개월</S.EcardBlackLiTag>
                  <S.EcardBlackLiTag>{checkAddress(item.address.mainAddress)}</S.EcardBlackLiTag>
                  <S.EcardBlackLiTag>{item.pay}</S.EcardBlackLiTag>
                  <S.EcardRedLiTag>{postionType}</S.EcardRedLiTag>
                  {item.skills[0] !== '' &&
                    item.skills.map((skill) => {
                      return <S.EcardRedLiTag key={skill}>{skill}</S.EcardRedLiTag>;
                    })}
                </S.EcardUlTag>
                <Link to={`/project/${item.projectNum}`}>
                  <S.HoneTag>{item.projectName}</S.HoneTag>
                  <S.Ptag>{item.content}</S.Ptag>
                  <S.SubDiv>
                    <S.BigSpan>
                      <S.NumberTag>0명</S.NumberTag>
                      <S.TextpTag>이찜했습니다!</S.TextpTag>
                    </S.BigSpan>
                    <S.DaySpan>마감{item.endDays}일전</S.DaySpan>
                  </S.SubDiv>
                </Link>
              </S.FirstDiv>
            </S.EcardDiv>
          );
        })}
    </div>
  );
};

export default PublishEcard;
