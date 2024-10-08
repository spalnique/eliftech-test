import { Navigate, Route, Routes } from 'react-router-dom';

import HomePage from '../pages/HomePage/HomePage.tsx';
import EventPage from '../pages/EventPage/EventPage.tsx';
import RegisterPage from '../pages/RegisterPage/RegisterPage.tsx';

const Router: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/event/:id' element={<EventPage />} />
        <Route path='/register/:id' element={<RegisterPage />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </>
  );
};

export default Router;
