import { useSelector } from 'react-redux';

export const QuaterPerYear = ({consultant}) =>{
  const { dateSelected } = useSelector(state => state.users);

  const nineYearCycle = consultant.getNineYearCycle(dateSelected.year())

  const listOfMonths = consultant.getCustomMonths()
  const indexOfMonth = listOfMonths.findIndex(i => i === 'Enero')
  // console.log(indexOfMonth);
  const CurrentQuaterFont = () =>{
    if(indexOfMonth===0){
      return(
        <>
          <div className='col-start-7 row-span-4 row-start-8 bg-gray-200'></div>
          <div className='col-start-7 row-span-3 row-start-12 bg-gray-200'></div>
          <div className='col-start-7 row-span-5 row-start-3 bg-gray-200'></div>
          {(consultant.birthDate.date()>1?
            <div className='col-start-6 row-span-1 row-start-15 bg-gray-200'></div>:
            <div className='col-start-7 row-span-1 row-start-15 bg-gray-200'></div>
          )}
          {nineYearCycle.map((d,i)=>
            <div  key={i} className={`row-start-3 col-start-${i+3} flex justify-center text-gray-500`}>{d}</div>
          )}
        </>
      )
    }
    if(indexOfMonth!==0&&indexOfMonth<5){
      return(
        <>
          <div className={`col-start-6 row-span-${5-indexOfMonth} row-start-${3+indexOfMonth} bg-gray-200`}></div>
          <div className={`col-start-7 row-span-${indexOfMonth} row-start-3 bg-gray-200`}></div>
          <div className='col-start-6 row-span-4 row-start-8 bg-gray-200'></div>
          <div className='col-start-6 row-span-4 row-start-12 bg-gray-200'></div>
          {nineYearCycle.map((data,i)=>
            <>
              <div className={`row-start-3 col-start-${i+3} flex justify-center text-gray-500`}>{data}</div>
              <div className={`row-start-7 col-start-${i+3} flex justify-center text-gray-500`}>{data+1}</div>
            </>
          )}

        </>
      )
    }
    if(indexOfMonth>4&&indexOfMonth<9){
      return(
        <>
          <div className={`col-start-6 row-span-${9-indexOfMonth} row-start-${3+indexOfMonth} bg-gray-200`}></div>
          <div className={`${indexOfMonth===5?'': 'row-start-8' } col-start-7 row-span-${4-(9-indexOfMonth)} bg-gray-200`}></div>
          <div className='col-start-7 row-span-5 row-start-3 bg-gray-200'></div>
          <div className='col-start-6 row-span-4 row-start-12 bg-gray-200'></div>
          {nineYearCycle.map((data,i)=>
            <>
              <div className={`row-start-8 col-start-${i+3} flex justify-center text-gray-500`}>{data}</div>
              <div className={`row-start-11 col-start-${i+3} flex justify-center text-gray-500`}>{data+1}</div>
            </>
          )}
        </>
      )
    }
    if(indexOfMonth>8&&indexOfMonth<12){
      return(
        <>
          <div className={`col-start-6 row-span-${4-(9-indexOfMonth)} row-start-${3+indexOfMonth} bg-gray-200`}></div>
          <div className={`${indexOfMonth===9?'':'row-start-12'} col-start-7 row-span-${4-(13-indexOfMonth)}  bg-gray-200`}></div>
          <div className='col-start-7 row-span-5 row-start-3 bg-gray-200'></div>
          <div className='col-start-7 row-span-4 row-start-8 bg-gray-200'></div>
          {nineYearCycle.map((data,i)=>
            <>
              <div className={`row-start-12 col-start-${i+3} flex justify-center text-gray-500`}>{data}</div>
              <div className={`row-start-15 col-start-${i+3} flex justify-center text-gray-500`}>{data+1}</div>
            </>
          )}
        </>
      )
    }
  }

return(
  <div id='destinityTable' className='flex overflow-x-auto w-full border border-solid border-gray-300'>
  <div className='grid grid-cols-11 grid-rows-14 w-full mx-4 my-8 border border-solid border-gray-500 '>
    <div className='col-start-1 col-end-3 row-start-1  flex justify-start items-center bg-main p-1 text-white font-bold border border-gray-500'>Año calendario</div>
    <div className='col-start-1 col-end-3  row-start-2 flex justify-start items-center p-1 bg-purple-30 font-bold border border-gray-500'>Año personal</div>
    <CurrentQuaterFont/>
    {listOfMonths.map((data, index) =>
      <>
        {(data === 'Enero'&&index <12)?<div className={`${(index===0?'row-start-14 ':`row-start-${index+2} `)}  col-start-1 border-b-4 border-yellow-300 col-span-full`}></div>:''}
        <div key={index} className={`${(index%2==0)?'bg-gray-300 ':'bg-gray-100 '}col-start-1 col-end-3 row-start-${index+3}  flex justify-start items-center border border-gray-500 p-1 odd:bg-gray-100 `} >{data}</div>
        {/*(index===0&&data ==='Enero')?<div className={`row-start-${index+4} col-start-7 flex justify-center text-gray-500`}>2022</div>:''*/}
      </>
    )}
    {nineYearCycle.map( (year, i) =>{
      return(
      <>
      <div className={` ${(dateSelected.year()===year)?'text-yellow-500 ':''} col-start-${i+3} row-start-1 flex justify-center items-center  bg-main text-white font-bold border border-gray-500`} >{year}</div>
      <div className={` ${(dateSelected.year()===year)?'font-bold ':''}col-start-${i+3} row-start-2 flex justify-center items-center p-1 bg-purple-30 border border-gray-500`} >{consultant.calcPersonalYear(year)}{consultant.calcPersonalYearISK(year)}</div>
      <div className={`
      ${(year!==dateSelected.year())?'text-gray-500':''}
        ${((year===dateSelected.year()||year ===dateSelected.year()-1)&&(indexOfMonth>=1&&indexOfMonth<=4))?'font-bold ':''}
        ${(year ===dateSelected.year())&&indexOfMonth>=5&&indexOfMonth<=8?'font-bold ':''}
        ${(indexOfMonth===0&&year===dateSelected.year())?'font-bold ':''}
        ${(indexOfMonth>=9&&indexOfMonth<=11&&year===dateSelected.year())?'font-bold ':''}
        col-start-${i+3}  row-start-3 row-span-5 text-5xl flex justify-center items-center border border-gray-500 text-gray-500 `} >{consultant.getQuaterOne()}{consultant.getQuaterOneISK()}</div>
      <div className={`
        ${((year===dateSelected.year()-1)&&indexOfMonth>=1&&indexOfMonth<=4)?'font-bold ':''}
        ${(indexOfMonth===0&&year===dateSelected.year())?'font-bold ':''}
        ${(year ===dateSelected.year()-1||year ===dateSelected.year())&&indexOfMonth>5&&indexOfMonth<=8?'font-bold ':''}
        ${(indexOfMonth===9&&year===dateSelected.year()-1)?'font-bold ':''}
        ${(indexOfMonth===5&&year===dateSelected.year()-1)?'font-bold ':''}
        ${(indexOfMonth>=9&&indexOfMonth<=11&&year===dateSelected.year())?'font-bold ':''}
        ${(year!==dateSelected.year())?'text-gray-500':''}
        col-start-${i+3} row-start-8 row-span-4  text-5xl flex justify-center items-center border border-gray-500 text-gray-500`} >{consultant.getQuaterTwo(year)}{consultant.getQuaterTwoISK(year)}</div>
      <div className={`
      ${(indexOfMonth===0&&year===dateSelected.year())?' font-bold':''}
      ${(indexOfMonth===0&&year===dateSelected.year()-1)?' font-bold ':''}
      ${(indexOfMonth>9&&indexOfMonth<=11&&(year===dateSelected.year()||year===dateSelected.year()-1))?' font-bold ':''}
      ${(indexOfMonth===9&&year===dateSelected.year()-1)?' font-bold ':''}
      ${(year ===dateSelected.year()-1)&&indexOfMonth>=5&&indexOfMonth<=8?' font-bold ':''}
      ${((year===dateSelected.year()-1)&&indexOfMonth>=1&&indexOfMonth<=4)?' font-bold ':''}
      ${(year!==dateSelected.year())?'text-gray-500':''}
      col-start-${i+3} row-start-12 row-span-4  text-5xl flex justify-center items-center border border-gray-500 text-gray-500 `} >{consultant.getQuaterThree(year)}{consultant.getQuaterThreeISK(year)}</div>
      </>
    )})}
  </div>
</div>
)
}