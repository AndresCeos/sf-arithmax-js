export const SinastryDestinyTable = ({ table, start, consultant, startP, partner, tableP }) => {

  let partnerDT = [];
  // console.log( { table, start, consultant, startP, partner, tableP } )
  for (let i = 0; i < table.length; i++) {
    partnerDT.push({
      pmC: table[i].pmC,
      pmN: table[i].pmN,
      pmD: table[i].pmD,
      pMC: table[i].pMC,
      pMN: table[i].pMN,
      pMD: table[i].pMD,
      pfC: table[i].pfC,
      pfN: table[i].pfN,
      pfD: table[i].pfD,

      pmCP: tableP[i].pmC,
      pmNP: tableP[i].pmN,
      pmDP: tableP[i].pmD,
      pMCP: tableP[i].pMC,
      pMNP: tableP[i].pMN,
      pMDP: tableP[i].pMD,
      pfCP: tableP[i].pfC,
      pfNP: tableP[i].pfN,
      pfDP: tableP[i].pfD,

      pmCPC: `${table[i].pmC} ${tableP[i].pmC}`,
      pmNPC: consultant.reduceNumber(table[i].pmN + tableP[i].pmN),
      pmDPC: consultant.reduceNumber(table[i].pmD + tableP[i].pmD),

      pMCPC: `${table[i].pMC} ${tableP[i].pMC}`,
      pMNPC: consultant.reduceNumber(table[i].pMN + tableP[i].pMN),
      pMDPC: consultant.reduceNumber(table[i].pMD + tableP[i].pMD),

      pfCPC: `${table[i].pfC} ${tableP[i].pfC}`,
      pfNPC: consultant.reduceNumber(table[i].pfN + tableP[i].pfN),
      pfDPC: consultant.reduceNumber(table[i].pfD + tableP[i].pfD)
    })
  }
  // console.log( partnerDT )

  return(
    <div className='flex mb-8'>
      <div className='w-32'>
        <div className='h-5 w-32 text-13 font-bold bg-main text-white border-t border-black border-l border-r flex items-center justify-start px-1'>
          Año
        </div>
        <div className='h-5 text-13 font-bold bg-white border-b border-l border-r border-black flex items-center justify-start px-1'>
          Edad
        </div>
        <div className='h-8 text-13 font-bold bg-white border-b border-l border-r border-black flex items-center justify-start px-1'>
          Plano Mental
        </div>
        <div className='h-8 text-13 font-bold bg-white border-b border-l border-r border-black flex items-center justify-start px-1'>
          Plano Físico
        </div>
        <div className='h-8 text-13 font-bold bg-white border-b border-l border-r border-black flex items-center justify-start px-1'>
          Plano Emocional
        </div>
        <div className='h-8 text-13 font-bold bg-white border-b border-l border-r border-black flex items-center justify-start px-1'>
          Plano Espiritual
        </div>
        {/* <div className='h-10 text-13 font-bold bg-gray-300 text-gray-500 border-b border-black border-l border-r px-1'>Ciclo del<br/>Nombre </div> */}
        <div className='mt-5 h-8 text-13 font-bold bg-black bg-opacity-15 border-b border-l border-r border-t border-black flex items-center justify-start px-1'>
          Año Personal
        </div>
        <div className='h-4 text-13 font-bold bg-white border-b border-l border-r border-black flex items-center justify-start px-1'>
          Núm. Destino
        </div>
      </div>
      { partnerDT.map( (el, i) =>
        <>
          <div key={i} className=''>
            <div className='h-5 w-7 text-10 bg-main text-center text-white border-t border-black border-r'>{consultant.getYearOfBirth() + i + start} </div>
            <div className='h-5 w-7 text-13 bg-main-40 text-center border-b border-r border-black'>{i + start} </div>
            <div className='h-8 w-7 text-13 bg-white border-b border-r border-black flex flex-col'>
              <strong className='h-4 text-center border-b border-black'>{el.pmC}</strong>
              <label className='h-4 text-center'>{el.pmN}/{el.pmD}</label>
            </div>
            <div className='h-8 w-7 text-13 bg-white border-b border-r border-black flex flex-col'>
              <strong className='h-4 text-center border-b border-black'>{el.pMC}</strong>
              <label className='h-4 text-center'>{el.pMN}/{el.pMD}</label>
            </div>
            <div className='h-8 w-7 text-13 bg-white border-b border-r border-black flex flex-col'>
              <strong className='h-4 text-center border-b border-black'>{el.pfC}</strong>
              <label className='h-4 text-center'>{el.pfN}/{el.pfD}</label>
            </div>
            <div className='h-8 w-7 bg-white border-b border-r border-black flex items-center justify-center'>
              <strong>{consultant.reduceNumber( el.pmD + el.pMD + el.pfD)}</strong>
            </div>

            <div className='mt-5 h-8 w-7 text-13 bg-black bg-opacity-15 border-b border-r border-t border-black flex items-center justify-center'>
              {consultant.calcPersonalYear(consultant.getYearOfBirth() + i + start)}
            </div>
            <div className=' h-4 w-7 text-13 bg-white border-b border-r border-black flex items-center justify-center'>
              {consultant.reduceNumber( el.pmD + el.pMD + el.pfD + consultant.calcPersonalYear(consultant.getYearOfBirth() + i + start) ) }
            </div>
          </div>

          <div key={`${i}-1`} className=''>
            <div className='h-5 w-7 text-10 bg-main text-center text-white border-t border-black border-r'>{partner.getYearOfBirth() + i + startP}</div>
            <div className='h-5 w-7 text-13 bg-main-40 text-center border-b border-r border-black'>{i + startP} </div>
            <div className='h-8 w-7 text-13 bg-white border-b border-r border-black flex flex-col'>
              <strong className='h-4 text-center border-b border-black'>{el.pmCP}</strong>
              <label className='h-4 text-center'>{el.pmNP}/{el.pmDP}</label>
            </div>
            <div className='h-8 w-7 text-13 bg-white border-b border-r border-black flex flex-col'>
              <strong className='h-4 text-center border-b border-black'>{el.pMCP}</strong>
              <label className='h-4 text-center'>{el.pMNP}/{el.pMDP}</label>
            </div>
            <div className='h-8 w-7 text-13 bg-white border-b border-r border-black flex flex-col'>
              <strong className='h-4 text-center border-b border-black'>{el.pfCP}</strong>
              <label className='h-4 text-center'>{el.pfNP}/{el.pfDP}</label>
            </div>
            <div className='h-8 w-7 bg-white border-b border-r border-black flex items-center justify-center'>
              <strong>{consultant.reduceNumber( el.pmDP + el.pMDP + el.pfDP)}</strong>
            </div>

            <div className='mt-5 h-8 w-7 text-13 bg-black bg-opacity-15 border-b border-r border-t border-black flex items-center justify-center'>
              {partner.calcPersonalYear(partner.getYearOfBirth() + i + startP)}
            </div>
            <div className=' h-4 w-7 text-13 bg-white border-b border-r border-black flex items-center justify-center'>
              {partner.reduceNumber( el.pmDP + el.pMDP + el.pfDP + partner.calcPersonalYear(partner.getYearOfBirth() + i + startP) ) }
            </div>
          </div>

          <div key={`${i}-2`} className=''>
            <div className='h-5 w-7 text-10 bg-main text-center text-white border-t border-black border-r'>{consultant.getYearOfBirth() + i + start} </div>
            <div className='h-5 w-7 text-xs bg-main-40 text-center border-b border-r border-black'>
              {consultant.reduceNumber(i + start + i + startP)}
            </div>
            <div className='h-8 w-7 text-xs bg-white border-b border-r border-black flex flex-col'>
              <strong className='h-4 text-center border-b border-black'>{el.pmCPC}</strong>
              <label className='h-4 text-center'>{el.pmNPC}/{el.pmDPC}</label>
            </div>
            <div className='h-8 w-7 text-xs bg-white border-b border-r border-black flex flex-col'>
              <strong className='h-4 text-center border-b border-black'>{el.pMCPC}</strong>
              <label className='h-4 text-center'>{el.pMNPC}/{el.pMDPC}</label>
            </div>
            <div className='h-8 w-7 text-xs bg-white border-b border-r border-black flex flex-col'>
              <strong className='h-4 text-center border-b border-black'>{el.pfCPC}</strong>
              <label className='h-4 text-center'>{el.pfNPC}/{el.pfDPC}</label>
            </div>
            <div className='h-8 w-7 text-xs bg-white border-b border-r border-black flex items-center justify-center'>
              <strong>
                {consultant.reduceNumber( el.pmNPC + el.pMNPC + el.pfNPC)}
                /
                {consultant.reduceNumber( el.pmDPC + el.pMDPC + el.pfDPC)}
              </strong>
            </div>

            <div className='mt-5 h-8 w-7 text-xs bg-black bg-opacity-15 border-b border-r border-t border-black flex items-center justify-center'>
              {consultant.reduceNumber(
                consultant.calcPersonalYear(consultant.getYearOfBirth() + i) +
                partner.calcPersonalYear(partner.getYearOfBirth() + i)
              )}
            </div>
            <div className=' h-4 w-7 text-xs bg-white border-b border-r border-black flex items-center justify-center'>
              {consultant.reduceNumber(
                consultant.reduceNumber( el.pmDPC + el.pMDPC + el.pfDPC ) +
                consultant.reduceNumber(
                  consultant.calcPersonalYear(consultant.getYearOfBirth() + i) +
                  partner.calcPersonalYear(partner.getYearOfBirth() + i)
                )
              ) }
            </div>
          </div>
        </>
      )}
    </div>
  )
}