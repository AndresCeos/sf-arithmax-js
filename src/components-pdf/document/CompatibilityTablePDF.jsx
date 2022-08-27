import { CompatibilityTable } from "../compatibilityTable/CompatibilityValues";
import { SynastryData } from "../synastryVibrationTime/SynastryData";
import compatibility from '../assets/compatibility.jpeg'

export const CompatibilityTablePDF = (synastry, newDate)=>{
  return{
    bg:compatibility,
    children:<>
      <SynastryData synastry={synastry} newDate={newDate}/>
      <CompatibilityTable synastry={synastry} newDate={newDate}/>
    </>
  }
}