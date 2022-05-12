import { FaRegStar, FaStar } from 'react-icons/fa';
import * as S from './style';
import Bici from 'assets/images/bici.png';

const CompanyDashBoard = ({
  EcardDiv = 'none',
  height = '0.7rem',
  topleft = '0',
  bottomleft = '0.4rem',
  right = '0.4rem',
}) => {
  return (
    <S.EcardDiv display={EcardDiv} topleft={topleft} bottomleft={bottomleft} right={right}>
      <S.EcarcdPaddingDiv height={height} display="flex">
        <div>
          <S.ImageDiv>
            <S.Img src={Bici} alt="profile-photo" />
            <S.NameP>종혁</S.NameP>
          </S.ImageDiv>
        </div>
        <S.RatingDiv>
          <S.Ratingspan>
            활동평가
            <S.RatingNumberP mobilesize="0.75rem" mobileleft="6.7rem" size="1.1rem" left="2rem">
              <S.StarIcon color="orange">
                <FaStar />
              </S.StarIcon>
              <S.StarIcon color="orange">
                <FaStar />
              </S.StarIcon>
              <S.StarIcon color="orange">
                <FaStar />
              </S.StarIcon>
              <S.StarIcon color="orange">
                <FaStar />
              </S.StarIcon>
              <S.StarIcon>
                <FaRegStar />
              </S.StarIcon>
              3.5
            </S.RatingNumberP>
          </S.Ratingspan>
          <RatingSmall
            mobilesize="0.75rem"
            mobileleft="7rem"
            title="전문성"
            size="0.9rem"
            left="4rem"
            color="orange"
            persent="70%"
          />
          <RatingSmall
            mobilesize="0.75rem"
            mobileleft="6.3rem"
            title="일정준수"
            size="0.9rem"
            left="3.15rem"
            color="orange"
            persent="70%"
          />
          <RatingSmall
            mobilesize="0.75rem"
            mobileleft="7rem"
            title="적극성"
            size="0.9rem"
            left="4rem"
            color="orange"
            persent="70%"
          />
          <RatingSmall
            mobilesize="0.75rem"
            mobileleft="6.3rem"
            title="의사소통"
            size="0.9rem"
            left="3.15rem"
            color="orange"
            persent="70%"
          />
          <RatingSmall
            mobilesize="0.75rem"
            mobileleft="5.3rem"
            title="재고용 의사"
            size="0.9rem"
            left="2rem"
            color="orange"
            persent="70%"
          />
        </S.RatingDiv>
      </S.EcarcdPaddingDiv>
    </S.EcardDiv>
  );
};

const RatingSmall = ({ mobilesize, mobileleft, title, size, left, color, persent }) => {
  return (
    <S.RatingSmallspan>
      {title}
      <S.RatingNumberP mobilesize={mobilesize} mobileleft={mobileleft} size={size} left={left}>
        <S.StarIcon color={color}>
          <FaStar />
        </S.StarIcon>
        <S.StarIcon color={color}>
          <FaStar />
        </S.StarIcon>
        <S.StarIcon color={color}>
          <FaStar />
        </S.StarIcon>
        <S.StarIcon color={color}>
          <FaStar />
        </S.StarIcon>
        <S.StarIcon>
          <FaRegStar />
        </S.StarIcon>
        {persent}
      </S.RatingNumberP>
    </S.RatingSmallspan>
  );
};

export default CompanyDashBoard;
