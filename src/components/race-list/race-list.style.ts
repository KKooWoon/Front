import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  & h4 {
    font-weight:700;
    font-size:16px;
    color:var(--gray-04);
    margin-bottom:12px;
  }
`;

export const NoResult = styled.pre`
  font-weight: 500;
  color: var(--gray-04);
  text-align: center;
  width: 100%;
  white-space:pre-wrap;
`;
export const NoResultWrapper = styled.div`
  width:100%;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
`

export const ItemWrapper = styled.div<{ active?: boolean }>`
  display: inline-block;
  padding: 8px 12px 12px 12px;
  width: 153px;
  background-color: ${props => (props.active ? 'var(--primary-purple)' : 'var(--gray-02)')};
  border-radius: 20px;
  position: relative;
  & svg {
    position: absolute;
    transform: translate(73px, -9px);
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

export const MyRaceWrapper = styled.div`
  padding: 17px 12px 15px 12px;
  width: 160px;
  background-color: var(--purple-sub01);
  border-radius: 20px;
  & p {
    font-size: 16px;
    font-weight: 500;
    color: #ac8eff;
    text-align: left;
    padding-bottom: 91px;
  }
  & h3 {
    font-weight: 500;
    font-size: 18px;
    color: #6732ff;
    padding-bottom: 5px;
  }
  & div {
    display: inline-block;
    padding: 5px 8px;
    background-color: #ac8eff;
    border-radius: 27px;
    color: white;
    font-size: 16px;
    font-weight: 500;
  }
`;

export const WorkoutItem= styled.article<{type:'weight'|'cardio'|'diet'}>`
  padding: 16px;
  border-radius:15px;
  background-color: ${props => (props.type === 'cardio' ? '#E1EFFF' : props.type === 'diet' ? '#D9E1FF' : '#DFF2E5')};
  & .title-section {
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:12px;
    & h3 {
      font-weight:500;
      font-size:16px;
      color:var(--black);
    }
  }
  & .list-section {
    display:flex;
    flex-direction:column;
    gap:12px;
    padding-left:50px;
  }
`;

export const DetailItem = styled.span`
  display:flex;
  justify-content:space-between;
  & span {
    font-size:14px;
    font-weight:500;
    color:var(--black);
    & span {
      background-color:rgba(255, 255, 255, 0.7);
      color:var(--gray-04);
      padding:4px 8px;
      border-radius:27px;
    }
  }
`


