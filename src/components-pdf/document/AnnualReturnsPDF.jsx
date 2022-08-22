import { AnnualReturns } from '../annualReturns/AnnualReturns'
import { TimeCicle } from '../annualReturns/TimeCicle'

import annualImage from '../assets/annual-returns.jpg'

export const AnnualReturnsPDF = (consultant, newDate) => {
  return {
    bg: annualImage,
    children: <>
      <AnnualReturns consultant={consultant} />
      <TimeCicle consultant={consultant} newDate={newDate} />
    </>
  }
}
