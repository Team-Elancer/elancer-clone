import styled from 'styled-components';
import { TABLET, LAPTOP } from 'utils/constants/responsive';

export const FrameContainer = styled.div`
  line-height: 1.2rem;
  height: 100%;
`;

export const ContainerH1 = styled.h1`
  font-size: 0.875rem;
  margin-top: 3rem;
  font-weight: bold;
`;

export const ContainerH2 = styled.h2`
  font-size: 0.8125rem;
  font-weight: 500;
  margin-top: 0.75rem;
  margin-bottom: 2.5rem;
`;

export const ContainerUpload = styled.div`
  width: 100%;
  height: 330px;
  background-color: rgba(75, 75, 75, 1);
  border-radius: 30px;
  text-align: center;
`;

export const FormUpload = styled.div`
  padding-top: 2rem;
`;

export const ContainerResume = styled.div`
  margin-top: 1rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  display: flex;
  position: relative;
  height: 100%;
  gap: 1rem;
`;

export const InputBox = styled.input`
  display: ${({ file }) => (file ? 'none' : 'block')};
  width: 100%;
  border-radius: 10px;
  border-width: 0px;
  padding-left: 0.8rem;
  padding-right: 1rem;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  font-size: 1rem;
  outline: none;
`;

export const CloseButton = styled.span`
  font-size: 1rem;
  position: absolute;
  left: calc(100% - 70px);
  top: 10px;
`;

export const UploadButton = styled.img`
  cursor: pointer;
  margin-top: 1rem;
`;

export const UploadH2 = styled(ContainerH2)`
  color: white;
  margin-top: 0.7rem;
  margin-bottom: 0.7rem;
`;

export const UploadH3 = styled(UploadH2)`
  color: rgba(165, 165, 165, 1);
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const ContainerSubmit = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;
`;

export const UploadDownloadButton = styled.button`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  color: rgba(0, 0, 0, 1);
  cursor: pointer;
  white-space: nowrap;
  font-weight: 600;
  font-size: 0.8125rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.875rem;
  padding-right: 0.875rem;
`;
