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
                  <S.Li right="3rem" LaptopRight="8rem">
                    <S.CheckInput
                      type="checkbox"
                      name="웹개발"
                      id="main_biz1"
                      checked={bizCodes !== undefined && bizCodes.includes('main_biz1') ? true : null}
                      onChange={(e) => {
                        setBizCodes([...bizCodes, e.target.id]);
                      }}
                    />
                    웹개발
                  </S.Li>
                  <S.Li right="3rem" LaptopRight="7rem">
                    <S.CheckInput
                      type="checkbox"
                      name="앱개발"
                      id="main_biz2"
                      checked={bizCodes !== undefined && bizCodes.includes('main_biz2') ? true : null}
                      onChange={(e) => {
                        setBizCodes([...bizCodes, e.target.id]);
                      }}
                    />
                    앱개발
                  </S.Li>
                  <S.Li right="2rem" LaptopRight="2rem">
                    <S.CheckInput
                      type="checkbox"
                      name="솔루션개발"
                      id="main_biz3"
                      checked={bizCodes !== undefined && bizCodes.includes('main_biz3') ? true : null}
                      onChange={(e) => {
                        setBizCodes([...bizCodes, e.target.id]);
                      }}
                    />
                    솔루션개발
                  </S.Li>
                  <S.Li right="2.5rem" LaptopRight="7.4rem">
                    <S.CheckInput
                      type="checkbox"
                      name="GIS개발"
                      id="main_biz4"
                      checked={bizCodes !== undefined && bizCodes.includes('main_biz4') ? true : null}
                      onChange={(e) => {
                        setBizCodes([...bizCodes, e.target.id]);
                      }}
                    />
                    GIS개발
                  </S.Li>
                  <S.Li right="2.35rem" LaptopRight="6.1rem">
                    <S.CheckInput
                      type="checkbox"
                      name="POS개발"
                      id="main_biz5"
                      checked={bizCodes !== undefined && bizCodes.includes('main_biz5') ? true : null}
                      onChange={(e) => {
                        setBizCodes([...bizCodes, e.target.id]);
                      }}
                    />
                    POS개발
                  </S.Li>
                  <S.Li right="2rem" LaptopRight="2rem">
                    <S.CheckInput
                      type="checkbox"
                      name="SI사업"
                      id="main_biz6"
                      checked={bizCodes !== undefined && bizCodes.includes('main_biz6') ? true : null}
                      onChange={(e) => {
                        setBizCodes([...bizCodes, e.target.id]);
                      }}
                    />
                    SI사업
                  </S.Li>
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
                  <S.Li right="3rem" LaptopRight="8rem">
                    <S.CheckInput
                      type="checkbox"
                      name="웹개발"
                      id="sub_biz1"
                      checked={workCodes !== undefined && workCodes.includes('sub_biz1') ? true : null}
                      onChange={(e) => {
                        setWorkCodes([...workCodes, e.target.id]);
                      }}
                    />
                    쇼핑몰
                  </S.Li>
                  <S.Li right="3rem" LaptopRight="7rem">
                    <S.CheckInput
                      type="checkbox"
                      name="앱개발"
                      id="sub_biz2"
                      checked={workCodes !== undefined && workCodes.includes('sub_biz2') ? true : null}
                      onChange={(e) => {
                        setWorkCodes([...workCodes, e.target.id]);
                      }}
                    />
                    여행사
                  </S.Li>
                  <S.Li right="2rem" LaptopRight="2rem">
                    <S.CheckInput
                      type="checkbox"
                      name="솔루션개발"
                      id="sub_biz3"
                      checked={workCodes !== undefined && workCodes.includes('sub_biz3') ? true : null}
                      onChange={(e) => {
                        setWorkCodes([...workCodes, e.target.id]);
                      }}
                    />
                    금융
                  </S.Li>
                  <S.Li right="3.7rem" LaptopRight="9rem">
                    <S.CheckInput
                      type="checkbox"
                      name="GIS개발"
                      id="sub_biz4"
                      checked={workCodes !== undefined && workCodes.includes('sub_biz4') ? true : null}
                      onChange={(e) => {
                        setWorkCodes([...workCodes, e.target.id]);
                      }}
                    />
                    증권
                  </S.Li>
                  <S.Li right="3.7rem" LaptopRight="8rem">
                    <S.CheckInput
                      type="checkbox"
                      name="POS개발"
                      id="sub_biz5"
                      checked={workCodes !== undefined && workCodes.includes('sub_biz5') ? true : null}
                      onChange={(e) => {
                        setWorkCodes([...workCodes, e.target.id]);
                      }}
                    />
                    카드
                  </S.Li>
                  <S.Li right="2rem" LaptopRight="2rem">
                    <S.CheckInput
                      type="checkbox"
                      name="SI사업"
                      id="sub_biz6"
                      checked={workCodes !== undefined && workCodes.includes('sub_biz6') ? true : null}
                      onChange={(e) => {
                        setWorkCodes([...workCodes, e.target.id]);
                      }}
                    />
                    보험
                  </S.Li>
                  <S.Li right="3.7rem" LaptopRight="9rem">
                    <S.CheckInput
                      type="checkbox"
                      name="웹개발"
                      id="sub_biz7"
                      checked={workCodes !== undefined && workCodes.includes('sub_biz7') ? true : null}
                      onChange={(e) => {
                        setWorkCodes([...workCodes, e.target.id]);
                      }}
                    />
                    병원
                  </S.Li>
                  <S.Li right="3.7rem" LaptopRight="8rem">
                    <S.CheckInput
                      type="checkbox"
                      name="앱개발"
                      id="sub_biz8"
                      checked={workCodes !== undefined && workCodes.includes('sub_biz8') ? true : null}
                      onChange={(e) => {
                        setWorkCodes([...workCodes, e.target.id]);
                      }}
                    />
                    대학
                  </S.Li>
                  <S.Li right="2rem" LaptopRight="2rem">
                    <S.CheckInput
                      type="checkbox"
                      name="솔루션개발"
                      id="sub_biz9"
                      checked={workCodes !== undefined && workCodes.includes('sub_biz9') ? true : null}
                      onChange={(e) => {
                        setWorkCodes([...workCodes, e.target.id]);
                      }}
                    />
                    공공기관
                  </S.Li>
                  <S.Li right="3.7rem" LaptopRight="9rem">
                    <S.CheckInput
                      type="checkbox"
                      name="GIS개발"
                      id="sub_biz10"
                      checked={workCodes !== undefined && workCodes.includes('sub_biz10') ? true : null}
                      onChange={(e) => {
                        setWorkCodes([...workCodes, e.target.id]);
                      }}
                    />
                    물류
                  </S.Li>
                  <S.Li right="3.7rem" LaptopRight="8rem">
                    <S.CheckInput
                      type="checkbox"
                      name="POS개발"
                      id="sub_biz11"
                      checked={workCodes !== undefined && workCodes.includes('sub_biz11') ? true : null}
                      onChange={(e) => {
                        setWorkCodes([...workCodes, e.target.id]);
                      }}
                    />
                    회계
                  </S.Li>
                  <S.Li right="2rem" LaptopRight="2rem">
                    <S.CheckInput
                      type="checkbox"
                      name="SI사업"
                      id="sub_biz12"
                      checked={workCodes !== undefined && workCodes.includes('sub_biz12') ? true : null}
                      onChange={(e) => {
                        setWorkCodes([...workCodes, e.target.id]);
                      }}
                    />
                    제조
                  </S.Li>
                  <S.Li right="3.7rem" LaptopRight="9rem">
                    <S.CheckInput
                      type="checkbox"
                      name="웹개발"
                      id="sub_biz13"
                      checked={workCodes !== undefined && workCodes.includes('sub_biz13') ? true : null}
                      onChange={(e) => {
                        setWorkCodes([...workCodes, e.target.id]);
                      }}
                    />
                    건설
                  </S.Li>
                  <S.Li right="3.7rem" LaptopRight="8rem">
                    <S.CheckInput
                      type="checkbox"
                      name="앱개발"
                      id="sub_biz15"
                      checked={workCodes !== undefined && workCodes.includes('sub_biz15') ? true : null}
                      onChange={(e) => {
                        setWorkCodes([...workCodes, e.target.id]);
                      }}
                    />
                    통신
                  </S.Li>
                  <S.Li right="2rem" LaptopRight="2rem">
                    <S.CheckInput
                      type="checkbox"
                      name="솔루션개발"
                      id="sub_biz16"
                      checked={workCodes !== undefined && workCodes.includes('sub_biz16') ? true : null}
                      onChange={(e) => {
                        setWorkCodes([...workCodes, e.target.id]);
                      }}
                    />
                    유통
                  </S.Li>
                  <S.Li right="3.7rem" LaptopRight="9rem">
                    <S.CheckInput
                      type="checkbox"
                      name="GIS개발"
                      id="sub_biz17"
                      checked={workCodes !== undefined && workCodes.includes('sub_biz17') ? true : null}
                      onChange={(e) => {
                        setWorkCodes([...workCodes, e.target.id]);
                      }}
                    />
                    생산
                  </S.Li>
                  <S.Li right="3rem" LaptopRight="7rem">
                    <S.CheckInput
                      type="checkbox"
                      name="POS개발"
                      id="sub_biz18"
                      checked={workCodes !== undefined && workCodes.includes('sub_biz18') ? true : null}
                      onChange={(e) => {
                        setWorkCodes([...workCodes, e.target.id]);
                      }}
                    />
                    미다어
                  </S.Li>
                  <S.Li right="2rem" LaptopRight="2rem">
                    <S.CheckInput
                      type="checkbox"
                      name="SI사업"
                      id="sub_biz19"
                      checked={workCodes !== undefined && workCodes.includes('sub_biz19') ? true : null}
                      onChange={(e) => {
                        setWorkCodes([...workCodes, e.target.id]);
                      }}
                    />
                    교육
                  </S.Li>
                  <S.Li right="2.9rem" LaptopRight="8rem">
                    <S.CheckInput
                      type="checkbox"
                      name="웹개발"
                      id="sub_biz20"
                      checked={workCodes !== undefined && workCodes.includes('sub_biz20') ? true : null}
                      onChange={(e) => {
                        setWorkCodes([...workCodes, e.target.id]);
                      }}
                    />
                    반도체
                  </S.Li>
                  <S.Li right="3rem" LaptopRight="7rem">
                    <S.CheckInput
                      type="checkbox"
                      name="앱개발"
                      id="sub_biz21"
                      checked={workCodes !== undefined && workCodes.includes('sub_biz21') ? true : null}
                      onChange={(e) => {
                        setWorkCodes([...workCodes, e.target.id]);
                      }}
                    />
                    자동차
                  </S.Li>
                  <S.Li right="2rem" LaptopRight="2rem">
                    <S.CheckInput
                      type="checkbox"
                      name="솔루션개발"
                      id="sub_biz22"
                      checked={workCodes !== undefined && workCodes.includes('sub_biz22') ? true : null}
                      onChange={(e) => {
                        setWorkCodes([...workCodes, e.target.id]);
                      }}
                    />
                    암호화폐
                  </S.Li>
                  <S.Li right="2.1rem" LaptopRight="7rem">
                    <S.CheckInput
                      type="checkbox"
                      name="GIS개발"
                      id="sub_biz23"
                      checked={workCodes !== undefined && workCodes.includes('sub_biz23') ? true : null}
                      onChange={(e) => {
                        setWorkCodes([...workCodes, e.target.id]);
                      }}
                    />
                    블록체인
                  </S.Li>
                  <S.Li right="1rem" LaptopRight="1rem">
                    <S.CheckInput
                      type="checkbox"
                      name="POS개발"
                      id="sub_biz24"
                      checked={workCodes !== undefined && workCodes.includes('sub_biz24') ? true : null}
                      onChange={(e) => {
                        setWorkCodes([...workCodes, e.target.id]);
                      }}
                    />
                    기타
                  </S.Li>
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
