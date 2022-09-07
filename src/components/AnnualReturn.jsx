import annualPolygonActive from '../assets/annual-polygon-active.svg';
import annualPolygon from '../assets/annual-polygon.svg';
import { CircleNumber } from './CircleNumber';

export const AnnualReturn = ({ annualReturn, current, months, group, personalYear, yearsOld, year, size }) => {
    const fontSize = { xs: 'xs' }
    const marginBottom = { xs: '4' }
    const caclAge = (age, year) => {
        const Age = age
        const Year = year

        const yearsOld = [age];
        const years = [year];

        while (age - 9 > 0 && yearsOld.length < 9) {
            age -= 9
            yearsOld.push(age)

            year -= 9
            years.push(year)
        }
        if (yearsOld.length < 9) {
            age = Age
            year = Year
            while (age + 9 > 0 && yearsOld.length < 9) {
                age += 9
                yearsOld.unshift(age)
                year += 9
                years.unshift(year)
            }
        }
        yearsOld.reverse()
        years.reverse()
        const table = yearsOld.map((e, i) => {
            return [e, years[i]]
        })
        return Object.entries(table)
    }
    return (
        <div className='relative'>
            {months
                ? (
                    <div className='m-auto left-0 right-0 grid grid-cols-12 absolute top-12'>
                        <div className="text-11 border border-blue text-blue text-center">ENE</div>
                        <div className="text-11 border border-blue text-blue text-center">FEB</div>
                        <div className="text-11 border border-blue text-blue text-center">MAR</div>
                        <div className="text-11 border border-blue text-blue text-center">ABR</div>
                        <div className="text-11 border border-pink text-pink text-center">MAY</div>
                        <div className="text-11 border border-pink text-pink text-center">JUN</div>
                        <div className="text-11 border border-pink text-pink text-center">JUL</div>
                        <div className="text-11 border border-pink text-pink text-center">AGO</div>
                        <div className="text-11 border border-green text-green-table text-center">SEP</div>
                        <div className="text-11 border border-green text-green-table text-center">OCT</div>
                        <div className="text-11 border border-green text-green-table text-center">NOV</div>
                        <div className="text-11 border border-green text-green-table text-center">DIC</div>
                    </div>
                )
                : ''}
            <div className={`anual-grid ${group === true ? 'ml-28' : 'm-auto'} relative w-44`}>
                {group === true
                    ? (
                        <>
                            <h2 className='text-xl font-extrabold text-center mt-5'>
                                Año Personal <br />
                                {personalYear}
                            </h2>
                            <ul className='absolute -left-24 border -top-4 border-gray-300'>
                                <li className='grid grid-cols-2 text-13 bg-main text-white text-center font-bold'>
                                    <div className='p-1'>Año</div>
                                    <div className='p-1'>Edad</div>
                                </li>
                                {
                                    caclAge(yearsOld, year).map((e, i) => (
                                        <li
                                            key={i}
                                            className={`
                                                grid grid-cols-2 text-13 text-center
                                                ${i % 2 === 0 ? 'bg-gray-300' : 'bg-gray-200'}
                                                ${year === e[1][1] && current ? 'bg-gold' : ''}
                                            `}
                                        >
                                            <div className='p-1 text-gray-600'>{e[1][1]}</div>
                                            <div className='p-1 text-gray-600'>{e[1][0]}</div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </>
                    )
                    : (
                        <div className={`grid grid-cols-3 mb-${marginBottom[size] || '8'}`}>
                            <div className={`text-${fontSize[size] || 'xl'} font-bold border border-black border-opacity-50 flex justify-center items-center h-10 rounded-lg`}>
                                {annualReturn.yearToCalculate}
                            </div>
                            <div className='arrow-annual-return' />
                            <div className={`text-${fontSize[size] || 'base'} font-bold flex justify-center items-center h-10 rounded-lg`}>
                                {annualReturn.age} años
                            </div>
                        </div>
                    )
                }
                <div className='grid grid-cols-5 gap-2 relative pt-1'>
                    <img src={annualPolygon} className='absolute w-full h-full object-contain top-1' alt='bk' />
                    {current
                        ? (
                            <img src={annualPolygonActive} className='absolute w-full h-full object-contain top-1' alt='bk' />
                        ) : ''}

                    <CircleNumber size="xs" appearance="white" border="red" position="vf" borderwidth={current ? '4' : '1'}>
                        {annualReturn.F}
                    </CircleNumber>
                    <CircleNumber size="xs" appearance="white" border="red" position="vd">
                        {annualReturn.D}
                    </CircleNumber>
                    <CircleNumber size="xs" appearance="white" border="red" position="vg" borderwidth={current ? '4' : '1'}>
                        {annualReturn.G}
                    </CircleNumber>
                    <CircleNumber size="xs" appearance="white" border="red" position="ve">
                        {annualReturn.E}
                    </CircleNumber>
                    <CircleNumber size="xs" appearance="white" border="purple" position="va">
                        {annualReturn.A}
                    </CircleNumber>
                    <CircleNumber size="xs" appearance="purple-30" border={current ? 'main' : 'purple'} position="vb" borderwidth={current ? '4' : '1'}>
                        {annualReturn.B}
                    </CircleNumber>
                    <CircleNumber size="xs" appearance="white" border="purple" position="vc">
                        {annualReturn.C}
                    </CircleNumber>
                    <CircleNumber size="xs" appearance="white" border="green" position="vh">
                        {annualReturn.H}
                    </CircleNumber>
                </div>
            </div>
        </div>
    )
}