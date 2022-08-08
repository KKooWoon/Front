import styled from 'styled-components';

export const TabLayoutWrapper = styled.div`


`

export const TabHeader = styled.section`
  display:flex;
  justify-content:space-around;
`
export const TabItem = styled.div`
  padding:18px 0px;
  text-align:center;
  width:100%;
  font-weight:500;
  font-size:16px;
  color:var(--gray-03);
  border-bottom:1px solid #eee;
  &.active {
    color:#101010;
    border-bottom: 3px solid var(--primary-purple);
  }
`