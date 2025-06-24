import {
  CalendarHead,
  CalendarMonths,
  CalendarMonths2,
} from '..';

import calendar from '../assets/calendar.jpg'
import calendar2 from '../assets/calendar-02.jpg'

export const CalendarPDF = ({ consultant, newDate }) => {
  return [{
    bg: calendar,
    children: <>
      <CalendarHead consultant={consultant} newDate={newDate} />
      <CalendarMonths consultant={consultant} newDate={newDate} />
      {/* <CalendarMonths2 consultant={consultant} newDate={newDate} /> */}
              </>
  }, {
    bg: calendar2,
    children: <>
      <CalendarHead consultant={consultant} newDate={newDate} />
      <CalendarMonths2 consultant={consultant} newDate={newDate} />
              </>

  }]
}
