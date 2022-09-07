import { FaArrowAltCircleDown, FaArrowAltCircleUp } from 'react-icons/fa'
import { CircleNumber } from './CircleNumber'

export const Bridge = ({ top, right, bottom, left, center, stageStart, stageEnd, stageDoubleStart, stageDoubleEnd }) => {
  return (
    <>
      <div className='w-full flex items-center justify-center bg-opacity-100'>
        <div className='grid grid-cols-3 mt-3 gap-2 bridge-wrap relative'>
          <CircleNumber size="xs" appearance="green" border="green" position="et" descrt="E">
            {top}
          </CircleNumber>
          <CircleNumber size="xs" appearance="white" border="purple" position="el" descb="A">
            {left}
          </CircleNumber>
          <CircleNumber size="xs" appearance="gold" border="gold" position="ec">
            {center}
          </CircleNumber>
          <CircleNumber size="xs" appearance="white" border="main" position="er" descb="B">
            {right}
          </CircleNumber>
          <CircleNumber size="xs" appearance="white" border="red" position="eb" descrb="K">
            {bottom}
          </CircleNumber>
        </div>
      </div>
      <div className='grid text-xs mt-5 text-13 ml-4'>
        <div className='flex gap-1'>
          <FaArrowAltCircleUp color='#51A133' size={14} /> {stageStart}
        </div>
        {stageEnd
          && (
            <div className='flex gap-1 mt-2'>
              <FaArrowAltCircleDown color='#663366' size={14} /> {stageEnd}
            </div>
          )
        }
        {stageStart !== stageDoubleStart && (
          <>
            <div className='flex gap-1 mt-4'>
              <FaArrowAltCircleUp color='#51A133' size={14} /> {stageDoubleStart}
            </div>
            {stageDoubleEnd
              && (
                <div className='flex gap-1 mt-2'>
                  <FaArrowAltCircleDown color='#663366' size={14} /> {stageDoubleEnd}
                </div>
              )
            }
          </>
        )}
      </div>
    </>
  )
}
