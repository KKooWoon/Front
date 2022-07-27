import styled from 'styled-components';

export const SlideWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap:12px;
  & div{
    flex: 0 0 auto;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;
