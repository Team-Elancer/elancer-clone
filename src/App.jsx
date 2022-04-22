import { useState, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import Postcode from 'components/DaumPostCode';
import DashBoard from 'pages/DashBoard';
import DashBoardAccount from 'pages/DashBoard/Account';
import DashBoardProfile from 'pages/DashBoard/Profile';
import DashBoardProject from 'pages/DashBoard/Project';
import DashBoardScrap from 'pages/DashBoard/Scrap';
import Login from 'pages/Login';
import Main from 'pages/Main';
import PartnerDetail from 'pages/Partner/PartnerDetail';
import PartnerList from 'pages/Partner/PartnerList';
import ProjectDetail from 'pages/Project/ProjectDetail';
import ProjectList from 'pages/Project/ProjectList';
import Signin from 'pages/Signin';
import SigninCompany from 'pages/Signin/company';
import SigninFinish from 'pages/Signin/finish/idex';
import SigninFreeLancer from 'pages/Signin/freelancer';
import GlobalStyles from 'styles/GlobalStyles';
import { ThemeContext } from 'ThemeContext';

const App = () => {
  const [placePostcode, setPlacePostcode] = useState('우편번호');
  const [placeAddress, setPlaceAddress] = useState('우편번호 찾기를 통해 입력하세요.');
  const [changeBool, setChangeBool] = useState(true);
  const values = useMemo(
    () => ({ placePostcode, setPlacePostcode, placeAddress, setPlaceAddress, changeBool, setChangeBool }),
    [placePostcode, setPlacePostcode, placeAddress, setPlaceAddress, changeBool],
  );

  return (
    <>
      <GlobalStyles />
      <ThemeContext.Provider value={values}>
        <Routes>
          <Route path="/partner-list" element={<PartnerList />} />
          <Route path="/partner-detail" element={<PartnerDetail />} />
          <Route path="/project-list" element={<ProjectList />} />
          <Route path="/project-detail" element={<ProjectDetail />} />
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signin/freelancer" element={<SigninFreeLancer />} />
          <Route path="/signin/finish" element={<SigninFinish />} />
          <Route path="/signin/company" element={<SigninCompany />} />
          <Route path="/dashboard-enterprise" element={<DashBoard />} />
          <Route path="/dashboard-profile" element={<DashBoardProfile />} />
          <Route path="/dashboard-project" element={<DashBoardProject />} />
          <Route path="/dashboard-scrap" element={<DashBoardScrap />} />
          <Route path="/dashboard-account" element={<DashBoardAccount />} />
          <Route path="/postcode" element={<Postcode />} />
        </Routes>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
