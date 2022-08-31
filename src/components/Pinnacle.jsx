import pinnacle from '../assets/pinnacle.svg'

export const Pinnacle = ({ consultant, size, checkP }) => {

  return(
    <div id="pinaculo" className={`relative ${size !== undefined ? size : ''}`}>

      <img id='pinaculo-img' src={pinnacle} className="absolute top-0 left-0 right-0 mx-auto" alt='background' />

      <div id='pinaculo-letters' className="relative w-full left-0 right-0 mx-auto" >
        <div className="pinncle-letter" border="purple" appearance="purple-30" data-letter="A">{consultant.getA()}</div>
        <div className="pinncle-letter" border="purple" appearance="purple-30" data-letter="B">{consultant.getB()}{consultant.getBISK()}</div>
        <div className="pinncle-letter" border="purple" appearance="purple-30" data-letter="C">{consultant.getC()}{consultant.getCISK()}</div>
        <div className="pinncle-letter" border="purple" appearance="purple-30" data-letter="D">{(!checkP)?`${consultant.getD()}${consultant.getDISK()}`:`${consultant.getDCheck()}${consultant.getDISK()}`}</div>

        <div className="pinncle-letter" border="green" appearance="green" data-letter="E">{consultant.getE()}{consultant.getEISK()}</div>
        <div className="pinncle-letter" border="green" appearance="green" data-letter="F">{consultant.getF()}{consultant.getFISK()}</div>
        <div className="pinncle-letter" border="green" appearance="green" data-letter="I">{consultant.getI()}{consultant.getIISK()}</div>

        <div className="pinncle-letter" border="green" appearance="green" data-letter="H">{(!checkP)?`${consultant.getH()}${consultant.getHISK()}`:`${consultant.getHCheck()}${consultant.getHISK()}`}</div>
        <div className="pinncle-letter" border="green" appearance="green" data-letter="G">{consultant.getG()}{consultant.getGISK()}</div>
        <div className="pinncle-letter" border="green" appearance="green" data-letter="J">{consultant.getJ()}{consultant.getJISK()}</div>

        <div className="pinncle-letter" border="red" appearance="red" data-letter="K">{consultant.getK()}</div>
        <div className="pinncle-letter" border="red" appearance="red" data-letter="O">{consultant.getO()}</div>
        <div className="pinncle-letter" border="red" appearance="red" data-letter="L">{consultant.getL()}</div>

        <div className="pinncle-letter" border="red" appearance="red" data-letter="M">{consultant.getM()}</div>

        <div className="pinncle-letter" border="red" appearance="red" data-letter="P">{consultant.getP()}</div>
        <div className="pinncle-letter" border="red" appearance="red" data-letter="N">{consultant.getN()}</div>

        <div className="pinncle-letter" border="red" appearance="red" data-letter="R">{consultant.getR()}</div>
        <div className="pinncle-letter" border="red" appearance="red" data-letter="Q">{consultant.getQ()}</div>
        <div className="pinncle-letter" border="red" appearance="red" data-letter="S">{consultant.getS()}</div>

        <div className="pinncle-letter" border="red" appearance="red" data-letter="W">{consultant.getW()}</div>

        <div className="pinnacle-absents">{consultant.getAbsences()}</div>
      </div>
    </div>
  )
}