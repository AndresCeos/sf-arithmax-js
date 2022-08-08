import { Text, View, StyleSheet } from "@react-pdf/renderer"

export const LifePath9Years = ({ consultant }) => {
  return (
    <View style={lifePath.container}>
      <View style={lifePath.wrap}>
        <View style={[lifePath.item, lifePath.currentYear]}>
          <Text>2022</Text>
        </View>
        <View style={[lifePath.year, lifePath.currentYear_1]}>
          <Text>2013</Text>
        </View>
        <View style={[lifePath.year, lifePath.currentYear_2]}>
          <Text>2022</Text>
        </View>
        <View style={[lifePath.year, lifePath.currentYear_3]}>
          <Text>2031</Text>
        </View>
        <View style={[lifePath.year, lifePath.currentYear_4]}>
          <Text>2040</Text>
        </View>
        <View style={[lifePath.item, lifePath.currentYearVibration]}>
          <Text>Año 1</Text>
        </View>
        <View style={[lifePath.circle, lifePath.currentYearVibration_1]}>
          <Text>1</Text>
        </View>
        <View style={[lifePath.circle, lifePath.currentYearVibration_2]}>
          <Text>1</Text>
        </View>
        <View style={[lifePath.circle, lifePath.currentYearVibration_3]}>
          <Text>1</Text>
        </View>
        <View style={[lifePath.circle, lifePath.currentYearVibration_4]}>
          <Text>1</Text>
        </View>
        <View style={[lifePath.phrase, lifePath.currentYearPhrase]}>
          <Text>Autonomía Independencia</Text>
        </View>
        <View style={[lifePath.phrase, lifePath.currentYearPhrase_1]}>
          <Text>Autonomía Independencia</Text>
        </View>
        <View style={[lifePath.phrase, lifePath.currentYearPhrase_2]}>
          <Text>Autonomía Independencia</Text>
        </View>
        <View style={[lifePath.phrase, lifePath.currentYearPhrase_3]}>
          <Text>Autonomía Independencia</Text>
        </View>
        <View style={[lifePath.phrase, lifePath.currentYearPhrase_4]}>
          <Text>Autonomía Independencia</Text>
        </View>
        <Text>-</Text>
      </View>
    </View>
  )
}

export const lifePath = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '24px',
    left: '10px',
    fontSize: '7px',
    width: '533px',
    // backgroundColor: 'red'
  },
  wrap: {
    position: 'relative'
  },
  item: {
    position: 'absolute',
    // backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  year: {
    position: 'absolute',
    // backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    position: 'absolute',
    // backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20px',
    height: '20px',
    fontSize: '12px',
  },
  phrase: {
    position: 'absolute',
    // backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: '8px',
  },
  currentYear: {
    left: '25px',
    top: '23px',
    width: '50px',
  },
  currentYear_1: {
    top: '31px',
    left: '116px',
    width: '22px',
  },
  currentYear_2: {
    top: '31px',
    left: '217px',
    width: '22px',
  },
  currentYear_3: {
    top: '31px',
    left: '317px',
    width: '22px',
  },
  currentYear_4: {
    top: '31px',
    left: '415px',
    width: '22px',
  },
  currentYearVibration: {
    left: '21px',
    top: '43px',
    width: '50px',
    height: '19px',
    fontSize: '12px'
  },
  currentYearVibration_1: {
    top: '41px',
    left: '116px',
  },
  currentYearVibration_2: {
    top: '41px',
    left: '217px',
  },
  currentYearVibration_3: {
    top: '41px',
    left: '317px',
  },
  currentYearVibration_4: {
    top: '41px',
    left: '415px',
  },
  currentYearPhrase: {
    top: '85px',
    left: '21px',
    width: '50px',
  },
  currentYearPhrase_1: {
    top: '101px',
    left: '102px',
    width: '50px',
  },
  currentYearPhrase_2: {
    top: '85px',
    left: '203px',
    width: '50px',
  },
  currentYearPhrase_3: {
    top: '101px',
    left: '303px',
    width: '50px',
  },
  currentYearPhrase_4: {
    top: '85px',
    left: '401px',
    width: '50px',
  },
})