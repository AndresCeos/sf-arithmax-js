import { useSelector } from 'react-redux';

import { SingleMonth, UnselectedConsultant, CircleNumber } from '../components/';

import { TiPlus } from "react-icons/ti";
import { useConsultant, dateSelect } from '../hooks';


const CalendarMonthPage = () =>{
  const { userActive } = useSelector(state => state.users);
  const { consultant } = useConsultant()
  const {newDate} = dateSelect()

  const isEmpty = Object.keys(userActive).length === 0;

  if( isEmpty ){
    return <UnselectedConsultant />
  }

  return(
    <>
      <div className='grid grid-cols-12 mt-8 mx-14 gap-6 pb-9 pt-10'>
        <div className="col-span-12">
          <div  className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
            <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-green-600 p-2'>
                <TiPlus className='text-2xl'/>
            </div>
            Calendario Anual: {newDate.year()}
          </div>
          <div className='pinnacle-wrap gird grid-cols-2 px-4 py-8 w-full'>
            <div className="col-start-1 row-start-1 col-end-3 flex items-center justify-start">
              <div className="text-xl text-black font-bold px-2">
                {newDate.year()}:
              </div>
              <div className="text-sm text-gray-500 px-2 font-bold">
                Año Personal
              </div>
              <div className=" px-2">
                <CircleNumber size="sm" appearance="purple-30" border="main">
                  {consultant.calcPersonalYear(newDate.year())}
                  {consultant.calcPersonalYearISK(newDate.year())}
                </CircleNumber>
              </div>
              <div className="text-black font-bold text-xl px-2"> / </div>
              <div className=" px-2">
                <CircleNumber  size="sm" appearance="purple-30" border="main">
                  {consultant.calcUniversalYear(newDate.year())}
                  {consultant.calcUniversalYearISK(newDate.year())}
                </CircleNumber>
              </div>
              <div className="text-sm text-gray-500 px-2 font-bold">
                Año Universal
              </div>
            </div>
            <div className="row-start-2 col-start-1 col-end-3">
              <SingleMonth consultant={consultant} month={newDate.month()+1} single={true}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}
export default CalendarMonthPage;