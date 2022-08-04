import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

export const ImageWrapper = styled.section`
  position: relative;
  border-radius: 50%;
  margin-right: 18px;
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: var(--primary-purple);
    position: absolute;
    top: 40px;
    right: 0;
  }
  & img {
    width: 60px;
    height: 60px;
  }
`;

export const TextSection = styled.div`
  & h3 {
    font-weight: 700;
    font-size: 20px;
    color: #101010;
    margin-bottom: 9px;
  }
  & span {
    padding: 4px 8px;
    border-radius: 47px;
    border: 1px solid var(--primary-purple);
    font-weight: 500;
    font-size: 14px;
    color: var(--primary-purple);
  }
  & div {
    display: flex;
    gap: 6px;
    align-items: center;
  }
  & p {
    flex: 1;
    font-weight: 500;
    font-size: 14px;
    color: var(--gray-03);
    text-overflow: ellipsis;
    overflow-x: hidden;
    white-space: nowrap;
    max-width: calc(100vw - 178px);
  }
`;

export const BodySpecWrapper = styled.div`
  text-align: center;
  border-radius: 20px;
  background-color: #fff;
  padding: 23px 14px 14px 14px;
  & section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding-bottom: 10px;
    & h3 {
      font-weight: 500;
      font-size: 14px;
      color: #101010;
    }
    & span {
      font-weight: 500;
      font-size: 20px;
      color: var(--primary-purple);
    }
  }
`;

export const FatAndMuscle = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 10px;
  & div {
    & h3 {
      font-weight: 500;
      font-size: 14px;
      color: var(--gray-04);
      margin-bottom: 6px;
    }
    & span {
      font-weight: 500;
      font-size: 14px;
      color: var(--gray-04);
    }
  }
`;
