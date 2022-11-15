import { StyleSheet, Text, View } from '@react-pdf/renderer'

export const PinnaclePotential = ({ consultant }) => {
  return (
    <View style={pinnaclePotential.container}>
      <View style={pinnaclePotential.wrap}>
        <View style={[pinnaclePotential.circle, pinnaclePotential.reaction]}>
          <Text>{consultant.calcReaction()}{consultant.calcReactionISK()}*</Text>
        </View>
        <View style={[pinnaclePotential.circle, pinnaclePotential.synthesis]}>
          <Text>{consultant.calcSynthesis()}{consultant.calcSynthesisISK()}</Text>
        </View>
        <View style={[pinnaclePotential.circle, pinnaclePotential.gift]}>
          <Text>{consultant.calcGift()}{consultant.calcGiftISK()}</Text>
        </View>
      </View>
    </View>
  )
}

export const pinnaclePotential = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    position: 'absolute',
    top: '10px',
    left: '290px',
    fontSize: '7px',
    width: '240px',
  },
  wrap: {
    position: 'relative',
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

  reaction: {
    left: '53px'
  },
  synthesis: {
    left: '137px'
  },
  gift: {
    left: '215px'
  },
  // container: {
  //   position: 'absolute',
  //   top: '10px',
  //   left: '290px',
  //   fontSize: '7px',
  //   width: '240px',
  // },
  // bar: {
  //   backgroundColor: '#000',
  //   fontWeight: 'bold',
  //   color: '#fff',
  //   padding: '3px',
  //   borderTopLeftRadius: '5px',
  //   borderTopRightRadius: '5px'
  // },
  // wrap: {
  //   border: '1px solid gray',
  //   borderBottomRightRadius: '5px',
  //   borderBottomLeftRadius: '5px',
  //   borderTopWidth: 0,
  //   display: 'flex',
  //   flexDirection: 'row'
  // },
  // item: {
  //   width: '33%',
  //   display: 'flex',
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   padding: '4px 0'
  // },
  // title: {
  //   fontSize: '8px',
  //   'marginRight': '3px',
  //   color: '#7E7E7E'
  // },
  // circle: {
  //   width: '23px',
  //   height: '23px',
  //   backgroundColor: '#B28FD64d',
  //   border: '1px',
  //   borderColor: '#B28FD6',
  //   borderRadius: '25px',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   fontSize: '12px',
  //   fontWeight: 'bold',
  //   padding: '1.5px 0',
  // },
})