import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../store/slices/auth';

import { useEffect, useState } from 'react';
import { TiPlus } from 'react-icons/ti';
import add_user from '../assets/icons/add_user.svg';
import c_delete from '../assets/icons/c_delete.svg';
import { showToast } from '../store/slices/users/users';

const ConfigPage = () => {
  const { names, lastName, scdLastName, date, company, address, email, tel, phone, logoURL, webSite, appVersion, licence } = useSelector(state => state.auth)
  const [base, setBase] = useState(logoURL !== null ? logoURL : '')
  const [isSelect, setIsSelect] = useState(false)
  const [maxBytes, setMaxBytes] = useState(false)
  const dispatch = useDispatch();
  useEffect(() => {
    if (base !== '') {
      setIsSelect(true)
    }
  }, [])


  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
            reject(error);
        };
    });
  };
  const uploadImage = async (event) => {
    const bytes = 1000000;
    const file = event.target.files[0];
    if (file.size > bytes) {
      setMaxBytes(true)
    } else {
      const base64 = await convertBase64(file);
      // console.log(file.size)
      // console.log(base64);
      setBase(base64)
      setIsSelect(true)
      setMaxBytes(false)
    }
  }
  const clear = () => {
    setIsSelect(false)
    setBase('')
  }

  return (
    <div className='grid grid-cols-12 mt-8 mx-14 gap-6 py-10'>
      <div className='col-span-12'>
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
        <div className='w-full flex' id='App-add-user-form'>
          <Formik
            enableReinitialize
            initialValues={{
              names,
              lastName,
              scdLastName,
              date,
              tel,
              company,
              address,
              phone,
              logoURL,
              webSite
            }}
            validate={values => {
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
            }}
            onSubmit={(user, { setSubmitting, resetForm }) => {
              user.logoURL = base
              dispatch(updateUserProfile(user))
              dispatch(showToast({
                message: 'Perfil actualizado',
                type: 'success',
                show: true
              }))
              // dispatch(updateUserInfo(user))
              setSubmitting(false);
              // resetForm({})
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
              <form className="form-container block w-full" onSubmit={handleSubmit}>
                <div className='flex w-full'>
                  <div className='w-3/5'>
                    <h2 className='text-sm font-extrabold text-gray-400 mb-5'>Datos Personales</h2>
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
                        {errors.names && touched.names ? <span className="form-error">{errors.names}</span> : null}
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
                        {errors.lastName && touched.lastName ? <span className="form-error">{errors.lastName}</span> : null}
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
                        {errors.scdLastName && touched.scdLastName ? <span className="form-error">{errors.scdLastName}</span> : null}
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
                        {errors.date && touched.date ? <span className="form-error">{errors.date}</span> : null}
                      </div>
                      <div className="form-group w-1/3">
                        <label className='font-bold mb-1 text-13'>Telefono</label>
                        <input
                          type="number"
                          name="tel"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.tel}
                          className="rounded-md"
                        />
                      </div>
                      {/* <div className="form-group w-1/3">
                        <label className='font-bold mb-1 text-13'>Nacionalidad</label>
                        <input
                          type="text"
                          name="nat"
                          className="rounded-md"
                        />
                      </div> */}
                      {/* <div className="form-group w-1/3">
                        <label className='font-bold mb-1 text-13'>Sexo</label>
                        <input
                          type="text"
                          name="sex"
                          className="rounded-md"
                        />
                      </div> */}
                    </div>
                    <div className='flex w-full gap-4 mt-6'>
                      <div className="form-group w-2/3">
                        <label className='font-bold mb-1 text-13'>Correo electrónico</label>
                        <label className='font-bold mb-1 text-13'>{email}</label>
                      </div>
                      <div className="form-group w-2/3">
                        <label className='font-bold mb-1 text-13'>Constraseña</label>
                        <a href="https://app.numerologia-cotidiana.com/mi-cuenta/lost-password/" className='text-blue-600 underline' target="_blank" rel="noreferrer">Cambiar mi Contraseña</a>
                      </div>
                    </div>
                  </div>
                  <div className='w-2/5 border-l-2 border-gray-600 px-6'>
                    <h2 className='text-sm font-extrabold text-gray-400 mb-5'>Datos Profesionales</h2>
                    <div className="flex w-full">
                      <div className="form-group w-full">
                        <label className='font-bold mb-1 text-13'>
                          Empresa*
                        </label>
                        <input
                          type="text"
                          name="company"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.company}
                          className="rounded-md"
                        />
                        {errors.company && touched.company ? <span className="form-error">{errors.company}</span> : null}
                      </div>
                    </div>
                    <div className='flex w-full mt-6'>
                      <div className="form-group w-1/2">
                        <label className='font-bold mb-1 text-13'>
                          Dirección*
                        </label>
                        <input
                          type="text"
                          name="address"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.address}
                          className="rounded-md"
                        />
                        {errors.address && touched.address ? <span className="form-error">{errors.address}</span> : null}
                      </div>
                      <div className="form-group w-1/2">
                        <label className='font-bold mb-1 text-13'>
                          Teléfono*
                        </label>
                        <input
                          type="number"
                          name="phone"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.phone}
                          className="rounded-md"
                        />
                        {errors.phone && touched.phone ? <span className="form-error">{errors.phone}</span> : null}
                      </div>
                    </div>
                    <div className="flex w-full mt-6">
                      <div className="form-group w-1/2">
                        <label className='font-bold mb-1 text-13'>
                          Página Web*
                        </label>
                        <input
                          type="text"
                          name="webSite"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.webSite}
                          className="rounded-md"
                        />
                        {errors.webSite && touched.webSite ? <span className="form-error">{errors.webSite}</span> : null}
                      </div>
                      {(!isSelect) ? (
                      <div className="form-group w-1/2">
                        <label className='font-bold mb-1 text-13'>Adjuntar Logo</label>
                        <input
                          type="file"
                          name="logoURL"
                          onChange={(e) => { uploadImage(e) }}
                          onBlur={handleBlur}
                          className="rounded-md"
                          accept="image/*"
                        />
                          {(maxBytes) ? <p className='text-13 text-red-600'>Archivo demasiado pesado</p> : null}
                          <p className='text-13 mt-2'>Tamaño del archivo max. 1MB</p>
                          <p className='text-13'>Tipo de archivo .jpeg .png</p>
                          <p className='text-13'>Dimensiones recomendadas 309 x174 pixeles</p>
                      </div>
                        ) : null}
                    </div>
                    <div className='flex w-full mt-6'>
                      {(isSelect) ? (
                      <div className="form-group w-full">
                        <label className='font-bold mb-1 text-13'>
                          Preview
                        </label>
                        <div className='flex w-full'>
                          <img className=' w-2/3 h-28 object-contain shadow-2xl' src={base} alt="logoURL" />
                          <button className="ml-6 w-1/3" onClick={clear}>
                            <img src={c_delete} alt="delete" />
                          </button>
                        </div>
                      </div>
                      ) : null}
                    </div>
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
      <div className='col-span-4'>
        <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
          <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-secondary p-2'>
            <TiPlus className='text-2xl' />
          </div>
          Mi cuenta
        </div>
        <div className='pinnacle-wrap px-5 py-4 bg-gray-300'>
          <div className='text-13 text-gray-500 pt-2'><strong>Versión de Software:</strong> {appVersion}</div>
          <div className='text-13 text-gray-500 pt-2'><strong>Número de Licencia:</strong> {licence}</div>
        </div>

      </div>
    </div>
  )
}

export default ConfigPage;