import { AnnualReturns } from '../annualReturns/AnnualReturns'
import { TimeCicle } from '../annualReturns/TimeCicle'

import annualImage from '../assets/s-annual-returns.jpg'

export const SynastryAnnualReturnsPDF = (consultant, newDate) => {
  return {
    bg: annualImage,
    children: <>
      {/* <AnnualReturns consultant={consultant} />
      <TimeCicle consultant={consultant} newDate={newDate} /> */}
    </>
  }
}
