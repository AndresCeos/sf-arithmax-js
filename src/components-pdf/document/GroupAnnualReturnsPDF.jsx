
import sPinnacle from '../assets/g-annual-returns.jpg'
import { GroupAnnualReturns } from '../groupAnnualReturns/GroupAnnualReturns'
import { GroupData } from '../groupPinnacle/GroupData'

export const GroupAnnualReturnsPDF = ({ groupConsult, newDate }) => {
  console.log(groupConsult);
  return {
    bg: sPinnacle,
    children: <>
      <GroupAnnualReturns groupConsultant={groupConsult} newDate={newDate} />
      <GroupData groupConsultant={groupConsult} newDate={newDate} />
    </>
  }
}