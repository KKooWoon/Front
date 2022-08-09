import useInput from '@hooks/use-input';
import React, { useEffect, useState } from 'react';
import ModalLayout from './modal-layout';
interface Props {
  show: boolean;
  close: () => void;
  raceCode:string;
  onChangeRaceCode:(e:any)=>void;
  onClickHandler:()=>void;
}

const RaceModal = ({ show, close,raceCode, onChangeRaceCode }: Props) => {
  const [isError, setIsError] = useState(false);
  useEffect(()=>{
    if(raceCode.length === 0 && isError){
      setIsError(false);
    }
  },[raceCode])
  return (
    <ModalLayout show={show}>
      <div className='input'>
        <div style={{padding:"22px 16px"}}>
          <h4>전달받은 코드를 입력해 주세요.</h4>
          <input className={isError ? 'error':''} value={raceCode} onChange={onChangeRaceCode} />
          <span>{isError ?'코드 입력이 잘못되었습니다. 다시 입력해 주세요':''}</span>
        </div>
        <section onClick={() => close()}>레이스 참여하기</section>
      </div>
    </ModalLayout>
  );
};

export default RaceModal;
