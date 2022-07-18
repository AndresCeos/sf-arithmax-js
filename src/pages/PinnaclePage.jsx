import { useSelector } from 'react-redux';

import { useConsultant, dateSelect } from '../hooks';
import { AnnualReturn, TimeCurve, Pinnacle,
  CircleNumber, UnselectedConsultant } from '../components/';

import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";
import { TiPlus } from "react-icons/ti";

const PinnaclePage = () => {
  const { userActive} = useSelector(state => state.users);
  const { consultant } = useConsultant()
  const {newDate} = dateSelect()
  const isEmpty = Object.keys(userActive).length === 0;

  if( isEmpty ){
    return <UnselectedConsultant />
  }

  const annualReturnCurrent = consultant.annualReturn(newDate.year())
  const annualReturnLastYear = consultant.annualReturn(newDate.year()-1)
  const annualReturnNextYear = consultant.annualReturn(newDate.year()+1)

  const activeStage = consultant.getLifeStageNumber()
  const secondStage = consultant.hasDoubleStage()

  return(
    <>
      <div className='grid grid-cols-24 mt-8 mx-14 gap-6 pt-10'>

        <div className='col-span-13'>
          <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
            <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-blue p-2'>
              <TiPlus className='text-2xl'/>
            </div>
            Nombre
          </div>
          <div className='pinnacle-wrap grid grid-cols-4 px-4 py-8'>
            <div className='flex items-center justify-center text-gray-500 font-bold'>
              <label className='mr-1'>Nombre</label>
              <CircleNumber size="sm" appearance="blue-30" border="blue">
                {consultant.calcName()}{consultant.calcNameISK()}
              </CircleNumber>
            </div>
            <div className='flex items-center justify-center text-gray-500 font-bold'>
              <label className='mr-1'>Alma</label>
              <CircleNumber size="sm" appearance="blue-30" border="blue" radiant="true">
                {consultant.calcSoulNumber()}{consultant.calcSoulNumberISK()}
              </CircleNumber>
            </div>
            <div className='flex items-center justify-center text-gray-500 font-bold'>
              <label className='mr-1'>Expresión</label>
              <CircleNumber size="sm" appearance="blue-30" border="blue">
                {consultant.calcSoulExpresion()}{consultant.calcSoulExpresionISK()}
              </CircleNumber>
            </div>
            <div className='flex items-center justify-center text-gray-500 font-bold'>
              <label className='mr-1'>Madurez</label>
              <CircleNumber size="sm" appearance="aguamarina-30" border="aguamarina">
                {consultant.calcMaturity()}{consultant.calcMaturityISK()}
              </CircleNumber>
            </div>
          </div>
        </div>

        <div className='col-span-11'>
          <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
            <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-main p-2'>
              <TiPlus className='text-2xl'/>
            </div>
            Potencial Frecuencial
          </div>
          <div className='pinnacle-wrap grid grid-cols-3 px-4 py-8'>
            <div className='flex items-center justify-center text-gray-500 font-bold'>
              <label className='mr-1'>Reacción</label>
              <CircleNumber size="sm" appearance="purple-30" border="purple">
                {consultant.calcReaction()}{consultant.calcReactionISK()}
              </CircleNumber>
            </div>
            <div className='flex items-center justify-center text-gray-500 font-bold'>
              <label className='mr-1'>Síntesis</label>
              <CircleNumber size="sm" appearance="purple-30" border="purple">
                {consultant.calcSynthesis()}{consultant.calcSynthesisISK()}
              </CircleNumber>
            </div>
            <div className='flex items-center justify-center text-gray-500 font-bold'>
              <label className='mr-1'>Regalo</label>
              <CircleNumber size="sm" appearance="purple-30" border="purple">
                {consultant.calcGift()}{consultant.calcGiftISK()}
              </CircleNumber>
            </div>
          </div>
        </div>

        <div className='col-span-13'>
          <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
            <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-main p-2'>
              <TiPlus className='text-2xl'/>
            </div>
            Pináculo
          </div>
          <div className='pinnacle-wrap p-7 pb-16'>
            <Pinnacle consultant={consultant} />
          </div>
        </div>

        <div className='col-span-11'>
          <div className='grid grid-cols-20 gap-6'>
            <div className='col-span-9'>
              <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
                <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-green-s p-2'>
                  <TiPlus className='text-2xl'/>
                </div>
                Puentes por etapa
              </div>
              <div className='pinnacle-wrap'>
                <div className={`py-3 px-2 border-b border-solid border-gray-300 ${activeStage === 1 || activeStage === 7  ? 'bg-active-radial' : null }`}>
                  <h2 className='text-base font-bold text-center'>
                    Puente 1
                  </h2>
                  <div className='w-full flex items-center justify-center bg-opacity-100'>
                    <div className='grid grid-cols-3 mt-3 w-36 gap-2 bridge-wrap relative'>
                      <CircleNumber size="sm" appearance="green" border="green" position="et" descrt="E">
                        {consultant.getE()}{consultant.getEISK()}
                      </CircleNumber>
                      <CircleNumber size="sm" appearance="white" border="purple" position="el" descb="A">
                        {consultant.getA()}
                      </CircleNumber>
                      <CircleNumber size="sm" appearance="gold" border="gold" position="ec">
                        {Math.abs(consultant.getE() - consultant.getK())}
                      </CircleNumber>
                      <CircleNumber size="sm" appearance="white" border="main" position="er" descb="B">
                        {consultant.getB()}{consultant.getBISK()}
                      </CircleNumber>
                      <CircleNumber size="sm" appearance="white" border="red" position="eb" descrb="K">
                        {consultant.getK()}
                      </CircleNumber>
                    </div>
                  </div>
                  <div className='grid grid-cols-2 text-xs mt-5'>
                    <div className='flex gap-1'>
                      <FaArrowAltCircleUp color='#51A133' size={14} /> 0 - {consultant.calcLifeStageDuration(1) - consultant.birthDate.year() } años
                    </div>
                    {(secondStage)?<div className='flex gap-1'>
                      <FaArrowAltCircleDown color='#663366' size={14} /> 0 - {consultant.calcDoubleLifeStageDuration(1) - consultant.birthDate.year() } años
                    </div>:''}
                  </div>
                </div>
                <div className={`py-3 px-2 border-b border-solid border-gray-300 ${activeStage === 2 || activeStage === 6  ? 'bg-active-radial' : null }`}>
                  <h2 className='text-base font-bold text-center'>
                    Puente 2
                  </h2>
                  <div className='w-full flex items-center justify-center bg-opacity-100'>
                    <div className='grid grid-cols-3 mt-3 w-36 gap-2 bridge-wrap relative'>
                      <CircleNumber size="sm" appearance="green" border="green" position="et" descrt="F">
                        {consultant.getF()}{consultant.getFISK()}
                      </CircleNumber>
                      <CircleNumber size="sm" appearance="white" border="purple" position="el" descb="B">
                        {consultant.getB()}{consultant.getBISK()}
                      </CircleNumber>
                      <CircleNumber size="sm" appearance="gold" border="gold" position="ec">
                        {Math.abs(consultant.getF() - consultant.getL())}
                      </CircleNumber>
                      <CircleNumber size="sm" appearance="white" border="main" position="er" descb="C">
                        {consultant.getC()}{consultant.getCISK()}
                      </CircleNumber>
                      <CircleNumber size="sm" appearance="white" border="red" position="eb" descrb="L">
                        {consultant.getL()}
                      </CircleNumber>
                    </div>
                  </div>
                  <div className='grid grid-cols-2 text-xs mt-5'>
                    <div className='flex gap-1'>
                      <FaArrowAltCircleUp color='#51A133' size={14} /> {consultant.calcLifeStageDuration(1) - consultant.birthDate.year() } - {consultant.calcLifeStageDuration(1) - consultant.birthDate.year() + 9 } años
                    </div>
                    {(secondStage)?<div className='flex gap-1'>
                      <FaArrowAltCircleDown color='#663366' size={14} /> {consultant.calcDoubleLifeStageDuration(1) - consultant.birthDate.year() } - {consultant.calcDoubleLifeStageDuration(1) - consultant.birthDate.year() + 9 } años
                    </div>:''}
                  </div>
                </div>
                <div className={`py-3 px-2 border-b border-solid border-gray-300 ${activeStage === 3 || activeStage === 5 ? 'bg-active-radial' : null }`}>
                  <h2 className='text-base font-bold text-center'>
                    Puente 3
                  </h2>
                  <div className='w-full flex items-center justify-center bg-opacity-100'>
                    <div className='grid grid-cols-3 mt-3 w-36 gap-2 bridge-wrap relative'>
                      <CircleNumber size="sm" appearance="green" border="green" position="et" descrt="G">
                        {consultant.getG()}{consultant.getGISK()}
                      </CircleNumber>
                      <CircleNumber size="sm" appearance="white" border="purple" position="el" descb="E">
                        {consultant.getE()}{consultant.getEISK()}
                      </CircleNumber>
                      <CircleNumber size="sm" appearance="gold" border="gold" position="ec">
                        {Math.abs(consultant.getG() - consultant.getM())}
                      </CircleNumber>
                      <CircleNumber size="sm" appearance="white" border="main" position="er" descb="F">
                        {consultant.getF()}{consultant.getFISK()}
                      </CircleNumber>
                      <CircleNumber size="sm" appearance="white" border="red" position="eb" descrb="M">
                        {consultant.getM()}
                      </CircleNumber>
                    </div>
                  </div>
                  <div className='grid grid-cols-2 text-xs mt-5'>
                    <div className='flex gap-1'>
                      <FaArrowAltCircleUp color='#51A133' size={14} /> {consultant.calcLifeStageDuration(1) - consultant.birthDate.year() + 9 } - {consultant.calcLifeStageDuration(1) - consultant.birthDate.year() + 18 } años
                    </div>
                    {(secondStage)?<div className='flex gap-1'>
                      <FaArrowAltCircleDown color='#663366' size={14} /> {consultant.calcDoubleLifeStageDuration(1) - consultant.birthDate.year() + 9 } - {consultant.calcDoubleLifeStageDuration(1) - consultant.birthDate.year() + 18 } años
                    </div>:''}
                  </div>
                </div>
                <div className={`py-3 px-2 border-b border-solid border-gray-300 ${activeStage === 4 ? 'bg-active-radial' : null }`}>
                  <h2 className='text-base font-bold text-center'>
                    Puente 4
                  </h2>
                  <div className='w-full flex items-center justify-center bg-opacity-100'>
                    <div className='grid grid-cols-3 mt-3 w-36 gap-2 bridge-wrap relative'>
                      <CircleNumber size="sm" appearance="green" border="green" position="et" descrt="H">
                        {consultant.getH()}{consultant.getHISK()}
                      </CircleNumber>
                      <CircleNumber size="sm" appearance="white" border="purple" position="el" descb="A">
                        {consultant.getA()}
                      </CircleNumber>
                      <CircleNumber size="sm" appearance="gold" border="gold" position="ec">
                        {Math.abs(consultant.getH() - consultant.getN())}
                      </CircleNumber>
                      <CircleNumber size="sm" appearance="white" border="main" position="er" descb="C">
                        {consultant.getC()}{consultant.getCISK()}
                      </CircleNumber>
                      <CircleNumber size="sm" appearance="white" border="red" position="eb" descrb="M">
                        {consultant.getN()}
                      </CircleNumber>
                    </div>
                  </div>
                  <div className='grid grid-cols-2 text-xs mt-5'>
                    <div className='flex gap-1'>
                      <FaArrowAltCircleUp color='#51A133' size={14} /> {consultant.calcLifeStageDuration(1) - consultant.birthDate.year() + 18 } - {consultant.calcLifeStageDuration(1) - consultant.birthDate.year() + 27 } años
                    </div>
                    {(secondStage)?<div className='flex gap-1'>
                      <FaArrowAltCircleDown color='#663366' size={14} /> {consultant.calcDoubleLifeStageDuration(1) - consultant.birthDate.year() + 18 } - {consultant.calcDoubleLifeStageDuration(1) - consultant.birthDate.year() + 27 } años
                    </div>:''}
                  </div>
                </div>
              </div>
            </div>
            <div className='col-span-11'>
              <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
                <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-main p-2'>
                  <TiPlus className='text-2xl'/>
                </div>
                Retornos anuales
              </div>
              <div className='pinnacle-wrap'>
                <div className='px-5 py-8 border-b border-solid border-gray-300'>
                  <AnnualReturn annualReturn={annualReturnLastYear} />
                </div>
                <div className='px-5 py-8 border-b border-solid border-gray-300 bg-active-radial bg-opacity-15'>
                  <AnnualReturn annualReturn={annualReturnCurrent} current={true} />
                </div>
                <div className='px-5 py-8'>
                  <AnnualReturn annualReturn={annualReturnNextYear} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-span-24 mb-10'>
          <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
            <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-green-s p-2'>
              <TiPlus className='text-2xl'/>
            </div>
            Curva del tiempo
          </div>
          <div className='pinnacle-wrap px-8 py-8'>
            <TimeCurve consultant={consultant} isPartner={false} />
          </div>
        </div>

      </div>
    </>
  )
}

export default PinnaclePage;