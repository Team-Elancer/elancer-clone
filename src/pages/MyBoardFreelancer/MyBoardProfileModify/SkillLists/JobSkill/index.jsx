import { useState } from 'react';

import * as S from './style';

const JobSkill = () => {
  const [jobType, setJobType] = useState('');

  const jobFuntion = (e) => {
    setJobType(e.target.value);
  };

  return (
    <S.JobUl>
      <S.JobRadioLi>
        <S.JobInputLeft
          name="job"
          id="job1"
          type="radio"
          value="DEVELOPER"
          bgColor={jobType === 'DEVELOPER' ? '#f16300' : '#f2f2f2'}
          tabletColor={jobType === 'DEVELOPER' ? '#f16300' : 'white'}
          onClick={jobFuntion}
        />

        <S.JobLabel color={jobType === 'DEVELOPER' ? 'white' : 'black'} htmlFor="job1">
          개발자
        </S.JobLabel>
      </S.JobRadioLi>
      <S.JobRadioLi left="-0.5rem">
        <S.JobInput
          name="job"
          id="job2"
          type="radio"
          value="PUBLISHER"
          bgColor={jobType === 'PUBLISHER' ? '#f16300' : '#f2f2f2'}
          tabletColor={jobType === 'PUBLISHER' ? '#f16300' : 'white'}
          onClick={jobFuntion}
        />

        <S.JobLabel color={jobType === 'PUBLISHER' ? 'white' : 'black'} htmlFor="job2">
          퍼블리셔
        </S.JobLabel>
      </S.JobRadioLi>
      <S.JobRadioLi left="-0.5rem">
        <S.JobInput
          name="job"
          id="job3"
          type="radio"
          value="DESIGNER"
          bgColor={jobType === 'DESIGNER' ? '#f16300' : '#f2f2f2'}
          tabletColor={jobType === 'DESIGNER' ? '#f16300' : 'white'}
          onClick={jobFuntion}
        />

        <S.JobLabel color={jobType === 'DESIGNER' ? 'white' : 'black'} htmlFor="job3">
          디자이너
        </S.JobLabel>
      </S.JobRadioLi>
      <S.JobRadioLi left="-0.5rem">
        <S.JobInput
          name="job"
          id="job4"
          type="radio"
          value="PLANNER"
          bgColor={jobType === 'PLANNER' ? '#f16300' : '#f2f2f2'}
          tabletColor={jobType === 'PLANNER' ? '#f16300' : 'white'}
          onClick={jobFuntion}
        />
        <S.JobLabel color={jobType === 'PLANNER' ? 'white' : 'black'} htmlFor="job4">
          기획자
        </S.JobLabel>
      </S.JobRadioLi>
      <S.JobRadioLi left="-0.5rem">
        <S.JobInput
          name="job"
          id="job5"
          type="radio"
          value="CROWD_WORKER"
          bgColor={jobType === 'CROWD_WORKER' ? '#f16300' : '#f2f2f2'}
          tabletColor={jobType === 'CROWD_WORKER' ? '#f16300' : 'white'}
          onClick={jobFuntion}
        />
        <S.JobLabel color={jobType === 'CROWD_WORKER' ? 'white' : 'black'} htmlFor="job5">
          크라우드워커
        </S.JobLabel>
      </S.JobRadioLi>
      <S.JobRadioLi left="-0.5rem">
        <S.JobInputRight
          name="job"
          id="job6"
          type="radio"
          value="ETC"
          bgColor={jobType === 'ETC' ? '#f16300' : '#f2f2f2'}
          tabletColor={jobType === 'ETC' ? '#f16300' : 'white'}
          onClick={jobFuntion}
        />
        <S.JobLabel color={jobType === 'ETC' ? 'white' : 'black'} htmlFor="job6">
          기타
        </S.JobLabel>
      </S.JobRadioLi>
    </S.JobUl>
  );
};

export default JobSkill;
