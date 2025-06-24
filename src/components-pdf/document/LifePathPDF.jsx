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

export const LifePathPDF = ({ consultant, newDate }) => {
  return {
    bg: lifePathImage,
    children: <>
      <LifePath9Years consultant={consultant} now={newDate} />
      <LifePathLearningStage consultant={consultant} now={newDate} />
      <LifePathPersonalYears consultant={consultant} now={newDate} />
      <LifePathQuarters consultant={consultant} now={newDate} />
      <LifePathPersonalMonths consultant={consultant} now={newDate} />
      <LifePathPersonalWeeks consultant={consultant} now={newDate} />
      <LifePathDialogs consultant={consultant} now={newDate} />
              </>
  }
}
