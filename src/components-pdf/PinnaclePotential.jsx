import { Text, View } from "@react-pdf/renderer"
import {StyleSheet} from '@react-pdf/renderer';

export const PinnaclePotential = ({consultant}) => {
  return (
    <View style={pinnaclePotential.container}>
      <View style={pinnaclePotential.bar}>
        <Text>
          Potencial Frecuencial
        </Text>
      </View>
      <View style={pinnaclePotential.wrap}>
        <View style={pinnaclePotential.item}>
          <Text style={pinnaclePotential.title}>Reacción</Text>
          <View style={pinnaclePotential.circle}>
            <Text>{consultant.calcName()}{consultant.calcNameISK()}*</Text>
          </View>
        </View>
        <View style={pinnaclePotential.item}>
          <Text style={pinnaclePotential.title}>Síntesis</Text>

          <View style={pinnaclePotential.circle}>
            <Text>5*</Text>
          </View>
        </View>
        <View style={pinnaclePotential.item}>
          <Text style={pinnaclePotential.title}>Regalo</Text>

          <View style={pinnaclePotential.circle}>
            <Text>5*</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export const pinnaclePotential = StyleSheet.create({
  container:{
    position: 'absolute',
    top:'10px',
    left:'290px',
    fontSize: '7px',
    width: '240px',
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
    flexDirection: 'row'
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
    width:'23px',
    height:'23px',
    backgroundColor:'#B28FD64d',
    border:'1px',
    borderColor:'#B28FD6',
    borderRadius:'25px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize:'12px',
    fontWeight: 'bold',
    padding: '1.5px 0',
  },
})