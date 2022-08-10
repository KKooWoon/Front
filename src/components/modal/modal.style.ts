import styled, { css, keyframes } from 'styled-components';

const slideTop = keyframes`
0% {
    opacity: 0;
    transform: translateY(300px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
const scaleCenter = keyframes` 
  0% {
    transform: scaleY(0);
    opacity: 1;
  }
  100% {
    transform: scaleY(1);
    opacity: 1;
  }
`;
export const ModalWrapper = styled.div`
  position: fixed;
  z-index: 10005;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

export const ModalBackground = styled.div<{ position: string }>`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: rgba(81, 81, 81, 0.7);
  display: flex;
  ${props =>
    props.position === 'center'
      ? css`
          justify-content: center;
          align-items: center;
        `
      : css`
          flex-direction: column-reverse;
        `}
`;
export const UnderInner = styled.div`
  background-color: #fff;
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  animation: ${slideTop} 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  .menu {
    padding: 22px 20px;
    position: relative;
    & svg {
      position: absolute;
      right: 20px;
    }
    & section {
      padding-top: 20px;
      .item {
        padding: 28px 0px;
        text-align: center;
        font-size: 18px;
        font-weight: 500;
        color: var(--black);
      }
      .item + .item {
        border-top: 0.5px solid var(--gray-02);
      }
    }
  }
  .select {
    position: relative;
    padding: 22px 20px;
    & section {
      padding-top: 20px;
    }
    & svg {
      position: absolute;
      right: 20px;
    }
  }
  & button {
    width: 100%;
    text-align: center;
    padding: 20px 0px;
    background-color: var(--primary-purple);
    font-weight: 700;
    font-size: 18px;
    color: #fff;
  }
`;

export const InterestWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

export const CenterInner = styled.div`
  background-color: #fff;
  width: 85%;
  max-width: 400px;
  border-radius: 20px;
  animation: ${scaleCenter} 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  .alert-modal {
    height: 185px;
    display: flex;
    flex-direction: column;
    & article {
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;
      & pre {
        text-align: center;
      }
    }
    & section {
      width: 100%;
      text-align: center;
      padding: 17px 0px;
      background-color: var(--primary-purple);
      color: #fff;
      font-size: 16px;
      font-weight: 500;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
    }
  }
  .input {
    & span {
      display: block;
      width: 100%;
      text-align: center;
      font-weight: 400;
      font-size: 12px;
      color: #ff0000;
      min-height: 18px;
      margin-top: 8px;
    }
    & h4 {
      font-weight: 400;
      font-size: 16px;
      color: var(--black);
      margin-bottom: 25px;
    }
    & input {
      width: 100%;
      text-align: center;
      font-size: 18px;
      font-weight: 500;
      padding-bottom: 12px;
      color: var(--black);
      border: none;
      border-bottom: 2px solid var(--primary-purple);
      &.error {
        border-bottom: 2px solid #ff0000;
        caret-color: #ff0000;
      }
    }
    & section {
      width: 100%;
      text-align: center;
      padding: 17px 0px;
      background-color: var(--primary-purple);
      color: #fff;
      font-size: 16px;
      font-weight: 500;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
    }
  }
`;

export const TwoButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  & span {
    width: 100%;
    text-align: center;
    color: white;
    padding: 18px 0px;
    &:first-child {
      background-color: var(--gray-02);
      border-bottom-left-radius: 20px;
    }
    &:last-child {
      background-color: var(--primary-purple);
      border-bottom-right-radius: 20px;
    }
  }
`;
