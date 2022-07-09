import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { fetchAllUsers, selectUserActive, setIsSelectPartner } from '../store/slices/users/users';

import ic_search from '../assets/icons/sb_search.svg'

export const ConsultantPicker = () => {

  const { list: users, userActive } = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(fetchAllUsers())
  }, [dispatch])

  const handleChange = (e) => {
    dispatch( selectUserActive(e.target.value) )
    dispatch( setIsSelectPartner(false) )
  }

  return(
    <div className='selectConsultant flex items-center'>
      <img src={ic_search} className="mx-2 drop-shadow-sm" alt='consultant search' />
      Consultante:
      <select onChange={handleChange} value={userActive.id} className='p-2 outline-none bg-transparent font-bold'>
        <option value={0}>Selecccionar</option>
        {users.map( ({id, names, lastName, scdLastName}) =>
          <option value={id} key={id}>{names} {lastName} {scdLastName}</option>
        ) }
      </select>
    </div>
  )
}