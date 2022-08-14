import { calendar, calendarData } from '@typings/calendar';
import dayjs from 'dayjs';
import { dummyCalendarData } from 'dummy';
import React, { useCallback, useState } from 'react';
import { Calendar } from 'react-calendar';
import { CalendarWrapper, TileContents, TileWrapper } from './custom-calendar.style';
import DatedWorkOut from './workout-list';

const CustomCalendar = () => {
  const [selectedDate, setSelectdDate] = useState(new Date());
  const [selectedData, setSelectedData] = useState<null | calendarData>(null);
  /* 벡엔드에서 캘린더 데이터 받아옴 */
  const calendarData = dummyCalendarData;
  console.log(selectedDate);
  const customClickDay = useCallback(
    (value: Date) => {
      const filter = calendarData.filter((v) => v.date === dayjs(value).format('YYYY-MM-DD'));
      if(filter.length === 0) {
        setSelectedData(null);
      }else{
        setSelectedData(filter[0].data);
      }
      setSelectdDate(value);
    },
    [selectedDate]
  );
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
        onClickDay={value => customClickDay(value)}
        tileContent={({ date, view }) => {
          const filter = calendarData.filter(v => v.date === dayjs(date).format('YYYY-MM-DD'));
          if (filter.length === 0) {
            return <TileWrapper />;
          } else {
            const { data } = filter[0];
            return (
              <TileWrapper>
                {data.weight && <TileContents type='weight' />}
                {data.cardio && <TileContents type='cardio' />}
                {data.diet && <TileContents type='diet' />}
              </TileWrapper>
            );
          }
        }}
      />
      <hr />
      {!selectedData ? (
        <div>결과 없음</div>
      ) : (
        <DatedWorkOut data={selectedData!} />
      )}
    </CalendarWrapper>
  );
};

export default CustomCalendar;
