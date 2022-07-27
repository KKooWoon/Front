import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 34px 20px 0px 20px;
  & pre {
    white-space: pre-wrap;
    font-weight: 500;
    font-size: 14px;
    color: #d4d3d9;
    :first-child {
      color: var(--primary-purple);
      font-weight: 700;
      font-size: 22px;
      margin-bottom: 10px;
    }
  }
`;

export const NextButton = styled.button`
  width: 100%;
  padding: 20px 0px;
  font-weight: 700;
  font-size: 18px;
  color: white;
  background-color: var(--primary-purple);
`;
export const ButtonSection = styled.div`
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const ContentsWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const NaviWrapper = styled.section`
  display:flex;
  gap:20px;
  justify-content:center;
  margin-bottom:28px;
  & div{
    width:12px;
    height:12px;
    border-radius:50%;
    background-color:var(--purple-sub01);
    &.active {
      background-color:var(--primary-purple);
    }
  }
`
export const ImageSection = styled.section`
  position: absolute;
  left: 50%;
  top: 50%;
  text-align:center;
  transform: translate(-50%, -50%);
  & div{
    margin-top:58px;
    width:275px;
    height:295px;
    border-radius:50%;
    background:var(--bg-linear03);
    & img{
      width:150px;
      height:272px;
      transform:translateY(-10%);
    }
  }
`