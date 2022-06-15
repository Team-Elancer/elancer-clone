import axios from 'axios';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import * as S from './style';

import Back from 'assets/images/arrowback.png';
import Cancel from 'assets/images/cancel-orange.png';
import Logo from 'assets/images/logo-none.png';

import 'react-datepicker/dist/react-datepicker.css';
import SubmitButton from 'components/Button/SubmitButton';
import PostCode from 'components/DashBoard/PostCode';

const DashboardProjectAdd = () => {
  const navi = useNavigate();
  const [Datas, setDatas, axiosUrl, setaxiosUrl, fetchData] = useOutletContext();

  const [titleName, setTitleName] = useState('');
  const [textArea, setTextArea] = useState(
    '1.프로젝트명: 2.현재개발진행사항 1총투입인력: 2현재설계개발상태: 3.담당업무 1 4.업무범위:5.전달사항또는(개발)우대사항: 1 6.필요인력: 명 7.개발자필요Spec 1 2 8.근무지: 9.개발기간: 10.월단가:제시바람 11.장비지참여부:',
  );
  const [bgColorArray, setBgColorArray] = useState([
    { boxColor: '#181818', boxValue: 'BLACK' },
    { boxColor: '#FFFFFF', boxValue: 'WHITE' },
    { boxColor: '#7485c9', boxValue: 'BLUE' },
    { boxColor: '#8a7fa4', boxValue: 'INDIGO' },
    { boxColor: '#9d7985', boxValue: 'ROSSYBROWN' },
    { boxColor: '#b57360', boxValue: 'BROWN' },
    { boxColor: '#d56b2d', boxValue: 'CHOCOLATE' },
    { boxColor: '#f16300', boxValue: 'ORANGE' },
  ]);
  const [jobChoiceArray, setJobChoiceArray] = useState([
    { jobId: 'job2', jobValue: 'PLAN', jobName: '기획' },
    { jobId: 'job3', jobValue: 'DESIGN', jobName: '디자인' },
    { jobId: 'job4', jobValue: 'PUBLISHING', jobName: '퍼블리싱' },
    { jobId: 'job5', jobValue: 'DEVELOP', jobName: '개발' },
  ]);

  const [bgColor, setBgColor] = useState('');
  const [logoBgColor, setLogoBgColor] = useState('');
  const [projectColor, setProjectColor] = useState('');
  const [jobfield, setJobfield] = useState('');
  const [jobChoice, setJobChoice] = useState(null);
  const [jobSkill, setJobSkill] = useState('');

  const [projectTitle, setProjectTitle] = useState('');
  const [projectPeople, setProjectPeople] = useState('');
  const [totalPeople, setTotalPeople] = useState('');

  const [selectedDate, setSelectedDate] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [userCountry, setUserCountry] = useState('');
  const [placePostcode, setPlacePostcode] = useState('우편번호');
  const [placeAddress, setPlaceAddress] = useState('우편번호 찾기를 통해 입력하세요.');
  const [userAddress, setUserAddress] = useState('');
  const [changeBool, setChangeBool] = useState(false);

  const [miniMoney, setMiniMoney] = useState('');
  const [bigMoney, setBigMoney] = useState('');
  const [careYear, setcareYear] = useState('');
  const [careMonth, setCareMonth] = useState('');
  const [miniAge, setMiniAge] = useState('');
  const [bigAge, setBigAge] = useState('');

  const [comName, setComName] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [emplyeePosition, setEmplyeePosition] = useState('');
  const [comPhone, setComPhone] = useState('');
  const [comTele, setComTele] = useState('');
  const [comWebsite, setComWebsite] = useState('');

  const changeTitleColor = (e) => {
    setTitleName(e.target.value);
  };

  const changeBgColor = (e) => {
    console.log(e.target);
    setBgColor(e.target.value);
    setLogoBgColor(e.target.id);
  };

  const changeProjectColor = (e) => {
    setProjectColor(e.target.value);
  };

  const dateFunction = (date) => {
    setSelectedDate(
      date
        .toLocaleDateString()
        .split(' ')
        .join('')
        .split('.')
        .filter((data) => data !== '')
        .map((a) => {
          return a < 10 ? a.padStart(2, '0') : a;
        })
        .join('-'),
    );
  };
  const startDateFunction = (date) => {
    setStartDate(
      date
        .toLocaleDateString()
        .split(' ')
        .join('')
        .split('.')
        .filter((data) => data !== '')
        .map((a) => {
          return a < 10 ? a.padStart(2, '0') : a;
        })
        .join('-'),
    );
  };
  const endDateFunction = (date) => {
    setEndDate(
      date
        .toLocaleDateString()
        .split(' ')
        .join('')
        .split('.')
        .filter((data) => data !== '')
        .map((a) => {
          return a < 10 ? a.padStart(2, '0') : a;
        })
        .join('-'),
    );
  };

  const PostProject = (e) => {
    e.preventDefault();
    axios({
      method: 'POST',
      url: 'http://ec2-13-209-114-196.ap-northeast-2.compute.amazonaws.com:8080/project-save',
      headers: {
        Authorization: `${window.localStorage.accessToken}`,
      },
      data: {
        projectType: titleName,
        projectBackGround: bgColor,
        enterpriseLogo: 'COUPANG',
        projectStep: projectColor,
        mainBiz: jobfield,
        positionKind: jobChoice,
        skill: jobSkill,
        projectName: projectTitle,
        headCount: projectPeople,
        inputHeadCount: totalPeople,
        content: textArea,
        projectStateDate: startDate,
        projectEndDate: endDate,
        recruitEndDate: selectedDate,
        address: {
          country: userCountry,
          zipcode: placePostcode,
          mainAddress: placeAddress,
          detailAddress: userAddress,
        },
        minMoney: miniMoney,
        maxMoney: bigMoney,
        careerYear: careYear,
        careerMonth: careMonth,
        minDesiredAge: miniAge,
        maxDesiredAge: bigAge,
        companyName: comName,
        name: employeeName,
        position: emplyeePosition,
        phone: comPhone,
        telNumber: comTele,
        email: comWebsite,
      },
    })
      .then((res) => {
        alert('프로젝트를 등록했습니다.');
        navi('/dashboard/project');
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  useEffect(() => {
    setaxiosUrl('/enterprise');
    if (Datas) {
      setComName(Datas.companyName);
      setEmployeeName(Datas.name);
      setEmplyeePosition(Datas.position);
      setComPhone(Datas.phone);
      setComTele(Datas.telNumber);
      setComWebsite(Datas.website);
    }
  }, [Datas]);

  return (
    <S.Container>
      <form onSubmit={PostProject}>
        <S.SpacebetweenDiv>
          <Link to="/dashboard/project">
            <S.Img src={Back} alt="arrowback" />
          </Link>
          <S.Title>프로젝트 등록</S.Title>
          <S.Save>저장</S.Save>
        </S.SpacebetweenDiv>
        <S.JobUl>
          <S.JobRadioLi>
            <S.JobInputLeft
              name="title"
              id="title1"
              type="radio"
              value="WORKING"
              bgColor={titleName === 'WORKING' ? '#eb6100' : '#f2f2f2'}
              tabletColor={titleName === 'WORKING' ? '#eb6100' : '#f2f2f2'}
              onClick={changeTitleColor}
            />
            <S.JobLabel size="0.7rem" color={titleName === 'WORKING' ? 'white' : 'black'} htmlFor="title1">
              상주 프로젝트
            </S.JobLabel>
          </S.JobRadioLi>
          <S.JobRadioLi left="-0.5rem">
            <S.JobInput
              name="title"
              id="title2"
              type="radio"
              value="TELEWORKING"
              bgColor={titleName === 'TELEWORKING' ? '#eb6100' : '#f2f2f2'}
              tabletColor={titleName === 'TELEWORKING' ? '#eb6100' : '#f2f2f2'}
              onClick={changeTitleColor}
            />
            <S.JobLabel size="0.7rem" color={titleName === 'TELEWORKING' ? 'white' : 'black'} htmlFor="title2">
              재택 프로젝트
            </S.JobLabel>
          </S.JobRadioLi>
          <S.JobRadioLi left="-0.5rem">
            <S.JobInputRight
              name="title"
              id="title3"
              type="radio"
              value="헤드헌팅"
              bgColor={titleName === '헤드헌팅' ? '#eb6100' : '#f2f2f2'}
              tabletColor={titleName === '헤드헌팅' ? '#eb6100' : '#f2f2f2'}
              onClick={changeTitleColor}
            />
            <S.JobLabel size="0.7rem" color={titleName === '헤드헌팅' ? 'white' : 'black'} htmlFor="title3">
              헤드헌팅
            </S.JobLabel>
          </S.JobRadioLi>
        </S.JobUl>
        <S.H1 ftszie="1.2rem">배경</S.H1>
        <S.ColorUl>
          {bgColorArray.map((data) => {
            return (
              <S.Boxli key={data.boxColor} liColor={bgColor === `${data.boxValue}` ? '#eb6100' : '#e1e1e1'}>
                <S.ColorInput
                  bgColor={data.boxColor}
                  name="color"
                  id={data.boxColor}
                  type="radio"
                  value={data.boxValue}
                  onClick={changeBgColor}
                />
              </S.Boxli>
            );
          })}
        </S.ColorUl>
        <div>
          <S.H1 ftszie="1.2rem">기업로고</S.H1>
          <S.BlacSpan>
            <S.FileInput type="file" width="110px" height="35px" laptopTop="45px" left="0.1rem" top="0" />
            로고 직접 등록
          </S.BlacSpan>
        </div>
        <S.ResultColor bgColor={logoBgColor}>
          <S.LogImage src={Logo} alt="logo" />
        </S.ResultColor>
        <S.H1>기본정보 *</S.H1>
        <S.ColorDiv>
          <S.MarginAutoDiv>
            <S.InputDiv>
              <div>
                <S.SpanTag right="2rem">프로젝트 진행단계</S.SpanTag>
              </div>
              <S.JobUl>
                <S.JobRadioLi>
                  <S.JobInputLeft
                    name="job"
                    id="job1"
                    type="radio"
                    value="ANALYSIS"
                    bgColor={projectColor === 'ANALYSIS' ? '#f16300' : '#f2f2f2'}
                    tabletColor={projectColor === 'ANALYSIS' ? '#f16300' : 'white'}
                    onClick={changeProjectColor}
                  />
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <S.JobLabel color={projectColor === 'ANALYSIS' ? 'white' : 'black'} htmlFor="job1">
                    분석/설계
                  </S.JobLabel>
                </S.JobRadioLi>
                {jobChoiceArray.map((data) => {
                  return (
                    <S.JobRadioLi left="-0.5rem">
                      <S.JobInput
                        name="job"
                        id={data.jobId}
                        type="radio"
                        value={data.jobValue}
                        bgColor={projectColor === `${data.jobValue}` ? '#f16300' : '#f2f2f2'}
                        tabletColor={projectColor === `${data.jobValue}` ? '#f16300' : 'white'}
                        onClick={changeProjectColor}
                      />
                      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                      <S.JobLabel color={projectColor === `${data.jobValue}` ? 'white' : 'black'} htmlFor={data.jobId}>
                        {data.jobName}
                      </S.JobLabel>
                    </S.JobRadioLi>
                  );
                })}
                <S.JobRadioLi left="-0.5rem">
                  <S.JobInputRight
                    name="job"
                    id="job6"
                    type="radio"
                    value="OPERATION"
                    bgColor={projectColor === 'OPERATION' ? '#f16300' : '#f2f2f2'}
                    tabletColor={projectColor === 'OPERATION' ? '#f16300' : 'white'}
                    onClick={changeProjectColor}
                  />
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <S.JobLabel color={projectColor === 'OPERATION' ? 'white' : 'black'} htmlFor="job6">
                    운영중
                  </S.JobLabel>
                </S.JobRadioLi>
              </S.JobUl>
            </S.InputDiv>
            <S.InputDiv>
              <S.BlockDiv>
                <div>
                  <S.SpanTag right="2rem">업무분야</S.SpanTag>
                </div>
                <S.InputTag
                  size="14.5rem"
                  laptopSize="22rem"
                  placeholder="예) 쇼핑몰, 여행사, 금융, 카드, 공공"
                  value={jobfield}
                  onChange={(e) => {
                    setJobfield(e.target.value);
                  }}
                />
              </S.BlockDiv>
            </S.InputDiv>
            <S.ErrorMessage />
            <S.CapsMessage />
            <S.InputDiv>
              <S.BlockDiv>
                <div>
                  <S.SpanTag right="2rem">구인직종</S.SpanTag>
                </div>
                <S.Select
                  onChange={(e) => {
                    setJobChoice(e.target.value);
                  }}
                >
                  <option value="">=== 선택하세요 ===</option>
                  <option value="DEVELOPER">개발자</option>
                  <option value="PUBLISHER">퍼블리셔</option>
                  <option value="DESIGNER">디자이너</option>
                  <option value="PLANNER">기획자</option>
                  <option value="ETC">기타</option>
                </S.Select>
              </S.BlockDiv>
            </S.InputDiv>
            <S.ErrorMessage />
            <S.CapsMessage />
            <S.InputDiv>
              <S.BlockDiv>
                <div>
                  <S.SpanTag right="2rem">관련기술</S.SpanTag>
                </div>
                <S.InputTag
                  size="14.5rem"
                  laptopSize="40rem"
                  placeholder="예) Java, .Net, C#, PHP, Python"
                  value={jobSkill}
                  onChange={(e) => {
                    setJobSkill(e.target.value);
                  }}
                />
              </S.BlockDiv>
            </S.InputDiv>
            <S.ErrorMessage />
            <S.CapsMessage />
          </S.MarginAutoDiv>
        </S.ColorDiv>
        <S.H1>프로젝트 정보 *</S.H1>
        <S.ColorDiv>
          <S.MarginAutoDiv>
            <S.InputDiv>
              <S.BlockDiv>
                <div>
                  <S.SpanTag right="2rem">프로젝트 명</S.SpanTag>
                </div>
                <S.InputTag
                  size="14.5rem"
                  laptopSize="15rem"
                  placeholder="프로젝트 제목을 입력해주세요."
                  value={projectTitle}
                  onChange={(e) => {
                    setProjectTitle(e.target.value);
                  }}
                />
              </S.BlockDiv>
            </S.InputDiv>
            <S.ErrorMessage />
            <S.CapsMessage />
            <S.FlexDiv>
              <S.InputDiv>
                <S.BlockDiv>
                  <div>
                    <S.SpanTag right="3rem">모집 입원</S.SpanTag>
                  </div>
                  <S.InputTag
                    size="12rem"
                    laptopSize="14rem"
                    type="number"
                    placeholder="숫자만 입력"
                    value={projectPeople}
                    onChange={(e) => {
                      setProjectPeople(Number(e.target.value));
                    }}
                  />
                </S.BlockDiv>
                <S.ErrorMessage />
                <S.CapsMessage />
              </S.InputDiv>
              <S.InputDiv left="1rem">
                <S.BlockDiv>
                  <div>
                    <S.SpanTag right="0.9rem">총 투입인력</S.SpanTag>
                  </div>
                  <S.InputTag
                    size="12rem"
                    laptopSize="14rem"
                    type="number"
                    placeholder="총 투입인력"
                    value={totalPeople}
                    onChange={(e) => {
                      setTotalPeople(e.target.value);
                    }}
                  />
                </S.BlockDiv>
                <S.ErrorMessage />
                <S.CapsMessage />
              </S.InputDiv>
            </S.FlexDiv>
            <S.InputDiv>
              <S.BlockDiv>
                <div>
                  <S.SpanTag right="2rem">프로젝트 상세내용</S.SpanTag>
                </div>
                <S.TextArea
                  rows="5"
                  placeholder="프로젝트 제목을 입력해주세요."
                  value={textArea}
                  onChange={(e) => {
                    setTextArea(e.target.value);
                  }}
                >
                  {textArea}
                </S.TextArea>
              </S.BlockDiv>
              <S.RedText>(최적의 프리랜서님들이 지원하실 수 있도록 상세하게 작성해 주세요.)</S.RedText>
            </S.InputDiv>
            <S.ErrorMessage />
            <S.CapsMessage />
            <S.BorderDiv />
            <S.FlexDiv flex="flex">
              <S.InputDiv>
                <S.BlockDiv display="flex">
                  <div>
                    <S.SpanTag right="3rem">프로젝트 기간</S.SpanTag>
                  </div>
                  <S.FlexDiv flex="flex">
                    <S.InputTag Mobilesize="8rem" laptopSize="15rem" type="number" placeholder={startDate} />
                    <S.DateDiv top="-0.9rem" left="-8rem" width="8rem" dateTop="2rem">
                      <DatePicker
                        onChange={(date) => {
                          startDateFunction(date);
                        }}
                      />
                    </S.DateDiv>
                    <div>
                      <S.PTag>~</S.PTag>
                    </div>
                    <S.InputTag Mobilesize="8rem" laptopSize="15rem" type="number" placeholder={endDate} />
                    <S.DateDiv top="-0.9rem" left="-8rem" width="8rem">
                      <DatePicker
                        onChange={(date) => {
                          endDateFunction(date);
                        }}
                      />
                    </S.DateDiv>
                  </S.FlexDiv>
                </S.BlockDiv>
              </S.InputDiv>
            </S.FlexDiv>
            <S.InputDiv>
              <S.BlockDiv>
                <div>
                  <S.SpanTag right="4rem">모집 마감일</S.SpanTag>
                </div>
                <S.InputTag size="14.5rem" laptopSize="18rem" type="number" placeholder={selectedDate} />
                <S.DateDiv top="-2.5rem" left="0">
                  <DatePicker
                    onChange={(date) => {
                      dateFunction(date);
                    }}
                  />
                </S.DateDiv>
              </S.BlockDiv>
            </S.InputDiv>
            <S.BorderDiv />
            {titleName === 'WORKING' && (
              <>
                <S.MarginTop>
                  <PostCode
                    setUserCountry={setUserCountry}
                    placePostcode={placePostcode}
                    setPlacePostcode={setPlacePostcode}
                    setChangeBool={setChangeBool}
                    changeBool={changeBool}
                    placeAddress={placeAddress}
                    setPlaceAddress={setPlaceAddress}
                    userAddress={userAddress}
                    setUserAddress={setUserAddress}
                  />
                </S.MarginTop>
                <S.BorderDiv />
              </>
            )}
            <S.FlexDiv flex="flex">
              <S.InputDiv>
                <S.BlockDiv display="flex">
                  <div>
                    <S.SpanTag right="2.5rem">예상월단가</S.SpanTag>
                  </div>
                  <S.FlexDiv flex="flex">
                    <S.InputTag
                      Mobilesize="7rem"
                      laptopSize="9rem"
                      type="number"
                      placeholder="6,000,000"
                      value={miniMoney}
                      onChange={(e) => {
                        setMiniMoney(Number(e.target.value));
                      }}
                    />
                    <div>
                      <S.PTag>원~</S.PTag>
                    </div>
                    <S.InputTag
                      Mobilesize="7rem"
                      laptopSize="9rem"
                      type="number"
                      placeholder="6,500,000"
                      value={bigMoney}
                      onChange={(e) => {
                        setBigMoney(Number(e.target.value));
                      }}
                    />
                    <S.PTag>원</S.PTag>
                  </S.FlexDiv>
                </S.BlockDiv>
              </S.InputDiv>
            </S.FlexDiv>
            <S.ErrorMessage />
            <S.CapsMessage />
            <S.FlexDiv flex="flex">
              <S.InputDiv>
                <S.BlockDiv display="flex">
                  <div>
                    <S.SpanTag right="3rem">희망 경력</S.SpanTag>
                  </div>
                  <S.FlexDiv flex="flex">
                    <S.InputTag
                      Mobilesize="7rem"
                      laptopSize="9rem"
                      type="number"
                      placeholder="숫자로만 입력하세요"
                      value={careYear}
                      onChange={(e) => {
                        setcareYear(Number(e.target.value));
                      }}
                    />
                    <div>
                      <S.PTag>년</S.PTag>
                    </div>
                    <S.InputTag
                      Mobilesize="7rem"
                      laptopSize="9rem"
                      type="number"
                      placeholder="숫자로만 입력하세요"
                      value={careMonth}
                      onChange={(e) => {
                        setCareMonth(Number(e.target.value));
                      }}
                    />
                    <S.PTag>개월</S.PTag>
                  </S.FlexDiv>
                </S.BlockDiv>
              </S.InputDiv>
            </S.FlexDiv>
            <S.ErrorMessage />
            <S.CapsMessage />
            <S.FlexDiv flex="flex">
              <S.InputDiv>
                <S.BlockDiv display="flex">
                  <div>
                    <S.SpanTag right="3rem">희망 연령</S.SpanTag>
                  </div>
                  <S.FlexDiv flex="flex">
                    <S.InputTag
                      Mobilesize="7rem"
                      laptopSize="9rem"
                      type="number"
                      placeholder="숫자로만 입력하세요"
                      value={miniAge}
                      onChange={(e) => {
                        setMiniAge(Number(e.target.value));
                      }}
                    />
                    <div>
                      <S.PTag>~</S.PTag>
                    </div>
                    <S.InputTag
                      Mobilesize="7rem"
                      laptopSize="9rem"
                      type="number"
                      placeholder="숫자로만 입력하세요"
                      value={bigAge}
                      onChange={(e) => {
                        setBigAge(Number(e.target.value));
                      }}
                    />
                  </S.FlexDiv>
                </S.BlockDiv>
              </S.InputDiv>
            </S.FlexDiv>
            <S.BorderDiv />
            <S.InputDiv>
              <S.BlockDiv>
                <div>
                  <S.SpanTag right="2rem">요구사항 정의서</S.SpanTag>
                </div>
                <S.CancelImg src={Cancel} alt="cancel" />
                <S.InputTag Mobilesize="15.5rem" size="8rem" laptopSize="13.2rem" placeholder="사업자등록증" />
                <S.BlacSpan>
                  <S.FileInput type="file" width="110px" height="35px" laptopTop="0" left="0.1rem" top="0" />
                  파일 등록
                </S.BlacSpan>
              </S.BlockDiv>
            </S.InputDiv>
          </S.MarginAutoDiv>
        </S.ColorDiv>
        <S.FlexDiv flex="flex">
          <S.H1>기업정보 *</S.H1>
          <S.SapnTag>회원님의 정보를 최신으로 업데이트 해주세요!</S.SapnTag>
        </S.FlexDiv>
        <S.ColorDiv>
          <S.MarginAutoDiv>
            <S.InputDiv>
              <S.BlockDiv>
                <div>
                  <S.SpanTag right="4.5rem">회사명</S.SpanTag>
                </div>
                <S.InputTag
                  size="14.5rem"
                  laptopSize="37.5rem"
                  placeholder="회사명"
                  value={comName}
                  onChange={(e) => {
                    setComName(e.target.value);
                  }}
                />
              </S.BlockDiv>
            </S.InputDiv>
            <S.ErrorMessage />
            <S.CapsMessage />
            <S.FlexDiv>
              <S.InputDiv>
                <S.BlockDiv>
                  <div>
                    <S.SpanTag right="3.5rem">담당자명</S.SpanTag>
                  </div>
                  <S.InputTag
                    size="12rem"
                    laptopSize="14rem"
                    type="text"
                    placeholder="담당자명"
                    value={employeeName}
                    onChange={(e) => setEmployeeName(e.target.value)}
                  />
                </S.BlockDiv>
                <S.ErrorMessage />
                <S.CapsMessage />
              </S.InputDiv>
              <S.InputDiv left="3rem">
                <S.BlockDiv>
                  <div>
                    <S.SpanTag star="none" right="3rem">
                      직책
                    </S.SpanTag>
                  </div>
                  <S.InputTag
                    size="12rem"
                    laptopSize="14rem"
                    type="text"
                    placeholder="예) 차장, 과장 , 팀장"
                    value={emplyeePosition}
                    onChange={(e) => setEmplyeePosition(e.target.value)}
                  />
                </S.BlockDiv>
                <S.ErrorMessage />
                <S.CapsMessage />
              </S.InputDiv>
            </S.FlexDiv>
            <S.FlexDiv>
              <S.InputDiv>
                <S.BlockDiv>
                  <div>
                    <S.SpanTag right="1.2rem">회사 전화번호</S.SpanTag>
                  </div>
                  <S.InputTag
                    size="12rem"
                    laptopSize="14rem"
                    type="number"
                    placeholder="숫자만 입력"
                    value={comPhone}
                    onChange={(e) => setComPhone(e.target.value)}
                  />
                </S.BlockDiv>
                <S.ErrorMessage />
                <S.CapsMessage />
              </S.InputDiv>
              <S.InputDiv left="1rem">
                <S.BlockDiv>
                  <div>
                    <S.SpanTag right="0.9rem">담당자 휴대폰</S.SpanTag>
                  </div>
                  <S.InputTag
                    size="12rem"
                    laptopSize="14rem"
                    type="number"
                    placeholder="숫자만 입력"
                    value={comTele}
                    onChange={(e) => setComTele(e.target.value)}
                  />
                </S.BlockDiv>
                <S.ErrorMessage />
                <S.CapsMessage />
              </S.InputDiv>
            </S.FlexDiv>
            <S.InputDiv>
              <S.BlockDiv>
                <div>
                  <S.SpanTag right="4.5rem">이메일</S.SpanTag>
                </div>
                <S.InputTag
                  size="14.5rem"
                  laptopSize="37.5rem"
                  placeholder="name@example.com"
                  value={comWebsite}
                  onChange={(e) => setComWebsite(e.target.value)}
                />
              </S.BlockDiv>
            </S.InputDiv>
            <S.ErrorMessage />
            <S.CapsMessage />
          </S.MarginAutoDiv>
        </S.ColorDiv>
        <S.ButtonDiv>
          <SubmitButton text="저장하기" heights="0.8rem" sides="1.8rem" />
        </S.ButtonDiv>
      </form>
    </S.Container>
  );
};

export default DashboardProjectAdd;
