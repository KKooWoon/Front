import styled from 'styled-components';

export const RaceHeaderWrapper = styled.div`
  width: 100%;
  height: 220px;
  position: relative;
  background-color: var(--primary-purple);
`;

export const TitleSection = styled.section`
  position: absolute;
  bottom: 0;
  transform: translate(20px, -20px);
  & h4 {
    font-weight: 700;
    font-size: 28px;
    color: #fff;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 95vw;
  }
  & p {
    font-weight: 500;
    font-size: 18px;
    color: #fff;
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    max-width: 95vw;
  }
  & span {
    display: inline-block;
    border-radius: 100px;
    padding: 8px 12px;
    background-color: var(--primary-mint);
    color: var(--primary-purple);
    margin-top: 12px;
    margin-right: 12px;
  }
`;
export const JoinButtonWrapper = styled.div`
  position: absolute;
  right: 20px;
  top: 22px;
  & span {
    padding: 8px 12px;
    border: 1px solid #fff;
    background-color: transparent;
    color: #fff;
    font-weight: 500;
    border-radius: 27px;
  }
  & svg {
    margin-left: 18px;
    transform: translateY(5px);
  }
`;

export const RankingListWrapper = styled.div`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 12px;
`;
export const UserRankList = styled.ul`
  & li {
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-radius: 20px;
    background-color: var(--purple-sub01);
    padding: 12px 16px;
    margin-top:12px;
    & section:first-child{
      display:flex;
      align-items:center;
      & h3{
        font-weight:500;
        font-size:25px;
        color:var(--primary-purple);
        margin-right:20px;
      }
      & img{
        width:44px;
        height:44px;
      }
      & div{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        margin-left:12px;
        & h3 {
          font-size:15px;
          font-weight:500px;
          color:var(--black);
        }
        & span{
          padding:2px 4px;
          font-weight:500;
          font-size:12px;
          border:0.8px solid var(--primary-purple);
          border-radius:40px;
          background-color:transparent;
          color:var(--primary-purple);
        }
      }
    }
    & section:last-child{
      font-weight:500;
      font-size:26px;
      color:var(--black);
    }
  }
`;

export const GallerWrapper = styled.ul`
  & h3 {
    font-weight:700;
    font-size:18px;
    color:var(--black);
    margin-bottom:12px;
  }
  li + li {
    margin-top:40px;
  }
  & article {
    display:grid;
    width:100%;
    grid-template-columns:1fr 1fr;
    gap:15px;
    justify-content:space-between;
    align-items:center;
    & div {
      width:100%;
    }
  }
`

export const WorkoutDetailWrapper = styled.div`
  & section {
    padding:30px 20px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    & div{
      display:flex;
      align-items:center;
      & img {
        width:54px;
        height:54px;
        margin-right:12px;
      }
      & h3{
        font-weight:700;
        font-size:20px;
      }
    } 
    & span{
      font-weight:400;
      font-size:14px;
      color:var(--gray-03);
    }
  }
  & img{
      width:100%;
      height:375px;
    }
  & p {
    padding: 20px;
    font-weight:400;
    font-size:14px;
  }
`