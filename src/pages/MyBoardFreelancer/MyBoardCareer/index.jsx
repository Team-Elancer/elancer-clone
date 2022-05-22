import { useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import * as S from './style';

const AutoFolioSpan = styled.span`
  font-size: 0.8125rem;
  font-weight: bold;
  margin-top: 0.75rem;
  margin-right: 0.3rem;
  margin-bottom: 2.5rem;
  margin-left: 0.3rem;
`;

const MyBoardCareer = () => {
  const inputFile = useRef(null);

  const handleFileUpload = () => {
    inputFile.current.click();
  };

  return (
    <S.FrameContainer>
      <S.ContainerH1>
        이랜서에서 쉽고 편하게
        <br />
        체계적인 커리어 관리해보세요
      </S.ContainerH1>
      <S.ContainerH2>
        이랜서의
        <AutoFolioSpan>AutoFolio</AutoFolioSpan>
        기술은 프리랜서가 쉽게 커리어를 등록하고
        <br />
        더욱 빠르게 공유할 수 있도록 돕습니다
      </S.ContainerH2>

      <S.ContainerH2 style={{ fontWeight: 'bold' }}>AutoFolio</S.ContainerH2>

      <S.ContainerUpload>
        <S.FormUpload action="">
          <S.ContainerResume>
            <S.InputBox type="text" placeholder="경력기술서" readOnly onClick={handleFileUpload} />
            <S.InputBox type="file" file ref={inputFile} />
            <S.CloseButton style={{ color: 'orange', fontWeight: 'bold', fontSize: '1.3rem' }}> X </S.CloseButton>
          </S.ContainerResume>
          <S.UploadButton src="https://www.elancer.co.kr/public/images/img-add-product.png" alt="" />
          <S.UploadH2>AutoFolio로 포트폴리오를 자동 등록하세요</S.UploadH2>
          <S.UploadH3>
            AutoFolio 기술로 내 컴퓨터에 저장된 <br />
            이력서/경력서를 1초만에 등록하세요
          </S.UploadH3>
          <S.ContainerSubmit>
            <S.UploadDownloadButton type="submit">업로드</S.UploadDownloadButton>
            <Link to="/files/downloadform.docx" target="_blank" download>
              <S.UploadDownloadButton type="button">양식 다운로드</S.UploadDownloadButton>
            </Link>
          </S.ContainerSubmit>
        </S.FormUpload>
      </S.ContainerUpload>
      <S.ContainerH1>
        포트폴리오를 등록하시면 <br />
        누릴 수 있는 혜택
      </S.ContainerH1>
      <S.ContainerH2>
        이랜서의
        <AutoFolioSpan>AutoFolio</AutoFolioSpan>
        기술은 프리랜서가 쉽게 커리어를 등록하고 <br />
        더욱 빠르게 공유할 수 있도록 돕습니다
      </S.ContainerH2>
    </S.FrameContainer>
  );
};

export default MyBoardCareer;
