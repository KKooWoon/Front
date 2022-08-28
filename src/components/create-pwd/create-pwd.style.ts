import styled from 'styled-components';

export const Wrapper = styled.div`
  & h1 {
    padding-top: 50px;
    font-weight: 700;
    font-size: 20px;
    color: #101010;
  }
  & p {
    padding-top: 13px;
    font-weight: 500;
    font-size: 14px;
    color: #ff0000;
  }
`;
export const PwdInputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  & svg {
    position: absolute;
    right: 20px;
  }
`;

export const PwdInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px solid var(--primary-purple);
  height: 54px;
  font-size: 16px;
  font-weight: 400;
  color: #101010;
  :focus {
    outline: none;
  }
`;
