import {
  VibrationTimeStage,
  VibrationTimeQuarterM,
  VibrationTimeCycle,
  VibrationTimeQuarterY,
  AnnualReturns
} from '..';


export const TimeVibrationPDF = (consultant, newDate) => {
  return {
    children: <>
      <VibrationTimeStage consultant={consultant} newDate={newDate} />
      <VibrationTimeQuarterM consultant={consultant} newDate={newDate} />
      <VibrationTimeCycle consultant={consultant} newDate={newDate} />
      <VibrationTimeQuarterY consultant={consultant} newDate={newDate} />
      <AnnualReturns consultant={consultant} />
    </>
  }
}
