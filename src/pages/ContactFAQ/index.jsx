import FAQLists from './FAQLists';

import * as S from './style';

import Footer from 'layouts/Footer';
import Header from 'layouts/Header';

import CategoryFAQButton from 'pages/ContactFAQ/CategoryFAQButton';

const ContactFAQ = () => {
  return (
    <>
      <Header />
      <S.FrameFAQ>
        <CategoryFAQButton />
        <FAQLists />
      </S.FrameFAQ>
      {/* <Footer toBottom /> */}
    </>
  );
};

export default ContactFAQ;
