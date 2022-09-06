import { StyleSheet, Text, View } from '@react-pdf/renderer'

export const BridgeStage = ({ consultant }) => {
  return (
    <View style={pinnacleStage.container}>
      <View style={pinnacleStage.wrap}>
        <View style={pinnacleStage.bridge_1}>
          <View style={[pinnacleStage.circle, pinnacleStage.bridgeTop]}>
            <Text>
              {consultant.getE()}{consultant.getEISK()}
            </Text>
          </View>
          <View style={[pinnacleStage.circle, pinnacleStage.bridgeLeft]}>
            <Text>
              {consultant.getA()}
            </Text>
          </View>
          <View style={[pinnacleStage.circle, pinnacleStage.bridgeCenter]}>
            <Text>
              {consultant.getResHierarchy(consultant.getE(), consultant.getK())}
            </Text>
          </View>
          <View style={[pinnacleStage.circle, pinnacleStage.bridgeRight]}>
            <Text>
              {consultant.getB()}{consultant.getBISK()}
            </Text>
          </View>
          <View style={[pinnacleStage.circle, pinnacleStage.bridgeBottom]}>
            <Text>
              {consultant.getK()}
            </Text>
          </View>
        </View>
        <View style={pinnacleStage.bridge_2}>
          <View style={[pinnacleStage.circle, pinnacleStage.bridgeTop]}>
            <Text>
              {consultant.getF()}{consultant.getFISK()}
            </Text>
          </View>
          <View style={[pinnacleStage.circle, pinnacleStage.bridgeLeft]}>
            <Text>
              {consultant.getB()}{consultant.getBISK()}
            </Text>
          </View>
          <View style={[pinnacleStage.circle, pinnacleStage.bridgeCenter]}>
            <Text>
              {consultant.getResHierarchy(consultant.getF(), consultant.getL())}
            </Text>
          </View>
          <View style={[pinnacleStage.circle, pinnacleStage.bridgeRight]}>
            <Text>
              {consultant.getC()}{consultant.getCISK()}
            </Text>
          </View>
          <View style={[pinnacleStage.circle, pinnacleStage.bridgeBottom]}>
            <Text>
              {consultant.getL()}
            </Text>
          </View>
        </View>
        <View style={pinnacleStage.bridge_3}>
          <View style={[pinnacleStage.circle, pinnacleStage.bridgeTop]}>
            <Text>
              {consultant.getG()}{consultant.getGISK()}
            </Text>
          </View>
          <View style={[pinnacleStage.circle, pinnacleStage.bridgeLeft]}>
            <Text>
              {consultant.getE()}{consultant.getEISK()}
            </Text>
          </View>
          <View style={[pinnacleStage.circle, pinnacleStage.bridgeCenter]}>
            <Text>
              {consultant.getResHierarchy(consultant.getG(), consultant.getM())}
            </Text>
          </View>
          <View style={[pinnacleStage.circle, pinnacleStage.bridgeRight]}>
            <Text>
              {consultant.getF()}{consultant.getFISK()}
            </Text>
          </View>
          <View style={[pinnacleStage.circle, pinnacleStage.bridgeBottom]}>
            <Text>
              {consultant.getM()}
            </Text>
          </View>
        </View>
        <View style={pinnacleStage.bridge_4}>
          <View style={[pinnacleStage.circle, pinnacleStage.bridgeTop]}>
            <Text>
              {consultant.getH()}{consultant.getHISK()}
            </Text>
          </View>
          <View style={[pinnacleStage.circle, pinnacleStage.bridgeLeft]}>
            <Text>
              {consultant.getA()}
            </Text>
          </View>
          <View style={[pinnacleStage.circle, pinnacleStage.bridgeCenter]}>
            <Text>
              {consultant.getResHierarchy(consultant.getH(), consultant.getN())}
            </Text>
          </View>
          <View style={[pinnacleStage.circle, pinnacleStage.bridgeRight]}>
            <Text>
              {consultant.getC()}{consultant.getCISK()}
            </Text>
          </View>
          <View style={[pinnacleStage.circle, pinnacleStage.bridgeBottom]}>
            <Text>
              {consultant.getN()}
            </Text>
          </View>
        </View>
      </View>

    </View>
  )
}

export const pinnacleStage = StyleSheet.create({
  container: {
    // backgroundColor: '#ff000012',
    position: 'absolute',
    top: '76px',
    width: '105px',
    left: '300px',
    fontSize: '10px',
  },
  wrap: {
    position: 'relative'
  },
  bridge_1: {
    // backgroundColor: 'blue',
    top: '0px',
    width: '105px',
    height: '112px',
    position: 'relative'
  },
  bridge_2: {
    // backgroundColor: '#ff000012',
    top: '2px',
    width: '105px',
    height: '112px',
    position: 'relative'
  },
  bridge_3: {
    // backgroundColor: 'blue',
    top: '0px',
    left: '1px',
    width: '105px',
    height: '112px',
    position: 'relative'
  },
  bridge_4: {
    // backgroundColor: 'green',
    top: '-1px',
    left: '1px',
    width: '105px',
    height: '112px',
    position: 'relative'
  },
  circle: {
    // backgroundColor: '#00000090',
    position: 'absolute',
    width: '18px',
    height: '18px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000',
  },
  bridgeTop: {
    top: '20.5px',
    left: '42.5px',
  },
  bridgeLeft: {
    top: '43px',
    left: '20.5px',
  },
  bridgeCenter: {
    top: '43px',
    left: '42.5px',
  },
  bridgeRight: {
    top: '43px',
    left: '64.5px',
  },
  bridgeBottom: {
    top: '65px',
    left: '42.5px',
  },
})