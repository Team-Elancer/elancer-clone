import { useEffect, useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import * as S from './style';
import CompanyDashBoard from 'components/DashBoard/Comapany-Myboard';
import Loading from 'components/Loading';

const DashBoardProfile = () => {
  const [Datas, setDatas, axiosUrl, setaxiosUrl, fetchData] = useOutletContext();

  console.log(Datas, 'check', axiosUrl);

  useEffect(() => {
    setaxiosUrl('/enterprise-profile');
  }, []);

  return (
    <S.Container>
      {Datas === undefined ? (
        <Loading />
      ) : (
        <>
          <S.SpacebetweenDiv>
            <S.H1>프로필관리</S.H1>
            <Link to="/dashboard/modify">
              <S.LinkP>수정</S.LinkP>
            </Link>
          </S.SpacebetweenDiv>
          <S.FlexDiv display="block">
            <S.EcardSize>
              <CompanyDashBoard
                Datas={Datas}
                fetchData={fetchData}
                EcardDiv="block"
                topleft="0.6rem"
                bottomleft="0.6rem"
                right="0"
              />
            </S.EcardSize>
            <S.EcardSize>
              <S.LineDiv />
              <S.EcardDiv>
                <S.EcarcdPaddingDiv height="1.5rem">
                  <S.PTag>
                    기업형태
                    <S.SpanTag textSize="0.8rem">{Datas ? Datas.enterpriseType : '-'}</S.SpanTag>
                  </S.PTag>
                  <S.PTag top="1rem">
                    연간매출액
                    <S.SpanTag textSize="0.9rem">{Datas ? Datas.sales : '-'}</S.SpanTag>
                  </S.PTag>
                  <S.PTag top="1rem">
                    사업자등록번호
                    <S.SpanTag textSize="0.95rem">{Datas ? Datas.idNumber : '-'}</S.SpanTag>
                  </S.PTag>
                </S.EcarcdPaddingDiv>
              </S.EcardDiv>
            </S.EcardSize>
          </S.FlexDiv>
        </>
      )}
    </S.Container>
  );
};

export default DashBoardProfile;
