import { Text, View } from "@react-pdf/renderer"
import { StyleSheet } from '@react-pdf/renderer';

export const BridgeStage = ({ consultant }) => {
  return (
    <View style={pinnacleStage.container}>
      <View style={pinnacleStage.bar}>
        <Text>
          Puentes por Etapa
        </Text>
      </View>
      <View style={pinnacleStage.wrap}>
        <View style={pinnacleStage.bridge}>
          <View style={pinnacleStage.bridgeTitle}>
            <Text>
              Puente 1
            </Text>
          </View>
          <View style={pinnacleStage.bridgeContainer}>
            <View style={pinnacleStage.bridgeTop}>
              <Text style={pinnacleStage.demo}>
                {consultant.getE()}{consultant.getEISK()}
              </Text>
            </View>
            <View style={pinnacleStage.demo}>
              <Text style={pinnacleStage.demo}>
                {consultant.getA()}
              </Text>
            </View>
            <View style={pinnacleStage.demo}>
              <Text style={pinnacleStage.demo}>
                {Math.abs(consultant.getE() - consultant.getK())}
              </Text>
            </View>
            <View style={pinnacleStage.demo}>
              <Text style={pinnacleStage.demo}>
                {consultant.getB()}{consultant.getBISK()}
              </Text>
            </View>
            <View style={pinnacleStage.demo}>
              <Text style={pinnacleStage.demo}>
                {consultant.getK()}
              </Text>
            </View>
          </View>
        </View>
        <View style={pinnacleStage.demo}>
          <View style={pinnacleStage.demo}>
            0 - {consultant.calcLifeStageDuration(1) - consultant.birthDate.year()} años
          </View>
          <View style={pinnacleStage.demo}>
            0 - {consultant.calcDoubleLifeStageDuration(1) - consultant.birthDate.year()} años
          </View>
        </View>
      </View>
    </View>
  )
}

export const pinnacleStage = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '63px',
    left: '290px',
    fontSize: '7px',
    width: '100px',
  },
  bar: {
    backgroundColor: '#000',
    fontWeight: 'bold',
    color: '#fff',
    padding: '3px',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px'
  },
  wrap: {
    border: '1px solid gray',
    borderBottomRightRadius: '5px',
    borderBottomLeftRadius: '5px',
    borderTopWidth: 0,
    display: 'flex',
    flexDirection: 'row',
    height: '445px'
  },
  bridge: {

  },
  bridgeTitle: {
    width: '100%',
    textAlign: 'center',
    fontSize: '10px',
    fontWeight: 'bold'
  },
  bridgeContainer: {
    width: '100%',
    backgroundColor: 'red',
    display: 'grid',
    flexDirection: "row",
    alignSelf: "stretch",
    flexShrink: 0
  },
  bridgeTop: {
    gridArea: '1 / 2 / 2 / 3'
  },
  bridgeLeft: {
    gridArea: '2 / 1 / 3 / 2'
  },
  bridgeCenter: {
    gridArea: '3 / 2 / 4 / 3'
  },
  bridgeRight: {
    gridArea: '2 / 3 / 3 / 4'
  },
  bridgeBottom: {
    gridArea: '2 / 2 / 3 / 3'
  },
  item: {
    width: '33%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4px 0'
  },
  title: {
    fontSize: '8px',
    'marginRight': '3px',
    color: '#7E7E7E'
  },
  circle: {
    width: '23px',
    height: '23px',
    backgroundColor: '#B28FD64d',
    border: '1px',
    borderColor: '#B28FD6',
    borderRadius: '25px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '12px',
    fontWeight: 'bold',
    padding: '1.5px 0',
  },
})