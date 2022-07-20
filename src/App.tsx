import LoginPage from '@pages/login';
import GlobalLayout from '@pages/_layout';
import React from 'react';

import { Route, Routes } from 'react-router-dom';

import 'swiper/css';
import "swiper/css/navigation";

const Main = React.lazy(() => import('@pages/main'));
const Upload = React.lazy(() => import('@pages/upload'));
const Race = React.lazy(() => import('@pages/race'));
const Profile = React.lazy(() => import('@pages/profile'));
const ProfileDetail = React.lazy(()=> import('@pages/detail'));

const App = () => {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route index element={<LoginPage />}/>
        <Route path='/main' element={<Main/>} />
        <Route path='upload' element={<Upload />} />
        <Route path='race' element={<Race />} />
        <Route path='profile' element={<Profile />}/>
        <Route path='profile/:id' element={<ProfileDetail />} />
      </Route>
    </Routes>
  );
};

export default App;
