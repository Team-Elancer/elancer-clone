import { Routes, Route } from 'react-router-dom';

import PrivateRoute from 'components/PrivateRoute';
import ContactFAQ from 'pages/ContactFAQ';
import CategoryFAQButton from 'pages/ContactFAQ/CategoryFAQButton';
import FAQLists from 'pages/ContactFAQ/FAQLists';

import Dashboard from 'pages/DashBoard';
import DashBoardAccount from 'pages/DashBoard/Account';
import DashboardContact from 'pages/DashBoard/Contact';
import DashBoardEnterprise from 'pages/DashBoard/Enterprise';
import DashBoardModify from 'pages/DashBoard/Modify';
import DashBoardProfile from 'pages/DashBoard/Profile';
import DashBoardProject from 'pages/DashBoard/Project';
import DashboardProjectAdd from 'pages/DashBoard/ProjectAdd';
import DashBoardScrap from 'pages/DashBoard/Scrap';

import Login from 'pages/Login';
import Main from 'pages/Main';

import MainEnterprise from 'pages/Main/Enterprise';
import MyBoardFreelancer from 'pages/MyBoardFreelancer';
import MyBoardAccount from 'pages/MyBoardFreelancer/MyBoardAccount';
import MyBoardCareer from 'pages/MyBoardFreelancer/MyBoardCareer';
import MyBoardContact from 'pages/MyBoardFreelancer/MyBoardContact';
import MyBoardManageProject from 'pages/MyBoardFreelancer/MyBoardManageProject';
import MyBoardOnGoing from 'pages/MyBoardFreelancer/MyBoardOnGoing';

import PartnerDetail from 'pages/Partner/PartnerDetail';
import PartnerList from 'pages/Partner/PartnerList';
import ProjectDetail from 'pages/Project/ProjectDetail';
import ProjectList from 'pages/Project/ProjectList';
import SignUp from 'pages/SignUp';
import SignUpCompany from 'pages/SignUp/Company';
import SignUpFinish from 'pages/SignUp/Finish';
import SignUpFreeLancer from 'pages/SignUp/Freelancer';
import SignUpMain from 'pages/SignUp/Main';
import GlobalStyles from 'styles/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="enterprise" element={<MainEnterprise />} />
        <Route path="partner-list" element={<PartnerList />} />
        <Route path="partner-detail" element={<PartnerDetail />} />
        <Route path="project-list" element={<ProjectList />} />
        <Route path="project-detail" element={<ProjectDetail />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />}>
          <Route path="main" element={<SignUpMain />} />
          <Route path="freelancer" element={<SignUpFreeLancer />} />
          <Route path="finish" element={<SignUpFinish />} />
          <Route path="company" element={<SignUpCompany />} />
          <Route path="/signup" element={<SignUpMain />} />
        </Route>
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="enterprise" element={<DashBoardEnterprise />} />
          <Route path="profile" element={<DashBoardProfile />} />
          <Route path="modify" element={<DashBoardModify />} />
          <Route path="project" element={<DashBoardProject />} />
          <Route path="projectadd" element={<DashboardProjectAdd />} />
          <Route path="scrap" element={<DashBoardScrap />} />
          <Route path="contact" element={<DashboardContact />} />
          <Route path="account" element={<DashBoardAccount />} />
          <Route path="/dashboard" element={<DashBoardEnterprise />} />
        </Route>
        <Route path="/myboard-freelancer" element={<PrivateRoute />}>
          <Route path="/myboard-freelancer" element={<MyBoardFreelancer freelancerBoard />}>
            <Route path="ongoing" element={<MyBoardOnGoing />} />
            {/* <Route path="profile" element={<MyBoardOnGoing />} /> */}
            <Route path="project" element={<MyBoardManageProject />} />
            <Route path="career" element={<MyBoardCareer />} />
            <Route path="contact" element={<MyBoardContact />} />
            <Route path="account" element={<MyBoardAccount />} />
          </Route>
        </Route>
        <Route path="/contact-faq" element={<ContactFAQ />}>
          <Route path="project" element={<FAQLists />} />
          <Route path="account" element={<FAQLists />} />
          <Route path="career" element={<FAQLists />} />
          <Route path="/contact-faq/*" element={<ContactFAQ />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
