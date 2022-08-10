import React from 'react';
import ModalLayout from './modal-layout';
import { ReactComponent as CloseIcon } from '@assets/icons/close.svg';
interface Props {
  show: boolean;
  close: () => void;
  items: Array<{title:string, handler:() => void}>
}
const MenuModal = ({ show, close, items}: Props) => {
  return (
    <ModalLayout show={show} position='under'>
      <div className='menu'>
        <CloseIcon stroke="#101010" onClick={close} />
        <section>
          {
            items.map((v,i) => <p className='item' key={i} onClick={v.handler}>{v.title}</p>)
          }
        </section>
      </div>
    </ModalLayout>
  ) 
}

export default MenuModal;