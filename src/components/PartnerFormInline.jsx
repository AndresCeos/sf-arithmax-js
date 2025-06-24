import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PartnerForm } from '.';
import { calcAge, formBirthDate } from '../resources';
import { removePartnerUser, selectUserPartnerActive, setIsSelectPartner, setPartnerIndex } from '../store/slices/users/users';

import { MdEdit } from 'react-icons/md';
import add_user_main from '../assets/icons/add_user_main.svg';
import c_delete from '../assets/icons/c_delete.svg';

export const PartnerFormInline = ({ hasPartner = false, partners, isAddFormActive = false, setIsAddFormActive, editUserPartner }) => {
  const { list: users, userActive, isSelectPartner, userPartnerActive } = useSelector(state => state.users);
  const isEmpty = Object.keys(partners).length === 0;
  const isEmptyP = Object.keys(userPartnerActive).length === 0;

  const getIndex = (element) => element.id === userActive.id;

  const dispatch = useDispatch()

  const [partner, setPartner] = useState(isSelectPartner ? userPartnerActive : {})
  const [indexP, setIndexP] = useState(null)


  const selectPartner = e => {
    const index = e.target.value
    dispatch(selectUserPartnerActive(userActive.id, index))
    dispatch(setIsSelectPartner(true))
    dispatch(setPartnerIndex(index))
    // let names = partners[index].names
    // let lastname = partners[index].lastName+' '+partners[index].scdLastName
    // //console.log( partners[index] )
    setPartner(partners[index])
    setIndexP(index)
  }
  const editPartner = () => {
    if (!isEmptyP) {
      setIsAddFormActive(true)
      editUserPartner()
    }
  }
  const removeUser = () => {
    // console.log(indexP)
    dispatch(removePartnerUser(userActive, indexP))
  }
  // console.log(partner)
  // console.log(partners)
  // console.log(isSelectPartner)
  // console.log("Pareja activa =>>>>" + JSON.stringify(userPartnerActive));
  useEffect(() => {
    // //console.log( {userPartnerActive} )
    // //console.log( partner )
    if (isEmptyP) {
      dispatch(setIsSelectPartner(false))
    }
    setPartner(userPartnerActive)
  }, [userPartnerActive])

  /* const setHandlerBully = (data) => {
    setBully(!bully)
    //console.log("Fecha de coincidencia >>>>>>" + data)
    setYearToMeet(data)
  } */
  // console.log(bully)

  // //console.log( partners )
  // //console.log( partner )

  if (isEmpty || isAddFormActive) {
    return (
      <PartnerForm dataPartner={userActive} userIndex={users.findIndex(getIndex)} setIsAddFormActive={setIsAddFormActive} removeUser={removeUser} indexP={indexP} />
    )
  }
  return (
    <div className='grid grid-cols-12'>
      <div className="form-group-inline col-span-5 items-center justify-center">

        <img src={add_user_main} className="mb-3" alt='add_user_main' />

        <label className='font-bold mb-1 mr-2 text-13 flex'>
          <button onClick={editPartner}><MdEdit className='text-xl text-gray-400' /></button> Nombre
        </label>
        <select onChange={selectPartner} className='border rounded w-full'>
          {!isSelectPartner && <option value="" selected={!isSelectPartner}>Selecciona una pareja</option>}
          {partners.map(({ id, names, lastName, scdLastName }, index) => (
            <option key={id} value={index} selected={userPartnerActive.id === id && isSelectPartner}>
              {names} {lastName} {scdLastName}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group-inline col-span-4 items-center justify-center">
        <label className='font-bold mb-1 mr-2 text-13 w-full'>
          <button onClick={editPartner}><MdEdit className='text-xl text-gray-400' /></button> Fecha de Nacimiento
        </label>
        <input
          value={partner.date !== undefined ? formBirthDate(partner.date) : ''}
          type="text"
          className="rounded w-40"
          disabled={hasPartner}
        />
      </div>
      <div className="form-group-inline col-span-2 items-center justify-center">
        <label className='font-bold mb-1 mr-2 text-13'>
          <button onClick={editPartner}><MdEdit className='text-xl text-gray-400' /></button>  Edad
        </label>
        <input
          value={partner.date !== undefined ? calcAge(partner.date) : ''}
          type="text"
          className="rounded w-10"
          disabled={hasPartner}
        />
      </div>
      <div className='form-group-inline col-span-1 items-center justify-center'>
        <button onClick={removeUser} className="ml-6"><img src={c_delete} alt="delete" /></button>
      </div>
      <hr className='col-span-12 my-3' />
      <div className="form-group-inline col-span-6 items-center justify-start">

        <img src={add_user_main} className="mb-3 opacity-0" alt='add_user_main' />

        <label className='font-bold mb-1 mr-2 text-13 flex'>
          <button onClick={editPartner}><MdEdit className='text-xl text-gray-400' /></button> Se conocieron en el año:
        </label>
        <input
          value={partner.yearMeet !== undefined ? partner.yearMeet : ''}
          type="text"
          className="rounded w-20 text-center"
          disabled={hasPartner}
        />
      </div>
    </div>
  )
}