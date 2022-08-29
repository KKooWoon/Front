import Register from '@components/register';
import React, { useState } from 'react';
import styled from 'styled-components';
import request from '@apis/client';
import moment from 'moment';
import { useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const myId = localStorage.getItem('myId');
  const [diet, setDiet] = useState({
    foodList: [''],
    name: '',
  });

  const [cardio, setCardio] = useState({
    calorie: 0,
    name: '',
    hour: 0,
    minute: 0,
  });

  const now = moment().format('YYYY-MM-DD');

  async function postData() {
    try {
      const response = await request({
        method: 'post',
        url: '/record/cardio?raceId=10&date=' + `${now}`,
        body: {
          calorie: cardio.calorie,
          name: cardio.name,
          time: cardio.hour * 60 + cardio.minute,
        },
      }).then(res => {
        queryClient.invalidateQueries(['raceList', myId!])
        navigate('/race');
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Wrapper>
      <span>챌린지에서 진행할 운동을 등록해보세요.</span>
      <Register cardio={cardio} setCardio={setCardio} diet={diet} setDiet={setDiet} />
      <RegisterBtn onClick={postData}>등록하기</RegisterBtn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #f9f9f9;
  padding-top: 46px;
  overflow-y: scroll hidden;
  & span {
    font-family: 'SpoqaHanSansNeo';
    font-weight: 500;
    font-size: 16px;
    color: #101010;
    margin-left: 20px;
  }
`;

export const RegisterBtn = styled.button`
  width: 100%;
  height: 93px;
  background-color: #6732ff;
  font-family: 'SpoqaHanSansNeo';
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
  padding-top: 19px;
  padding-bottom: 51px;
  :disabled {
    background-color: #d4d2d9;
  }
`;

export default RegisterPage;
