import {
  VibrationTimeStage,
  VibrationTimeQuarterM,
  VibrationTimeCycle,
  VibrationTimeQuarterY,
  AnnualReturns
} from '..';

import timeImage from '../assets/time-vibration.jpg'


export const TimeVibrationPDF = ({ consultant, newDate }) => {
  return {
    bg: timeImage,
    children: <>
      <VibrationTimeStage consultant={consultant} newDate={newDate} />
      <VibrationTimeQuarterM consultant={consultant} newDate={newDate} />
      <VibrationTimeCycle consultant={consultant} newDate={newDate} />
      <VibrationTimeQuarterY consultant={consultant} newDate={newDate} />
      {/* <AnnualReturns consultant={consultant} /> */}
      {/* @TODO: create copy of annual returns (name) for time vibration */}
    </>
  }
}
