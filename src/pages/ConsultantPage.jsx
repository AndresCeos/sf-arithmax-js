import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { fetchAllUsers, removeUser, setIsEditing } from '../store/slices/users/users';

import { UsersForm } from '../components';
import { formatDate } from '../resources';

import add_user from '../assets/icons/add_user.svg'
import c_delete from '../assets/icons/c_delete.svg'
import c_edit from '../assets/icons/c_edit.svg'
import history from '../assets/icons/history.svg'
import search from '../assets/icons/search.svg'
import welcome from '../assets/welcome.png'

const ConsultantePage = () => {
  const { list: users } = useSelector(state => state.users);
  const dispatch = useDispatch();
  const [userEdit, setUserEdit] = useState({})
  const [userIndex, setUserIndex] = useState(null)
  const [searchUser, setSearchUser] = useState("")

  useEffect( () => {
    dispatch(fetchAllUsers())
  }, [dispatch])
  const editUserHandler = (index,user) =>{
    dispatch(setIsEditing(true))
    setUserEdit(user)
    setUserIndex(index)
  }

  useEffect( ()=> {
    console.log( searchUser )
  }, [searchUser, setSearchUser])

  const userList = () => {
    if( searchUser === "" ){
      return users.map( (user,index) => userTemplate(user, index))
    }

    const search =  users.filter( user => {
      return `${user.names.toLowerCase()} ${user.lastName.toLowerCase()} ${user.scdLastName.toLowerCase()}`
        .includes( searchUser.toLowerCase() )
    });
    return search.map( (user,index) => userTemplate(user, index))
  }

  const userTemplate = (user, index) => {
    return <li key={index}  className='w-full grid grid-cols-12 h-10'>
    <div className='col-span-6'>{user.names} {user.lastName} {user.scdLastName}</div>
    <div className='col-span-4'>{formatDate(user.date)}</div>
    <div className='col-span-2'>
      <button onClick={()=>{editUserHandler(index, user)}}>
        <img src={c_edit} alt="edit" />
      </button>
      <button onClick={()=>{dispatch(removeUser(index))}} className="ml-6">
        <img src={c_delete} alt="delete" />
      </button>
    </div>
  </li>
  }


  return(
    <>
      <div className='mt-8 ml-14 flex justify-start items-center pt-10'>
        <img src={welcome} className="w-16" alt='welcome' />
        <h2 className='font-black mt-0 mb-2 text-main text-2xl'>¿A quién vas a consultar hoy?</h2>
      </div>
      <div className='grid mt-9 ml-14 grid-cols-6 gap-16'>
        <div className='col-span-4'>
          <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
            <div className='w-12 h-12 flex justify-center items-center rounded-full -ml-3 mr-2 bg-main p-2'>
              <img
                src={add_user}
                className="w-9 h-9"
                alt='add_user'
              />
            </div>
            Agregar consultante
          </div>
          <UsersForm dataUserEdit={userEdit} dataUserIndex={userIndex} />
        </div>
        <div className='col-span-2'>
          {/* <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
            <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-yellow p-2'>
              <TiPlus className='text-2xl'/>
            </div>
            Perfil del consultante
          </div>
          <div className='consultant-wrap'>
            <div className='p-7 text-main text-2xl'>
              <strong>John</strong> <br/>
              Doe
            </div>
          </div> */}
        </div>
        <div className='col-span-4 mb-10'>
          <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
            <div className='w-12 h-12 flex justify-center items-center rounded-full -ml-3 mr-2 bg-main p-2'>
              <img
                src={history}
                className="w-9 h-9"
                alt='history'
              />
            </div>
            Historial
          </div>
          <div className='users-wrap'>
            <div className='users-search rounded-3xl relative mb-6'>
              <img src={search} alt="edit" className='absolute left-2 top-2'
              />
              <input
                type="search"
                className='w-full h-8 bg-transparent outline-none pl-10 pr-4'
                value={ searchUser }
                onChange={ e => setSearchUser(e.target.value) } />
            </div>
            <ul className='users-table h-36 overflow-y-scroll'>
              <li className='w-full grid grid-cols-12 font-bold h-10'>
                <div className='col-span-6'>Nombre</div>
                <div className='col-span-4'>Fecha de Nacimiento</div>
                <div className='col-span-2'>Acciones</div>
              </li>
              { userList() }
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConsultantePage;