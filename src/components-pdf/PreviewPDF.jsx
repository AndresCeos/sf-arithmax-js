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
  CircleTimePDF,
  SynastryVibrationTimePDF,
  CompatibilityTablePDF,
  DestinityPDF,
  SynastryPinnaclePDF,
  SynastryAnnualReturnsPDF,
  SynastryDestinityPDF,
  GroupPinnaclePDF,
  GroupVibrationTimePDF,
  GroupAnnualReturnsPDF
} from './document';
import { Person, Synastry } from '../resources';
import { PDFViewer } from '@react-pdf/renderer';

export const PreviewPDF = () => {

  const { userActive } = useSelector(state => state.users);
  const isEmpty = Object.keys(userActive).length === 0;
  const { consultant } = useConsultant()
  const { names, lastName, scdLastName, date } = useSelector(state => state.auth)
  const { newDate } = dateSelect()
  const profile = new Person({ name: names, lastName, scdLastName, birthDate: date })

  if (isEmpty) {
    return <UnselectedConsultant />
  }
  const partnerActive = userActive.partner[0]
  const partner = new Person({
    name: partnerActive.names,
    lastName: partnerActive.lastName,
    scdLastName: partnerActive.scdLastName,
    birthDate: partnerActive.date,
    yearMeet: partnerActive.yearMeet
  })
  const synastry = new Synastry(consultant, partner)
  console.log(synastry)
  const config = [
    // PinnaclePDF(consultant),
    // LifePathPDF(consultant, newDate),
    // ...NamePDF(consultant, newDate),
    // CreateNamePDF(consultant),
    // ...DestinityPDF(consultant),
    // TimeVibrationPDF(consultant, newDate),
    // AnnualReturnsPDF(consultant, newDate),
    // CircleTimePDF(consultant, newDate),
    // ...CalendarPDF(consultant, newDate),
    // MonthPDF(consultant, newDate, 8),
    // SYNASTRY
    // SynastryPinnaclePDF(synastry, newDate),
    // ...SynastryVibrationTimePDF(synastry, newDate),
    // CompatibilityTablePDF(synastry, newDate),
    SynastryAnnualReturnsPDF(synastry, newDate),
    // SynastryDestinityPDF(synastry, newDate),
    // GROUP
    // ...GroupPinnaclePDF(),
    // ...GroupVibrationTimePDF(),
    // GroupAnnualReturnsPDF(),
  ]

  return (
    <>
      <div className='mx-10 my-16'>
        Preview
        <PDFViewer width='100%' height='100%' style={{ height: 800 }}>
          <PDF consultant={consultant} config={config} profile={profile} date={newDate} />
        </PDFViewer>
      </div>
    </>
  )
}