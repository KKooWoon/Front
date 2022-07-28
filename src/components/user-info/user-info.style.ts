import styled, { keyframes } from 'styled-components';

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
  :disabled {
    background-color: var(--gray-02);
  }
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
  transform: translate(-50%, -190%);
  width: 90%;
`;

export const NaviWrapper = styled.section`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 28px;
  & div {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: var(--purple-sub01);
    &.active {
      background-color: var(--primary-purple);
    }
  }
`;
export const ImageSection = styled.section`
  position: absolute;
  left: 50%;
  top: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  & div {
    margin-top: 58px;
    width: 275px;
    height: 295px;
    border-radius: 50%;
    background: var(--bg-linear03);
    & img {
      width: 150px;
      height: 272px;
      transform: translateY(-10%);
    }
  }
`;

export const NicknameInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px solid var(--primary-purple);
  height: 54px;
  font-size: 24px;
  font-weight: 700;
  padding-right: 50px;
  :focus {
    outline: none;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  & span {
    position: absolute;
    top: 14px;
    right: 0;
    font-weight: 400;
    font-size: 16px;
    color: var(--gray-03);
  }
`;

export const SelectBox = styled.div`
  width: 100%;
  border: 2px solid var(--primary-purple);
  border-radius: 20px;
  padding: 15px 0px 15px 17px;
  .isGrey{
    color:var(--gray-02);
  }
`;
export const SelectBoxWrapper = styled.div`
  position: relative;
  & svg {
    position: absolute;
    right: 20px;
    top: 25px;
  }
`;

const slideBottom = keyframes`
  0%{transform:translateY(-130px)}
  100%{transform:translateY(0px)}
`;

export const SelectList = styled.ul`
  position: relative;
  width: 100%;
  padding: 12px;
  height: 220px;
  & li {
    padding: 8px;
    :nth-child(n + 2) {
      border-top: 1px solid var(--gray-02);
    }
  }
  animation: ${slideBottom} 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;
