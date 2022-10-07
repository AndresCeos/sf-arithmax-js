import moment from 'moment/moment';
import { useState } from 'react';
import { showToast, updateGuestByIndex } from '../store/slices/users/users';

export const useForm = (guestActive, index, dispatch, cb) => {
  const [name, setName] = useState(guestActive.name)
  const [date, setDate] = useState(guestActive.date)

  const submit = async (e) => {
    e.preventDefault()
    if (name === '' || !moment(date).isValid()) {
      dispatch(showToast({
        message: 'Datos no validos',
        type: 'error',
        show: true
      }))
    }
    await dispatch(updateGuestByIndex(index, { name, date }))
    cb(false)
  }

  return {
    submit,
    name,
    setName,
    date,
    setDate
  }
}
