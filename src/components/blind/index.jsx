import styled from 'styled-components';
import useStore from 'zustand';

const Container = styled.div`
  width: 100%;
  height: 700px;
  background-color: black;
  opacity: 0.3;
  position: absolute;
  top: 0px;
`;

const Blind = () => {
  const changetrue = useStore((state) => state.changetrue);

  const changeShow = () => {
    return changetrue();
  };

  return (
    <div>
      <Container onClick={changeShow} />
    </div>
  );
};

export default Blind;
