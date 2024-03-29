import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  margin-left: 20px;
  width:100%;
  & span {
    display: inline-block;
    padding-top: 30px;
    padding-bottom: 12px;
    font-family: 'SpoqaHanSansNeo';
    font-weight: 700;
    font-size: 16px;
    color: #6732ff;
  }
  span + span {
    color: #101010;
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  border-radius: 44px;
  background-color: #f3f2f4;
  height: 40px;
  margin-top: 20px;
  margin-right: 20px;
  & svg {
    position: absolute;
    transform: translate(12px, 10px);
  }
  & input {
    font-weight: 400;
    font-size: 14px;
    width: 90%;
    position: absolute;
    transform: translate(41px, 11px);
    background-color: transparent;
    border: none;
    outline: none;
  }
`;

export const MyRaceWrapper = styled.div`
  padding: 17px 12px 15px 12px;
  width: 160px;
  height:172px;
  background-color: var(--purple-sub01);
  border-radius: 20px;
  position: relative;
  & .wrapper {
    position:absolute;
    bottom:16px;
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
  & h3 {
    display:-webkit-box;
    font-weight: 500;
    font-size: 18px;
    color: #6732ff;
    padding-bottom: 5px;
    text-overflow: ellipsis;
    overflow: hidden;
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
