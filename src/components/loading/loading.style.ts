import styled, { keyframes } from 'styled-components';
const spin = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;
export const SpinnerWarpper = styled.div`
  width:100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
`
export const Spinner = styled.div`
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  border: 2px solid var(--gray-01);
  border-top: 3px solid var(--primary-purple);
  animation: ${spin} 1s linear infinite;
`;
