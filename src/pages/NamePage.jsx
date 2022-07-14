import { useSelector } from 'react-redux';

import { NameBreakdown, StatusBar,
  UnselectedConsultant, ActiveName } from '../components/';
import { useConsultant } from '../hooks';

import { TiPlus } from "react-icons/ti";

const NamePage = () => {
  const { userActive } = useSelector(state => state.users);
  const isEmpty = Object.keys(userActive).length === 0;
  const { consultant } = useConsultant()

  if( isEmpty ){
    return <UnselectedConsultant />
  }

  const { name, lastName, scdLastName } = consultant

  const names = name.split(' ')
  const ungroupNames = names.map( el =>  {
    return {
      name: consultant.getUngroupName( el ),
      values: consultant.getUngroupNameValues( el ),
      total: consultant.getUngroupNameTotal( el )
    }
  })
  ungroupNames.map( (el) => {
    for (let index = el.name.length; index < 28; index++) {
      el.name.push( [] )
    }
  })


  const ungroupLast = consultant.getUngroupName( lastName )
  const ungroupLastV = consultant.getUngroupNameValues( lastName )
  const ungroupLastT = consultant.getUngroupNameTotal( lastName )

  for (let index = ungroupLast.length; index < 28; index++) {
    ungroupLast.push( [] )
  }

  const ungroupSCDLast = consultant.getUngroupName( scdLastName )
  const ungroupSCDLastV = consultant.getUngroupNameValues( scdLastName )
  const ungroupSCDLastT = consultant.getUngroupNameTotal( scdLastName )

  for (let index = ungroupSCDLast.length; index < 28; index++) {
    ungroupSCDLast.push( [] )
  }

  const ungroupName = consultant.getUngroupName( name )
  const ungroupNameV = consultant.getUngroupNameValues( name )
  const ungroupNameT = consultant.getUngroupNameTotal( name )

  for (let index = ungroupName.length; index < 28; index++) {
    ungroupName.push( [] )
  }

  const table = consultant.getNameSetting()
  const table1 = table.slice(0, 31);
  const table2 = table.slice(31, 62);
  const table3 = table.slice(62, 93);
  const table4 = table.slice(93, 124);
  const appearances = consultant.getAppearances()
  const balanceExistential = {
    'Plano Físico': {
      v: appearances[4].a + appearances[5].a,
      c: 'bg-red border-red',
      cT: 'text-red',
      d: '(Valores 4/22 y 5)'
    },
    'Plano Mental': {
      v: appearances[1].a + appearances[8].a,
      c: 'bg-green border-green',
      cT: 'text-green',
      d: '(Valores 1 y 8)'
    },
    'Plano Emocional': {
      v: appearances[2].a + appearances[3].a + appearances[6].a,
      c: 'bg-blue-30 border-blue',
      cT: 'text-blue',
      d: '(Valores 2/11, 3 y 6)'
    },
    'Plano Espiritual': {
      v: appearances[7].a + appearances[9].a,
      c: 'bg-main-40 border-main',
      cT: 'text-main',
      d: '(Valores 7 y 9)'
    },
  }

  const nameCycles = consultant.calcNameCycles()

  return(
    <>

      <div className='grid grid-cols-12 mt-8 mx-14 gap-6 pt-10'>

        <div className='col-span-5 mb-5'>
          <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
            <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-blue p-2'>
              <TiPlus className='text-2xl'/>
            </div>
            Valores Numéricos del Nombre
          </div>
          <div className='pinnacle-wrap px-8 py-3'>
            <div className='flex justify-between'>
              <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
                <label className='text-13 mb-3'>Nombre</label>
                <div className='w-18 h-18 text-3xl font-black text-black flex justify-center items-center bg-blue-30 border border-blue rounded-full inner-shadow'>
                  {consultant.calcName()}{consultant.calcNameISK()}
                </div>
              </div>
              <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
                <label className='text-13 mb-3'>Alma</label>
                <div className='w-18 h-18 text-3xl font-black text-black flex justify-center items-center bg-blue-30 border border-blue rounded-full inner-shadow-gold'>
                  {consultant.calcSoulNumber()}{consultant.calcSoulNumberISK()}
                </div>
              </div>
              <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
                <label className='text-13 mb-3'>Expresión</label>
                <div className='w-18 h-18 text-3xl font-black text-black flex justify-center items-center bg-blue-30 border border-blue rounded-full inner-shadow'>
                  {consultant.calcSoulExpresion()}{consultant.calcSoulExpresionISK()}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-span-7 mb-5'>
          <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
            <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-blue p-2'>
              <TiPlus className='text-2xl'/>
            </div>
            Potencial Frecuencial del Nombre
          </div>
          <div className='pinnacle-wrap'>
            <div className='flex justify-between px-9 py-3 border-b-2 border-gray-500'>
              <div className='flex items-center justify-center text-gray-500 font-bold'>
                <label className='text-13 mr-3'>Ciclo de letras</label>
                <div className='w-10 h-10 text-2xl font-black text-black flex justify-center items-center bg-white border border-blue rounded-full inner-shadow'>
                  {consultant.nameCount()}
                </div>
              </div>
              <div className='flex items-center justify-center text-gray-500 font-bold'>
                <label className='text-13 mr-3'>Edades importantes</label>
                <div className='h-10 text-2xl font-black text-black flex justify-center items-center bg-red border border-red inner-shadow px-4 rounded-md'>
                  {nameCycles.toString()}
                </div>
              </div>
            </div>
            <div className='flex justify-between px-9 py-3'>
              <div className='flex items-center justify-center text-gray-500 font-bold'>
                <label className='text-13 mr-3'>Año<br/>Personal</label>
                <div className='w-10 h-10 text-2xl font-black text-black flex justify-center items-center bg-white border border-main rounded-full inner-shadow'>
                  {consultant.calcPersonalYear()}
                </div>
                <div className='w-8 flex items-center justify-center'>
                  <svg width="20" height="42" viewBox="0 0 20 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.54602" y1="41.6486" x2="19.4036" y2="0.790452" stroke="black" strokeOpacity="0.45"/>
                  </svg>
                </div>
                <div className='w-10 h-10 text-2xl font-black text-black flex justify-center items-center bg-white border border-main rounded-full inner-shadow'>
                  {consultant.calcOneDigitYearsOld()}
                </div>
                <label className='text-13 ml-3'>Dígito<br/>Edad</label>
              </div>

              <div className='flex items-center justify-center text-gray-500 font-bold'>
                <label className='text-13 mr-3'>Número<br/>Personal</label>
                <div className='w-10 h-10 text-2xl font-black text-black flex justify-center items-center bg-purple-30 border border-main rounded-full inner-shadow-gold'>
                  {consultant.calcPersonalNumber()}
                </div>
                <div className='w-8 flex items-center justify-center'>
                  <svg width="20" height="42" viewBox="0 0 20 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.54602" y1="41.6486" x2="19.4036" y2="0.790452" stroke="black" strokeOpacity="0.45"/>
                  </svg>
                </div>
                <div className='w-10 h-10 text-2xl font-black text-black flex justify-center items-center bg-aguamarina-30 border border-aguamarina rounded-full inner-shadow'>
                  {consultant.calcMaturity()}
                </div>
                <label className='text-13 ml-3'>Madurez</label>
              </div>
            </div>
          </div>
        </div>

        <div className='col-span-12 mb-5'>
          <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
            <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-blue p-2'>
              <TiPlus className='text-2xl'/>
            </div>
            Desglose del Nombre
          </div>
          <div className='pinnacle-wrap px-8 py-8'>
            { ungroupNames.map( (ungroup, i) =>
              <NameBreakdown key={i} name={ungroup.name} values={ungroup.values} total={ungroup.total}  description={`N${i+1}`} />
            )}
            <NameBreakdown name={ungroupLast} values={ungroupLastV} total={ungroupLastT} description="AP" />
            <NameBreakdown name={ungroupSCDLast}  values={ungroupSCDLastV} total={ungroupSCDLastT}  description="AM" />
            <NameBreakdown name={ungroupName}  values={ungroupNameV} total={ungroupNameT}  description="NA" />
          </div>
        </div>

        <div className='col-span-12 mb-5'>
          <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
            <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-blue p-2'>
              <TiPlus className='text-2xl'/>
            </div>
            Nombre Activo
          </div>
          <div className='pinnacle-wrap px-8 py-8'>
            <div className='grid grid-cols-24'>
              <div className='col-span-15'>
                <div className='flex items-center mb-6'>
                  <div className='col-span-2 text-13 font-bold text-gray-500 w-32'>Vocales</div>
                  { ungroupNames.map( (ungroup, i) =>
                    <div className='flex items-center'>
                      <div className='border border-blue w-10 h-10 rounded-sm flex items-center justify-center text-xl font-bold inner-shadow mx-2'>
                        {ungroup.total[0].v}
                      </div>
                      <div className='col-span-2 text-13 font-bold text-gray-500'>+</div>
                    </div>
                  )}
                  <div className='border border-blue w-10 h-10 rounded-sm flex items-center justify-center text-xl font-bold inner-shadow mx-2'>
                    { ungroupLastT[0].v }
                  </div>
                  <div className='col-span-2 text-13 font-bold text-gray-500'>+</div>
                  <div className='border border-blue w-10 h-10 rounded-sm flex items-center justify-center text-xl font-bold inner-shadow mx-2'>
                    { ungroupSCDLastT[0].v }
                  </div>
                  <div className='col-span-2 text-13 font-bold text-gray-500'>=</div>
                  <div className=' w-10 h-10 rounded-sm flex items-center justify-center text-xl font-bold inner-shadow mx-2 bg-black bg-opacity-15'>
                    {consultant.calcSoulNumberFull()}
                  </div>
                  <div className='col-span-2 text-13 font-bold text-gray-500'>=</div>
                  <div className='w-10 h-10 text-xl font-black text-black flex justify-center items-center bg-blue-30 border border-blue rounded-full inner-shadow mx-4'>
                    {consultant.calcSoulNumber()}{consultant.calcSoulNumberISK()}
                  </div>
                  <div className='col-span-2 text-13 font-bold text-gray-500 w-32'>Número del Alma</div>
                </div>
                <div className='flex items-center mb-6'>
                  <div className='col-span-2 text-13 font-bold text-gray-500 w-32'>Consonantes</div>
                  { ungroupNames.map( (ungroup, i) =>
                    <div className='flex items-center'>
                      <div className='border border-blue w-10 h-10 rounded-sm flex items-center justify-center text-xl font-bold inner-shadow mx-2'>
                        {ungroup.total[0].c}
                      </div>
                      <div className='col-span-2 text-13 font-bold text-gray-500'>+</div>
                    </div>
                  )}
                  <div className='border border-blue w-10 h-10 rounded-sm flex items-center justify-center text-xl font-bold inner-shadow mx-2'>
                    { ungroupLastT[0].c }
                  </div>
                  <div className='col-span-2 text-13 font-bold text-gray-500'>+</div>
                  <div className='border border-blue w-10 h-10 rounded-sm flex items-center justify-center text-xl font-bold inner-shadow mx-2'>
                    { ungroupSCDLastT[0].c }
                  </div>
                  <div className='col-span-2 text-13 font-bold text-gray-500'>=</div>
                  <div className=' w-10 h-10 rounded-sm flex items-center justify-center text-xl font-bold inner-shadow mx-2 bg-black bg-opacity-15'>
                    {consultant.calcSoulExpresionFull()}
                  </div>
                  <div className='col-span-2 text-13 font-bold text-gray-500'>=</div>
                  <div className='w-10 h-10 text-xl font-black text-black flex justify-center items-center bg-blue-30 border border-blue rounded-full inner-shadow-gold mx-4'>
                    {consultant.calcSoulExpresion()}{consultant.calcSoulExpresionISK()}
                  </div>
                  <div className='col-span-2 text-13 font-bold text-gray-500 w-32'>Número de Expresión</div>
                </div>
                <div className='flex items-center'>
                  <div className='col-span-2 text-13 font-bold text-gray-500 w-32'>Totales</div>
                  { ungroupNames.map( (ungroup, i) =>
                    <div className='flex items-center'>
                      <div className='border border-blue w-10 h-10 rounded-sm flex items-center justify-center text-xl font-bold inner-shadow mx-2'>
                        { consultant.reduceNumber(ungroup.total[0].v + ungroup.total[0].c) }
                      </div>
                      <div className='col-span-2 text-13 font-bold text-gray-500'>+</div>
                    </div>
                  )}
                  <div className='border border-blue w-10 h-10 rounded-sm flex items-center justify-center text-xl font-bold inner-shadow mx-2'>
                    { consultant.reduceNumber(ungroupLastT[0].v + ungroupLastT[0].c) }
                  </div>
                  <div className='col-span-2 text-13 font-bold text-gray-500'>+</div>
                  <div className='border border-blue w-10 h-10 rounded-sm flex items-center justify-center text-xl font-bold inner-shadow mx-2'>
                    { consultant.reduceNumber(ungroupSCDLastT[0].v + ungroupSCDLastT[0].c) }
                  </div>
                  <div className='col-span-2 text-13 font-bold text-gray-500'>=</div>
                  <div className=' w-10 h-10 rounded-sm flex items-center justify-center text-xl font-bold inner-shadow mx-2 bg-black bg-opacity-15'>
                    {consultant.calcNameFull()}
                  </div>
                  <div className='col-span-2 text-13 font-bold text-gray-500'>=</div>
                  <div className='w-10 h-10 text-xl font-black text-black flex justify-center items-center bg-blue-30 border border-blue rounded-full inner-shadow mx-4'>
                    {consultant.calcName()}{consultant.calcNameISK()}
                  </div>
                  <div className='col-span-2 text-13 font-bold text-gray-500 w-32'>Número de Poder del Nombre</div>
                </div>
              </div>
              <div className='col-span-9 border-l border-gray-500'>
                <div className='flex items-center mb-6 pl-6'>
                  <div className='col-span-2 text-13 font-bold text-gray-500 w-32'>Valores Ausentes</div>
                  <div className='h-10 text-xl font-black text-black flex justify-center items-center bg-white border border-red inner-shadow px-4 rounded-md'>
                    {consultant.getAbsencesName()}
                  </div>
                </div>
                <div className='flex items-center mb-6 pl-6'>
                  <div className='col-span-2 text-13 font-bold text-gray-500 w-32'>Iniciales</div>
                  <div className='h-10 text-2xl font-black text-black flex justify-center items-center bg-white border border-green inner-shadow px-2 rounded-md mx-2'>
                    {consultant.getInitials()}
                  </div>
                  <div className='col-span-2 text-13 font-bold text-gray-500'>=</div>
                  <div className='h-10 w-10 text-2xl font-black text-black flex justify-center items-center bg-white border border-green inner-shadow px-4 rounded-full mx-2'>
                    {consultant.calcInitials()}
                  </div>
                </div>
                <div className='flex items-center mb-6 pl-6'>
                  <div className='col-span-2 text-13 font-bold text-gray-500 w-32'>Nombre Activo</div>
                  <div className='border border-blue w-10 h-10 rounded-sm flex items-center justify-center text-xl font-bold inner-shadow mx-2 bottom-letter' data-letter="V">
                    { ungroupNameT[0].vA }
                  </div>
                  <div className='col-span-2 text-13 font-bold text-gray-500'>+</div>
                  <div className='border border-blue w-10 h-10 rounded-sm flex items-center justify-center text-xl font-bold inner-shadow mx-2 bottom-letter' data-letter="C">
                    { ungroupNameT[0].cA }
                  </div>
                  <div className='col-span-2 text-13 font-bold text-gray-500'>=</div>
                  <div className=' w-10 h-10 rounded-sm flex items-center justify-center text-xl font-bold inner-shadow mx-2 bg-black bg-opacity-15'>
                    { (ungroupNameT[0].cA + ungroupNameT[0].vA) }
                  </div>
                  <div className='col-span-2 text-13 font-bold text-gray-500'>=</div>
                  <div className=' w-10 h-10 rounded-sm flex items-center justify-center text-xl font-bold inner-shadow mx-2 bg-black bg-opacity-15'>
                    { consultant.sumNumbers(ungroupNameT[0].cA + ungroupNameT[0].vA) }
                  </div>
                  <div className='col-span-2 text-13 font-bold text-gray-500'>=</div>
                  <div className='h-10 w-10 text-2xl font-black text-black flex justify-center items-center bg-blue-30 border border-blue inner-shadow px-4 rounded-full mx-2'>
                    { ungroupNameT[0].L }{consultant.karmicos.includes( consultant.reduceNumberISK(ungroupNameT[0].c + ungroupNameT[0].v) ) ? '*' : ''}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-span-12 mb-5'>
          <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
            <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-blue p-2'>
              <TiPlus className='text-2xl'/>
            </div>
            Ciclo del Nombre
          </div>
          <div className='pinnacle-wrap px-8 py-8'>

            <ActiveName table={table1} start={0} consultant={consultant} nameCycles={nameCycles} />
            <ActiveName table={table2} start={30} consultant={consultant} nameCycles={nameCycles} />
            <ActiveName table={table3} start={60} consultant={consultant} nameCycles={nameCycles} />
            <ActiveName table={table4} start={90} consultant={consultant} nameCycles={nameCycles} />

          </div>
        </div>

        <div className='col-span-12 mb-5'>
          <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
            <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-blue p-2'>
              <TiPlus className='text-2xl'/>
            </div>
            Equilibrio de Planos Existenciales
          </div>
          <div className='pinnacle-wrap px-8 py-8'>
          <div>
            <div className='flex'>
              <div className='flex justify-center items-center w-1/4 text-13 text-gray-500 font-bold'>
                1er Lugar
              </div>
              <div className='flex justify-center items-center w-1/4 text-13 text-gray-500 font-bold'>
                2do Lugar
              </div>
              <div className='flex justify-center items-center w-1/4 text-13 text-gray-500 font-bold'>
                3er Lugar
              </div>
              <div className='flex justify-center items-center w-1/4 text-13 text-gray-500 font-bold'>
                4to Lugar
              </div>
            </div>
            <div className='flex'>
              { Object.entries(balanceExistential).map( (el, i, a) =>
                <div key={i} className='balanceExistential flex justify-center items-center flex-col w-1/4' data-value={el[1].v}>
                  <div className={`h-10 w-10 text-xl font-bold flex justify-center items-center bg-white border border-gray-500 rounded-md inner-shadow my-4 ${el[1].c}`}>
                    {el[1].v}
                  </div>
                  <div className={`text-13 font-bold ${el[1].cT}`}>
                    {el[0]}
                  </div>
                  <div className={`text-13 text-gray-500`}>
                    {el[1].d}
                  </div>
                  {/* <div className='text-13 text-gray-500 h-5'>{el[1].v} </div>
                  <div className='h-10 w-10 text-xl font-bold flex justify-center items-center bg-purple-30 border border-main rounded-md inner-shadow'>{el[0]} </div>
                  <div className='h-10 w-10 text-xl font-bold flex justify-center items-center bg-gray-300 border border-gray-500 rounded-md inner-shadow'>{el[1].a} </div> */}
                </div>
              )}
            </div>
          </div>
          </div>
        </div>

        <div className='col-span-12 mb-5'>
          <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
            <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-blue p-2'>
              <TiPlus className='text-2xl'/>
            </div>
            Tabla de inclusión
          </div>
          <div className='pinnacle-wrap px-8 py-8'>
            <div className='grid grid-cols-11 gap-3'>
              <div className='col-span-2 gap-4 flex justify-center items-center flex-col'>
                <div className='h-5'></div>
                <div className='w-full col-start-1 row-start-2 col-span-2 h-10 text-xl font-black text-black flex justify-center items-center bg-purple-30 border border-main rounded-md inner-shadow'>
                  Casas
                </div>
                <div className='w-full col-start-1 row-start-3 col-span-2 h-10 text-xl font-black text-black flex justify-center items-center bg-gray-300 border-gray-500 border rounded-md inner-shadow'>
                  Habitantes
                </div>
              </div>

              { Object.entries(appearances).map( (el, i) =>
                <div key={i} className='gap-4 flex justify-center items-center flex-col'>
                  <div className='text-13 text-gray-500 h-5'>{el[1].v} </div>
                  <div className='h-10 w-10 text-xl font-bold flex justify-center items-center bg-purple-30 border border-main rounded-md inner-shadow'>{el[0]} </div>
                  <div className='h-10 w-10 text-xl font-bold flex justify-center items-center bg-gray-300 border border-gray-500 rounded-md inner-shadow'>{el[1].a} </div>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
export default NamePage