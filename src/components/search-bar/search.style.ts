import styled from 'styled-components';

export const InputWrapper = styled.div`
  width:100%;
  & input {
    width:100%;
    padding: 10px 12px 10px 45px;
    border:none;
    background-color:var(--gray-01);
    border-radius:44px;
    font-weight:400;
    font-size:14px;
    :focus {
      outline:none;
    }
    ::placeholder {
      font-weight:400;
      font-size:14px;
      color:var(--gray-03);
    }
  }
  & svg{
    position:absolute;
    left:32px;
    transform:translateY(8px);
  }
`