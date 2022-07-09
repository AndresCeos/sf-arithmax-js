import { useSelector } from 'react-redux';

import { ConsultantPicker } from './';

export const StatusBar = ({consultant}) => {
  const {dateSelected } = useSelector(state => state.users);
  // console.log( consultant )
  if( consultant === null || consultant.name === '' ){
    return(
      <div id="App-statusBar" className="flex items-center justify-between text-13 fixed w-full z-50">
        <div>
          <ConsultantPicker />
        </div>
      </div>
    )
  }

  return(
    <div id="App-statusBar" className="flex items-center justify-between text-13 fixed w-full z-50">
      <div>
        <ConsultantPicker />
      </div>
      <div>
        Fecha de Nacimiento:
        <strong className='ml-2'>{ consultant.getFormattedBirthDate() }</strong>
      </div>
      <div>
        Edad:
        <strong className='ml-2'>{ consultant.getYearsOld() }</strong>
      </div>
      <div>
        Fecha de Consulta:
        <strong className='ml-2'>{ dateSelected.date()+' '+dateSelected.format('MMMM')+' '+dateSelected.year() }</strong>
      </div>
    </div>
  )
}