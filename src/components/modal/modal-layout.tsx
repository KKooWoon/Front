import { ModalPotal } from '@utils/portal';
import React, { ReactNode } from 'react';
import { CenterInner, ModalBackground, ModalWrapper, UnderInner } from './modal.style';
interface Props {
  children: ReactNode;
  show: boolean;
  
  position?: string;
}
const ModalLayout = ({ children, show, position = 'center' }: Props) => {
  return show ? (
    <ModalPotal>
      <ModalWrapper>
        <ModalBackground position={position}>
          {position === 'center' ? <CenterInner>{children}</CenterInner> : <UnderInner>{children}</UnderInner>}
        </ModalBackground>
      </ModalWrapper>
    </ModalPotal>
  ) : null;
};

export default ModalLayout;
