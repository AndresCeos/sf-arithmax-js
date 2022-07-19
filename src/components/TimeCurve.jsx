import { useSelector } from 'react-redux';
import { dateSelect } from '../hooks';

import time_curve from '../assets/time-curve.svg'

export const TimeCurve = ({ consultant }) => {
    const {newDate} = dateSelect()
    const activeStage = consultant.getLifeStageNumber(newDate.year())
    const activeSecondStage = consultant.getDoubleLifeStageNumber(newDate.year())
    const dobleStage = consultant.hasDoubleStage()

    return(
        <div>
            <div id="lifePath" className="grid grid-cols-19 w-full border-l border-b border-gray-400 relative">
                <div
                    className={`
                        col-start-1 col-end-7 row-start-1 row-end-13 border-dashed border-l-2 border-r-2 border-gray-400
                        ${activeStage === 1? 'bg-active' : null }
                    `
                }></div>
                <div
                    className={`
                        col-start-7 col-end-9 row-start-1 row-end-13 border-dashed border-l-2 border-r-2 border-gray-400
                        ${activeStage === 2? 'bg-active' : null }
                    `
                }></div>
                <div
                    className={`
                        col-start-9 col-end-11 row-start-1 row-end-13 border-dashed border-l-2 border-r-2 border-gray-400
                        ${activeStage === 3 ? 'bg-active' : null }
                    `
                }></div>
                <div
                    className={`
                        col-start-11 col-end-13 row-start-1 row-end-13 border-dashed border-l-2 border-r-2 border-gray-400
                        ${activeStage === 4 ? 'bg-active' : null }
                    `
                }></div>
                <div
                    className={`
                        col-start-13 col-end-15 row-start-1 row-end-13 border-dashed border-l-2 border-r-2 border-gray-400
                        ${activeStage === 5? 'bg-active' : null }
                    `
                }></div>
                <div
                    className={`
                        col-start-15 col-end-17 row-start-1 row-end-13 border-dashed border-l-2 border-r-2 border-gray-400
                        ${activeStage === 6 ? 'bg-active' : null }
                    `
                }></div>
                <div
                    className={`
                        col-start-17 col-end-21 row-start-1 row-end-13 border-dashed border-l-2 border-r-2 border-gray-400
                        ${activeStage === 7? 'bg-active' : null }
                    `
                }></div>
                {(dobleStage)?
                    <>
                        <div
                        className={`
                            col-start-1 col-end-7 row-start-1 row-end-13 border-dashed border-l-2 border-r-2 border-gray-400
                            ${activeSecondStage === 1? 'bg-active' : null }
                        `
                    }></div>
                    <div
                        className={`
                            col-start-7 col-end-9 row-start-1 row-end-13 border-dashed border-l-2 border-r-2 border-gray-400
                            ${activeSecondStage === 2? 'bg-active' : null }
                        `
                    }></div>
                    <div
                        className={`
                            col-start-9 col-end-11 row-start-1 row-end-13 border-dashed border-l-2 border-r-2 border-gray-400
                            ${activeSecondStage === 3  ? 'bg-active' : null }
                        `
                    }></div>
                    <div
                        className={`
                            col-start-11 col-end-13 row-start-1 row-end-13 border-dashed border-l-2 border-r-2 border-gray-400
                            ${activeSecondStage === 4 ? 'bg-active' : null }
                        `
                    }></div>
                    <div
                        className={`
                            col-start-13 col-end-15 row-start-1 row-end-13 border-dashed border-l-2 border-r-2 border-gray-400
                            ${activeSecondStage === 5? 'bg-active' : null }
                        `
                    }></div>
                    <div
                        className={`
                            col-start-15 col-end-17 row-start-1 row-end-13 border-dashed border-l-2 border-r-2 border-gray-400
                            ${activeSecondStage === 6 ? 'bg-active' : null }
                        `
                    }></div>
                    <div
                        className={`
                            col-start-17 col-end-21 row-start-1 row-end-13 border-dashed border-l-2 border-r-2 border-gray-400
                            ${activeSecondStage === 7? 'bg-active' : null }
                        `
                    }></div>
                    </>:''}


                <div className='col-start-1 col-end-7 row-start-8 text-center text-13 h-6 border-b-3 border-purple-35 lifePathDuration flex items-end justify-center'>
                    Del nacimiento a los {consultant.calcLifeStageDuration(1) - consultant.birthDate.year() }
                </div>
                <div className='col-start-1 col-end-7 row-start-9 text-center text-13 h-6 flex items-start justify-center'>
                </div>
                <div className='m-auto col-start-1 col-end-7 row-start-10 relative w-full h-full'>
                    <div className='absolute z-10 centered-axis-x'>
                        <div className="w-10 h-10 text-xl font-black text-black flex justify-center items-center bg-green border border-green rounded-full inner-shadow">
                            {consultant.calcLifeStage(1)}{consultant.calcLifeStageISK(1)}
                        </div>
                    </div>
                </div>

                <div className='col-start-7 col-end-9 row-start-6 text-center text-13 h-6 border-b-3 border-purple-35 lifePathDuration flex items-end justify-center'>
                    {consultant.calcLifeStageDuration(1) - consultant.birthDate.year() } - {consultant.calcLifeStageDuration(1) - consultant.birthDate.year() + 9 }
                </div>
                <div className='col-start-7 col-end-9 row-start-7 text-center text-13 h-6'>
                </div>
                <div className='m-auto col-start-7 col-end-9 row-start-8 relative w-full h-full'>
                    <div className='absolute z-10 centered-axis-x'>
                        <div className="w-10 h-10 text-xl font-black text-black flex justify-center items-center bg-green border border-green rounded-full inner-shadow">
                            {consultant.calcLifeStage(2)}{consultant.calcLifeStageISK(2)}
                        </div>
                    </div>
                </div>

                <div className='col-start-9 col-end-11 row-start-3 text-center text-13 h-6 border-b-3 border-purple-35 lifePathDuration flex items-end justify-center'>
                    {consultant.calcLifeStageDuration(1) - consultant.birthDate.year() + 9 } - {consultant.calcLifeStageDuration(1) - consultant.birthDate.year() + 18 }
                </div>
                <div className='col-start-9 col-end-11 row-start-4 text-center text-13 h-6'>
                </div>
                <div className='m-auto col-start-9 col-end-11 row-start-5 relative w-full h-full'>
                    <div className='absolute z-10 centered-axis-x'>
                        <div className="w-10 h-10 text-xl font-black text-black flex justify-center items-center bg-green border border-green rounded-full inner-shadow">
                            {consultant.calcLifeStage(3)}{consultant.calcLifeStageISK(3)}
                        </div>
                    </div>
                </div>


                <div className='col-start-11 col-end-13 row-start-1 row-end-13 border-dashed border-l-2 border-r-2 border-gray-400'></div>
                <div className='col-start-11 col-end-13 row-start-1 text-center text-13 h-6 border-b-3 border-purple-35 lifePathDuration flex items-end justify-center'>
                    {consultant.calcLifeStageDuration(1) - consultant.birthDate.year() + 18 } - {consultant.calcLifeStageDuration(1) - consultant.birthDate.year() + 27 }
                </div>
                <div className='col-start-11 col-end-13 row-start-2 text-center text-13 h-6'>
                </div>
                <div className='m-auto col-start-11 col-end-13 row-start-3 relative w-full h-full'>
                    <div className='absolute z-10 centered-axis-x'>
                        <div className="w-10 h-10 text-xl font-black text-black flex justify-center items-center bg-green border border-green rounded-full inner-shadow">
                            {consultant.calcLifeStage(4)}{consultant.calcLifeStageISK(4)}
                        </div>
                    </div>
                </div>

                <div className='col-start-13 col-end-15 row-start-3 text-center text-13 h-6 border-b-3 border-purple-35 lifePathDuration flex items-end justify-center'>
                    {consultant.calcLifeStageDuration(1) - consultant.birthDate.year() + 27 } - {consultant.calcLifeStageDuration(1) - consultant.birthDate.year() + 36 }
                </div>
                <div className='col-start-13 col-end-15 row-start-4 text-center text-13 h-6'>
                </div>
                <div className='m-auto col-start-13 col-end-15 row-start-5 relative w-full h-full'>
                    <div className='absolute z-10 centered-axis-x'>
                        <div className="w-10 h-10 text-xl font-black text-black flex justify-center items-center bg-green border border-green rounded-full inner-shadow">
                            {consultant.calcLifeStage(3)}{consultant.calcLifeStageISK(3)}
                        </div>
                    </div>
                </div>

                <div className='col-start-15 col-end-17 row-start-6 text-center text-13 h-6 border-b-3 border-purple-35 lifePathDuration flex items-end justify-center'>
                    {consultant.calcLifeStageDuration(1) - consultant.birthDate.year() + 36 } - {consultant.calcLifeStageDuration(1) - consultant.birthDate.year() + 45 }
                </div>
                <div className='col-start-15 col-end-17 row-start-7 text-center text-13 h-6'>
                </div>
                <div className='m-auto col-start-15 col-end-17 row-start-8 relative w-full h-full'>
                    <div className='absolute z-10 centered-axis-x'>
                        <div className="w-10 h-10 text-xl font-black text-black flex justify-center items-center bg-green border border-green rounded-full inner-shadow">
                            {consultant.calcLifeStage(2)}{consultant.calcLifeStageISK(2)}
                        </div>
                    </div>
                </div>

                <div className='col-start-17 col-end-21 row-start-8 text-center text-13 h-6 border-b-3 border-purple-35 lifePathDuration flex items-end justify-center'>
                    {consultant.calcLifeStageDuration(1) - consultant.birthDate.year() + 45 } - ...
                </div>
                <div className='col-start-17 col-end-21 row-start-9 text-center text-13 h-6'>
                </div>
                <div className='m-auto col-start-17 col-end-21 row-start-10 relative w-full h-full'>
                    <div className='absolute z-10 centered-axis-x'>
                        <div className="w-10 h-10 text-xl font-black text-black flex justify-center items-center bg-green border border-green rounded-full inner-shadow">
                            {consultant.calcLifeStage(1)}{consultant.calcLifeStageISK(1)}
                        </div>
                    </div>
                </div>

                <img src={time_curve} className="absolute bottom-0 left-0 w-full" />
                <div className='col-start-1 col-end-7 row-start-5 h-6'></div>
                <div className='col-start-1 col-end-7 row-start-8 h-6'></div>
                <div className='col-start-1 col-end-7 row-start-9 h-6'></div>
                <div className='col-start-1 col-end-7 row-start-10 h-6'></div>
                <div className='col-start-1 col-end-7 row-start-11 h-6'></div>
                <div className='col-start-1 col-end-7 row-start-12 h-6'></div>

                {(dobleStage)?<div className='col-start-1 col-end-7 row-start-9 h-6 flex justify-center text-13'>
                    Del nacimiento a los {consultant.calcDoubleLifeStageDuration(1) - consultant.birthDate.year() }
                </div>:''}
                {(dobleStage)?<div className='col-start-7 col-end-9 row-start-7 h-6 flex justify-center text-13'>
                    {consultant.calcDoubleLifeStageDuration(1) - consultant.birthDate.year() } - {consultant.calcDoubleLifeStageDuration(1) -consultant.birthDate.year() + 9 }
                </div>:''}
                {(dobleStage)?<div className='col-start-9 col-end-11 row-start-4 h-6 flex justify-center text-13'>
                    {consultant.calcDoubleLifeStageDuration(1) -consultant.birthDate.year() + 9 } - {consultant.calcDoubleLifeStageDuration(1) -consultant.birthDate.year() + 18 }
                </div>:''}
                {(dobleStage)?<div className='col-start-11 col-end-13 row-start-2 h-6 flex justify-center text-13'>
                    {consultant.calcDoubleLifeStageDuration(1) -consultant.birthDate.year() + 18 } - {consultant.calcDoubleLifeStageDuration(1) -consultant.birthDate.year() + 27 }
                </div>:''}
                {(dobleStage)?<div className='col-start-13 col-end-15 row-start-4 h-6 flex justify-center text-13'>
                    {consultant.calcDoubleLifeStageDuration(1) -consultant.birthDate.year() + 27 } - {consultant.calcDoubleLifeStageDuration(1) -consultant.birthDate.year() + 36 }
                </div>:''}
                {(dobleStage)?<div className='col-start-15 col-end-17 row-start-7 h-6 flex justify-center text-13'>
                    {consultant.calcDoubleLifeStageDuration(1) -consultant.birthDate.year() + 36 } - {consultant.calcDoubleLifeStageDuration(1) -consultant.birthDate.year() + 45 }
                </div>:''}
                {(dobleStage)?<div className='col-start-17 col-end-21 row-start-9 h-6 flex justify-center text-13 text-center'>
                    {consultant.calcDoubleLifeStageDuration(1) -consultant.birthDate.year() + 45 } - ...
                </div>:''}
            </div>
            <div id="lifePathYears" className="grid grid-cols-19 w-full -ml-3 mt-3">
                <div className='col-start-1 col-end-7 text-13 row-start-1'>
                    {consultant.birthDate.year() }
                </div>
                <div className='col-start-7 col-end-9 text-13 row-start-1'>
                    {consultant.calcLifeStageDuration(1)}
                </div>
                <div className='col-start-9 col-end-11 text-13 row-start-1'>
                    {consultant.calcLifeStageDuration(2)}
                </div>
                <div className='col-start-11 col-end-13 text-13 row-start-1'>
                    {consultant.calcLifeStageDuration(3)}
                </div>
                <div className='col-start-13 col-end-15 text-13 row-start-1'>
                    {consultant.calcLifeStageDuration(4)}
                </div>
                <div className='col-start-15 col-end-17 text-13 row-start-1'>
                    {consultant.calcLifeStageDuration(5)}
                </div>
                <div className='col-start-17 col-end-18 text-13 row-start-1'>
                    {consultant.calcLifeStageDuration(6)}
                </div>
                <div className='col-start-18 col-end-20 text-13 row-start-1'>
                    En adelante...
                </div>
                {(dobleStage)?
                <>
                    <div className='col-start-1 col-end-7 text-13 row-start-2'>
                    {consultant.birthDate.year() }
                </div>
                <div className='col-start-7 col-end-9 text-13 row-start-2'>
                    {consultant.calcDoubleLifeStageDuration(1)}
                </div>
                <div className='col-start-9 col-end-11 text-13 row-start-2'>
                    {consultant.calcDoubleLifeStageDuration(2)}
                </div>
                <div className='col-start-11 col-end-13 text-13 row-start-2'>
                    {consultant.calcDoubleLifeStageDuration(3)}
                </div>
                <div className='col-start-13 col-end-15 text-13 row-start-2'>
                    {consultant.calcDoubleLifeStageDuration(4)}
                </div>
                <div className='col-start-15 col-end-17 text-13 row-start-2'>
                    {consultant.calcDoubleLifeStageDuration(5)}
                </div>
                <div className='col-start-17 col-end-18 text-13 row-start-2'>
                    {consultant.calcDoubleLifeStageDuration(6)}
                </div>
                <div className='col-start-18 col-end-20 text-13 row-start-2'>
                    En adelante...
                </div>
            </>:''}
            </div>
        </div>
    )
}