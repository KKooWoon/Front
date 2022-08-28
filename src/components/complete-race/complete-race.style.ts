import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  place-content: center;
  & h1 {
    text-align: center;
    font-weight: 700;
    font-size: 20px;
    color: #101010;
  }
  h1 + h1 {
    margin-top: 8px;
    margin-bottom: 25px;
    font-weight: 400;
    font-size: 16px;
    color: #101010;
  }
  & div {
    align-items: center;
  }
`;

export const ImageSection = styled.section`
  margin-bottom: 52px;
  justify-content: center;
  & div {
    background: var(--bg-linear03);
    width: 248px;
    height: 249px;
    border-radius: 50%;
    text-align: center;
    & img {
      transform: translateY(-17px);
    }
  }
`;

export const InviteCodeWrapper = styled.div`
  width: 251px;
  height: 48px;
  background-color: #f9f9f9;
  border-radius: 30px;
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  & div {
    width: 89px;
    height: 36px;
    background-color: #f1edff;
    border-radius: 59px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 7px;
    margin-right: 30px;
    font-weight: 500;
    font-size: 16px;
    color: #ac8eff;
  }
  & h1 {
    font-weight: 500;
    font-size: 16px;
    color: #101010;
  }
`;
