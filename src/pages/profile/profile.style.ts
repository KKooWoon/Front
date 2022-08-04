import styled from 'styled-components';

export const PageWrapper = styled.div`
  & .icon {
    position:fixed;
    right:11px;
    top :22px;
    z-index:1001;
  }
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const UserInfoSection = styled.section`
  padding: 15px;
`;
export const SlideSection = styled.section`
  background-color: white;
  flex: 1;
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.1);
  border-radius: 20px 20px 0px 0px;
  padding: 20px;
  & h2 {
    font-weight:700;
    font-size:18px;
    margin-bottom:16px;
  }
`;

export const GridWrapper = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 30px 0px 20px 0px;
  text-align:center;
  border-radius: 20px;
  background-color: var(--purple-sub01);
  padding: 16px 0px;
  row-gap:8px;
  & h3{
    font-weight:500;
    font-size:14px;
    color: var(--gray-03);
  }

  & span {
    font-weight:500;
    font-size:18px;
  }
`