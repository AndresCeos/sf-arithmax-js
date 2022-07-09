import { useSelector } from 'react-redux';

import { SingleMonth, UnselectedConsultant, CircleNumber } from '../components/';
import { useConsultant } from '../hooks';

import { TiPlus } from "react-icons/ti";

const CalendarPage = () => {
  const { userActive, dateSelected } = useSelector(state => state.users);
  const isEmpty = Object.keys(userActive).length === 0;
  const { consultant } = useConsultant()

  if( isEmpty ){
    return <UnselectedConsultant />
  }

  const allMonths = consultant.getAllMonths()

  return(
    <>
      <div className="grid grid-cols-12 mt-8 mx-14 gap-6 pb-9 pt-10">
        <div className="col-span-12">
          <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
            <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-green-600 p-2'>
              <TiPlus className='text-2xl'/>
            </div>
            Calendario Anual: {dateSelected.year()}
          </div>
          <div className="pinnacle-wrap grid grid-cols-2 px-4 py-8 w-full ">
            <div className="col-start-1 row-start-1 col-end-3 flex items-center justify-center">
                <div className="text-xl text-black font-bold px-2">{dateSelected.year()}:</div>
                <div className="text-sm text-gray-500 px-2 font-bold">Año Personal</div>
                <div className=" px-2">
                <CircleNumber  size="sm" appearance="purple-30" border="main">
                  {consultant.calcPersonalYear(dateSelected.year())}
                  {consultant.calcPersonalYearISK(dateSelected.year())}
                </CircleNumber>
              </div>
              <div className="text-black font-bold text-xl px-2"> / </div>
              <div className=" px-2">
                <CircleNumber  size="sm" appearance="purple-30" border="main">
                  {consultant.calcUniversalYear(dateSelected.year())}
                  {consultant.calcUniversalYearISK(dateSelected.year())}
                </CircleNumber>
              </div>
              <div className="text-sm text-gray-500 px-2 font-bold">Año Universal</div>
            </div>
            {allMonths.map((month, index)=>
              <div className=''>
                <SingleMonth key={index} consultant={consultant} month={index+1} single={false}/> 
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default CalendarPage;