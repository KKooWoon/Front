import { pageLayout } from '@typings/layout';
import { useLocation } from 'react-router-dom';

const useLayout = (): pageLayout => {
  const { pathname } = useLocation();
  const layout: pageLayout = { header: false, noNav: false, hasBack: false };
  if (pathname === '/') {
    return { ...layout, noNav: true };
  } else if (pathname === '/main') {
    return layout;
  } else if (pathname === '/profile') {
    return { ...layout, header: true, noNav: true, hasBack: true };
  } else if (pathname === '/user-info') {
    return { ...layout, noNav: true };
  } else if (pathname === '/register') {
    return { ...layout, noNav: true };
  } else if (pathname === '/exercise-detail') {
    return { ...layout, header: true, noNav: true, hasBack: true };
  }
  return layout;
};

export default useLayout;
