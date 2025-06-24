import { SynastryAnnualReturns } from '../synastryAnnualReturns/SynastryAnnualReturns'
import { SynastryTimeCicle } from '../synastryAnnualReturns/SynastryTimeCicle'
import { SynastryData } from '../synastryVibrationTime/SynastryData'

import annualImage from '../assets/s-annual-returns.jpg'

export const SynastryAnnualReturnsPDF = ({ synastry, newDate }) => {
  return {
    bg: annualImage,
    children: <>
      <SynastryData synastry={synastry} newDate={newDate} />
      <SynastryAnnualReturns synastry={synastry} newDate={newDate} />
      <SynastryTimeCicle synastry={synastry} newDate={newDate} />
              </>
  }
}
