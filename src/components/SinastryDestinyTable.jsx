import { useState } from 'react';
import { dateSelect } from '../hooks';
import { Synastry } from '../resources';

export const SinastryDestinyTable = ({ table, start, consultant, startP, partner, tableP }) => {
  const { newDate } = dateSelect()
  const singleC = consultant.getSingle()
  const singleP = partner.getSingle()
  const [binomActive, setBinomActive] = useState(false)
  const synastry = new Synastry(consultant, partner)

  const partnerDT = [];
  // console.log( { table, start, consultant, startP, partner, tableP } )
  for (let i = 0; i < table.length; i++) {
    partnerDT.push({
      pmC: table[i].pmC,
      pmN: table[i].pmN,
      pmD: table[i].pmD,
      pMC: table[i].pMC,
      pMN: table[i].pMN,
      pMD: table[i].pMD,
      pfC: (singleC) ? table[i].pfC : '',
      pfN: (singleC) ? table[i].pfN : 0,
      pfD: (singleC) ? table[i].pfD : 0,

      pmCP: tableP[i].pmC,
      pmNP: tableP[i].pmN,
      pmDP: tableP[i].pmD,
      pMCP: tableP[i].pMC,
      pMNP: tableP[i].pMN,
      pMDP: tableP[i].pMD,
      pfCP: singleP ? tableP[i].pfC : '',
      pfNP: singleP ? tableP[i].pfN : 0,
      pfDP: singleP ? tableP[i].pfD : 0,

      pmCPC: `${table[i].pmC} ${tableP[i].pmC}`,
      pmNPC: consultant.reduceNumber(table[i].pmN + tableP[i].pmN),
      pmDPC: consultant.reduceNumber(table[i].pmD + tableP[i].pmD),

      pMCPC: `${table[i].pMC} ${tableP[i].pMC}`,
      pMNPC: consultant.reduceNumber(table[i].pMN + tableP[i].pMN),
      pMDPC: consultant.reduceNumber(table[i].pMD + tableP[i].pMD),

      pfCPC: `${singleC ? table[i].pfC : ''} ${singleP ? tableP[i].pfC : ''}`,
      pfNPC: consultant.reduceNumber((singleC ? table[i].pfN : 0) + (singleP ? tableP[i].pfN : 0)),
      pfDPC: consultant.reduceNumber((singleC ? table[i].pfD : 0) + (singleP ? tableP[i].pfD : 0))
    })
  }
  // console.log( {partnerDT} )

  return (
      <div className='destinity-table flex mb-8 justify-center'>
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
        <button
          className={` ${binomActive ? 'bg-gold' : 'bg-yellow'} h-10  font-bold mb-1 rounded-tl-3xl  rounded-tr-3xl rounded-bl-3xl flex justify-center items-center absolute btn-destiny-synastry text-13 text-white px-2`}
          onClick={() => { setBinomActive(!binomActive) }}
        >Binomios
        </button>
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
      { partnerDT.map((el, i) => (
        <>
          <div className='nameBreakdown'>
            <div className={`
              h-6 w-7 text-10 text-center border-t border-gray-400 border-rc
              ${newDate.year() === consultant.getYearOfBirth() + i + start ? 'bg-red-50' : 'bg-main-30'}`
            }
            >
              {consultant.getYearOfBirth() + i + start}
            </div>
            <div className={`
              h-6 w-7 text-13 text-center border-b border-r border-gray-400
              ${newDate.year() === consultant.getYearOfBirth() + i + start ? 'bg-red-50' : 'bg-black bg-opacity-10'}`
            }
            >
              {i + start}
            </div>
            <div className={`
              h-12 w-7 text-13 border-b border-r border-gray-400 flex flex-col
              ${newDate.year() === consultant.getYearOfBirth() + i + start ? 'bg-red-50' : 'bg-white'}`
            }
            >
              <strong className='h-6 w-7 leading-6 text-center border-b border-gray-400'>{el.pmC}</strong>
              <label className='h-6 w-7 leading-6 text-center text-10'>{el.pmN}/{el.pmD}</label>
            </div>
            <div className={`
              h-12 w-7 text-13 border-b border-r border-gray-400 flex flex-col
              ${newDate.year() === consultant.getYearOfBirth() + i + start ? 'bg-red-50' : 'bg-white'}`
            }
            >
              <strong className='h-6 w-7 leading-6 text-center border-b border-gray-400'>{el.pMC}</strong>
              <label className='h-4 text-center text-10'>{el.pMN}/{el.pMD}</label>
            </div>
            <div className={`
              h-12 w-7 text-13 border-b border-r border-gray-400 flex flex-col
              ${newDate.year() === consultant.getYearOfBirth() + i + start ? 'bg-red-50' : 'bg-white'}`
            }
            >
              <strong className='h-6 w-7 leading-6 text-center border-b border-gray-400'>{el.pfC}</strong>
              <label className='h-4 text-center text-10'>{singleC && `${el.pfN} / ${el.pfD}`}</label>
            </div>
            <div className={`
              h-10 w-7 border-b border-r border-gray-400 flex items-center justify-center
              ${newDate.year() === consultant.getYearOfBirth() + i + start ? 'bg-red-50' : 'bg-pink'}
              ${binomActive && 'text-xs'}`
            }
            >
              {binomActive ? <strong>{consultant.reduceNumber(el.pmD + el.pMD + el.pfD)}/{consultant.reduceNumber(el.pmN + el.pMN + el.pfN)}</strong> : <strong>{consultant.reduceNumber(el.pmD + el.pMD + el.pfD)}</strong>}
            </div>

            <div className={`
              mt-5 h-10 w-7 text-13 font-bold border-b border-r border-t border-gray-400 flex items-center justify-center
              ${newDate.year() === consultant.getYearOfBirth() + i + start ? 'bg-red-50' : 'bg-gray bg-opacity-15'}`
            }
            >
              {consultant.calcPersonalYear(consultant.getYearOfBirth() + i + start)}
            </div>
            <div className={`
              h-10 w-7 text-13 font-bold border-b border-r border-gray-400 flex items-center justify-center
              ${newDate.year() === consultant.getYearOfBirth() + i + start ? 'bg-red-50' : 'bg-white'}`
            }
            >
              {consultant.reduceNumber(el.pmD + el.pMD + el.pfD + consultant.calcPersonalYear(consultant.getYearOfBirth() + i + start)) }
            </div>
          </div>

          <div className='nameBreakdown'>
            <div className={`
              h-6 w-7 text-10 text-center border-t border-gray-400 border-r
              ${newDate.year() === consultant.getYearOfBirth() + i + start ? 'bg-red-50' : 'bg-main-30'}`
            }
            >
              {partner.getYearOfBirth() + i + startP}
            </div>
            <div className={`
              h-6 w-7 text-13 text-center border-b border-r border-gray-400
              ${newDate.year() === consultant.getYearOfBirth() + i + start ? 'bg-red-50' : 'bg-black bg-opacity-10'}`
            }
            >
              {i + startP}
            </div>
            <div className={`
              h-12 w-7 text-13 border-b border-r border-gray-400 flex flex-col
              ${newDate.year() === consultant.getYearOfBirth() + i + start ? 'bg-red-50' : 'bg-white'}`
            }
            >
              <strong className='h-6 w-7 leading-6 text-center border-b border-gray-400'>{el.pmCP}</strong>
              <label className='h-6 w-7 leading-6 text-center text-10'>{el.pmNP}/{el.pmDP}</label>
            </div>
            <div className={`
              h-12 w-7 text-13 border-b border-r border-gray-400 flex flex-col
              ${newDate.year() === consultant.getYearOfBirth() + i + start ? 'bg-red-50' : 'bg-white'}`
            }
            >
              <strong className='h-6 w-7 leading-6 text-center border-b border-gray-400'>{el.pMCP}</strong>
              <label className='h-4 text-center text-10'>{el.pMNP}/{el.pMDP}</label>
            </div>
            <div className={`
              h-12 w-7 text-13 border-b border-r border-gray-400 flex flex-col
              ${newDate.year() === consultant.getYearOfBirth() + i + start ? 'bg-red-50' : 'bg-white'}`
            }
            >
              <strong className='h-6 w-7 leading-6 text-center border-b border-gray-400'>{el.pfCP}</strong>
              <label className='h-4 text-center text-10'>{singleP && `${el.pfNP}/${el.pfDP}`}</label>
            </div>
            <div className={`
              h-10 w-7 border-b border-r border-gray-400 flex items-center justify-center
              ${newDate.year() === consultant.getYearOfBirth() + i + start ? 'bg-red-50' : 'bg-pink'}
              ${binomActive && 'text-xs'}`
            }
            >
              {binomActive ? <strong>{consultant.reduceNumber(el.pmNP + el.pMNP + el.pfNP)}/{consultant.reduceNumber(el.pmDP + el.pMDP + el.pfDP)}</strong> : <strong>{consultant.reduceNumber(el.pmDP + el.pMDP + el.pfDP)}</strong>}
            </div>

            <div className={`
              mt-5 h-10 w-7 text-13 font-bold border-b border-r border-t border-gray-400 flex items-center justify-center
              ${newDate.year() === consultant.getYearOfBirth() + i + start ? 'bg-red-50' : 'bg-gray bg-opacity-15'}`
            }
            >
              {partner.calcPersonalYear(partner.getYearOfBirth() + i + startP)}
            </div>
            <div className={`
              h-10 w-7 text-13 font-bold border-b border-r border-gray-400 flex items-center justify-center
              ${newDate.year() === consultant.getYearOfBirth() + i + start ? 'bg-red-50' : 'bg-white'}`
            }
            >
              {partner.reduceNumber(el.pmDP + el.pMDP + el.pfDP + partner.calcPersonalYear(partner.getYearOfBirth() + i + startP)) }
            </div>
          </div>

          <div className='nameBreakdown'>
            <div className={`
              h-6 w-7 text-10 text-center border-t border-gray-400 border-r
              ${newDate.year() === consultant.getYearOfBirth() + i + start ? 'bg-red-80' : 'bg-main-30'}`
            }
            >
              {consultant.getYearOfBirth() + i + start}
            </div>
            <div className={`
              h-6 w-7 text-13 text-center border-b border-r border-gray-400
              ${newDate.year() === consultant.getYearOfBirth() + i + start ? 'bg-red-80' : 'bg-gold-15'}`
            }
            >
              {consultant.reduceNumber(i + start + i + startP)}
            </div>
            <div className={`
              h-12 w-7 text-xs border-b border-r border-gray-400 flex flex-col
              ${newDate.year() === consultant.getYearOfBirth() + i + start ? 'bg-red-80' : 'bg-gold-15'}`
            }
            >
              <strong className='h-6 w-7 leading-6 text-center border-b border-gray-400'>{el.pmCPC}</strong>
              <label className='h-6 w-7 leading-6 text-center text-10'>{el.pmNPC}/{el.pmDPC}</label>
            </div>
            <div className={`
              h-12 w-7 text-xs border-b border-r border-gray-400 flex flex-col
              ${newDate.year() === consultant.getYearOfBirth() + i + start ? 'bg-red-80' : 'bg-gold-15'}`
            }
            >
              <strong className='h-6 w-7 leading-6 text-center border-b border-gray-400'>{el.pMCPC}</strong>
              <label className='h-4 text-center text-10'>{el.pMNPC}/{el.pMDPC}</label>
            </div>
            <div className={`
              h-12 w-7 text-xs border-b border-r border-gray-400 flex flex-col
              ${newDate.year() === consultant.getYearOfBirth() + i + start ? 'bg-red-80' : 'bg-gold-15'}`
            }
            >
              <strong className='h-6 w-7 leading-6 text-center border-b border-gray-400'>{el.pfCPC}</strong>
              <label className='h-4 text-center text-10'>{(singleC && singleP) && `${el.pfNPC}/${el.pfDPC}`}</label>
            </div>
            <div className={`
              h-10 w-7 text-xs border-b border-r border-gray-400 flex items-center justify-center
              ${newDate.year() === consultant.getYearOfBirth() + i + start ? 'bg-red-80' : 'bg-gold-15'}`
            }
            >
              <strong>
                {consultant.reduceNumber(el.pmNPC + el.pMNPC + el.pfNPC)}
                /
                {consultant.reduceNumber(el.pmDPC + el.pMDPC + el.pfDPC)}
              </strong>
            </div>

            <div className={`
              mt-5 h-10 w-7 text-xs font-bold border-b border-r border-t border-gray-400 flex items-center justify-center
              ${newDate.year() === consultant.getYearOfBirth() + i + start ? 'bg-red-80' : 'bg-gold-15'}`
            }
            >
              {/* consultant.reduceNumber(
                consultant.calcPersonalYear(consultant.getYearOfBirth() + i)
                + partner.calcPersonalYear(partner.getYearOfBirth() + i)
              ) */synastry.calcPersonalYear(consultant.getYearOfBirth() + i + start)}
            </div>
            <div className={`
              h-10 w-7 text-xs font-bold border-b border-r border-gray-400 flex items-center justify-center
              ${newDate.year() === consultant.getYearOfBirth() + i + start ? 'bg-red-80' : 'bg-gold-15'}`
            }
            >
              {consultant.reduceNumber(
                consultant.reduceNumber(el.pmDPC + el.pMDPC + el.pfDPC)
                + synastry.calcPersonalYear(consultant.getYearOfBirth() + i + start) /* consultant.reduceNumber(
                  consultant.calcPersonalYear(consultant.getYearOfBirth() + i)
                  + partner.calcPersonalYear(partner.getYearOfBirth() + i)
                ) */
              ) }
            </div>
          </div>
        </>
      ))}
      </div>
  )
}