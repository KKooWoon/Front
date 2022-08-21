import { getCalendarData } from '@apis/calendar';
import { Spinner } from '@components/loading';
import { calendar, calendarData } from '@typings/calendar';
import { WorkOutList } from '@typings/workout';
import dayjs from 'dayjs';
import { dummyCalendarData } from 'dummy';
import React, { useCallback, useState } from 'react';
import { Calendar } from 'react-calendar';
import { CalendarWrapper, TileContents, TileWrapper } from './custom-calendar.style';
import DatedWorkOut from './workout-list';
interface Props {
  raceId: 'ALL' | number;
}
const CustomCalendar = ({ raceId }: Props) => {
  const myId = localStorage.getItem('myId');
  const [selectedDate, setSelectdDate] = useState(new Date());
  const [nowActiveStartDate, setNowActiveStartDate] = useState(new Date());
  const [nowMonth, setNowMonth] = useState<number>(dayjs(new Date()).get('month')+1);
  const [selectedData, setSelectedData] = useState<null | WorkOutList>(null);
  /* 벡엔드에서 캘린더 데이터 받아옴 */
  const { data: CalData, isLoading: CalLoading } = getCalendarData(
    myId!,
    dayjs(selectedDate).get('year'),
    nowMonth,
    raceId
  );
  const calendarData = dummyCalendarData;
  const customClickDay = useCallback(
    (value: Date) => {
      const filter = calendarData.filter(v => v.date === dayjs(value).format('YYYY-MM-DD'));
      if (filter.length === 0) {
        setSelectedData(null);
      } else {
        setSelectedData(filter[0].data);
      }
      setSelectdDate(value);
    },
    [selectedDate]
  );
  const monthChange = (value:Date) =>{
    setNowMonth(dayjs(value).get('month')+1);
    setNowActiveStartDate(value);
  }
  if(CalLoading || !CalData) return <Spinner/>
  return (
    <CalendarWrapper>
      <Calendar
        formatDay={(_locale, date) => dayjs(date).format('DD')}
        minDetail='month'
        maxDetail='month'
        defaultValue={selectedDate}
        navigationLabel={null!}
        prev2Label={null!}
        next2Label={null!}
        onActiveStartDateChange={v => monthChange(v.activeStartDate)}
        activeStartDate={nowActiveStartDate}
        onClickDay={value => customClickDay(value)}
        tileContent={({ date, view }) => {
          const filter = calendarData.filter(v => v.date === dayjs(date).format('YYYY-MM-DD'));
          if (filter.length === 0) {
            return <TileWrapper />;
          } else {
            const { data } = filter[0];
            return (
              <TileWrapper>
                {data.weightList && <TileContents type='weight' />}
                {data.cardioList && <TileContents type='cardio' />}
                {data.dietList && <TileContents type='diet' />}
              </TileWrapper>
            );
          }
        }}
      />
      <hr />
      {!selectedData ? <div>결과 없음</div> : <DatedWorkOut data={selectedData!} />}
    </CalendarWrapper>
  );
};

export default CustomCalendar;
