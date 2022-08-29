import { confirmAPI } from '@apis/workout';
import WorkOutDetailList from '@components/workout-list/workout-detail';
import useInput from '@hooks/use-input';
import { WorkOutList } from '@typings/workout';
import React, { useCallback, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const WorkoutAuth = () => {
  const { state } = useLocation();
  const inputRef = useRef<HTMLInputElement>(null);
  const [imageData, setImageData] = useState<FormData>();
  const [previewURL, setPreviewURL] = useState('');
  const [memo, onChangeMemo] = useInput('');
  console.log('form:', imageData);
  console.log('state: ', state);
  
  const work = state as unknown as WorkOutList;
  const ImageUploadHandler = useCallback(() => {
    inputRef.current!.click();
  }, [inputRef.current]);
  const onChangeImage = (e: any) => {
    const Image = e.target.files;

    if (e.target.files.length) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = function (e) {
        setPreviewURL((e.target!.result)as string);
      };
    }

    const imageFormData = new FormData();
    imageFormData.append('file', Image[0]);
    imageFormData.append('recordId', work.recordId ? work.recordId!.toString() : '12');
    setImageData(imageFormData);
  };
  const submitHandler = async () => {
    try {
      imageData!.append('description',memo);
      await confirmAPI(imageData!);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <Wrapper>
      <section className='image'>
        <h3>사진등록</h3>
        <button onClick={ImageUploadHandler}>업로드 버튼</button>
        <InputWrapper>
        {imageData ? <img src={previewURL}/> : null}
          <input type='file' name='file' ref={inputRef} onChange={onChangeImage} hidden />
        </InputWrapper>
      </section>
      <section className='text'>
        <h3>메모</h3>
        <textarea value={memo} onChange={onChangeMemo} placeholder={'150 글자 제한'} maxLength={150} />
      </section>
      <section className='workout'>
        <h3>인증할 운동</h3>
        <WorkOutDetailList data={work} isMe={true} />
      </section>
      <SubmitButton onClick={submitHandler}>인증하기</SubmitButton>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 30px 12px;
  & section {
    margin-bottom: 20px;
    & h3 {
      font-weight: 700;
      font-size: 18px;
      margin-bottom: 16px;
    }
  }

  & .image {
    & button {
      background-color: transparent;
      border-radius: 8px;
      border: 1px solid var(--primary-purple);
      font-weight: 500;
      color: var(--primary-purple);
      display:block;
    }
  }
  & .text {
    width: 100%;
    & textarea {
      width: 100%;
      height: 230px;
      border: 2px solid var(--primary-purple);
      border-radius: 20px;
      padding: 12px;
      color: var(--gray-03);
      font-size: 16px;
      font-weight: 400;
      :focus {
        outline: none;
      }
    }
  }
`;
const InputWrapper = styled.div`
  width: 150px;
  height: 150px;
  display:inline-block;
  & img {
    width:100%;
    height:100%;
  }
`;
const SubmitButton = styled.button`
  width: 100%;
  text-align: center;
  padding: 20px 0px;
  color: white;
  font-size: 18px;
  font-weight: 700;
  background-color: var(--primary-purple);
`;
export default WorkoutAuth;
