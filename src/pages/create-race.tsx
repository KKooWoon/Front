import React, { useState } from 'react';
import styled from 'styled-components';
import CreateRace from '@components/create-race';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import request from '@apis/client';
import moment from 'moment';

const CreateRacePage = () => {
  const navigate = useNavigate();
  const [raceInput, setRaceInput] = useState({
    description: '',
    endedAt: '',
    ownerNickname: '',
    raceName: '',
    racePassword: '',
    raceTag: '',
    startedAt: '',
  });

  const [tab, setTab] = useState(true);

  const buttonDisable = raceInput => {
    if (
      raceInput.description === '' ||
      raceInput.endedAt === '' ||
      raceInput.raceName === '' ||
      raceInput.raceTag === '' ||
      raceInput.startedAt === ''
    )
      return true;
    if (tab) return false;
    else {
      return raceInput.racePassword === '' ? true : false;
    }
  };

  async function postData() {
    try {
      const response = await request({
        method: 'post',
        url: '/race/create',
        body: {
          description: raceInput.description,
          endedAt: moment(raceInput.endedAt, 'YYYY-MM-DD').format().split('T')[0],
          ownerNickname: raceInput.ownerNickname,
          raceName: raceInput.raceName,
          racePassword: raceInput.racePassword,
          raceTag: raceInput.raceTag,
          startedAt: moment(raceInput.startedAt, 'YYYY-MM-DD').format().split('T')[0],
        },
      });
      console.log(response);
      navigate('/complete-race', { state: { raceCode: response.raceCode, racePassword: response.racePassword } });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <CreateRace raceInput={raceInput} setRaceInput={setRaceInput} tab={tab} setTab={setTab} />
      <CreateBtn onClick={postData} disabled={buttonDisable(raceInput)}>
        생성하기
      </CreateBtn>
    </div>
  );
};

CreateRacePage.PropTypes = {
  raceInput: PropTypes.any.isRequired,
  setRaceInput: PropTypes.func.isRequired,
};

const CreateBtn = styled.button`
  width: 100%;
  height: 93px;
  background-color: #6732ff;
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
  padding-top: 19px;
  padding-bottom: 51px;
  margin-top: 50px;
  :disabled {
    background-color: #d4d2d9;
  }
`;
export default CreateRacePage;
