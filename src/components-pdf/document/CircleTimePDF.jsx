import { Circle } from '../circleTime/Circle'
import { MonthCircle } from '../circleTime/MonthCircle'

import circle from '../assets/circle-time.jpg'

export const CircleTimePDF = (consultant, newDate) => {
  return {
    bg: circle,
    children: <>
      <Circle consultant={consultant} newDate={newDate} />
      <MonthCircle consultant={consultant} newDate={newDate} />
    </>
  }
}
