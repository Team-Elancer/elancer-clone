import { useState } from 'react';
import * as S from './style';

const CategoryFAQButton = () => {
  const [isCheckedProject, setIsCheckedProject] = useState('');

  return (
    <>
      <S.FAQH1>FAQ</S.FAQH1>
      <form>
        <S.ContainerOptions>
          <S.ContainerList>
            <S.ButtonLabel
              htmlFor="project"
              onClick={() => setIsCheckedProject('#project')}
              active={isCheckedProject === '#project'}
            >
              프로젝트
              <S.ButtonOption type="radio" value="1" name="project" />
            </S.ButtonLabel>
          </S.ContainerList>
          <S.ContainerList>
            <S.ButtonLabel
              htmlFor="career"
              active={isCheckedProject === '#career'}
              onClick={() => setIsCheckedProject('#career')}
            >
              이력정보
              <S.ButtonOption type="radio" value="2" name="career" />
            </S.ButtonLabel>
          </S.ContainerList>
          <S.ContainerList>
            <S.ButtonLabel
              htmlFor="account"
              active={isCheckedProject === '#account'}
              onClick={() => setIsCheckedProject('#account')}
            >
              회원정보 수정
              <S.ButtonOption type="radio" value="3" name="account" />
            </S.ButtonLabel>
          </S.ContainerList>
          <S.ContainerList>
            <S.ButtonLabel
              htmlFor="signup"
              active={isCheckedProject === '#signup'}
              onClick={() => setIsCheckedProject('#signup')}
            >
              개인회원가입
              <S.ButtonOption type="radio" value="3" name="account" />
            </S.ButtonLabel>
          </S.ContainerList>
          <S.ContainerList>
            <S.ButtonLabel
              htmlFor="id-password"
              active={isCheckedProject === '#id-password'}
              onClick={() => setIsCheckedProject('#id-password')}
            >
              아이디/비밀번호찾기
              <S.ButtonOption type="radio" value="3" name="account" />
            </S.ButtonLabel>
          </S.ContainerList>
          <S.ContainerList>
            <S.ButtonLabel
              htmlFor="etc"
              active={isCheckedProject === '#etc'}
              onClick={() => setIsCheckedProject('#etc')}
            >
              기타
              <S.ButtonOption type="radio" value="3" name="account" />
            </S.ButtonLabel>
          </S.ContainerList>
        </S.ContainerOptions>
      </form>
    </>
  );
};

export default CategoryFAQButton;
