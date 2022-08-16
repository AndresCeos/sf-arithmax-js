import { Text, View } from "@react-pdf/renderer"
import { StyleSheet } from '@react-pdf/renderer';
import { Person } from '../../resources/Person'

export const CreateBreakdown = ({ consultant }) => {
  const createNameData = {
    name: `${consultant.name} ${consultant.lastName} ${consultant.scdLastName}`,
    lastName: '',
    scdLastName: '',
    birthDate: consultant.birthDate,
  }
  const createNameObj = new Person(createNameData)
  const ungroupName = createNameObj.getUngroupName(createNameData.name)

  let ungroup = []
  let split = 28
  let tables = 0;
  let count = 0;
  do {
    count = (tables + 1) * split
    const ungroupNameI = ungroupName.slice(tables * split, count);
    while (ungroupNameI.length < 28) {
      ungroupNameI.push({})
    }
    ungroup = [
      ...ungroup,
      {
        ungroupNameI,
      }
    ]
    console.log(tables * split, count)
    tables++
  } while (count < ungroupName.length)

  const table = (name) => {
    console.log(name)
    return name.map((el, i) =>
      <>
        <View style={[pinnacleName.circle, { top: 16, left: 33 + (i * 14) }]}>
          <Text>
            {el.v !== 0 ? el.v : ''}
          </Text>
        </View>
        <View style={[pinnacleName.circle, { top: 30, left: 33 + (i * 14) }]}>
          <Text>
            {el.L}
          </Text>
        </View>
        <View style={[pinnacleName.circle, { top: 44, left: 33 + (i * 14) }]}>
          <Text>
            {el.c !== 0 ? el.c : ''}
          </Text>
        </View>
      </>
    )
  }

  return (
    <View style={pinnacleName.container}>
      <View style={pinnacleName.wrap}>
        {
          ungroup.map(group => { table(group.ungroupNameI) }
          )
        }
      </View>
      <Text>xd</Text>
    </View>
  )
}

export const pinnacleName = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '360px',
    left: '17px',
    fontSize: '7px',
    width: '271px',
    backgroundColor: 'red'
  },
  wrap: {
    position: 'relative'
  },
  circle: {
    backgroundColor: '#0000ff90',
    position: 'absolute',
    width: '20px',
    height: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000',
    fontSize: '12px',
    top: '63px',
    left: 53,
  },
})