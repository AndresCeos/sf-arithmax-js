import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Pinnacle, AnnualReturn, UnselectedConsultant,
  UserPartnerSelect, CircleNumber } from '../components/';
import { fetchAllUsers } from '../store/slices/users/users';
import { useConsultant, dateSelect } from '../hooks';
import { Synastry, Person } from '../resources/'

import { TiPlus } from 'react-icons/ti';

const SinastryPage = () => {
  const { userActive, userPartnerActive, isSelectPartner } = useSelector(state => state.users);
  const isEmpty = Object.keys(userActive).length === 0;

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchAllUsers())
  },[dispatch])

  const { consultant } = useConsultant()
  const {newDate} = dateSelect()

  if( isEmpty ){
    return<UnselectedConsultant />
  }

  const partner = new Person({
    name: userPartnerActive.names,
    lastName:userPartnerActive.lastName,
    scdLastName: userPartnerActive.scdLastName,
    birthDate: userPartnerActive.date,
    yearMeet :userPartnerActive.yearMeet
  })

  if( partner === undefined ){
    return<UnselectedConsultant />
  }

  const synastry = new Synastry(consultant, partner)

  const annualReturnConsultant = consultant.annualReturn(newDate.year())
  const annualReturnPartner = partner.annualReturn(newDate.year())
  const annualReturnSynastry = synastry.annualReturn(newDate.year())

  return(
    <div className='grid grid-cols-12 mx-14 gap-6 mt-8 pt-10'>

      <UserPartnerSelect/>

      {(isSelectPartner)?
      <>

        <div className='col-span-4 mb-1'>
          <div className='bg-black text-white text-base font-bold h-8 flex items-center justify-between rounded-tl-2xl rounded-tr-2xl'>
            <div className='flex items-center pl-8'>
              Nombre de Pareja
            </div>
          </div>
          <div className='pinnacle-wrap px-5 py-4 bg-active-radial shadow-sm'>
            <div className='grid grid-cols-4'>
              <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
                <label className='mb-3 text-gray text-13'>Nombre</label>
                <CircleNumber size="sm" appearance="blue-30" border="blue">
                  {synastry.calcName()}{synastry.calcNameISK()}
                </CircleNumber>
              </div>
              <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
                <label className='mb-3 text-gray text-13'>Alma</label>
                <CircleNumber size="sm" appearance="blue-30" border="blue" radiant>
                  {synastry.calcSoulNumber()}{synastry.calcSoulNumberISK()}
                </CircleNumber>
              </div>
              <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
                <label className='mb-3 text-gray text-13'>Expresión</label>
                <CircleNumber size="sm" appearance="blue-30" border="blue">
                  {synastry.calcSoulExpresion()}{synastry.calcSoulExpresionISK()}
                </CircleNumber>
              </div>
              <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
                <label className='mb-3 text-gray text-13'>Madurez</label>
                <CircleNumber size="sm" appearance="aguamarina-30" border="aguamarina">
                  {synastry.calcMaturity()}{synastry.calcMaturityISK()}
                </CircleNumber>
              </div>
            </div>
          </div>
        </div>

        <div className='col-span-4 mb-1'>
          <div className='bg-black text-white text-base font-bold h-8 flex items-center justify-between rounded-tl-2xl rounded-tr-2xl'>
            <div className='flex items-center'>
              <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-blue p-2'>
                <TiPlus className='text-2xl'/>
              </div>
              Nombre: {consultant.name}
            </div>
          </div>

          <div className='pinnacle-wrap px-5 py-4'>
            <div className='grid grid-cols-4'>
              <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
                <label className='mb-3 text-gray text-13'>Nombre</label>
                <CircleNumber size="sm" appearance="blue-30" border="blue">
                  {consultant.calcName()}{consultant.calcNameISK()}
                </CircleNumber>
              </div>
              <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
                <label className='mb-3 text-gray text-13'>Alma</label>
                <CircleNumber size="sm" appearance="blue-30" border="blue" radiant>
                  {consultant.calcSoulNumber()}{consultant.calcSoulNumberISK()}
                </CircleNumber>
              </div>
              <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
                <label className='mb-3 text-gray text-13'>Expresión</label>
                <CircleNumber size="sm" appearance="blue-30" border="blue">
                  {consultant.calcSoulExpresion()}{consultant.calcSoulExpresionISK()}
                </CircleNumber>
              </div>
              <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
                <label className='mb-3 text-gray text-13'>Madurez</label>
                <CircleNumber size="sm" appearance="aguamarina-30" border="aguamarina">
                  {consultant.calcMaturity()}{consultant.calcMaturityISK()}
                </CircleNumber>
              </div>
            </div>
          </div>
        </div>

        <div className='col-span-4 mb-1'>
          <div className='bg-black text-white text-base font-bold h-8 flex items-center justify-between rounded-tl-2xl rounded-tr-2xl'>
            <div className='flex items-center'>
              <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-blue p-2'>
                <TiPlus className='text-2xl'/>
              </div>
              Nombre: {partner.name}
            </div>
          </div>
          <div className='pinnacle-wrap px-5 py-4'>
            <div className='grid grid-cols-4'>
              <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
                <label className='mb-3 text-gray text-13'>Nombre</label>
                <CircleNumber size="sm" appearance="blue-30" border="blue">
                  {partner.calcName()}{partner.calcNameISK()}
                </CircleNumber>
              </div>
              <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
                <label className='mb-3 text-gray text-13'>Alma</label>
                <CircleNumber size="sm" appearance="blue-30" border="blue" radiant>
                  {partner.calcSoulNumber()}{partner.calcSoulNumberISK()}
                </CircleNumber>
              </div>
              <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
                <label className='mb-3 text-gray text-13'>Expresión</label>
                <CircleNumber size="sm" appearance="blue-30" border="blue">
                  {partner.calcSoulExpresion()}{partner.calcSoulExpresionISK()}
                </CircleNumber>
              </div>
              <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
                <label className='mb-3 text-gray text-13'>Madurez</label>
                <CircleNumber size="sm" appearance="aguamarina-30" border="aguamarina">
                  {consultant.calcMaturity()}{consultant.calcMaturityISK()}
                </CircleNumber>
              </div>
            </div>
          </div>
        </div>

        <div className='col-span-4 mb-1'>
          <div className='bg-black text-white text-base font-bold h-8 flex items-center justify-between rounded-tl-2xl rounded-tr-2xl'>
            <div className='flex items-center pl-8'>
              Pináculo de Pareja
            </div>
          </div>
          <div className='pinnacle-wrap px-5 py-4 bg-active-radial shadow-sm'>
            <Pinnacle consultant={synastry} size="small" />
          </div>
        </div>

        <div className='col-span-4 mb-1'>
          <div className='bg-black text-white text-base font-bold h-8 flex items-center justify-between rounded-tl-2xl rounded-tr-2xl'>
            <div className='flex items-center'>
              <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-blue p-2'>
                <TiPlus className='text-2xl'/>
              </div>
              Pináculo: {consultant.name}
            </div>
          </div>
          <div className='pinnacle-wrap px-5 py-4 shadow-sm'>
            <Pinnacle consultant={consultant} size="small" />
          </div>
        </div>

        <div className='col-span-4 mb-1'>
          <div className='bg-black text-white text-base font-bold h-8 flex items-center justify-between rounded-tl-2xl rounded-tr-2xl'>
            <div className='flex items-center'>
              <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-blue p-2'>
                <TiPlus className='text-2xl'/>
              </div>
              Pináculo: {partner.name}
            </div>
          </div>
          <div className='pinnacle-wrap px-5 py-4 shadow-sm'>
            <Pinnacle consultant={partner} size="small" />
          </div>
        </div>

        <div className='col-span-4 mb-1'>
          <div className='bg-black text-white text-base font-bold h-8 flex items-center justify-between rounded-tl-2xl rounded-tr-2xl'>
            <div className='flex items-center pl-8'>
              Retorno de Pareja
            </div>
          </div>
          <div className='pinnacle-wrap px-5 py-4 bg-active-radial shadow-sm'>
            <AnnualReturn annualReturn={annualReturnSynastry} current months />
          </div>
        </div>

        <div className='col-span-4 mb-1'>
          <div className='bg-black text-white text-base font-bold h-8 flex items-center justify-between rounded-tl-2xl rounded-tr-2xl'>
            <div className='flex items-center'>
              <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-blue p-2'>
                <TiPlus className='text-2xl'/>
              </div>
              Pináculo: {consultant.name}
            </div>
          </div>
          <div className='pinnacle-wrap px-5 py-4'>
            <AnnualReturn annualReturn={annualReturnConsultant} current months />
          </div>
        </div>

        <div className='col-span-4 mb-1'>
          <div className='bg-black text-white text-base font-bold h-8 flex items-center justify-between rounded-tl-2xl rounded-tr-2xl'>
            <div className='flex items-center'>
              <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-blue p-2'>
                <TiPlus className='text-2xl'/>
              </div>
              Pináculo: {partner.name}
            </div>
          </div>
          <div className='pinnacle-wrap px-5 py-4'>
            <AnnualReturn annualReturn={annualReturnPartner} current months />
          </div>
        </div>

      </>
      :
      <div className="col-span-12 text-center"><strong>Agrega/Selecciona una pareja para ver esta información</strong></div>
      }

    </div>
  )
}

export default SinastryPage;