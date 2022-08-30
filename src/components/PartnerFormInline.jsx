import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PartnerForm } from './';
import { removePartnerUser, selectUserPartnerActive, setIsSelectPartner, setPartnerIndex } from '../store/slices/users/users';
import { calcAge, formBirthDate } from '../resources/';

import add_user_main from '../assets/icons/add_user_main.svg'
import {  MdEdit } from 'react-icons/md';
import c_delete from '../assets/icons/c_delete.svg'

export const PartnerFormInline = ({ hasPartner = false, partners, isAddFormActive = false, setIsAddFormActive, editUserPartner }) => {
  const { list: users, userActive, isSelectPartner, userPartnerActive } = useSelector(state => state.users);
  const isEmpty = Object.keys( partners ).length === 0;
  const isEmptyP = Object.keys(userPartnerActive).length === 0;

  const getIndex= (element) => element.id  === userActive.id;

  const dispatch = useDispatch()

  const [partner, setPartner] = useState(isSelectPartner ? userPartnerActive : {})
  const [indexP, setIndexP] = useState(null)

  const selectPartner = e => {
    let index = e.target.value
    dispatch( selectUserPartnerActive(userActive.id,index) )
    dispatch( setIsSelectPartner(true) )
    dispatch( setPartnerIndex(index) )
    // let names = partners[index].names
    // let lastname = partners[index].lastName+' '+partners[index].scdLastName
    // console.log( partners[index] )
    setPartner( partners[index] )
    setIndexP(index)
  }
  const editPartner = ()=>{
    if(!isEmptyP){
      setIsAddFormActive(true)
      editUserPartner()
    }
  }
  const removeUser = ()=>{
    console.log(indexP)
    dispatch(removePartnerUser(userActive, indexP))
  }
  console.log(partner)
  console.log(partners)
  console.log(isSelectPartner)
  console.log(userPartnerActive);
  useEffect(() => {
    // console.log( {userPartnerActive} )
    // console.log( partner )
    if(isEmptyP){
      dispatch( setIsSelectPartner(false))
    }
    setPartner( userPartnerActive )
  }, [userPartnerActive])

  // console.log( partners )
  // console.log( partner )

  if( isEmpty || isAddFormActive ){
    return (
      <PartnerForm dataPartner={userActive} userIndex={users.findIndex(getIndex)} setIsAddFormActive={setIsAddFormActive} removeUser={removeUser} />
    )
  }
  return (
    <div className='grid grid-cols-12'>
      <div className="form-group-inline col-span-5 items-center justify-center">

        <img src={add_user_main} className="mb-3" alt='add_user_main'/>

        <label className='font-bold mb-1 mr-2 text-13 flex'>
        <button onClick={editPartner}><MdEdit className='text-xl text-gray-400' /></button> Nombre
        </label>
        <select onChange={selectPartner}   className='border rounded w-full'>
          <option value="" selected >Seleciona una pareja</option>
          {partners.map(({ id, names, lastName, scdLastName }, index)=>
            <option key={id} value={index} >
              {names} {lastName} {scdLastName}
            </option>
          )}
        </select>
      </div>
      <div className="form-group-inline col-span-4 items-center justify-center">
        <label className='font-bold mb-1 mr-2 text-13 w-full'>
          <button onClick={editPartner}><MdEdit className='text-xl text-gray-400' /></button> Fecha de Nacimiento
        </label>
        <input
          value={ partner.date !== undefined ? formBirthDate(partner.date) : '' }
          type="text"
          className="rounded w-40"
          disabled={ hasPartner }
        />
      </div>
      <div className="form-group-inline col-span-2 items-center justify-center">
        <label className='font-bold mb-1 mr-2 text-13'>
        <button onClick={editPartner}><MdEdit className='text-xl text-gray-400' /></button>  Edad
        </label>
        <input
          value={ partner.date !== undefined ? calcAge(partner.date) : '' }
          type="text"
          className="rounded w-10"
          disabled={ hasPartner }
        />
      </div>
      <div className='form-group-inline col-span-1 items-center justify-center'>
        <button onClick={removeUser} className="ml-6"><img src={c_delete} alt="delete" /></button>
      </div>
      <hr className='col-span-12 my-3' />
      <div className="form-group-inline col-span-6 items-center justify-start">

        <img src={add_user_main} className="mb-3 opacity-0" alt='add_user_main'/>

        <label className='font-bold mb-1 mr-2 text-13 flex'>
          <MdEdit className='text-xl text-gray-400'/> Se conocieron en el año:
        </label>
        <input
          value={ partner.yearMeet!== undefined?partner.yearMeet:'' }
          type="text"
          className="rounded w-20 text-center"
          disabled={ hasPartner }
        />
      </div>
    </div>
  )
}