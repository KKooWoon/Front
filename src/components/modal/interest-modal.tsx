import React, { SyntheticEvent, useState } from 'react';
import ModalLayout from './modal-layout';
import { ReactComponent as CloseIcon } from '@assets/icons/close.svg';
import { KEYWORDS } from '@utils/constants';
import { InterestWrapper } from './modal.style';
import { Container, KeywordItem } from '@components/user-info/user-info.style';

interface Props {
  show: boolean;
  close: () => void;
  buttonHandler:(v:string) => void;
}
const InterestModal = ({ show, close, buttonHandler }: Props) => {
  const keywords = KEYWORDS;
  const [interest, setInterest] = useState('다이어트');
  const handler = (e: SyntheticEvent) => {
    if ((e.target as HTMLDivElement | HTMLSpanElement).localName === 'div') return;
    const keyword = (e.target as HTMLDivElement | HTMLSpanElement).innerHTML.substring(2);
    setInterest(keyword);
  };
  return (
    <ModalLayout show={show} position='under'>
      <div className='select'>
        <CloseIcon stroke='#101010' onClick={close} />
        <section>
          <InterestWrapper onClick={handler}>
            <Container>
              <KeywordItem style={{ fontSize: '16px' }} className={interest.includes(keywords[0]) ? 'active' : ''}>
                # {keywords[0]}
              </KeywordItem>
              <KeywordItem style={{ fontSize: '16px' }} className={interest.includes(keywords[1]) ? 'active' : ''}>
                # {keywords[1]}
              </KeywordItem>
            </Container>
            <Container>
              <KeywordItem style={{ fontSize: '16px' }} className={interest.includes(keywords[2]) ? 'active' : ''}>
                # {keywords[2]}
              </KeywordItem>
              <KeywordItem style={{ fontSize: '16px' }} className={interest.includes(keywords[3]) ? 'active' : ''}>
                # {keywords[3]}
              </KeywordItem>
              <KeywordItem style={{ fontSize: '16px' }} className={interest.includes(keywords[4]) ? 'active' : ''}>
                # {keywords[4]}
              </KeywordItem>
            </Container>
            <Container>
              <KeywordItem style={{ fontSize: '16px' }} className={interest.includes(keywords[5]) ? 'active' : ''}>
                # {keywords[5]}
              </KeywordItem>
              <KeywordItem style={{ fontSize: '16px' }} className={interest.includes(keywords[6]) ? 'active' : ''}>
                # {keywords[6]}
              </KeywordItem>
            </Container>
          </InterestWrapper>
        </section>
      </div>
      <button onClick={()=> buttonHandler(interest)}>저장하기</button>
    </ModalLayout>
  );
};

export default InterestModal;
