import { useSelector } from 'react-redux';

import {
  AnnualReturn, Bridge, CircleNumber, Pinnacle, TimeCurve, UnselectedConsultant
} from '../components';
import { dateSelect, useConsultant } from '../hooks';

import { useState } from 'react';
import { WrapTitle } from '../components/WrapTitle';

const PinnaclePage = () => {
  const { userActive } = useSelector(state => state.users);
  const { consultant } = useConsultant()
  const { newDate } = dateSelect()
  const isEmpty = Object.keys(userActive).length === 0;
  const [checkP, setcheckP] = useState(false)
  const [checkN, setcheckN] = useState(false)

  if (isEmpty) {
    return <UnselectedConsultant />
  }

  const annualReturnCurrent = consultant.annualReturn(newDate.year())
  const annualReturnLastYear = consultant.annualReturn(newDate.year() - 1)
  const annualReturnNextYear = consultant.annualReturn(newDate.year() + 1)

  const activeStage = consultant.getLifeStageNumber(newDate.year())
  const secondStage = consultant.hasDoubleStage()

  const checkPinacle = () => {
    (checkP) ? setcheckP(false) : setcheckP(true)
  }

  const checkName = () => {
    (checkN) ? setcheckN(false) : setcheckN(true)
  }

  return (
    <div className='grid grid-cols-10 mt-8 mx-14 gap-4 pt-10'>
      <div className='col-span-3 row-span-6'>
        <WrapTitle
          title="Pináculo"
          button={{
            text: 'Comprobación',
            handle: checkPinacle,
            state: checkP
          }}
        />
        <div className='pinnacle-wrap px-2 py-7'>
          <Pinnacle consultant={consultant} checkP={checkP} size="small" />
        </div>
      </div>

      <div className='col-span-1 row-span-3'>
        <WrapTitle
          title="Nombre"
          button={{
            handle: checkName,
            state: checkN
          }}
        />
        <div className='pinnacle-wrap p-4'>
          <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
            <label className='text-10'>Nombre</label>
            <CircleNumber size="sm" appearance="blue-30" border="blue">
              {(!checkN) ? `${consultant.calcName()}${consultant.calcNameISK()}` : `${consultant.getNameCheck()}${consultant.calcNameISK()}`}
            </CircleNumber>
          </div>
          <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
            <label className='text-10 mt-3'>Alma</label>
            <CircleNumber size="sm" appearance="blue-30" border="blue" radiant="true">
              {(!checkN) ? `${consultant.calcSoulNumber()}${consultant.calcSoulNumberISK()}` : `${consultant.getSoulCheck()}${consultant.calcSoulNumberISK()}`}
            </CircleNumber>
          </div>
          <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
            <label className='text-10 mt-3'>Expresión</label>
            <CircleNumber size="sm" appearance="blue-30" border="blue">
              {(!checkN) ? `${consultant.calcSoulExpresion()}${consultant.calcSoulExpresionISK()}` : `${consultant.getExpressionSoulCheck()}${consultant.calcSoulExpresionISK()}`}
            </CircleNumber>
          </div>
          <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
            <label className='text-10 mt-3'>Madurez</label>
            <CircleNumber size="sm" appearance="aguamarina-30" border="aguamarina">
              {consultant.calcMaturity()}{consultant.calcMaturityISK()}
            </CircleNumber>
          </div>
        </div>
      </div>

      <div className='col-span-6 row-span-2'>
        <WrapTitle title="Puentes por etapa" color='bg-green-s' />
        <div className='pinnacle-wrap grid grid-cols-4'>
          <div className={`py-3 px-2 border-b border-solid border-gray-300 ${activeStage === 1 || activeStage === 7 ? 'bg-active-radial' : 'border-r border-gray-200'}`}>
            <h2 className='text-xs font-bold text-center'>
              Puente 1
            </h2>
            <Bridge
              top={`${consultant.getE()}${consultant.getEISK()}`}
              right={`${consultant.getB()}${consultant.getBISK()}`}
              bottom={consultant.getK()}
              left={consultant.getA()}
              center={consultant.getResBridge(consultant.getE(), consultant.getK())}
              stageStart={`0 - ${consultant.calcLifeStageDuration(1) - consultant.birthDate.year()} años`}
              stageEnd={`${consultant.calcLifeStageDuration(6) - consultant.birthDate.year()} - ${consultant.calcLifeStageDuration(7) - consultant.birthDate.year()} años`}
              stageDoubleStart={`0 - ${consultant.calcDoubleLifeStageDuration(1) - consultant.birthDate.year()} años`}
              stageDoubleEnd={`${consultant.calcDoubleLifeStageDuration(6) - consultant.birthDate.year()} - ${consultant.calcDoubleLifeStageDuration(7) - consultant.birthDate.year()} años`}
              hasDouble={secondStage}
            />
          </div>
          <div className={`py-3 px-2 border-b border-solid border-gray-300 ${activeStage === 2 || activeStage === 6 ? 'bg-active-radial' : 'border-r border-gray-200'}`}>
            <h2 className='text-xs font-bold text-center'>
              Puente 2
            </h2>
            <Bridge
              top={`${consultant.getF()}${consultant.getFISK()}`}
              right={`${consultant.getC()}${consultant.getCISK()}`}
              bottom={consultant.getL()}
              left={`${consultant.getB()}${consultant.getBISK()}`}
              center={consultant.getResBridge(consultant.getF(), consultant.getL())}
              stageStart={`${consultant.calcLifeStageDuration(1) - consultant.birthDate.year()} - ${consultant.calcLifeStageDuration(2) - consultant.birthDate.year()} años`}
              stageEnd={`${consultant.calcLifeStageDuration(5) - consultant.birthDate.year()} - ${consultant.calcLifeStageDuration(6) - consultant.birthDate.year()} años`}
              stageDoubleStart={`${consultant.calcDoubleLifeStageDuration(1) - consultant.birthDate.year()} - ${consultant.calcDoubleLifeStageDuration(2) - consultant.birthDate.year()} años`}
              stageDoubleEnd={`${consultant.calcDoubleLifeStageDuration(5) - consultant.birthDate.year()} - ${consultant.calcDoubleLifeStageDuration(6) - consultant.birthDate.year()} años`}
              hasDouble={secondStage}
            />
          </div>
          <div className={`py-3 px-2 border-b border-solid border-gray-300 ${activeStage === 3 || activeStage === 5 ? 'bg-active-radial' : 'border-r border-gray-200'}`}>
            <h2 className='text-xs font-bold text-center'>
              Puente 3
            </h2>
            <Bridge
              top={`${consultant.getG()}${consultant.getGISK()}`}
              right={`${consultant.getF()}${consultant.getFISK()}`}
              bottom={consultant.getM()}
              left={`${consultant.getE()}${consultant.getEISK()}`}
              center={consultant.getResBridge(consultant.getG(), consultant.getM())}
              stageStart={`${consultant.calcLifeStageDuration(2) - consultant.birthDate.year()} - ${consultant.calcLifeStageDuration(3) - consultant.birthDate.year()} años`}
              stageEnd={`${consultant.calcLifeStageDuration(4) - consultant.birthDate.year()} - ${consultant.calcLifeStageDuration(5) - consultant.birthDate.year()} años`}
              stageDoubleStart={`${consultant.calcDoubleLifeStageDuration(2) - consultant.birthDate.year()} - ${consultant.calcDoubleLifeStageDuration(3) - consultant.birthDate.year()} años`}
              stageDoubleEnd={`${consultant.calcDoubleLifeStageDuration(4) - consultant.birthDate.year()} - ${consultant.calcDoubleLifeStageDuration(5) - consultant.birthDate.year()} años`}
              hasDouble={secondStage}
            />
          </div>
          <div className={`py-3 px-2 border-b border-solid border-gray-300 ${activeStage === 4 ? 'bg-active-radial' : null}`}>
            <h2 className='text-xs font-bold text-center'>
              Puente 4
            </h2>
            <Bridge
              top={`${consultant.getH()}${consultant.getHISK()}`}
              right={`${consultant.getC()}${consultant.getCISK()}`}
              bottom={consultant.getN()}
              left={consultant.getA()}
              center={consultant.getResBridge(consultant.getH(), consultant.getN())}
              stageStart={`${consultant.calcLifeStageDuration(3) - consultant.birthDate.year()}- ${consultant.calcLifeStageDuration(4) - consultant.birthDate.year()} años`}
              stageDoubleStart={`${consultant.calcDoubleLifeStageDuration(3) - consultant.birthDate.year()} - ${consultant.calcDoubleLifeStageDuration(4) - consultant.birthDate.year()} años`}
              hasDouble={secondStage}
            />
          </div>
        </div>
      </div>

      <div className='col-span-6 col-start-5 row-span-4'>
        <WrapTitle title="Retornos anuales" />
        <div className='pinnacle-wrap  grid grid-cols-3'>
          <div className='px-5 py-8 border-b border-solid border-gray-300'>
            <AnnualReturn size="xs" annualReturn={annualReturnLastYear} />
          </div>
          <div className='px-5 py-8 border-b border-solid border-gray-300 bg-active-radial bg-opacity-15'>
            <AnnualReturn size="xs" annualReturn={annualReturnCurrent} current />
          </div>
          <div className='px-5 py-8'>
            <AnnualReturn size="xs" annualReturn={annualReturnNextYear} />
          </div>
        </div>
      </div>

      <div className='col-span-1 row-span-2 col-start-4 row-start-4'>
        <WrapTitle title="Frecuencia" />
        <div className='pinnacle-wrap grid grid-cols-1 p-4'>
          <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
            <label className='text-xs mt-1'>Reacción</label>
            <CircleNumber size="sm" appearance="purple-30" border="purple">
              {consultant.calcReaction()}{consultant.calcReactionISK()}
            </CircleNumber>
          </div>
          <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
            <label className='text-xs mt-3'>Síntesis</label>
            <CircleNumber size="sm" appearance="purple-30" border="purple">
              {consultant.calcSynthesis()}{consultant.calcSynthesisISK()}
            </CircleNumber>
          </div>
          <div className='flex flex-col items-center justify-center text-gray-500 font-bold'>
            <label className='text-xs mt-3'>Regalo</label>
            <CircleNumber size="sm" appearance="purple-30" border="purple">
              {consultant.calcGift()}{consultant.calcGiftISK()}
            </CircleNumber>
          </div>
        </div>
      </div>

      <div className='col-span-10 mb-10'>
        <WrapTitle title="Curva del tiempo" color='bg-green-s' />
        <div className='pinnacle-wrap px-8 py-8'>
          <TimeCurve consultant={consultant} isPartner={false} />
        </div>
      </div>

    </div>
  )
}

export default PinnaclePage;