import { MdEdit } from 'react-icons/md';
import add_user_main from '../assets/icons/add_user_main.svg'

export const UserFormInline = ( {name, birthDate, age }) => {
  return (
    <div className='grid grid-cols-12'>
      <div className="form-group-inline col-span-6 items-center justify-center">

        <img src={add_user_main} className="mb-3" alt='add_user_main'/>

        <label className='font-bold mb-1 mr-2 text-13 flex'>
          <MdEdit className='text-xl text-gray-400'/> Nombre
        </label>
        <input
          type="text"
          className="rounded w-full"
          value={name}
          disabled
        />
      </div>
      <div className="form-group-inline col-span-4 items-center justify-center">
        <label className='font-bold mb-1 mr-2 text-13 w-full'>
          <MdEdit className='text-xl text-gray-400'/> Fecha de Nacimiento
        </label>
        <input
          type="text"
          className="rounded w-40"
          value={birthDate}
          disabled
        />
      </div>
      <div className="form-group-inline col-span-2 items-center justify-center">
        <label className='font-bold mb-1 mr-2 text-13'>
          <MdEdit className='text-xl text-gray-400'/> Edad
        </label>
        <input
          type="text"
          className="rounded w-10"
          value={age}
          disabled
        />
      </div>
    </div>
  )
}