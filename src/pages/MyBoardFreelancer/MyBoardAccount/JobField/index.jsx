import { useState } from 'react';
import * as S from './style';

const JobField = ({ workType, workTypeField, setWorkTypeField }) => {
  const handleThreeJobField = (e) => {
    const jobType = e.target.id;

    if (jobType && !workTypeField.includes(jobType)) {
      if (workTypeField.length < 3) {
        setWorkTypeField((prev) => [...prev, jobType]);
      } else {
        alert('3개 업무만 가능해요');
      }
      return;
    }

    if (jobType && workTypeField.includes(jobType)) {
      setWorkTypeField((prev) => prev.filter((type) => type !== jobType));
    }
  };
  return (
    <S.FrameOptions>
      {workType.map((type) => (
        <S.ContainerOptions key={type}>
          <S.ContainerList>
            <S.ButtonLabel
              id={type}
              onClick={(e) => {
                handleThreeJobField(e);
              }}
              active={workTypeField.includes(type)}
            >
              {type}
            </S.ButtonLabel>
          </S.ContainerList>
        </S.ContainerOptions>
      ))}
    </S.FrameOptions>
  );
};

export default JobField;
