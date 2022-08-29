import ProfileImage from '@components/profile-imgae';
import React from 'react';
import { ImageWrapper, TextSection, Wrapper } from './profile.style';
import { ReactComponent as PencilIcon } from '@assets/icons/pencil.svg';

interface Props {
  nickname: string;
  tag: string;
  message?: string;
  imgUrl: string | null;
}

const MyProfile = ({ nickname, tag, message, imgUrl }: Props) => {
  return (
    <Wrapper >
      <ImageWrapper>
        <ProfileImage url={imgUrl} alt='profile' />
        <div>
          <PencilIcon />
        </div>
      </ImageWrapper>
      <TextSection>
        <h3>{nickname}</h3>
        <div>
          <span># {tag}</span>
          <p>{message}</p>
        </div>
      </TextSection>
    </Wrapper>
  );
};

export default MyProfile;
