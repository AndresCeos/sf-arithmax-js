import moment from 'moment/moment'
import { useState } from 'react'
import { getAllMonths } from '../resources/Helper'

export const ModalNotes = ({ handleSave, message, setMessage }) => {
  const [count, setCount] = useState(message.length)
  const now = moment()

  const handleTextAreaChange = (e) => {
    setMessage(e.target.value)
    setCount(e.target.value.length)
  }

  const save = async () => {
    await handleSave()
  }

  return (
    <>
      <div className='flex justify-between gap-3 mb-4'>
        <h4>Nota del día</h4>
        <small>{now.date()} de {getAllMonths[now.month()]}</small>
      </div>
      <div className='text-right'>
        <textarea
          id="message"
          rows="4"
          value={message}
          onChange={handleTextAreaChange}
          className="block w-80 p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
          maxLength={400}
        />
        <label className='text-sm text-gray-500'>{count}/400</label>
        <br />
        <button
          type="submit"
          className="btn-save w-32 mt-3"
          onClick={save}
        >
          Guardar
        </button>
      </div>
    </>
  )
}
