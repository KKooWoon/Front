import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  & p {
    margin-right: 32px;
    font-family: 'SpoqaHanSansNeo';
    font-weight: 400;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #101010;
  }
  & select {
    font-family: 'SpoqaHanSansNeo';
    font-weight: 400;
    font-size: 16px;
    text-align-last: center;
    color: #d4d2d9;
    width: 250px;
    height: 50px;
    border: 1px solid #d4d2d9;
    border-radius: 20px;
    background-color: #ffffff;
  }
`;

export const SetInputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 22px;
  & h3 {
    margin-right: 23px;
    font-family: 'SpoqaHanSansNeo';
    font-weight: 500;
    font-size: 16px;
    color: #101010;
  }
  & input {
    margin-right: 8px;
    font-family: 'SpoqaHanSansNeo';
    font-weight: 400;
    font-size: 16px;
    width: 98px;
    height: 50px;
    border: 1px solid #d4d2d9;
    border-radius: 20px;
    text-align: center;
  }
  & p {
    margin-right: 27px;
    font-family: 'SpoqaHanSansNeo';
    font-weight: 500;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #101010;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 18px;
  margin-bottom: 50px;
  & button {
    background: #f1edff;
    border-radius: 20px;
    width: 50%;
    height: 54px;
    font-family: 'SpoqaHanSansNeo';
    font-weight: 500;
    font-size: 16px;
    color: #6732ff;
    text-align: center;
  }

  button + button {
    margin-left: 19px;
  }
`;
