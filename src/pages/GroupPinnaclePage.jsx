import { useState } from "react";
import { useSelector } from "react-redux";
import { CircleNumber, UnselectedConsultant, UserPartnerSelect } from "../components";
import { dateSelect, useConsultant, useGroup } from "../hooks"
import { Group, Person } from "../resources";

const  GroupPinnaclePage = () =>{
  const { userActive } = useSelector(state => state.users);
  const isEmpty = Object.keys(userActive).length === 0;
  const isEmptyGroup = Object.keys(userActive.group).length === 0;
  const groupDate = userActive.dateGroup
  const { consultant } = useConsultant()
  const {newDate} = dateSelect()
  const {group} = useGroup()
  const [listGroup, setGroupList] = useState(userActive.group)

  const groupConsult = new Group(group,groupDate )
console.log(listGroup)

  if( isEmpty ){
    return<UnselectedConsultant />
  }
return(
  <div className='grid grid-cols-12 mx-14 gap-6 mt-8 pt-10'>
    <UserPartnerSelect isGroup />
  {(!isEmptyGroup)?
  <>
    <div className="col-span-4 mb-1">
    <div className='bg-black text-white text-base font-bold h-8 flex items-center justify-between rounded-tl-2xl rounded-tr-2xl'>
      <div className='flex items-center pl-8'>
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
  
  </>
  :
    <div className="col-span-12 text-center"><strong>Agrega/Selecciona una pareja para ver esta información</strong></div>
  }
  </div>
)
}
export default GroupPinnaclePage