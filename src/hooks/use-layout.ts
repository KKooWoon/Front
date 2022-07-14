import { pageLayout } from '@typings/layout';
import { useLocation } from 'react-router-dom';

const useLayout = (): pageLayout => {
  const { pathname } = useLocation();
  const layout: pageLayout = { header: false, noNav: false, hasBack: false };
  if (pathname === '/') {
    return { ...layout, header: true };
  } else if (pathname === '/profile') {
    return { ...layout, header: true, noNav: true };
  }
  return layout;
};

export default useLayout;
