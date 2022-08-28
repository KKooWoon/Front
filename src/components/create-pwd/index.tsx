import React, { useState, useCallback } from 'react';
import { Wrapper, PwdInput, PwdInputWrapper } from './create-pwd.style';
import { ReactComponent as PwdVisibleIcon } from '@assets/icons/pwd-visible.svg';
import { ReactComponent as PwdUnVisibleIcon } from '@assets/icons/pwd-unvisible.svg';
import { RaceInput } from '@components/create-race/create-race.style';

const CreatePwd = (props: any) => {
  const [pwd, setPwd] = useState('');
  const [pwdType, setPwdType] = useState(false);
  const [pwdHint, setPwdHint] = useState(false);
  const pwdRegEx = /^[A-Za-z0-9]{8,12}$/;

  const [pwdCheck, setPwdCheck] = useState('');
  const [pwdCheckType, setPwdCheckType] = useState(false);
  const [pwdCheckHint, setPwdCheckHint] = useState(false);

  const pwdRegExCheck = pwd => {
    if (pwd.match(pwdRegEx) === null) {
      setPwdHint(true);
      return;
    } else {
      setPwdHint(false);
    }
  };

  const pwdDoubleCheck = (pwd, pwdCheck) => {
    if (pwd !== pwdCheck) {
      setPwdCheckHint(true);
      return;
    } else {
      setPwdCheckHint(false);
    }
  };

  const pwdCallback = (pwd, pwdCheck) => {
    if (pwd.match(pwdRegEx) !== null && pwd == pwdCheck) {
      props.parentCallback(pwd);
    } else {
      props.parentCallback('');
    }
  };

  return (
    <Wrapper>
      <h1>비밀번호 설정</h1>
      <PwdInputWrapper>
        <PwdInput
          placeholder='숫자/영문을 혼합하여 8~12글자로 설정해주세요.'
          type={pwdType ? 'text' : 'password'}
          style={pwdHint ? { borderBottomColor: '#ff0000' } : {}}
          onChange={e => {
            pwdCallback(e.target.value, pwdCheck);
            setPwd(e.target.value);
            pwdRegExCheck(e.target.value);
            pwdDoubleCheck(e.target.value, pwdCheck);
          }}
          minLength={8}
          maxLength={12}
        />
        {pwdType ? (
          <PwdVisibleIcon onClick={() => setPwdType(!pwdType)} />
        ) : (
          <PwdUnVisibleIcon onClick={() => setPwdType(!pwdType)} />
        )}
      </PwdInputWrapper>
      {pwdHint ? <p>비밀번호를 다시 설정해주세요.</p> : <div></div>}
      <h1>비밀번호 확인</h1>
      <PwdInputWrapper>
        <PwdInput
          placeholder='비밀번호를 다시 입력해주세요.'
          type={pwdCheckType ? 'text' : 'password'}
          style={pwdCheckHint ? { borderBottomColor: '#ff0000' } : {}}
          onChange={e => {
            pwdCallback(pwd, e.target.value);
            setPwdCheck(e.target.value);
            pwdDoubleCheck(pwd, e.target.value);
          }}
        />
        {pwdCheckType ? (
          <PwdVisibleIcon onClick={() => setPwdCheckType(!pwdCheckType)} />
        ) : (
          <PwdUnVisibleIcon onClick={() => setPwdCheckType(!pwdCheckType)} />
        )}
      </PwdInputWrapper>
      {pwdCheckHint ? <p>비밀번호를 다릅니다.</p> : <div></div>}
    </Wrapper>
  );
};

export default CreatePwd;
