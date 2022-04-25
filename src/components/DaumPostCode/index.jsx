import { useEffect } from 'react';
import DaumPostcode from 'react-daum-postcode';
import * as S from './style';

const Postcode = ({ setPlacePostcode, setPlaceAddress, setChangeBool, changeBool }) => {
  const handleComplete = (data) => {
    setPlacePostcode(data.zonecode);
    setPlaceAddress(data.address);
    setChangeBool(!changeBool);
  };

  useEffect(() => {}, [changeBool]);

  return (
    <S.Container>
      <S.Button
        onClick={() => {
          setChangeBool(false);
        }}
      >
        닫기
      </S.Button>
      <DaumPostcode onComplete={handleComplete} />
    </S.Container>
  );
};

export default Postcode;
