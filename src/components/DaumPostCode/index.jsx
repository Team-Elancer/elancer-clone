import { useEffect } from 'react';
import DaumPostcode from 'react-daum-postcode';
import * as S from './style';

import useCloseOutside from 'hooks/useCloseOutside';

const Postcode = ({ setPlacePostcode, setPlaceAddress, setChangeBool, changeBool, setZipcode, setMainAddress }) => {
  const domNode = useCloseOutside(() => {
    setChangeBool(false);
  });

  const handleComplete = (data) => {
    if (setPlaceAddress && setPlacePostcode) {
      setPlacePostcode(data.zonecode);
      setPlaceAddress(data.address);
    }

    if (setZipcode && setMainAddress) {
      setZipcode(data.zonecode);
      setMainAddress(data.address);
    }

    setChangeBool(!changeBool);
  };

  useEffect(() => {}, [changeBool]);

  return (
    <S.Container>
      <S.Button
        ref={domNode}
        type="button"
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
