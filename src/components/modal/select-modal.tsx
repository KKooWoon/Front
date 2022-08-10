import React from 'react';
import ModalLayout from './modal-layout';
import { ReactComponent as CloseIcon } from '@assets/icons/close.svg';

interface Props {
  show: boolean;
  close: () => void;
}
const SelectModal = ({ show, close }: Props) => {
  return (
    <ModalLayout show={show} position='under'>
      <div className='select'>
        <CloseIcon stroke='#101010' onClick={close} />
        <section>select Modal</section>
      </div>
      <button>저장하기</button>
    </ModalLayout>
  );
};

export default SelectModal;
