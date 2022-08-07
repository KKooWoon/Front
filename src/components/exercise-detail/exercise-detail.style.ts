import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-left: 20px;
  margin-right: 20px;
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
  margin-bottom: 50px;
  & button {
    width: 50%;
    height: 54px;
    background-color: #f1edff;
    border-radius: 20px;
    font-family: 'SpoqaHanSansNeo';
    font-weight: 500;
    font-size: 16px;
    color: #6732ff;
  }

  button + button {
    margin-left: 13px;
  }
`;
