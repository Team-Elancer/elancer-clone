import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';
import * as S from './style';
import Back from 'assets/images/arrowback.png';
import Logo from 'assets/images/logo-none.png';
import 'react-datepicker/dist/react-datepicker.css';
import PostCode from 'components/DashBoard/PostCode';

const DashboardProjectAdd = () => {
  const [titleName, setTitleName] = useState('');
  const [bgColor, setBgColor] = useState('');
  const [projectColor, setProjectColor] = useState('');
  const [jobChoice, setJobChoice] = useState(null);

  const [placePostcode, setPlacePostcode] = useState('우편번호');
  const [placeAddress, setPlaceAddress] = useState('우편번호 찾기를 통해 입력하세요.');
  const [userCountry, setUserCountry] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [changeBool, setChangeBool] = useState(false);

  const changeTitleColor = (e) => {
    setTitleName(e.target.value);
  };

  const changeBgColor = (e) => {
    setBgColor(e.target.value);
  };

  const changeProjectColor = (e) => {
    setProjectColor(e.target.value);
  };

  const changeJobChoice = (e) => {
    setJobChoice(e.target.value);
  };

  useEffect(() => {
    console.log(titleName);
  }, [titleName]);

  return (
    <S.Container>
      <form>
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
              value="상주 프로젝트"
              bgColor={titleName === '상주 프로젝트' ? '#eb6100' : '#f2f2f2'}
              tabletColor={titleName === '상주 프로젝트' ? '#eb6100' : '#f2f2f2'}
              onClick={changeTitleColor}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <S.JobLabel size="0.7rem" color={titleName === '상주 프로젝트' ? 'white' : 'black'} htmlFor="title1">
              상주 프로젝트
            </S.JobLabel>
          </S.JobRadioLi>
          <S.JobRadioLi left="-0.5rem">
            <S.JobInput
              name="title"
              id="title2"
              type="radio"
              value="재택 프로젝트"
              bgColor={titleName === '재택 프로젝트' ? '#eb6100' : '#f2f2f2'}
              tabletColor={titleName === '재택 프로젝트' ? '#eb6100' : '#f2f2f2'}
              onClick={changeTitleColor}
            />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <S.JobLabel size="0.7rem" color={titleName === '재택 프로젝트' ? 'white' : 'black'} htmlFor="title2">
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
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <S.JobLabel size="0.7rem" color={titleName === '헤드헌팅' ? 'white' : 'black'} htmlFor="title3">
              헤드헌팅
            </S.JobLabel>
          </S.JobRadioLi>
        </S.JobUl>
        <S.H1 ftszie="1.2rem">배경</S.H1>
        <S.ColorUl>
          <S.Boxli liColor={bgColor === '#181818' ? '#eb6100' : '#e1e1e1'}>
            <S.ColorInput
              bgColor="#181818"
              name="color"
              id="black"
              type="radio"
              value="#181818"
              onClick={changeBgColor}
            />
          </S.Boxli>
          <S.Boxli liColor={bgColor === 'white' ? '#eb6100' : '#e1e1e1'}>
            <S.ColorInput bgColor="white" name="color" id="black" type="radio" value="white" onClick={changeBgColor} />
          </S.Boxli>
          <S.Boxli liColor={bgColor === '#7485c9' ? '#eb6100' : '#e1e1e1'}>
            <S.ColorInput
              bgColor="#7485c9"
              name="color"
              id="black"
              type="radio"
              value="#7485c9"
              onClick={changeBgColor}
            />
          </S.Boxli>
          <S.Boxli liColor={bgColor === '#8a7fa4' ? '#eb6100' : '#e1e1e1'}>
            <S.ColorInput
              bgColor="#8a7fa4"
              name="color"
              id="black"
              type="radio"
              value="#8a7fa4"
              onClick={changeBgColor}
            />
          </S.Boxli>
          <S.Boxli liColor={bgColor === '#9d7985' ? '#eb6100' : '#e1e1e1'}>
            <S.ColorInput
              bgColor="#9d7985"
              name="color"
              id="black"
              type="radio"
              value="#9d7985"
              onClick={changeBgColor}
            />
          </S.Boxli>
          <S.Boxli liColor={bgColor === '#b57360' ? '#eb6100' : '#e1e1e1'}>
            <S.ColorInput
              bgColor="#b57360"
              name="color"
              id="black"
              type="radio"
              value="#b57360"
              onClick={changeBgColor}
            />
          </S.Boxli>
          <S.Boxli liColor={bgColor === '#d56b2d' ? '#eb6100' : '#e1e1e1'}>
            <S.ColorInput
              bgColor="#d56b2d"
              name="color"
              id="black"
              type="radio"
              value="#d56b2d"
              onClick={changeBgColor}
            />
          </S.Boxli>
          <S.Boxli liColor={bgColor === '#f16300' ? '#eb6100' : '#e1e1e1'}>
            <S.ColorInput
              bgColor="#f16300"
              name="color"
              id="black"
              type="radio"
              value="#f16300"
              onClick={changeBgColor}
            />
          </S.Boxli>
        </S.ColorUl>
        <div>
          <S.H1 ftszie="1.2rem">기업로고</S.H1>
          <S.BlacSpan>
            <S.FileInput type="file" width="110px" height="35px" laptopTop="45px" left="0.1rem" top="0" />
            로고 직접 등록
          </S.BlacSpan>
        </div>
        <S.ResultColor bgColor={bgColor}>
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
                    value="분석/설계"
                    bgColor={projectColor === '분석/설계' ? '#f16300' : '#f2f2f2'}
                    tabletColor={projectColor === '분석/설계' ? '#f16300' : 'white'}
                    onClick={changeProjectColor}
                  />
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <S.JobLabel color={projectColor === '분석/설계' ? 'white' : 'black'} htmlFor="job1">
                    분석/설계
                  </S.JobLabel>
                </S.JobRadioLi>
                <S.JobRadioLi left="-0.5rem">
                  <S.JobInput
                    name="job"
                    id="job2"
                    type="radio"
                    value="기획"
                    bgColor={projectColor === '기획' ? '#f16300' : '#f2f2f2'}
                    tabletColor={projectColor === '기획' ? '#f16300' : 'white'}
                    onClick={changeProjectColor}
                  />
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <S.JobLabel color={projectColor === '기획' ? 'white' : 'black'} htmlFor="job2">
                    기획
                  </S.JobLabel>
                </S.JobRadioLi>
                <S.JobRadioLi left="-0.5rem">
                  <S.JobInput
                    name="job"
                    id="job3"
                    type="radio"
                    value="디자인"
                    bgColor={projectColor === '디자인' ? '#f16300' : '#f2f2f2'}
                    tabletColor={projectColor === '디자인' ? '#f16300' : 'white'}
                    onClick={changeProjectColor}
                  />
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <S.JobLabel color={projectColor === '디자인' ? 'white' : 'black'} htmlFor="job3">
                    디자인
                  </S.JobLabel>
                </S.JobRadioLi>
                <S.JobRadioLi left="-0.5rem">
                  <S.JobInput
                    name="job"
                    id="job4"
                    type="radio"
                    value="퍼블리싱"
                    bgColor={projectColor === '퍼블리싱' ? '#f16300' : '#f2f2f2'}
                    tabletColor={projectColor === '퍼블리싱' ? '#f16300' : 'white'}
                    onClick={changeProjectColor}
                  />
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <S.JobLabel color={projectColor === '퍼블리싱' ? 'white' : 'black'} htmlFor="job4">
                    퍼블리싱
                  </S.JobLabel>
                </S.JobRadioLi>
                <S.JobRadioLi left="-0.5rem">
                  <S.JobInput
                    name="job"
                    id="job5"
                    type="radio"
                    value="개발"
                    bgColor={projectColor === '개발' ? '#f16300' : '#f2f2f2'}
                    tabletColor={projectColor === '개발' ? '#f16300' : 'white'}
                    onClick={changeProjectColor}
                  />
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <S.JobLabel color={projectColor === '개발' ? 'white' : 'black'} htmlFor="job5">
                    개발
                  </S.JobLabel>
                </S.JobRadioLi>
                <S.JobRadioLi left="-0.5rem">
                  <S.JobInputRight
                    name="job"
                    id="job6"
                    type="radio"
                    value="운영중"
                    bgColor={projectColor === '운영중' ? '#f16300' : '#f2f2f2'}
                    tabletColor={projectColor === '운영중' ? '#f16300' : 'white'}
                    onClick={changeProjectColor}
                  />
                  {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                  <S.JobLabel color={projectColor === '운영중' ? 'white' : 'black'} htmlFor="job6">
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
                <S.InputTag size="14.5rem" laptopSize="22rem" placeholder="예) 쇼핑몰, 여행사, 금융, 카드, 공공" />
              </S.BlockDiv>
            </S.InputDiv>
            <S.ErrorMessage />
            <S.CapsMessage />
            <S.InputDiv>
              <S.BlockDiv>
                <div>
                  <S.SpanTag right="2rem">구인직종</S.SpanTag>
                </div>
                <S.Select onChange={changeJobChoice}>
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
                <S.InputTag size="14.5rem" laptopSize="40rem" placeholder="예) Java, .Net, C#, PHP, Python" />
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
                <S.InputTag size="14.5rem" laptopSize="15rem" placeholder="프로젝트 제목을 입력해주세요.  " />
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
                  <S.InputTag size="12rem" laptopSize="14rem" type="number" placeholder="숫자만 입력" />
                </S.BlockDiv>
                <S.ErrorMessage />
                <S.CapsMessage />
              </S.InputDiv>
              <S.InputDiv left="1rem">
                <S.BlockDiv>
                  <div>
                    <S.SpanTag right="0.9rem">총 투입인력</S.SpanTag>
                  </div>
                  <S.InputTag size="12rem" laptopSize="14rem" type="number" placeholder="총 투입인력" />
                </S.BlockDiv>
                <S.ErrorMessage />
                <S.CapsMessage />
              </S.InputDiv>
            </S.FlexDiv>
            <S.BorderDiv />
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
            <S.BorderDiv />
            <S.FlexDiv flex="flex">
              <S.InputDiv>
                <S.BlockDiv display="flex">
                  <div>
                    <S.SpanTag right="2.5rem">예상월단가</S.SpanTag>
                  </div>
                  <S.FlexDiv flex="flex">
                    <S.InputTag Mobilesize="7rem" laptopSize="9rem" type="number" placeholder="6,000,000" />
                    <div>
                      <S.PTag>원~</S.PTag>
                    </div>
                    <S.InputTag Mobilesize="7rem" laptopSize="9rem" type="number" placeholder="6,500,000" />
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
                    <S.InputTag Mobilesize="7rem" laptopSize="9rem" type="number" placeholder="숫자로만 입력하세요" />
                    <div>
                      <S.PTag>년</S.PTag>
                    </div>
                    <S.InputTag Mobilesize="7rem" laptopSize="9rem" type="number" placeholder="숫자로만 입력하세요" />
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
                    <S.InputTag Mobilesize="7rem" laptopSize="9rem" type="number" placeholder="숫자로만 입력하세요" />
                    <div>
                      <S.PTag>~</S.PTag>
                    </div>
                    <S.InputTag Mobilesize="7rem" laptopSize="9rem" type="number" placeholder="숫자로만 입력하세요" />
                  </S.FlexDiv>
                </S.BlockDiv>
              </S.InputDiv>
            </S.FlexDiv>
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
                <S.InputTag size="14.5rem" laptopSize="37.5rem" placeholder="회사명" />
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
                  <S.InputTag size="12rem" laptopSize="14rem" type="text" placeholder="담당자명" />
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
                  <S.InputTag size="12rem" laptopSize="14rem" type="text" placeholder="예) 차장, 과장 , 팀장" />
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
                  <S.InputTag size="12rem" laptopSize="14rem" type="number" placeholder="숫자만 입력" />
                </S.BlockDiv>
                <S.ErrorMessage />
                <S.CapsMessage />
              </S.InputDiv>
              <S.InputDiv left="1rem">
                <S.BlockDiv>
                  <div>
                    <S.SpanTag right="0.9rem">담당자 휴대폰</S.SpanTag>
                  </div>
                  <S.InputTag size="12rem" laptopSize="14rem" type="number" placeholder="숫자만 입력" />
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
                <S.InputTag size="14.5rem" laptopSize="37.5rem" placeholder="name@example.com" />
              </S.BlockDiv>
            </S.InputDiv>
            <S.ErrorMessage />
            <S.CapsMessage />
          </S.MarginAutoDiv>
        </S.ColorDiv>
      </form>
    </S.Container>
  );
};

export default DashboardProjectAdd;
