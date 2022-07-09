import { CircleNumber } from '../components';

export const AnnualReturn = ({ annualReturn, current, months, group, personalYear, yearsOld, year}) => {

    const caclAge = (age, year) => {
        const Age = age
        const Year = year

        let yearsOld = [ age ];
        let years = [ year ];

        while( age - 9 > 0 && yearsOld.length < 9 ){
            age -= 9
            yearsOld.push( age )

            year -= 9
            years.push( year )
        }
        if( yearsOld.length < 9 ){
            age = Age
            year = Year
            while( age + 9 > 0 && yearsOld.length < 9 ){
                age += 9
                yearsOld.unshift( age )
                year += 9
                years.unshift( year )
            }
        }
        yearsOld.reverse()
        years.reverse()
        const table = yearsOld.map( (e, i) => {
            return [ e, years[i] ]
        })
        return Object.entries( table )
    }
    return(
        <div className='relative'>
            { months ?
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
            : ''}
            <div className={`anual-grid ${ group === true ? 'ml-28' : 'm-auto' } relative`}>
                { group === true ?
                    <>
                        <h2 className='text-xl font-extrabold text-center mt-5'>
                            Año Personal <br/>
                            { personalYear }
                        </h2>
                        <ul className='absolute -left-24 border -top-4 border-gray-300'>
                            <li className='grid grid-cols-2 text-13 bg-main text-white text-center font-bold'>
                                <div className='p-1'>Año</div>
                                <div className='p-1'>Edad</div>
                            </li>
                            {
                                caclAge(yearsOld, year).map( (e, i) =>
                                    <li key={i} className={`
                                            grid grid-cols-2 text-13 text-center
                                            ${ i % 2 === 0 ? 'bg-gray-300' : 'bg-gray-200' }
                                            ${ year === e[1][1] && current ? 'bg-gold' : '' }
                                        `}
                                    >
                                        <div className='p-1 text-gray-600'>{e[1][1]}</div>
                                        <div className='p-1 text-gray-600'>{e[1][0]}</div>
                                    </li>
                                )
                            }
                        </ul>
                    </>
                :
                    <div className='grid grid-cols-3 mb-8'>
                        <div className="text-xl font-bold border border-black border-opacity-50 flex justify-center items-center h-10 rounded-lg">
                            {annualReturn.yearToCalculate}
                        </div>
                        <div className='arrow-annual-return'></div>
                        <div className="text-base font-bold flex justify-center items-center h-10 rounded-lg">
                            {annualReturn.age} años
                        </div>
                    </div>
                }
                <div className='grid grid-cols-5 gap-2 relative pt-1'>
                    <svg height="200" width="300" className='absolute top-1'>
                        <polygon points="110,0 210,120 20,120" fill="transparent" stroke="#004AAD" strokeWidth="1" />
                        <line x1="10" y1="120" x2="110" y2="180" stroke="#004AAD" strokeWidth="1" />
                        <line x1="210" y1="120" x2="110" y2="180" stroke="#004AAD" strokeWidth="1" />
                    </svg>
                    { current ?
                    <svg height="200" width="300" className='absolute top-red'>
                        <polygon points="65,20 3,136 130,136" fill="transparent" stroke="#004AAD" strokeWidth="3" />
                        <polygon points="160,20 220,136 90,136" fill="transparent" stroke="#51A133" strokeWidth="3" />
                        <line x1="90" y1="0" x2="90" y2="196" stroke="#DF4545" strokeWidth="3" />
                        <line x1="133" y1="0" x2="133" y2="196" stroke="#DF4545" strokeWidth="3" />
                        <line x1="90" y1="0" x2="133" y2="0" stroke="#DF4545" strokeWidth="6" />
                        <line x1="90" y1="196" x2="133" y2="196" stroke="#DF4545" strokeWidth="3" />
                    </svg> : '' }

                    <CircleNumber size="sm" appearance="white" border="red" position="vf" borderWidth={ current ? '4' : '1'} >
                        {annualReturn.F}
                    </CircleNumber>
                    <CircleNumber size="sm" appearance="white" border="red" position="vd">
                        {annualReturn.D}
                    </CircleNumber>
                    <CircleNumber size="sm" appearance="white" border="red" position="vg" borderWidth={ current ? '4' : '1'} >
                        {annualReturn.G}
                    </CircleNumber>
                    <CircleNumber size="sm" appearance="white" border="red" position="ve">
                        {annualReturn.E}
                    </CircleNumber>
                    <CircleNumber size="sm" appearance="white" border="purple" position="va">
                        {annualReturn.A}
                    </CircleNumber>
                    <CircleNumber size="sm" appearance="purple-30" border={ current ? 'main' : 'purple'} position="vb" borderWidth={ current ? '4' : '1'} >
                        {annualReturn.B}
                    </CircleNumber>
                    <CircleNumber size="sm" appearance="white" border="purple" position="vc">
                        {annualReturn.C}
                    </CircleNumber>
                    <CircleNumber size="sm" appearance="white" border="green" position="vh">
                        {annualReturn.H}
                    </CircleNumber>
                </div>
            </div>
        </div>
    )
}