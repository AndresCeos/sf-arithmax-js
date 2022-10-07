import cx from 'classnames';

const Modal = ({ class: $classes, handleCloseModal, ...modal }) => {
  console.log($classes)
  return (
    <div
      className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-60'
    >
      <div className={cx('bg-white p-5 rounded shadow-lg relative', $classes)}>
        <button className='float-right rounded-full hover:bg-purple-300' onClick={handleCloseModal}>
          <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {modal.children}
      </div>
    </div>
  )
}

export default Modal;