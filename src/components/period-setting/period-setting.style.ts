import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  margin-top: 50px;
  & h1 {
    font-family: 'SpoqaHanSansNeo';
    font-weight: 700;
    font-size: 18px;
    display: flex;
    align-items: center;
    color: #101010;
  }
`;

export const PeriodWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 18px;
  & p {
    font-family: 'SpoqaHanSansNeo';
    margin: 0px 5px;
    font-weight: 500;
    font-size: 16px;
    color: #565658;
  }
  & button {
    font-family: 'SpoqaHanSansNeo';
    font-weight: 400;
    font-size: 16px;
    width: 50%;
    height: 50px;
    background-color: #ffffff;
    border: 2px solid #6732ff;
    border-radius: 20px;
    color: #101010;
  }
`;

export const RepeatWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 18px;
  & button {
    font-family: 'SpoqaHanSansNeo';
    font-weight: 500;
    font-size: 14px;
    width: 42px;
    height: 42px;
    background-color: #f3f2f4;
    border-radius: 31px;
    color: #adacb1;
  }
  button + button {
    margin-left: 2%;
  }
`;

export const ModifyDetailBtn = styled.button`
  margin-top: 16px;
  background: #f1edff;
  border-radius: 20px;
  width: 100%;
  height: 54px;
  font-family: 'SpoqaHanSansNeo';
  font-weight: 500;
  font-size: 16px;
  color: #6732ff;
  text-align: center;
`;
