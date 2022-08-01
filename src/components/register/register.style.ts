import styled from 'styled-components';

export const RegisterWrapper = styled.div`
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  width: 100%;
  height: 100%;
  background: #ffffff;
  margin-top: 28px;
  padding: 18px 20px;

  & title {
    font-weight: 700;
    font-size: 18px;
    display: flex;
    color: #101010;
  }

  & input {
    font-family: 'SpoqaHanSansNeo';
    font-weight: 400;
    font-size: 16px;
    outline: none;
    display: flex;
    color: #101010;
    width: 100%;
    margin-top: 18px;
    margin-bottom: 50px;
    border: none;
    border-bottom: 2px solid #6732ff;
    padding-bottom: 14px;
  }
`;

export const ButtonWrapper = styled.div`
  align-items: center;
  margin-top: 18px;
  margin-bottom: 18px;
  & button {
    margin: 0px;
    width: 16px;
    height: 16px;
    background: #ffffff;
    border: 2px solid #6732ff;
    border-radius: 4px;
  }
  & span {
    margin-left: 6px;
    margin-right: 18px;
    font-family: 'SpoqaHanSansNeo'
    font-weight: 400;
    font-size: 16px;
    color: #101010;
  }
`;

export const WeightStartWrapper = styled.div`
  display: flex;
  align-items: center;
  & span {
    margin: 0px;
    font-weight: 500;
    font-size: 16px;
    color: #101010;
  }
  & input {
    margin: 0px 5px 0px 27px;
    padding: 0px;
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

export const WeightEndWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 18px;
  margin-bottom: 50px;
  & button {
    background: #f1edff;
    border-radius: 20px;
    width: 45%;
    height: 54px;
    font-family: 'SpoqaHanSansNeo';
    font-weight: 500;
    font-size: 16px;
    color: #6732ff;
    text-align: center;
  }
`;
