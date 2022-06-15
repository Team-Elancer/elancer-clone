import React from 'react';

import BounceLoader from 'react-spinners/FadeLoader';

import styled from 'styled-components';

const Loading = () => {
  return (
    <Container>
      <BounceLoader color="#C63DEE" height={15} width={5} radius={2} margin={2} />
      <h1>로딩중...</h1>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Loading;
