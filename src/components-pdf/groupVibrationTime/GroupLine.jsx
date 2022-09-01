import { View, Text, StyleSheet } from "@react-pdf/renderer"

export const GroupLine = ({ groupConsultant, newDate }) => {

  return (
    <View style={lifePathDialogs.container}>
      <View style={[lifePathDialogs.wrap]}>
        <View style={[lifePathDialogs.item, lifePathDialogs.top]}>
          <Text>{groupConsultant.getSumHierarchy(groupConsultant.getB(), groupConsultant.getLifeStage(newDate.year()))}</Text>
        </View>
        <View style={[lifePathDialogs.item, lifePathDialogs.left]}>
          <Text>{groupConsultant.getB()}</Text>
        </View>
        <View style={[lifePathDialogs.item, lifePathDialogs.right]}>
          <Text>{groupConsultant.getLifeStage(newDate.year())}</Text>
        </View>
        <View style={[lifePathDialogs.item, lifePathDialogs.bottom]}>
          <Text>{groupConsultant.getResHierarchy(groupConsultant.getB(), groupConsultant.getLifeStage(newDate.year()))}</Text>
        </View>
      </View>
      <View style={[lifePathDialogs.wrap, lifePathDialogs.wrap_2]}>
        <View style={[lifePathDialogs.item, lifePathDialogs.top]}>
          <Text>{groupConsultant.getSumHierarchy(groupConsultant.getLifeStage(newDate.year()), groupConsultant.calcPersonalYear(newDate.year()))}</Text>
        </View>
        <View style={[lifePathDialogs.item, lifePathDialogs.left]}>
          <Text>{groupConsultant.getLifeStage(newDate.year())}</Text>
        </View>
        <View style={[lifePathDialogs.item, lifePathDialogs.right]}>
          <Text>{groupConsultant.calcPersonalYear(newDate.year())}</Text>
        </View>
        <View style={[lifePathDialogs.item, lifePathDialogs.bottom]}>
          <Text>{groupConsultant.getResHierarchy(groupConsultant.getLifeStage(newDate.year()), groupConsultant.calcPersonalYear(newDate.year()))}</Text>
        </View>
      </View>
      <View style={[lifePathDialogs.wrap, lifePathDialogs.wrap_3]}>
        <View style={[lifePathDialogs.item, lifePathDialogs.top]}>
          <Text>{groupConsultant.getSumHierarchy(groupConsultant.calcPersonalYear(newDate.year()), groupConsultant.calcCurrentQuater(newDate, newDate.year()))}</Text>
        </View>
        <View style={[lifePathDialogs.item, lifePathDialogs.left]}>
          <Text>{groupConsultant.calcPersonalYear(newDate.year())}</Text>
        </View>
        <View style={[lifePathDialogs.item, lifePathDialogs.right]}>
          <Text>{groupConsultant.calcCurrentQuater(newDate, newDate.year())}</Text>
        </View>
        <View style={[lifePathDialogs.item, lifePathDialogs.bottom]}>
          <Text>{groupConsultant.getResHierarchy(groupConsultant.calcPersonalYear(newDate.year()), groupConsultant.calcCurrentQuater(newDate, newDate.year()))}</Text>
        </View>
      </View>
      <View style={[lifePathDialogs.wrap, lifePathDialogs.wrap_4]}>
        <View style={[lifePathDialogs.item, lifePathDialogs.top]}>
          <Text>{groupConsultant.getSumHierarchy(groupConsultant.calcCurrentQuater(newDate, newDate.year()), groupConsultant.calcPersonalMonth(newDate.month() + 1, newDate.year()))}</Text>
        </View>
        <View style={[lifePathDialogs.item, lifePathDialogs.left]}>
          <Text>{groupConsultant.calcCurrentQuater(newDate, newDate.year())}</Text>
        </View>
        <View style={[lifePathDialogs.item, lifePathDialogs.right]}>
          <Text>{groupConsultant.calcPersonalMonth(newDate.month() + 1, newDate.year())}</Text>
        </View>
        <View style={[lifePathDialogs.item, lifePathDialogs.bottom]}>
          <Text>{groupConsultant.getResHierarchy(groupConsultant.calcCurrentQuater(newDate, newDate.year()), groupConsultant.calcPersonalMonth(newDate.month() + 1, newDate.year()))}</Text>
        </View>
      </View>
      <View style={[lifePathDialogs.wrap, lifePathDialogs.wrap_5]}>
        <View style={[lifePathDialogs.item, lifePathDialogs.top]}>
          <Text>{groupConsultant.getSumHierarchy(groupConsultant.calcPersonalMonth(newDate.month() + 1, newDate.year()), groupConsultant.calcPersonalWeek(newDate.date(), newDate.month() + 1, newDate.year()))}</Text>
        </View>
        <View style={[lifePathDialogs.item, lifePathDialogs.left]}>
          <Text>{groupConsultant.calcPersonalMonth(newDate.month() + 1, newDate.year())}</Text>
        </View>
        <View style={[lifePathDialogs.item, lifePathDialogs.right]}>
          <Text>{groupConsultant.calcPersonalWeek(newDate.date(), newDate.month() + 1, newDate.year())}</Text>
        </View>
        <View style={[lifePathDialogs.item, lifePathDialogs.bottom]}>
          <Text>{groupConsultant.getResHierarchy(groupConsultant.calcPersonalMonth(newDate.month() + 1, newDate.year()), groupConsultant.calcPersonalWeek(newDate.date(), newDate.month() + 1, newDate.year()))}</Text>
        </View>
      </View>
    </View>
  )
}
export const lifePathDialogs = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '515px',
    left: '11px',
    fontSize: '7px',
    width: '531px',
    backgroundColor: 'red'
  },
  wrap: {
    position: 'relative',
    backgroundColor: 'red',
    width: 106
  },
  item: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '20px',
    height: '20px',
    fontSize: '11px'
  },
  top: {
    top: '25px',
    left: '43px'
  },
  left: {
    top: '46px',
    left: '20px'
  },
  right: {
    top: '46px',
    left: '65px'
  },
  bottom: {
    top: '70px',
    left: '43px'
  },
  wrap_2: {
    left: '106px',
  },
  wrap_3: {
    left: '212px',
  },
  wrap_4: {
    left: '318px',
  },
  wrap_5: {
    left: '424px',
  },
})