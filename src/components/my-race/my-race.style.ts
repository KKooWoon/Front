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

export const MyRaceWrapper = styled.div`
  display: inline-block;
  padding: 17px 12px 15px 12px;
  width: 160px;
  background-color: var(--purple-sub01);
  border-radius: 20px;
  position: relative;
  & svg {
    position: absolute;
    transform: translate(126px, 0px);
  }
  & p {
    font-size: 16px;
    font-weight: 500;
    color: #ac8eff;
    text-align: left;
  }
  p + p + h3 {
    padding-top: 67px;
  }
  p + h3 {
    padding-top: 91px;
  }
  & h3 {
    font-weight: 500;
    font-size: 18px;
    color: #6732ff;
    padding-bottom: 5px;
  }
  & div {
    display: inline-block;
    padding: 5px 8px;
    background-color: #ac8eff;
    border-radius: 27px;
    color: white;
    font-size: 16px;
    font-weight: 500;
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
