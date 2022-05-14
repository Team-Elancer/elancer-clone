import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';
import Back from 'assets/images/arrowback.png';
import Logo from 'assets/images/logo-none.png';

const DashboardProjectAdd = () => {
  const [titleName, setTitleName] = useState('');
  const [bgColor, setBgColor] = useState('');

  const changeTitleColor = (e) => {
    setTitleName(e.target.innerHTML);
  };

  const changeBgColor = (e) => {
    setBgColor(e.target.value);
  };

  useEffect(() => {
    console.log(titleName);
  }, [titleName]);

  return (
    <S.Container>
      <S.SpacebetweenDiv>
        <Link to="/dashboard/project">
          <S.Img src={Back} alt="arrowback" />
        </Link>
        <S.Title>프로젝트 등록</S.Title>
        <S.Save>저장</S.Save>
      </S.SpacebetweenDiv>
      <S.JobUl>
        <S.JobLiBorderLeft
          bgColor={titleName === '상주 프로젝트' ? '#eb6100' : '#f2f2f2'}
          color={titleName === '상주 프로젝트' ? 'white' : 'black'}
          onClick={changeTitleColor}
        >
          상주 프로젝트
        </S.JobLiBorderLeft>
        <S.JobLi
          bgColor={titleName === '재택 프로젝트' ? '#eb6100' : '#f2f2f2'}
          color={titleName === '재택 프로젝트' ? 'white' : 'black'}
          onClick={changeTitleColor}
        >
          재택 프로젝트
        </S.JobLi>
        <S.JobLiBorderRight
          bgColor={titleName === '헤드헌팅' ? '#eb6100' : '#f2f2f2'}
          color={titleName === '헤드헌팅' ? 'white' : 'black'}
          onClick={changeTitleColor}
        >
          헤드헌팅
        </S.JobLiBorderRight>
      </S.JobUl>
      <S.H1>배경</S.H1>
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
        <S.H1>기업로고</S.H1>
        <S.BlacSpan>
          <S.FileInput type="file" width="110px" height="35px" left="0.1rem" top="-0.3rem" />
          로고 직접 등록
        </S.BlacSpan>
      </div>
      <S.ResultColor bgColor={bgColor}>
        <S.LogImage src={Logo} alt="logo" />
      </S.ResultColor>
    </S.Container>
  );
};

export default DashboardProjectAdd;
