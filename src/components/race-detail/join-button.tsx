import React, { useMemo, useState } from 'react';
import { JoinButtonWrapper } from './race-detail.style';
import { ReactComponent as DotIcon } from '@assets/icons/my-race.svg';
import useModal from '@hooks/use-modal';
import { AlertModal, MenuModal } from '@components/modal';
import { useNavigate } from 'react-router-dom';
interface Props {
  isParticipate: boolean;
  raceId: number;
}

const JoinButton = ({ isParticipate, raceId }: Props) => {
  const navigate = useNavigate();
  const {isOpen:joinOpen, onClose:joinClose, setIsOpen:setJoinOpen} = useModal();
  const {isOpen:menuOpen, onClose:menuClose, setIsOpen:setMenuOpen} = useModal();
  const {isOpen:copyOpen, onClose:copyClose, setIsOpen:setcopyOpen} = useModal();
  const {isOpen:quitOpen, onClose:quitClose, setIsOpen:setquitOpen} = useModal();

  const menuItem = useMemo(()=>[
    {
      title:'친구 목록 보기',
      handler:()=>{
        menuClose();
        navigate('/user-list',{state:raceId});
      }
    },
    {
      title:'레이스 코드 복사하기',
      handler:()=>{
        menuClose();
        setcopyOpen(true);
      }
    },
    {
      title:'레이스 나가기',
      handler:() => {
        menuClose();
        setquitOpen(true);
      }
    },
  ],[]);
  return (
    <JoinButtonWrapper>
      {!isParticipate ? (
        <>
          <span >참여 중 ✔</span>
          <DotIcon fill='#fff' onClick={()=> setMenuOpen(true)} />
        </>
      ) : (
        <span onClick={()=> setJoinOpen(true)}>참여하기 +</span>
      )}
      <AlertModal show={joinOpen} close={joinClose} message="레이스에 참여하시겠습니까?" twoButton={{title:'참여', handler:joinClose}} />
      <AlertModal show={quitOpen} close={quitClose} message="레이스를 그만두시겠습니까?" twoButton={{title:'확인', handler:quitClose}} />
      <AlertModal show={copyOpen} close={copyClose} message={`코드: ${raceId}\n\n코드 복사가 완료되었습니다.`} />
      <MenuModal show={menuOpen} close={menuClose} items={menuItem} />
    </JoinButtonWrapper>
  );
};

export default JoinButton;
