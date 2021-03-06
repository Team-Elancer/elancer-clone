import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Header from 'layouts/Header';

import { TABLET } from 'utils/constants/responsive';

const ErrorPage = () => {
  return (
    <Frame>
      <Container>
        <Header />
      </Container>
      <BodyPage>
        <h1>404</h1>
        <h2>Sorry, the page you tried cannot be found</h2>
      </BodyPage>
      <FlexCenter>
        <Link to="/">
          <BackHomeButton>Back home</BackHomeButton>
        </Link>
      </FlexCenter>
    </Frame>
  );
};

export default ErrorPage;

const Frame = styled.div`
  width: 100vw;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  font-family: KoPubWorld Dotum, sans-serif;
  margin: 0;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const BodyPage = styled.section`
  padding: 5rem 0;
  width: 90vw;
  margin: 0 auto;
  margin-top: 7rem;
  max-width: 1170px;
  text-align: center;
  font-size: 1.5rem;

  @media ${TABLET} {
    background-size: 200%;
    font-size: 3rem;
  }
`;

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

const BackHomeButton = styled.button`
  background-color: rgba(235, 97, 0, 1);
  border-radius: 5px;
  color: rgba(255, 255, 255, 1);
  display: inline-block;
  font-size: 1rem;
  margin-bottom: 0.75rem;
  padding: 1rem 2rem;
  text-align: center;
  border: none;
  cursor: pointer;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;

  :hover {
    transition: 0.1s ease-in-out;
    transform: scale(1.1, 1.1);
  }

  @media ${TABLET} {
    border-radius: 10px;
    font-size: 1.3rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 1rem;
  }
`;
