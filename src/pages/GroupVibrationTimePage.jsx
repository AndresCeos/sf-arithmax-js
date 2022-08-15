import { TiPlus } from "react-icons/ti";
import { useSelector } from "react-redux";
import { CircleNumber, HierarchyLine, QuaterPerMonth, QuaterPerYear, TimeCurve, UnselectedConsultant, UserPartnerSelect } from "../components";
import { dateSelect, useConsultant, useGroup } from "../hooks"
import { Group, Person } from "../resources";

const GroupVibrationTimePage = () =>{
  const { userActive } = useSelector(state => state.users);
  const isEmpty = Object.keys(userActive).length === 0;
  const {newDate} = dateSelect()
  const {group} = useGroup()
  if( isEmpty ){
    return<UnselectedConsultant />
  }
  const groupDate = userActive.dateGroup
  const groupConsult = new Group(group, groupDate )

  const isEmptyGroup = Object.keys(userActive.group).length === 0;
  const currentYear = newDate.year()
  const currentMonth = newDate.month()+1
  const currentDay = newDate.date()

  const nineYearCycleStage = groupConsult.getNineYearCycleStage(currentYear)
  return(
    <div className="grid grid-cols-12 mx-14 gap-6 mt-8 py-10">
      <UserPartnerSelect isGroup />
      {(!isEmptyGroup)?
        <>
          <div className="col-span-8">
            <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
              <div className="w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-group  p-2">
              <TiPlus className='text-2xl'/>
              </div>
              Energías Activas
            </div>
            <div className='pinnacle-wrap grid grid-cols-6 px-4 py-8 w-full '>
            <b className='col-start-1 row-start-1 text-sm'>Etapa Actual</b>
            <div className='col-start-1 row-start-2 row-span-2 m-auto'>
              <CircleNumber  size="sm" appearance="green-50" border="green">
                {groupConsult.getLifeStage(currentYear)}{groupConsult.getLifeStageISK(currentYear)}
              </CircleNumber>
            </div>
            <b className='col-start-2 row-start-2 text-sm pl-1'>Año Personal</b>
            <div className='col-start-2 row-start-3 row-span-2 cicle-year bg-secondary text-xl font-bold flex items-center justify-center rounded-md w-10 h-10 m-auto'>
              {groupConsult.calcPersonalYear(currentYear)}{groupConsult.calcPersonalYearISK(currentYear)}
            </div>
            <b className='col-start-3 row-start-3 text-sm pl-1'>Cuatrimestre</b>
            <div className='col-start-3 row-start-4 row-span-2 cicle-year bg-green-70 text-xl font-bold flex items-center justify-center rounded-md w-10 h-10 m-auto'>
              {groupConsult.calcCurrentQuater(newDate, currentYear)}{groupConsult.calcCurrentQuaterISK(newDate, currentYear)}
            </div>
            <b className='col-start-4 row-start-4 text-sm pl-1'>Mes Personal</b>
            <div className='col-start-4 row-start-5 row-span-2 cicle-year  bg-gold-50 text-xl font-bold flex items-center justify-center rounded-md w-10 h-10 m-auto'>
              {groupConsult.calcPersonalMonth(currentMonth,currentYear)}{groupConsult.calcPersonalMonthISK(currentMonth,currentYear)}
            </div>
            <b className='col-start-5 row-start-5 text-sm pl-1'>Sem Personal</b>
            <div className='col-start-5 row-start-6 row-span-2 cicle-year bg-ble-week-temp text-xl font-bold flex items-center justify-center rounded-md w-10 h-10 m-auto'>
              {groupConsult.calcPersonalWeek(currentDay,currentMonth,currentYear)}{groupConsult.calcPersonalWeekISK(currentDay,currentMonth,currentYear)}
            </div>
            <b className='col-start-6 row-start-6 text-sm pl-1'>Día Personal</b>
            <div className='col-start-6 row-start-7 row-span-2 cicle-year bg-red-day text-xl font-bold flex items-center justify-center rounded-md w-10 h-10 m-auto'>
              {groupConsult.calcPersonalDay(currentDay,currentMonth,currentYear)}{groupConsult.calcPersonalDayISK(currentDay,currentMonth,currentYear)}
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
              <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-group  p-2'>
                <TiPlus className='text-2xl'/>
              </div>
              Cuatrimestres por meses
            </div>
            <div className='pinnacle-wrap h-full '>
            <QuaterPerMonth consultant={groupConsult}/>
            </div>
          </div>
          <div className="col-span-8">
            <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
              <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-group  p-2'>
                <TiPlus className='text-2xl'/>
              </div>
              Ciclo de 9 años
            </div>
            <div className='pinnacle-wrap grid grid-cols-9 px-4 py-8 w-full'>
              <div className="col-start-4 col-end-6 flex justify-center items-center mb-6 row-start-1">
                Etapa {groupConsult.getLifeStageNumber(currentYear)}:
                <CircleNumber  size="sm" appearance="green-50" border="green">
                  {groupConsult.getLifeStage(currentYear)}{groupConsult.getLifeStageISK(currentYear)}
                </CircleNumber>
              </div>
              {nineYearCycleStage.map((year,i)=>
                <div key={i} className={`col-start-${i+1} row-start-2 border-t-2 border-green-700 pt-5`}>
                  <CircleNumber  size="sm" appearance={(year===currentYear)?'purple-30':'white'} border="main">
                    {groupConsult.calcPersonalYear(year)}{(groupConsult.calcPersonalYear(year)===2)?'/11':''}{(groupConsult.calcPersonalYear(year)===4)?'/22':''}{groupConsult.calcPersonalYearISK(year)}
                  </CircleNumber>
                  <b className={`${(year===currentYear)?'text-black':'text-gray-300'}`}>{year}</b><br/>
                  {groupConsult.getLifeStageNumber()===1?
                    <>
                    <b className={`${(year===currentYear)?'text-black':'text-gray-300'}`}>{year+9}</b><br/>
                    <b className={`${(year===currentYear)?'text-black':'text-gray-300'}`}>{year+18}</b><br/>
                    </>
                  :''}

                </div>
              )}
              <div className="col-start-4 border-r-2 row-start-1 border-green-700 h-4 mt-12"></div>
              <div className="col-start-1  row-start-2 flex justify-start h-4">
                <div className='border-r-2 border-green-700'></div>
              </div>
              <div className="col-start-10 row-start-2 flex justify-end h-4">
              <div className='border-l-2 border-green-700'></div>
              </div>
            </div>
          </div>
          <div className='col-span-full mb-10'>
          <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
            <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-group p-2'>
              <TiPlus className='text-2xl'/>
            </div>
            Línea de Jerarquía del Diálogo Energético
          </div>
          <div className='pinnacle-wrap px-8'>
            <HierarchyLine consultant={groupConsult}/>
          </div>
          </div>
          <div className='col-span-full'>
            <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
              <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-group  p-2'>
                <TiPlus className='text-2xl'/>
              </div>
              Cuatrimestres por Año
            </div>
            <div className='pinnacle-wrap'>
              <QuaterPerYear consultant={groupConsult} isGroup />
            </div>
          </div>
          <div className='col-span-full mb-10'>
          <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
            <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-group p-2'>
              <TiPlus className='text-2xl'/>
            </div>
            Curva del tiempo
          </div>
          <div className='pinnacle-wrap px-8 py-8'>
            <TimeCurve consultant={groupConsult} isPartner />
          </div>
          </div>
        </>
      :
        <div className="col-span-12 text-center"><strong>Agrega/Selecciona una pareja para ver esta información</strong></div>
      }
      </div>

  )
  }

  export default GroupVibrationTimePage