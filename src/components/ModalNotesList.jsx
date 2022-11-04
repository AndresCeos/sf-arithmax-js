import moment from 'moment';
import { pageNameBySlug } from '../resources/Helper';

const ListItem = ({ item }) => {
  const [date, pages] = item;
  const dateObj = moment(date)
  const lastTime = `${dateObj.date()}/${dateObj.format('MM')}/${dateObj.year()}`
  return (
    <li className='flex flex-col'>
      <small className='text-xs text-gray-500 text-right italic mt-2'>{lastTime}</small>
      <Note pages={pages} />
    </li>
  )
}

const Note = ({ pages }) => {
  return Object.entries(pages).map(item => (
    <div className='flex flex-col border-b border-white p-3 bg-gray-100'>
      <h2 className='font-bold'>{pageNameBySlug(item[0])}</h2>
      <p className='text-gray-900'>{item[1]}</p>
    </div>
  ))
}

export const ModalNotesList = ({ notes }) => {
  return (
    <>
      <div className='flex justify-between gap-3 mb-4'>
        <h4>Historial de Notas</h4>
      </div>
      <ul className='overflow-x-hidden overflow-y-auto min-w-[60vw] max-h-[80vh]'>
        {Object.entries(notes).map((item) => <ListItem item={item} />)}
      </ul>
    </>
  )
}
