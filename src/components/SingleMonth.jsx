import { useState } from 'react';
import { useSelector } from 'react-redux';

import { CircleNumber } from '../components/';
import { capitalize } from '../resources';

import moment from 'moment/min/moment-with-locales'
moment.locale("es-mx")

const now = moment()

export const SingleMonth = ( {consultant, month, single})=>{
  const {dateSelected } = useSelector(state => state.users);
  const [singleMonth, setSingleMonth] = useState(month)
  const daysInMonth = consultant.getAllDaysInMonth(month)
  const daysCustom = consultant.getDaysOfWeekCustom(month)
  const allMonths = consultant.getAllMonths()
  // console.log(dateSelected.year());
  // console.log('mes=> '+month);
  let daysInMonthSingle
  let daysCustomSingle
  // console.log("single month => "+singleMonth);
  if(single){
    daysInMonthSingle = consultant.getAllDaysInMonth(dateSelected.month()+1, dateSelected.year() )
    daysCustomSingle = consultant.getDaysOfWeekCustom(dateSelected.month()+1,dateSelected.year())
  }

  const currentMonthNumber =moment().month();
  let currentMonth = now.month(month-1).format('MMMM')
  let sem1,sem2,sem3,sem4 = false
  if(moment().date() >= 1 && moment().date() <= 7 && dateSelected.year() ===moment().year()){sem1 = true}
  if(moment().date() >= 8 && moment().date() <= 14 && dateSelected.year() ===moment().year()){sem2 = true}
  if(moment().date() >= 15 && moment().date() <= 21 && dateSelected.year() ===moment().year()){sem3 = true}
  if(moment().date()>= 22 && dateSelected.year() ===moment().year() ){sem4 = true}
  const selectMonth = (e) => {
    let selectedMonth = e.target.value
    selectedMonth  = parseInt(selectedMonth)
    setSingleMonth(selectedMonth+1)
    // console.log(selectedMonth +1);
    }
return(
  <div className='p-6'>
    {(single)?
      <div className='grid'>
        <div className='col-start-1 col-end-6  flex items-center justify-around bg-main p-6'>
          <div className='text-white text-sm font-bold'>Mes de interes:</div>
          <div>
            <select onChange={selectMonth} className='text-2xl rounded-md text-main font-bold' defaultValue={`${singleMonth-1}`} >
              {allMonths.map((m,i)=>
                <option className='text-xl' key={i} value={i}>{m}</option>
              )}
            </select>
          </div>
            <div className="text-sm text-white font-bold px-2">Mes Personal</div>
                            <div className=" px-2">
              <CircleNumber  size="sm" appearance="purple-30" border="main">
                {consultant.calcPersonalMonth(singleMonth, dateSelected.year())}
                {consultant.calcPersonalMonthISK(singleMonth, dateSelected.year())}
              </CircleNumber>
                            </div>
                            <div className="text-white font-bold text-xl px-2"> / </div>
                            <div className=" px-2">
                                <CircleNumber  size="sm" appearance="purple-30" border="main">
                                    {consultant.calcUniversalMonth(singleMonth, dateSelected.year())}
                  {consultant.calcUniversalMonthISK(singleMonth, dateSelected.year())}
                                </CircleNumber>
                            </div>
                            <div className="text-sm text-white font-bold px-2">Mes Universal</div>

        </div>
        <div className='text-2xl col-start-6 col-end-8 flex justify-center items-center bg-purple-50 font-bold text-white'>Cuatrimestre:{consultant.getQuaterMonth(singleMonth, dateSelected.year())}{consultant.getQuaterMonthISK(singleMonth, dateSelected.year())}</div>
      </div>:
      <div className='grid'>
        <div className='col-start-1 col-end-6 text-2xl flex justify-center bg-main text-white font-bold p-2'>{capitalize( currentMonth )} {consultant.calcPersonalMonth(month, dateSelected.year())}{consultant.calcPersonalMonthISK(month, dateSelected.year())}/{consultant.calcUniversalMonth(month, dateSelected.year())}{consultant.calcUniversalMonthISK(month, dateSelected.year())}</div>
        <div className='text-xl col-start-6 col-end-8 flex justify-center bg-purple-50 p-2 text-white'>Cuatrimestre: {consultant.getQuaterMonth(month, dateSelected.year())}{consultant.getQuaterMonthISK(month, dateSelected.year())}</div>
      </div>
    }
    {single?
    <div className='grid'>
      <div className={`col-start-1 col-end-1 mr-6 mt-12`}>
        <div className={`${(sem1&&singleMonth=== currentMonthNumber+1&&dateSelected.year() === moment().year())?'bg-yellow text-white font-bold':'bg-gray-30 text-gray-500'} h-16 border border-black   pl-1 row-start-1`}>1era Sem<br/><span className={`${(sem1&&singleMonth=== currentMonthNumber+1&&dateSelected.year() === moment().year())?'text-white':''}  flex justify-center font-bold text-black`}>{consultant.calcSelectPersonalWeek(singleMonth,1,dateSelected.year())}{consultant.calcSelectPersonalWeekISK(singleMonth,1,dateSelected.year())}/{consultant.calcUniversalWeek(singleMonth, 1, dateSelected.year())}{consultant.calcUniversalWeekISK(singleMonth, 1, dateSelected.year())}</span></div>
        <div className={`${(sem2&&singleMonth=== currentMonthNumber+1&&dateSelected.year() === moment().year())?'bg-yellow text-white font-bold':'bg-gray-30 text-gray-500'} h-16 border border-black  text-gray-500 pl-1 row-start-2`}>2da Sem<br/><span className={` ${(sem2&&singleMonth=== currentMonthNumber+1&&dateSelected.year() === moment().year())?'text-white':''}  flex justify-center font-bold text-black`}>{consultant.calcSelectPersonalWeek(singleMonth,2,dateSelected.year())}{consultant.calcSelectPersonalWeekISK(singleMonth,2,dateSelected.year())}/{consultant.calcUniversalWeek(singleMonth, 2, dateSelected.year())}{consultant.calcUniversalWeekISK(singleMonth, 2, dateSelected.year())}</span></div>
        <div className={` ${(sem3&&singleMonth=== currentMonthNumber+1&&dateSelected.year() === moment().year())?'bg-yellow text-white font-bold':'bg-gray-30 text-gray-500'} h-16 border border-black  text-gray-500 pl-1 row-start-3`}>3era Sem<br/><span className={` ${(sem3&&singleMonth=== currentMonthNumber+1&&dateSelected.year() === moment().year())?'text-white':''}  flex justify-center font-bold text-black`}>{consultant.calcSelectPersonalWeek(singleMonth,3,dateSelected.year())}{consultant.calcSelectPersonalWeekISK(singleMonth,3,dateSelected.year())}/{consultant.calcUniversalWeek(singleMonth, 3, dateSelected.year())}{consultant.calcUniversalWeekISK(singleMonth, 3, dateSelected.year())}</span></div>
        <div className={` ${(sem4&&singleMonth=== currentMonthNumber+1&&dateSelected.year() === moment().year())?'bg-yellow text-white font-bold':'bg-gray-30 text-gray-500'} h-16 border border-black  text-gray-500 pl-1 row-start-4`}>4ta Sem<br/><span className={` ${(sem4&&singleMonth=== currentMonthNumber+1&&dateSelected.year() === moment().year())?'text-white':''}  flex justify-center font-bold text-black`}>{consultant.calcSelectPersonalWeek(singleMonth,4,dateSelected.year())}{consultant.calcSelectPersonalWeekISK(singleMonth,4,dateSelected.year())}/{consultant.calcUniversalWeek(singleMonth, 4, dateSelected.year())}{consultant.calcUniversalWeekISK(singleMonth, 4, dateSelected.year())}</span></div>
        {(daysInMonthSingle.length >28)?<div className={` ${(sem4&&singleMonth=== currentMonthNumber+1&&dateSelected.year() === moment().year())?'bg-yellow':'bg-gray-30 text-gray-500'} h-16 border border-black  text-gray-500 pl-1 row-start-5`}>4ta Sem<br/><span className={` ${(sem4&&singleMonth=== currentMonthNumber+1&&dateSelected.year() === moment().year())?'text-white':''}  flex justify-center font-bold text-black`}>{consultant.calcSelectPersonalWeek(singleMonth,4,dateSelected.year())}{consultant.calcSelectPersonalWeekISK(singleMonth,4,dateSelected.year())}/{consultant.calcUniversalWeek(singleMonth, 4, dateSelected.year())}{consultant.calcUniversalWeekISK(singleMonth, 4, dateSelected.year())}</span></div>:''}
      </div>
      <div className='col-start-2 col-end-8'>
        <div className="h-12 grid grid-cols-7">
          {daysCustomSingle.map((d,index)=>
            <div key={index} className={`bg-gray-30  p-3 border border-black px-1 text-center text-gray-500 `} >{d[0]}</div>
          )}
        </div>
        <div className=' grid grid-cols-7 '>
          {daysInMonthSingle.map((day,index)=>
            <div key={index} className={`
            ${(day === moment().date()&&singleMonth===currentMonthNumber+1&&dateSelected.year()===moment().year())?'bg-yellow':(dateSelected.year()===moment().year()&&singleMonth===currentMonthNumber+1&& (sem1&&day>=1&&day<=7||sem2&&day>=8&&day<=14||sem3&&day>=15&&day<=21||sem4&&day>=22))?'bg-gold-week':(day%2==0)? 'bg-gray-10':''}
            h-16 border border-black p-1 text-gray-500`}>{day}<br/><span className='text-sm flex justify-center text-black font-bold'>{consultant.calcPersonalDay(day, singleMonth, dateSelected.year())}{consultant.calcPersonalDayISK(day, singleMonth, dateSelected.year())}/{consultant.calcUniversalDay(day, singleMonth, dateSelected.year())}{consultant.calcUniversalDayISK(day, singleMonth, dateSelected.year())}</span></div>
          )}
        </div>
      </div>
    </div>
    :
    <div className='grid'>
      <div className={`col-start-1 col-end-1 mr-6 ${single?'mt-12':'mt-6'}`}>
        <div className={`${(sem1&&month=== currentMonthNumber+1&&dateSelected.year() === moment().year())?'bg-yellow text-white font-bold':(dateSelected.year()=== moment().year() && month===currentMonthNumber+1&&single===false)?'bg-gold-week text-gray-500 ':'bg-gray-30'} ${single?'h-16':'h-12'} border border-black  pl-1 row-start-1`}>1era Sem<br/><span className={`${(sem1&&month=== currentMonthNumber+1&& dateSelected.year() === moment().year())?'text-white ':'text-black'} flex justify-center font-bold`}>{consultant.calcSelectPersonalWeek(month,1, dateSelected.year())}{consultant.calcSelectPersonalWeekISK(month,1, dateSelected.year())}/{consultant.calcUniversalWeek(month, 1, dateSelected.year())}{consultant.calcUniversalWeekISK(month,1, dateSelected.year())}</span></div>
        <div className={`${(sem2&&month=== currentMonthNumber+1&&dateSelected.year() === moment().year())?'bg-yellow text-white font-bold':(dateSelected.year()=== moment().year() && month===currentMonthNumber+1&&single===false)?'bg-gold-week text-gray-500 ':'bg-gray-30'} ${single?'h-16':'h-12'} border border-black  pl-1 row-start-2`}>2da Sem<br/><span className={`${(sem2&&month=== currentMonthNumber+1&& dateSelected.year() === moment().year())?'text-white ':'text-black'} flex justify-center font-bold`}>{consultant.calcSelectPersonalWeek(month,2, dateSelected.year())}{consultant.calcSelectPersonalWeekISK(month,2, dateSelected.year())}/{consultant.calcUniversalWeek(month, 2, dateSelected.year())}{consultant.calcUniversalWeekISK(month,2, dateSelected.year())}</span></div>
        <div className={`${(sem3&&month=== currentMonthNumber+1&&dateSelected.year() === moment().year())?'bg-yellow text-white font-bold':(dateSelected.year()=== moment().year() && month===currentMonthNumber+1&&single===false)?'bg-gold-week text-gray-500 ':'bg-gray-30'} ${single?'h-16':'h-12'} border border-black  pl-1 row-start-3`}>3era Sem<br/><span className={`${(sem3&&month=== currentMonthNumber+1&& dateSelected.year() === moment().year())?'text-white ':'text-black'} flex justify-center font-bold`}>{consultant.calcSelectPersonalWeek(month,3, dateSelected.year())}{consultant.calcSelectPersonalWeekISK(month,3, dateSelected.year())}/{consultant.calcUniversalWeek(month, 3, dateSelected.year())}{consultant.calcUniversalWeekISK(month,3, dateSelected.year())}</span></div>
        <div className={`${(sem4&&month=== currentMonthNumber+1&&dateSelected.year() === moment().year())?' bg-yellow text-white font-bold':(dateSelected.year()=== moment().year() && month===currentMonthNumber+1)?'bg-gold-week text-gray-500 ':'bg-gray-30' }  ${single?'h-16':'h-12'} border border-black  pl-1 row-start-4 `}>4ta Sem<br/><span className={`${(sem4&&month=== currentMonthNumber+1&& dateSelected.year() === moment().year())?'text-white ':'text-black'} flex justify-center font-bold`}>{consultant.calcSelectPersonalWeek(month,4, dateSelected.year())}{consultant.calcSelectPersonalWeekISK(month,4, dateSelected.year())}/{consultant.calcUniversalWeek(month, 4, dateSelected.year())}{consultant.calcUniversalWeekISK(month,4, dateSelected.year())}</span></div>
        {(daysInMonth.length >28)?<div className={`${(sem4&&month=== currentMonthNumber+1&&dateSelected.year() === moment().year())?' bg-yellow':(dateSelected.year()=== moment().year() && month===currentMonthNumber+1)?'bg-gold-week text-gray-500 ':'bg-gray-30' }  ${single?'h-16':'h-12'} border border-black  pl-1 row-start-5`}>4ta Sem<br/><span className={`${(sem4&&month=== currentMonthNumber+1&& dateSelected.year() === moment().year())?'text-white ':'text-black'} flex justify-center font-bold`}>{consultant.calcSelectPersonalWeek(month,4, dateSelected.year())}{consultant.calcSelectPersonalWeekISK(month,4, dateSelected.year())}/{consultant.calcUniversalWeek(month, 4, dateSelected.year())}{consultant.calcUniversalWeekISK(month,4, dateSelected.year())}</span></div>:''}
      </div>
      <div className='col-start-2 col-end-8'>
        <div className={` ${single?'h-12':'h-6'} grid grid-cols-7 h-6 `}>
          {daysCustom.map((d,index)=>
            <div key={index} className={`bg-gray-30 border border-black px-1 text-center text-gray-500 `} >{d[0]}</div>
          )}
        </div>
        <div className=' grid grid-cols-7 '>
          {daysInMonth.map((day,index)=>
            <div key={index} className={`
              ${(day ===moment().date()&&month===currentMonthNumber+1&&dateSelected.year()===moment().year())?'bg-yellow text-white font-bold':(dateSelected.year()===moment().year()&&month===currentMonthNumber+1&&(sem1&&day>=1&&day<=7||sem2&&day>=8&&day<=14||sem3&&day>=15&&day<=21||sem4&&day>=22))?'bg-gold-week':(dateSelected.year() === moment().year()&&month===currentMonthNumber+1&&single===false)?' bg-gold-10 text-gray-500 ':'text-gray-500'}
              ${single?'h-16':'h-12'}
              border border-black p-1 `}>{day}<br/><span className={`${(dateSelected.year() === moment().year() &&day ===moment().date()&&month===currentMonthNumber+1)?'text-white':'text-black'} text-sm flex justify-center font-bold`}>{consultant.calcPersonalDay(day, month, dateSelected.year())}{consultant.calcPersonalDayISK(day, month, dateSelected.year())}/{consultant.calcUniversalDay(day, month, dateSelected.year())}{consultant.calcUniversalDayISK(day, month, dateSelected.year())}</span></div>
          )}
        </div>
      </div>
    </div>
    }
  </div>
)

}