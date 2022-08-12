import styled from 'styled-components';

export const CalendarWrapper = styled.div`
  width: 100%;
  height: 100%;
  .react-calendar {
    width: 100%;
    border: none;
    font-family: 'SpoqaHanSansNeo';
  }
  .react-calendar__navigation {
    justify-content: center;
    & button {
      flex-grow: 0;
      :disabled {
        background-color: transparent;
      }
      :enabled:focus {
        background-color: transparent;
      }
    }
  }
  .react-calendar__navigation__label {
    flex-grow: 0 !important;
    color: black;
  }
  .react-calendar__tile {
    line-height: normal;
    padding: 8px;
  }
  .react-calendar__tile--now {
    background: transparent;
  }
  .react-calendar__tile--active {
    background-color: transparent !important;
    & abbr {
      color: white;
      background-color: var(--primary-purple);
      padding: 6px 8px;
      border-radius: 50%;
    }
  }
`;

export const TileWrapper = styled.div`
  width: 32px;
  height: 45px;
  display: flex;
  gap: 3px;
  justify-content:center;
  align-items:center;
  & span {
    width: 7px;
    height: 7px;
    border-radius: 50%;
  }
`;
export const TileContents = styled.span<{ type: 'cardio' | 'weight' | 'diet' }>`
  background-color: ${props => (props.type === 'cardio' ? '#9be0b1' : props.type === 'diet' ? '#8da6ff' : '#8ac0fc')};
`;
