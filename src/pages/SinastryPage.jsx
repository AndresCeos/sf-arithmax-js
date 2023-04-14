import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  AnnualReturn, CircleNumber, Pinnacle, UnselectedConsultant,
  UserPartnerSelect
} from '../components';
import { dateSelect, useConsultant } from '../hooks';
import { Person, Synastry } from '../resources';
import { fetchAllUsers, setIsSelectPartner } from '../store/slices/users/users';

import { TiPlus } from 'react-icons/ti';
import { WrapTitle } from '../components/WrapTitle';

const SinastryPage = () => {
  const { userActive, userPartnerActive, isSelectPartner } = useSelector(state => state.users);
  const isEmpty = Object.keys(userActive).length === 0;
  const dispatch = useDispatch();
  const [checkP1, setcheckP1] = useState(false)
  const [checkN1, setcheckN1] = useState(false)
  const [checkP2, setcheckP2] = useState(false)
  const [checkN2, setcheckN2] = useState(false)
  const [checkP, setcheckP] = useState(false)
  const [checkN, setcheckN] = useState(false)

  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [dispatch])

  const { consultant } = useConsultant()
  const { newDate } = dateSelect()

  if (isEmpty) {
    return <UnselectedConsultant />
  }
  const isEmptyP = Object.keys(userActive.partner).length === 0;
  if (isEmptyP) {
    dispatch(setIsSelectPartner(false))
  }

  const partner = new Person({
    name: userPartnerActive.names,
    lastName: userPartnerActive.lastName,
    scdLastName: userPartnerActive.scdLastName,
    birthDate: userPartnerActive.date,
    yearMeet: userPartnerActive.yearMeet
  })

  if (partner === undefined) {
    return <UnselectedConsultant />
  }

  const synastry = new Synastry(consultant, partner)

  const annualReturnConsultant = consultant.annualReturn(newDate.year())
  const annualReturnPartner = partner.annualReturn(newDate.year())
  const annualReturnSynastry = synastry.annualReturn(newDate.year())
  const checkPinacle = () => {
    (checkP) ? setcheckP(false) : setcheckP(true)
  }

  const checkName = () => {
    (checkN) ? setcheckN(false) : setcheckN(true)
    console.log(synastry.getNameCheck())
  }
  const checkPinacle1 = () => {
    (checkP1) ? setcheckP1(false) : setcheckP1(true)
  }

  const checkName1 = () => {
    (checkN1) ? setcheckN1(false) : setcheckN1(true)
  }
  const checkPinacle2 = () => {
    (checkP2) ? setcheckP2(false) : setcheckP2(true)
  }

  const checkName2 = () => {
    (checkN2) ? setcheckN2(false) : setcheckN2(true)
  }
  return (
    <div className='grid grid-cols-12 mx-14 gap-6 mt-8 pt-10'>

      <UserPartnerSelect />

      {(isSelectPartner)
        ? (
          <>

            <div className='col-span-4 mb-1'>
              <WrapTitle
                title="Nombre de Pareja"
                button={{
                  handle: checkName,
                  state: checkN
                }}
              />
              <div className='pinnacle-wrap px-5 py-4 bg-active-radial shadow-sm'>
                <div className='grid grid-cols-4'>
                  <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
                    <label className='mb-3 text-gray text-13'>Nombre</label>
                    <CircleNumber size="sm" appearance="blue-30" border="blue">
                      {(!checkN) ? `${synastry.calcName()}${synastry.calcNameISK()}` : `${synastry.getNameCheck()}${synastry.calcNameISK()}`}
                    </CircleNumber>
                  </div>
                  <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
                    <label className='mb-3 text-gray text-13'>Alma</label>
                    <CircleNumber size="sm" appearance="blue-30" border="blue" radiant>
                      {(!checkN) ? `${synastry.calcSoulNumber()}${synastry.calcSoulNumberISK()}` : `${synastry.getSoulCheck()}${synastry.calcSoulNumberISK()}`}
                    </CircleNumber>
                  </div>
                  <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
                    <label className='mb-3 text-gray text-13'>Expresión</label>
                    <CircleNumber size="sm" appearance="blue-30" border="blue">
                      {(!checkN) ? `${synastry.calcSoulExpresion()}${synastry.calcSoulExpresionISK()}` : `${synastry.getExpressionSoulCheck()}${synastry.calcSoulExpresionISK()}`}
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
              <WrapTitle
                title={`Nombre: ${consultant.nameView}`}
                button={{
                  handle: checkName1,
                  state: checkN1
                }}
              />

              <div className='pinnacle-wrap px-5 py-4'>
                <div className='grid grid-cols-4'>
                  <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
                    <label className='mb-3 text-gray text-13'>Nombre</label>
                    <CircleNumber size="sm" appearance="blue-30" border="blue">
                      {(!checkN1) ? `${consultant.calcName()}${consultant.calcNameISK()}` : `${consultant.getNameCheck()}${consultant.calcNameISK()}`}
                    </CircleNumber>
                  </div>
                  <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
                    <label className='mb-3 text-gray text-13'>Alma</label>
                    <CircleNumber size="sm" appearance="blue-30" border="blue" radiant>
                      {(!checkN1) ? `${consultant.calcSoulNumber()}${consultant.calcSoulNumberISK()}` : `${consultant.getSoulCheck()}${consultant.calcSoulNumberISK()}`}
                    </CircleNumber>
                  </div>
                  <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
                    <label className='mb-3 text-gray text-13'>Expresión</label>
                    <CircleNumber size="sm" appearance="blue-30" border="blue">
                      {(!checkN1) ? `${consultant.calcSoulExpresion()}${consultant.calcSoulExpresionISK()}` : `${consultant.getExpressionSoulCheck()}${consultant.calcSoulExpresionISK()}`}
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
              <WrapTitle
                title={`Nombre: ${partner.nameView}`}
                button={{
                  handle: checkName2,
                  state: checkN2
                }}
              />
              <div className='pinnacle-wrap px-5 py-4'>
                <div className='grid grid-cols-4'>
                  <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
                    <label className='mb-3 text-gray text-13'>Nombre</label>
                    <CircleNumber size="sm" appearance="blue-30" border="blue">
                      {(!checkN2) ? `${partner.calcName()}${partner.calcNameISK()}` : `${partner.getNameCheck()}${partner.calcNameISK()}`}
                    </CircleNumber>
                  </div>
                  <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
                    <label className='mb-3 text-gray text-13'>Alma</label>
                    <CircleNumber size="sm" appearance="blue-30" border="blue" radiant>
                      {(!checkN2) ? `${partner.calcSoulNumber()}${partner.calcSoulNumberISK()}` : `${partner.getSoulCheck()}${partner.calcSoulNumberISK()}`}
                    </CircleNumber>
                  </div>
                  <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
                    <label className='mb-3 text-gray text-13'>Expresión</label>
                    <CircleNumber size="sm" appearance="blue-30" border="blue">
                      {(!checkN2) ? `${partner.calcSoulExpresion()}${partner.calcSoulExpresionISK()}` : `${partner.getExpressionSoulCheck()}${partner.calcSoulExpresionISK()}`}
                    </CircleNumber>
                  </div>
                  <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
                    <label className='mb-3 text-gray text-13'>Madurez</label>
                    <CircleNumber size="sm" appearance="aguamarina-30" border="aguamarina">
                      {partner.calcMaturity()}{partner.calcMaturityISK()}
                    </CircleNumber>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-span-4 mb-1'>
              <WrapTitle
                title={`Pináculo de Pareja`}   //'Pináculo: {partner.nameView}'
                button={{
                  text: 'Comprobación',
                  handle: checkPinacle1,
                  state: checkP1
                }}
              />
              <div className='pinnacle-wrap px-5 py-4 bg-active-radial shadow-sm'>
                <Pinnacle consultant={synastry} size="small" checkP={checkP1} />
              </div>
            </div>

            <div className='col-span-4 mb-1'>
              <WrapTitle
                title={`Pináculo: ${consultant.nameView}`}   //'Pináculo: {partner.nameView}'
                button={{
                  text: 'Comprobación',
                  handle: checkPinacle2,
                  state: checkP2
                }}
              />
              <div className='pinnacle-wrap px-5 py-4 shadow-sm'>
                <Pinnacle consultant={consultant} size="small" checkP={checkP2} />
              </div>
            </div>

            <div className='col-span-4 mb-1'>
              <WrapTitle
                title={`Pináculo: ${partner.nameView}`}   //'Pináculo: {partner.nameView}'
                button={{
                  text: 'Comprobación',
                  handle: checkPinacle,
                  state: checkP
                }}
              />
              <div className='pinnacle-wrap px-5 py-4 shadow-sm'>
                <Pinnacle consultant={partner} size="small" checkP={checkP} />
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
                    <TiPlus className='text-2xl' />
                  </div>
                  Pináculo: {consultant.nameView}
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
                    <TiPlus className='text-2xl' />
                  </div>
                  Pináculo: {partner.nameView}
                </div>
              </div>
              <div className='pinnacle-wrap px-5 py-4'>
                <AnnualReturn annualReturn={annualReturnPartner} current months />
              </div>
            </div>

          </>
        )
        : <div className="col-span-12 text-center"><strong>Agrega/Selecciona una pareja para ver esta información</strong></div>
      }

    </div>
  )
}

export default SinastryPage;