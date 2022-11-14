import { StyleSheet, Text, View } from '@react-pdf/renderer';
import moment from 'moment/min/moment-with-locales';
moment.locale('es-mx')

export const LifePathDialogs = ({ consultant, now }) => {
  const newDate = now
  const now2 = moment()

  return (
    <View style={lifePathDialogs.container}>
      <View style={[lifePathDialogs.wrap]}>
        <View style={[lifePathDialogs.item, lifePathDialogs.top]}>
          <Text>{consultant.getSumHierarchy(consultant.getB(), consultant.getLifeStage(newDate.year()))}</Text>
        </View>
        <View style={[lifePathDialogs.item, lifePathDialogs.left]}>
          <Text>{consultant.getB()}</Text>
        </View>
        <View style={[lifePathDialogs.item, lifePathDialogs.right]}>
          <Text>{consultant.getLifeStage(newDate.year())}</Text>
        </View>
        <View style={[lifePathDialogs.item, lifePathDialogs.bottom]}>
          <Text>{consultant.getResHierarchy(consultant.getB(), consultant.getLifeStage(newDate.year()))}</Text>
        </View>
      </View>
      <View style={[lifePathDialogs.wrap, lifePathDialogs.wrap_2]}>
        <View style={[lifePathDialogs.item, lifePathDialogs.top]}>
          <Text>{consultant.getSumHierarchy(consultant.getLifeStage(newDate.year()), consultant.calcPersonalYear(newDate.year()))}</Text>
        </View>
        <View style={[lifePathDialogs.item, lifePathDialogs.left]}>
          <Text>{consultant.getLifeStage(newDate.year())}</Text>
        </View>
        <View style={[lifePathDialogs.item, lifePathDialogs.right]}>
          <Text>{consultant.calcPersonalYear(newDate.year())}</Text>
        </View>
        <View style={[lifePathDialogs.item, lifePathDialogs.bottom]}>
          <Text>{consultant.getResHierarchy(consultant.getLifeStage(newDate.year()), consultant.calcPersonalYear(newDate.year()))}</Text>
        </View>
      </View>
      <View style={[lifePathDialogs.wrap, lifePathDialogs.wrap_3]}>
        <View style={[lifePathDialogs.item, lifePathDialogs.top]}>
          <Text>{consultant.getSumHierarchy(consultant.calcPersonalYear(newDate.year()), consultant.calcCurrentQuater(newDate, newDate.year()))}</Text>
        </View>
        <View style={[lifePathDialogs.item, lifePathDialogs.left]}>
          <Text>{consultant.calcPersonalYear(newDate.year())}</Text>
        </View>
        <View style={[lifePathDialogs.item, lifePathDialogs.right]}>
          <Text>{consultant.calcCurrentQuater(newDate, newDate.year())}</Text>
        </View>
        <View style={[lifePathDialogs.item, lifePathDialogs.bottom]}>
          <Text>{consultant.getResHierarchy(consultant.calcPersonalYear(newDate.year()), consultant.calcCurrentQuater(newDate, newDate.year()))}</Text>
        </View>
      </View>
      <View style={[lifePathDialogs.wrap, lifePathDialogs.wrap_4]}>
        <View style={[lifePathDialogs.item, lifePathDialogs.top]}>
          <Text>{consultant.getSumHierarchy(consultant.calcCurrentQuater(newDate, newDate.year()), consultant.calcPersonalMonth(newDate.month() + 1, newDate.year()))}</Text>
        </View>
        <View style={[lifePathDialogs.item, lifePathDialogs.left]}>
          <Text>{consultant.calcCurrentQuater(newDate, newDate.year())}</Text>
        </View>
        <View style={[lifePathDialogs.item, lifePathDialogs.right]}>
          <Text>{consultant.calcPersonalMonth(newDate.month() + 1, newDate.year())}</Text>
        </View>
        <View style={[lifePathDialogs.item, lifePathDialogs.bottom]}>
          <Text>{consultant.getResHierarchy(consultant.calcCurrentQuater(newDate, newDate.year()), consultant.calcPersonalMonth(newDate.month() + 1, newDate.year()))}</Text>
        </View>
      </View>
      <View style={[lifePathDialogs.wrap, lifePathDialogs.wrap_5]}>
        <View style={[lifePathDialogs.item, lifePathDialogs.top]}>
          <Text>{consultant.getSumHierarchy(consultant.calcPersonalMonth(newDate.month() + 1, newDate.year()), consultant.calcPersonalWeek(newDate.date(), newDate.month() + 1, newDate.year()))}</Text>
        </View>
        <View style={[lifePathDialogs.item, lifePathDialogs.left]}>
          <Text>{consultant.calcPersonalMonth(newDate.month() + 1, newDate.year())}</Text>
        </View>
        <View style={[lifePathDialogs.item, lifePathDialogs.right]}>
          <Text>{consultant.calcPersonalWeek(newDate.date(), newDate.month() + 1, newDate.year())}</Text>
        </View>
        <View style={[lifePathDialogs.item, lifePathDialogs.bottom]}>
          <Text>{consultant.getResHierarchy(consultant.calcPersonalMonth(newDate.month() + 1, newDate.year()), consultant.calcPersonalWeek(newDate.date(), newDate.month() + 1, newDate.year()))}</Text>
        </View>
      </View>
    </View>
  )
}

export const lifePathDialogs = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '576px',
    left: '11px',
    fontSize: '7px',
    width: '531px',
    backgroundColor: 'red'
  },
  wrap: {
    position: 'relative'
  },
  item: {
    position: 'absolute',
    // backgroundColor: 'red',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20px',
    height: '20px',
    fontSize: '11px'
  },
  top: {
    top: '25px',
    left: '37px'
  },
  left: {
    top: '46px',
    left: '14px'
  },
  right: {
    top: '46px',
    left: '58px'
  },
  bottom: {
    top: '70px',
    left: '37px'
  },
  wrap_2: {
    left: '104px',
  },
  wrap_3: {
    left: '218px',
  },
  wrap_4: {
    left: '317px',
  },
  wrap_5: {
    left: '423px',
  },
})