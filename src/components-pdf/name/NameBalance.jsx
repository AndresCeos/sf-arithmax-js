import { Text, View } from "@react-pdf/renderer"
import { StyleSheet } from '@react-pdf/renderer';

export const NameBalance = ({ consultant }) => {

  const appearances = consultant.getAppearances()

  const balanceExistential = {
    'Plano Físico': {
      v: appearances[4].a + appearances[5].a,
      c: 'bg-red border-red',
      cT: 'text-red',
      d: '(Valores 4/22 y 5)'
    },
    'Plano Mental': {
      v: appearances[1].a + appearances[8].a,
      c: 'bg-green border-green',
      cT: 'text-green',
      d: '(Valores 1 y 8)'
    },
    'Plano Emocional': {
      v: appearances[2].a + appearances[3].a + appearances[6].a,
      c: 'bg-blue-30 border-blue',
      cT: 'text-blue',
      d: '(Valores 2/11, 3 y 6)'
    },
    'Plano Espiritual': {
      v: appearances[7].a + appearances[9].a,
      c: 'bg-main-40 border-main',
      cT: 'text-main',
      d: '(Valores 7 y 9)'
    },
  }

  return (
    <View style={pinnacleName.container}>
      <View style={pinnacleName.wrap}>
        <View style={[pinnacleName.table, { top: 478, left: 262, display: 'flex', flexDirection: 'row', justifyContent: "space-around" }]}>
          {Object.entries(balanceExistential).map((el, i, a) =>
            <View key={i} style={{ textAlign: "center" }}>
              <View style={{ display: 'flex', alignItems: 'center', justifyContent: "center" }}>
                <Text style={{ textAlign: "center", fontSize: 12 }}>
                  {el[1].v}
                </Text>
              </View>
              <Text style={{ textAlign: "center", fontSize: 6, marginTop: 10 }}>
                {el[1].d}
              </Text>
              <Text style={{ textAlign: "center", fontSize: 6 }}>
                {el[0]}
              </Text>
            </View>
          )}
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
    backgroundColor: '#ff000012',
    position: 'relative',
    transform: 'rotate(-90deg)',
  }
});