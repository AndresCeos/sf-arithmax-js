import { SynastryNames } from '../synastryPinnacle/SynastryNames';
import { SynastryData } from '../synastryVibrationTime/SynastryData';

import sPinnacle from '../assets/s-pinnacle.jpg'
export const SynastryPinnaclePDF = (synastry, newDate) => {
  return {
    bg: sPinnacle,
    children: <>
      <SynastryData synastry={synastry} newDate={newDate} />
      <SynastryNames synastry={synastry} newDate={newDate} />
    </>
  }
}