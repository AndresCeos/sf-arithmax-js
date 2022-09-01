
import sPinnacle from '../assets/g-annual-returns.jpg'
import { GroupAnnualReturns } from '../groupAnnualReturns/GroupAnnualReturns'
import { GroupData } from '../groupPinnacle/GroupData'

export const GroupAnnualReturnsPDF = ({ groupConsultant, newDate }) => {
  return {
    bg: sPinnacle,
    children: <>
      <GroupAnnualReturns groupConsultant={groupConsultant} newDate={newDate} />
      <GroupData groupConsultant={groupConsultant} newDate={newDate} />
    </>
  }
}