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
  justify-content: center;
  align-items: center;
  & span {
    width: 7px;
    height: 7px;
    border-radius: 50%;
  }
`;
export const TileContents = styled.span<{ type: 'cardio' | 'weight' | 'diet' }>`
  background-color: ${props => (props.type === 'cardio' ? '#8AC0FC' : props.type === 'diet' ? '#7381FE' : '#9BE0B1')};
`;

export const WorkoutItemWrapper = styled.article<{ type: 'cardio' | 'weight' | 'diet' }>`
  padding-top: 16px;
  & h2 {
    font-weight: 500;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: var(--black);
    display: inline-block;
    font-style: normal;
    vertical-align: middle;
    margin-bottom:16px;
  }
  & .tile {
    content: '';
    display: inline-block;
    margin-right: 8px;
    width: 26px;
    height: 26px;
    border-radius: 8px;
    background-color: ${props => (props.type === 'cardio' ? '#8AC0FC' : props.type === 'diet' ? '#7381FE' : '#9BE0B1')};
  }
  & section {
    padding-left:36px;
    & div {
      display:flex;
      justify-content:space-between;
      align-items:center;
      margin-bottom: 8px;
    }
  }
`;
export const Item = styled.section`
  display:flex;
  align-items:center;
  justify-content: center;
  gap: 6px;
  & h4 {
    font-weight:500;
    font-style:normal;
    font-size:14px;
    color:var(--black);
  }
  & span{
    font-weight:500;
    font-style:normal;
    font-size:14px;
    color:var(--gray-04);
    border-radius:27px;
    background-color:var(--gray-01);
    padding :4px 8px;
  }
`;

export const ListWrapper = styled.div`
  & article:nth-child(n+2) {
    border-top: 0.5px solid var(--gray-02);
    margin-top:18px;
  }
`