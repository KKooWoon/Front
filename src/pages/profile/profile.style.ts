import styled from 'styled-components';

export const PageWrapper = styled.div`
  & svg {
    position:fixed;
    right:11px;
    top :22px;
    z-index:1001;
  }
  width: 100%;
  height: 100%;
  background-color: #e9e9e9;
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
`;