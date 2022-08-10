import { Text, View } from "@react-pdf/renderer"
import { StyleSheet } from '@react-pdf/renderer';

export const NameActive = ({ consultant }) => {

  const { name, lastName, scdLastName } = consultant

  const names = name.split(' ')

  const ungroupNames = names.map(el => {
    return {
      name: consultant.getUngroupName(el),
      values: consultant.getUngroupNameValues(el),
      total: consultant.getUngroupNameTotal(el)
    }
  })

  const ungroupLast = consultant.getUngroupName(lastName)
  const ungroupLastV = consultant.getUngroupNameValues(lastName)
  const ungroupLastT = consultant.getUngroupNameTotal(lastName)

  for (let index = ungroupLast.length; index < 28; index++) {
    ungroupLast.push([])
  }

  const ungroupSCDLast = consultant.getUngroupName(scdLastName)
  const ungroupSCDLastV = consultant.getUngroupNameValues(scdLastName)
  const ungroupSCDLastT = consultant.getUngroupNameTotal(scdLastName)

  for (let index = ungroupSCDLast.length; index < 28; index++) {
    ungroupSCDLast.push([])
  }

  const ungroupName = consultant.getUngroupName(name)
  const ungroupNameV = consultant.getUngroupNameValues(name)
  const ungroupNameT = consultant.getUngroupNameTotal(name)

  const row = (v, top = 0) => {
    return (
      <>
        {ungroupNames.map((ungroup, i) =>
          <View style={[pinnacleName.circle, { top: 14, left: (66 + i * 30) }]}>
            <Text>
              {ungroup.total[0].v}
            </Text>
          </View>
        )}
        <View style={[pinnacleName.circle, { top: 14, left: 123 }]}>
          <Text>
            {ungroupLastT[0].v}
          </Text>
        </View>
        <View style={[pinnacleName.circle, { top: 14, left: 150 }]}>
          <Text>
            {ungroupSCDLastT[0].v}
          </Text>
        </View>
        <View style={[pinnacleName.circle, { top: 14, left: 178 }]}>
          <Text>
            {consultant.calcSoulNumberFull()}
          </Text>
        </View>
        <View style={[pinnacleName.circle, { top: 14, left: 209 }]}>
          <Text>
            {consultant.calcSoulNumber()}{consultant.calcSoulNumberISK()}
          </Text>
        </View>
      </>
    )
  }

  return (
    <View style={pinnacleName.container}>
      <View style={pinnacleName.wrap}>
        {row()}
      </View>
      <Text>-</Text>
    </View>
  )
}

export const pinnacleName = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '465px',
    left: '14px',
    fontSize: '7px',
    width: '271px',
    // backgroundColor: 'red'
  },
  wrap: {
    position: 'relative'
  },
  circle: {
    // backgroundColor: '#00000090',
    position: 'absolute',
    width: '20px',
    height: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000',
    fontSize: '12px',
    top: '29px',
  },
  name: {
    left: '19px',
  },
  soul: {
    left: '90px',
  },
  soul_expresion: {
    left: '161px',
  },
})