import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik'

import { updateUserInfo } from '../store/slices/auth';

import add_user from '../assets/icons/add_user.svg'

const ConfigPage = () => {
  const { names, lastName, scdLastName, date } = useSelector( state => state.auth )

  const dispatch = useDispatch();

  return(
    <div className='grid grid-cols-12 mt-8 mx-14 gap-6 pt-10'>
        <div className='col-span-9'>
          <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
            <div className='w-12 h-12 flex justify-center items-center rounded-full -ml-3 mr-2 bg-main p-2'>
              <img
                src={add_user}
                className="w-9 h-9"
                alt='add_user'
              />
            </div>
            Datos generales
          </div>
          <Formik
            enableReinitialize
            initialValues={ {
              names,
              lastName,
              scdLastName,
              date
            }}
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
              console.log(user)
              dispatch(updateUserInfo(user))
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
              <div className="flex w-full gap-4">
                <div className="form-group w-1/3">
                  <label className='font-bold mb-1 text-13'>
                    Nombre(s)*
                  </label>
                  <input
                    type="text"
                    name="names"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.names}
                    className="rounded-md"
                  />
                  {errors.names && touched.names ? <span className="form-error">{errors.names}</span>  : null }
                </div>
                <div className="form-group w-1/3">
                  <label className='font-bold mb-1 text-13'>
                    Apellido Paterno*
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                    className="rounded-md"
                  />
                  {errors.lastName && touched.lastName ? <span className="form-error">{errors.lastName}</span>  : null }
                </div>
                <div className="form-group w-1/3">
                  <label className='font-bold mb-1 text-13'>
                    Apellido Materno*
                  </label>
                  <input
                    type="text"
                    name="scdLastName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.scdLastName}
                    className="rounded-md"
                  />
                  {errors.scdLastName && touched.scdLastName ? <span className="form-error">{errors.scdLastName}</span>  : null }
                </div>
              </div>
              <div className="flex w-full gap-4 mt-6">
                <div className="form-group w-1/3">
                  <label className='font-bold mb-1 text-13'>
                    Fecha de Nacimiento*
                  </label>
                  <input
                    type="date"
                    name="date"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.date}
                    className="rounded-md"
                  />
                  {errors.date && touched.date ? <span className="form-error">{errors.date}</span>  : null }
                </div>
                <div className="form-group w-1/3">
                  <label className='font-bold mb-1 text-13'>Nacionalidad</label>
                  <input
                    type="text"
                    name="nat"
                    className="rounded-md"
                  />
                </div>
                <div className="form-group w-1/3">
                  <label className='font-bold mb-1 text-13'>Sexo</label>
                  <input
                    type="text"
                    name="sex"
                    className="rounded-md"
                  />
                </div>
              </div>
              <div className="flex w-full gap-4 mt-6 items-center">
                <div className='w-full text-center flex justify-center items-center flex-col'>
                  <button type="submit" className="btn-save w-3/12" disabled={isSubmitting}>Guardar</button>
                </div>
              </div>
            </form>
          )}
          </Formik>
        </div>
    </div>
  )
}

export default ConfigPage;