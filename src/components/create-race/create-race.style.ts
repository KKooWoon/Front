import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 40px 20px 0px;
  & h1 {
    font-weight: 700;
    font-size: 20px;
    color: #101010;
  }
`;
export const RaceInputWrapper = styled.div`
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

export const RaceInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px solid var(--primary-purple);
  height: 54px;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 50px;
  color: #101010;
  :focus {
    outline: none;
  }
`;

export const DetailInputWrapper = styled.div`
  height: 123px;
  border: 1px solid #d4d2d9;
  border-radius: 20px;
  margin-top: 18px;
  margin-bottom: 50px;
  padding: 15px 17px;
  position: relative;
  display: flex;
  justify-content: flex-end;
  & p {
    font-weight: 400;
    font-size: 14px;
    color: #adacb1;
    position: absolute;
    transform: translateY(76px);
  }
`;

export const DetailInput = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  font-family: 'SpoqaHanSansNeo';
  font-weight: 400;
  font-size: 16px;
  resize: none;
  :focus {
    outline: none;
  }
`;

export const PurposeBtn = styled.button`
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  border: 2px solid #6732ff;
  border-radius: 20px;
  margin-top: 18px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  font-weight: 400;
  font-size: 16px;
`;

export const PeriodWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 18px;
  margin-bottom: 50px;
  & p {
    margin: 0px 5px;
    font-weight: 500;
    font-size: 16px;
    color: #565658;
  }
  & button {
    font-weight: 400;
    font-size: 16px;
    width: 50%;
    height: 50px;
    background-color: #ffffff;
    border: 2px solid #6732ff;
    border-radius: 20px;
    color: #adacb1;
  }
`;

export const PeriodInput = styled.input`
  text-align: center;
  width: 50%;
  height: 50px;
  border: 2px solid #6732ff;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 400;
  color: #101010;
  :focus {
    outline: none;
  }
`;

export const OpenWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 18px;
  & button {
    font-weight: 400;
    font-size: 16px;
    width: 50%;
    height: 50px;
    border-radius: 20px;
    background-color: #f3f2f4;
    color: #adacb1;
  }
  button + button {
    margin-left: 17px;
  }
`;
