import {
  PinnacleName,
  Pinnacle,
  PinnaclePotential,
  PinnacleTimeCurve,
} from '..';
import { BridgeStage } from '../BridgeStage';
import { AnnualReturns } from '../AnnualReturns';

import pinnacleImage from '../assets/pinnacle.jpg'

export const PinnaclePDF = ({ consultant }) => {
  return {
    bg: pinnacleImage,
    children: <>
      <PinnacleName consultant={consultant}></PinnacleName>
      <PinnaclePotential consultant={consultant}></PinnaclePotential>
      <Pinnacle consultant={consultant}></Pinnacle>
      <BridgeStage consultant={consultant}></BridgeStage>
      <AnnualReturns consultant={consultant} />
      <PinnacleTimeCurve consultant={consultant} />
    </>
  }
}
