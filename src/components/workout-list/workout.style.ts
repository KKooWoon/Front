import styled from 'styled-components';

export const ImageBackround = styled.div<{img_url:string}>`
  position:relative;
  width:150px;
  height:180px;
  border-radius:20px;
  background: ${props => `url(${props.img_url}) no-repeat top center`};
  background-size:cover;
`

export const Description = styled.section`
  position:absolute;
  bottom:0;
  background: rgba(0, 0, 0, 0.6);
  border-bottom-left-radius:20px;
  border-bottom-right-radius:20px;
  padding:10px 8px;
  width:100%;
  & h2{
    font-weight:700;
    font-size:16px;
    color:var(--gray-01);
    margin-bottom:6px;
  }
  & p{
    font-weight:400;
    font-size:14px;
    color:var(--gray-01);
    text-overflow: ellipsis;
    overflow-x: hidden;
    white-space: nowrap;
  }
`