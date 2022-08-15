import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-block;
  margin-top: 12px;
  margin-left: 20px;
  & h1 {
    padding-top: 18px;
    padding-bottom: 18px;
    font-family: 'SpoqaHanSansNeo';
    font-weight: 700;
    font-size: 16px;
    color: #101010;
  }
  button + h1 {
    margin-top: 50px;
  }
`;

export const AddRaceBtn = styled.button`
  width: 160px;
  height: 209px;
  background-color: #f3f2f4;
  border-radius: 20px;
  & p {
    margin-top: 12px;
    font-weight: 500;
    font-size: 14px;
    color: #adacb1;
  }
`;
