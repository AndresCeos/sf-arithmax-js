import { CalendarHeadMonth } from '../calendarMonth/CalendarHeadMonth'
import { CalendarMonth } from '../calendarMonth/CalendarMonth'

import calendar from '../assets/calendar-month.jpg'

export const MonthPDF = ({ consultant, newDate, month }) => {
  return {
    bg: calendar,
    children: <>
      <CalendarHeadMonth consultant={consultant} newDate={newDate} />
      <CalendarMonth consultant={consultant} newDate={newDate} month={month} />
              </>
  }
}
