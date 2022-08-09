import { Text, View, StyleSheet } from "@react-pdf/renderer"

export const LifePathQuarters = ({ consultant }) => {
  return (
    <View style={lifePath.container}>
      <View style={lifePath.wrap}>
        <View style={lifePath.personalYears}>
          <View style={lifePath.itemWrap}>
            <View style={lifePath.item}>
              <Text>-</Text>
            </View>
            <View style={lifePath.year}>
              <Text>-</Text>
            </View>
          </View>
          <View style={lifePath.itemWrap}>
            <View style={lifePath.item}>
              <Text>-</Text>
            </View>
            <View style={lifePath.year}>
              <Text>-</Text>
            </View>
          </View>
          <View style={lifePath.itemWrap}>
            <View style={lifePath.item}>
              <Text>-</Text>
            </View>
            <View style={lifePath.year}>
              <Text>-</Text>
            </View>
          </View>
          <View style={lifePath.itemWrap}>
            <View style={lifePath.item}>
              <Text>-</Text>
            </View>
            <View style={lifePath.year}>
              <Text>-</Text>
            </View>
          </View>
          <View style={lifePath.itemWrap}>
            <View style={lifePath.item}>
              <Text>-</Text>
            </View>
            <View style={lifePath.year}>
              <Text>-</Text>
            </View>
          </View>
          <View style={lifePath.itemWrap}>
            <View style={lifePath.item}>
              <Text>-</Text>
            </View>
            <View style={lifePath.year}>
              <Text>-</Text>
            </View>
          </View>
          <View style={lifePath.itemWrap}>
            <View style={lifePath.item}>
              <Text>-</Text>
            </View>
            <View style={lifePath.year}>
              <Text>-</Text>
            </View>
          </View>
          <View style={lifePath.itemWrap}>
            <View style={lifePath.item}>
              <Text>-</Text>
            </View>
            <View style={lifePath.year}>
              <Text>-</Text>
            </View>
          </View>
          <View style={lifePath.itemWrap}>
            <View style={lifePath.item}>
              <Text>-</Text>
            </View>
            <View style={lifePath.year}>
              <Text>-</Text>
            </View>
          </View>
          <View style={lifePath.itemWrap}>
            <View style={lifePath.item}>
              <Text>-</Text>
            </View>
            <View style={lifePath.year}>
              <Text>-</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}


export const lifePath = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '339px',
    left: '11px',
    fontSize: '7px',
    width: '533px',
    backgroundColor: 'red'
  },
  wrap: {
    position: 'relative'
  },
  personalYears: {
    position: 'absolute',
    left: '173px',
    width: '317px',
    top: '12px',
    // backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  item: {
    width: '20px',
    height: '20px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '12px',
    backgroundColor: '#BEE1D1',
  },
  year: {
    width: '20px',
    height: '12px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '8px',
    // backgroundColor: 'red'
  }
})