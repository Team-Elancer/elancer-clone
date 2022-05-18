import { useState, useEffect } from 'react';
import { useParams, useSearchParams, useLocation } from 'react-router-dom';

import * as S from './style';

const CategoryFAQButton = ({ isCheckedProject, setIsCheckedProject, defaultPrimary, removeDefault }) => {
  const { project, career, account } = defaultPrimary;

  return (
    <>
      <S.FAQH1>FAQ</S.FAQH1>
      <form>
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
              프로젝트
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
              이력정보
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
              회원정보 수정
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
              개인회원가입
              <S.ButtonOption type="radio" value="4" name="signup" />
            </S.ButtonLabel>
          </S.ContainerList>
          <S.ContainerList>
            <S.ButtonLabel
              htmlFor="id-password"
              active={isCheckedProject === '#id-password'}
              onClick={() => {
                removeDefault();
                setIsCheckedProject('#id-password');
              }}
            >
              아이디/비밀번호찾기
              <S.ButtonOption type="radio" value="5" name="id-password" />
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
      </form>
    </>
  );
};

export default CategoryFAQButton;
