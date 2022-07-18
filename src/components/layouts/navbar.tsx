import React, { useMemo } from 'react';
import { LayoutNavbar, NavBarItem } from './layout.style';
import {ReactComponent as HomeIcon} from '@assets/icons/home.svg';
import {ReactComponent as ProfileIcon} from '@assets/icons/profile.svg';
import {ReactComponent as RaceIcon} from '@assets/icons/race.svg';
import {ReactComponent as UploadIcon} from '@assets/icons/upload.svg';
import { Link } from 'react-router-dom';
const NavBar = () =>{

  const NavItem = useMemo(()=>[
    {
      path:"/main",
      icon: <HomeIcon />,
      text: "홈화면"
    },
    {
      path:"/upload",
      icon: <UploadIcon />,
      text: "등록"
    },
    {
      path:"/race",
      icon: <RaceIcon />,
      text: "레이스"
    },
    {
      path:"/profile",
      icon: <ProfileIcon />,
      text: "마이페이지"
    }
  ],[])
  return (
    <LayoutNavbar>
      <ul>
        {
          NavItem.map((v,i) => (
            <Link key={i} to={v.path}>
              <NavBarItem>
                <li>{v.icon}</li>
                <span>{v.text}</span>
              </NavBarItem>
            </Link>
          ))
        }
      </ul>
    </LayoutNavbar>
  )
}

export default NavBar;