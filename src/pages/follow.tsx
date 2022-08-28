import { getFollowerList, getFollowList } from '@apis/follow';
import { Spinner } from '@components/loading';
import SearchBar from '@components/search-bar';
import TabLayout from '@components/tab-layout';
import UserList from '@components/user-list/inedx';
import useInput from '@hooks/use-input';
import { follow } from '@typings/follow';
import { FollowerList } from 'dummy';
import React, { useCallback, useEffect, useState } from 'react';

const FollowListPage = () => {
  const myId = localStorage.getItem('myId');
  const [searchValue, onChangeSearchValue, setSearchValue] = useInput('');
  const [now, setNow] = useState<string>('팔로워');
  const [followList, setFollowList] = useState<Array<follow>>([]);

  const { data: followingList, isLoading: followLoading } = getFollowList(myId!);
  const { data: followerList, isLoading: followerLoading } = getFollowerList(myId!);
  
  const nowHandler = useCallback(
    (v: string) => {
      setNow(v);
    },
    [now]
  );
  if (followLoading || followerLoading || !followingList || !followerList) return <Spinner />;
  const searchHandler = useCallback(() => {
    if (searchValue === '') return;
    // ToDo
    if (now === '팔로워') {
      setFollowList(followerList.filter(v => v.nickName.includes(searchValue)));
    } else {
      setFollowList(followingList.filter(v => v.nickName.includes(searchValue)));
    }
    setSearchValue('');
  }, [followList, searchValue]);
  useEffect(() => {
    if (now === '팔로워') {
      setFollowList(followerList);
    } else {
      setFollowList(followingList);
    }
  }, [now]);

  return (
    <TabLayout items={['팔로워', '팔로잉']} now={now} onClickHandler={nowHandler}>
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
