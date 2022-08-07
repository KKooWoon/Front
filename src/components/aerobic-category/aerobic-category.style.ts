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
  margin-bottom: 50px;
  & h1 {
    margin-right: 16px;
    font-family: 'SpoqaHanSansNeo';
    font-weight: 500;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #101010;
  }
  & input {
    margin-left: 16px;
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
    margin-left: 8px;
    font-family: 'SpoqaHanSansNeo';
    font-weight: 500;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #101010;
  }
`;
