import React from 'react';
import { LayoutHeader } from './layout.style';

const Header = ({title}:{title?:string}) => {
  return (
    <LayoutHeader>{title}</LayoutHeader>
  )
}


export default Header;