import { useState, useEffect } from 'react';
import * as S from './style';

import Cancel from 'assets/images/cancel-dark.png';
import FilterChoiceButton from 'components/Button/FilterChoiceButton';
import ProjectListSearchBar from 'components/Search/ProjectList';

const ProjectListModal = ({ setModalCheck, setURL, setSelectType, setLoading, setSelectType1 }) => {
  const [positionType, setPositionType] = useState('⚙️ 개발');
  const [workState, setWorkState] = useState('');
  const [workSkill, setWorkSkill] = useState('');
  const [workPlace, setWorkPlace] = useState('');
  const [positionArray, setPositionArray] = useState([]);

  const createWork = ['⚙️ 개발', '🛠 퍼블리싱', '🎨 디자인', '📝 기획', '🔗 기타'];
  const yourState = ['🏢 상주', '🏠 재택', '🖥  상관없음'];
  const yourSkill = ['초급', '중급', '고급'];
  const wantPlace = [
    '서울',
    '부산',
    '대구',
    '인천',
    '광주',
    '대전',
    '울산',
    '세종',
    '경기',
    '강원',
    '충북',
    '충남',
    '전북',
    '전남',
    '경북',
    '경남',
    '제주',
    '기타',
  ];

  const changeType = (e) => {
    setPositionType(e.target.innerHTML);
    setPositionArray([]);
  };
  const changeWorkState = (e) => {
    setWorkState(e.target.innerHTML);
  };

  const changeWorkSkill = (e) => {
    setWorkSkill(e.target.innerHTML);
  };

  const changeWorkPlace = (e) => {
    setWorkPlace(e.target.innerHTML);
  };
  const positionArrayFunction = (e) => {
    if (positionArray.includes('선택')) {
      setPositionArray([e.target.innerHTML]);
    } else if (positionArray.includes(e.target.innerHTML)) {
      const setIndex = positionArray.indexOf(e.target.innerHTML) + 1;
      setPositionArray(positionArray.splice(setIndex, 1));
      setPositionArray(positionArray.filter((element) => element !== e.target.innerHTML));
    } else {
      setPositionArray([...positionArray, e.target.innerHTML]);
    }
  };

  const changeURl = () => {
    const position = () => {
      switch (positionType) {
        case '⚙️ 개발':
          return 'DEVELOPER';
        case '🛠 퍼블리싱':
          return 'PUBLISHER';
        case '🎨 디자인':
          return 'DESIGNER';
        case '📝 기획':
          return 'PLANNER';
        case '🔗 기타':
          return 'ETC';
        default:
          return 'DEVELOPER';
      }
    };
    const state = () => {
      switch (workState) {
        case '🏢 상주':
          return 'WORKING';
        case '🏠 재택':
          return 'TELEWORKING';
        default:
          return '';
      }
    };
    const skills = () => {
      switch (workSkill) {
        case '초급':
          return 'JUNIOR';
        case '중급':
          return 'MIDDLE';
        case '고급':
          return 'SENIOR';
        default:
          return '';
      }
    };
    const newArray = positionArray.map((a) => {
      return `&skills=${a}`;
    });
    setLoading(true);
    setURL(
      `/project-list?positionKind=${position()}${newArray.join(
        '',
      )}&projectType=${state()}&freelancerWorkmanShip=${skills()}&region=${workPlace}`,
    );
    setSelectType(positionType);
    setSelectType1(positionType);
    setModalCheck(false);
  };

  return (
    <S.Container>
      <S.FlexDiv>
        <S.CancelImg
          src={Cancel}
          alt="취소버튼"
          onClick={() => {
            setModalCheck(false);
          }}
        />
        <S.FlexDiv center="center">
          <S.Title>필터 추가하기</S.Title>
        </S.FlexDiv>
      </S.FlexDiv>
      <S.ContentDiv>
        <S.InsideContentDiv>
          <S.Title>크리에이티브 분야</S.Title>
          <S.Ul>
            {createWork.map((data) => {
              return (
                <S.Li
                  key={data}
                  bgColor={positionType === `${data}` ? '#e7e7e7' : 'white'}
                  color={positionType === `${data}` ? 'black' : '#d7d7d7'}
                  onClick={(e) => changeType(e)}
                >
                  {data}
                </S.Li>
              );
            })}
          </S.Ul>
        </S.InsideContentDiv>
        <S.InsideContentDiv>
          <S.FlexnoPadding>
            <S.Title>관련기술</S.Title>
            <S.SubTitle>사용 프로그램 및 주언어를 검색할 수 있습니다</S.SubTitle>
          </S.FlexnoPadding>
          {positionType === '⚙️ 개발' && (
            <Developer positionArray={positionArray} positionArrayFunction={positionArrayFunction} />
          )}
          {positionType === '🛠 퍼블리싱' && (
            <Publisher positionArray={positionArray} positionArrayFunction={positionArrayFunction} />
          )}
          {positionType === '🎨 디자인' && (
            <Designer positionArray={positionArray} positionArrayFunction={positionArrayFunction} />
          )}
          {positionType === '📝 기획' && (
            <Planer positionArray={positionArray} positionArrayFunction={positionArrayFunction} />
          )}
          {positionType === '🔗 기타' && (
            <EtcPerson positionArray={positionArray} positionArrayFunction={positionArrayFunction} />
          )}
        </S.InsideContentDiv>
        <S.InsideContentDiv>
          <S.Title>근무 위치</S.Title>
          <S.Ul>
            {yourState.map((data) => {
              return (
                <S.Li
                  key={data}
                  bgColor={workState === `${data}` ? '#e7e7e7' : 'white'}
                  color={workState === `${data}` ? 'black' : '#d7d7d7'}
                  onClick={(e) => changeWorkState(e)}
                >
                  {data}
                </S.Li>
              );
            })}
          </S.Ul>
        </S.InsideContentDiv>
        <S.InsideContentDiv>
          <S.Title>숙련도</S.Title>
          <S.Ul>
            {yourSkill.map((data) => {
              return (
                <S.Li
                  key={data}
                  bgColor={workSkill === `${data}` ? '#e7e7e7' : 'white'}
                  color={workSkill === `${data}` ? 'black' : '#d7d7d7'}
                  onClick={(e) => changeWorkSkill(e)}
                >
                  {data}
                </S.Li>
              );
            })}
          </S.Ul>
        </S.InsideContentDiv>
        <S.InsideContentDiv>
          <S.Title>지역</S.Title>
          <S.Ul>
            {wantPlace.map((data) => {
              return (
                <S.Li
                  key={data}
                  bgColor={workPlace === `${data}` ? '#e7e7e7' : 'white'}
                  color={workPlace === `${data}` ? 'black' : '#d7d7d7'}
                  onClick={(e) => changeWorkPlace(e)}
                >
                  {data}
                </S.Li>
              );
            })}
          </S.Ul>
        </S.InsideContentDiv>
      </S.ContentDiv>

      <S.ButtonDiv>
        <FilterChoiceButton changeURl={changeURl} />
      </S.ButtonDiv>
    </S.Container>
  );
};

