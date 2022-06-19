import * as S from './style';

import Cancel from 'assets/images/cancel-dark.png';
import Facebook from 'assets/images/facebook.png';
import Kakao from 'assets/images/kakao.png';
import Twitter from 'assets/images/twitter.png';

import useCloseOutside from 'hooks/useCloseOutside';

const ShareModal = ({ setShareModal }) => {
  const donName = useCloseOutside(() => {
    setShareModal(true);
  });

  const changeBool = () => {
    setShareModal(true);
  };

  return (
    <S.Container ref={donName}>
      <S.FlexDiv>
        <S.CloseImg src={Cancel} alt="close" onClick={changeBool} />
        <S.Title>공유하기</S.Title>
      </S.FlexDiv>
      <S.Ul>
        <S.Li>
          <S.SnsImg src={Kakao} alt="Kakao" />
        </S.Li>
        <S.Li>
          <S.SnsImg src={Facebook} alt="Facebook" />
        </S.Li>
        <S.Li>
          <S.SnsImg src={Twitter} alt="Twitter" />
        </S.Li>
      </S.Ul>
    </S.Container>
  );
};

export default ShareModal;
