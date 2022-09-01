import { SynastryAnnualReturns } from '../synastryAnnualReturns/SynastryAnnualReturns'

import annualImage from '../assets/s-annual-returns.jpg'

export const SynastryAnnualReturnsPDF = (synastry, newDate) => {
  return {
    bg: annualImage,
    children: <>
      <SynastryAnnualReturns synastry={synastry} newDate={newDate} />
      {/* <TimeCicle consultant={consultant} newDate={newDate} /> */}
    </>
  }
}
