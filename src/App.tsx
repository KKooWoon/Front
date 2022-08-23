import LoginPage from '@pages/login';
import GlobalLayout from '@pages/_layout';
import React from 'react';

import { Route, Routes } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'react-calendar/dist/Calendar.css';

const Main = React.lazy(() => import('@pages/main'));
const Calendar = React.lazy(() => import('@pages/calendar'));
const Race = React.lazy(() => import('@pages/race'));
const CreateRace = React.lazy(() => import('@pages/create-race'));
const Profile = React.lazy(() => import('@pages/profile'));
const ProfileDetail = React.lazy(() => import('@pages/detail'));
const UserInfo = React.lazy(() => import('@pages/user-info'));
const Register = React.lazy(() => import('@pages/register'));
const ExerciseDetail = React.lazy(() => import('@pages/exercise-detail'));
const Search = React.lazy(() => import('@pages/search'));
const FollowList = React.lazy(() => import('@pages/follow'));
const KaKaoRedirect = React.lazy(() => import('@pages/kakao-redirect'));
const RaceDetail = React.lazy(()=> import('@pages/race-detail'));

const App = () => {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route index element={<LoginPage />} />
        <Route path='/oauth' element={<KaKaoRedirect />} />
        <Route path='user-info' element={<UserInfo />} />
        <Route path='main' element={<Main />} />
        <Route path='calendar' element={<Calendar />} />
        <Route path='race' element={<Race />} />
        <Route path='race/:raceId' element={<RaceDetail/>}/>
        <Route path='create-race' element={<CreateRace />} />
        <Route path='profile' element={<Profile />} />
        <Route path='profile/:id' element={<ProfileDetail />} />
        <Route path='register' element={<Register />} />
        <Route path='exercise-detail' element={<ExerciseDetail />} />
        <Route path='search' element={<Search />} />
        <Route path='follow' element={<FollowList />} />
      </Route>
    </Routes>
  );
};

export default App;
