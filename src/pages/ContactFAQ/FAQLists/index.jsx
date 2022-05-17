import { useState } from 'react';
import * as S from './style';

// 토글: 숨기기 -> !prev state
// 컨텐츠 : dispaly -> active

const FAQLists = () => {
  const [switchOn, setSwitchOn] = useState({
    one: false,
    two: false,
    three: false,
  });

  const { one, two, three } = switchOn;

  const handleSwitch = (e) => {
    let boolean = null;

    if (e.target.id === 'one') {
      boolean = !one;
    }
    if (e.target.id === 'two') {
      boolean = !two;
    }
    if (e.target.id === 'three') {
      boolean = !three;
    }

    setSwitchOn((prevState) => ({ ...prevState, [e.target.id]: boolean }));
  };

  return (
    <S.ContainerUl>
      <S.FAQlist>
        <S.ContainerQuestion>
          <div>
            <S.QuestionLetter>[Q]</S.QuestionLetter>
            프로젝트 등록하면 얼마나 걸리나요? / 프로젝트에 지원하면 결과는 언제 알 수 있나요?
          </div>
          <S.ArrowButton id="one" onClick={handleSwitch}>
            ☑️
          </S.ArrowButton>
        </S.ContainerQuestion>
        <S.ContainerAnswer show={one}>
          <S.AnswerLetter>[A]</S.AnswerLetter> 위에 질문 두가지 상황이 애매하게 공존하고 있습니다. 프로젝트가 등록이
          되고 담당매니저가 배정되면 바로 초기상담이 진행됩니다. 그리고 서칭을 시작하게 되는데, 그 중에는 등록된
          프로젝트에 지원을 하는 e랜서도 있고 매니저가 직접적으로 컨택해서 추천을 하는 e랜서들도 있습니다. 이때 걸리는
          시간은 관련 프로젝트에 상세내역과 요구사항이 잘 맞아 떨어지면 추천 시간은 그만큼 빨라지게 됩니다. 그렇게
          추천된 인력은 반대로 바이어쪽에 피드백을 요구 합니다. 그러면 매니저들은 추천인력에 대한 진행 사항을 체크
          하는데요. 바이어쪽에서 검토하고 진행하는 상황이 여의치가 않을 때 그만큼 피드백이 느려지는 상황이 생기게 된다고
          합니다. 물론 빠른 피드백과 의사 결정을 하는 바이어들도 있습니다. 그런 경우는 진행이 빠르게 되어서 e랜서들도
          만족을 합니다. 물론 그 시간을 줄이기 위해 매니저들이 열심히 움직이고 있다는 점~! 보다 나은 서비스를 위해서
          발빠르게 움직이는 매니저들이 있다는 점~! 꼭 기억해 주세요.
        </S.ContainerAnswer>
      </S.FAQlist>
      <S.FAQlist>
        <S.ContainerQuestion>
          <div>
            <S.QuestionLetter>[Q]</S.QuestionLetter>
            프로젝트 등록하면 얼마나 걸리나요? / 프로젝트에 지원하면 결과는 언제 알 수 있나요?
          </div>
          <S.ArrowButton id="two" onClick={handleSwitch}>
            ☑️
          </S.ArrowButton>
        </S.ContainerQuestion>
        <S.ContainerAnswer show={two}>
          <S.AnswerLetter>[A]</S.AnswerLetter> 위에 질문 두가지 상황이 애매하게 공존하고 있습니다. 프로젝트가 등록이
          되고 담당매니저가 배정되면 바로 초기상담이 진행됩니다. 그리고 서칭을 시작하게 되는데, 그 중에는 등록된
          프로젝트에 지원을 하는 e랜서도 있고 매니저가 직접적으로 컨택해서 추천을 하는 e랜서들도 있습니다. 이때 걸리는
          시간은 관련 프로젝트에 상세내역과 요구사항이 잘 맞아 떨어지면 추천 시간은 그만큼 빨라지게 됩니다. 그렇게
          추천된 인력은 반대로 바이어쪽에 피드백을 요구 합니다. 그러면 매니저들은 추천인력에 대한 진행 사항을 체크
          하는데요. 바이어쪽에서 검토하고 진행하는 상황이 여의치가 않을 때 그만큼 피드백이 느려지는 상황이 생기게 된다고
          합니다. 물론 빠른 피드백과 의사 결정을 하는 바이어들도 있습니다. 그런 경우는 진행이 빠르게 되어서 e랜서들도
          만족을 합니다. 물론 그 시간을 줄이기 위해 매니저들이 열심히 움직이고 있다는 점~! 보다 나은 서비스를 위해서
          발빠르게 움직이는 매니저들이 있다는 점~! 꼭 기억해 주세요.
        </S.ContainerAnswer>
      </S.FAQlist>
      <S.FAQlist>
        <S.ContainerQuestion>
          <div>
            <S.QuestionLetter>[Q]</S.QuestionLetter>
            프로젝트 등록하면 얼마나 걸리나요? / 프로젝트에 지원하면 결과는 언제 알 수 있나요?
          </div>
          <S.ArrowButton id="three" onClick={handleSwitch}>
            ☑️
          </S.ArrowButton>
        </S.ContainerQuestion>
        <S.ContainerAnswer show={three}>
          <S.AnswerLetter>[A]</S.AnswerLetter> 위에 질문 두가지 상황이 애매하게 공존하고 있습니다. 프로젝트가 등록이
          되고 담당매니저가 배정되면 바로 초기상담이 진행됩니다. 그리고 서칭을 시작하게 되는데, 그 중에는 등록된
          프로젝트에 지원을 하는 e랜서도 있고 매니저가 직접적으로 컨택해서 추천을 하는 e랜서들도 있습니다. 이때 걸리는
          시간은 관련 프로젝트에 상세내역과 요구사항이 잘 맞아 떨어지면 추천 시간은 그만큼 빨라지게 됩니다. 그렇게
          추천된 인력은 반대로 바이어쪽에 피드백을 요구 합니다. 그러면 매니저들은 추천인력에 대한 진행 사항을 체크
          하는데요. 바이어쪽에서 검토하고 진행하는 상황이 여의치가 않을 때 그만큼 피드백이 느려지는 상황이 생기게 된다고
          합니다. 물론 빠른 피드백과 의사 결정을 하는 바이어들도 있습니다. 그런 경우는 진행이 빠르게 되어서 e랜서들도
          만족을 합니다. 물론 그 시간을 줄이기 위해 매니저들이 열심히 움직이고 있다는 점~! 보다 나은 서비스를 위해서
          발빠르게 움직이는 매니저들이 있다는 점~! 꼭 기억해 주세요.
        </S.ContainerAnswer>
      </S.FAQlist>
    </S.ContainerUl>
  );
};

export default FAQLists;
