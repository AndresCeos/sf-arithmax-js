import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';

import { startLogin } from '../store/slices/auth/thunks';

import localforage from 'localforage';
import bk from '../assets/bk.jpg';
import bk_numbers from '../assets/login-numbers.jpg';
import shape from '../assets/login-shape.png';
import Logo from '../assets/logo_login.png';
import welcome from '../assets/welcome.png';

const Login = () => {
  const [email, setEmail] = useState()
  const [pass, setPass] = useState()
  const [m, setM] = useState(null)

  const { status, errorMessage } = useSelector(state => state.auth)
  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const mLocal = localStorage.getItem('m');
    const mParams = searchParams.get('m');
    if (mParams !== null) {
      localStorage.setItem('m', mParams)
      setM(mParams)
    }
    if (mLocal !== null) {
      localStorage.setItem('m', mLocal)
      setM(mLocal)
    }
  }, [])

  const handleOnSubmit = (e) => {
    const userData = {
      username: email,
      password: pass
    }
    dispatch(startLogin(userData))
    e.preventDefault();
  }

  const handleForceReload = async () => {
    const mac = localStorage.getItem('m');
    localStorage.clear();
    await localforage.clear();
    const reloadUrl = `https://phpstack-883512-3581748.cloudwaysapps.com/?m=${mac}&ts=${Date.now()}`;
    window.location.href = reloadUrl;
  }

  return (
    <>
      <nav className="bg-white border-gray-200">
        <div className="flex flex-wrap justify-between items-center mx-auto">
          <Link to="/" className="flex">
            <img
              src={Logo}
              id="App-logo"
              alt="app-logo"
            />
          </Link>
          <div
            className="hidden w-full md:block md:w-auto mr-3"
            id="main-menu"
          />
        </div>
      </nav>
      <div className="bg-cover" style={{ backgroundImage: `url("${bk}")` }}>
        <div className="Page-Home grid grid-cols-14 h-full">
          <div className="col-span-9 grid grid-cols-9 bg-no-repeat bg-cover" style={{ backgroundImage: `url("${bk_numbers}")` }}>
            <div className="col-start-2 col-span-3 bg-contain bg-repeat-y" style={{ backgroundImage: `url("${shape}")` }} />
            <div className="col-span-4 flex flex-col justify-center items-start">
              <h2 className="text-4xl font-bold text-main-900 mb-7">“Si quieres entender el Universo, piensa en energía, frecuencia y vibración”.</h2>
              <h2 className="text-4xl text-main-900">Nikola Tesla</h2>
            </div>
          </div>
          <div className="col-span-5 h-full flex flex-col items-center justify-center bg-white bg-opacity-50">
            <div className="w-full flex flex-col items-center justify-center">
              <img src={welcome} className="w-32" alt="welcome" />
              <h2>Iniciar Sesión</h2>
              {(m === null && m === 'null') && (
                <label className="text-red-500 my-5 text-center font-bold p-4 bg-white border border-red-600">Algo no anda bien..</label>
              )}
              <form onSubmit={handleOnSubmit} className="w-full m-5 flex flex-col items-center">
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  onChange={e => setEmail(e.target.value)}
                  className="w-4/6 h-8 border border-gray-400 rounded-md text-13 text-center mb-5 outline-none"
                  required
                />
                <input
                  type="password"
                  placeholder="Contraseña"
                  onChange={e => setPass(e.target.value)}
                  className="w-4/6 h-8 border border-gray-400 rounded-md text-13 text-center mb-5 outline-none"
                  required
                />
                {
                  isAuthenticating
                    ? (
                      <button
                        type="button"
                        className="bg-yellow h-9 w-5/12 rounded-full text-base text-white font-bold cursor-progress"
                        disabled
                      >
                        <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Procesando
                      </button>
                    )
                    : (
                      <>
                        {(m !== null && m !== 'null') && (
                          <input
                            type="submit"
                            className="bg-yellow h-9 w-5/12 rounded-full text-base text-white font-bold outline-none cursor-pointer"
                            value="Entrar"
                          />
                        )}
                        <span className="text-red-500 mt-5 w-10/12 text-center italic">{errorMessage}</span>
                      </>
                    )
                }
              </form>
              <a href="https://app.numerologia-cotidiana.com/mi-cuenta/lost-password/" target="_blank" rel="noreferrer">Olvide mi Contraseña</a>
              <div className='mt-11 text-center'>
                <label className="text-sm">Si est&aacute;s experimentando problemas para iniciar sesi&oacute;n intenta:</label>
                <button
                  type='button'
                  onClick={handleForceReload}
                  className='text-sm text-red-500 hover:text-red-700'
                >
                  Borrar datos y recargar aplicaci&oacute;n
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;