const Developer = ({ positionArray, positionArrayFunction }) => {
  const [Array, setArray] = useState(['JAVA', 'iOS', 'Android', 'PHP', 'ASP', '.NET', 'JavaScript', 'C', 'C++', 'DB']);

  return (
    <S.Ul>
      {Array.map((data) => {
        return (
          <S.Li
            key={data}
            bgColor={positionArray.includes(data) ? '#e7e7e7' : 'white'}
            color={positionArray.includes(data) ? 'black' : '#d7d7d7'}
            onClick={(e) => positionArrayFunction(e)}
          >
            {data}
          </S.Li>
        );
      })}
      <ProjectListSearchBar Array={Array} setArray={setArray} />
    </S.Ul>
  );
};

const Publisher = ({ positionArray, positionArrayFunction }) => {
  const [Array, setArray] = useState([
    'HTML5',
    'CSS',
    'ActionScript',
    'jQuery',
    'React.js',
    'Vue.js',
    'JavaScript',
    'WordPress',
    'BootStrap',
    'Photoshop',
    'Flash',
    '웹접근성',
    '웹표준',
    'Git',
  ]);

  return (
    <S.Ul>
      {Array.map((data) => {
        return (
          <S.Li
            key={data}
            bgColor={positionArray.includes(data) ? '#e7e7e7' : 'white'}
            color={positionArray.includes(data) ? 'black' : '#d7d7d7'}
            onClick={(e) => positionArrayFunction(e)}
          >
            {data}
          </S.Li>
        );
      })}
      <ProjectListSearchBar Array={Array} setArray={setArray} />
    </S.Ul>
  );
};

const Designer = ({ positionArray, positionArrayFunction }) => {
  const [Array, setArray] = useState([
    '웹디자인',
    '앱디자인',
    '출판/편집 디자인',
    '게임 디자인',
    '판촉물 디자인',
    '3D 디자인',
    '그래픽 디자인',
    '패키지 디자인',
    '아트 디렉션',
    '애니메이션',
    '로고 브랜딩',
  ]);
  return (
    <S.Ul>
      {Array.map((data) => {
        return (
          <S.Li
            key={data}
            bgColor={positionArray.includes(data) ? '#e7e7e7' : 'white'}
            color={positionArray.includes(data) ? 'black' : '#d7d7d7'}
            onClick={(e) => positionArrayFunction(e)}
          >
            {data}
          </S.Li>
        );
      })}
      <ProjectListSearchBar Array={Array} setArray={setArray} />
    </S.Ul>
  );
};

const Planer = ({ positionArray, positionArrayFunction }) => {
  const [Array, setArray] = useState([
    'PM',
    'PL',
    'PMO(사업관리)',
    '시스템분석/설계',
    '웹기획',
    '앱기획',
    '컨설팅',
    '제안',
    '쇼핑몰',
    '여행사',
    '금융',
    '증권',
    '카드',
    '보험',
    '대학',
    '병원',
    '공공기관',
    '물류',
    '회계',
    '제조',
    '건설',
    '암호화폐',
  ]);
  return (
    <S.Ul>
      {Array.map((data) => {
        return (
          <S.Li
            key={data}
            bgColor={positionArray.includes(data) ? '#e7e7e7' : 'white'}
            color={positionArray.includes(data) ? 'black' : '#d7d7d7'}
            onClick={(e) => positionArrayFunction(e)}
          >
            {data}
          </S.Li>
        );
      })}
      <ProjectListSearchBar Array={Array} setArray={setArray} />
    </S.Ul>
  );
};

const EtcPerson = ({ positionArray, positionArrayFunction }) => {
  const [Array, setArray] = useState([
    'PM',
    'PL',
    '시스템분석/설계',
    'DA',
    'DBA',
    'TA',
    'AA',
    'NA',
    'PMO',
    'SE',
    'QA',
    'QC',
  ]);

  return (
    <S.Ul>
      {Array.map((data) => {
        return (
          <S.Li
            key={data}
            bgColor={positionArray.includes(data) ? '#e7e7e7' : 'white'}
            color={positionArray.includes(data) ? 'black' : '#d7d7d7'}
            onClick={(e) => positionArrayFunction(e)}
          >
            {data}
          </S.Li>
        );
      })}
      <ProjectListSearchBar Array={Array} setArray={setArray} />
    </S.Ul>
  );
};

export default ProjectListModal;
