import React from 'react';
import styled from 'styled-components';
import CreateRace from '@components/create-race';

const CreateRacePage = () => {
  return (
    <Wrapper>
      <CreateRace />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0px 20px;
`;

export default CreateRacePage;
