import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import FAQLists from './FAQLists';

import * as S from './style';

import Footer from 'layouts/Footer';
import Header from 'layouts/Header';

import CategoryFAQButton from 'pages/ContactFAQ/CategoryFAQButton';

const ContactFAQ = () => {
  const [isCheckedProject, setIsCheckedProject] = useState('');
  const [defaultPrimary, setDefaultPrimary] = useState({
    project: false,
    career: false,
    account: false,
  });

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/contact-faq/project') {
      setDefaultPrimary((prev) => ({ ...prev, project: true }));
    }
    if (pathname === '/contact-faq/career') {
      setDefaultPrimary((prev) => ({ ...prev, career: true }));
    }
    if (pathname === '/contact-faq/account') {
      setDefaultPrimary((prev) => ({ ...prev, account: true }));
    }
  }, []);

  const removeDefault = () => {
    setDefaultPrimary({});
  };

  return (
    <>
      <Header />
      <S.FrameFAQ>
        <CategoryFAQButton
          isCheckedProject={isCheckedProject}
          setIsCheckedProject={setIsCheckedProject}
          defaultPrimary={defaultPrimary}
          setDefaultPrimary={setDefaultPrimary}
          removeDefault={removeDefault}
        />
        <FAQLists
          isCheckedProject={isCheckedProject}
          defaultPrimary={defaultPrimary}
          setDefaultPrimary={setDefaultPrimary}
        />
      </S.FrameFAQ>
      <Footer />
    </>
  );
};

export default ContactFAQ;
