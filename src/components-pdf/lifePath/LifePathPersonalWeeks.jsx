import { StyleSheet, Text, View } from '@react-pdf/renderer';
import moment from 'moment/min/moment-with-locales';
import { capitalize } from '../../resources';
moment.locale('es-mx')

export const LifePathPersonalWeeks = ({ consultant, now }) => {
  const newDate = now
  const now2 = moment()
  const listOfMonths = consultant.getCustomMonths()
  const allMonth = consultant.getAllMonths()
  const allMonthE = consultant.getAllMonthsEnglish()

  const monthIndex = allMonthE.findIndex(i => i === newDate.format('MMMM'))
  const actualMonth = allMonth[monthIndex]
  const currentMonth = listOfMonths.findIndex(i => i === capitalize(actualMonth))
  const currentMonthName = capitalize(listOfMonths[currentMonth])

  return (
    <View style={lifePath.container}>
      <View style={lifePath.wrap}>
        <View style={lifePath.personalYears}>
          <View style={lifePath.itemWrap}>
            <View style={[lifePath.item, { backgroundColor: `${now.date() >= 1 && now.date() < 8 ? '#52B8C8' : '#C3E9EA'}` }]}>
              <Text>{consultant.calcSelectPersonalWeek(newDate.month() + 1, 1, newDate.year())}{consultant.calcSelectPersonalWeekISK(newDate.month() + 1, 1, newDate.year())}</Text>
            </View>
            <View style={lifePath.year}>
              <Text>1-7 {currentMonthName}</Text>
            </View>
          </View>
          <View style={lifePath.itemWrap}>
            <View style={[lifePath.item, { backgroundColor: `${now.date() > 7 && now.date() < 15 ? '#52B8C8' : '#C3E9EA'}` }]}>
              <Text>{consultant.calcSelectPersonalWeek(newDate.month() + 1, 2, newDate.year())}{consultant.calcSelectPersonalWeekISK(newDate.month() + 1, 2, newDate.year())}</Text>
            </View>
            <View style={lifePath.year}>
              <Text>8-14 {currentMonthName}</Text>
            </View>
          </View>
          <View style={lifePath.itemWrap}>
            <View style={[lifePath.item, { backgroundColor: `${now.date() > 14 && now.date() < 22 ? '#52B8C8' : '#C3E9EA'}` }]}>
              <Text>{consultant.calcSelectPersonalWeek(newDate.month() + 1, 3, newDate.year())}{consultant.calcSelectPersonalWeekISK(newDate.month() + 1, 3, newDate.year())}</Text>
            </View>
            <View style={lifePath.year}>
              <Text>15-21 {currentMonthName}</Text>
            </View>
          </View>
          <View style={lifePath.itemWrap}>
            <View style={[lifePath.item, { backgroundColor: `${now.date() > 21 ? '#52B8C8' : '#C3E9EA'}` }]}>
              <Text>{consultant.calcSelectPersonalWeek(newDate.month() + 1, 4, newDate.year())}{consultant.calcSelectPersonalWeekISK(newDate.month() + 1, 4, newDate.year())}</Text>
            </View>
            <View style={lifePath.year}>
              <Text>22-{moment(now).endOf('month').format('DD')} {currentMonthName}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}


export const lifePath = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '485px',
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
    backgroundColor: '#C3E9EA',
  },
  year: {
    position: 'absolute',
    top: '20px',
    left: '-20px',
    width: '65px',
    height: '12px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '8px',
    textAlign: 'center',
    // backgroundColor: 'red'
  }
})