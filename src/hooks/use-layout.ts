import { pageLayout } from '@typings/layout';
import { Gallery } from '@typings/race';
import { WorkOut } from '@typings/workout';
import { useLocation, useParams } from 'react-router-dom';

const useLayout = (): pageLayout => {
  const { pathname, state } = useLocation();
  const { id } = useParams();
  const layout: pageLayout = { header: false, noNav: false, hasBack: false };
  if (pathname === '/') {
    return { ...layout, noNav: true };
  } else if (pathname === '/main') {
    return layout;
  } else if (pathname.startsWith('/profile')) {
    if (pathname.length === 8) {
      return { ...layout, header: { title: '마이페이지' }, hasBack: true };
    } else {
      return { ...layout, header: { title: `사용자${id}` }, noNav: true, hasBack: true };
    }
  } else if (pathname === '/user-info') {
    return { ...layout, noNav: true };
  } else if (pathname === '/register') {
    return { ...layout, noNav: true };
  } else if (pathname === '/exercise-detail') {
    return { ...layout, header: { title: '운동A' }, noNav: true, hasBack: true };
  } else if (pathname === '/search') {
    return { ...layout, noNav: true, header: { title: '친구 찾기' }, hasBack: true };
  } else if (pathname === '/follow') {
    return { ...layout, noNav: true, header: { title: '사용자 검색' }, hasBack: true };
  } else if (pathname.startsWith('/race')) {
    if (pathname === '/race') {
      return { ...layout, header: { title: '레이스' } };
    } else {
      return { ...layout, noNav: true, hasBack: true };
    }
  } else if (pathname === '/create-race') {
    return { ...layout, header: { title: '레이스 생성하기' }, noNav: true, hasBack: true };
  } else if (pathname === '/complete-race') {
    return { ...layout, header: false, noNav: true, hasBack: false };
  } else if (pathname === '/oauth') {
    return { ...layout, noNav: true };
  } else if (pathname === '/join') {
    return { ...layout, noNav: true, hasBack: true };
  } else if (pathname === '/user-list') {
    return { ...layout, noNav: true, hasBack: true, header: { title: '친구 목록 보기' } };
  } else if (pathname.startsWith('/workout-detail')) {
    const obj = state as unknown as {date:string, workout:WorkOut}
    return { ...layout, noNav: true, hasBack: true, header: { title: obj.date as string } };
  }else if(pathname === '/workout-auth') {
    return {...layout, noNav:true, hasBack: true, header:{title:'운동 인증하기'}}
  }

  return layout;
};

export default useLayout;
