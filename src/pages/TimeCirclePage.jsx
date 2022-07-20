import { useSelector } from 'react-redux';

import { CircleTime, UnselectedConsultant } from '../components/';
import { useConsultant, dateSelect } from '../hooks';

import currentM from '../assets/currentMonth.png'

import bkMan from '../assets/bk-man.png'
import { currentDate } from '../resources';

const TimeCirclePage = () =>{
  const { userActive } = useSelector(state => state.users);
  const {newDate} = dateSelect()
  const isEmpty = Object.keys(userActive).length === 0;
  const currentMonth = newDate.month() +1
  const nameOfMonth = newDate.format('MMM')
  const { consultant } = useConsultant()

  if( isEmpty ){
    return <UnselectedConsultant />
  }

  return(
    <>
      <div className='grid grid-cols-12 mt-8 mx-14 gap-6 pb-9 pt-8' style={{backgroundImage:`url("${bkMan}")`,backgroundPositionX:'right', backgroundRepeat:'no-repeat'}}>
        <div className='col-span-6 flex justify-center items-center pt-5 mt-5'>
          { consultant.birthDate.isValid() ? <CircleTime consultant={consultant} /> : null }
        </div>
        <div className='col-span-6 mt-9 pt-9 ' >
          <div className='relative'>
            <img src={currentM} alt="" />
            <span className='time-circle-sem-1'>{consultant.calcSelectPersonalWeek(currentMonth,4,newDate.year())}{consultant.calcSelectPersonalWeekISK(currentMonth,4,newDate.year())}</span>
            <span className='time-circle-sem-2'>{consultant.calcSelectPersonalWeek(currentMonth,3,newDate.year())}{consultant.calcSelectPersonalWeekISK(currentMonth,3,newDate.year())}</span>
            <span className='time-circle-sem-3'>{consultant.calcSelectPersonalWeek(currentMonth,2,newDate.year())}{consultant.calcSelectPersonalWeekISK(currentMonth,2,newDate.year())}</span>
            <span className='time-circle-sem-4'>{consultant.calcSelectPersonalWeek(currentMonth,1,newDate.year())}{consultant.calcSelectPersonalWeekISK(currentMonth,1,newDate.year())}</span>
            <span className='time-circle-months'>{consultant.calcPersonalMonth(currentMonth, newDate.year())}{consultant.calcPersonalMonthISK(currentMonth, newDate.year())} / {consultant.calcUniversalMonth(currentMonth, newDate.year())}{consultant.calcUniversalMonthISK(currentMonth, newDate.year())}</span>
            <span className='time-circle-quater'>{consultant.getQuaterMonth(currentMonth, newDate.year())}</span>
            <span className='time-circle-name-month text-white font-bold'>{nameOfMonth.toUpperCase()}</span>
          </div>
          <div className='mt-5 text-center text-2xl'>
            <div>Estas Consultando el:</div>
            <div className='font-bold'>{currentDate(newDate)}</div>
          </div>
        </div>
      </div>
    </>
  )

}
export default TimeCirclePage;