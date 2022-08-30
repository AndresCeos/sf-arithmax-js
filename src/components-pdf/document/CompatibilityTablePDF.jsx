import { CompatibilityTable } from "../compatibilityTable/CompatibilityValues";
import { SynastryData } from "../synastryVibrationTime/SynastryData";
import compatibility from '../assets/s-compatibility.jpg'

export const CompatibilityTablePDF = (synastry, newDate) => {
  return {
    bg: compatibility,
    children: <>
      <SynastryData synastry={synastry} newDate={newDate} />
      <CompatibilityTable synastry={synastry} newDate={newDate} />
    </>
  }
}