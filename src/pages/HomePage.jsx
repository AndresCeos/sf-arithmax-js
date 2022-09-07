import { useSelector } from 'react-redux';

import { CircleTime } from '../components';
import { dateSelect } from '../hooks';
import { currentDate, Person, Universal } from '../resources';

import { TiPlus } from 'react-icons/ti';
import personal from '../assets/icons/e_personal.svg';
import personalDisabled from '../assets/icons/e_personal_disabled.svg';
import universal from '../assets/icons/e_universal.svg';
import welcome from '../assets/welcome.png';

const HomePage = () => {
  const { names, lastName, scdLastName, date } = useSelector(state => state.auth)
  const { newDate } = dateSelect()


  const displayname = `${names} ${lastName}`
  const profile = new Person({ name: names, lastName, scdLastName, birthDate: date })

  const u = new Universal()

  const currentDay = newDate.date()
  const currentMonth = newDate.month() + 1
  const currentYear = newDate.year()

  return (
    <>
      <div />
      <div className='grid grid-cols-2'>
        <div className='mt-20 pl-14 pt-11 pb-7 bg-white bg-opacity-50 w-full relative rounded-tr-3xl rounded-br-3xl'>
          <h2 className='font-black mt-0 mb-2 text-main text-2xl'>Bienvenid@ {names}</h2>
          <h2 className='text-main text-2xl'>a tu Software de Numerología</h2>
          <img src={welcome} className="welcomeLogo" alt="welcome" />
        </div>

        <div className='row-span-2 flex justify-center items-center'>
          {profile.birthDate.isValid() ? <CircleTime consultant={profile} /> : null}
        </div>

        <div className='grid grid-cols-4 mt-24'>
          <ul className='flex flex-col items-center relative'>
            <li className='mb-2'>
              <img src={universal} alt="universal" />
            </li>
            <li className='text-center text-main'>
              ENERGÍA<br />
              <div className='font-black'>UNIVERSAL</div>
            </li>
            <li className='rounded-full bg-white w-32 h-10 flex items-center justify-center border border-gray-700 inner-shadow mt-3 mb-6 font-black text-13 text-center'>
              {currentDate(newDate)}
            </li>
            <li
              className='name-energy rounded-full bg-white w-10 h-10 flex items-center justify-center border border-gray-700 inner-shadow text-xl mb-3'
              data-name='DÍA'
            >
              {u.calcUniversalDay(currentDay, currentMonth, currentYear)}{u.calcUniversalDayISK(currentDay, currentMonth, currentYear)}
            </li>
            <li
              className='name-energy rounded-full bg-white w-10 h-10 flex items-center justify-center border border-gray-700 inner-shadow text-xl mb-3'
              data-name='SEM'
            >
              {u.calcCurrentUniversalWeek(currentDay, currentMonth, currentYear)}{u.calcCurrentUniversalWeekISK(currentDay, currentMonth, currentYear)}
            </li>
            <li
              className='name-energy rounded-full bg-white w-10 h-10 flex items-center justify-center border border-gray-700 inner-shadow text-xl mb-3'
              data-name='MES'
            >
              {u.calcUniversalMonth(currentMonth, currentYear)}{u.calcUniversalMonthISK(currentMonth, currentYear)}
            </li>
            <li
              className='name-energy rounded-full bg-white w-10 h-10 flex items-center justify-center border border-gray-700 inner-shadow text-xl mb-3'
              data-name='AÑO'
            >
              {u.calcUniversalYear(currentYear)}{u.calcUniversalYearISK(currentYear)}
            </li>
          </ul>
          <ul className='flex flex-col items-center'>
            <li className='mb-2'>
              <img src={personal} alt="personal" />
            </li>
            <li className='text-center text-black'>
              ENERGÍA<br />
              <div className='font-black'>PERSONAL</div>
            </li>
            <li className='rounded-full bg-white w-32 h-10 flex items-center justify-center border border-gray-700 inner-shadow mt-3 mb-6 font-black text-13 text-center'>
              {profile.displayname || displayname}
            </li>
            <li className='rounded-full bg-white w-10 h-10 flex items-center justify-center border border-gray-700 inner-shadow text-xl mb-3 font-black'>
              {profile.birthDate.isValid() ? profile.calcPersonalDay(currentDay, currentMonth, currentYear) : '-'}
            </li>
            <li className='rounded-full bg-white w-10 h-10 flex items-center justify-center border border-gray-700 inner-shadow text-xl mb-3 font-black'>
              {profile.birthDate.isValid() ? profile.calcPersonalWeek(currentDay, currentMonth, currentYear) : '-'}
            </li>
            <li className='rounded-full bg-white w-10 h-10 flex items-center justify-center border border-gray-700 inner-shadow text-xl mb-3 font-black'>
              {profile.birthDate.isValid() ? profile.calcPersonalMonth(currentMonth, currentYear) : '-'}
            </li>
            <li className='rounded-full bg-white w-10 h-10 flex items-center justify-center border border-gray-700 inner-shadow text-xl mb-3 font-black'>
              {profile.birthDate.isValid() ? profile.calcPersonalYear(currentYear) : '-'}
            </li>
          </ul>
          <ul className='flex flex-col items-center'>
            <li className='mb-2'>
              <img src={personalDisabled} alt="personal_disabled" />
            </li>
            <li className='text-center text-main opacity-25'>
              ENERGÍA<br />
              <div className='font-black'>PERSONAL</div>
            </li>
            <li className='rounded-full bg-white w-32 h-10 flex items-center justify-center border border-gray-700 inner-shadow mt-3 mb-6 font-black opacity-25'>
              <TiPlus />
            </li>
            <li className='rounded-full bg-white w-10 h-10 flex items-center justify-center border border-gray-700 inner-shadow text-xl mb-3 font-black opacity-25' />
            <li className='rounded-full bg-white w-10 h-10 flex items-center justify-center border border-gray-700 inner-shadow text-xl mb-3 font-black opacity-25' />
            <li className='rounded-full bg-white w-10 h-10 flex items-center justify-center border border-gray-700 inner-shadow text-xl mb-3 font-black opacity-25' />
            <li className='rounded-full bg-white w-10 h-10 flex items-center justify-center border border-gray-700 inner-shadow text-xl mb-3 font-black opacity-25' />
          </ul>
          <ul className='flex flex-col items-center'>
            <li className='mb-2'>
              <img src={personalDisabled} alt="personal_disabled" />
            </li>
            <li className='text-center text-main opacity-25'>
              ENERGÍA<br />
              <div className='font-black'>PERSONAL</div>
            </li>
            <li className='rounded-full bg-white w-32 h-10 flex items-center justify-center border border-gray-700 inner-shadow mt-3 mb-6 font-black opacity-25'>
              <TiPlus />
            </li>
            <li className='rounded-full bg-white w-10 h-10 flex items-center justify-center border border-gray-700 inner-shadow text-xl mb-3 font-black opacity-25' />
            <li className='rounded-full bg-white w-10 h-10 flex items-center justify-center border border-gray-700 inner-shadow text-xl mb-3 font-black opacity-25' />
            <li className='rounded-full bg-white w-10 h-10 flex items-center justify-center border border-gray-700 inner-shadow text-xl mb-3 font-black opacity-25' />
            <li className='rounded-full bg-white w-10 h-10 flex items-center justify-center border border-gray-700 inner-shadow text-xl mb-3 font-black opacity-25' />
          </ul>
        </div>
      </div>
    </>
  )
}

export default HomePage;