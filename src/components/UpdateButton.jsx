import React, { useState } from 'react';

export const UpdateButton = () => {
  const appVersionAlert = localStorage.getItem('app_version_alert');
  const [isVisible, setIsVisible] = useState(true)

  if (appVersionAlert !== 'true') {
    return null;
  }

  const handleUpdate = () => {
    localStorage.setItem('app_version_alert', false)
    window.location.reload()
  }

  const handleHide = () => {
    setIsVisible(false)
  }

  return (
    <div className={`transition transform fixed z-100 top-60 inset-x-0 pb-2 sm:pb-5 opacity-100 scale-100 translate-y-0 ease-out duration-500 ${isVisible || 'hidden'}`}>
      <div className="w-96 mx-auto px-2 sm:px-4">
        <div className="p-2 rounded-lg bg-gray-900 shadow-lg sm:p-3">
          <div className="flex items-center justify-between flex-wrap flex-col">
            <div className="w-full flex-1 flex items-center ">
              <p className="ml-3 font-medium text-white ">
                <span className="hidden lg:inline text-gray-400">
                  <strong className="text-white font-bold mr-1 "  >Actualización disponible!</strong>
                </span>
                <p className='p-5'>Te recordamos que para poder disfrutar de las actualizaciones debes de cerrar sesión y volver a inicar sesión una ves que se haya actualizado el software.</p>
              </p>
            </div>
            <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
              <div className="rounded-md shadow-sm">
                <button onClick={handleUpdate} className="flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-gray-900 bg-white hover:text-gray-800 focus:outline-none focus:text-black">La quiero</button>
              </div>
            </div>
            {/*<div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
              <button type="button" className="-mr-1 flex p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-800" aria-label="Hide banner" onClick={handleHide}>
                <svg className="h-6 w-6 text-white" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>*/}
          </div>
        </div>
      </div>
    </div>
  )
}
