import React from 'react';
import styled from 'styled-components';
import { ReactComponent as AddPeople } from '@assets/icons/add-people.svg';
import { useNavigate } from 'react-router-dom';
import { MyInfo, RaceListDummy, WorkOutListDummy } from 'dummy';
import { PageWrapper, SlideSection, UserInfoSection } from './profile.style';

const ProfilePage = () => {
  const navigate = useNavigate();
  /* 벡엔드에서 불러와야 하는 데이터 */
  const UserData = MyInfo;
  const RaceData = RaceListDummy;
  const WorkOutData = WorkOutListDummy;


  return (
    <PageWrapper>
      <AddPeople onClick={()=> navigate('/search')}/>
      <UserInfoSection>
        
      </UserInfoSection>
      <SlideSection></SlideSection>
    </PageWrapper>
  );
};

export default ProfilePage;
