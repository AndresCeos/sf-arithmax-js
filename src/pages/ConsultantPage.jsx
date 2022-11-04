import cx from 'classnames';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAllUsers, removeUser, setIsEditing } from '../store/slices/users/users';

import { UsersForm } from '../components';
import { formatDate } from '../resources';

import { MdEdit } from 'react-icons/md';
import { TiPlus } from 'react-icons/ti';

import moment from 'moment/moment';
import addUser from '../assets/icons/add_user.svg';
import cDelete from '../assets/icons/c_delete.svg';
import cEdit from '../assets/icons/c_edit.svg';
import history from '../assets/icons/history.svg';
import notes from '../assets/icons/notes.svg';
import search from '../assets/icons/search.svg';
import welcome from '../assets/welcome.png';
import Modal from '../components/Modal';
import { ModalNotesList } from '../components/ModalNotesList';

const ConsultantePage = () => {
  const { list: users, userActive, isEditing } = useSelector(state => state.users);
  const dispatch = useDispatch();
  const [userEdit, setUserEdit] = useState(userActive)
  const [userIndex, setUserIndex] = useState(null)
  const [searchUser, setSearchUser] = useState('')
  const isEmpty = Object.keys(userActive).length === 0;
  const [showModal, setShowModal] = useState(false)

  // console.log(userEdit)

  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [dispatch])

  const editUserHandler = user => {
    dispatch(setIsEditing(true))
    setUserEdit(user)
    setUserIndex(user.id)
  }

  useEffect(() => {
    // console.log(searchUser)
  }, [searchUser, setSearchUser])
  // console.log(userActive);
  const userList = () => {
    if (searchUser === '') {
      return users.map(user => userTemplate(user))
    }

    const search = users.filter(user => {
      return `${user.names.toLowerCase()} ${user.lastName.toLowerCase()} ${user.scdLastName.toLowerCase()}`
        .includes(searchUser.toLowerCase())
    });
    return search.map(user => userTemplate(user))
  }

  const userTemplate = user => {
    return (
      <li key={`${user.id}-${user.date}`} className='w-full grid grid-cols-12 h-10'>
        <div className='col-span-6'>{user.names} {user.lastName} {user.scdLastName}</div>
        <div className='col-span-4'>{formatDate(user.date)}</div>
        <div className='col-span-2'>
          <button onClick={() => { editUserHandler(user) }}>
            <img src={cEdit} alt="edit" />
          </button>
          <button onClick={() => { dispatch(removeUser(user.id)) }} className="ml-6">
            <img src={cDelete} alt="delete" />
          </button>
        </div>
      </li>
    )
  }

  const LastTime = () => {
    let lastTime = '-';
    if (userActive?.notes) {
      const date = Object.keys(userActive?.notes)[Object.keys(userActive?.notes).length - 1]
      const dateObj = moment(date)
      lastTime = `${dateObj.date()}/${dateObj.format('MM')}/${dateObj.year()}`
    }
    return (
      <>
        <strong>Última Consulta: {lastTime}</strong>
      </>
    )
  }

  const EditButton = ({ user, class: $classes }) => {
    return (
      <MdEdit
        className={cx('text-xl text-white cursor-pointer', $classes)}
        onClick={() => editUserHandler(user)} />
    )
  }

  return (
    <>
      <div className='mt-8 ml-14 flex justify-start items-center pt-10'>
        <img src={welcome} className="w-16" alt='welcome' />
        <h2 className='font-black mt-0 mb-2 text-main text-2xl'>¿A quién vas a consultar hoy?</h2>
      </div>
      <div className='grid mt-9 mx-14 grid-cols-6 gap-6'>
        <div className='col-span-4'>
          <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
            <div className='w-12 h-12 flex justify-center items-center rounded-full -ml-3 mr-2 bg-main p-2'>
              <img
                src={addUser}
                className="w-9 h-9"
                alt='addUser'
              />
            </div>
            {isEditing ? 'Editar' : 'Agregar'} consultante
          </div>
          <UsersForm dataUserEdit={userEdit} dataUserIndex={userIndex} />
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
              <img
                src={search}
                alt="edit"
                className='absolute left-2 top-2'
              />
              <input
                type="search"
                className='w-full h-8 bg-transparent outline-none pl-10 pr-4'
                value={searchUser}
                onChange={e => setSearchUser(e.target.value)}
              />
            </div>
            <ul className='users-table h-36 overflow-y-scroll'>
              <li className='w-full grid grid-cols-12 font-bold h-10'>
                <div className='col-span-6'>Nombre</div>
                <div className='col-span-4'>Fecha de Nacimiento</div>
                <div className='col-span-2'>Acciones</div>
              </li>
              {userList()}
            </ul>
          </div>
        </div>
        <div className='col-span-2'>
          {!isEmpty
            ? (
              <>
                <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
                  <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-yellow p-2'>
                    <TiPlus className='text-2xl' />
                  </div>
                  <label className='pr-2'>Perfil del consultante</label>
                  <EditButton user={userActive} />
                </div>
                <div className='consultant-wrap'>
                  <div className='flex'>
                    <div className='p-7 text-main text-2xl'>
                      <strong>{userActive.names}</strong> <br />
                      {userActive.lastName} {userActive.scdLastName}
                    </div>
                  </div>
                  <div className=' px-7 text-13 leading-7'>Fecha de nacimiento: <strong>{formatDate(userActive.date)}</strong></div>
                  <div className='flex px-7 justify-between mb-1'>
                    <div className='text-13 leading-7'>
                      Nacionalidad:
                      <strong> {userActive.nationality || '-'}</strong>
                    </div>
                    <div className='text-13 leading-7'>
                      Sexo:
                      <strong> {userActive.gender || '-'}</strong>
                    </div>
                  </div>
                  <div className='text-13 bg-gold-15 px-7 py-2'>
                    <LastTime />
                  </div>
                  <div className='px-7 pt-3 pb-7'>
                    <div className='text-13 text-main font-bold py-2'>
                      <EditButton user={userActive} class='text-gray-400' />
                      <label>Datos Profesionales</label>
                    </div>
                    <div className='text-13'>
                      <li>
                        <strong>Empresa: </strong>
                        {userActive.company || '-'}
                      </li>
                    </div>
                  </div>
                  {/* <div className='px-7 pt-3 pb-7  border-t-2 border-t-gray-300'>
                    <div className='text-13 text-main font-bold py-2'><MdEdit className='text-xl text-gray-400'/>Datos Familiares</div>

                  </div>
                  <div className='flex px-7 py-3 border-t-2 border-t-gray-300'>
                    <button className='bg-main px-5 py-1 border-0 cursor-pointer mx-2 rounded-3xl text-white text-13 font-bold flex'><img className='mr-1' src={notes}/>Abrir Notas</button>
                    <button className='bg-main px-5 py-1 border-0 cursor-pointer mx-2 rounded-3xl text-white text-13 font-bold flex'><img  className='mr-1' src={save_report}/>Reportes Guardados</button>
                  </div> */}
                  <div className='px-7 py-3 border-t-2 border-t-gray-300'>
                    {userActive?.notes &&
                      <button
                        className='bg-main rounded-full text-white p-4 mb-4 flex items-center gap-2 font-bold hover:opacity-90'
                        onClick={() => setShowModal(true)}
                      >
                        <img
                          src={notes}
                          alt='notas'
                        />
                        Abrir Notas
                      </button>}
                    <div className='text-13 text-main font-bold py-2'>
                      <EditButton user={userActive} class='text-gray-400' />
                      <label>Datos de Contacto</label>
                    </div>
                    <div className='text-13 leading-7'>
                      <strong>Teléfono: </strong>
                      {userActive.phone || '-'}
                    </div>
                    <div className='text-13 leading-7'>
                      <strong>Correo Electrónico: </strong>
                      {userActive.email || '-'}
                    </div>
                  </div>
                </div>
              </>
            ) : ''}
        </div>
        <div className='col-span-4 mb-10' />
        {showModal &&
          <Modal
            class={`max-w-[80%]`}
            handleCloseModal={() => setShowModal(false)}
          >
            <ModalNotesList notes={userActive?.notes} />
          </Modal>
        }
      </div>
    </>
  )
}

export default ConsultantePage;