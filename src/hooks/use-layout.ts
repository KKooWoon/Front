import { pageLayout } from '@typings/layout';
import { useLocation, useParams } from 'react-router-dom';

const useLayout = (): pageLayout => {
  const  { pathname } = useLocation();
    const layout: pageLayout = { header: false, noNav: false, hasBack: false };
  if (pathname === '/') {
    return { ...layout, noNav: true };
  } else if (pathname === '/main') {
    return layout;
  } else if (pathname.startsWith('/profile')) {
      if(pathname.length === 8){
        return { ...layout, header: {title:"마이페이지"}, noNav: true, hasBack: true };
      }else {
        const {id} = useParams();
        return { ...layout, header: {title:`사용자${id}`}, noNav: true, hasBack: true };
      }
  } else if (pathname === '/user-info') {
    return { ...layout, noNav: true };
  } else if (pathname === '/register') {
    return { ...layout, noNav: true };
  }else if (pathname === '/search'){
    return {...layout, noNav:true , header:{title: "친구 찾기"}, hasBack:true}
  }
  return layout;
};

export default useLayout;
