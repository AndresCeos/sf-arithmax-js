import { useSelector } from 'react-redux'

export const DestinityTable = ({ table, start, consultant, nameCycles, nameSubCycles }) => {
  const { dateSelected } = useSelector(state => state.users);

  const consultantAge = consultant.getYearsOld( dateSelected.year() )
  const isCycle = i => {
    return i === consultantAge ? false : nameCycles.includes(i)
  }
  const isSubCycle = i => {
    return i === consultantAge ? false : nameSubCycles.includes(i)
  }
  const bkConfig = ( i , bg ) => {
    if(i === consultantAge){
      return 'bg-gold'
    }
    if( isCycle(i) ){
      return 'bg-gold-40'
    }
    if( isSubCycle(i) ){
      return 'bg-gold-30'
    }
    return bg
  }

  return(
    <div className='destinity-table flex mb-8'>
      <div className='w-32'>
        <div className='h-6 w-32 text-13 font-black bg-main-30 border-t border-gray-400 border-l border-r flex items-center justify-start px-1'>
          Año
        </div>
        <div className='h-6 text-13 font-black bg-black bg-opacity-10 border-b border-l border-r border-gray-400 flex items-center justify-start px-1'>
          Edad
        </div>
        <div className='h-12 text-13 font-black bg-white border-b border-l border-r border-gray-400 flex items-center justify-start px-1'>
          Plano Mental
        </div>
        <div className='h-12 text-13 font-black bg-white border-b border-l border-r border-gray-400 flex items-center justify-start px-1'>
          Plano Físico
        </div>
        <div className='h-12 text-13 font-black bg-white border-b border-l border-r border-gray-400 flex items-center justify-start px-1'>
          Plano Emocional
        </div>
        <div className='h-10 text-13 font-black bg-pink border-b border-l border-r border-gray-400 flex items-center justify-start px-1'>
          Plano Espiritual
        </div>
        {/* <div className='h-10 text-13 font-black bg-gray-300 text-gray-500 border-b border-gray-400 border-l border-r px-1'>Ciclo del<br/>Nombre </div> */}
        <div className='mt-5 h-10 text-13 font-black bg-gray bg-opacity-15 border-b border-l border-r border-t border-gray-400 flex items-center justify-start px-1'>
          Año Personal
        </div>
        <div className='h-10 text-13 font-black bg-white border-b border-l border-r border-gray-400 flex items-center justify-start px-1'>
          Núm. Destino
        </div>
      </div>
      { table.map( (el, i) =>
        <div key={i} className='nameBreakdown'>
          <div className={`h-6 w-30 text-10 font-black ${bkConfig( i + start, 'bg-main-30')} text-center border-t border-gray-400 border-r`}>
            {consultant.getYearOfBirth() + i + start}
          </div>
          <div className={`h-6 w-30 text-13 ${bkConfig( i + start, 'bg-black bg-opacity-10')} text-center border-b border-r border-gray-400`}>{i + start} </div>
          <div className={`h-12 w-30 text-13 ${bkConfig( i + start, 'bg-white')} border-b border-r border-gray-400 flex flex-col`}>
            <strong className='h-6 text-center border-b border-gray-400 w-full'>{el.pmC}</strong>
            <label className='h-6 text-center'>{el.pmN}/{el.pmD}</label>
          </div>
          <div className={`h-12 w-30 text-13 ${bkConfig( i + start, 'bg-white')} border-b border-r border-gray-400 flex flex-col`}>
            <strong className='h-6 text-center border-b border-gray-400 w-full'>{el.pMC}</strong>
            <label className='h-6 text-center'>{el.pMN}/{el.pMD}</label>
          </div>
          <div className={`h-12 w-30 text-13 ${bkConfig( i + start, 'bg-white')} border-b border-r border-gray-400 flex flex-col`}>
            <strong className='h-6 text-center border-b border-gray-400 w-full'>{el.pfC}</strong>
            <label className='h-6 text-center'>{el.pfN}/{el.pfD}</label>
          </div>
          <div className={`h-10 w-30 text-13 ${bkConfig( i + start, 'bg-pink')} border-b border-r border-gray-400 flex items-center justify-center`}>
            <strong>{consultant.reduceNumber( el.pmD + el.pMD + el.pfD)}</strong>
          </div>

          <div className={`mt-5 h-10 w-30 text-13 ${bkConfig( i + start, 'bg-gray bg-opacity-15')} border-b border-r border-t border-gray-400 flex items-center justify-center`}>
            {consultant.calcPersonalYear(consultant.getYearOfBirth() + i + start)}
          </div>
          <div className={`h-10 w-30 text-13 ${bkConfig( i + start, 'bg-white')} border-b border-r border-gray-400 flex items-center justify-center`}>
            {consultant.reduceNumber( el.pmD + el.pMD + el.pfD + consultant.calcPersonalYear(consultant.getYearOfBirth() + i + start) ) }
          </div>
        </div>
      )}
    </div>
  )
}