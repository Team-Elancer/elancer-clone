import styled from 'styled-components';

const Container = styled.div`
  display: none;
  width: 100%;
  height: 700px;
  background-color: black;
  opacity: 0.3;
  position: absolute;
  top: 0px;
`;

const MainMenu = () => {
  return (
    <div>
      <Container />
    </div>
  );
};

export default MainMenu;
