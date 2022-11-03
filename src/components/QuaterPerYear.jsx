import { dateSelect } from '../hooks';

export const QuaterPerYear = ({ consultant, isGroup }) => {
  const { newDate } = dateSelect()

  const nineYearCycle = consultant.getNineYearCycle(newDate.year())

  const listOfMonths = consultant.getCustomMonths()
  const indexOfMonth = listOfMonths.findIndex(i => i === 'Enero')
  const bornFirst = consultant.getDayOfBirth()
  console.log(`Index del mes =>${indexOfMonth}`);
  const CurrentQuaterFont = () => {
    if (indexOfMonth === 0) {
      if (isGroup) {
        return (
          <>
            <div className='col-start-7 row-span-4 row-start-8 bg-active-radial' />
            <div className='col-start-7 row-span-3 row-start-12 bg-active-radial' />
            <div className='col-start-7 row-span-5 row-start-3 bg-active-radial' />
            {nineYearCycle.map((d, i) =>
              <div key={i} className={`row-start-3 col-start-${i + 3} flex justify-center text-gray-500`}>{d}</div>)}
          </>
        )
      }
      return (
        <>
          <div className='col-start-7 row-span-4 row-start-8 bg-active-radial' />
          <div className='col-start-7 row-span-3 row-start-12 bg-active-radial' />
          <div className='col-start-7 row-span-5 row-start-3 bg-active-radial' />
          {(consultant.birthDate.date() > 1
            ? <div className='col-start-6 row-span-1 row-start-15 bg-active-radial' />
            : null
          )}
          {nineYearCycle.map((d, i) => (
            <>
              <div key={i} className={`${bornFirst !== 1 ? 'row-start-12' : 'row-start-3'}  col-start-${i + 3} flex justify-center text-gray-500`}>{d}</div>
              {bornFirst !== 1 ? <div className={`row-start-15 col-start-${i + 3} flex justify-center text-gray-500`}>{d + 1}</div> : null}
            </>
          ))}
        </>
      )
    }
    if (indexOfMonth !== 0 && indexOfMonth < 5) {
      return (
        <>
          {bornFirst === 1 && indexOfMonth === 4 ? '' : <div className={`col-start-6 row-span-${bornFirst === 1 ? (4 - indexOfMonth) : (5 - indexOfMonth)} row-start-${3 + indexOfMonth} bg-active-radial`} />}
          <div className={`col-start-7 row-span-${indexOfMonth} row-start-3 bg-active-radial`} />
          <div className={`col-start-6 row-span-4 ${bornFirst === 1 ? 'row-start-7' : 'row-start-8'} bg-active-radial`} />
          <div className={`col-start-6 row-span-4 ${bornFirst === 1 ? 'row-start-11' : 'row-start-12'} bg-active-radial`} />
          {nineYearCycle.map((data, i) => (
            <>
              <div className={`row-start-3 col-start-${i + 3} flex justify-center text-gray-500`}>{data}</div>
              <div className={`${bornFirst === 1 ? 'row-start-6' : 'row-start-7'} col-start-${i + 3} flex justify-center text-gray-500`}>{data + 1}</div>
            </>
          ))}

        </>
      )
    }
    if (indexOfMonth > 4 && indexOfMonth < 9) {
      return (
        <>
          {indexOfMonth === 8 && bornFirst === 1 ? '' : <div className={`col-start-6 row-span-${bornFirst === 1 ? (8 - indexOfMonth) : (9 - indexOfMonth)} row-start-${3 + indexOfMonth} bg-active-radial`} />}
          {indexOfMonth === 5 && bornFirst !== 1 ? '' : <div className={`${bornFirst === 1 ? 'row-start-7' : 'row-start-8'}  col-start-7 row-span-${bornFirst === 1 ? (4 - (8 - indexOfMonth)) : (4 - (9 - indexOfMonth))} bg-active-radial`} />}
          <div className={`col-start-7 ${bornFirst === 1 ? 'row-span-4' : 'row-span-5'} row-start-3 bg-active-radial`} />
          <div className={`col-start-6 row-span-4 ${bornFirst === 1 ? 'row-start-11' : 'row-start-12'} bg-active-radial `} />
          {nineYearCycle.map((data, i) => (
            <>
              <div className={`${bornFirst === 1 ? 'row-start-7' : 'row-start-8'}  col-start-${i + 3} flex justify-center text-gray-500`}>{data}</div>
              <div className={`${bornFirst === 1 ? 'row-start-10' : 'row-start-11'} col-start-${i + 3} flex justify-center text-gray-500`}>{data + 1}</div>
            </>
          ))}
        </>
      )
    }
    if (indexOfMonth > 8 && indexOfMonth < 12) {
      return (
        <>
          <div className={`col-start-6 row-span-${bornFirst === 1 ? ((12 - indexOfMonth)) : ((13 - indexOfMonth))} row-start-${3 + indexOfMonth} bg-active-radial`} />
          {indexOfMonth === 9 && bornFirst !== 1 ? '' : <div className={`${bornFirst === 1 ? 'row-start-11' : 'row-start-12'}  col-start-7 row-span-${bornFirst === 1 ? (4 - (12 - indexOfMonth)) : (4 - (13 - indexOfMonth))}  bg-active-radial`} />}
          <div className={`col-start-7 ${bornFirst === 1 ? 'row-span-4' : 'row-span-5'}  row-start-3 bg-active-radial`} />
          <div className={`col-start-7 ${bornFirst === 1 ? 'row-start-7' : 'row-start-8'}   row-span-4 bg-active-radial`} />
          {nineYearCycle.map((data, i) => (
            <>
              <div className={`${consultant.getDayOfBirth() === 1 ? 'row-start-11' : 'row-start-12'} col-start-${i + 3} flex justify-center text-gray-500`}>{data}</div>
              <div className={`${consultant.getDayOfBirth() === 1 ? 'row-start-14' : 'row-start-15'} col-start-${i + 3} flex justify-center text-gray-500`}>{data + 1}</div>
            </>
          ))}
        </>
      )
    }
  }

  return (
    <div id='destinityTable' className='flex overflow-x-auto w-full border border-solid border-gray-300'>
      <div className='grid grid-cols-11 grid-rows-14 w-full mx-4 my-8 border border-solid border-gray-500 '>
        <div className='col-start-1 col-end-3 row-start-1  flex justify-start items-center bg-main p-1 text-white font-bold border border-gray-500'>Año calendario</div>
        <div className='col-start-1 col-end-3  row-start-2 flex justify-start items-center p-1 bg-purple-30 font-bold border border-gray-500'>Año personal</div>
        <CurrentQuaterFont />
        {listOfMonths.map((data, index) => (
          <>
            {(data === 'Enero' && index < 12) ? <div className={`${(index === 0 ? 'row-start-14 ' : `row-start-${index + 2} `)}  col-start-1 border-b-4 border-yellow-300 col-span-full`} /> : ''}
            <div key={index} className={`${(index % 2 === 0) ? 'bg-gray-300 ' : 'bg-gray-100 '} col-start-1 col-end-3 row-start-${index + 3}  flex justify-start items-center border border-gray-500 p-1 `}>{data}</div>
            {/* (index===0&&data ==='Enero')?<div className={`row-start-${index+4} col-start-7 flex justify-center text-gray-500`}>2022</div>:'' */}
          </>
        ))}
        {nineYearCycle.map((year, i) => {
          return (
            <>
              <div className={` ${(newDate.year() === year) ? 'text-yellow-500 ' : ''} col-start-${i + 3} row-start-1 flex justify-center items-center  bg-main text-white font-bold border border-gray-500`}>{year}</div>
              <div className={` ${(newDate.year() === year) ? 'font-bold ' : ''}col-start-${i + 3} row-start-2 flex justify-center items-center p-1 bg-purple-30 border border-gray-500`}>{consultant.calcPersonalYear(year)}{consultant.calcPersonalYearISK(year)}</div>
              <div className={`
      ${(year !== newDate.year()) ? 'text-gray-500' : ''}
        ${((year === newDate.year() || year === newDate.year() - 1) && (indexOfMonth >= 1 && indexOfMonth <= 4)) ? 'font-bold ' : ''}
        ${(year === newDate.year()) && indexOfMonth >= 5 && indexOfMonth <= 8 ? 'font-bold ' : ''}
        ${(indexOfMonth === 0 && year === newDate.year()) ? 'font-bold ' : ''}
        ${(indexOfMonth >= 9 && indexOfMonth <= 11 && year === newDate.year()) ? 'font-bold ' : ''}
        col-start-${i + 3}  row-start-3 ${consultant.getDayOfBirth() === 1 ? 'row-span-4' : 'row-span-5'}  text-5xl flex justify-center items-center border border-gray-500 text-gray-500 `}
              >{consultant.getQuaterOne()}{consultant.getQuaterOneISK()}
              </div>
              <div className={`
        ${((year === newDate.year() - 1) && indexOfMonth >= 1 && indexOfMonth <= 4) ? 'font-bold ' : ''}
        ${(indexOfMonth === 0 && year === newDate.year()) ? 'font-bold ' : ''}
        ${(year === newDate.year() - 1 || year === newDate.year()) && indexOfMonth > 5 && indexOfMonth <= 8 ? 'font-bold ' : ''}
        ${(indexOfMonth === 9 && year === newDate.year() - 1) ? 'font-bold ' : ''}
        ${(indexOfMonth === 5 && year === newDate.year() - 1) ? 'font-bold ' : ''}
        ${(indexOfMonth >= 9 && indexOfMonth <= 11 && year === newDate.year()) ? 'font-bold ' : ''}
        ${(year !== newDate.year()) ? 'text-gray-500' : ''}
        col-start-${i + 3} ${consultant.getDayOfBirth() === 1 ? 'row-start-7' : 'row-start-8'}  row-span-4  text-5xl flex justify-center items-center border border-gray-500 text-gray-500`}
              >{consultant.getQuaterTwo(year)}{consultant.getQuaterTwoISK(year)}
              </div>
              <div className={`
      ${(indexOfMonth === 0 && year === newDate.year()) ? ' font-bold' : ''}
      ${(indexOfMonth === 0 && year === newDate.year() - 1) ? ' font-bold ' : ''}
      ${(indexOfMonth > 9 && indexOfMonth <= 11 && (year === newDate.year() || year === newDate.year() - 1)) ? ' font-bold ' : ''}
      ${(indexOfMonth === 9 && year === newDate.year() - 1) ? ' font-bold ' : ''}
      ${(year === newDate.year() - 1) && indexOfMonth >= 5 && indexOfMonth <= 8 ? ' font-bold ' : ''}
      ${((year === newDate.year() - 1) && indexOfMonth >= 1 && indexOfMonth <= 4) ? ' font-bold ' : ''}
      ${(year !== newDate.year()) ? 'text-gray-500' : ''}
      col-start-${i + 3} ${consultant.getDayOfBirth() === 1 ? 'row-start-11' : 'row-start-12'}  row-span-4  text-5xl flex justify-center items-center border border-gray-500 text-gray-500 `}
              >{consultant.getQuaterThree(year)}{consultant.getQuaterThreeISK(year)}
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}