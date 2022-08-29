import { setFollowAPI, setUnFollowAPI } from '@apis/follow';
import FollowButton from '@components/follow-button';
import ProfileImage from '@components/profile-imgae';
import { resultType } from '@typings/search';
import React, { useCallback, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { ItemWrapper, ResultWrapper } from './result.style';
interface Props {
  result:null | Array<resultType>;
}

const ResultItem = ({item}:{item:resultType}) =>{
  const queryClient = useQueryClient();
  const myId = localStorage.getItem('myId');
  const [isFollow, setIsFollow] = useState(item.isFollow);
  const { mutate: postFollow } = useMutation(() => setFollowAPI(item.accountId.toString()), {
    onMutate: () => {
      setIsFollow(true);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['isFollow', item.accountId.toString()]);
      queryClient.invalidateQueries(['my-info', myId!]);
    },
    onError: () => {
      setIsFollow(false);
    },
  });
  const { mutate: deleteFollow } = useMutation(() => setUnFollowAPI(item.accountId.toString()), {
    onMutate: () => {
      setIsFollow(false);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['isFollow', item.accountId.toString()]);
      queryClient.invalidateQueries(['my-info', myId!]);
    },
    onError: () => {
      setIsFollow(true);
    },
  });
  const followHandler = useCallback(()=>{
    if(!isFollow){
      postFollow();
    }else{
      deleteFollow();
    }
  },[isFollow]);
  return(
    <ItemWrapper>
      <section>
        <ProfileImage url={item.profileImg} alt='profile'/>
        <span>{item.nickName}</span>
      </section>
      <FollowButton isFollow={isFollow}  padding="8px 0px"  width='88px' onClickHandler={followHandler}/>
    </ItemWrapper>
  )
}

const SearchResult = ({result}:Props) => {
  if(result === null) return null;
  return (
    <ResultWrapper>
      <h3>검색결과</h3>
      {
        result.length !== 0 ? (
          result.map((v,i) => <ResultItem key={i} item={v} />)
        ) : null
      }
    </ResultWrapper>
  )
};

export default SearchResult;