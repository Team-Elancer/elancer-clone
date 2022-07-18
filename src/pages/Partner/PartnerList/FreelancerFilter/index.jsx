import { useState, useEffect } from 'react';

import Designer from './Designer';
import Developer from './Developer';
import ETC from './ETC';
import Planner from './Planner';
import Publisher from './Publisher';

import * as S from './style';

import useCloseOutside from 'hooks/useCloseOutside';

import { POSITION, HOPEWORK, WORKMANSHIP, WORKAREA } from 'utils/constants/freelancerFilter';
import { handlePosition, handleHopeWork, handleWorkManShip, handleWorkArea } from 'utils/helpers';

const FreelancerFilter = ({ setIsModal, setURL, setIsLoading }) => {
  const domNode = useCloseOutside(() => {
    setIsModal(false);
  });

  const [PositionType, setPositionType] = useState('⚙️ 개발');
  const [PositionWorkManShip, setPositionWorkManShip] = useState('');
  const [HopeWorkState, setHopeWorkState] = useState('');
  const [WorkArea, setWorkArea] = useState('');

  const [skillSTATE, setSkillSTATE] = useState([]);

  const handlePositionSkills = (e) => {
    console.log(e.target.innerHTML);
    setSkillSTATE((prev) => [...prev, e.target.innerHTML]);

    if (skillSTATE && skillSTATE?.includes(e.target.innerHTML)) {
      setSkillSTATE((prev) => prev.filter((item) => item !== e.target.innerHTML));
    }
  };

  const submitFilter = async () => {
    setIsLoading(true);

    console.log(
      `/${handlePosition()[0]}?positionType=${handlePosition()[1]}&majorSkillKeywords=${skillSTATE.join(
        ',',
      )}&hopeWorkState=${handleHopeWork(HopeWorkState)}&positionWorkManShip=${handleWorkManShip(
        PositionWorkManShip,
      )}&workArea=${handleWorkArea(WorkArea)}`,
    );

    try {
      setURL(
        `/${handlePosition()[0]}?positionType=${handlePosition()[1]}&majorSkillKeywords=${skillSTATE.join(
          ',',
        )}&hopeWorkState=${handleHopeWork(HopeWorkState)}&positionWorkManShip=${handleWorkManShip(
          PositionWorkManShip,
        )}&workArea=${handleWorkArea(WorkArea)}`,
      );
      setIsLoading(false);
      setIsModal(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <S.Wrapper ref={domNode}>
      <S.WrapperContainer>
        {/* ========== Top Container ========== */}
        <S.FlexDiv>
          <S.CancelButton
            onClick={() => {
              setIsModal(false);
            }}
          >
            X
          </S.CancelButton>
          <S.FlexDiv center="center">
            <S.Title>필터 추가하기</S.Title>
          </S.FlexDiv>
        </S.FlexDiv>

        {/* ========== Main Logic Container ========== */}

        <S.WrapperContent>
          {/* ======= 크리에이티브 분야 ======= */}
          <S.ContainerContent>
            <S.Title>크리에이티브 분야</S.Title>
            <S.SectionContent>
              {POSITION.map((data) => {
                return (
                  <S.SectionContentItem
                    key={data}
                    bgColor={PositionType === data ? '#e7e7e7' : '#fffff'}
                    color={PositionType === data ? 'black' : '#d7d7d7'}
                    onClick={(e) => {
                      // For CSS
                      setPositionType(e.target.innerHTML);
                      // To deliver new position
                      setSkillSTATE([]);
                    }}
                  >
                    {data}
                  </S.SectionContentItem>
                );
              })}
            </S.SectionContent>
          </S.ContainerContent>

          {/* ======= 주언어 검색 ======= */}

          <S.ContainerContent>
            <S.FlexAlignCenter>
              <S.Title>관련기술</S.Title>
              <S.SubTitle>사용 프로그램 및 주언어를 검색할 수 있습니다</S.SubTitle>
            </S.FlexAlignCenter>
            {PositionType === '⚙️ 개발' && (
              <Developer skillSTATE={skillSTATE} handlePositionSkills={handlePositionSkills} />
            )}
            {PositionType === '🛠 퍼블리싱' && (
              <Publisher skillSTATE={skillSTATE} handlePositionSkills={handlePositionSkills} />
            )}
            {PositionType === '🎨 디자인' && (
              <Designer skillSTATE={skillSTATE} handlePositionSkills={handlePositionSkills} />
            )}
            {PositionType === '📝 기획' && (
              <Planner skillSTATE={skillSTATE} handlePositionSkills={handlePositionSkills} />
            )}
            {PositionType === '🔗 기타' && <ETC skillSTATE={skillSTATE} handlePositionSkills={handlePositionSkills} />}
          </S.ContainerContent>

          {/* ======= 근무 위치 ======= */}
          <S.ContainerContent>
            <S.Title>근무 위치</S.Title>
            <S.SectionContent>
              {HOPEWORK.map((data) => {
                return (
                  <S.SectionContentItem
                    key={data}
                    bgColor={HopeWorkState === data ? '#e7e7e7' : '#fffff'}
                    color={HopeWorkState === data ? 'black' : '#d7d7d7'}
                    onClick={(e) => {
                      setHopeWorkState(e.target.innerHTML);
                    }}
                  >
                    {data}
                  </S.SectionContentItem>
                );
              })}
            </S.SectionContent>
          </S.ContainerContent>

          {/* ======= 숙련도 ======= */}
          <S.ContainerContent>
            <S.Title>숙련도</S.Title>
            <S.SectionContent>
              {WORKMANSHIP.map((data) => {
                return (
                  <S.SectionContentItem
                    key={data}
                    bgColor={PositionWorkManShip === data ? '#e7e7e7' : '#fffff'}
                    color={PositionWorkManShip === data ? 'black' : '#d7d7d7'}
                    onClick={(e) => {
                      setPositionWorkManShip(e.target.innerHTML);
                    }}
                  >
                    {data}
                  </S.SectionContentItem>
                );
              })}
            </S.SectionContent>
          </S.ContainerContent>

          {/* ======= 지역1 ======= */}
          <S.ContainerContent>
            <S.Title>지역1</S.Title>
            <S.SectionContent>
              {WORKAREA.map((data) => {
                return (
                  <S.SectionContentItem
                    key={data}
                    bgColor={WorkArea === data ? '#e7e7e7' : '#fffff'}
                    color={WorkArea === data ? 'black' : '#d7d7d7'}
                    onClick={(e) => {
                      setWorkArea(e.target.innerHTML);
                    }}
                  >
                    {data}
                  </S.SectionContentItem>
                );
              })}
            </S.SectionContent>
          </S.ContainerContent>
        </S.WrapperContent>

        {/* ========== Submit filter  ========== */}
        <S.ButtonSubmitContainer>
          <S.ButtonContainer onClick={submitFilter}>필터 적용하기</S.ButtonContainer>
        </S.ButtonSubmitContainer>
      </S.WrapperContainer>
    </S.Wrapper>
  );
};

export default FreelancerFilter;
