import { Text, View } from "@react-pdf/renderer"
import {StyleSheet} from '@react-pdf/renderer';

export const PinnacleName = ({consultant}) => {
  return (
    <View style={pinnacleName.container}>
      <View style={pinnacleName.bar}>
        <Text>
          Nombre
        </Text>
      </View>
      <View style={pinnacleName.wrap}>
        <View style={pinnacleName.item}>
          <Text style={pinnacleName.title}>
            Nombres
          </Text>
          <View style={pinnacleName.circle}>
            <Text>
              {consultant.calcName()}{consultant.calcNameISK()}
            </Text>
          </View>
        </View>
        <View style={pinnacleName.item}>
          <Text style={pinnacleName.title}>
            Alma
          </Text>
          <View style={pinnacleName.circle}>
            <View style={pinnacleName.main_circle}></View>
            <Text>
              {consultant.calcSoulNumber()}{consultant.calcSoulNumberISK()}
            </Text>
          </View>
        </View>
        <View style={pinnacleName.item}>
          <Text style={pinnacleName.title}>
            Expresión
          </Text>
          <View style={pinnacleName.circle}>
            <Text>
            {consultant.calcSoulExpresion()}{consultant.calcSoulExpresionISK()}
            </Text>
          </View>
        </View>
        <View style={pinnacleName.item}>
          <Text style={pinnacleName.title}>
            Madurez
          </Text>
          <View style={pinnacleName.circle}>
            <Text>
            {consultant.calcMaturity()}{consultant.calcMaturityISK()}
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export const pinnacleName = StyleSheet.create({
  container:{
    position: 'absolute',
    top:'10px',
    left:'10px',
    fontSize: '7px',
    width: '271px'
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
    width: '25%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px 0'
  },
  title: {
    fontSize: '8px',
    'marginRight': '3px',
    color: '#7E7E7E'
  },
  circle: {
    width:'23px',
    height:'23px',
    backgroundColor:'#056be24d',
    border:'1px',
    borderColor:'#056BE2',
    borderRadius:'25px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize:'12px',
    fontWeight: 'bold',
    padding: '1.5px 0',
  },
  main_circle: {
    minWidth: '27px',
    minHeight: '27px',
    border: '2px solid #E28A05',
    position: 'absolute',
    borderRadius:'25px',
    zIndex: 0
  }
})