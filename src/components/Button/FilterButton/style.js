import styled from 'styled-components';
import { TABLET } from 'utils/constants/responsive';

export const ContainerTopButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  margin-bottom: 1rem;
  width: 100%;
`;

export const TopButton = styled.button`
  background: #fff;
  border: solid 2px rgba(215, 215, 215, 1);
  border: ${(props) => (props.primary ? 'solid 2px #000000' : 'solid 2px rgba(215, 215, 215, 1)')};
  border-radius: 9999px;
  cursor: pointer;
  font-weight: 600;
  font-size: 11px;
  text-align: center;
  margin: 4px 8px 4px 0;
  padding: 0.5rem;

  @media ${TABLET} {
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.1rem;
  }

  &:hover {
    background: rgba(231, 231, 231, 1);
    border: solid 2px #000000;
  }
`;
