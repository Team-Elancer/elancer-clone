import { useState } from 'react';

import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';

import * as S from '../style';

const WishList = () => {
  const [wishState, setWishState] = useState(false);

  const handleAddWishState = (e) => {
    e.preventDefault();
    alert('인재스크랩에 저장됐습니다.');
    setWishState(true);
  };

  const handleDeleteWishState = (e) => {
    e.preventDefault();
    setWishState(false);
    alert('인재스크랩에서 해제하였습니다');
  };

  return (
    <div>
      {wishState ? (
        <S.FreelancerHeart onClick={(e) => handleDeleteWishState(e)} wishState>
          <BsSuitHeartFill />
        </S.FreelancerHeart>
      ) : (
        <S.FreelancerHeart onClick={(e) => handleAddWishState(e)}>
          <BsSuitHeart />
        </S.FreelancerHeart>
      )}
    </div>
  );
};

export default WishList;
