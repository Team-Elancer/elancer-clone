import { Routes, Route } from 'react-router-dom';
import ListPartner from 'pages/ListPartner';

import GlobalStyles from 'styles/GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/list-partner" element={<ListPartner />} />
      </Routes>
    </>
  );
};

export default App;
