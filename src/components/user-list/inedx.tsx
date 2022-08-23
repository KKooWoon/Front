import ProfileImage from '@components/profile-imgae';
import { follow } from '@typings/follow';
import { raceUser } from '@typings/user';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserBox, UserListWrapper } from './user-list.style';
interface Props {
  title: string;
  data: Array<follow | raceUser>;
}
const UserItem = ({ item }: { item: follow | raceUser }) => {
  const navigate = useNavigate()
  return (
    <UserBox onClick={() => navigate(`/profile/${item.id}`)}>
      <ProfileImage url={item.profileImageUrl} alt='profile' />
      <section>
        <span>{item.nickName}</span>
        <p>{item.description}</p>
      </section>
    </UserBox>
  );
};
const UserList = ({ title, data }: Props) => {
  
  return (
    <UserListWrapper>
      <h3>{`${title}(${data.length})`}</h3>
      {data.map((v, i) => (
        <UserItem key={i} item={v} />
      ))}
    </UserListWrapper>
  );
};

export default UserList;
