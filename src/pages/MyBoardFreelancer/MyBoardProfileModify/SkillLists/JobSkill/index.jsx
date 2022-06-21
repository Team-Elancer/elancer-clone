import * as S from './style';

const JobSkill = ({ positionKeyword, setPositionKeyword }) => {
  return (
    <S.JobUl>
      <S.JobRadioLi>
        <S.JobInputLeft
          id="DEVELOPER"
          type="radio"
          name="DEVELOPER"
          value="DEVELOPER"
          bgColor={positionKeyword === 'DEVELOPER' ? '#f16300' : '#f2f2f2'}
          tabletColor={positionKeyword === 'DEVELOPER' ? '#f16300' : 'white'}
          onClick={(e) => setPositionKeyword(e.target.name)}
        />

        <S.JobLabel color={positionKeyword === 'DEVELOPER' ? 'white' : 'black'} htmlFor="DEVELOPER">
          개발자
        </S.JobLabel>
      </S.JobRadioLi>
      <S.JobRadioLi left="-0.5rem">
        <S.JobInput
          id="PUBLISHER"
          name="PUBLISHER"
          type="radio"
          value="PUBLISHER"
          bgColor={positionKeyword === 'PUBLISHER' ? '#f16300' : '#f2f2f2'}
          tabletColor={positionKeyword === 'PUBLISHER' ? '#f16300' : 'white'}
          onClick={(e) => setPositionKeyword(e.target.name)}
        />

        <S.JobLabel color={positionKeyword === 'PUBLISHER' ? 'white' : 'black'} htmlFor="PUBLISHER">
          퍼블리셔
        </S.JobLabel>
      </S.JobRadioLi>
      <S.JobRadioLi left="-0.5rem">
        <S.JobInput
          id="DESIGNER"
          name="DESIGNER"
          type="radio"
          value="DESIGNER"
          bgColor={positionKeyword === 'DESIGNER' ? '#f16300' : '#f2f2f2'}
          tabletColor={positionKeyword === 'DESIGNER' ? '#f16300' : 'white'}
          onClick={(e) => setPositionKeyword(e.target.name)}
        />

        <S.JobLabel color={positionKeyword === 'DESIGNER' ? 'white' : 'black'} htmlFor="DESIGNER">
          디자이너
        </S.JobLabel>
      </S.JobRadioLi>
      <S.JobRadioLi left="-0.5rem">
        <S.JobInput
          id="PLANNER"
          name="PLANNER"
          type="radio"
          value="PLANNER"
          bgColor={positionKeyword === 'PLANNER' ? '#f16300' : '#f2f2f2'}
          tabletColor={positionKeyword === 'PLANNER' ? '#f16300' : 'white'}
          onClick={(e) => setPositionKeyword(e.target.name)}
        />
        <S.JobLabel color={positionKeyword === 'PLANNER' ? 'white' : 'black'} htmlFor="PLANNER">
          기획자
        </S.JobLabel>
      </S.JobRadioLi>
      <S.JobRadioLi left="-0.5rem">
        <S.JobInput
          id="CROWD_WORKER"
          name="CROWD_WORKER"
          type="radio"
          value="CROWD_WORKER"
          bgColor={positionKeyword === 'CROWD_WORKER' ? '#f16300' : '#f2f2f2'}
          tabletColor={positionKeyword === 'CROWD_WORKER' ? '#f16300' : 'white'}
          onClick={(e) => setPositionKeyword(e.target.name)}
        />
        <S.JobLabel color={positionKeyword === 'CROWD_WORKER' ? 'white' : 'black'} htmlFor="CROWD_WORKER">
          크라우드워커
        </S.JobLabel>
      </S.JobRadioLi>
      <S.JobRadioLi left="-0.5rem">
        <S.JobInputRight
          id="ETC"
          name="ETC"
          type="radio"
          value="ETC"
          bgColor={positionKeyword === 'ETC' ? '#f16300' : '#f2f2f2'}
          tabletColor={positionKeyword === 'ETC' ? '#f16300' : 'white'}
          onClick={(e) => setPositionKeyword(e.target.name)}
        />
        <S.JobLabel color={positionKeyword === 'ETC' ? 'white' : 'black'} htmlFor="ETC">
          기타
        </S.JobLabel>
      </S.JobRadioLi>
    </S.JobUl>
  );
};

export default JobSkill;
