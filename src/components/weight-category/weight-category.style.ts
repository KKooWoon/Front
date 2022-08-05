import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  & h1 {
    font-family: 'SpoqaHanSansNeo';
    font-weight: 500;
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
    margin-left: 32px;
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
  & h1 {
    font-family: 'SpoqaHanSansNeo';
    font-weight: 500;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #101010;
  }
  & input {
    margin: 0px 5px 0px 27px;
    font-family: 'SpoqaHanSansNeo';
    font-weight: 400;
    font-size: 16px;
    width: 98px;
    height: 50px;
    border: 1px solid #d4d2d9;
    border-radius: 20px;
    text-align: center;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 18px;
  margin-bottom: 50px;
  & button {
    margin-right: 19px;
    background: #f1edff;
    border-radius: 20px;
    width: 158px;
    height: 54px;
    font-family: 'SpoqaHanSansNeo';
    font-weight: 500;
    font-size: 16px;
    color: #6732ff;
    text-align: center;
  }
`;
