import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

import { fetchAllUsers, selectUserActive, setIsSelectPartner } from '../store/slices/users/users';

import ic_search from '../assets/icons/sb_search.svg'

export const ConsultantPicker = () => {

  const { list: users, userActive } = useSelector(state => state.users);
  const [userSelected, setUserSelected] = useState(null)

  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(fetchAllUsers())
  }, [dispatch])

  const handleChange = (e) => {
    setUserSelected( e )
    dispatch( selectUserActive(e.value) )
    dispatch( setIsSelectPartner(false) )
  }
  const options = users.map( ({id, names, lastName, scdLastName}) =>({
    value: id,
    label: `${names} ${lastName} ${scdLastName}`
  }))

  return(
    <div className='selectConsultant flex items-center'>
      <img src={ic_search} className="mx-2 drop-shadow-sm" alt='consultant search' />
      Consultante:
      <Select
        options={options}
        onChange={handleChange}
        value={userSelected}
        className='px-2 w-72'
        placeholder="Selecccionar"
        classNamePrefix="bg-transparent border-0 outline-none font-bold"
        noOptionsMessage={ ({ inputValue: string }) => 'No hay coincidencias'}
      />
    </div>
  )
}