import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const NoResult = styled.div`
  font-weight: 500;
  color: var(--gray-04);
  text-align: center;
  width: 100%;
  height: 115px;
  line-height: 115px;
`;

export const ItemWrapper = styled.div<{ active?: boolean }>`
  display: inline-block;
  padding: 8px 12px 12px 12px;
  width: 153px;
  background-color: ${props => (props.active ? 'var(--primary-purple)' : 'var(--gray-02)')};
  border-radius: 20px;
  position:relative;
  & svg {
    position:absolute;
    transform:translate(73px, -9px)
  }
  & p {
    font-size: 12px;
    font-weight: 500;
    color: ${props => (props.active ? 'rgba(255, 255, 255, 0.8)' : '#fff')};
    padding-bottom: 13px;
  }
  & h3 {
    font-weight: 700;
    font-size: 18px;
    color: white;
    padding-bottom: 6px;
  }
  & div {
    display: inline-block;
    padding: 4px 8px;
    background-color: ${props => (props.active ? 'var(--primary-mint)' : '#fff')};
    border-radius: 43px;
    color: ${props => (props.active ? 'var(--primary-purple)' : 'var(--gray-02)')};
    font-size: 14px;
    font-weight: 500;
  }
`;

export const CustomButton = styled.button`
  border-radius: 20px;
  background-color: var(--purple-sub01);
  color: var(--primary-purple);
  width: 100%;
  padding: 18px 0px;
  font-weight: 500;
  font-size: 16px;
  margin-top: 16px;
`;

export const DetailWrapper = styled.div<{ active?: boolean }>`
  margin-top: 18px;
  display: inline-block;
  padding: 8px 12px 12px 12px;
  width: 138px;
  background-color: #fff;
  border: 2px solid ${props => (props.active ? 'var(--primary-purple)' : 'var(--gray-02)')};
  border-radius: 20px;
  & p {
    font-size: 12px;
    font-weight: 500;
    color: ${props => (props.active ? 'var(--primary-purple)' : 'var(--gray-02)')};
    text-align: right;
    padding-bottom: 13px;
  }
  & h3 {
    font-weight: 700;
    font-size: 18px;
    color: ${props => (props.active ? 'var(--primary-purple)' : 'var(--gray-02)')};
    padding-bottom: 6px;
  }
  & div {
    display: inline-block;
    padding: 4px 8px;
    background-color: ${props => (props.active ? 'var(--primary-purple)' : 'var(--gray-02)')};
    border-radius: 43px;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
  }
`;

export const ProfileWrapper = styled.div`
  display: inline-block;
  padding: 8px 12px 12px 12px;
  width: 178px;
  background-color: var(--purple-sub01);
  border-radius: 20px;
  & p {
    font-size: 16px;
    font-weight: 500;
    color: #ac8eff;
    text-align: right;
    padding-bottom: 13px;
  }
  & h3 {
    font-weight: 700;
    font-size: 20px;
    color: var(--primary-purple);
    padding-bottom: 6px;
  }
  & div {
    display: inline-block;
    padding: 4px 8px;
    background-color: #ac8eff;
    border-radius: 43px;
    color: white;
    font-size: 14px;
    font-weight: 500;
  }
`;
