import { Routes, Route } from 'react-router-dom';
import ListPartner from 'pages/ListPartner';
import Main from 'pages/pages/Main';
import GlobalStyles from 'styles/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/list-partner" element={<ListPartner />} />
        <Route path='/' element={<Main />} />
      </Routes>
    </>
  );
};

export default App;
