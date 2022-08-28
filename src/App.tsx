import LoginPage from '@pages/login';
import GlobalLayout from '@pages/_layout';
import React, { useEffect } from 'react';

import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'react-calendar/dist/Calendar.css';
import MobileError from '@pages/mobile';
import ErrorPage from '@pages/error';

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
const RaceDetail = React.lazy(() => import('@pages/race-detail'));
const RaceJoin = React.lazy(() => import('@pages/race-join'));
const UserList = React.lazy(()=> import('@pages/user-list'));
const WorkoutDetail = React.lazy(()=> import('@pages/workout-detail'));

const App = () => {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const UserAgent = navigator.userAgent;
    const isMobile =
      UserAgent.match(
        /iPhone|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i
      ) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null;

    //TODO: mobile error page
    if (!isMobile && pathname !== "/mobile") navigate("/mobile");
    if (isMobile && pathname === "/mobile") navigate("/");
  }, []);
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route index element={<LoginPage />} />
        <Route path='/oauth' element={<KaKaoRedirect />} />
        <Route path='user-info' element={<UserInfo />} />
        <Route path='main' element={<Main />} />
        <Route path='calendar' element={<Calendar />} />
        <Route path='join' element={<RaceJoin />} />
        <Route path='race' element={<Race />} />
        <Route path='race/:raceId' element={<RaceDetail />} />
        <Route path='workout-detail/:workoutId' element={<WorkoutDetail />}/>
        <Route path='user-list' element={<UserList />}/>
        <Route path='create-race' element={<CreateRace />} />
        <Route path='profile' element={<Profile />} />
        <Route path='profile/:id' element={<ProfileDetail />} />
        <Route path='register' element={<Register />} />
        <Route path='exercise-detail' element={<ExerciseDetail />} />
        <Route path='search' element={<Search />} />
        <Route path='follow' element={<FollowList />} />
      </Route>
      <Route path="/mobile" element={<MobileError />}/>
      <Route path='/*' element={<ErrorPage/>}/>
    </Routes>
  );
};

export default App;
