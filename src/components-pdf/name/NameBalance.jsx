import { StyleSheet, Text, View } from '@react-pdf/renderer'

export const NameBalance = ({ consultant }) => {
  const appearances = consultant.getAppearances()

  const balanceExistential = {
    'Plano Físico': {
      v: appearances[4].a + appearances[5].a,
      c: '#de6363',
      cT: 'text-red',
      d: '(Valores 4/22 y 5)'
    },
    'Plano Mental': {
      v: appearances[1].a + appearances[8].a,
      c: '#51A133 ',
      cT: 'text-green',
      d: '(Valores 1 y 8)'
    },
    'Plano Emocional': {
      v: appearances[2].a + appearances[3].a + appearances[6].a,
      c: '#31FFFF',
      cT: 'text-blue',
      d: '(Valores 2/11, 3 y 6)'
    },
    'Plano Espiritual': {
      v: appearances[7].a + appearances[9].a,
      c: '#69306',
      cT: 'text-main',
      d: '(Valores 7 y 9)'
    },
  }

  return (
    <View style={pinnacleName.container}>
      <View style={pinnacleName.wrap}>
        <View style={[pinnacleName.table, { top: 478, left: 262, display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }]}>
          {Object.entries(balanceExistential).map((el, i, a) => (
            <View key={i} style={{ textAlign: 'center' }}>
              <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ textAlign: 'center', fontSize: 12, marginRight: 10, marginBottom: 5 }}>
                  {el[1].v}
                </Text>
              </View>
              <Text style={{ textAlign: 'center', fontSize: 6, marginTop: 10 }} />
              <Text style={{ textAlign: 'center', fontSize: 6 }} />
            </View>
          ))}
        </View>
      </View>
      <Text>-</Text>
    </View>
  )
}

export const pinnacleName = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '16px',
    left: '35px',
    fontSize: '7px',
    width: '348px',
  },
  wrap: {
    position: 'relative'
  },
  table: {

    position: 'relative',
    transform: 'rotate(-90deg)',
  }
});