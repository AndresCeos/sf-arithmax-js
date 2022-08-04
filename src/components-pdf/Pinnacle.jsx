import  { Text, View } from '@react-pdf/renderer';
import {StyleSheet} from '@react-pdf/renderer';

export const Pinnacle = ({consultant}) => {
  return (
    <View style={pinnacle.container}>
      <View style={pinnacle.bar}>
        <Text>
          Pináculo
        </Text>
      </View>
      <View style={pinnacle.wrap}>
        <View style={[pinnacle.letter, pinnacle.A, pinnacle.purple]}>
          <Text>{consultant.getA()}</Text>
        </View>
        <View style={[pinnacle.letter_main, pinnacle.B, pinnacle.purple]}>
          <Text>{consultant.getB()}</Text>
        </View>
        <View style={[pinnacle.letter, pinnacle.C, pinnacle.purple]}>
          <Text>{consultant.getC()}</Text>
        </View>
        <View style={[pinnacle.letter, pinnacle.D, pinnacle.purple]}>
          <Text>{consultant.getD()}</Text>
        </View>
        <View style={[pinnacle.letter_description, pinnacle.A_description]}>
          <Text>A</Text>
        </View>
        <View style={[pinnacle.letter_description, pinnacle.B_description]}>
          <Text>B</Text>
        </View>
        <View style={[pinnacle.letter_description, pinnacle.C_description]}>
          <Text>C</Text>
        </View>
        <View style={[pinnacle.letter_description, pinnacle.D_description]}>
          <Text>D</Text>
        </View>

        <View style={[pinnacle.letter, pinnacle.E, pinnacle.green]}>
          <Text>{consultant.getE()}</Text>
        </View>
        <View style={[pinnacle.letter, pinnacle.F, pinnacle.green]}>
          <Text>{consultant.getF()}</Text>
        </View>
        <View style={[pinnacle.letter, pinnacle.I, pinnacle.green]}>
          <Text>{consultant.getI()}</Text>
        </View>
        <View style={[pinnacle.letter_description, pinnacle.E_description]}>
          <Text>E</Text>
        </View>
        <View style={[pinnacle.letter_description, pinnacle.F_description]}>
          <Text>F</Text>
        </View>
        <View style={[pinnacle.letter_description, pinnacle.I_description]}>
          <Text>I</Text>
        </View>

        <View style={[pinnacle.letter, pinnacle.H, pinnacle.green]}>
          <Text>{consultant.getH()}</Text>
        </View>
        <View style={[pinnacle.letter, pinnacle.G, pinnacle.green]}>
          <Text>{consultant.getG()}</Text>
        </View>
        <View style={[pinnacle.letter_description, pinnacle.H_description]}>
          <Text>H</Text>
        </View>
        <View style={[pinnacle.letter_description, pinnacle.G_description]}>
          <Text>G</Text>
        </View>

        <View style={[pinnacle.letter, pinnacle.J, pinnacle.green]}>
          <Text>{consultant.getJ()}</Text>
        </View>
        <View style={[pinnacle.letter_description, pinnacle.J_description]}>
          <Text>J</Text>
        </View>

        <View style={[pinnacle.letter, pinnacle.K, pinnacle.red]}>
          <Text>{consultant.getK()}</Text>
        </View>
        <View style={[pinnacle.letter, pinnacle.O, pinnacle.red]}>
          <Text>{consultant.getO()}</Text>
        </View>
        <View style={[pinnacle.letter, pinnacle.L, pinnacle.red]}>
          <Text>{consultant.getL()}</Text>
        </View>
        <View style={[pinnacle.letter_description, pinnacle.K_description]}>
          <Text>K</Text>
        </View>
        <View style={[pinnacle.letter_description, pinnacle.O_description]}>
          <Text>O</Text>
        </View>
        <View style={[pinnacle.letter_description, pinnacle.L_description]}>
          <Text>L</Text>
        </View>

        <View style={[pinnacle.letter, pinnacle.M, pinnacle.red]}>
          <Text>{consultant.getM()}</Text>
        </View>
        <View style={[pinnacle.letter_description, pinnacle.M_description]}>
          <Text>M</Text>
        </View>

        <View style={[pinnacle.letter, pinnacle.P, pinnacle.red]}>
          <Text>{consultant.getP()}</Text>
        </View>
        <View style={[pinnacle.letter, pinnacle.N, pinnacle.red]}>
          <Text>{consultant.getN()}</Text>
        </View>
        <View style={[pinnacle.letter_description, pinnacle.P_description]}>
          <Text>P</Text>
        </View>
        <View style={[pinnacle.letter_description, pinnacle.N_description]}>
          <Text>N</Text>
        </View>

        <View style={[pinnacle.letter, pinnacle.R, pinnacle.red]}>
          <Text>{consultant.getR()}</Text>
        </View>
        <View style={[pinnacle.letter, pinnacle.Q, pinnacle.red]}>
          <Text>{consultant.getQ()}</Text>
        </View>
        <View style={[pinnacle.letter, pinnacle.S, pinnacle.red]}>
          <Text>{consultant.getS()}</Text>
        </View>

        <View style={[pinnacle.letter_description, pinnacle.R_description]}>
          <Text>R</Text>
        </View>
        <View style={[pinnacle.letter_description, pinnacle.Q_description]}>
          <Text>Q</Text>
        </View>
        <View style={[pinnacle.letter_description, pinnacle.S_description]}>
          <Text>S</Text>
        </View>

        <View style={[pinnacle.letter, pinnacle.W, pinnacle.red]}>
          <Text>{consultant.getW()}</Text>
        </View>
        <View style={[pinnacle.letter_description, pinnacle.W_description]}>
          <Text>W</Text>
        </View>

        {/* <View style={[pinnacle.letter, pinnacle.ausensias]}>
          <Text>{consultant.getAbsences()}</Text>
        </View> */}
    </View>
  </View>
  )
}


