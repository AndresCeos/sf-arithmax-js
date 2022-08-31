import {
  LifePathLearningStage,
  LifePath9Years,
  LifePathPersonalYears,
  LifePathQuarters,
  LifePathPersonalMonths,
  LifePathPersonalWeeks,
  LifePathDialogs,
} from '..';

import lifePathImage from '../assets/life-Path.jpg'

export const LifePathPDF = (consultant, now) => {
  return {
    bg: lifePathImage,
    children: <>
      <LifePath9Years consultant={consultant} now={now} />
      <LifePathLearningStage consultant={consultant} now={now} />
      <LifePathPersonalYears consultant={consultant} now={now} />
      <LifePathQuarters consultant={consultant} now={now} />
      <LifePathPersonalMonths consultant={consultant} now={now} />
      <LifePathPersonalWeeks consultant={consultant} now={now} />
      <LifePathDialogs consultant={consultant} now={now} />
    </>
  }
}
