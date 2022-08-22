import { dateSelect, useConsultant } from '../hooks';
import { useSelector } from 'react-redux';
import { UnselectedConsultant } from '../components/UnselectedConsultant';

import {
  PDF,
  PinnaclePDF,
  LifePathPDF,
  NamePDF,
  CreateNamePDF,
  TimeVibrationPDF,
  CalendarPDF,
  MonthPDF,
  AnnualReturnsPDF,
  CircleTimePDF
} from './document';

export const PreviewPDF = () => {

  const { userActive } = useSelector(state => state.users);
  const isEmpty = Object.keys(userActive).length === 0;
  const { consultant } = useConsultant()
  const { newDate } = dateSelect()

  if (isEmpty) {
    return <UnselectedConsultant />
  }

  const config = [
    MonthPDF(consultant, newDate, 8),
    ...CalendarPDF(consultant, newDate),
    // TimeCirlePDF(consultant),
    AnnualReturnsPDF(consultant, newDate),
    TimeVibrationPDF(consultant, newDate),
    // ...DestinityPDF(consultant),
    CreateNamePDF(consultant),
    ...NamePDF(consultant),
    LifePathPDF(consultant),
    PinnaclePDF(consultant),
    CircleTimePDF(consultant, newDate)
  ]

  return (
    <>
      <div className='mx-10 my-16'>
        Preview
        <PDF consultant={consultant} config={config} />
      </div>
    </>
  )
}