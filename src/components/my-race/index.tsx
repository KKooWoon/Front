import React, { MouseEvent, useCallback, useState } from 'react';
import { Wrapper, AddRaceBtn, MyRaceWrapper } from './my-race.style';
import RaceList from '@components/race-list';
import { race, raceType } from '@typings/race';
import { RaceListDummy } from 'dummy';
import { ReactComponent as MyRaceBtn } from '@assets/icons/my-race.svg';
import { ReactComponent as AddRaceIcon } from '@assets/icons/add-race.svg';
import { AlertModal, MenuModal } from '@components/modal';
import useModal from '@hooks/use-modal';
import { useNavigate } from 'react-router-dom';
import { getRaceList } from '@apis/race';
import { Spinner } from '@components/loading';
import { ReactComponent as LockIcon } from '@assets/icons/lock.svg';
import { useQueryClient } from 'react-query';

const MyRace = () => {
  const myId = localStorage.getItem('myId');  
  const { data: raceList, isLoading: raceLoading } = getRaceList(myId!);
  /*백엔드 레이스 리스트 요청 
    완료한 레이스의 경우 시작일과 종료일을 받아와야 함*/
  const navigate = useNavigate();
  const { isOpen: menuOpen, onClose: menuClose, setIsOpen: setMenuOpen } = useModal();
  const { isOpen: deleteRace, onClose: deleteRaceClose, setIsOpen: setDeleteRace } = useModal();
  const MenuModalItems = [
    {
      title: '수정하기',
      handler: () => menuClose(),
    },
    {
      title: '삭제하기',
      handler: () => setDeleteRace(true),
    },
  ];
  const modalHandler = useCallback(
    (e: MouseEvent<SVGSVGElement>) => {
      setMenuOpen(true);
      e.stopPropagation();
    },
    [menuOpen, deleteRace]
  );
  const navigateHandler = (isPrivate: boolean, v: race) => {
    if (isPrivate) {
      navigate('/join', {
        state: {
          ...v,
        } as race,
      });
    } else {
      navigate(`/race/${v.raceId}`, { state: { ...v } });
    }
  };
  if (raceLoading || !raceList) return <Spinner />;
  return (
    <Wrapper>
      <h1>진행 중인 레이스</h1>
      <div
        style={{
          display: 'grid',
          gap: '15px',
          gridTemplateColumns: '1fr 1fr',
        }}
      >
        {raceList.nowList.map((v, i) => (
          <MyRaceWrapper key={v.raceId} onClick={() => navigateHandler(v.isPrivate, v)}>
            <MyRaceBtn onClick={modalHandler} fill='#AC8EFF' />
            <p>D-{v.Dday}</p>
            <section className='wrapper'>
              <h3>
                {v.isPrivate && (
                  <span>
                    <LockIcon />
                  </span>
                )}
                {v.raceName}
              </h3>
              <div>#{v.raceTag}</div>
            </section>
          </MyRaceWrapper>
        ))}

        <AddRaceBtn onClick={() => navigate('/create-race')}>
          <AddRaceIcon />
          <p>레이스 생성하기</p>
        </AddRaceBtn>
      </div>
      <h1>완료된 레이스</h1>
      <div
        style={{
          display: 'grid',
          gap: '15px',
          gridTemplateColumns: '1fr 1fr',
        }}
      >
        {raceList.completeList.map((v, i) => (
          <MyRaceWrapper key={v.raceId} onClick={() => navigateHandler(v.isPrivate, v)}>
            <p>{v.startedAt}</p>
            <p>~ {v.endedAt}</p>
            <section className='wrapper'>
              <h3>
                {v.isPrivate && (
                  <span>
                    <LockIcon />
                  </span>
                )}
                {v.raceName}
              </h3>
              <div>#{v.raceTag}</div>
            </section>
          </MyRaceWrapper>
        ))}
      </div>
      <AlertModal
        show={deleteRace}
        close={deleteRaceClose}
        message={`레이스를 삭제할 경우\n추후 데이터 복구가 어렵습니다.\n\n정말 삭제하시겠습니까?`}
        twoButton={{
          title: '삭제',
          handler: () => {
            /*레이스 삭제 벡엔드 요청 */
            deleteRaceClose();
            menuClose();
          },
        }}
      />
      <MenuModal show={menuOpen} close={menuClose} items={MenuModalItems} />
    </Wrapper>
  );
};

export default MyRace;