export const pinnacle = StyleSheet.create({
  container:{
    position: 'absolute',
    top:'63px',
    left:'10px',
    width: '271px'
  },
  wrap: {
    border: '1px solid gray',
    borderBottomRightRadius: '5px',
    borderBottomLeftRadius: '5px',
    borderTopWidth: 0,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
    height: '445px'
  },
  bar: {
    fontSize: '7px',
    backgroundColor: '#000',
    fontWeight: 'bold',
    color: '#fff',
    padding: '3px',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px'
  },
  letter:{
    width: '30px',
    height: '30px',
    // paddingTop: '5px',
    // textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #000',
    borderRadius: '50%',
    position: 'absolute',
  },
  letter_main:{
    width: '50px',
    height: '50px',
    // paddingTop: '5px',
    // textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #000',
    borderRadius: '50%',
    position: 'absolute',
  },
  letter_description:{
    width: '30px',
    height: '30px',
    // paddingTop: '5px',
    // textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '1px solid #000',
    position: 'absolute',
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#7E7E7E'
  },
  purple: {
    backgroundColor: '#D8C7EB',
    border: '1px solid #B28FD6'
  },
  red: {
    backgroundColor: '#DF45454d',
    border: '1px solid #DF4545'
  },
  green: {
    backgroundColor: '#51A1334d',
    border: '1px solid #51A133'
  },
  A:{
    top: '171',
    left: '29.7px',
  },
  B: {
    top: '163',
    left: '83.4px',
  },
  C:{
    top: '171',
    left: '156.4px',
  },
  D:{
    top: '171',
    left: '219.4px',
  },
  E:{
    top: '115',
    left: '61.9px',
  },
  I:{
    top: '115',
    left: '92.7px',
  },
  F:{
    top: '115',
    left: '124.2px',
  },
  G:{
    top: '65',
    left: '92.7px',
  },
  H:{
    top: '15',
    left: '92.7px',
  },
  J:{
    top: '115',
    left: '185.3px',
  },
  O:{
    top: '235',
    left: '92.7px',
  },
  K:{
    top: '235',
    left: '61.2px',
  },
  L:{
    top: '235',
    left: '125.6px',
  },
  M:{
    top: '285',
    left: '92.7px',
  },
  N:{
    top: '335',
    left: '92.7px',
  },
  R:{
    top: '385',
    left: '92.7px',
  },
  Q:{
    top: '385',
    left: '60.5px',
  },
  S:{
    top: '385',
    left: '125.6px',
  },
  P:{
    top: '335',
    left: '39.5px',
  },
  W:{
    top: '285',
    left: '17.8px',
  },
  ausensias: {
    top: '204',
    left: '153.6px',
    width: '21.30px'
  },
  reaccion: {
    top: '-27.8px',
    left: '219.4px',
  },
  sintesis: {
    top: '-32.3px',
    left: '219.4px',
  },
  regalo: {
    top: '-32.3px',
    left: '219.4px',
  },
  G_description:{
    top: '88',
    left: '92.7px',
  },
  H_description:{
    top: '38',
    left: '92.7px',
  },
  E_description:{
    top: '138',
    left: '61.9px',
  },
  I_description:{
    top: '138',
    left: '92.7px',
  },
  F_description:{
    top: '138',
    left: '124.2px',
  },
  J_description:{
    top: '138',
    left: '185.3px',
  },
  A_description:{
    top: '196',
    left: '29.7px',
  },
  B_description:{
    top: '207',
    left: '92.7px',
  },
  C_description:{
    top: '196',
    left: '156.4px',
  },
  D_description:{
    top: '196',
    left: '219.4px',
  },
  M_description:{
    top: '308',
    left: '92.7px',
  },
  O_description:{
    top: '258',
    left: '92.7px',
  },
  K_description:{
    top: '258',
    left: '61.2px',
  },
  L_description:{
    top: '258',
    left: '125.6px',
  },
  W_description:{
    top: '308',
    left: '17.8px',
  },
  N_description: {
    top: '358',
    left: '92.7px',
  },
  P_description: {
    top: '358',
    left: '39.5px',
  },
  R_description: {
    top: '408',
    left: '92.7px',
  },
  Q_description: {
    top: '408',
    left: '60.5px',
  },
  S_description: {
    top: '408',
    left: '125.6px',
  },
});