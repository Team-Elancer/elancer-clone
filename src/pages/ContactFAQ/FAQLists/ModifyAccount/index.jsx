import { IoArrowUpCircleOutline, IoArrowDownCircleOutline } from 'react-icons/io5';

import * as S from '../style';

import useModal from 'hooks/useModal';

const ModifyAccountQNA = ({ section }) => {
  const { isShowing, toggle, setIsShowing } = useModal();

  const { qsymbol, question, asymbol, answer } = section;

  return (
    <S.FAQlist>
      <S.ContainerQuestion>
        <div>
          <S.QuestionLetter> {qsymbol} </S.QuestionLetter>
          {question}
        </div>
        <S.ArrowModalButton type="button" isShowing={isShowing} onClick={toggle}>
          {isShowing ? <IoArrowUpCircleOutline fontSize="32px" /> : <IoArrowDownCircleOutline fontSize="32px" />}
        </S.ArrowModalButton>
      </S.ContainerQuestion>
      <S.ContainerAnswer show={isShowing}>
        <S.AnswerLetter> {asymbol} </S.AnswerLetter> {answer}
      </S.ContainerAnswer>
    </S.FAQlist>
  );
};

export default ModifyAccountQNA;
