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

export const LifePathPDF = (consultant) => {
  return {
    bg: lifePathImage,
    children: <>
      <LifePath9Years consultant={consultant} />
      <LifePathLearningStage consultant={consultant} />
      <LifePathPersonalYears consultant={consultant} />
      <LifePathQuarters consultant={consultant} />
      <LifePathPersonalMonths consultant={consultant} />
      <LifePathPersonalWeeks consultant={consultant} />
      <LifePathDialogs consultant={consultant} />
    </>
  }
}
