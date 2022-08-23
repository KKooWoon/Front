import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0px 20px 20px 20px;
  width:100%;
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
  width: 100%;
  height:209px;
  background-color: var(--purple-sub01);
  border-radius: 20px;
  position: relative;
  & .wrapper {
    position:absolute;
    bottom:16px;
  }
  & svg {
    position: absolute;
    right:0;
    transform: translate(-15px, 0px);
  }
  & span {
    margin-right:5px;
    & svg {
      position:relative;
      transform:translate(0px, 2px);
    }
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
  & h3 {
    max-width: 95%;
    font-weight: 500;
    font-size: 18px;
    color: #6732ff;
    padding-bottom: 5px;
    text-overflow: ellipsis;
    overflow: hidden;
    /* white-space: nowrap; */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
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
  width:  100%;
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
