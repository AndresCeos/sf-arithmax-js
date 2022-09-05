
import { useState } from 'react';
import bellOn from '../assets/icons/bell-on.svg';
import bell from '../assets/icons/bell.svg';

export const Notifications = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isUnread, setIsUnread] = useState(localStorage.getItem('notifications_alert'))
  const notifications = localStorage.getItem('notifications')

  const handleShowNotifications = () => {
    localStorage.setItem('notifications_alert', false)
    setIsUnread('false')
    setIsOpen(!isOpen)
  }

  return (
    <button className='relative' onClick={handleShowNotifications}>
      <img
        src={isUnread === 'true' ? bellOn : bell}
        alt="notification"
      />
      {!isOpen
        || (
          <ul className='absolute w-80 bg-white right-0 z-100 rounded-sm top-10 text-left'>
            {notifications.split(',').map(notification =>
              <li className='px-2 py-4 border-b'>{notification}</li>)}
          </ul>
        )}
    </button>
  )
}
