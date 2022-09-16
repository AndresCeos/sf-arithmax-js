import { useDispatch, useSelector } from 'react-redux';

import { Formik } from 'formik';

import { addUser, editUser, setIsEditing, showToast } from '../store/slices/users/users';

import add_user_main from '../assets/icons/add_user_main.svg';

export const UsersForm = (props) => {
  const dispatch = useDispatch();
  const { isEditing } = useSelector(state => state.users);
  const { dataUserEdit, dataUserIndex } = props;

  const handleCancel = e => {
    e.preventDefault()
    dispatch(setIsEditing(false))
  }

  return (
    <Formik
      enableReinitialize
      initialValues={isEditing
        ? {
          names: dataUserEdit.names,
          date: dataUserEdit.date,
          lastName: dataUserEdit.lastName,
          scdLastName: dataUserEdit.scdLastName,
          nationality: dataUserEdit.nationality,
          phone: dataUserEdit.phone,
          email: dataUserEdit.email,
          company: dataUserEdit.company,
          gender: dataUserEdit.gender
        }
        : { names: '', date: '', lastName: '', scdLastName: '', partner: [], group: [], dateGroup: null, nationality: '', phone: '', email: '', company: '', gender: '' }
      }
      validate={values => {
        const errors = {};
        const letters = /^[a-z áéíóúñ]+$/i
        if (!values.names) {
          errors.names = 'Requerido';
        }
        if (!values.names.match(letters)) {
          errors.names = 'No valido';
        }
        if (!values.date) {
          errors.date = 'Requerido';
        }
        if (!values.lastName) {
          errors.lastName = 'Requerido';
        }
        if (!values.lastName.match(letters)) {
          errors.lastName = 'No valido';
        }
        /* if (!values.scdLastName) {
          errors.scdLastName = 'Requerido';
        }
        if (!values.scdLastName.match(letters)) {
          errors.scdLastName = 'No valido';
        } */
        return errors;
      }}
      onSubmit={(user, { setSubmitting, resetForm }) => {
        if (isEditing) {
          user.id = dataUserEdit.id;
          user.partner = dataUserEdit.partner
          user.group = dataUserEdit.group
          dispatch(editUser(user))
          dispatch(showToast({
            message: 'Consultante actualizado',
            type: 'success',
            show: true
          }))
        } else {
          dispatch(addUser(user))
          dispatch(showToast({
            message: 'Consultante agregado',
            type: 'success',
            show: true
          }))
        }
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
        <form id='App-add-user-form' className="form-container block" onSubmit={handleSubmit}>
          <div className="flex w-full">
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
              {errors.names && touched.names ? <span className="form-error">{errors.names}</span> : null}
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
              {errors.lastName && touched.lastName ? <span className="form-error">{errors.lastName}</span> : null}
            </div>
            <div className="form-group w-1/3">
              <label className='font-bold mb-1'>
                Apellido Materno
                {/* <span className='text-red-800'>*</span> */}
              </label>
              <input
                type="text"
                name="scdLastName"
                className="rounded"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.scdLastName}
              />
              {/* errors.scdLastName && touched.scdLastName ? <span className="form-error">{errors.scdLastName}</span> : null */}
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
              {errors.date && touched.date ? <span className="form-error">{errors.date}</span> : null}
            </div>
            <div className="form-group w-1/3">
              <label className='font-bold mb-1'>Nacionalidad</label>
              <input
                type="text"
                name="nationality"
                className="rounded"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.nationality}
              />
            </div>
            <div className="form-group w-1/3">
              <label className='font-bold mb-1'>Sexo</label>
              <input
                type="text"
                name="gender"
                className="rounded"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.gender}
              />
            </div>
          </div>
          <div className="flex w-full mt-3">
            <div className="form-group w-1/3">
              <label className='font-bold mb-1'>
                Empresa
                <span className='text-red-800'>*</span>
              </label>
              <input
                type="text"
                name="company"
                className="rounded"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.company}
              />
              {errors.company && touched.company ? <span className="form-error">{errors.company}</span> : null}
            </div>
            <div className="form-group w-1/3">
              <label className='font-bold mb-1'>
                Teléfono
                <span className='text-red-800'>*</span>
              </label>
              <input
                type="number"
                name="phone"
                className="rounded"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
              />
              {errors.phone && touched.phone ? <span className="form-error">{errors.phone}</span> : null}
            </div>
            <div className="form-group w-1/3">
              <label className='font-bold mb-1'>
                Correo electrónico
                <span className='text-red-800'>*</span>
              </label>
              <input
                type="text"
                name="email"
                className="rounded"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email ? <span className="form-error">{errors.email}</span> : null}
            </div>
          </div>
          <div className="flex w-full gap-4 mt-3 items-center">
            {/* <div className='form-group w-2/3'>
              <label className='font-bold mb-1'>Motivo de la Consulta</label>
              <textarea className='rounded'></textarea>
              </div> */}
            <div className='w-1/3'>
              {(!isEditing)
              ? (
                <div className='text-center flex justify-center items-center flex-col'>
                  <img src={add_user_main} className="mb-3" alt='add_user_main' />
                  <button type="submit" className="btn-save w-full" disabled={isSubmitting}>Guardar</button>
                </div>
                  )
                : (
                <div className='w-full flex flex-wrap'>
                  <button className='w-full btn-conf mb-3' type="submit" disabled={isSubmitting}>Confirmar</button>
                  <button className='w-full btn-cancel' type='button' onClick={handleCancel}>Cancelar</button>
                </div>
                    )
              }
            </div>
          </div>
        </form>
      )}
    </Formik>
  )
}