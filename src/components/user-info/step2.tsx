import React, { useCallback, useMemo, useState } from 'react';
import { SelectBox, SelectBoxWrapper, SelectList } from './user-info.style';
import { ReactComponent as ArrowBottom } from '@assets/icons/arrow-bottom.svg';
import { useAppDispatch, useAppSelector } from '@hooks/redux-hooks';
import onBoadingSlice from 'reducer/onboading';

const Step2 = () => {
  const selectItem = useMemo(
    () => [
      {
        name: '10대',
        value: 10,
      },
      {
        name: '20대',
        value: 20,
      },
      {
        name: '30대',
        value: 30,
      },
      {
        name: '40대',
        value: 40,
      },
    ],
    []
  );
  const [showList, setShowList] = useState<boolean>(false);
  const isActive = useAppSelector(state => state.onboading.isActive);
  const age = useAppSelector(state => state.onboading.age);
  const dispatch = useAppDispatch();
  const onSelectHandler = useCallback(
    (value: number) => {
      if (!isActive) {
        dispatch(onBoadingSlice.actions.setActive(true));
      }
      dispatch(onBoadingSlice.actions.setAge(value));
      setShowList(false);
    },
    [age, dispatch]
  );

  return (
    <SelectBoxWrapper>
      <SelectBox>
        <span className={age === 0 ? 'isGrey' : ''}>{age === 0 ? '선택' : age + '대'}</span>
      </SelectBox>
      {showList && (
        <div style={{ position: 'absolute', overflow: 'hidden', width: '100%' }}>
          <SelectList>
            {selectItem.map((v, i) => (
              <li key={i} onClick={() => onSelectHandler(v.value)}>
                {v.name}
              </li>
            ))}
          </SelectList>
        </div>
      )}
      <ArrowBottom onClick={() => setShowList(prev => !prev)} />
    </SelectBoxWrapper>
  );
};

export default Step2;
