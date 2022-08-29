import styled from 'styled-components';

export const UserListWrapper = styled.div`
  & h3 {
    font-weight: 500;
    font-size: 16px;
    color: var(--gray-04);
    margin-top: 30px;
  }
`;

export const UserBox = styled.div`
  border-radius: 20px;
  background-color: var(--purple-sub01);
  padding: 12px 15px;
  display: flex;
  align-items: center;
  margin-top: 18px;
  & img {
    width: 50px;
    height: 50px;
    margin-right: 12px;
  }
  & section {
    & span {
      font-weight: 500;
      font-size: 16px;
      color: #101010;
      margin-bottom: 4px;
    }
    & p {
      max-width: calc(100vw - 140px);
      text-overflow: ellipsis;
      overflow-x: hidden;
      white-space: nowrap;
      font-size:14px;
      color:var(--gray-04);
    }
  }
`;
