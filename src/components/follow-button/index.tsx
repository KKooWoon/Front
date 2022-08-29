import React from 'react';
import { ButtonWrapper } from './follow.style';

interface Props {
  padding: string;
  width: string;
  isFollow: boolean;
  onClickHandler: () => void;
}

const FollowButton = ({ padding, width, isFollow, onClickHandler }: Props) => {
  return (
    <ButtonWrapper style={{ width: width }}>
      <button
        style={{
          padding: padding,
          backgroundColor: isFollow ? 'var(--primary-purple)' : 'var(--purple-sub01)',
          color: isFollow ? '#fff' : 'var(--primary-purple)',
        }}
        onClick={onClickHandler}
      >
        {isFollow ? '팔로우 취소' : '팔로우'}
      </button>
    </ButtonWrapper>
  );
};
export default FollowButton;
