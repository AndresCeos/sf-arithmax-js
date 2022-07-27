import { Text, View } from "@react-pdf/renderer"
import { pinnacleName } from "./styles"

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
          <Text style={PinnacleName.title}>Nombre</Text>
          <Text style={pinnacleName.circle}>
            {consultant.calcName()}{consultant.calcNameISK()}
          </Text>
        </View>
        <View style={pinnacleName.item}>
          <Text style={PinnacleName.title}>Alma</Text>
          <Text style={pinnacleName.circle}>
            {consultant.calcSoulNumber()}{consultant.calcSoulNumberISK()}
          </Text>
        </View>
        <View style={pinnacleName.item}>
          <Text style={PinnacleName.title}>Expresión</Text>
          <Text style={pinnacleName.circle}>
            {consultant.calcSoulExpresion()}{consultant.calcSoulExpresionISK()}
          </Text>
        </View>
        <View style={pinnacleName.item}>
          <Text style={PinnacleName.title}>Madurez</Text>
          <Text style={pinnacleName.circle}>
            {consultant.calcMaturity()}{consultant.calcMaturityISK()}
          </Text>
        </View>
      </View>
    </View>
  )
}
