import cx from 'classnames';

const Modal = ({ class: $classes, ...modal }) => {
  console.log($classes)
  return (
    <div
      className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-60'
    >
      <div className={cx('bg-white p-5 rounded shadow-lg relative', $classes)}>
        {modal.children}
      </div>
    </div>
  )
}

export default Modal;