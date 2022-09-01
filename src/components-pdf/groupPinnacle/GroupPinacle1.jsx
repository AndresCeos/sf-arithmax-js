import { View, Text, StyleSheet } from "@react-pdf/renderer";

export const GroupPinacle1 = ({groupConsultant}) =>{

  const cap = groupConsultant.group
  console.log(cap.length);
  /*return (
    <View style={pinnacle.cont}>
      <View style={[pinnacle.wrap1, pinnacle.wrap]}>
      <View style={pinnacle.container}>
      <View style={pinnacle.bar}>
        <Text>
          Pináculo
        </Text>
      </View>
      <View style={pinnacle.wrap}>
        <View style={[pinnacle.letter, pinnacle.A]}>
          <Text>{groupConsultant.getA()}</Text>
        </View>
        <View style={[pinnacle.letter_main, pinnacle.B]}>
          <Text>{groupConsultant.getB()}</Text>
        </View>
        <View style={[pinnacle.letter, pinnacle.C]}>
          <Text>{groupConsultant.getC()}</Text>
        </View>
        <View style={[pinnacle.letter, pinnacle.D]}>
          <Text>{groupConsultant.getD()}</Text>
        </View>

        <View style={[pinnacle.letter, pinnacle.E]}>
          <Text>{groupConsultant.getE()}</Text>
        </View>
        <View style={[pinnacle.letter, pinnacle.F]}>
          <Text>{groupConsultant.getF()}</Text>
        </View>
        <View style={[pinnacle.letter, pinnacle.I]}>
          <Text>{groupConsultant.getI()}</Text>
        </View>

        <View style={[pinnacle.letter, pinnacle.H]}>
          <Text>{groupConsultant.getH()}</Text>
        </View>
        <View style={[pinnacle.letter, pinnacle.G]}>
          <Text>{groupConsultant.getG()}</Text>
        </View>

        <View style={[pinnacle.letter, pinnacle.J]}>
          <Text>{groupConsultant.getJ()}</Text>
        </View>

        <View style={[pinnacle.letter, pinnacle.K]}>
          <Text>{groupConsultant.getK()}</Text>
        </View>
        <View style={[pinnacle.letter, pinnacle.O]}>
          <Text>{groupConsultant.getO()}</Text>
        </View>
        <View style={[pinnacle.letter, pinnacle.L]}>
          <Text>{groupConsultant.getL()}</Text>
        </View>

        <View style={[pinnacle.letter, pinnacle.M]}>
          <Text>{groupConsultant.getM()}</Text>
        </View>

        <View style={[pinnacle.letter, pinnacle.P]}>
          <Text>{groupConsultant.getP()}</Text>
        </View>
        <View style={[pinnacle.letter, pinnacle.N]}>
          <Text>{groupConsultant.getN()}</Text>
        </View>

        <View style={[pinnacle.letter, pinnacle.R]}>
          <Text>{groupConsultant.getR()}</Text>
        </View>
        <View style={[pinnacle.letter, pinnacle.Q]}>
          <Text>{groupConsultant.getQ()}</Text>
        </View>
        <View style={[pinnacle.letter, pinnacle.S]}>
          <Text>{groupConsultant.getS()}</Text>
        </View>


        <View style={[pinnacle.letter, pinnacle.W]}>
          <Text>{groupConsultant.getW()}</Text>
        </View>
      </View>
    </View>
      </View>

    </View>
    
  )*/
 return(
    <View style={style.container}>
      <View style={style.row}>
        <View style={style.namegroup}>
          
        </View>
      </View>

      </View>
  )
}
export const style = StyleSheet.create({
  container:{
    position:'absolute',
    top:'300px',
    left:'15px',
    width:'527px',
    border:1,
    borderColor:'#333'
  },
  row:{},
  namegroup:{},
  bar:{
    backgroundColor:'#333',
    width:'170px',
    height:'10px'
  },
  pinnacle:{
    top:'60px'
  },
  names:{
    top:'0px',
    left:'0px'
  }
  /*container:{
    position:'absolute',
    top:'240px',
    left:'15px',
    width:'527px',
    border:1,
    borderColor:'#333'
  },
  bar:{
    backgroundColor:'#333',
    width:'170px',
    height:'10px'
  },
  pinnacle:{
    top:'60px'
  },
  names:{
    top:'0px',
    left:'0px'
  }*/
})
/*export const pinnacle = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '271px',
    
  },
  cont:{
    position:'absolute',
    top:'280px',
    left:'15px',
    border:1,
    borderColor:'#333'
  },
  wrap: {
    position:'relative'
  },
  wrap1:{},
  bar: {
    opacity: 0,
    fontSize: '7px',
    backgroundColor: '#000',
    fontWeight: 'bold',
    color: '#fff',
    padding: '3px',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px'
  },
  letter: {
    width: '14px',
    height: '14px',
    // paddingTop: '5px',
    // textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '1px solid #000',
    // borderRadius: '50%',
    position: 'absolute',
    fontSize:'7px'
  },
  letter_main: {
    width: '20px',
    height: '20px',
    // paddingTop: '5px',
    // textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // border: '1px solid #000',
    // borderRadius: '50%',
    position: 'absolute',
    fontSize: '7px'
  },
  A: {
    top: '173',
    left: '12px',
  },
  B: {
    top: '163',
    left: '83.4px',
  },
  C: {
    top: '173',
    left: '174px',
  },
  D: {
    top: '173',
    left: '228.4px',
  },
  E: {
    top: '115',
    left: '56px',
  },
  I: {
    top: '115',
    left: '92.7px',
  },
  F: {
    top: '115',
    left: '132px',
  },
  G: {
    top: '65',
    left: '92.7px',
  },
  H: {
    top: '15',
    left: '92.7px',
  },
  J: {
    top: '115',
    left: '201px',
  },
  O: {
    top: '235',
    left: '92.7px',
  },
  K: {
    top: '235',
    left: '56px',
  },
  L: {
    top: '235',
    left: '132px',
  },
  M: {
    top: '285',
    left: '92.7px',
  },
  N: {
    top: '335',
    left: '92.7px',
  },
  R: {
    top: '385',
    left: '92.7px',
  },
  Q: {
    top: '385',
    left: '56px',
  },
  S: {
    top: '385',
    left: '132px',
  },
  P: {
    top: '335',
    left: '39.5px',
  },
  W: {
    top: '285',
    left: '13px',
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
});*/

