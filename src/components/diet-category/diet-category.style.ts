import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  margin-top: 50px;
  & h1 {
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
  margin-bottom: 50px;
  & span {
    position: absolute;
    top: 14px;
    right: 0;
    font-weight: 400;
    font-size: 16px;
    color: var(--gray-03);
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 18px;
  & h1 {
    font-family: 'SpoqaHanSansNeo';
    font-weight: 400;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #101010;
  }
  & input {
    margin-left: 19px;
    padding-left: 17px;
    font-family: 'SpoqaHanSansNeo';
    font-weight: 400;
    font-size: 16px;
    width: 286px;
    height: 50px;
    border: 2px solid #6732ff;
    border-radius: 20px;
  }
`;

export const SetInputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 22px;
  & h1 {
    font-family: 'SpoqaHanSansNeo';
    font-weight: 500;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #101010;
  }
  & input {
    margin: 0px 8px 0px 12px;
    font-family: 'SpoqaHanSansNeo';
    font-weight: 400;
    font-size: 16px;
    width: 88px;
    height: 50px;
    border: 1px solid #d4d2d9;
    border-radius: 20px;
    text-align: center;
  }
  & p {
    margin-right: 18px;
    font-family: 'SpoqaHanSansNeo';
    font-weight: 500;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #101010;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 18px;
  margin-bottom: 50px;
  & button {
    background: #f1edff;
    border-radius: 20px;
    width: 50%;
    height: 54px;
    font-family: 'SpoqaHanSansNeo';
    font-weight: 500;
    font-size: 16px;
    color: #6732ff;
    text-align: center;
  }
  button + button {
    margin-left: 19px;
  }
`;
