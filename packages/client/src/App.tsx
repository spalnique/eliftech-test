import { Navigate, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage.tsx';
import EventPage from './pages/EventPage/EventPage.tsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/event/:id' element={<EventPage />} />
      <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  );
}

export default App;
