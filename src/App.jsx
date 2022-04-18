import { Routes, Route } from 'react-router-dom';
import DashBoard from 'pages/DashBoard';
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

const App = () => {
  return (
    <>
      <GlobalStyles />
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
      </Routes>
    </>
  );
};

export default App;
