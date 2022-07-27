import { Text, View } from "@react-pdf/renderer"
import { pinnaclePotential } from "./styles"

export const PinnaclePotential = ({consultant}) => {
  return (
    <View style={pinnaclePotential.container}>
      <View style={pinnaclePotential.bar}>
        <Text>
          Potencial Frecuencial
        </Text>
      </View>
      <View style={pinnaclePotential.wrap}>
        <View>
          <Text>Reacción</Text>
          <Text>{consultant.calcName()}{consultant.calcNameISK()}*</Text>
        </View>
        <View>
          <Text>Síntesis</Text>
          <Text>5*</Text>
        </View>
        <View>
          <Text>Regalo</Text>
          <Text>5*</Text>
        </View>
      </View>
    </View>
  )
}
