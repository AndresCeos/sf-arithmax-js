import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik'

import { editUser, generateUserId, setIsGroupEditing } from '../store/slices/users/users';

import add_user_main from '../assets/icons/add_user_group.svg'
import { useState } from 'react';

export const GroupForm = ( {dataPartner,userIndex, setIsAddFormActive,indexGroup} ) => {
  const dispatch = useDispatch();
  const { isGroupEditing, userActive } = useSelector(state => state.users);
  let groupDateEmpty = true
  const gDate = userActive.dateGroup
  const [groupDate, setGroupDate] = useState(isGroupEditing?gDate:null)
if(userActive.dateGroup !== null){
  groupDateEmpty = false
}
let cap = userActive.group
console.log(cap.length);


const closeForm = () =>{
  setIsAddFormActive(false)
  dispatch(setIsGroupEditing(false))
}
  return(
    <>
    <Formik
      enableReinitialize
      initialValues={ ( ! isGroupEditing ) ?
        { names: '', date: '',lastName:'',scdLastName:'' }
        :
        {
          names:cap[indexGroup].names,
          date:cap[indexGroup].date,
          lastName:cap[indexGroup].lastName,
          scdLastName:cap[indexGroup].scdLastName
        }
      }
      validate={ values => {
        const errors = {};
        const letters = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/g
        if (!values.names) {
          errors.names = 'Requerido';
        }
        if (!values.names.match( letters )) {
          errors.names = 'No valido';
        }
        if (!values.date) {
          errors.date = 'Requerido';
        }
        if (!values.lastName) {
          errors.lastName = 'Requerido';
        }
        if (!values.lastName.match( letters )) {
          errors.lastName = 'No valido';
        }
        if (!values.scdLastName) {
          errors.scdLastName = 'Requerido';
        }
        if (!values.scdLastName.match( letters )) {
          errors.scdLastName = 'No valido';
        }
        if (!values.scdLastName.match( letters )) {
          errors.scdLastName = 'No valido';
        }
        return errors;
      } }
      onSubmit={(user,  { setSubmitting, resetForm }) => {
          if(!isGroupEditing){
            user.id = generateUserId()
          const updatedUser = {
            ...dataPartner,
            group :[
              ...dataPartner.group,
              user,
            ],
            dateGroup:groupDate
          }

          console.log( {updatedUser} )
          dispatch( editUser(updatedUser, userIndex) )
          }
        /*
         * TODO: EDIT PARTNER
         */

      if(isGroupEditing){
         let arrayGroups =Object.assign({},dataPartner.group,{})
         arrayGroups[indexGroup] = user
         let userPartners = Object.assign({}, dataPartner,{
           group : Object.keys(arrayGroups).map(key => arrayGroups[key])
         })
         userPartners.dateGroup = groupDate
         console.log(userPartners);
         dispatch(editUser(userPartners, userIndex))
       }
      setIsAddFormActive(false)
      setSubmitting(false);
      dispatch(setIsGroupEditing(false))
      resetForm({})
      }}
    >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
      /* and other goodies */
    }) => (
      <form  className="block w-full mt-3" onSubmit={handleSubmit}>
        <h2 className="flex justify-center items-center text-xl font-bold">
          <img src={add_user_main} className="mr-3" alt='add_user_main'/>
          Agregar Persona al Grupo
        </h2>
        <div className="flex w-full mt-6">
          <div className="form-group w-1/3">
            <label className='font-bold mb-1'>
              Nombre(s)
              <span className='text-red-800'>*</span>
            </label>
            <input
              type="text"
              name="names"
              className="rounded"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.names}
            />
            {errors.names && touched.names ? <span className="form-error">{errors.names}</span>  : null }
          </div>
          <div className="form-group w-1/3">
            <label className='font-bold mb-1'>
              Apellido Paterno
              <span className='text-red-800'>*</span>
            </label>
            <input
              type="text"
              name="lastName"
              className="rounded"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
            />
            {errors.lastName && touched.lastName ? <span className="form-error">{errors.lastName}</span>  : null }
          </div>
          <div className="form-group w-1/3">
            <label className='font-bold mb-1'>
              Apellido Materno
              <span className='text-red-800'>*</span>
            </label>
            <input
              type="text"
              name="scdLastName"
              className="rounded"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.scdLastName}
            />
            {errors.scdLastName && touched.scdLastName ? <span className="form-error">{errors.scdLastName}</span>  : null }
          </div>
        </div>
        <div className="flex w-full mt-3">
          <div className="form-group w-1/3">
            <label className='font-bold mb-1'>
              Fecha de Nacimiento
              <span className='text-red-800'>*</span>
            </label>
            <input
              type="date"
              name="date"
              className="rounded"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.date}
            />
            {errors.date && touched.date ? <span className="form-error">{errors.date}</span>  : null }
          </div>
        </div>
        <div className="flex w-full mt-3 justify-center">
          <button type="submit" className="btn-save w-32" disabled={isSubmitting}>Guardar</button>
          {(isGroupEditing)?<button className='w-32 btn-cancel rounded-full' type='button' onClick={closeForm} >Cancelar</button> :''}
        </div>
      </form>
    )}
    </Formik>
<div className="flex w-full mt-3">
      <div className="form-group w-1/3">
        <label className='font-bold mb-1'>
          Última Fecha de Integración
          <span className='text-red-800'>*</span>
        </label>
        <input
          type="number"
          name="dateInit"
          className="rounded"
          value={groupDate}
          onChange={(e)=>{setGroupDate(e.target.value)}}
        />
      </div>
    </div>
    </>
  )
}