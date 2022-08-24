import ProfileImage from '@components/profile-imgae';
import { Ranking } from '@typings/race';
import React from 'react';
import { RankingListWrapper, UserRankList } from './race-detail.style';
interface Props {
  data: Array<Ranking>;
}
const RankingList = ({ data }: Props) => {
  return (
    <RankingListWrapper>
      <h4>레이스 랭킹</h4>
      <UserRankList>
        {data.map((v, i) => (
          <li key={v.id}>
            <section>
              <h3>{i + 1}</h3>
              <ProfileImage url={v.profileImgaeUrl} alt='porfile_img' />
              <div>
                <h3>{v.nickName}</h3>
                <span>연속 {v.accDay}일째</span>
              </div>
            </section>
            <section>{v.score}</section>
          </li>
        ))}
      </UserRankList>
    </RankingListWrapper>
  );
};

export default RankingList;
