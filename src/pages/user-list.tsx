import { getRaceUserList } from '@apis/race';
import { Spinner } from '@components/loading';
import UserList from '@components/user-list/inedx';
import { FollowerList, userSearch } from 'dummy';
import React from 'react';
import { useLocation } from 'react-router-dom';

const UserListPage = () => {
  const {state} = useLocation();
  console.log(state);
  const {data:userData, isLoading} = getRaceUserList(state as string);
  if(isLoading || !userData) return <Spinner />
  return (
    <div style={{padding:"0px 20px"}}>
      <UserList data={userData} title="레이스 참여 멤버"/>
    </div>
  )
}

export default UserListPage;