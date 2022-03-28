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
  border: ${({ primary }) => (primary ? 'solid 2px #000000' : 'solid 2px rgba(215, 215, 215, 1)')};
  border-radius: 9999px;
  cursor: pointer;
  font-weight: 600;
  font-size: 11px;
  text-align: center;
  margin: 4px 8px 4px 0;
  padding: 0.5rem;

  &:hover {
    background: rgba(231, 231, 231, 1);
  }

  @media ${TABLET} {
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.1rem;
  }
`;

export const TopButtonDark = styled(TopButton)`
  color: #fff;
  background-color: rgba(60, 60, 60, 1);
  border-color: ${({ primary }) => (primary ? '#fff' : 'rgba(60, 60, 60, 1)')};

  &:hover {
    border-color: ${({ primary }) => primary && '#fff'};
    background-color: rgba(75, 75, 75, 1);
  }
`;
