import { useDispatch, useSelector } from 'react-redux';

import { CircleNumber, UnselectedConsultant, UserPartnerSelect } from '../components';

import { Person } from '../resources';

import { TiPlus } from 'react-icons/ti';
import pc from '../assets/PC.png';
import pd from '../assets/PD.png';
import pn from '../assets/PN.png';
import pne from '../assets/PNe.png';
import { useConsultant } from '../hooks';
import { setIsSelectPartner } from '../store/slices/users/users';

const CompatibilityTablePage = () => {
  const { userActive, userPartnerActive, isSelectPartner } = useSelector(state => state.users);
  const { consultant } = useConsultant()
  const isEmpty = Object.keys(userActive).length === 0;
  const dispatch = useDispatch()


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

  return (
    <div className='grid grid-cols-12 mx-14 gap-6 mt-8 pt-10'>

      <UserPartnerSelect />

      {(isSelectPartner)
        ? (
          <div className="col-span-12">
            <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
              <div className="w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-red-day p-2">
                <TiPlus className='text-2xl' />
              </div>
              Tabla de Compatibilidad
            </div>
            <div className='pinnacle-wrap grid grid-cols-12 px-4 py-8 w-full '>
              <div className='col-start-1 col-span-3 row-start-1 bg-main border border-black text-white p-5 font-bold'>Cuadro Comparativo</div>
              <div className='col-start-4 row-start-1 col-span-2 bg-main border border-black text-white p-5 font-bold'>Persona 1</div>
              <div className='col-start-6 row-start-1 col-span-2 bg-main border border-black text-white p-5 font-bold'>Persona 2</div>
              <div className='col-start-8 row-start-1 col-span-2 bg-main border border-black text-white p-5 font-bold'>Conexión Numérica</div>

              <div className='col-start-1 col-span-3 row-start-2 bg-purple-30 border border-black  p-4 font-bold'>Número del Alma</div>
              <div className='col-start-4 row-start-2 col-span-2  border border-black  p-4 font-bold'>
                <div className=' cicle-year bg-gray-300 text-xl border border-black  font-bold flex items-center justify-center rounded-md w-10 h-10 m-auto'>
                  {consultant.calcSoulNumber()}{consultant.calcSoulNumberISK()}
                </div>
              </div>
              <div className='col-start-6 row-start-2 col-span-2  border border-black  p-4 font-bold'>
                <div className=' cicle-year bg-gray-300 text-xl border border-black  font-bold flex items-center justify-center rounded-md w-10 h-10 m-auto'>
                  {partner.calcSoulNumber()}{partner.calcSoulNumberISK()}
                </div>
              </div>
              <div className='col-start-8 row-start-2 col-span-2  border border-black  p-4 font-bold flex items-center justify-center'>
                <CircleNumber size="sm" appearance="yellow" border="yellow">{consultant.getCompatibility(consultant.calcSoulNumber(), partner.calcSoulNumber())}</CircleNumber>
              </div>

              <div className='col-start-1 col-span-3 row-start-3 bg-purple-30 border border-black  p-4 font-bold'>Número de Expresión del Alma</div>
              <div className='col-start-4 row-start-3 col-span-2  border border-black  p-4 font-bold'>
                <div className=' cicle-year bg-gray-300 text-xl border border-black  font-bold flex items-center justify-center rounded-md w-10 h-10 m-auto'>
                  {consultant.calcSoulExpresion()}{consultant.calcSoulExpresionISK()}
                </div>
              </div>
              <div className='col-start-6 row-start-3 col-span-2  border border-black  p-4 font-bold'>
                <div className=' cicle-year bg-gray-300 text-xl border border-black  font-bold flex items-center justify-center rounded-md w-10 h-10 m-auto'>
                  {partner.calcSoulExpresion()}{partner.calcSoulExpresionISK()}
                </div>
              </div>
              <div className='col-start-8 row-start-3 col-span-2  border border-black  p-4 font-bold flex items-center justify-center'>
                <CircleNumber size="sm" appearance="yellow" border="yellow">{consultant.getCompatibility(consultant.calcSoulExpresion(), partner.calcSoulExpresion())}</CircleNumber>
              </div>

              <div className='col-start-1 col-span-3 row-start-4 bg-purple-30 border border-black  p-4 font-bold'>Número de Poder del Nombre</div>
              <div className='col-start-4 row-start-4 col-span-2  border border-black  p-4 font-bold'>
                <div className=' cicle-year bg-gray-300 text-xl border border-black  font-bold flex items-center justify-center rounded-md w-10 h-10 m-auto'>
                  {consultant.calcName()}{consultant.calcNameISK()}
                </div>
              </div>
              <div className='col-start-6 row-start-4 col-span-2  border border-black  p-4 font-bold'>
                <div className=' cicle-year bg-gray-300 text-xl border border-black  font-bold flex items-center justify-center rounded-md w-10 h-10 m-auto'>
                  {partner.calcName()}{partner.calcNameISK()}
                </div>
              </div>
              <div className='col-start-8 row-start-4 col-span-2  border border-black  p-4 font-bold flex items-center justify-center'>
                <CircleNumber size="sm" appearance="yellow" border="yellow">{consultant.getCompatibility(consultant.calcName(), partner.calcName())}</CircleNumber>
              </div>

              <div className='col-start-1 col-span-3 row-start-5 bg-purple-30 border border-black  p-4 font-bold'>Número Personal</div>
              <div className='col-start-4 row-start-5 col-span-2  border border-black  p-4 font-bold'>
                <div className=' cicle-year bg-gray-300 text-xl border border-black  font-bold flex items-center justify-center rounded-md w-10 h-10 m-auto'>
                  {consultant.getB()}{consultant.getBISK()}
                </div>
              </div>
              <div className='col-start-6 row-start-5 col-span-2  border border-black  p-4 font-bold'>
                <div className=' cicle-year bg-gray-300 text-xl border border-black  font-bold flex items-center justify-center rounded-md w-10 h-10 m-auto'>
                  {partner.getB()}{partner.getBISK()}
                </div>
              </div>
              <div className='col-start-8 row-start-5 col-span-2  border border-black  p-4 font-bold flex items-center justify-center'>
                <CircleNumber size="sm" appearance="yellow" border="yellow">{consultant.getCompatibility(consultant.getB(), partner.getB())}</CircleNumber>
              </div>

              <div className='col-start-1 col-span-3 row-start-6 bg-purple-30 border border-black  p-4 font-bold'>Número de la Personalidad</div>
              <div className='col-start-4 row-start-6 col-span-2  border border-black  p-4 font-bold'>
                <div className=' cicle-year bg-gray-300 text-xl border border-black  font-bold flex items-center justify-center rounded-md w-10 h-10 m-auto'>
                  {consultant.getD()}{consultant.getDISK()}
                </div>
              </div>
              <div className='col-start-6 row-start-6 col-span-2  border border-black  p-4 font-bold'>
                <div className=' cicle-year bg-gray-300 text-xl border border-black  font-bold flex items-center justify-center rounded-md w-10 h-10 m-auto'>
                  {partner.getD()}{partner.getDISK()}
                </div>
              </div>
              <div className='col-start-8 row-start-6 col-span-2  border border-black  p-4 font-bold flex items-center justify-center'>
                <CircleNumber size="sm" appearance="yellow" border="yellow">{consultant.getCompatibility(consultant.getD(), partner.getD())}</CircleNumber>
              </div>

              <div className='col-start-1 col-span-3 row-start-7 bg-purple-30 border border-black  p-4 font-bold'>Número del Subconsiente</div>
              <div className='col-start-4 row-start-7 col-span-2  border border-black  p-4 font-bold'>
                <div className=' cicle-year bg-gray-300 text-xl border border-black  font-bold flex items-center justify-center rounded-md w-10 h-10 m-auto'>
                  {consultant.getI()}{consultant.getIISK()}
                </div>
              </div>
              <div className='col-start-6 row-start-7 col-span-2  border border-black  p-4 font-bold'>
                <div className=' cicle-year bg-gray-300 text-xl border border-black  font-bold flex items-center justify-center rounded-md w-10 h-10 m-auto'>
                  {partner.getI()}{partner.getIISK()}
                </div>
              </div>
              <div className='col-start-8 row-start-7 col-span-2  border border-black  p-4 font-bold flex items-center justify-center'>
                <CircleNumber size="sm" appearance="yellow" border="yellow">{consultant.getCompatibility(consultant.getI(), partner.getI())}</CircleNumber>
              </div>

              <div className='col-start-1 col-span-3 row-start-8 bg-purple-30 border border-black  p-4 font-bold'>Número del Destino</div>
              <div className='col-start-4 row-start-8 col-span-2  border border-black  p-4 font-bold'>
                <div className=' cicle-year bg-gray-300 text-xl border border-black  font-bold flex items-center justify-center rounded-md w-10 h-10 m-auto'>
                  {consultant.getH()}{consultant.getHISK()}
                </div>
              </div>
              <div className='col-start-6 row-start-8 col-span-2  border border-black  p-4 font-bold'>
                <div className=' cicle-year bg-gray-300 text-xl border border-black  font-bold flex items-center justify-center rounded-md w-10 h-10 m-auto'>
                  {partner.getH()}{partner.getHISK()}
                </div>
              </div>
              <div className='col-start-8 row-start-8 col-span-2  border border-black  p-4 font-bold flex items-center justify-center'>
                <CircleNumber size="sm" appearance="yellow" border="yellow">{consultant.getCompatibility(consultant.getH(), partner.getH())}</CircleNumber>
              </div>

              <div className='col-start-1 col-span-3 row-start-9 bg-purple-30 border border-black  p-4 font-bold'>Número de la Madurez</div>
              <div className='col-start-4 row-start-9 col-span-2  border border-black  p-4 font-bold'>
                <div className=' cicle-year bg-gray-300 text-xl border border-black  font-bold flex items-center justify-center rounded-md w-10 h-10 m-auto'>
                  {consultant.calcMaturity()}{consultant.calcMaturityISK()}
                </div>
              </div>

              <div className='col-start-6 row-start-9 col-span-2  border border-black  p-4 font-bold'>
                <div className=' cicle-year bg-gray-300 text-xl border border-black  font-bold flex items-center justify-center rounded-md w-10 h-10 m-auto'>
                  {partner.calcMaturity()}{partner.calcMaturityISK()}
                </div>
              </div>
              <div className='col-start-8 row-start-9 col-span-2  border border-black  p-4 font-bold flex items-center justify-center'>
                <CircleNumber size="sm" appearance="yellow" border="yellow">{consultant.getCompatibility(consultant.calcMaturity(), partner.calcMaturity())}</CircleNumber>
              </div>

              <div className=' col-start-10 row-start-2 col-span-3 flex justify-center'>
                <img src={pn} alt="pn" className='w-24 h-12 object-contain' />
              </div>
              <div className=' col-start-10 row-start-3 col-span-3 flex justify-center'>
                <b>PN</b> =  Pareja Natural
              </div>
              <div className=' col-start-10 row-start-4 col-span-3 flex justify-center'>
                <img src={pc} alt="pc" className='w-24 h-12 object-contain' />
              </div>
              <div className=' col-start-10 row-start-5 col-span-3 flex justify-center'>
                <b>PC</b> =  Pareja Compatible
              </div>
              <div className=' col-start-10 row-start-6 col-span-3 flex justify-center'>
                <img src={pd} alt="pd" className='w-24 h-12 object-contain' />
              </div>
              <div className=' col-start-10 row-start-7 col-span-3 flex justify-center'>
                <b>PD</b> =  Pareja Desafío
              </div>
              <div className=' col-start-10 row-start-8 col-span-3 flex justify-center'>
                <img src={pne} alt="pne" className='w-24 h-12 object-contain' />
              </div>
              <div className=' col-start-10 row-start-9 col-span-3 flex justify-center'>
                <b>PNe</b> =  Pareja Neutral
              </div>
            </div>
          </div>
        )
        : <div className="col-span-12 text-center"><strong>Agrega/Selecciona una pareja para ver esta información</strong></div>
      }

    </div>
  )
}
export default CompatibilityTablePage;