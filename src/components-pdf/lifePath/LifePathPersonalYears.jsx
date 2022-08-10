import { Text, View, StyleSheet } from "@react-pdf/renderer"
import moment from 'moment/min/moment-with-locales'
moment.locale("es-mx")

export const LifePathPersonalYears = ({ consultant }) => {
  const newDate = moment()
  const cicle = [
    {
      vibration: consultant.calcPersonalYear(newDate.year() - 4),
      year: newDate.year() - 4
    },
    {
      vibration: consultant.calcPersonalYear(newDate.year() - 3),
      year: newDate.year() - 3
    },
    {
      vibration: consultant.calcPersonalYear(newDate.year() - 2),
      year: newDate.year() - 2
    },
    {
      vibration: consultant.calcPersonalYear(newDate.year() - 1),
      year: newDate.year() - 1
    },
    {
      vibration: consultant.calcPersonalYear(newDate.year()),
      year: newDate.year()
    },
    {
      vibration: consultant.calcPersonalYear(newDate.year() + 1),
      year: newDate.year() + 1
    },
    {
      vibration: consultant.calcPersonalYear(newDate.year() + 2),
      year: newDate.year() + 2
    },
    {
      vibration: consultant.calcPersonalYear(newDate.year() + 3),
      year: newDate.year() + 3
    },
    {
      vibration: consultant.calcPersonalYear(newDate.year() + 4),
      year: newDate.year() + 4
    },
    {
      vibration: consultant.calcPersonalYear(newDate.year() + 5),
      year: newDate.year() + 5
    },
  ]

  return (
    <View style={lifePath.container}>
      <View style={lifePath.wrap}>
        <View style={lifePath.personalYears}>
          {cicle.map((cicle, i) =>
            <>
              <View style={lifePath.itemWrap}>
                <View style={lifePath.item}>
                  <Text>{cicle.vibration}{consultant.calcPersonalYearISK(cicle.year)}</Text>
                </View>
                <View style={lifePath.year}>
                  <Text>{cicle.year}</Text>
                </View>
              </View>
            </>
          )}
        </View>
      </View>
    </View>
  )
}


export const lifePath = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '266px',
    left: '11px',
    fontSize: '7px',
    width: '533px',
    backgroundColor: 'red'
  },
  wrap: {
    position: 'relative'
  },
  personalYears: {
    position: 'absolute',
    left: '173px',
    width: '317px',
    top: '12px',
    // backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  item: {
    width: '20px',
    height: '20px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '12px',
    backgroundColor: '#D7BFD5',
    borderRadius: '4px'
  },
  year: {
    width: '20px',
    height: '12px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '8px',
    // backgroundColor: 'red'
  }
})