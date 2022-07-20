import styled from 'styled-components';

export const Wrapper = styled.section`
  padding: 30px 0px 0px 0px;
  & h2 {
    margin-left: 20px;
    font-weight: 700;
    font-size: 18px;
  }
`;

export const SwiperWrapper = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 12px;
  display: flex;
  & button {
    background: transparent;
  }
  .swiper {
    text-align: center;
  }
`;

export const ItemWrapper = styled.div`
  & img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;
