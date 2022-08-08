import styled from 'styled-components';

export const ResultWrapper = styled.div`
  & h3 {
    margin-top: 40px;
    font-weight: 500;
    font-size: 16px;
    color: var(--gray-04);
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 25px;
  align-items:center;
  & section {
    display: flex;
    align-items: center;
    & img {
      width: 50px;
      height: 50px;
      margin-right: 12px;
    }
    & span{
      font-weight:500;
      font-size:16px;
      color:#101010;
    }
  }
`;
