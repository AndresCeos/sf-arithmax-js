import { Text, View, StyleSheet } from '@react-pdf/renderer'


export const PinnacleName = ({ consultant }) => {
  return (
    <View style={pinnacleName.container}>
      <View style={pinnacleName.wrap}>
        <View style={[pinnacleName.circle, pinnacleName.name]}>
          <Text>
            {consultant.calcName()}{consultant.calcNameISK()}
          </Text>
        </View>
        <View style={[pinnacleName.circle, pinnacleName.soul]}>
          <Text>
            {consultant.calcSoulNumber()}{consultant.calcSoulNumberISK()}
          </Text>
        </View>
        <View style={[pinnacleName.circle, pinnacleName.soul_expresion]}>
          <Text>
            {consultant.calcSoulExpresion()}{consultant.calcSoulExpresionISK()}
          </Text>
        </View>
        <View style={[pinnacleName.circle, pinnacleName.maturity]}>
          <Text>
            {consultant.calcMaturity()}{consultant.calcMaturityISK()}
          </Text>
        </View>
      </View>
    </View>
  )
}

export const pinnacleName = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    fontSize: '7px',
    width: '271px'
  },
  wrap: {
    position: 'relative'
  },
  circle: {
    // backgroundColor: '#00000090',
    position: 'absolute',
    width: '24px',
    height: '24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000',
    fontSize: '12px',
    top: '17px',
  },
  name: {
    left: '44px',
  },
  soul: {
    left: '100px',

  },
  soul_expresion: {
    left: '171px',

  },
  maturity: {
    left: '238px',

  },
})