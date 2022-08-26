import {SynastryVTQuaterM} from '../synastryVibrationTime/SynastryVTQuaterM';
import { SynastryData } from '../synastryVibrationTime/SynastryData';
import { SynastryEnergy } from '../synastryVibrationTime/SynastryEnergy';
import { SynastryNineCycle } from '../synastryVibrationTime/SynastryNineCycle';
import { SynastryVTQuarterY } from '../synastryVibrationTime/SynastryVTQuaterY';
import { SynastryLine } from '../synastryVibrationTime/SynastryLine';
import { SynastryTimeCurve } from '../synastryVibrationTime/SynastryTimeCurve';

import synastry1 from '../assets/Synastryvt-1.jpeg'
import synastry2 from '../assets/Synastryvt-2.jpeg'





export const SynastryVibrationTimePDF = (synastry, newDate) => {
  return [{
    bg: synastry1,
    children: <>
      <SynastryData synastry={synastry} newDate={newDate} />
      <SynastryVTQuaterM synastry={synastry} newDate={newDate} />
      <SynastryEnergy synastry={synastry} newDate={newDate} />
      <SynastryNineCycle synastry={synastry} newDate={newDate} />
      <SynastryVTQuarterY synastry={synastry} newDate={newDate} />

    </>
  }, {
    bg: synastry2,
    children: <>
    <SynastryData synastry={synastry} newDate={newDate} />
    <SynastryTimeCurve synastry={synastry} newDate={newDate} />
    <SynastryLine synastry={synastry} newDate={newDate} />
    </>

  }]
}