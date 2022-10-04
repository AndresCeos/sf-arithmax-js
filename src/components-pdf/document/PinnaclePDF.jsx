import {
  Pinnacle, PinnacleName, PinnaclePotential,
  PinnacleTimeCurve
} from '..';
import { AnnualReturns } from '../AnnualReturns';
import { BridgeStage } from '../BridgeStage';

// import pinnacleImage from '../assets/pinnacle.jpg'
// import pinnacleImage2 from '../assets/newPinacle.jpeg';
import pinnacleImage2 from '../assets/newPinacle2.jpeg';

export const PinnaclePDF = ({ consultant, newDate }) => {
  return {
    bg: pinnacleImage2,
    children: <>
      <PinnacleName consultant={consultant} />
      <PinnaclePotential consultant={consultant} />
      <Pinnacle consultant={consultant} />
      <BridgeStage consultant={consultant} newDate={newDate} />
      <AnnualReturns consultant={consultant} />
      <PinnacleTimeCurve consultant={consultant} newDate={newDate} />
              </>
  }
}
