import styled from 'styled-components';

export const LayoutWrapper = styled.main`
  width: 100%;
  height: 100%;
  max-width: 480px;
`;

export const LayoutHeader = styled.header`
  max-width: 480px;
  top: 0;
  width: 100%;
  height: 60px;
  box-shadow: 0px 2px 4px rgba(203, 203, 203, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.6s ease-in-out;
  position: fixed;
  z-index: 1000;
  background: white;
`;
export const LayoutNavbar = styled.nav`
  position: fixed;
  max-width: 480px;
  width: 100%;
  bottom: 0;
  height: 60px;
  background-color: white;
  box-shadow: 0px -2px 4px rgba(203, 203, 203, 0.25);
`;
