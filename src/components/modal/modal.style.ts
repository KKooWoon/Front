import styled, { css } from 'styled-components';

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

export const CenterInner = styled.div`
  background-color: #fff;
  width: 85%;
  max-width: 400px;
  border-radius: 20px;
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

export const UnderInner = styled.div``;
