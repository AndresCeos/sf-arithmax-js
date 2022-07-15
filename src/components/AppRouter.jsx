import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Sidebar, PageManager, Navbar } from '../components';
import LoginPage from '../pages/LoginPage';

import { fetchStatus } from '../store/slices/auth/thunks';
import { Toast } from './Toast';

export const AppRouter = () => {
  const {status} = useSelector( state => state.auth)
  const {toast} = useSelector( state => state.users)
  const { message, type, show } = toast
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStatus())
  }, [dispatch])

  if( status === 'authenticated'){
    return(
      <>
        <Navbar />
        <div className="App">
          <Sidebar />
          <PageManager />
        </div>
        <Toast message={message} type={type} show={show} />
      </>
    )
  }

  return <LoginPage />
}