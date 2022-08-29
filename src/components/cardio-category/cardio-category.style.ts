import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  margin-top: 50px;
  & p {
    margin-right: 32px;
    font-family: 'SpoqaHanSansNeo';
    font-weight: 500;
    font-size: 18px;
    display: flex;
    align-items: center;
    color: #101010;
  }
`;

export const CategoryInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px solid var(--primary-purple);
  height: 54px;
  font-size: 16px;
  font-weight: 400;
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

export const SetInputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 22px;
  margin-bottom: 50px;
  & h1 {
    margin-right: 16px;
    font-family: 'SpoqaHanSansNeo';
    font-weight: 500;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #101010;
  }
  & input {
    margin-left: 16px;
    font-family: 'SpoqaHanSansNeo';
    font-weight: 400;
    font-size: 16px;
    width: 98px;
    height: 50px;
    border: 1px solid #d4d2d9;
    border-radius: 20px;
    text-align: center;
  }
  & p {
    margin-left: 8px;
    font-family: 'SpoqaHanSansNeo';
    font-weight: 500;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #101010;
  }
`;
