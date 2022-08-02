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
    return { ...layout, header: {title:"마이페이지"}, noNav: true, hasBack: true };
  } else if (pathname === '/user-info') {
    return { ...layout, noNav: true };
  } else if (pathname === '/register') {
    return { ...layout, noNav: true };
  }
  return layout;
};

export default useLayout;
