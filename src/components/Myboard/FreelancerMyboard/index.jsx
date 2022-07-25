import axios from 'axios';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { BaseUrl } from 'utils/config/api';
import { MOBILE, TABLET, LAPTOP } from 'utils/constants/responsive';

const FreelancerMyboard = ({ Datas, accept, remove }) => {
  const positionSwitch = (item) => {
    switch (item) {
      case 'PUBLISHER':
        return '퍼블리셔';
      case 'DESIGNER':
        return '디자이너';
      case 'PLANNER':
        return '기획자';
      case 'CROWD_WORKER':
        return '클라우드 워커';
      case 'ETC':
        return '기타';
      default:
        return '개발자';
    }
  };

  const acceptInterview = (id) => {
    axios({
      method: 'POST',
      url: `${BaseUrl}/accept-interview-project`,
      headers: {
        Authorization: `${window.localStorage.accessToken}`,
      },
      data: {
        projectNum: id,
      },
    })
      .then((res) => {
        alert('인터뷰 수락했습니다.');
        window.location.reload();
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const removeLikes = (id) => {
    axios({
      method: 'DELETE',
      url: `${BaseUrl}/wish-project`,
      headers: {
        Authorization: `${window.localStorage.accessToken}`,
      },
      data: {
        projectNum: id,
      },
    })
      .then((res) => {
        alert('찜 해제 됐습니다.');
        window.location.reload();
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div>
      {Datas?.map((item, index) => {
        return (
          <EcardDiv key={`item.projectNum_${index + 1}`}>
            <FirstDiv>
              <EcardUlTag>
                <EcardBlackLiTag>지원일: {item.createdDate}</EcardBlackLiTag>
                <EcardBlackLiTag>{positionSwitch(item?.positionKind)}</EcardBlackLiTag>
                <EcardBlackLiTag> Minimum pay: {item.minMoney}</EcardBlackLiTag>
                <EcardBlackLiTag> Minimum pay:{item.maxMoney}</EcardBlackLiTag>
                <DaySpan>지원 마감일: {item.projectStateDate}</DaySpan>
                {accept && <AcceptInterview onClick={() => acceptInterview(item.projectNum)}> 수락 </AcceptInterview>}
                {remove && <AcceptInterview onClick={() => removeLikes(item.projectNum)}> 찜해제 </AcceptInterview>}
              </EcardUlTag>
              <Link to={`/project/${item?.projectNum}`}>
                <HoneTag>{item?.projectName}</HoneTag>
              </Link>
            </FirstDiv>
          </EcardDiv>
        );
      })}
    </div>
  );
};

export default FreelancerMyboard;

const EcardDiv = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid #d7d7d7;
  border-radius: 7px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #fff;
  color: #000000;
  font-family: inherit;
`;

const FirstDiv = styled.div`
  width: 100%;
  height: 100%;
  margin: 35px 10px;
  cursor: pointer;
  @media ${TABLET} {
    margin: 0 auto;
    padding: 25px 30px;
  }
`;

const EcardUlTag = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  width: 90%;
  padding-bottom: 20px;
`;

const EcardBlackLiTag = styled.li`
  display: inline-block;
  color: white;
  background-color: #3c3c3c;
  border-radius: 5px;
  font-size: 0.625rem;
  padding: 7px 5px 7px 5px;
  margin: 0 6px 3px 0;
  @media ${TABLET} {
    font-size: 0.75rem;
    padding: 6px 5px 5px 5px;
  }
  @media ${LAPTOP} {
    font-size: 0.8rem;
  }
`;

const AcceptInterview = styled(EcardBlackLiTag)`
  font-size: 1.3rem;
  background-color: #7485c9;
  position: absolute;
  right: 30px;
`;

const HoneTag = styled.h1`
  font-weight: 800;
  font-size: 0.9375rem;
  width: 100%;
  height: 0.95rem;
  overflow: hidden;
  @media ${TABLET} {
    font-size: 1.56rem;
    height: 1.5rem;
  }
  @media ${LAPTOP} {
    font-size: 1.4rem;
    font-weight: 600;
    margin-top: 1rem;
    height: 1.4rem;
  }
`;

const SubDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  font-size: 0.6875rem;
  padding-right: 10px;
  font-weight: 800;
  @media ${TABLET} {
    font-size: 0.88rem;
  }
  @media ${LAPTOP} {
    font-size: 0.9rem;
  }
`;

const DaySpan = styled.span`
  background-color: #e85656;
  color: white;
  font-size: 0.625rem;
  letter-spacing: 1px;
  padding: 5px;
  border-radius: 5px;
  font-weight: 600;
  @media ${TABLET} {
    font-size: 0.78rem;
    letter-spacing: 0px;
    margin-right: 20px;
  }
  @media ${LAPTOP} {
    padding: 8px;
    letter-spacing: 0px;
    font-size: 0.7rem;
  }
`;
