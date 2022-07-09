import welcome from '../assets/welcome.png'

export const UnselectedConsultant = () => {
  return(
    <>
      <div className='mt-8 ml-14 flex justify-start items-center pt-8'>
        <img src={welcome} className="w-16" alt='welcome' />
        <h2 className='font-black my-0 mb-2 text-main text-2xl'>Selecciona un consultante para continuar</h2>
      </div>
    </>
  )
}