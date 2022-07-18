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
  border-bottom: 1px solid var(--gray-02);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.6s ease-in-out;
  position: fixed;
  z-index: 1000;
  background: white;
  font-weight: 700;
  font-size:20px;
  color: var(--black);
`;
export const LayoutNavbar = styled.nav`
  position: fixed;
  max-width: 480px;
  width: 100%;
  bottom: 0;
  height: 70px;
  background-color: var(--gray-00);
  & ul {
    padding: 11px 26px;
    margin: 0;
    display: flex;
    justify-content: space-between;
    list-style: none;
  }
`;

export const NavBarItem = styled.div`
  width: 52px;
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    text-align: center;
    font-weight: 400;
    font-size: 11px;
  }
`;

export const BackButtonWrapper = styled.div`
  margin: 0;
  width: 16px;
  height: 7px;
  position: fixed;
  top: 20px;
  left: 16px;
  z-index: 1001;
  cursor: pointer;
`