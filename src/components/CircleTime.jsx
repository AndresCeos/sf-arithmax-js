import Universal from '../resources/Universal'
import time_circle from '../assets/time-circle.png'
import border from '../assets/Vector.png'
import backRed from '../assets/back-red.png'
import backGray from '../assets/blackGray.png'
import arrow from '../assets/arrow.png'
import { useSelector } from 'react-redux'


export const CircleTime = ( {consultant} ) => {
  const { dateSelected } = useSelector(state => state.users);
  const currentYear = dateSelected.year()
  const u = new Universal()
  const currentMonth = dateSelected.month() +1
  return(
    <div className='relative time-circle'>
      <img src={time_circle} className="relative" alt='Time Circle' />

      <img className='circle-tempo-arrow' src={arrow} alt="" />

      {currentMonth!==1&&currentMonth>1? <img className='circle-time-pos-1' src={backGray} alt="" />:''}
      {currentMonth!==2&&currentMonth>2? <img className='circle-time-pos-2' src={backGray} alt="" />:''}
      {currentMonth!==3&&currentMonth>3? <img className='circle-time-pos-3' src={backGray} alt="" />:''}
      {currentMonth!==4&&currentMonth>4? <img className='circle-time-pos-4' src={backGray} alt="" />:''}
      {currentMonth!==5&&currentMonth>5? <img className='circle-time-pos-5' src={backGray} alt="" />:''}
      {currentMonth!==6&&currentMonth>6? <img className='circle-time-pos-6' src={backGray} alt="" />:''}
      {currentMonth!==7&&currentMonth>7? <img className='circle-time-pos-7' src={backGray} alt="" />:''}
      {currentMonth!==8&&currentMonth>8? <img className='circle-time-pos-8' src={backGray} alt="" />:''}
      {currentMonth!==9&&currentMonth>9? <img className='circle-time-pos-9' src={backGray} alt="" />:''}
      {currentMonth!==10&&currentMonth>10? <img className='circle-time-pos-10' src={backGray} alt="" />:''}
      {currentMonth!==11&&currentMonth>11? <img className='circle-time-pos-11' src={backGray} alt="" />:''}
      {currentMonth!==12&&currentMonth>12? <img className='circle-time-pos-12' src={backGray} alt="" />:''}

      <img className={`circle-time-current-pos-${currentMonth}` } src={backRed} alt="" />
      <img className={`circle-time-current-pos-${currentMonth}` } src={border} alt="" />

      <span className='time-circle-year'>{consultant.calcPersonalYear(currentYear)}</span>

      <span className='time-circle-w w-1'>{consultant.calcSelectPersonalWeek(1,1,currentYear)}{consultant.calcSelectPersonalWeekISK(1,1,currentYear)}</span>
      <span className='time-circle-w w-2'>{consultant.calcSelectPersonalWeek(1,2,currentYear)}{consultant.calcSelectPersonalWeekISK(1,2,currentYear)}</span>
      <span className='time-circle-w w-3'>{consultant.calcSelectPersonalWeek(1,3,currentYear)}{consultant.calcSelectPersonalWeekISK(1,3,currentYear)}</span>
      <span className='time-circle-w w-4'>{consultant.calcSelectPersonalWeek(1,4,currentYear)}{consultant.calcSelectPersonalWeekISK(1,4,currentYear)}</span>

      <span className='time-circle-w w-5'>{consultant.calcSelectPersonalWeek(2,1,currentYear)}{consultant.calcSelectPersonalWeekISK(2,1,currentYear)}</span>
      <span className='time-circle-w w-6'>{consultant.calcSelectPersonalWeek(2,2,currentYear)}{consultant.calcSelectPersonalWeekISK(2,2,currentYear)}</span>
      <span className='time-circle-w w-7'>{consultant.calcSelectPersonalWeek(2,3,currentYear)}{consultant.calcSelectPersonalWeekISK(2,3,currentYear)}</span>
      <span className='time-circle-w w-8'>{consultant.calcSelectPersonalWeek(2,4,currentYear)}{consultant.calcSelectPersonalWeekISK(2,4,currentYear)}</span>

      <span className='time-circle-w w-9'>{consultant.calcSelectPersonalWeek(3,1,currentYear)}{consultant.calcSelectPersonalWeekISK(3,1,currentYear)}</span>
      <span className='time-circle-w w-10'>{consultant.calcSelectPersonalWeek(3,2,currentYear)}{consultant.calcSelectPersonalWeekISK(3,2,currentYear)}</span>
      <span className='time-circle-w w-11'>{consultant.calcSelectPersonalWeek(3,3,currentYear)}{consultant.calcSelectPersonalWeekISK(3,3,currentYear)}</span>
      <span className='time-circle-w w-12'>{consultant.calcSelectPersonalWeek(3,4,currentYear)}{consultant.calcSelectPersonalWeekISK(3,4,currentYear)}</span>

      <span className='time-circle-w w-13'>{consultant.calcSelectPersonalWeek(4,1,currentYear)}{consultant.calcSelectPersonalWeekISK(4,1,currentYear)}</span>
      <span className='time-circle-w w-14'>{consultant.calcSelectPersonalWeek(4,2,currentYear)}{consultant.calcSelectPersonalWeekISK(4,2,currentYear)}</span>
      <span className='time-circle-w w-15'>{consultant.calcSelectPersonalWeek(4,3,currentYear)}{consultant.calcSelectPersonalWeekISK(4,3,currentYear)}</span>
      <span className='time-circle-w w-16'>{consultant.calcSelectPersonalWeek(4,4,currentYear)}{consultant.calcSelectPersonalWeekISK(4,4,currentYear)}</span>

      <span className='time-circle-w w-17'>{consultant.calcSelectPersonalWeek(5,1,currentYear)}{consultant.calcSelectPersonalWeekISK(5,1,currentYear)}</span>
      <span className='time-circle-w w-18'>{consultant.calcSelectPersonalWeek(5,2,currentYear)}{consultant.calcSelectPersonalWeekISK(5,2,currentYear)}</span>
      <span className='time-circle-w w-19'>{consultant.calcSelectPersonalWeek(5,3,currentYear)}{consultant.calcSelectPersonalWeekISK(5,3,currentYear)}</span>
      <span className='time-circle-w w-20'>{consultant.calcSelectPersonalWeek(5,4,currentYear)}{consultant.calcSelectPersonalWeekISK(5,4,currentYear)}</span>

      <span className='time-circle-w w-21'>{consultant.calcSelectPersonalWeek(6,1,currentYear)}{consultant.calcSelectPersonalWeekISK(6,1,currentYear)}</span>
      <span className='time-circle-w w-22'>{consultant.calcSelectPersonalWeek(6,2,currentYear)}{consultant.calcSelectPersonalWeekISK(6,2,currentYear)}</span>
      <span className='time-circle-w w-23'>{consultant.calcSelectPersonalWeek(6,3,currentYear)}{consultant.calcSelectPersonalWeekISK(6,3,currentYear)}</span>
      <span className='time-circle-w w-24'>{consultant.calcSelectPersonalWeek(6,4,currentYear)}{consultant.calcSelectPersonalWeekISK(6,4,currentYear)}</span>

      <span className='time-circle-w w-25'>{consultant.calcSelectPersonalWeek(7,1,currentYear)}{consultant.calcSelectPersonalWeekISK(7,1,currentYear)}</span>
      <span className='time-circle-w w-26'>{consultant.calcSelectPersonalWeek(7,2,currentYear)}{consultant.calcSelectPersonalWeekISK(7,2,currentYear)}</span>
      <span className='time-circle-w w-27'>{consultant.calcSelectPersonalWeek(7,3,currentYear)}{consultant.calcSelectPersonalWeekISK(7,3,currentYear)}</span>
      <span className='time-circle-w w-28'>{consultant.calcSelectPersonalWeek(7,4,currentYear)}{consultant.calcSelectPersonalWeekISK(7,4,currentYear)}</span>

      <span className='time-circle-w w-29'>{consultant.calcSelectPersonalWeek(8,1,currentYear)}{consultant.calcSelectPersonalWeekISK(8,1,currentYear)}</span>
      <span className='time-circle-w w-30'>{consultant.calcSelectPersonalWeek(8,2,currentYear)}{consultant.calcSelectPersonalWeekISK(8,2,currentYear)}</span>
      <span className='time-circle-w w-31'>{consultant.calcSelectPersonalWeek(8,3,currentYear)}{consultant.calcSelectPersonalWeekISK(8,3,currentYear)}</span>
      <span className='time-circle-w w-32'>{consultant.calcSelectPersonalWeek(8,4,currentYear)}{consultant.calcSelectPersonalWeekISK(8,4,currentYear)}</span>

      <span className='time-circle-w w-33'>{consultant.calcSelectPersonalWeek(9,1,currentYear)}{consultant.calcSelectPersonalWeekISK(9,1,currentYear)}</span>
      <span className='time-circle-w w-34'>{consultant.calcSelectPersonalWeek(9,2,currentYear)}{consultant.calcSelectPersonalWeekISK(9,2,currentYear)}</span>
      <span className='time-circle-w w-35'>{consultant.calcSelectPersonalWeek(9,3,currentYear)}{consultant.calcSelectPersonalWeekISK(9,3,currentYear)}</span>
      <span className='time-circle-w w-36'>{consultant.calcSelectPersonalWeek(9,4,currentYear)}{consultant.calcSelectPersonalWeekISK(9,4,currentYear)}</span>

      <span className='time-circle-w w-37'>{consultant.calcSelectPersonalWeek(10,1,currentYear)}{consultant.calcSelectPersonalWeekISK(10,1,currentYear)}</span>
      <span className='time-circle-w w-38'>{consultant.calcSelectPersonalWeek(10,2,currentYear)}{consultant.calcSelectPersonalWeekISK(10,2,currentYear)}</span>
      <span className='time-circle-w w-39'>{consultant.calcSelectPersonalWeek(10,3,currentYear)}{consultant.calcSelectPersonalWeekISK(10,3,currentYear)}</span>
      <span className='time-circle-w w-40'>{consultant.calcSelectPersonalWeek(10,4,currentYear)}{consultant.calcSelectPersonalWeekISK(10,4,currentYear)}</span>

      <span className='time-circle-w w-41'>{consultant.calcSelectPersonalWeek(11,1,currentYear)}{consultant.calcSelectPersonalWeekISK(11,1,currentYear)}</span>
      <span className='time-circle-w w-42'>{consultant.calcSelectPersonalWeek(11,2,currentYear)}{consultant.calcSelectPersonalWeekISK(11,2,currentYear)}</span>
      <span className='time-circle-w w-43'>{consultant.calcSelectPersonalWeek(11,3,currentYear)}{consultant.calcSelectPersonalWeekISK(11,3,currentYear)}</span>
      <span className='time-circle-w w-44'>{consultant.calcSelectPersonalWeek(11,4,currentYear)}{consultant.calcSelectPersonalWeekISK(11,4,currentYear)}</span>

      <span className='time-circle-w w-45'>{consultant.calcSelectPersonalWeek(12,1,currentYear)}{consultant.calcSelectPersonalWeekISK(12,1,currentYear)}</span>
      <span className='time-circle-w w-46'>{consultant.calcSelectPersonalWeek(12,2,currentYear)}{consultant.calcSelectPersonalWeekISK(12,2,currentYear)}</span>
      <span className='time-circle-w w-47'>{consultant.calcSelectPersonalWeek(12,3,currentYear)}{consultant.calcSelectPersonalWeekISK(12,3,currentYear)}</span>
      <span className='time-circle-w w-48'>{consultant.calcSelectPersonalWeek(12,4,currentYear)}{consultant.calcSelectPersonalWeekISK(12,4,currentYear)}</span>

      <span className='time-circle-pm m-1'>{consultant.calcPersonalMonth(1, currentYear)}{consultant.calcPersonalMonthISK(1, currentYear)} / {u.calcUniversalMonth(1,currentYear)}{u.calcUniversalMonthISK(1,currentYear)}</span>
      <span className='time-circle-pm m-2'>{consultant.calcPersonalMonth(2, currentYear)}{consultant.calcPersonalMonthISK(2, currentYear)} / {u.calcUniversalMonth(2,currentYear)}{u.calcUniversalMonthISK(2,currentYear)}</span>
      <span className='time-circle-pm m-3'>{consultant.calcPersonalMonth(3, currentYear)}{consultant.calcPersonalMonthISK(3, currentYear)} / {u.calcUniversalMonth(3,currentYear)}{u.calcUniversalMonthISK(3,currentYear)}</span>

      <span className='time-circle-pm m-4'>{consultant.calcPersonalMonth(4, currentYear)}{consultant.calcPersonalMonthISK(4, currentYear)} / {u.calcUniversalMonth(4,currentYear)}{u.calcUniversalMonthISK(4,currentYear)}</span>
      <span className='time-circle-pm m-5'>{consultant.calcPersonalMonth(5, currentYear)}{consultant.calcPersonalMonthISK(5, currentYear)} / {u.calcUniversalMonth(5,currentYear)}{u.calcUniversalMonthISK(5,currentYear)}</span>
      <span className='time-circle-pm m-6'>{consultant.calcPersonalMonth(6, currentYear)}{consultant.calcPersonalMonthISK(6, currentYear)} / {u.calcUniversalMonth(6,currentYear)}{u.calcUniversalMonthISK(6,currentYear)}</span>

      <span className='time-circle-pm m-7'>{consultant.calcPersonalMonth(7, currentYear)}{consultant.calcPersonalMonthISK(7, currentYear)} / {u.calcUniversalMonth(7,currentYear)}{u.calcUniversalMonthISK(7,currentYear)}</span>
      <span className='time-circle-pm m-8'>{consultant.calcPersonalMonth(8, currentYear)}{consultant.calcPersonalMonthISK(8, currentYear)} / {u.calcUniversalMonth(8,currentYear)}{u.calcUniversalMonthISK(8,currentYear)}</span>
      <span className='time-circle-pm m-9'>{consultant.calcPersonalMonth(9, currentYear)}{consultant.calcPersonalMonthISK(9, currentYear)} / {u.calcUniversalMonth(9,currentYear)}{u.calcUniversalMonthISK(9,currentYear)}</span>

      <span className='time-circle-pm m-10'>{consultant.calcPersonalMonth(12, currentYear)}{consultant.calcPersonalMonthISK(12, currentYear)} / {u.calcUniversalMonth(12,currentYear)}{u.calcUniversalMonthISK(12,currentYear)}</span>
      <span className='time-circle-pm m-11'>{consultant.calcPersonalMonth(11, currentYear)}{consultant.calcPersonalMonthISK(11, currentYear)} / {u.calcUniversalMonth(11,currentYear)}{u.calcUniversalMonthISK(11,currentYear)}</span>
      <span className='time-circle-pm m-12'>{consultant.calcPersonalMonth(10, currentYear)}{consultant.calcPersonalMonthISK(10, currentYear)} / {u.calcUniversalMonth(10,currentYear)}{u.calcUniversalMonthISK(10,currentYear)}</span>

      <span className='time-quarter q-1'>{consultant.getQuaterMonth(1,currentYear)}{consultant.getQuaterMonthISK(1,currentYear)}</span>
      <span className='time-quarter q-2'>{consultant.getQuaterMonth(2,currentYear)}{consultant.getQuaterMonthISK(2,currentYear)}</span>
      <span className='time-quarter q-3'>{consultant.getQuaterMonth(3,currentYear)}{consultant.getQuaterMonthISK(3,currentYear)}</span>

      <span className='time-quarter q-4'>{consultant.getQuaterMonth(4,currentYear)}{consultant.getQuaterMonthISK(4,currentYear)}</span>
      <span className='time-quarter q-5'>{consultant.getQuaterMonth(5,currentYear)}{consultant.getQuaterMonthISK(5,currentYear)}</span>
      <span className='time-quarter q-6'>{consultant.getQuaterMonth(6,currentYear)}{consultant.getQuaterMonthISK(6,currentYear)}</span>

      <span className='time-quarter q-7'>{consultant.getQuaterMonth(7,currentYear)}{consultant.getQuaterMonthISK(7,currentYear)}</span>
      <span className='time-quarter q-8'>{consultant.getQuaterMonth(8,currentYear)}{consultant.getQuaterMonthISK(8,currentYear)}</span>
      <span className='time-quarter q-9'>{consultant.getQuaterMonth(9,currentYear)}{consultant.getQuaterMonthISK(9,currentYear)}</span>

      <span className='time-quarter q-10'>{consultant.getQuaterMonth(10,currentYear)}{consultant.getQuaterMonthISK(10,currentYear)}</span>
      <span className='time-quarter q-11'>{consultant.getQuaterMonth(11,currentYear)}{consultant.getQuaterMonthISK(11,currentYear)}</span>
      <span className='time-quarter q-12'>{consultant.getQuaterMonth(12,currentYear)}{consultant.getQuaterMonthISK(12,currentYear)}</span>

    </div>
  )
}