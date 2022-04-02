import { Routes, Route } from 'react-router-dom';
import ListPartner from 'pages/ListPartner';
import ListProject from 'pages/ListProject';
import Login from 'pages/Login';
import Main from 'pages/Main';
import GlobalStyles from 'styles/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/list-partner" element={<ListPartner />} />
        <Route path="/list-project" element={<ListProject />} />
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
