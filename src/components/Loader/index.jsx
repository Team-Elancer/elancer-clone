import styled from 'styled-components';

const index = () => {
  return <SLoader />;
};

const SLoader = styled.div`
  margin-top: 5rem;
  font-size: 15px;
  margin: 2rem auto;
  justify-content: center;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #f16301;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 0.7s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default index;
