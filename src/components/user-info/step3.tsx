import { useAppDispatch, useAppSelector } from '@hooks/redux-hooks';
import React, { ChangeEvent, useCallback, useEffect } from 'react';
import onBoadingSlice from 'reducer/onboading';
import styled from 'styled-components';
import { InputSection } from './user-info.style';

const Step3 = () => {
  const bodySpec = useAppSelector(state => state.onboading.body_spec);
  const isActive = useAppSelector(state => state.onboading.isActive);
  const dispatch = useAppDispatch();

  const onChangeHeight = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(onBoadingSlice.actions.setHeight(e.target.value));
    },
    [bodySpec.height]
  );
  const onChangeWeight = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(onBoadingSlice.actions.setWeight(e.target.value));
    },
    [bodySpec.height]
  );
  const onChangeFat = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(onBoadingSlice.actions.setFat(e.target.value));
    },
    [bodySpec.height]
  );
  const onChangeMuscle = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(onBoadingSlice.actions.setMuscle(e.target.value));
    },
    [bodySpec.height]
  );

  useEffect(() => {
    if (bodySpec.height !== '' && bodySpec.weight !== '' && !isActive) {
      dispatch(onBoadingSlice.actions.setActive(true));
    } else if ((bodySpec.height === '' || bodySpec.weight === '') && isActive) {
      dispatch(onBoadingSlice.actions.setActive(false));
    }
  }, [bodySpec.height, bodySpec.weight]);

  return (
    <GridWrapper>
      <InputSection>
        <h3>키</h3>
        <div>
          <input type='number' value={bodySpec.height} onChange={onChangeHeight} />
          <span>cm</span>
        </div>
      </InputSection>
      <InputSection>
        <h3>몸무게</h3>
        <div>
          <input type='number' value={bodySpec.weight} onChange={onChangeWeight} />
          <span>kg</span>
        </div>
      </InputSection>
      <InputSection>
        <h3>체지방률</h3>
        <div>
          <input style={{ border: '1px solid #c1c1c1' }} value={bodySpec.fat} onChange={onChangeFat} />
          <span>%</span>
        </div>
      </InputSection>
      <InputSection>
        <h3>골격근량</h3>
        <div>
          <input style={{ border: '1px solid #c1c1c1' }} value={bodySpec.muscle} onChange={onChangeMuscle} />
          <span>kg</span>
        </div>
      </InputSection>
    </GridWrapper>
  );
};

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 12px;
  row-gap: 20px;
`;

export default Step3;
