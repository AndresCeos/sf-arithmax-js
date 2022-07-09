import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { useConsultant } from '../hooks/useConsultant';
import { fetchAllUsers, setHasPartner, selectUserPartnerActive,
  setAddPartner, setIsSelectPartner, setIsPartnerEditing, setPartnerIndex } from '../store/slices/users/users';
import { PartnerForm, AssingPartner, UserFormInline, PartnerFormInline } from './';

import { TiPlus } from 'react-icons/ti';

export const UserPartnerSelect = () => {
  const { consultant } = useConsultant()
  const { list: users, userActive, userPartnerActive,
    hasPartner, addPartner, isSelectPartner, isPartnerEditing } = useSelector(state => state.users);
  const [isAddFormActive, setIsAddFormActive] = useState( false )

  const dispatch = useDispatch();

  const [listPartners, setListPartners] = useState( userActive.partner )

  const isEmpty = Object.keys(userPartnerActive).length === 0;
  // const objPartner = userActive.partner
  // console.log( listPartners )
  const getIndex= (element) => element.id  === userActive.id;
  const [fullName, setFullName] = useState('')
  // console.log({userActive});
  // console.log({listPartners});

  useEffect( () => {
    dispatch( fetchAllUsers() )
    if( ! isEmpty ){
      dispatch( setHasPartner(true) )
    }
    if( listPartners === undefined || listPartners.length === 0){
      dispatch( setHasPartner(false) )
    } else {
      dispatch( setHasPartner(true) )
    }
  }, [])

  useEffect( () => {
    // console.log('users active... updated...')
    // console.log( {partners: userActive.partner} )
    setListPartners( userActive.partner )
  }, [userActive])

  useEffect( () => {
    // console.log('users... updated...')
    // console.log( {partners: userActive.partner} )
    setListPartners( userActive.partner )
  }, [users])

  const selectPartner = (e) => {
    let index = e.target.value
    dispatch( selectUserPartnerActive(userActive.id,index) )
    dispatch( setIsSelectPartner(true) )
    dispatch( setPartnerIndex(index) )
    let names = listPartners[index].names
    let lastname = listPartners[index].lastName+' '+listPartners[index].scdLastName
    setFullName(names+' '+lastname)
  }
  const editUserPartner = () =>{
    dispatch( setIsPartnerEditing(true) )
    dispatch( setAddPartner(true) )
  }


  return(
    <>
      <div className='col-span-12 mb-10'>
        <div className='bg-black text-white text-base font-bold h-8 flex items-center justify-between rounded-tl-2xl rounded-tr-2xl'>
          <div className='flex items-center'>
            <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-red-day p-2'>
              <TiPlus className='text-2xl'/>
            </div>
            Datos de Pareja
          </div>
          <button
            onClick={ () => setIsAddFormActive( !isAddFormActive ) }
            className={`float-right ${ isAddFormActive ? 'bg-red-500' : 'bg-gold' } px-4 font-bold h-11 mb-3 rounded-t-3xl rounded-bl-3xl`}>
              { isAddFormActive ? 'Cancelar' : 'Agregar Pareja' }
          </button>
        </div>
        <div className='pinnacle-wrap px-8 py-8'>
          <UserFormInline
            name={consultant.fullName}
            birthDate={consultant.getFormBirthDate()}
            age={consultant.getYearsOld()}
          />
          <PartnerFormInline
            hasPartner={hasPartner}
            partners={listPartners}
            currentPartner={userPartnerActive}
            isAddFormActive={isAddFormActive}
            setIsAddFormActive={setIsAddFormActive} />
        </div>
      </div>
      {/* TODO: Edit partner
      <div className='w-full box col-span-24 '>
        <div className='w-full flex'>
          <div className='w-5/12 '>
            <p> <strong>Pareja:</strong>{(!isSelectPartner)?'Ninguna':fullName}</p>
          </div>
          {(hasPartner)?
          <div className='w-full flex'>
          {(!addPartner)?<select onChange={selectPartner}   className='border p-2'>
              <option value=""  >Seleciona una pareja</option>
              {listPartners.map((partner, index)=>
                <option key={index} value={index}>{partner.names}</option>
              )}
            </select>:''}
            <div className='w-full text-center'>
            {(!addPartner)?<div>
              <button className='btn-save' onClick={()=>{dispatch(setAddPartner(true))}}>Agrega pareja</button>
              {(isSelectPartner)?<button className='btn-conf' onClick={editUserPartner}>Editar pareja</button>:''}
            </div>:
            <div>
            {!isPartnerEditing?<h4>Nueva pareja</h4>:<h4>Editando pareja</h4>}
            <PartnerForm dataPartner={userActive}  userIndex={users.findIndex(getIndex)}/>
            {!isPartnerEditing?<AssingPartner/>:''}
            </div>  }
          </div>
          </div>:
          <div className='w-7/12 text-center'>
          {(!addPartner)?<button className='btn-save' onClick={()=>{dispatch(setAddPartner(true))}}>Agrega pareja</button>:
          <PartnerForm dataPartner={userActive}  userIndex={users.findIndex(getIndex)}/>}
          </div>}
        </div>
      </div> */}
    </>
  )
}