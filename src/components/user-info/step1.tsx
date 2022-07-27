import useInput from '@hooks/use-input';
import React from 'react';

const Step1 = () => {
  const [nickname, onChangeNickname] = useInput('');
  return (
    <div>Step1</div>
  )
}

export default Step1;