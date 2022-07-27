import  { Text, View } from '@react-pdf/renderer';
import { pinnacle } from  './styles';

export const Pinnacle = ({consultant}) => {
  return (
    <View style={pinnacle.container}>
      <Text style={[pinnacle.letter, pinnacle.A]}>{consultant.getA()}</Text>
      <Text style={[pinnacle.letter, pinnacle.B]}>{consultant.getB()}</Text>
      <Text style={[pinnacle.letter, pinnacle.C]}>{consultant.getC()}</Text>
      <Text style={[pinnacle.letter, pinnacle.D]}>{consultant.getD()}</Text>

      <Text style={[pinnacle.letter, pinnacle.E]}>{consultant.getE()}</Text>
      <Text style={[pinnacle.letter, pinnacle.F]}>{consultant.getF()}</Text>
      <Text style={[pinnacle.letter, pinnacle.I]}>{consultant.getI()}</Text>

      <Text style={[pinnacle.letter, pinnacle.H]}>{consultant.getH()}</Text>
      <Text style={[pinnacle.letter, pinnacle.G]}>{consultant.getG()}</Text>
      <Text style={[pinnacle.letter, pinnacle.J]}>{consultant.getJ()}</Text>

      <Text style={[pinnacle.letter, pinnacle.reaccion]}>{consultant.calcReaction()}</Text>
      <Text style={[pinnacle.letter, pinnacle.sintesis]}>{consultant.calcSynthesis()}</Text>
      <Text style={[pinnacle.letter, pinnacle.regalo]}>{consultant.calcGift()}</Text>

      <Text style={[pinnacle.letter, pinnacle.K]}>{consultant.getK()}</Text>
      <Text style={[pinnacle.letter, pinnacle.O]}>{consultant.getO()}</Text>
      <Text style={[pinnacle.letter, pinnacle.L]}>{consultant.getL()}</Text>

      <Text style={[pinnacle.letter, pinnacle.M]}>{consultant.getM()}</Text>

      <Text style={[pinnacle.letter, pinnacle.P]}>{consultant.getP()}</Text>
      <Text style={[pinnacle.letter, pinnacle.N]}>{consultant.getN()}</Text>

      <Text style={[pinnacle.letter, pinnacle.R]}>{consultant.getR()}</Text>
      <Text style={[pinnacle.letter, pinnacle.Q]}>{consultant.getQ()}</Text>
      <Text style={[pinnacle.letter, pinnacle.S]}>{consultant.getS()}</Text>

      <Text style={[pinnacle.letter, pinnacle.W]}>{consultant.getW()}</Text>

      <Text style={[pinnacle.letter, pinnacle.ausensias]}>{consultant.getAbsences()}</Text>
  </View>
  )
}
