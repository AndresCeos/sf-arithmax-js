import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

import { fetchAllUsers, selectUserActive, setIsSelectPartner,setUserPartnerActive } from '../store/slices/users/users';

import ic_search from '../assets/icons/sb_search.svg'

export const ConsultantPicker = () => {

  const { list: users, userActive } = useSelector(state => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [dispatch])

  const handleChange = (e) => {
    dispatch(selectUserActive(e.value))
    dispatch(setIsSelectPartner(false))
    dispatch(setUserPartnerActive({}))
  }
  const options = users.map(({ id, names, lastName, scdLastName }) => ({
    value: id,
    label: `${names} ${lastName} ${scdLastName}`
  }))

  const formatUserActive = () => {
    if (userActive?.id) {
      return {
        value: userActive.id,
        label: `${userActive.names} ${userActive.lastName} ${userActive.scdLastName}`
      };
    }
    return null;
  }

  return (
    <div className='selectConsultant flex items-center'>
      <img src={ic_search} className="mx-2 drop-shadow-sm" alt='consultant search' />
      Consultante:
      <Select
        options={options}
        onChange={handleChange}
        value={formatUserActive()}
        className='px-2 w-72'
        placeholder="Selecccionar"
        classNamePrefix="bg-transparent border-0 outline-none font-bold"
        noOptionsMessage={({ inputValue: string }) => 'No hay coincidencias'}
      />
    </div>
  )
}