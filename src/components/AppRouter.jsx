import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Sidebar, PageManager, Navbar } from '../components';
import LoginPage from '../pages/LoginPage';

import { fetchStatus } from '../store/slices/auth/thunks';

export const AppRouter = () => {
  const {status} = useSelector( state => state.auth)
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
      </>
    )
  }

  return <LoginPage />
}