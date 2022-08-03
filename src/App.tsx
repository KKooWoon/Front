import LoginPage from '@pages/login';
import GlobalLayout from '@pages/_layout';
import React from 'react';

import { Route, Routes } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';

const Main = React.lazy(() => import('@pages/main'));
const Calendar = React.lazy(() => import('@pages/calendar'));
const Race = React.lazy(() => import('@pages/race'));
const Profile = React.lazy(() => import('@pages/profile'));
const ProfileDetail = React.lazy(() => import('@pages/detail'));
const UserInfo = React.lazy(() => import('@pages/user-info'));
const Register = React.lazy(() => import('@pages/register'));
const Search = React.lazy(()=> import ('@pages/search'));

const App = () => {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route index element={<LoginPage />} />
        <Route path='user-info' element={<UserInfo />} />
        <Route path='main' element={<Main />} />
        <Route path='calendar' element={<Calendar />} />
        <Route path='race' element={<Race />} />
        <Route path='profile' element={<Profile />} />
        <Route path='profile/:id' element={<ProfileDetail />} />
        <Route path='register' element={<Register />} />
        <Route path='search' element={<Search />}/>
      </Route>
    </Routes>
  );
};

export default App;
