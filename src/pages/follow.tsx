import SearchBar from '@components/search-bar';
import TabLayout from '@components/tab-layout';
import UserList from '@components/user-list/inedx';
import useInput from '@hooks/use-input';
import { follow } from '@typings/follow';
import { FollowerList } from 'dummy';
import React, { useCallback, useEffect, useState } from 'react';
import { ReactComponent as Icon } from '@assets/icons/complete.svg';
const FollowListPage = () => {
  const [searchValue, onChangeSearchValue] = useInput('');
  const [now, setNow] = useState<string>('팔로워');
  const [followList, setFollowList] = useState<Array<follow>>([]);
  /* 팔로잉 리스트 벡엔드에서 불러옴 */
  const follower = FollowerList;
  /* 팔로잉 리스트 벡엔드에서 불러옴 */
  const following = FollowerList;

  const nowHandler = useCallback(
    (v: string) => {
      setNow(v);
    },
    [now]
  );

  const searchHandler = useCallback(() => {}, []);
  useEffect(() => {
    if (now === '팔로워') {
      setFollowList(follower);
    } else {
      setFollowList(following);
    }
  }, [now]);

  return (
    <TabLayout items={['팔로워', '팔로잉']} now={now} onClickHandler={nowHandler}>
      <Icon />
      <SearchBar
        placeholder='사용자 닉네임을 검색해 보세요.'
        changeHandler={onChangeSearchValue}
        value={searchValue}
        searchHandler={searchHandler}
      />
      <UserList title={`내 ${now}`} data={followList} />
    </TabLayout>
  );
};

export default FollowListPage;
