import { TiPlus } from 'react-icons/ti';
import { useSelector } from 'react-redux';
import { AnnualReturn, UnselectedConsultant, UserPartnerSelect } from '../components';
import { dateSelect, useGroup } from '../hooks';
import { Group } from '../resources';

const GroupAnnualReturnsPage = () => {
  const { userActive } = useSelector(state => state.users);
  const isEmpty = Object.keys(userActive).length === 0;
  const { newDate } = dateSelect()
  const { group } = useGroup()
  if (isEmpty) {
    return <UnselectedConsultant />
  }
  const groupDate = userActive.dateGroup
  const groupConsult = new Group(group, groupDate)
  const isGroupEmpty = Object.keys(userActive.group).length === 0;

  const now = newDate.year()
  const annualReturn = groupConsult.annualReturn(now)
  const personalYear = groupConsult.calcPersonalYear(now)
  const yearsOld = groupConsult.getYearsOld(now)

  const y1 = newDate.year() - 4
  const annualReturnY1 = groupConsult.annualReturn(y1)
  const personalYearY1 = groupConsult.calcPersonalYear(y1)
  const yearsOldY1 = groupConsult.getYearsOld(y1)

  const y2 = newDate.year() - 3
  const annualReturnY2 = groupConsult.annualReturn(y2)
  const personalYearY2 = groupConsult.calcPersonalYear(y2)
  const yearsOldY2 = groupConsult.getYearsOld(y2)

  const y3 = newDate.year() - 2
  const annualReturnY3 = groupConsult.annualReturn(y3)
  const personalYearY3 = groupConsult.calcPersonalYear(y3)
  const yearsOldY3 = groupConsult.getYearsOld(y3)

  const y4 = newDate.year() - 1
  const annualReturnY4 = groupConsult.annualReturn(y4)
  const personalYearY4 = groupConsult.calcPersonalYear(y4)
  const yearsOldY4 = groupConsult.getYearsOld(y4)

  const y6 = newDate.year() + 1
  const annualReturnY6 = groupConsult.annualReturn(y6)
  const personalYearY6 = groupConsult.calcPersonalYear(y6)
  const yearsOldY6 = groupConsult.getYearsOld(y6)

  const y7 = newDate.year() + 2
  const annualReturnY7 = groupConsult.annualReturn(y7)
  const personalYearY7 = groupConsult.calcPersonalYear(y7)
  const yearsOldY7 = groupConsult.getYearsOld(y7)

  const y8 = newDate.year() + 3
  const annualReturnY8 = groupConsult.annualReturn(y8)
  const personalYearY8 = groupConsult.calcPersonalYear(y8)
  const yearsOldY8 = groupConsult.getYearsOld(y8)

  const y9 = newDate.year() + 4
  const annualReturnY9 = groupConsult.annualReturn(y9)
  const personalYearY9 = groupConsult.calcPersonalYear(y9)
  const yearsOldY9 = groupConsult.getYearsOld(y9)

  return (
    <div className='grid grid-cols-12 mx-14 gap-6 mt-8 py-10'>
      <UserPartnerSelect isGroup />
      {!isGroupEmpty
        ? (
<div className="col-span-12">
          <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
            <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-group p-2'>
              <TiPlus className='text-2xl' />
            </div>
            9 Retornos
          </div>
          <div className='pinnacle-wrap grid grid-cols-3 p-1'>
            <div className="bg-white p-4 h-80">
              <AnnualReturn
                annualReturn={annualReturnY1}
                personalYear={personalYearY1}
                yearsOld={yearsOldY1}
                year={y1}
                group
              />
            </div>
            <div className="bg-white p-4 h-80 border-gray-400 border-r border-l">
              <AnnualReturn
                annualReturn={annualReturnY2}
                personalYear={personalYearY2}
                yearsOld={yearsOldY2}
                year={y2}
                group
              />
            </div>
            <div className="bg-white p-4 h-80">
              <AnnualReturn
                annualReturn={annualReturnY3}
                personalYear={personalYearY3}
                yearsOld={yearsOldY3}
                year={y3}
                group
              />
            </div>
            <div className="bg-white p-4 h-80 border-gray-400 border-t border-b">
              <AnnualReturn
                annualReturn={annualReturnY4}
                personalYear={personalYearY4}
                yearsOld={yearsOldY4}
                year={y4}
                group
              />
            </div>
            <div className="bg-active-radial p-4 h-80 border-gray-400 border">
              <AnnualReturn
                current
                annualReturn={annualReturn}
                personalYear={personalYear}
                yearsOld={yearsOld}
                year={now}
                group
              />
            </div>
            <div className="bg-white p-4 h-80 border-gray-400 border-t border-b">
              <AnnualReturn
                annualReturn={annualReturnY6}
                personalYear={personalYearY6}
                yearsOld={yearsOldY6}
                year={y6}
                group
              />
            </div>
            <div className="bg-white p-4 h-80">
              <AnnualReturn
                annualReturn={annualReturnY7}
                personalYear={personalYearY7}
                yearsOld={yearsOldY7}
                year={y7}
                group
              />
            </div>
            <div className="bg-white p-4 h-80 border-gray-400 border-r border-l">
              <AnnualReturn
                annualReturn={annualReturnY8}
                personalYear={personalYearY8}
                yearsOld={yearsOldY8}
                year={y8}
                group
              />
            </div>
            <div className="bg-white p-4 h-80">
              <AnnualReturn
                annualReturn={annualReturnY9}
                personalYear={personalYearY9}
                yearsOld={yearsOldY9}
                year={y9}
                group
              />
            </div>
          </div>

</div>
)
      : <div className="col-span-12 text-center"><strong>Agrega/Selecciona una pareja para ver esta información</strong></div>
      }
    </div>
  )
  }
  export default GroupAnnualReturnsPage