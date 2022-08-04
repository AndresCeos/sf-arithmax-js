import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PartnerForm } from './';
import { setGroupParty, setEventYear } from '../store/slices/users/users';
import { calcAge, formBirthDate } from '../resources/';

import add_user_main from '../assets/icons/add_user_group.svg'
import {  MdEdit } from 'react-icons/md';

export const GroupFormInline = ({ hasPartner = false, partners, isAddFormActive = false, setIsAddFormActive }) => {
  const { list: users, userActive, groupParty } = useSelector(state => state.users);
  const isEmpty = Object.keys( partners ).length === 0;

  const getIndex= (element) => element.id  === userActive.id;

  const dispatch = useDispatch()

  const [eventYear, setEventYear] = useState(null)
  const [groupCount, setGroupCount] = useState([])


  const selectPartner = e => {
    let index = e.target.value
    let user =  groupParty
    let newuser = partners[index]
    user = [...user, newuser]
    dispatch( setGroupParty(user))
    console.log(partners[index])
    console.log(groupParty);
    //let parn = [groupCount, ...partners[index]]

    //setEmptyGroup(false)
  }

  useEffect(() => {
    // console.log( {userPartnerActive} )
    // console.log( partner )

  }, [])

  // console.log( partners )

  if( isEmpty || isAddFormActive ){
    return (
      <PartnerForm dataPartner={userActive} userIndex={users.findIndex(getIndex)} setIsAddFormActive={setIsAddFormActive} />
    )
  }
  return (
    <>
      {groupParty.map((data,i)=>
    <div className='grid grid-cols-12'>
      <div className="form-group-inline col-span-6 items-center justify-center">

        <img src={add_user_main} className="mb-3" alt='add_user_main'/>

        <label className='font-bold mb-1 mr-2 text-13 flex'>
          <MdEdit className='text-xl text-gray-400'/> Nombre
        </label>
        <select onChange={selectPartner}   className='border rounded w-full' disabled>
          <option value=""  >Seleciona una pareja</option>
          {partners.map(({ id, names, lastName, scdLastName }, index)=>
            <option key={id} value={index} selected={ id === data.id }>
              {names} {lastName} {scdLastName}
            </option>
          )}
        </select>
      </div>
      <div className="form-group-inline col-span-4 items-center justify-center">
        <label className='font-bold mb-1 mr-2 text-13 w-full'>
          <MdEdit className='text-xl text-gray-400'/> Fecha de Nacimiento
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
      <div className="form-group-inline col-span-6 items-center justify-center">

        <img src={add_user_main} className="mb-3" alt='add_user_main'/>

        <label className='font-bold mb-1 mr-2 text-13 flex'>
          <MdEdit className='text-xl text-gray-400'/> Nombre
        </label>
        <select onChange={selectPartner}   className='border rounded w-full'>
          <option value=''  selected>Seleciona una pareja</option>
          {partners.map(({ id, names, lastName, scdLastName }, index)=>
            <option key={id} value={index} >
              {names} {lastName} {scdLastName}
            </option>
          )}
        </select>
      </div>
      <div className="form-group-inline col-span-4 items-center justify-center">
        <label className='font-bold mb-1 mr-2 text-13 w-full'>
          <MdEdit className='text-xl text-gray-400'/> Fecha de Nacimiento
        </label>
        <input
          value=''
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
          value=''
          type="text"
          className="rounded w-10"
          disabled={ hasPartner }
        />
      </div>
      </div>
    <div className='grid grid-cols-12'>
      <hr className='col-span-12 my-3' />
        <div className="form-group-inline col-span-6 items-center justify-start">

          <img src={add_user_main} className="mb-3 opacity-0" alt='add_user_main'/>

          <label className='font-bold mb-1 mr-2 text-13 flex'>
            <MdEdit className='text-xl text-gray-400'/> Fecha de integración:
          </label>
          <input
            value={ eventYear }
            type="text"
            className="rounded w-20 text-center"
            onChange={(e)=>{setEventYear(e.target.value)}}
          />
        </div>
    </div>
    </>
    
  )
}