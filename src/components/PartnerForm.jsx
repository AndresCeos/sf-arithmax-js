import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik'

import { editUser, generateUserId, setAddPartner,setIsPartnerEditing } from '../store/slices/users/users';

import add_user_main from '../assets/icons/add_user_main.svg'

export const PartnerForm = ( {dataPartner,userIndex, setIsAddFormActive} ) => {
  const dispatch = useDispatch();
  const { isPartnerEditing, userPartnerActive, userActive } = useSelector(state => state.users);

  const closeForm = () =>{
    setIsAddFormActive(false)
    dispatch(setAddPartner(false))
    dispatch(setIsPartnerEditing(false))
  }
  console.log(userActive.partner);


  return(
    <Formik
      enableReinitialize
      initialValues={ ( ! isPartnerEditing ) ?
        { names: '', date: '',lastName:'',scdLastName:'',yearMeet:'' }
        :
        {
          names:userPartnerActive.names,
          date:userPartnerActive.date,
          lastName:userPartnerActive.lastName,
          scdLastName:userPartnerActive.scdLastName,
          yearMeet:userPartnerActive.yearMeet
        }
      }
      validate={ values => {
        const errors = {};
        const letters = /^[A-Za-z ]+$/
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
        if ( values.yearMeet < 1 ) {
          errors.yearMeet = 'No valido';
        }
        return errors;
      } }
      onSubmit={(user,  { setSubmitting, resetForm }) => {
        // alert( 'submit' )
        // console.log({isPartnerEditing})
        // console.log( {user} )
        // console.log( {userIndex} )
        // console.log( {dataPartner} )
        if( ! isPartnerEditing ){
          user.id = generateUserId()
          const updatedUser = {
            ...dataPartner,
            partner :[
              ...dataPartner.partner,
              user,
            ]
          }
          console.log( {updatedUser} )
          dispatch( editUser(updatedUser, userIndex) )
        }
        /*
         * TODO: EDIT PARTNER
         */

        if(isPartnerEditing){
          let partness = dataPartner.partner
          let partnerIndex = partness.findIndex(i=>i.id === userPartnerActive.id)
          let arrayPartners =Object.assign({},dataPartner.partner,{})
          arrayPartners[partnerIndex] = user
          let userPartners = Object.assign({}, dataPartner,{
            partner : Object.keys(arrayPartners).map(key => arrayPartners[key])
          })
          console.log(userPartners);
          dispatch(editUser(userPartners, userIndex))
        }
      setIsAddFormActive(false)
      setSubmitting(false);
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
          Asignar Pareja
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
          <div className="form-group w-1/3">
            <label className='font-bold mb-1'>
              Año del evento
              <span className='text-red-800'>*</span>
            </label>
            <input
              type="number"
              name="yearMeet"
              className="rounded"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.yearMeet}
            />
            {errors.yearMeet && touched.yearMeet ? <span className="form-error">{errors.yearMeet}</span>  : null }
          </div>
        </div>
        <div className="flex w-full mt-3 justify-center">
          <button type="submit" className="btn-save w-32" disabled={isSubmitting}>Guardar</button>
          {(isPartnerEditing)?<button className='w-32 btn-cancel rounded-full' type='button' onClick={closeForm} >Cancelar</button>:''}
          
        </div>
      </form>
    )}
    </Formik>
  )
}