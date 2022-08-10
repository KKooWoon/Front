import React from 'react';
import ModalLayout from './modal-layout';
import { TwoButtonWrapper } from './modal.style';
interface Props {
  show: boolean;
  close: () => void;
  message: string;
  twoButton?: {
    title: string;
    handler: () => void;
  };
}

const AlertModal = ({ show, close, message, twoButton }: Props) => {
  return (
    <ModalLayout show={show}>
      <div className='alert-modal'>
        <article>
          <pre>{message}</pre>
        </article>
        {twoButton ? (
          <TwoButtonWrapper>
            <span onClick={close}>취소</span>
            <span onClick={twoButton.handler}>{twoButton.title}</span>
          </TwoButtonWrapper>
        ) : (
          <section onClick={close}>확인</section>
        )}
      </div>
    </ModalLayout>
  );
};

export default AlertModal;
