import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 18px;
  margin-bottom: 50px;
`;

export const NoResult = styled.div`
  font-weight: 500;
  color: var(--gray-04);
  text-align: center;
  width: 100%;
  height: 115px;
  line-height: 115px;
`;

export const ItemWrapper = styled.div`
  position:relative;
  width: 138px;
  height: 103px;
  background-color: #ffffff;
  border: 2px solid #6732ff;
  border-radius: 20px;
  font-family: 'SpoqaHanSansNeo';
  color: #6732ff;
  & h1 {
    padding-top: 13px;
    padding-left: 12px;
    font-weight: 700;
    font-size: 18px;
  }
  & p {
    padding-top: 8px;
    padding-left: 91px;
    font-weight: 500;
    font-size: 12px;
  }
`;

export const HashTag = styled.div`
  width: 80px;
  background-color: #6732ff;
  color: #ffffff;
  font-weight: 500;
  font-size: 14px;
  margin-left: 11px;
  margin-top: 6px;
  border-radius: 43px;
  padding: 2px 8px;
`;
