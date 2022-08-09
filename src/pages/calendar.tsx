import { AlertModal } from '@components/modal';
import RaceModal from '@components/modal/race-modal';
import useInput from '@hooks/use-input';
import useModal from '@hooks/use-modal';
import React from 'react';

const CalendarPage = () => {
  const { isOpen: nickanmeModal, onClose: nicknameModalClose, setIsOpen: setNicknameModal } = useModal();
  const { isOpen: codeModal, onClose: codeModalClose, setIsOpen: setCodeModal } = useModal();
  const { isOpen: raceModal, onClose: raceModalClose, setIsOpen: setRaceModal } = useModal();
  /* 레이스 참가하는 모달 쓸때 input 필요 */
  const [raceCode, onChangeRaceCode] = useInput('');
  const { isOpen: deleteRace, onClose: deleteRaceClose, setIsOpen: setDeleteRace } = useModal();

  return (
    <div>
      <div>모달 테스트 하기</div>
      <button onClick={() => setNicknameModal(true)}>중복 닉네임 모달</button>
      <button onClick={() => setCodeModal(true)}>레이스 코드 모달</button>
      <button onClick={() => setRaceModal(true)}>레이스 참가 모달</button>
      <button onClick={() => setDeleteRace(true)}>레이스 삭제 모달</button>
      <AlertModal
        show={nickanmeModal}
        close={nicknameModalClose}
        message={`중복된 닉네임 입니다.\n다른 닉네임을 입력해 주세요.`}
      />
      <AlertModal show={codeModal} close={codeModalClose} message={`코드:OOOOOO\n코드 복사가 완료되었습니다.`} />
      <RaceModal
        show={raceModal}
        close={raceModalClose}
        raceCode={raceCode}
        onChangeRaceCode={onChangeRaceCode}
        onClickHandler={() => {
          /* 벡엔드에 레이스 참여 요청 보내기 */
        }}
      />
      <AlertModal
        show={deleteRace}
        close={deleteRaceClose}
        message={`레이스를 삭제할 경우\n추후 데이터 복구가 어렵습니다.\n\n정말 삭제하시겠습니까?`}
        twoButton={{
          title: '삭제',
          handler: () => {
            /*레이스 삭제 벡엔드 요청 */
            deleteRaceClose();
          },
        }}
      />
    </div>
  );
};

export default CalendarPage;
