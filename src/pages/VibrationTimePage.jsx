import { useSelector } from 'react-redux';
import { AnnualReturn, QuaterPerMonth, QuaterPerYear,
  UnselectedConsultant, CircleNumber } from '../components/';
import { useConsultant, dateSelect } from '../hooks';

import { TiPlus } from "react-icons/ti";

const VibrationTimePage = () =>{
  const { userActive } = useSelector(state => state.users);
  const isEmpty = Object.keys(userActive).length === 0;
  const { consultant } = useConsultant()
  const {newDate} = dateSelect()

  if( isEmpty ){
    return <UnselectedConsultant />
  }

  const annualReturnCurrent = consultant.annualReturn(newDate.year())
  const annualReturnLastYear = consultant.annualReturn(newDate.year()-1)
  const annualReturnNextYear = consultant.annualReturn(newDate.year()+1)

  const nineYearCycle = consultant.getNineYearCycle(newDate.year())

  return(
    <>
      <div className='grid grid-cols-12 mt-8 mx-14 gap-6 pb-9 pt-10'>
        <div className="col-span-8">
        <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
            <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-green-s p-2'>
              <TiPlus className='text-2xl'/>
            </div>
            Energías Activas
          </div>
          <div className='pinnacle-wrap grid grid-cols-6 px-4 py-8 w-full '>
            <b className='col-start-1 row-start-1 text-sm'>Etapa Actual</b>
            <div className='col-start-1 row-start-2 row-span-2 m-auto'>
              <CircleNumber  size="sm" appearance="green-50" border="green">
                {consultant.getLifeStage(newDate.year())}{consultant.getLifeStageISK(newDate.year())}
              </CircleNumber>
            </div>
            <b className='col-start-2 row-start-2 text-sm pl-1'>Año Personal</b>
            <div className='col-start-2 row-start-3 row-span-2 cicle-year bg-secondary text-xl font-bold flex items-center justify-center rounded-md w-10 h-10 m-auto'>
              {consultant.calcPersonalYear(newDate.year())}{consultant.calcPersonalYearISK(newDate.year())}
            </div>
            <b className='col-start-3 row-start-3 text-sm pl-1'>Cuatrimestre</b>
            <div className='col-start-3 row-start-4 row-span-2 cicle-year bg-green-70 text-xl font-bold flex items-center justify-center rounded-md w-10 h-10 m-auto'>
              {consultant.calcCurrentQuater(newDate, newDate.year())}{consultant.calcCurrentQuaterISK(newDate, newDate.year())}
            </div>
            <b className='col-start-4 row-start-4 text-sm pl-1'>Mes Personal</b>
            <div className='col-start-4 row-start-5 row-span-2 cicle-year bg-gold-50 text-xl font-bold flex items-center justify-center rounded-md w-10 h-10 m-auto'>
              {consultant.calcPersonalMonth(newDate.month()+1,newDate.year())}{consultant.calcPersonalMonthISK(newDate.month()+1,newDate.year())}
            </div>
            <b className='col-start-5 row-start-5 text-sm pl-1'>Sem Personal</b>
            <div className='col-start-5 row-start-6 row-span-2 cicle-year bg-ble-week-temp text-xl font-bold flex items-center justify-center rounded-md w-10 h-10 m-auto'>
              {consultant.calcPersonalWeek(newDate.date(), newDate.month()+1, newDate.year())}{consultant.calcPersonalWeekISK(newDate.date(), newDate.month()+1, newDate.year())}
            </div>
            <b className='col-start-6 row-start-6 text-sm pl-1'>Día Personal</b>
            <div className='col-start-6 row-start-7 row-span-2 cicle-year bg-red-day text-xl font-bold flex items-center justify-center rounded-md w-10 h-10 m-auto'>
              {consultant.calcPersonalDay(newDate.date(), newDate.month()+1, newDate.year())}{consultant.calcPersonalDayISK(newDate.date(), newDate.month()+1, newDate.year())}
            </div>
            <div className='col-start-1 row-start-1 row-end-10 flex justify-end mt-2'>
              <div className='border-r-2 border-t-2 border-b-2 w-3 h-full  border-gray-300'></div>
            </div>
            <div className="border-t-2 col-start-2 row-start-2 border-gray-300 w-2"></div>
            <div className='col-start-2 row-start-2 row-end-9 flex justify-end mt-2'>
              <div className='border-r-2 border-t-2 border-b-2 w-3 h-full  border-gray-300'></div>
            </div>
            <div className="border-t-2 col-start-3 row-start-3 border-gray-300 w-2"></div>
            <div className='col-start-3 row-start-3 row-span-6 flex justify-end mt-2'>
              <div className='border-r-2 border-t-2 border-b-2 w-3 h-full  border-gray-300'></div>
            </div>
            <div className="border-t-2 col-start-4 row-start-4 border-gray-300 w-2"></div>
            <div className='col-start-4 row-start-4 row-span-6 flex justify-end mt-2'>
              <div className='border-r-2 border-t-2 border-b-2 w-3 h-full  border-gray-300'></div>
            </div>
            <div className="border-t-2 col-start-5 row-start-5 border-gray-300 w-2"></div>
            <div className='col-start-5 row-start-5 row-span-6 flex justify-end mt-2'>
              <div className='border-r-2 border-t-2 border-b-2 w-3 h-full  border-gray-300'></div>
            </div>
            <div className="border-t-2 col-start-6 row-start-6 border-gray-300 w-2"></div>
          </div>
        </div>
        <div className='col-span-4 row-span-2 mb-8'>
        <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl '>
          <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-green-s p-2'>
            <TiPlus className='text-2xl'/>
          </div>
          Cuatrimestres por meses
        </div>
        <div className='pinnacle-wrap h-full '>
        <QuaterPerMonth consultant={consultant}/>
        </div>

        </div>
        <div className="col-span-8">
        <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
            <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-green-s p-2'>
              <TiPlus className='text-2xl'/>
            </div>
            Ciclo de 9 años
          </div>
          <div className='pinnacle-wrap grid grid-cols-9 px-4 py-8 w-full'>
            <div className="col-start-4 col-end-6 flex justify-center items-center mb-6 row-start-1">
              Etapa {consultant.getLifeStageNumber(newDate.year())}:
              <CircleNumber  size="sm" appearance="green-50" border="green">
                {consultant.getLifeStage(newDate.year())}{consultant.getLifeStageISK(newDate.year())}
              </CircleNumber>
            </div>
            {nineYearCycle.map((year,i)=>
              <div key={i} className={`col-start-${i+1} row-start-2 border-t-2 border-green-700 pt-5`}>
                <CircleNumber  size="sm" appearance={(year===newDate.year())?'purple-30':'white'} border="main">
                  {consultant.calcPersonalYear(year)}{consultant.calcPersonalYearISK(year)}
                </CircleNumber>
                <b className={`${(year===newDate.year())?'text-black':'text-gray-300'}`}>{year}</b><br/>
                {(consultant.getLifeStageNumber(newDate.year()) === 1)?
                  <>
                    <b className={`${(year===newDate.year())?'text-black':'text-gray-300'}`}>{year+9}</b><br/>
                    <b className={`${(year===newDate.year())?'text-black':'text-gray-300'}`}>{year+18}</b><br/>
                  </>
                :''}
              </div>
            )}
            <div className="col-start-4 border-r-2 row-start-1 border-green-700 h-4 mt-12"></div>
            <div className="col-start-1  row-start-2 flex justify-start h-4">
              <div className='border-r-2 border-green-700'></div>
            </div>
            <div className="col-start-9 row-start-2 flex justify-end h-4">
            <div className='border-l-2 border-green-700'></div>
            </div>
          </div>
        </div>
        <div className='col-span-full'>
        <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
          <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-green-s p-2'>
            <TiPlus className='text-2xl'/>
          </div>
          Cuatrimestres por Año
        </div>
        <div className='pinnacle-wrap'>
          <QuaterPerYear consultant={consultant}/>
        </div>
        </div>
        <div className="col-span-full">
        <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
        <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-green-s p-2'>
          <TiPlus className='text-2xl'/>
        </div>
        Análisis del Tiempo
        </div>
          <div className='pinnacle-wrap grid grid-cols-3 '>
            <div className='col-start-1 border-r border-gray-500 px-4 py-8'>
              <AnnualReturn annualReturn={annualReturnLastYear} />
            </div>
            <div className='col-start-2 px-4 py-8 bg-active-radial'>
              <AnnualReturn annualReturn={annualReturnCurrent} current months  />
            </div>
            <div className='col-start-3 border-l border-gray-500 px-4 py-8'>
              <AnnualReturn annualReturn={annualReturnNextYear} />
            </div>
          </div>
        </div>
      </div>
    </>
  )

}
export default VibrationTimePage;