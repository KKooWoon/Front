import styled from 'styled-components';

export const Wrapper = styled.div`
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  width: 100%;
  height: 100%;
  background: #ffffff;
  margin-top: 28px;
  padding: 21px 20px;
  & h1 {
    font-family: 'SpoqaHanSansNeo';
    font-weight: 700;
    font-size: 18px;
    display: flex;
    align-items: center;
    color: #101010;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 18px;
  & p {
    margin-left: 6px;
    margin-right: 18px;
    font-family: 'SpoqaHanSansNeo';
    font-weight: 400;
    font-size: 16px;
    align-items: center;
    color: #101010;
  }

  & button {
    width: 16px;
    height: 16px;
    background-color: #ffffff;
    border: 2px solid #6732ff;
    border-radius: 4px;
  }
`;
