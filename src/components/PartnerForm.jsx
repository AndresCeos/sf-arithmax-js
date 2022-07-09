import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik'

import { editUser, generateUserId } from '../store/slices/users/users';

import add_user_main from '../assets/icons/add_user_main.svg'

export const PartnerForm = ( {dataPartner,userIndex, setIsAddFormActive} ) => {
  const dispatch = useDispatch();
  const { isPartnerEditing, userPartnerActive } = useSelector(state => state.users);

  // const closeForm = () =>{
  //   dispatch(setAddPartner(false))
  //   dispatch(setIsPartnerEditing(false))
  // }

  return(
    <Formik
      enableReinitialize
      initialValues={(!isPartnerEditing)?{ names: '', date: '',lastName:'',scdLastName:'',yearMeet:'' }:
      {names:userPartnerActive.names,date:userPartnerActive.date,lastName:userPartnerActive.lastName,scdLastName:userPartnerActive.scdLastName,yearMeet:userPartnerActive.yearMeet}}
      validate={ values => {
        const errors = {};
        if (!values.names) {
          errors.names = 'Requerido';
        }
        if (!values.date) {
          errors.date = 'Requerido';
        }
        if (!values.lastName) {
          errors.lastName = 'Requerido';
        }
        if (!values.scdLastName) {
          errors.scdLastName = 'Requerido';
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

      // if(isPartnerEditing){
      //   let arrayPartners =Object.assign({},dataPartner.partner,{})
      //   arrayPartners[partnerIndex] = user
      //   let userPartners = Object.assign({}, dataPartner,{
      //     partner : Object.keys(arrayPartners).map(key => arrayPartners[key])
      //   })
      //   console.log(userPartners);
      //   dispatch(editUser(userPartners, userIndex))
      // } else {
        // const newdata = Object.assign(dataPartner,{
        //   partner:[...dataPartner.partner, user]
        // })
        // dispatch( editUser(newdata, userIndex) )
      //   console.log({'add partner': newdata});
      // }
      // //window.location.reload(false);
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
        <div className="flex w-full">
          <div className="form-group w-full">
          <label>Nombre(s)</label>
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
        </div>
        <div className="flex w-full">
          <div className="form-group w-6/12">
            <label>Apellido Paterno</label>
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
          <div className="form-group w-6/12">
            <label>Apellido Materno</label>
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
        <div className="flex w-full items-end">
          <div className="form-group w-6/12">
            <label>Fecha de Nacimiento</label>
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
          <div className='form-group w-6/12'>
            <label>Año del evento</label>
            <input
              type="date"
              name="yearMeet"
              className="rounded"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.yearMeet}
            />
            {errors.yearMeet && touched.yearMeet ? <span className="form-error">{errors.yearMeet}</span>  : null }
          </div>
        </div>
        <div className='flex w-full mt-5 '>
          <button type="submit" className="btn-save w-6/12 " disabled={isSubmitting}>Guardar</button>
          {/* <button className='w-6/12 btn-cancel rounded' type='button' onClick={closeForm} >Cancelar</button> */}
        </div>
      </form>
    )}
    </Formik>
  )
}