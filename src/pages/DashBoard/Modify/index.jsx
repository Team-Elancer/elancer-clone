import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import * as S from './style';
import Back from 'assets/images/arrowback.png';
import Cancel from 'assets/images/cancel-orange.png';
import SubmitButton from 'components/Button/SubmitButton';

const DashBoardModify = () => {
  const [check, setCheck] = useState(true);

  const [Datas, setDatas, axiosUrl, setaxiosUrl, fetchData] = useOutletContext();

  const [businessTitle, setBusinessTitle] = useState('');
  const [business, setBusiness] = useState('');
  const [businessSale, setBusinessSale] = useState(0);
  const [businessNumber, setBusinessNumber] = useState('');
  const [bizCodes, setBizCodes] = useState([]);
  const [businessEtc, setBusinessEtc] = useState('');

  const [workCodes, setWorkCodes] = useState([]);
  const [workEtc, setWorkEtc] = useState('');

  const [businessArray, setBusinessArray] = useState([
    { mobileRight: '3rem', lapRight: '8rem', type: '웹개발', value: 'main_biz1' },
    { mobileRight: '3rem', lapRight: '7rem', type: '솔루션개발', value: 'main_biz3' },
    { mobileRight: '3rem', lapRight: '2rem', type: 'GIS개발', value: 'main_biz4' },
    { mobileRight: '3rem', lapRight: '7.1rem', type: 'POS개발', value: 'main_biz5' },
    { mobileRight: '3rem', lapRight: '9.1rem', type: 'SI사업', value: 'main_biz6' },
    { mobileRight: '3rem', lapRight: '0rem', type: '앱개발', value: 'main_biz2' },
  ]);
  const [workArray, setWorkArray] = useState([
    { mobileRight: '3rem', lapRight: '8rem', type: '쇼핑몰', value: 'sub_biz1' },
    { mobileRight: '3rem', lapRight: '7rem', type: '여행사', value: 'sub_biz2' },
    { mobileRight: '2rem', lapRight: '2rem', type: '금융', value: 'sub_biz3' },
    { mobileRight: '3.7rem', lapRight: '9rem', type: '증권', value: 'sub_biz4' },
    { mobileRight: '3.7rem', lapRight: '8rem', type: '카드', value: 'sub_biz5' },
    { mobileRight: '2rem', lapRight: '2rem', type: '보험', value: 'sub_biz6' },
    { mobileRight: '3.7rem', lapRight: '9rem', type: '병원', value: 'sub_biz7' },
    { mobileRight: '3.7rem', lapRight: '8rem', type: '대학', value: 'sub_biz8' },
    { mobileRight: '2rem', lapRight: '2rem', type: '공공기관', value: 'sub_biz9' },
    { mobileRight: '3.7rem', lapRight: '9rem', type: '물류', value: 'sub_biz10' },
    { mobileRight: '3.7rem', lapRight: '8rem', type: '회계', value: 'sub_biz11' },
    { mobileRight: '2rem', lapRight: '2rem', type: '제조', value: 'sub_biz12' },
    { mobileRight: '3.7rem', lapRight: '9rem', type: '건설', value: 'sub_biz13' },
    { mobileRight: '3.7rem', lapRight: '8rem', type: '통신', value: 'sub_biz14' },
    { mobileRight: '2rem', lapRight: '2rem', type: '유통', value: 'sub_biz15' },
    { mobileRight: '3.7rem', lapRight: '9rem', type: '생산', value: 'sub_biz16' },
    { mobileRight: '3rem', lapRight: '7rem', type: '미디어', value: 'sub_biz17' },
    { mobileRight: '2rem', lapRight: '2rem', type: '교육', value: 'sub_biz18' },
    { mobileRight: '2.9rem', lapRight: '8rem', type: '반도체', value: 'sub_biz19' },
    { mobileRight: '3rem', lapRight: '7rem', type: '자동차', value: 'sub_biz20' },
    { mobileRight: '2rem', lapRight: '2rem', type: '암호화폐', value: 'sub_biz21' },
    { mobileRight: '2.1rem', lapRight: '7rem', type: '블록체인', value: 'sub_biz22' },
    { mobileRight: '1rem', lapRight: '1rem', type: '기타', value: 'sub_biz23' },
  ]);

  console.log(bizCodes, workCodes);

  const changeMainEtc = (e) => {
    setBusinessEtc(e.target.value);
    if (businessEtc.length < 2) {
      setBizCodes(bizCodes.filter((element) => element !== 'main_etc'));
    } else if (businessEtc.length > 1) {
      if (!bizCodes.includes('main_etc')) {
        setBizCodes([...bizCodes, 'main_etc']);
      }
    }
  };

  const changeWorkEtc = (e) => {
    setWorkEtc(e.target.value);
    if (workEtc.length < 2) {
      setWorkCodes(workCodes.filter((element) => element !== 'sub_etc'));
    } else if (workEtc.length > 1) {
      if (!workCodes.includes('sub_etc')) {
        setWorkCodes([...workCodes, 'sub_etc']);
      }
    }
  };

  const checkInput = (e) => {
    if (bizCodes.filter((a) => a === e.target.id).length === 1) {
      setBizCodes(bizCodes.filter((element) => e.target.id !== element));
    }
  };

  const checkInput2 = (e) => {
    if (workCodes.filter((a) => a === e.target.id).length === 1) {
      setWorkCodes(workCodes.filter((element) => e.target.id !== element));
    }
    if (workCodes.length > 3) {
      alert('최대3개만 선택이 가능합니다.');
      setWorkCodes(workCodes.filter((element) => e.target.id !== element));
    }
  };

  const putModify = (e) => {
    e.preventDefault();
    axios({
      method: 'PUT',
      url: 'http://ec2-13-209-114-196.ap-northeast-2.compute.amazonaws.com:8080/enterprise/profile',
      headers: {
        Authorization: `${window.localStorage.accessToken}`,
      },
      data: {
        introTitle: businessTitle,
        bizContents: business,
        sales: businessSale,
        idNumber: businessNumber,
        mainBizCodes: bizCodes,
        mainEtc: businessEtc,
        subBizCodes: workCodes,
        subEtc: workEtc,
      },
    })
      .then((res) => {
        alert('수정이 완료되었습니다.');
      })
      .catch((err) => {
        alert(err.message);
        setCheck(!check);
      });
  };
  console.log(Datas);

  useEffect(() => {
    setaxiosUrl('/enterprise/profile');
    if (Datas) {
      setBusinessTitle(Datas.introTitle);
      setBusiness(Datas.bizContents);
      setBusinessSale(Number(Datas.sales));
      setBusinessNumber(Datas.idNumber);
      setBizCodes(Datas.mainBizCodes);
      setBusinessEtc(Datas.mainEtc);
      setWorkCodes(Datas.subBizCodes);
      setWorkEtc(Datas.subEtc);
    }
  }, [Datas, axiosUrl]);

  return (
    <S.Container>
      <S.SpacebetweenDiv>
        <Link to="/dashboard/profile">
          <S.Img src={Back} alt="arrowback" />
        </Link>
        <S.H1>프로필 작성</S.H1>
        <S.Save>저장</S.Save>
      </S.SpacebetweenDiv>
      <form onSubmit={putModify}>
        <S.SpanTag display="none" right="6em">
          프로필 제목
        </S.SpanTag>
        <S.ProfileDiv>
          <S.ProfileInput
            placeholder="프로필 제목을 입력해주세요."
            value={businessTitle}
            onChange={(e) => {
              setBusinessTitle(e.target.value);
            }}
          />
        </S.ProfileDiv>
        <S.Title top="6rem">사업정보 *</S.Title>
        <S.ColorDiv>
          <S.MarginAutoDiv>
            <S.InputDiv>
              <S.BlockDiv>
                <div>
                  <S.SpanTag right="2rem">주요 사업내용</S.SpanTag>
                </div>
                <S.InputTag
                  size="14.5rem"
                  laptopSize="19rem"
                  placeholder="주요 사업내용"
                  value={business}
                  onChange={(e) => {
                    setBusiness(e.target.value);
                  }}
                />
              </S.BlockDiv>
              <S.ErrorMessage />
              <S.CapsMessage />
            </S.InputDiv>
            <S.InputDiv>
              <S.BlockDiv>
                <div>
                  <S.SpanTag right="3rem" star="none">
                    연간 매출액
                  </S.SpanTag>
                </div>
                <S.InputTag
                  size="14.5rem"
                  laptopSize="19rem"
                  placeholder="연간 매출액"
                  value={businessSale}
                  onChange={(e) => {
                    setBusinessSale(e.target.value);
                  }}
                />
              </S.BlockDiv>
              <S.CapsMessage />
            </S.InputDiv>
            <S.InputDiv>
              <S.BlockDiv>
                <div>
                  <S.SpanTag right="1.3rem">사업자등록번호</S.SpanTag>
                </div>
                <S.InputTag
                  size="14.5rem"
                  laptopSize="38rem"
                  placeholder="사업자 등록번호"
                  value={businessNumber}
                  onChange={(e) => {
                    setBusinessNumber(e.target.value);
                  }}
                />
              </S.BlockDiv>
              <S.CapsMessage />
            </S.InputDiv>
            <S.InputDiv>
              <S.BlockDiv>
                <div>
                  <S.SpanTag right="2.4em">사업자등록증</S.SpanTag>
                </div>
                <S.CancelImg
                  src={Cancel}
                  alt="cancel"
                  top="1.8rem"
                  left="13rem"
                  laptopTop="0.8rem"
                  laptopLeft="40rem"
                />
                <S.InputTag Mobilesize="15.5rem" size="8rem" laptopSize="32.2rem" placeholder="사업자등록증" />
                <S.BlacSpan>
                  <S.FileInput type="file" width="85px" height="35px" left="0" top="0" />
                  파일 등록
                </S.BlacSpan>
              </S.BlockDiv>
              <S.CapsMessage />
            </S.InputDiv>
            <S.BorderDiv />
            <S.InputDiv>
              <S.BlockDiv>
                <div>
                  <S.SpanTag right="4rem">사업 분야</S.SpanTag>
                </div>
                <S.Ul onChange={checkInput}>
                  {businessArray.map((data) => {
                    return (
                      <S.Li key={data.value} right={data.mobileRight} LaptopRight={data.lapRight}>
                        <S.CheckInput
                          type="checkbox"
                          name={data.type}
                          id={data.value}
                          checked={bizCodes !== undefined && bizCodes.includes(`${data.value}`) ? true : null}
                          onChange={(e) => {
                            setBizCodes([...bizCodes, e.target.id]);
                          }}
                        />
                        {data.type}
                      </S.Li>
                    );
                  })}
                </S.Ul>
              </S.BlockDiv>
              <S.CapsMessage />
            </S.InputDiv>
            <S.BottomInput
              placeholder="직접 입력"
              name="main_etc"
              id="main_etc"
              value={businessEtc}
              onChange={changeMainEtc}
            />
            <S.BorderDiv />
            <S.InputDiv>
              <S.BlockDiv>
                <div>
                  <S.SpanTag right="4rem">업무 분야</S.SpanTag>
                </div>
                <S.Ul onChange={checkInput2}>
                  {workArray.map((data) => {
                    return (
                      <S.Li key={data.value} right={data.mobileRight} LaptopRight={data.lapRight}>
                        <S.CheckInput
                          type="checkbox"
                          name={data.type}
                          id={data.value}
                          checked={workCodes !== undefined && workCodes.includes(`${data.value}`) ? true : null}
                          onChange={(e) => {
                            setWorkCodes([...workCodes, e.target.id]);
                          }}
                        />
                        {data.type}
                      </S.Li>
                    );
                  })}
                </S.Ul>
              </S.BlockDiv>
              <S.CapsMessage />
            </S.InputDiv>
            <S.BottomInput
              placeholder="직접 입력"
              name="sub_etc"
              id="sub_etc"
              value={workEtc}
              onChange={changeWorkEtc}
            />
          </S.MarginAutoDiv>
        </S.ColorDiv>
        <S.Title top="2rem">포트폴리오 및 기타문서</S.Title>
        <S.ColorDiv>
          <S.MarginAutoDiv>
            <S.BlockDiv>
              <div>
                <S.SpanTag right="2rem" star="none">
                  경력기술서
                </S.SpanTag>
              </div>
              <S.CancelImg src={Cancel} alt="cancel" top="1.8rem" left="22rem" laptopTop="0.8rem" laptopLeft="31rem" />
              <S.InputTag size="14.5rem" laptopSize="25rem" placeholder="팀 소개서" />
              <S.MarginTopDiv>
                <S.BlacSpan margiRight="0.5rem">
                  <S.FileInput type="file" width="105px" height="45px" left="0.1rem" top="-0.3rem" />
                  양식 다운로드
                </S.BlacSpan>
                <S.BlacSpan>
                  <S.FileInput type="file" width="65px" height="35px" left="0.1rem" top="-0.3rem" />
                  업로드
                </S.BlacSpan>
              </S.MarginTopDiv>
            </S.BlockDiv>
            <S.ErrorMessage>
              ※ 경력기술서 파일은 다운로드한 양식으로 작성하여 업로드 바랍니다. 첨부파일의 크기는 10MB를 초과하지 않아야
              합니다.
            </S.ErrorMessage>
            <S.BlockDiv top="1rem">
              <div>
                <S.SpanTag right="2rem" star="none">
                  포트폴리오
                </S.SpanTag>
              </div>
              <S.CancelImg src={Cancel} alt="cancel" top="1.8rem" left="22rem" laptopTop="0.8rem" laptopLeft="31rem" />
              <S.InputTag size="14.5rem" laptopSize="25rem" placeholder="팀 포트폴리오" />
              <S.MarginTopDiv>
                <S.BlacSpan>
                  <S.FileInput type="file" width="65px" height="35px" left="0.1rem" top="-0.3rem" />
                  업로드
                </S.BlacSpan>
              </S.MarginTopDiv>
            </S.BlockDiv>
            <S.ErrorMessage>※ 포트폴리오 첨부파일의 크기는 20MB를 초과하지 않아야 합니다</S.ErrorMessage>
          </S.MarginAutoDiv>
        </S.ColorDiv>
        <S.CenterDiv>
          <SubmitButton text="저장" heights="1rem" sides="3rem" />
        </S.CenterDiv>
      </form>
    </S.Container>
  );
};

export default DashBoardModify;
