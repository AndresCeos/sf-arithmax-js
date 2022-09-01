
import gPinnacle from '../assets/g-pinnacle.jpg'
import gPinnacle2 from '../assets/g-pinnacle2.jpg'
import { GroupData } from '../groupPinnacle/GroupData'
import { GroupPinacle1 } from '../groupPinnacle/GroupPinacle1'
import { GroupPinacle2 } from '../groupPinnacle/GroupPinacle2'
import { GroupPinacle3 } from '../groupPinnacle/GroupPinacle3'

export const GroupPinnaclePDF = (groupConsultant, newDate) => {
  const cap = groupConsultant.group
  console.log(cap.length)
  return [{
    bg: gPinnacle,
    children: <>
    <GroupData groupConsultant={groupConsultant} newDate={newDate}/>
    <GroupPinacle1 groupConsultant={groupConsultant} newDate={newDate}/>
    </>
  }, {
    bg: gPinnacle2,
    children: <>
    <GroupData groupConsultant={groupConsultant} newDate={newDate}/>
    <GroupPinacle2 groupConsultant={groupConsultant} newDate={newDate}/>
    </>
  },{
    bg: gPinnacle2,
    children: <>
    <GroupData groupConsultant={groupConsultant} newDate={newDate}/>
    <GroupPinacle3 groupConsultant={groupConsultant} newDate={newDate}/>
    </>
  } ]
}