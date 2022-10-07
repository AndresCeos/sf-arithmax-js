
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../hooks/useForm';

export const GuestForm = ({ index, cb }) => {
  const { guestActive } = useSelector(state => state.users);
  const dispatch = useDispatch();
  const form = useForm(guestActive, index, dispatch, cb)

  return (
    <>
      <h2 className="font-bold">Persona en el espacio {index}</h2>
      <form className="flex flex-col gap-2">
        <label>Nombre</label>
        <input
          type="text"
          className="w-full border border-gray-500 p-1 rounded-md"
          value={form.name}
          onChange={(e) => form.setName(e.target.value)}
        />
        <label>Fecha de Nacimiento</label>
        <input
          type="date"
          className="w-full border border-gray-500 p-1 rounded-md"
          value={form.date}
          onChange={(e) => form.setDate(e.target.value)}
        />
        <button className="btn-save w-full" onClick={form.submit}>Guardar</button>
      </form>
    </>
  )
}
