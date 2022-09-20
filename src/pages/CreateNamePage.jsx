import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  AnnualReturn, NameBreakdown, Pinnacle, UnselectedConsultant
} from '../components';
import { Person } from '../resources';
import { setCreateName } from '../store/slices/users/users';


import { MdEdit } from 'react-icons/md';
import { TiPlus } from 'react-icons/ti';

import moment from 'moment';

const CreateNamePage = () => {
  const { userActive } = useSelector(state => state.users);
  const isEmpty = Object.keys(userActive).length === 0;
  const [isEdditing, setIsEdditing] = useState(false)

  const { names: name, lastName, scdLastName, date: birthDate } = userActive
  const { name: createName, date: createDate } = useSelector(state => state.users.createName)
  console.log(createName)
  console.log(createDate)
  const dispatch = useDispatch()

  const inputName = useRef()
  const inputDate = useRef()

  if (isEmpty) {
    return <UnselectedConsultant />
  }

  const createNameData = {
    name: !isEdditing ? `${name} ${lastName} ${scdLastName}` : createName,
    lastName: '',
    scdLastName: '',
    birthDate: !isEdditing ? birthDate : createDate,
  }
  const createNameObj = new Person(createNameData)

  const ungroupName = createNameObj.getUngroupName(createNameData.name)
  const ungroupNameT = createNameObj.getUngroupNameTotal(createNameData.name)


  let ungroup = []
  const split = 28
  let tables = 0;
  let count = 0;
  do {
    count = (tables + 1) * split
    const ungroupNameI = ungroupName.slice(tables * split, count);
    while (ungroupNameI.length < 28) {
      ungroupNameI.push({})
    }
    ungroup = [
      ...ungroup,
      {
        ungroupNameI,
      }
    ]
    console.log(tables * split, count)
    tables++
  } while (count < ungroupName.length)

  console.log({ ungroup })

  const pastYear = moment().subtract(1, 'year')
  const annualReturnPastYear = createNameObj.annualReturn(pastYear.year())

  const now = moment()
  const annualReturnCurrent = createNameObj.annualReturn(now.year())

  const nextYear = moment().add(1, 'year')
  const annualReturnNextYear = createNameObj.annualReturn(nextYear.year())

  const isValid = () => {
    if (createNameData.name === '') return false
    if (createNameData.birthDate === '') return false
    if (createNameData.name === '' && createNameData.birthDate === '') return false
    return true
  }

  const handleChange = () => {
    setIsEdditing(true)
    const name = inputName.current.value
    const birthDate = inputDate.current.value
    dispatch(setCreateName({ name, date: birthDate }))
  }

  return (
    <div className='grid grid-cols-12 mt-8 mx-14 gap-6 pt-10'>
        <div className='col-span-12 mb-5'>
          <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
            <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-blue p-2'>
              <TiPlus className='text-2xl' />
            </div>
            Crear Nombre
            <MdEdit className='ml-2 text-2xl' />
          </div>
          <div className='pinnacle-wrap px-8 py-8'>
            <div className="form-container block">
              <div className="flex w-full gap-4">
                <div className="form-group w-2/3">
                  <label className='font-bold mb-1 '>
                    <MdEdit className='text-xl' /> Nombre
                  </label>
                  <input
                    type="text"
                    name="names"
                    value={createNameData.name}
                    onChange={handleChange}
                    className="rounded"
                    ref={inputName}
                  />
                </div>
                <div className="form-group w-1/3">
                  <label className='font-bold mb-1'>
                    <MdEdit className='text-xl' /> Fecha de Nacimiento
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={createNameData.birthDate}
                    onChange={handleChange}
                    className="rounded"
                    ref={inputDate}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {
          isValid()
            ? (
            <>
              <div className='col-span-8 mb-5'>
                <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
                  <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-blue p-2'>
                    <TiPlus className='text-2xl' />
                  </div>
                  Valores Numéricos del Nombre
                </div>
                <div className='pinnacle-wrap px-8 py-8'>
                  <div className='flex justify-between'>
                    <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
                      <label className='text-13 mb-3'>Nombre</label>
                      <div className='w-18 h-18 text-3xl font-black text-black flex justify-center items-center bg-blue-30 border border-blue rounded-full inner-shadow'>
                        {createNameObj.calcName()}{createNameObj.calcNameISK()}
                      </div>
                    </div>
                    <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
                      <label className='text-13 mb-3'>Alma</label>
                      <div className='w-18 h-18 text-3xl font-black text-black flex justify-center items-center bg-blue-30 border border-blue rounded-full inner-shadow-gold'>
                        {createNameObj.calcSoulNumber()}{createNameObj.calcSoulNumberISK()}
                      </div>
                    </div>
                    <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
                      <label className='text-13 mb-3'>Expresión</label>
                      <div className='w-18 h-18 text-3xl font-black text-black flex justify-center items-center bg-blue-30 border border-blue rounded-full inner-shadow'>
                        {createNameObj.calcSoulExpresion()}{createNameObj.calcSoulExpresionISK()}
                      </div>
                    </div>
                    <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
                      <label className='text-13 mb-3'>Madurez</label>
                      <div className='w-18 h-18 text-3xl font-black text-black flex justify-center items-center bg-aguamarina-30 border border-aguamarina rounded-full inner-shadow'>
                        {createNameObj.calcMaturity()}{createNameObj.calcMaturityISK()}
                      </div>
                    </div>
                    <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
                      <label className='text-13 mb-3'>Dígito Edad</label>
                      <div className='w-18 h-18 text-3xl font-black text-black flex justify-center items-center bg-white border border-blue rounded-full inner-shadow'>
                        {createNameObj.calcOneDigitYearsOld()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-span-4 row-span-2 mb-5'>
                <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
                  <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-main p-2'>
                    <TiPlus className='text-2xl' />
                  </div>
                  Pináculo
                </div>
                <div className='pinnacle-wrap px-8 py-3'>
                  <Pinnacle consultant={createNameObj} size="small" />
                </div>
              </div>

              <div className='col-span-8 mb-5'>
                <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
                  <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-blue p-2'>
                    <TiPlus className='text-2xl' />
                  </div>
                  Tabla de inclusión
                </div>
                <div className='pinnacle-wrap px-8 py-10'>
                  <div className='grid grid-cols-10 gap-3'>
                    <div className=' gap-4 flex justify-center items-center flex-col'>
                      <div className='h-5' />
                      <div className='w-full col-start-1 row-start-2 col-span-2 h-10 text-13 font-black text-gray-400 flex justify-center items-center'>
                        Casas:
                      </div>
                      <div className='w-full col-start-1 row-start-3 col-span-2 h-10 text-13 font-black text-gray-400 flex justify-center items-center'>
                        Habs:
                      </div>
                    </div>

                    { Object.entries(createNameObj.getAppearances()).map((el, i) => (
                      <div key={i} className='gap-4 flex justify-center items-center flex-col'>
                        <div className='text-13 text-gray-500 h-5'>{el[1].v} </div>
                        <div className='h-10 w-10 text-xl font-bold flex justify-center items-center bg-purple-30 border border-main rounded-md inner-shadow'>{el[0]} </div>
                        <div className='h-10 w-10 text-xl font-bold flex justify-center items-center bg-gray-300 border border-gray-500 rounded-md inner-shadow'>{el[1].a} </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className='col-span-12 mb-5'>
                <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
                  <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-blue p-2'>
                    <TiPlus className='text-2xl' />
                  </div>
                  Desglose del Nombre
                  <MdEdit className='ml-2 text-2xl' />
                </div>
                <div className='pinnacle-wrap px-8 py-8'>
                  <div className='flex justify-center'>
                    <div className=''>
                      {
                        ungroup.map(group =>
                          <NameBreakdown name={group.ungroupNameI} />)
                      }
                    </div>
                    <div className='nameBreakdown mb-4 flex'>
                      <div className='ml-5'>
                        <div className={`
                          text-13 w-30 h-30 bg-gold bg-opacity-10 rounded-md inner-shadow
                          ${ungroup.length > 1 ? 'mb-4' : ''}
                        `}
                        >
                          {ungroupNameT[0].v !== 0 ? ungroupNameT[0].v : ''}
                        </div>
                        <div className={`
                          text-13 w-30 h-30 font-bold bg-main text-white rounded-md inner-shadow
                          ${ungroup.length > 1 ? 'mb-4' : ''}
                        `}
                        >
                          {ungroupNameT[0].L}
                        </div>
                        <div className={`
                          text-13 w-30 h-30 bg-gold bg-opacity-10 rounded-md inner-shadow
                          ${ungroup.length > 1 ? 'mb-4' : ''}
                        `}
                        >
                          {ungroupNameT[0].c !== 0 ? ungroupNameT[0].c : ''}
                        </div>
                      </div>
                      <div className='ml-3'>
                        <div className={`
                          text-13 w-30 h-30 font-bold
                          ${ungroup.length > 1 ? 'mb-4' : ''}
                        `}
                        >V
                        </div>
                        <div className={`
                          text-13 h-30 font-bold
                          ${ungroup.length > 1 ? 'mb-4' : ''}
                        `}
                        >N
                        </div>
                        <div className={`
                          text-13 w-30 h-30 font-bold
                          ${ungroup.length > 1 ? 'mb-4' : ''}
                        `}
                        >C
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-span-12 mb-5'>
                <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
                  <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-green-s p-2'>
                    <TiPlus className='text-2xl' />
                  </div>
                  Retornos Anuales
                  <MdEdit className='ml-2 text-2xl' />
                </div>
                <div className='pinnacle-wrap overflow-hidden grid grid-cols-3'>
                  <div className='px-5 py-8'>
                    <AnnualReturn annualReturn={annualReturnPastYear} />
                  </div>
                  <div className='px-5 py-8 border-b border-solid border-gray-300 bg-active-radial bg-opacity-15'>
                    <AnnualReturn annualReturn={annualReturnCurrent} current months />
                  </div>
                  <div className='px-5 py-8 border-r border-gray-400'>
                    <AnnualReturn annualReturn={annualReturnNextYear} />
                  </div>
                </div>
              </div>
            </>
)
          : <div className="col-span-12 text-center font-bold">Ingresa datos validos.</div>
        }

    </div>
  )
}

export default CreateNamePage;