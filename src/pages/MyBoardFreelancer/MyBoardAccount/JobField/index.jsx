import { useState } from 'react';
import * as S from './style';

const JobField = () => {
  const [isCheckedProject, setIsCheckedProject] = useState('');
  const [defaultPrimary, setDefaultPrimary] = useState({
    project: false,
    career: false,
    account: false,
  });

  const { project, career, account } = defaultPrimary;

  const removeDefault = () => {
    setDefaultPrimary({});
  };

  return (
    <S.FrameOptions>
      <S.ContainerOptions>
        <S.ContainerList>
          <S.ButtonLabel
            htmlFor="project"
            onClick={() => {
              setIsCheckedProject('#project');
              removeDefault();
            }}
            active={isCheckedProject === '#project' || project}
          >
            쇼핑몰
            <S.ButtonOption type="radio" value="1" name="project" />
          </S.ButtonLabel>
        </S.ContainerList>
        <S.ContainerList>
          <S.ButtonLabel
            htmlFor="career"
            active={isCheckedProject === '#career' || career}
            onClick={() => {
              removeDefault();
              setIsCheckedProject('#career');
            }}
          >
            여행사
            <S.ButtonOption type="radio" value="2" name="career" />
          </S.ButtonLabel>
        </S.ContainerList>
        <S.ContainerList>
          <S.ButtonLabel
            htmlFor="account"
            active={isCheckedProject === '#account' || account}
            onClick={() => {
              removeDefault();
              setIsCheckedProject('#account');
            }}
          >
            교육
            <S.ButtonOption type="radio" value="3" name="account" />
          </S.ButtonLabel>
        </S.ContainerList>
        <S.ContainerList>
          <S.ButtonLabel
            htmlFor="signup"
            active={isCheckedProject === '#signup'}
            onClick={() => {
              removeDefault();
              setIsCheckedProject('#signup');
            }}
          >
            병원
            <S.ButtonOption type="radio" value="4" name="signup" />
          </S.ButtonLabel>
        </S.ContainerList>
        <S.ContainerList>
          <S.ButtonLabel
            htmlFor="etc"
            active={isCheckedProject === '#etc'}
            onClick={() => {
              removeDefault();
              setIsCheckedProject('#etc');
            }}
          >
            기타
            <S.ButtonOption type="radio" value="6" name="etc" />
          </S.ButtonLabel>
        </S.ContainerList>
      </S.ContainerOptions>
    </S.FrameOptions>
  );
};

export default JobField;
