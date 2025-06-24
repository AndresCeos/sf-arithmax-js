import { useEffect, useState } from 'react';
import { TiPlus, TiMediaPlay, TiMediaPlayReverse } from 'react-icons/ti';
import { useSelector } from 'react-redux';
import { AnnualReturn, CircleNumber, Pinnacle, UnselectedConsultant, UserPartnerSelect } from '../components';
import { dateSelect, useConsultant, useGroup } from '../hooks'
import { Group, Person } from '../resources';


const GroupPinnaclePage = () => {
  const { userActive } = useSelector(state => state.users);
  const isEmpty = Object.keys(userActive).length === 0;
  const [listGroup, setGroupList] = useState()
  const [index1, setIndex1] = useState(0)
  const [index2, setIndex2] = useState(1)
  const { newDate } = dateSelect()
  const { group } = useGroup()
  useEffect(() => {
    if (!isEmpty) {
    setGroupList(userActive.dateGroup)
    }
  }, [])
  const colors = [
    'bg-lime-600',
    'bg-cyan-600',
    'bg-purple-600',
    'bg-pink-600',
    'bg-green-600',
    ' bg-red-600',
    'bg-sky-600',
    'bg-amber-600'
  ]


  if (isEmpty) {
    return <UnselectedConsultant />
  }

  const groupDate = userActive.dateGroup
  const groupConsult = new Group(group, groupDate)
  const isEmptyGroup = Object.keys(userActive.group).length === 0;
  const list = groupConsult.getGroup()
  const annualReturnGroup = groupConsult.annualReturn(newDate.year())

  const nextPerson = () => {
    if (index2 === list.length - 1) {

    } else {
      setIndex1(index1 + 1)
      setIndex2(index2 + 1)
    }
  }
  const prevPerson = () => {
    if (index1 === 0) {

    } else {
      setIndex1(index1 - 1)
      setIndex2(index2 - 1)
    }
  }
return (
  <div className='grid grid-cols-12 mx-14 gap-6 mt-8 py-10 relative'>
    <UserPartnerSelect isGroup />
  {(!isEmptyGroup)
  ? (
<>
  <button className=" absolute -left-10 top-1/2 z-20" onClick={prevPerson}><TiMediaPlayReverse className='text-4xl' /></button>
    <button className=" absolute -right-10 top-1/2 z-20" onClick={nextPerson}><TiMediaPlay className='text-4xl' /></button>
    <div className="col-span-4 mb-1 z-10">
    <div className='bg-black text-white text-base font-bold h-8 flex items-center justify-between rounded-tl-2xl rounded-tr-2xl'>
      <div className='flex items-center'>
        <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-group p-2'>
          <TiPlus className='text-2xl' />
        </div>
        Nombre: Grupo
      </div>
    </div>
    <div className='pinnacle-wrap px-5 py-4 bg-active-radial shadow-sm'>
      <div className='grid grid-cols-4'>
        <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
          <label className='mb-3 text-gray text-13'>Nombre</label>
          <CircleNumber size="sm" appearance="blue-30" border="blue">
            {groupConsult.calcName()}{groupConsult.calcNameISK()}
          </CircleNumber>
        </div>
        <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
          <label className='mb-3 text-gray text-13'>Alma</label>
          <CircleNumber size="sm" appearance="blue-30" border="blue" radiant>
            {groupConsult.calcSoulNumber()}{groupConsult.calcSoulNumberISK()}
          </CircleNumber>
        </div>
        <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
          <label className='mb-3 text-gray text-13'>Expresión</label>
          <CircleNumber size="sm" appearance="blue-30" border="blue">
            {groupConsult.calcSoulExpresion()}{groupConsult.calcSoulExpresionISK()}
          </CircleNumber>
        </div>
        <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
          <label className='mb-3 text-gray text-13'>Madurez</label>
          <CircleNumber size="sm" appearance="aguamarina-30" border="aguamarina">
            {groupConsult.calcMaturity()}{groupConsult.calcMaturityISK()}
          </CircleNumber>
        </div>
      </div>
    </div>
    </div>
    {list.map((person, i) => (
  <div className={`${(index1 === i || index2 === i) ? 'block' : 'hidden'} col-span-4 mb-1 z-10`} key={i}>
  <div className={` ${colors[i]} text-white text-base font-bold h-8 flex items-center justify-between rounded-tl-2xl rounded-tr-2xl`}>
    <div className='flex items-center'>
      <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-group p-2'>
        <TiPlus className='text-2xl' />
      </div>
      Nombre: {person.nameView}
    </div>
  </div>
  <div className='pinnacle-wrap px-5 py-4  shadow-sm'>
    <div className='grid grid-cols-4'>
      <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
        <label className='mb-3 text-gray text-13'>Nombre</label>
        <CircleNumber size="sm" appearance="blue-30" border="blue">
          {person.calcName()}{person.calcNameISK()}
        </CircleNumber>
      </div>
      <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
        <label className='mb-3 text-gray text-13'>Alma</label>
        <CircleNumber size="sm" appearance="blue-30" border="blue" radiant>
          {person.calcSoulNumber()}{person.calcSoulNumberISK()}
        </CircleNumber>
      </div>
      <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
        <label className='mb-3 text-gray text-13'>Expresión</label>
        <CircleNumber size="sm" appearance="blue-30" border="blue">
          {person.calcSoulExpresion()}{person.calcSoulExpresionISK()}
        </CircleNumber>
      </div>
      <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
        <label className='mb-3 text-gray text-13'>Madurez</label>
        <CircleNumber size="sm" appearance="aguamarina-30" border="aguamarina">
          {person.calcMaturity()}{person.calcMaturityISK()}
        </CircleNumber>
      </div>
    </div>
  </div>
  </div>
))}
    {list.length === 1 ? <div className="col-span-4" /> : ''}
    <div className='col-span-4 mb-1'>
      <div className='bg-black text-white text-base font-bold h-8 flex items-center justify-between rounded-tl-2xl rounded-tr-2xl'>
        <div className='flex items-center'>
          <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-group p-2'>
            <TiPlus className='text-2xl' />
          </div>
          Pináculo de Grupo
        </div>
      </div>
      <div className='pinnacle-wrap px-5 py-4 bg-active-radial shadow-sm'>
        <Pinnacle consultant={groupConsult} size="small" />
      </div>
    </div>
    {list.map((person, i) => (
      <div className={`${(index1 === i || index2 === i) ? 'block' : 'hidden'} col-span-4 mb-1`}>
      <div className={`${colors[i]}  text-white text-base font-bold h-8 flex items-center justify-between rounded-tl-2xl rounded-tr-2xl`}>
        <div className='flex items-center'>
          <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-group p-2'>
            <TiPlus className='text-2xl' />
          </div>
          Pináculo: {person.nameView}
        </div>
      </div>
      <div className='pinnacle-wrap px-5 py-4 shadow-sm'>
        <Pinnacle consultant={person} size="small" />
      </div>
      </div>
    ))}
    {list.length === 1 ? <div className="col-span-4" /> : ''}
    <div className='col-span-4 mb-1'>
      <div className='bg-black text-white text-base font-bold h-8 flex items-center justify-between rounded-tl-2xl rounded-tr-2xl'>
        <div className='flex items-center '>
          <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-group p-2'>
              <TiPlus className='text-2xl' />
          </div>
          Retorno: Grupo
        </div>
      </div>
      <div className='pinnacle-wrap px-5 py-4 bg-active-radial shadow-sm'>
        <AnnualReturn annualReturn={annualReturnGroup} current months />
      </div>
    </div>
    {list.map((person, i) => {
      const annualReturn = person.annualReturn(newDate.year())
      return (
        <div className={`${(index1 === i || index2 === i) ? 'block' : 'hidden'} col-span-4 mb-1`}>
          <div className={`${colors[i]}  text-white text-base font-bold h-8 flex items-center justify-between rounded-tl-2xl rounded-tr-2xl`}>
            <div className='flex items-center '>
              <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-group p-2'>
                  <TiPlus className='text-2xl' />
              </div>
              Retorno: {person.nameView}
            </div>
          </div>
          <div className='pinnacle-wrap px-5 py-4 shadow-sm'>
            <AnnualReturn annualReturn={annualReturn} current months />
          </div>
        </div>
      )
    })}


</>
)
  : <div className="col-span-12 text-center"><strong>Agrega/Selecciona una pareja para ver esta información</strong></div>
  }
  </div>
)
}
export default GroupPinnaclePage