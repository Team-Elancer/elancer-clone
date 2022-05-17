import { useState, useEffect } from 'react';
import { useParams, useSearchParams, useLocation } from 'react-router-dom';

import * as S from './style';

const FAQLists = ({ isCheckedProject, defaultPrimary, setDefaultPrimary }) => {
  const { project, career, account } = defaultPrimary;

  const [switchOn, setSwitchOn] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false,
    nine: false,
    ten: false,
    eleven: false,
    twelve: false,
    thirteen: false,
  });

  const { one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen } = switchOn;

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
    if (e.target.id === 'four') {
      boolean = !four;
    }
    if (e.target.id === 'five') {
      boolean = !five;
    }
    if (e.target.id === 'six') {
      boolean = !six;
    }
    if (e.target.id === 'seven') {
      boolean = !seven;
    }
    if (e.target.id === 'eight') {
      boolean = !eight;
    }
    if (e.target.id === 'nine') {
      boolean = !nine;
    }
    if (e.target.id === 'ten') {
      boolean = !ten;
    }
    if (e.target.id === 'eleven') {
      boolean = !eleven;
    }
    if (e.target.id === 'twelve') {
      boolean = !twelve;
    }
    if (e.target.id === 'thirteen') {
      boolean = !thirteen;
    }

    setSwitchOn((prevState) => ({ ...prevState, [e.target.id]: boolean }));
  };

  return (
    <S.ContainerUl>
      {(isCheckedProject === '#project' || project) && (
        <div>
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
              프로젝트에 지원을 하는 e랜서도 있고 매니저가 직접적으로 컨택해서 추천을 하는 e랜서들도 있습니다. 이때
              걸리는 시간은 관련 프로젝트에 상세내역과 요구사항이 잘 맞아 떨어지면 추천 시간은 그만큼 빨라지게 됩니다.
              그렇게 추천된 인력은 반대로 바이어쪽에 피드백을 요구 합니다. 그러면 매니저들은 추천인력에 대한 진행 사항을
              체크 하는데요. 바이어쪽에서 검토하고 진행하는 상황이 여의치가 않을 때 그만큼 피드백이 느려지는 상황이
              생기게 된다고 합니다. 물론 빠른 피드백과 의사 결정을 하는 바이어들도 있습니다. 그런 경우는 진행이 빠르게
              되어서 e랜서들도 만족을 합니다. 물론 그 시간을 줄이기 위해 매니저들이 열심히 움직이고 있다는 점~! 보다
              나은 서비스를 위해서 발빠르게 움직이는 매니저들이 있다는 점~! 꼭 기억해 주세요.
            </S.ContainerAnswer>
          </S.FAQlist>
          <S.FAQlist>
            <S.ContainerQuestion>
              <div>
                <S.QuestionLetter>[Q]</S.QuestionLetter>
                프로젝트 진행 후에 정규직으로 전환하고자 합니다.
              </div>
              <S.ArrowButton id="two" onClick={handleSwitch}>
                ☑️
              </S.ArrowButton>
            </S.ContainerQuestion>
            <S.ContainerAnswer show={two}>
              <S.AnswerLetter>[A]</S.AnswerLetter> ㈜이랜서에서는 프리랜서 투입 프로젝트 종료 후에 정규직 전환으로
              헤드헌팅 계약을 진행할 경우 3개월(수습기간)동안 해당 직무 인재에 대해 위의 문제가 발생하더라도 바이어가
              만족스러운 인재를 찾을 때까지 계속해서 추천해 드립니다.
            </S.ContainerAnswer>
          </S.FAQlist>
          <S.FAQlist>
            <S.ContainerQuestion>
              <div>
                <S.QuestionLetter>[Q]</S.QuestionLetter>
                프로젝트 등록 어떻게 해야 될까요?
              </div>
              <S.ArrowButton id="three" onClick={handleSwitch}>
                ☑️
              </S.ArrowButton>
            </S.ContainerQuestion>
            <S.ContainerAnswer show={three}>
              <S.AnswerLetter>[A]</S.AnswerLetter> 담당 매니저가 프로젝트마다 배정이 되어서 원하시는 인력을 추천해
              드립니다. 잠깐!! 혹시 바이어 회원 아이디를 잊어 버리셨나요? 바이어 쪽 담당자가 바뀌셨나요? 그럴 때는
              걱정하지 마시고 전화 한통이면 됩니다! 전화를 받은 담당매니저에게 구인의뢰 하신다고 말씀하시면, 친절하게
              안내해 드릴 것입니다.
            </S.ContainerAnswer>
          </S.FAQlist>
        </div>
      )}

      {(isCheckedProject === '#career' || career) && (
        <div>
          <S.FAQlist>
            <S.ContainerQuestion>
              <div>
                <S.QuestionLetter>[Q]</S.QuestionLetter>
                이력서가 피곤해~! 어떻게 관리해야 할까요?
              </div>
              <S.ArrowButton id="four" onClick={handleSwitch}>
                ☑️
              </S.ArrowButton>
            </S.ContainerQuestion>
            <S.ContainerAnswer show={four}>
              <S.AnswerLetter>[A]</S.AnswerLetter> 인력추천을 진행하다보면 많은 이력서들을 보게 됩니다. 철저한
              이력관리를 하셔서 프로젝트명 기간 및 업무 내용이 잘 정리되어 있는 이력서. 그럭저럭 이력 관리를 하셔서
              프로젝트명 담당 업무 정도만 정리된 이력서. 마지막으로 기간도 가물가물 하고 프로젝트명도 가물가물 대충
              정리된 이력서.
            </S.ContainerAnswer>
          </S.FAQlist>
          <S.FAQlist>
            <S.ContainerQuestion>
              <div>
                <S.QuestionLetter>[Q]</S.QuestionLetter>잘 쓴 이력서는 어떤 이력서인가요?
              </div>
              <S.ArrowButton id="five" onClick={handleSwitch}>
                ☑️
              </S.ArrowButton>
            </S.ContainerQuestion>
            <S.ContainerAnswer show={five}>
              <S.AnswerLetter>[A]</S.AnswerLetter> 이력서 쓰는 법이 궁금하시군요. 이력서는 본인의 얼굴이라고 해도 과언이
              아닌데요. 좀 더 매력적이고 눈에 띄는 이력서를 쓰는 방법에 대해 알아보도록 할게요. 개발자편 - 희망하는
              프로젝트에 적합한 경력은 꼭 굵은 글씨로 써야 합니다. 또한 자격증 보유 여부와 연도 기재는 필수입니다. 특수
              기술 사용 경력이 있다면 빠짐없이 기재하는 것도 중요합니다. 프로젝트는 사소한 경력이라도 안쓰면 곤란합니다.
            </S.ContainerAnswer>
          </S.FAQlist>
        </div>
      )}

      {(isCheckedProject === '#account' || account) && (
        <div>
          <S.FAQlist>
            <S.ContainerQuestion>
              <div>
                <S.QuestionLetter>[Q]</S.QuestionLetter>
                회원탈퇴는 어떻게 하나요?
              </div>
              <S.ArrowButton id="seven" onClick={handleSwitch}>
                ☑️
              </S.ArrowButton>
            </S.ContainerQuestion>
            <S.ContainerAnswer show={seven}>
              <S.AnswerLetter>[A]</S.AnswerLetter> 개인회원 또는 기업회원으로 로그인 하시면 [회원정보수정 - 회원탈퇴
              신청]에서 가능합니다.
            </S.ContainerAnswer>
          </S.FAQlist>
          <S.FAQlist>
            <S.ContainerQuestion>
              <div>
                <S.QuestionLetter>[Q]</S.QuestionLetter>
                개명한 이름으로 회원정보를 바꾸고 싶습니다.
              </div>
              <S.ArrowButton id="eight" onClick={handleSwitch}>
                ☑️
              </S.ArrowButton>
            </S.ContainerQuestion>
            <S.ContainerAnswer show={eight}>
              <S.AnswerLetter>[A]</S.AnswerLetter> 새로운 이름으로 개명을 하셨다면, 이랜서에 가입된 이름도 개명된
              이름으로 변경하셔야 합니다. ■ 이랜서 회원정보 내 이름 변경 절차 1단계: 실명인증 기관을 통해 개명한 이름
              등록/확인 아직 개명된 이름이 실명인증 기관에 등록되지 않았다면 아래 기관 중 한 곳을 선택하여 실명등록을
              신청하시면 됩니다.
            </S.ContainerAnswer>
          </S.FAQlist>
        </div>
      )}

      {isCheckedProject === '#signup' && (
        <div>
          <S.FAQlist>
            <S.ContainerQuestion>
              <div>
                <S.QuestionLetter>[Q]</S.QuestionLetter>
                휴대폰 인증이 무엇인가요?
              </div>
              <S.ArrowButton id="nine" onClick={handleSwitch}>
                ☑️
              </S.ArrowButton>
            </S.ContainerQuestion>
            <S.ContainerAnswer show={nine}>
              <S.AnswerLetter>[A]</S.AnswerLetter> 휴대폰 인증을 통하여 정확한 연락처임이 증명된 마크를 부여받는
              제도입니다. 잘못된 연락처를 입력하여 업체로부터 면접제의를 받지 못하는 실수를 줄이기 위한
              인증서비스입니다. 또한 신규 회원가입을 하거나 이미 가입된 회원정보수정에서 휴대폰 인증이 가능합니다. Tip.
              휴대폰 인증마크가 있는 이력서는 정확한 정보인 이력서로 인식되어 미인증 이력서보다 더 많은 취업의 기회를
              얻을 수 있습니다.
            </S.ContainerAnswer>
          </S.FAQlist>
          <S.FAQlist>
            <S.ContainerQuestion>
              <div>
                <S.QuestionLetter>[Q]</S.QuestionLetter>
                개인 회원가입은 무료인가요?
              </div>
              <S.ArrowButton id="ten" onClick={handleSwitch}>
                ☑️
              </S.ArrowButton>
            </S.ContainerQuestion>
            <S.ContainerAnswer show={ten}>
              <S.AnswerLetter>[A]</S.AnswerLetter> 이랜서의 개인회원 가입은 무료이며, 별도의 회원가입비를 받지 않습니다.
              현재 비회원 시 영구적으로 프로젝트 1회 열람의 서비스만 제공되지만 무료 회원가입을 하시게 될 경우 프로젝트
              무한 무료열람 서비스 제공과 입찰 참여의 서비스를 제공해드립니다. 회원가입은 휴대폰 인증 후 이름, 생년월일,
              이메일, 휴대폰번호 등의 개인정보를 입력하시면 이랜서의 개인회원으로 가입하실 수 있습니다.
              [개인회원가입하기]
            </S.ContainerAnswer>
          </S.FAQlist>
        </div>
      )}

      {isCheckedProject === '#id-password' && (
        <div>
          <S.FAQlist>
            <S.ContainerQuestion>
              <div>
                <S.QuestionLetter>[Q]</S.QuestionLetter>
                아이디를 변경하고 싶습니다.
              </div>
              <S.ArrowButton id="eleven" onClick={handleSwitch}>
                ☑️
              </S.ArrowButton>
            </S.ContainerQuestion>
            <S.ContainerAnswer show={eleven}>
              <S.AnswerLetter>[A]</S.AnswerLetter> 한번 부여받으신 아이디는 변경하실 수 없습니다. 부득이하게 아이디
              변경을 원하실 경우 회원탈퇴 후, 원하시는 아이디로 재가입하셔야 합니다. ※ 회원탈퇴를 하시면 작성된 이력서와
              개인정보가 모두 영구히 삭제되어 복구가 불가능하므로 신중하게 생각하신 후 탈퇴를 하시기 바랍니다.
            </S.ContainerAnswer>
          </S.FAQlist>
          <S.FAQlist>
            <S.ContainerQuestion>
              <div>
                <S.QuestionLetter>[Q]</S.QuestionLetter>
                이메일로 비밀번호를 찾는데 메일이 오지 않아요.
              </div>
              <S.ArrowButton id="twelve" onClick={handleSwitch}>
                ☑️
              </S.ArrowButton>
            </S.ContainerQuestion>
            <S.ContainerAnswer show={twelve}>
              <S.AnswerLetter>[A]</S.AnswerLetter> 가입자가 본인명의가 아닐 경우 메일 인증이 불가능하오니 인증번호를
              받지 못하셨다면 먼저 본인명의로 가입된 이메일인지 확인해주세요. 만약 다른 사람이름으로 가입되어있다면
              이메일 비밀번호 찾기 또는 아래 정보를 확인하여 고객센터로 문의 주시기 바랍니다.
            </S.ContainerAnswer>
          </S.FAQlist>
        </div>
      )}

      {isCheckedProject === '#etc' && (
        <div>
          <S.FAQlist>
            <S.ContainerQuestion>
              <div>
                <S.QuestionLetter>[Q]</S.QuestionLetter>
                어떤 프로그래머가 좋은 프로그래머입니까?
              </div>
              <S.ArrowButton id="thirteen" onClick={handleSwitch}>
                ☑️
              </S.ArrowButton>
            </S.ContainerQuestion>
            <S.ContainerAnswer show={thirteen}>
              <S.AnswerLetter>[A]</S.AnswerLetter> 어떤 프로그래머가 좋은 프로그래머인지 애매합니다. 퍼포먼스가 좋은
              프로그래머일까요? 약속을 잘 지키는 프로그래머일까요? 아니면 돈을 잘 버는 프로그래머일까요? 좋은
              프로그래머에서의 좋다 의 기준이 참 애매한 상황이죠. 물론 프리랜서들은 프로젝트의 결과물로 이야기를 한다고
              할 수 있습니다.
            </S.ContainerAnswer>
          </S.FAQlist>
        </div>
      )}
    </S.ContainerUl>
  );
};

export default FAQLists;
