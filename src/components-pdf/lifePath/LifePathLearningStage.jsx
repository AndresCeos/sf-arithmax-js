import { Text, View, StyleSheet } from "@react-pdf/renderer"

export const LifePathLearningStage = ({ consultant }) => {
  return (
    <View style={lifePath.container}>
      <View style={lifePath.wrap}>
        <View style={lifePath.lifeStage}>
          <View style={lifePath.lifeStageItem}>
            <Text>1</Text>
          </View>
          <View style={lifePath.lifeStageItem}>
            <Text>1</Text>
          </View>
          <View style={lifePath.lifeStageItem}>
            <Text>1</Text>
          </View>
          <View style={lifePath.lifeStageItem}>
            <Text>1</Text>
          </View>
          <View style={lifePath.lifeStageItem}>
            <Text>1</Text>
          </View>
          <View style={lifePath.lifeStageItem}>
            <Text>1</Text>
          </View>
          <View style={lifePath.lifeStageItem}>
            <Text>1</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export const lifePath = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '186px',
    left: '11px',
    fontSize: '7px',
    width: '533px',
    backgroundColor: 'red'
  },
  wrap: {
    position: 'relative'
  },
  lifeStage: {
    position: 'absolute',
    left: '171px',
    width: '323px',
    top: '22px',
    // backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  lifeStageItem: {
    width: '30px',
    height: '30px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '12px'
  }
})