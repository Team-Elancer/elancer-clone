import { useState } from 'react';
import * as S from './style';

import useCloseOutside from 'hooks/useCloseOutside';

const FreelancerFilter = ({ setIsModal }) => {
  const domNode = useCloseOutside(() => {
    setIsModal(false);
  });

  return (
    <S.Wrapper ref={domNode}>
      <S.WrapperContainer>
        {/* ======= Top Container ======= */}
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

        {/* ======= Main Logic Container ======= */}
        <S.WrapperContent>
          <S.ContainerContent>
            <S.Title>크리에이티브 분야</S.Title>
          </S.ContainerContent>
          <S.ContainerContent>
            <S.Title>관련기술 사용 프로그램 및 주언어를 검색할 수 있습니다</S.Title>
          </S.ContainerContent>
          <S.ContainerContent>
            <S.Title>근무 위치</S.Title>
          </S.ContainerContent>
          <S.ContainerContent>
            <S.Title>숙련도</S.Title>
          </S.ContainerContent>
          <S.ContainerContent>
            <S.Title>지역1</S.Title>
          </S.ContainerContent>
        </S.WrapperContent>

        {/* ======= Submit filter  ======= */}
        <S.ButtonSubmitContainer>
          <S.ButtonContainer>필터 적용하기</S.ButtonContainer>
        </S.ButtonSubmitContainer>
      </S.WrapperContainer>
    </S.Wrapper>
  );
};

export default FreelancerFilter;
