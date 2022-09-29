import { StyleSheet, Text, View } from '@react-pdf/renderer';

export const DestinityTable = ({ consultant, date, table, slice = 0, start = 0 }) => {
  const single = consultant.getSingle()
  return (
    <View style={pinnacleName.container}>
      <View style={pinnacleName.wrap}>
        <View style={[pinnacleName.table, { top: 288, left: -150 + (slice * 235) }]}>
          <View style={[pinnacleName.item, { paddingLeft: 8, width: 81, height: 15, backgroundColor: '#c2b3c2' }]}>
            <Text>
              Año
            </Text>
          </View>
          <View style={[pinnacleName.item, { paddingLeft: 8, width: 81, height: 15, backgroundColor: '#e5e5e5' }]}>
            <Text>
              Edad
            </Text>
          </View>
          <View style={[pinnacleName.item, { paddingLeft: 8, width: 81, height: 30, backgroundColor: '#ffffff' }]}>
            <Text>
              Plano Mental
            </Text>
          </View>
          <View style={[pinnacleName.item, { paddingLeft: 8, width: 81, height: 30, backgroundColor: '#ffffff' }]}>
            <Text>
              Plano Físico
            </Text>
          </View>
          <View style={[pinnacleName.item, { paddingLeft: 8, width: 81, height: 30, backgroundColor: '#ffffff' }]}>
            <Text>
              Plano Emocional
            </Text>
          </View>
          <View style={[pinnacleName.item, { paddingLeft: 8, width: 81, height: 25, backgroundColor: '#edd7eb' }]}>
            <Text>
              Plano Espiritual
            </Text>
          </View>
          <View style={[pinnacleName.item, { paddingLeft: 8, width: 81, height: 25, backgroundColor: '#ededed', marginTop: 10 }]}>
            <Text>
              Año Personal
            </Text>
          </View>
          <View style={[pinnacleName.item, { paddingLeft: 8, width: 81, height: 25, backgroundColor: '#ffffff' }]}>
            <Text>
              Núm. Destino
            </Text>
          </View>
          {table.map((el, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <View key={`${consultant.getYearOfBirth() + i + start}_${i}`} style={{ position: 'absolute', left: 81 + (i * 19), top: 0 }}>
              <View style={[pinnacleName.item, { width: 19, height: 15, backgroundColor: '#c2b3c2' }]}>
                <Text>
                  {consultant.getYearOfBirth() + i + start}
                </Text>
              </View>
              <View style={[pinnacleName.item, { width: 19, height: 15, backgroundColor: '#e5e5e5' }]}>
                <Text>
                  {i + start}
                </Text>
              </View>
              <View style={[pinnacleName.item, { width: 19, height: 15, backgroundColor: '#ffffff' }]}>
                <Text>
                  {el.pmC}
                </Text>
              </View>
              <View style={[pinnacleName.item, { width: 19, height: 16, fontSize: 6, backgroundColor: '#ffffff' }]}>
                <Text>
                  {el.pmN}/{el.pmD}
                </Text>
              </View>
              <View style={[pinnacleName.item, { width: 19, height: 15, backgroundColor: '#ffffff' }]}>
                <Text>
                  {el.pMC}
                </Text>
              </View>
              <View style={[pinnacleName.item, { width: 19, height: 16, fontSize: 6, backgroundColor: '#ffffff' }]}>
                <Text>
                  {el.pMN}/{el.pMD}
                </Text>
              </View>
              <View style={[pinnacleName.item, { width: 19, height: 15, backgroundColor: '#ffffff' }]}>
                <Text>
                  {single && el.pfC}
                </Text>
              </View>
              <View style={[pinnacleName.item, { width: 19, height: 16, fontSize: 6, backgroundColor: '#ffffff' }]}>
                <Text>
                  {single && `${el.pfN}/${el.pfD}`}
                </Text>
              </View>
              <View style={[pinnacleName.item, { width: 19, height: 25, backgroundColor: '#edd7eb' }]}>
                <Text>
                  {consultant.reduceNumber(el.pmD + el.pMD + (single ? el.pfN : 0))}
                </Text>
              </View>
              <View style={[pinnacleName.item, { width: 19, height: 25, backgroundColor: '#ededed', marginTop: 10 }]}>
                <Text>
                  {consultant.calcPersonalYear(consultant.getYearOfBirth() + i + start)}
                </Text>
              </View>
              <View style={[pinnacleName.item, { width: 19, height: 25, backgroundColor: '#ffffff' }]}>
                <Text>
                  {consultant.reduceNumber(el.pmD + el.pMD + (single ? el.pfD : 0) + consultant.calcPersonalYear(consultant.getYearOfBirth() + i + start))}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  )
}

export const pinnacleName = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '20px',
    left: '35px',
    fontSize: '7px',
    width: '536px',
    // backgroundColor: 'red'
  },
  wrap: {
    position: 'relative'
  },
  table: {
    position: 'relative',
    transform: 'rotate(-90deg)',
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
    border: '1px solid #7E7E7E',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: -1,
    marginLeft: -1,
  }
});