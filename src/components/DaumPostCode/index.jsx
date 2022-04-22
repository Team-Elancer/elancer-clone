import { useContext, useEffect, useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import * as S from './style';
import { ThemeContext } from 'ThemeContext';

const Postcode = () => {
  const { placePostcode, setPlacePostcode, placeAddress, setPlaceAddress, changeBool, setChangeBool } =
    useContext(ThemeContext);

  const handleComplete = (data) => {
    setPlacePostcode(data.zonecode);
    setPlaceAddress(data.address);
    setChangeBool(!changeBool);
  };

  useEffect(() => {
    console.log(placePostcode, placeAddress, changeBool);
  }, [changeBool]);

  useEffect(() => {}, []);

  return (
    <S.Container>
      <DaumPostcode onComplete={handleComplete} />
    </S.Container>
  );
};

export default Postcode;
