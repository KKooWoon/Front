import React, { useState } from 'react';
import styled from 'styled-components';
import MyRace from '@components/my-race';

const RacePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabClickHandler = index => {
    setActiveIndex(index);
  };

  const menuArr = { 0: <MyRace />, 1: 'Tab menu Two' };

  return (
    <div>
      <TabMenu>
        <button className={activeIndex === 0 ? 'tabs active-tabs' : 'tabs'} onClick={() => tabClickHandler(0)}>
          내 레이스
        </button>
        <button className={activeIndex === 1 ? 'tabs active-tabs' : 'tabs'} onClick={() => tabClickHandler(1)}>
          레이스 둘러보기
        </button>
      </TabMenu>
      <div>{menuArr[activeIndex]}</div>
    </div>
  );
};

const TabMenu = styled.div`
  height: 54px;
  display: flex;
  align-items: center;
  .tabs {
    background-color: #ffffff;
    padding: 16px;
    width: 50%;
    font-family: 'SpoqaHanSansNeo';
    font-weight: 500;
    font-size: 16px;
    color: #adacb1;
  }
  .active-tabs {
    border-bottom: 3px solid #6732ff;
    color: #101010;
  }
`;

export default RacePage;
