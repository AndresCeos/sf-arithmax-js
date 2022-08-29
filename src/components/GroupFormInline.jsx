import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PartnerForm } from './';
import {  setEventYear } from '../store/slices/users/users';
import { calcAge, formBirthDate } from '../resources/';

import add_user_main from '../assets/icons/add_user_group.svg'
import {  MdEdit } from 'react-icons/md';
import { GroupForm } from './GroupForm';

export const GroupFormInline = ({ hasPartner = false, group, isAddFormActive = false, setIsAddFormActive, editUserGroup }) => {
  const { list: users, userActive, eventYear } = useSelector(state => state.users);
  const isEmpty = Object.keys( group ).length === 0;
  const [index, setIndex] = useState(null)


  const getIndex= (element) => element.id  === userActive.id;

  const dispatch = useDispatch()
  const groupDateEmpty = userActive.dateGroup

  useEffect(() => {
    // console.log( {userPartnerActive} )
    // console.log( partner )

  }, [])

  const editGroup =(i)=>{
    setIsAddFormActive(true)
    editUserGroup()
    setIndex(i)
  }

  // console.log( partners )


  if( isEmpty || isAddFormActive ){
    return (
      <GroupForm dataPartner={userActive} userIndex={users.findIndex(getIndex)} setIsAddFormActive={setIsAddFormActive} indexGroup={index} />
    )
  }
  return (
    <>
      {group.map((data,i)=>
    <div className='grid grid-cols-12' key={i}>
      <div className="form-group-inline col-span-6 items-center justify-center">

        <img src={add_user_main} className="mb-3" alt='add_user_main'/>

        <label className='font-bold mb-1 mr-2 text-13 flex'>
          <MdEdit className='text-xl text-gray-400'/> Nombre
        </label>
        <input
          type="text"
          value={data.names +' '+data.lastName+' '+data.scdLastName}
          className="rounded w-full"
          disabled={hasPartner} />
      </div>
      <div className="form-group-inline col-span-4 items-center justify-center">
        <label className='font-bold mb-1 mr-2 text-13 w-full'>
          <button onClick={()=>{editGroup(i)}} ><MdEdit className='text-xl text-gray-400'/></button> Fecha de Nacimiento
        </label>
        <input
          value={ data.date !== undefined ? formBirthDate(data.date) : '' }
          type="text"
          className="rounded w-40"
          disabled={ hasPartner }
        />
      </div>
      <div className="form-group-inline col-span-2 items-center justify-center">
        <label className='font-bold mb-1 mr-2 text-13'>
          <MdEdit className='text-xl text-gray-400'/> Edad
        </label>
        <input
          value={ data.date !== undefined ? calcAge(data.date) : '' }
          type="text"
          className="rounded w-10"
          disabled={ hasPartner }
        />
      </div>
      </div>
      )}
    <div className='grid grid-cols-12'>
      <hr className='col-span-12 my-3' />
        <div className="form-group-inline col-span-6 items-center justify-start">

          <img src={add_user_main} className="mb-3 opacity-0" alt='add_user_main'/>

          <label className='font-bold mb-1 mr-2 text-13 flex'>
            <MdEdit className='text-xl text-gray-400'/> Última Fecha de integración:
          </label>
          <input
            value={ groupDateEmpty }
            type="number"
            className="rounded w-20 text-center"
            disabled
          />
        </div>
    </div>
    </>
  )
}