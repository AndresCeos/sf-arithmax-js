
import gVibration from '../assets/g-time-vibration.jpg'
import gVibration2 from '../assets/g-time-vibration2.jpg'
import { GroupData } from '../groupPinnacle/GroupData'
import { GroupCycle } from '../groupVibrationTime/GroupCycle'
import { GroupEnergy } from '../groupVibrationTime/GroupEnergy'
import { GroupLine } from '../groupVibrationTime/GroupLine'
import { GroupQuaterM } from '../groupVibrationTime/GroupQuaterM'
import { GroupQuaterY } from '../groupVibrationTime/GroupQuaterY'
import { GroupTimeCurve } from '../groupVibrationTime/GroupTimeCurve'



export const GroupVibrationTimePDF = ({ groupConsultant, newDate }) => {
  return [{
    bg: gVibration,
    children: <>
      <GroupData groupConsultant={groupConsultant} newDate={newDate} />
      <GroupEnergy groupConsultant={groupConsultant} newDate={newDate} />
      <GroupCycle groupConsultant={groupConsultant} newDate={newDate} />
      <GroupQuaterM groupConsultant={groupConsultant} newDate={newDate} />
      <GroupLine groupConsultant={groupConsultant} newDate={newDate} />
    </>
  }, {
    bg: gVibration2,
    children: <>
      <GroupData groupConsultant={groupConsultant} newDate={newDate} />
      <GroupQuaterY groupConsultant={groupConsultant} newDate={newDate} />
      <GroupTimeCurve groupConsultant={groupConsultant} newDate={newDate} />
    </>
  }]
}