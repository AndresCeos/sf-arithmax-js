import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  ActiveName,
  AnnualReturn, NameBreakdown, Pinnacle, UnselectedConsultant
} from '../components';
import { Person } from '../resources';
import { setCreateName } from '../store/slices/users/users';


import { MdEdit } from 'react-icons/md';
import { TiPlus } from 'react-icons/ti';

import moment from 'moment';
import { WrapTitle } from '../components/WrapTitle';

const CreateNamePage = () => {
  const { userActive } = useSelector(state => state.users);
  const isEmpty = Object.keys(userActive).length === 0;
  const [isEdditing, setIsEdditing] = useState(false)
  const [checkN, setcheckN] = useState(false)
  const [checkP, setcheckP] = useState(false)

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



  const checkName = () => {
    (checkN) ? setcheckN(false) : setcheckN(true)
  }
  const checkPinacle = () => {
    (checkP) ? setcheckP(false) : setcheckP(true)
  }

  const isValid = () => {
    const valid = new RegExp('^[a-zA-Z ñÑ]+$')
    if (createNameData.name === '' || !valid.test(createNameData.name)) return false
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
  let table
  // console.log('this is table => ' + table)
  // console.log(table)
  let table1
  let table2
  let table3
  let table4
  let nameCycles
  let nameSubCycles
  if (isValid()) {
    table = createNameObj.getNameSetting()
    // console.log('this is table => ' + table)
    // console.log(table)
    table1 = table.slice(0, 31);
    table2 = table.slice(31, 62);
    table3 = table.slice(62, 93);
    table4 = table.slice(93, 124);
    nameCycles = createNameObj.calcNameCycles()
    nameSubCycles = createNameObj.calcNameSubCycles()
  } else {
    table = []
    // console.log('this is table => ' + table)
    // console.log(table)
    table1 = []
    table2 = []
    table3 = []
    table4 = []
    nameCycles = ''
    nameSubCycles = ''
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
                <WrapTitle
                  title="Valores Numéricos del Nombre"
                  color="bg-blue"
                  button={{
                    handle: checkName,
                    state: checkN,
                    text: 'Comprobación',
                  }}
                />
                <div className='pinnacle-wrap px-8 py-8'>
                  <div className='flex justify-between'>
                    <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
                      <label className='text-13 mb-3'>Nombre</label>
                      <div className='w-18 h-18 text-3xl font-black text-black flex justify-center items-center bg-blue-30 border border-blue rounded-full inner-shadow'>
                        {(!checkN) ? `${createNameObj.calcName()}${createNameObj.calcNameISK()}` : `${createNameObj.getNameCheck()}${createNameObj.getNameCheckISK()}`}
                      </div>
                    </div>
                    <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
                      <label className='text-13 mb-3'>Alma</label>
                      <div className='w-18 h-18 text-3xl font-black text-black flex justify-center items-center bg-blue-30 border border-blue rounded-full inner-shadow-gold'>
                        {(!checkN) ? `${createNameObj.calcSoulNumber()}${createNameObj.calcSoulNumberISK()}` : `${createNameObj.getSoulCheck()}${createNameObj.calcSoulNumberISK()}`}
                      </div>
                    </div>
                    <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
                      <label className='text-13 mb-3'>Expresión</label>
                      <div className='w-18 h-18 text-3xl font-black text-black flex justify-center items-center bg-blue-30 border border-blue rounded-full inner-shadow'>
                        {(!checkN) ? `${createNameObj.calcSoulExpresion()}${createNameObj.calcSoulExpresionISK()}` : `${createNameObj.getExpressionSoulCheck()}${createNameObj.calcSoulExpresionISK()}`}
                      </div>
                    </div>
                    <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
                      <label className='text-13 mb-3'>Madurez</label>
                      <div className='w-18 h-18 text-3xl font-black text-black flex justify-center items-center bg-aguamarina-30 border border-aguamarina rounded-full inner-shadow'>
                        {(!checkN) ? `${createNameObj.calcMaturity()}${createNameObj.calcMaturityISK()}` : `${createNameObj.calcMaturity()}${createNameObj.calcMaturityISK()}`}
                      </div>
                    </div>
                    <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
                      <label className='text-13 mb-3'>Ciclo de letras</label>
                      <div className='w-18 h-18 text-3xl font-black text-black flex justify-center items-center bg-white border border-blue rounded-full inner-shadow'>
                        {createNameObj.nameCount()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-span-4 row-span-2 mb-5'>
                <WrapTitle
                  title="Pináculo"
                  button={{
                    text: 'Comprobación',
                    handle: checkPinacle,
                    state: checkP
                  }}
                />
                <div className='pinnacle-wrap px-8 py-3'>
                  <Pinnacle consultant={createNameObj} checkP={checkP} size="small" />
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

                    {Object.entries(createNameObj.getAppearances()).map((el, i) => (
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
                  <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-blue p-2'>
                    <TiPlus className='text-2xl' />
                  </div>
                  Ciclo del Nombre
                </div>
                <div className='pinnacle-wrap px-8 py-8'>
                  {isValid()
                    ? (
<div>
                      <ActiveName table={table1} start={0} consultant={createNameObj} nameCycles={nameCycles} nameSubCycles={nameSubCycles} />
                      <ActiveName table={table2} start={31} consultant={createNameObj} nameCycles={nameCycles} nameSubCycles={nameSubCycles} />
                      <ActiveName table={table3} start={62} consultant={createNameObj} nameCycles={nameCycles} nameSubCycles={nameSubCycles} />
                      <ActiveName table={table4} start={93} consultant={createNameObj} nameCycles={nameCycles} nameSubCycles={nameSubCycles} />
</div>
)
                    : null}
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