import styled from 'styled-components';
import { MOBILE, TABLET, LAPTOP, DESKTOP } from 'utils/constants/responsive';

const Container = styled.div`
  z-index: 90;
  width: 100%;
  height: 107%;
  background: linear-gradient(to top, #7485c9 0, #f16300 100%);
  position: absolute;
  top: -10px;
  overflow-y: hidden;
  @media ${TABLET} {
    background: black;
    opacity: 0.3;
  }
`;

const MainMenu = ({ setCeckBool }) => {
  const changeBool = () => {
    return setCeckBool(true);
  };
  return (
    <div>
      <Container onClick={changeBool} />
    </div>
  );
};

export default MainMenu;
