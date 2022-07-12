import React from 'react';
import { Route, Routes } from 'react-router-dom';

const Main = React.lazy(() => import('@pages/main'));
const Upload = React.lazy(() => import('@pages/upload'));
const Race = React.lazy(() => import('@pages/race'));
const Profile = React.lazy(() => import('@pages/profile'));

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/upload' element={<Upload />} />
      <Route path='/race' element={<Race />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  );
};

export default App;
