import { useSelector } from 'react-redux';

import { AnnualReturn, UnselectedConsultant } from '../components';
import { dateSelect, useConsultant } from '../hooks';

import { TiPlus } from 'react-icons/ti';

const AnnualReturnsPage = () => {
  const { userActive } = useSelector(state => state.users);
  const { newDate } = dateSelect()
  const isEmpty = Object.keys(userActive).length === 0;
  const { consultant } = useConsultant()

  if (isEmpty) {
    return <UnselectedConsultant />
  }

  const now = newDate.year()
  const annualReturn = consultant.annualReturn(now)
  const personalYear = consultant.calcPersonalYear(now)
  const yearsOld = consultant.getYearsOld(now)

  const y1 = newDate.year() - 4
  const annualReturnY1 = consultant.annualReturn(y1)
  const personalYearY1 = consultant.calcPersonalYear(y1)
  const yearsOldY1 = consultant.getYearsOld(y1)

  const y2 = newDate.year() - 3
  const annualReturnY2 = consultant.annualReturn(y2)
  const personalYearY2 = consultant.calcPersonalYear(y2)
  const yearsOldY2 = consultant.getYearsOld(y2)

  const y3 = newDate.year() - 2
  const annualReturnY3 = consultant.annualReturn(y3)
  const personalYearY3 = consultant.calcPersonalYear(y3)
  const yearsOldY3 = consultant.getYearsOld(y3)

  const y4 = newDate.year() - 1
  const annualReturnY4 = consultant.annualReturn(y4)
  const personalYearY4 = consultant.calcPersonalYear(y4)
  const yearsOldY4 = consultant.getYearsOld(y4)

  const y6 = newDate.year() + 1
  const annualReturnY6 = consultant.annualReturn(y6)
  const personalYearY6 = consultant.calcPersonalYear(y6)
  const yearsOldY6 = consultant.getYearsOld(y6)

  const y7 = newDate.year() + 2
  const annualReturnY7 = consultant.annualReturn(y7)
  const personalYearY7 = consultant.calcPersonalYear(y7)
  const yearsOldY7 = consultant.getYearsOld(y7)

  const y8 = newDate.year() + 3
  const annualReturnY8 = consultant.annualReturn(y8)
  const personalYearY8 = consultant.calcPersonalYear(y8)
  const yearsOldY8 = consultant.getYearsOld(y8)

  const y9 = newDate.year() + 4
  const annualReturnY9 = consultant.annualReturn(y9)
  const personalYearY9 = consultant.calcPersonalYear(y9)
  const yearsOldY9 = consultant.getYearsOld(y9)


  return (
    <div className='grid grid-cols-12 mt-8 mx-14 pb-10 pt-10'>
        <div className='col-span-13'>
          <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
            <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-green-s p-2'>
              <TiPlus className='text-2xl' />
            </div>
            9 Curva del tiempo
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
    </div>
  )
}

export default AnnualReturnsPage;