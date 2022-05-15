import { useEffect, useState } from 'react';
import * as S from './style';
import redStar from 'assets/images/redstar.png';
import DaumPostcode from 'components/DaumPostCode';

const PostCode = ({
  setUserCountry,
  placePostcode,
  setPlacePostcode,
  setChangeBool,
  changeBool,
  placeAddress,
  setPlaceAddress,
  userAddress,
  setUserAddress,
}) => {
  const userCountryFuntion = (e) => {
    setUserCountry(e.target.value);
  };

  return (
    <S.Container>
      <S.InputDiv>
        <S.BlockDiv display="flex">
          <div>
            <S.SpanTag right="6rem">주소</S.SpanTag>
          </div>
          <S.SelectTag type="checkbox" Mobilesize="7rem" size="6rem" onChange={userCountryFuntion}>
            <option value="kr">대한민국</option>
            <option value="uk">영국</option>
            <option value="us">미국</option>
            <option value="jp">일본</option>
            <option value="cn">중국</option>
          </S.SelectTag>
          <S.InputTag
            Mobilesize="7em"
            MobileMargin="1rem"
            size="6rem"
            pointer="none"
            readOnly
            placeholder={placePostcode}
            onChange={(e) => {
              if (placePostcode === '') {
                setPlacePostcode(e.target.value);
              } else {
                setPlacePostcode(placePostcode);
              }
            }}
          />
          <S.BlacSpan
            onClick={() => {
              setChangeBool(!changeBool);
            }}
          >
            우편번호 찾기
          </S.BlacSpan>
          {changeBool === true && (
            <DaumPostcode
              setPlacePostcode={setPlacePostcode}
              setPlaceAddress={setPlaceAddress}
              setChangeBool={setChangeBool}
              changeBool={changeBool}
            />
          )}
        </S.BlockDiv>
        <S.CapsMessage />
        <S.CapsMessage />
        <S.PostCodeDiv>
          <S.InputTag
            type="text"
            right="1rem"
            size="17rem"
            pointer="none"
            readOnly
            placeholder={placeAddress}
            onChange={(e) => {
              console.log(placeAddress);
              if (placeAddress === e.target.value) {
                setPlaceAddress(e.target.value);
              } else {
                setPlaceAddress(placeAddress);
              }
            }}
          />
          <S.InputTag
            Mobilesize="15rem"
            size="13rem"
            placeholder="상세 주소를 입력하세요."
            value={userAddress}
            onChange={(e) => {
              setUserAddress(e.target.value);
            }}
          />
        </S.PostCodeDiv>
        <S.CapsMessage />
      </S.InputDiv>
    </S.Container>
  );
};

export default PostCode;
