import styled, { keyframes } from 'styled-components';

const scaleUp = keyframes`
  0%{
    transform:scale(0.2);
  }
  100%{
    transform:scale(1);
  }
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
export const OutterBox = styled.div`
  width: 100%;
  height: 100%;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color: #e3e3ff;
  animation: ${scaleUp} 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;
export const InnerBox = styled.div`
  width: 250px;
  height: 250px;
  background: linear-gradient(180deg, rgba(250, 250, 250, 0.6) 0%, rgba(248, 248, 248, 0) 100%);
  border-radius: 50%;
  animation: ${scaleUp} 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation-delay: 0.7s;
`;

export const ImageWrapper = styled.div`
  position: absolute;
  display: inline-block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  & img {
    display: block;
    margin: auto;
    padding-bottom: 20px;
  }
`;
