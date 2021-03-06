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

const FreelancerFilter = ({ setMatchPosition, setIsModal, setURL, setIsLoading, PositionType, setPositionType }) => {
  const domNode = useCloseOutside(() => {
    setIsModal(false);
  });

  const [PositionWorkManShip, setPositionWorkManShip] = useState('');
  const [HopeWorkState, setHopeWorkState] = useState('');
  const [WorkArea, setWorkArea] = useState('');

  const [skillSTATE, setSkillSTATE] = useState([]);

  const handlePositionSkills = (e) => {
    setSkillSTATE((prev) => [...prev, e.target.innerHTML]);

    if (skillSTATE && skillSTATE?.includes(e.target.innerHTML)) {
      setSkillSTATE((prev) => prev.filter((item) => item !== e.target.innerHTML));
    }
  };

  const submitFilter = async () => {
    setIsLoading(true);

    try {
      setURL(
        `/${handlePosition(PositionType)[0]}?positionType=${
          handlePosition(PositionType)[1]
        }&majorSkillKeywords=${skillSTATE.join(',')}&hopeWorkState=${handleHopeWork(
          HopeWorkState,
        )}&positionWorkManShip=${handleWorkManShip(PositionWorkManShip)}&workArea=${handleWorkArea(WorkArea)}`,
      );
      setIsLoading(false);
      setIsModal(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  const matchPositions = (type) => {
    switch (type) {
      case 'π  νΌλΈλ¦¬μ±':
        setMatchPosition('π  νΌλΈλ¦¬μ');
        break;
      case 'π¨ λμμΈ':
        setMatchPosition('π¨ λμμ΄λ');
        break;
      case 'π κΈ°ν':
        setMatchPosition('π κΈ°νμ');

        break;
      case 'π κΈ°ν':
        setMatchPosition('π κΈ°ν');

        break;
      default:
        setMatchPosition('βοΈ κ°λ°μ');
        break;
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
            <S.Title>νν° μΆκ°νκΈ°</S.Title>
          </S.FlexDiv>
        </S.FlexDiv>

        {/* ========== Main Logic Container ========== */}

        <S.WrapperContent>
          {/* ======= ν¬λ¦¬μμ΄ν°λΈ λΆμΌ ======= */}
          <S.ContainerContent>
            <S.Title>ν¬λ¦¬μμ΄ν°λΈ λΆμΌ</S.Title>
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
                      matchPositions(e.target.innerHTML);

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

          {/* ======= μ£ΌμΈμ΄ κ²μ ======= */}

          <S.ContainerContent>
            <S.FlexAlignCenter>
              <S.Title>κ΄λ ¨κΈ°μ </S.Title>
              <S.SubTitle>μ¬μ© νλ‘κ·Έλ¨ λ° μ£ΌμΈμ΄λ₯Ό κ²μν  μ μμ΅λλ€</S.SubTitle>
            </S.FlexAlignCenter>
            {PositionType === 'βοΈ κ°λ°' && (
              <Developer skillSTATE={skillSTATE} handlePositionSkills={handlePositionSkills} />
            )}
            {PositionType === 'π  νΌλΈλ¦¬μ±' && (
              <Publisher skillSTATE={skillSTATE} handlePositionSkills={handlePositionSkills} />
            )}
            {PositionType === 'π¨ λμμΈ' && (
              <Designer skillSTATE={skillSTATE} handlePositionSkills={handlePositionSkills} />
            )}
            {PositionType === 'π κΈ°ν' && (
              <Planner skillSTATE={skillSTATE} handlePositionSkills={handlePositionSkills} />
            )}
            {PositionType === 'π κΈ°ν' && <ETC skillSTATE={skillSTATE} handlePositionSkills={handlePositionSkills} />}
          </S.ContainerContent>

          {/* ======= κ·Όλ¬΄ μμΉ ======= */}
          <S.ContainerContent>
            <S.Title>κ·Όλ¬΄ μμΉ</S.Title>
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

          {/* ======= μλ ¨λ ======= */}
          <S.ContainerContent>
            <S.Title>μλ ¨λ</S.Title>
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

          {/* ======= μ§μ­1 ======= */}
          <S.ContainerContent>
            <S.Title>μ§μ­1</S.Title>
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
          <S.ButtonContainer onClick={submitFilter}>νν° μ μ©νκΈ°</S.ButtonContainer>
        </S.ButtonSubmitContainer>
      </S.WrapperContainer>
    </S.Wrapper>
  );
};

export default FreelancerFilter;
