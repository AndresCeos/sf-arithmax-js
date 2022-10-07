import { useDispatch, useSelector } from 'react-redux';

import cx from 'classnames';
import localforage from 'localforage';
import { useEffect, useState } from 'react';
import { TiPlus } from 'react-icons/ti';
import personal from '../assets/icons/e_personal.svg';
import universal from '../assets/icons/e_universal.svg';
import welcome from '../assets/welcome.png';
import { CircleTime } from '../components';
import { GuestForm } from '../components/GuestForm';
import Modal from '../components/Modal';
import { dateSelect } from '../hooks';
import { currentDateShort, Person, Universal } from '../resources';
import { getGuestByIndex } from '../store/slices/users/users';

const HomePage = () => {
  const { names, lastName, scdLastName, date } = useSelector(state => state.auth)
  const { newDate } = dateSelect()
  const [showModal, setShowModal] = useState(false)
  const [guests, setGuests] = useState([])
  const [guestI, setGuestI] = useState(null)
  const dispatch = useDispatch();
  const profile = new Person({ name: names, lastName, scdLastName, birthDate: date })
  const [currentPerson, setCurrentPerson] = useState(profile)

  const displayname = `${names} ${lastName}`

  const u = new Universal()

  const currentDay = newDate.date()
  const currentMonth = newDate.month() + 1
  const currentYear = newDate.year()

  useEffect(() => {
    fetchGuests();
  }, [])

  const handleGuests = (guests) => {
    console.log({ guests })
    let guestsVibrations = [];
    if (guests[0]?.name) {
      guestsVibrations[0] = { name: guests[0].name, person: new Person({ birthDate: guests[0].date }) }
    }
    if (guests[1]?.name) {
      guestsVibrations[1] = { name: guests[1].name, person: new Person({ birthDate: guests[1].date }) }
    }
    console.log({ guestsVibrations })
    setGuests(guestsVibrations);
  };

  const handlePerson = async (index) => {
    setGuestI(index)
    await dispatch(getGuestByIndex(index));
    setShowModal(true)
  }

  const fetchGuests = async () => {
    const guests = await localforage.getItem('guests')
    handleGuests(guests)
  }

  const handleCloseModal = async () => {
    setShowModal(false);
    await fetchGuests();
  }

  const handleGuestCircle = ({ person }) => {
    if (person instanceof Person) {
      setCurrentPerson(person)
    }
  }

  const $energyClass = 'rounded-full bg-white w-10 h-10 flex items-center justify-center border border-gray-700 inner-shadow text-xl mb-3 font-black'

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
          {profile.birthDate.isValid() ? <CircleTime consultant={currentPerson} /> : null}
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
              {currentDateShort(newDate)}
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
            <li
              className={cx('text-center', {
                'cursor-pointer': profile instanceof Person
              },
                `${currentPerson.getFormBirthDate() === profile.getFormBirthDate() ? 'text-black' : 'text-main'} `)}
              onClick={() => handleGuestCircle({ person: profile })}>
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
          <ul className={cx('flex flex-col items-center', {
            'opacity-25': !guests[0]?.person instanceof Person
          })}>
            <li className='mb-2'>
              <img src={personal} alt="personal_disabled" />
            </li>
            <li
              className={cx('text-center', {
                'cursor-pointer': guests[0]?.person instanceof Person
              },
                `${currentPerson === guests[0]?.person ? 'text-black' : 'text-main'} `)}
              onClick={() => handleGuestCircle({ person: guests[0].person })}>
              ENERGÍA<br />
              <div className='font-black'>PERSONAL</div>
            </li>
            <li className={cx('rounded-full bg-white w-32 h-10 flex items-center justify-center border border-gray-700 text-13 inner-shadow mt-3 mb-6 font-black')}>
              <button onClick={() => handlePerson(1)}>
                {guests[0]?.person instanceof Person ? guests[0]?.name : <TiPlus />}
              </button>
            </li>
            <li className={cx($energyClass)}>
              {guests[0]?.person instanceof Person && guests[0]?.person.calcPersonalDay(currentDay, currentMonth, currentYear)}
            </li>
            <li className={cx($energyClass)}>
              {guests[0]?.person instanceof Person && guests[0]?.person.calcPersonalWeek(currentDay, currentMonth, currentYear)}
            </li>
            <li className={cx($energyClass)}>
              {guests[0]?.person instanceof Person && guests[0]?.person.calcPersonalMonth(currentMonth, currentYear)}
            </li>
            <li className={cx($energyClass)}>
              {guests[0]?.person instanceof Person && guests[0]?.person.calcPersonalYear(currentYear)}
            </li>
          </ul>
          <ul className={cx('flex flex-col items-center', {
            'opacity-25': !guests[1]?.person instanceof Person
          })}>
            <li className='mb-2'>
              <img src={personal} alt="personal_disabled" />
            </li>
            <li
              className={cx('text-center', {
                'cursor-pointer': guests[1]?.person instanceof Person
              },
                `${currentPerson === guests[1]?.person ? 'text-black' : 'text-main'} `)}
              onClick={() => handleGuestCircle({ person: guests[1].person })}>
              ENERGÍA<br />
              <div className='font-black'>PERSONAL</div>
            </li>
            <li className={cx('rounded-full bg-white w-32 h-10 flex items-center justify-center border border-gray-700 text-13 inner-shadow mt-3 mb-6 font-black')}>
              <button onClick={() => handlePerson(2)}>
                {guests[1]?.person instanceof Person ? guests[1]?.name : <TiPlus />}
              </button>
            </li>
            <li className={cx($energyClass)}>
              {guests[1]?.person instanceof Person && guests[1]?.person.calcPersonalDay(currentDay, currentMonth, currentYear)}
            </li>
            <li className={cx($energyClass)}>
              {guests[1]?.person instanceof Person && guests[1]?.person.calcPersonalWeek(currentDay, currentMonth, currentYear)}
            </li>
            <li className={cx($energyClass)}>
              {guests[1]?.person instanceof Person && guests[1]?.person.calcPersonalMonth(currentMonth, currentYear)}
            </li>
            <li className={cx($energyClass)}>
              {guests[1]?.person instanceof Person && guests[1]?.person.calcPersonalYear(currentYear)}
            </li>
          </ul>
        </div>
      </div>
      {
        showModal
        && (
          <Modal handleCloseModal={() => setShowModal(false)}>
            <GuestForm index={guestI} cb={handleCloseModal} />
          </Modal>
        )
      }
    </>
  )
}

export default HomePage;