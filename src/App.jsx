import { Routes, Route } from 'react-router-dom';
import ListPartner from 'pages/ListPartner';
import ListProject from 'pages/ListProject';
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
      </Routes>
    </>
  );
};

export default App;
