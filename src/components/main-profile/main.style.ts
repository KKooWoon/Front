import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 295px;
  padding: 12px 0px;
  background: #e5e0fa;
  z-index:0;
`;

export const Balloon = styled.div`
  display: inline-block;
  position: relative;
  background: #ffffff;
  width: 270px;
  margin: 0 auto 10px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  padding: 15px 20px;
  & h1 {
    font-weight: 700;
    color: var(--primary-purple);
    font-size: 26px;
    margin-bottom: 4px;
  }
  & span {
    font-weight: 500;
    color: var(--gray-04);
    font-size: 15px;
  }
  &::after {
    content: '';
    position: absolute;
    height: 50px;
    width: 50px;
    border-radius: 20px;
    z-index: -1;
    background: #e5e0fa;
    bottom: -20px;
    left: 188px;
  }
  &::before {
    content: '';
    position: absolute;
    height: 50px;
    width: 50px;
    border-radius: 35px;
    z-index: -1;
    background: #fff;
    bottom: -15px;
    left: 165px;
  }
`;

export const ImageWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--bg-linear02);
  width: 160px;
  height: 160px;
  border-radius: 50%;
  right: 18px;
  bottom: 20px;
  & img {
    width:105px;
    height:183px;
    margin-bottom: 22px;
  }
`;
export const UserInfo = styled.div`
  padding: 20px;
  & h1 {
    font-size: 28px;
    font-weight: 700px;
    color: var(--primary-purple);
  }
  & p {
    font-size: 16px;
    color: var(--primary-purple);
    font-weight: 700;
  }
`;

export const ProgressWrapper = styled.div`
  width: 160px;
  height: 6px;
  border-radius:10px;
  background-color:var(--gray-00);
  margin: 4px 0px 12px 0px;
  & div{
    height:100%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color: var(--primary-purple);
  }
`;

export const Button = styled.button`
  display:flex;
  align-items:center;
  padding:8px;
  color:white;
  font-weight:400;
  font-size:15px;
  background-color:var(--purple-sub02);
  border-radius:10px;
  margin-left:24px;
  & span{
    margin-left:8px;
  }
`;

export const AlertWrapper = styled.div`
  position:absolute;
  top:32px;
  right: 20px;
`