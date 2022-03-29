import styled from 'styled-components';
import * as S from './style';

import Ecard from 'components/Project-Ecard';

const DarkEcard = styled.div`
  background-color: white;
  color: black;
`;

const ListPortfolio = () => {
  return (
    <S.FramePortfolio>
      <Ecard darkMode="darkMode" />
    </S.FramePortfolio>
  );
};

export default ListPortfolio;
