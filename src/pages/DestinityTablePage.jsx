import { useSelector } from 'react-redux';

import { UnselectedConsultant, DestinityTable } from '../components/'
import { useConsultant } from '../hooks';

import { TiPlus } from "react-icons/ti";

const DestinityTablePage = () => {
  const { userActive, userPartnerActive, isSelectPartner } = useSelector(state => state.users);
  const isEmpty = Object.keys(userActive).length === 0;
  const { consultant } = useConsultant()

  if( isEmpty ){
    return <UnselectedConsultant />
  }

  const table = consultant.getDestinityTable()
  const table1 = table.slice(0, 30);
  const table2 = table.slice(30, 60);
  const table3 = table.slice(60, 90);
  const table4 = table.slice(90, 120);

  const nameCycles = consultant.calcNameCycles()
  const nameSubCycles = consultant.calcNameSubCycles()

  return(
    <>
      <div className='grid grid-cols-12 mt-8 mx-14 gap-6 pt-10'>
        <div className='col-span-12 mb-5'>
          <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
            <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-gold p-2'>
              <TiPlus className='text-2xl'/>
            </div>
            Tabla del Destino
          </div>
          <div className='pinnacle-wrap px-8 pb-3 pt-10'>

            <DestinityTable table={table1} start={0} consultant={consultant} nameCycles={nameCycles} nameSubCycles={nameSubCycles} />
            <DestinityTable table={table2} start={30} consultant={consultant} nameCycles={nameCycles} nameSubCycles={nameSubCycles} />
            <DestinityTable table={table3} start={60} consultant={consultant} nameCycles={nameCycles} nameSubCycles={nameSubCycles} />
            <DestinityTable table={table4} start={90} consultant={consultant} nameCycles={nameCycles} nameSubCycles={nameSubCycles} />
          </div>
        </div>
      </div>

      <div className='grid grid-cols-12 mt-9 mx-14 gap-6'>
        <div className='col-span-12 mb-5'>
          <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
            <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-blue p-2'>
              <TiPlus className='text-2xl'/>
            </div>
            Valores Numéricos del Nombre
          </div>
          <div className='pinnacle-wrap px-8 py-6'>
            <div className='flex justify-around'>
              <div className='flex flex-col items-center justify-center'>
                <strong className='text-13 text-gray-400 mb-2'>
                  Total de letras:
                </strong>
                <div className='border border-blue w-10 h-10 rounded-md flex items-center justify-center text-xl font-bold inner-shadow mx-2'>
                  {consultant.nameCount()}
                </div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <strong className='text-13 text-gray-400 mb-2'>
                  Ciclos del Nombre:
                </strong>
                <div className='h-10 text-2xl font-black text-black flex justify-center items-center bg-white border border-red inner-shadow px-4 rounded-md'>
                  {nameCycles.toString()}
                </div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <strong className='text-13 text-gray-400 mb-2'>
                  Subciclos del Nombre:
                </strong>
                <div className='h-10 text-2xl font-black text-black flex justify-center items-center bg-white border border-green inner-shadow px-4 rounded-md'>
                  {nameSubCycles.slice(0, 10).toString()}
                </div>
              </div>
              <div>
                <div className='mb-6'>
                  <div className='flex items-center justify-center text-gray-500 font-bold'>
                    <label className='text-13 mr-3'>Año<br/>Personal</label>
                    <div className='w-10 h-10 text-2xl font-black text-black flex justify-center items-center bg-white border border-main rounded-full inner-shadow'>
                      {consultant.calcPersonalYear()}
                    </div>
                    <div className='w-8 flex items-center justify-center'>
                      <svg width="20" height="42" viewBox="0 0 20 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.54602" y1="41.6486" x2="19.4036" y2="0.790452" stroke="black" stroke-opacity="0.45"/>
                      </svg>
                    </div>
                    <div className='w-10 h-10 text-2xl font-black text-black flex justify-center items-center bg-white border border-main rounded-full inner-shadow'>
                      {consultant.calcOneDigitYearsOld()}
                    </div>
                    <label className='text-13 ml-3'>Dígito<br/>Edad</label>
                  </div>
                </div>
                <div>
                  <div className='flex items-center justify-center text-gray-500 font-bold'>
                    <label className='text-13 mr-3'>Número<br/>Personal</label>
                    <div className='w-10 h-10 text-2xl font-black text-black flex justify-center items-center bg-purple-30 border border-main rounded-full inner-shadow-gold'>
                      {consultant.calcPersonalNumber()}
                    </div>
                    <div className='w-8 flex items-center justify-center'>
                      <svg width="20" height="42" viewBox="0 0 20 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="0.54602" y1="41.6486" x2="19.4036" y2="0.790452" stroke="black" stroke-opacity="0.45"/>
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
          </div>
        </div>
      </div>
    </>
  )
}
export default DestinityTablePage;