import { View, Text, StyleSheet } from "@react-pdf/renderer"

export const GroupTimeCurve = ({groupConsultant, newDate})=>{
  return (
    <View style={timeCurve.container}>
      <View style={timeCurve.wrap}>
        <View style={[timeCurve.item, timeCurve.s1_duration]}>
        <Text>{groupConsultant.getK()}</Text>
        </View>
        <View style={[timeCurve.item, timeCurve.s2_duration]}>
        <Text>{groupConsultant.getL()}</Text>
        </View>
        <View style={[timeCurve.item, timeCurve.s3_duration]}>
        <Text>{groupConsultant.getM()}</Text>
        </View>
        <View style={[timeCurve.item, timeCurve.s4_duration]}>
        <Text>{groupConsultant.getN()}</Text>
        </View>
        <View style={[timeCurve.item, timeCurve.s5_duration]}>
        <Text>{groupConsultant.getM()}</Text>
        </View>
        <View style={[timeCurve.item, timeCurve.s6_duration]}>
        <Text>{groupConsultant.getL()}</Text>
        </View>
        <View style={[timeCurve.item, timeCurve.s7_duration]}>
          <Text>{groupConsultant.getK()}</Text>
        </View>
        <View style={[timeCurve.circle, timeCurve.s1_vibration]}>
          <Text>{groupConsultant.calcLifeStage(1)}{groupConsultant.calcLifeStageISK(1)}</Text>
        </View>
        <View style={[timeCurve.circle, timeCurve.s2_vibration]}>
          <Text>{groupConsultant.calcLifeStage(2)}{groupConsultant.calcLifeStageISK(2)}</Text>
        </View>
        <View style={[timeCurve.circle, timeCurve.s3_vibration]}>
          <Text>{groupConsultant.calcLifeStage(3)}{groupConsultant.calcLifeStageISK(3)}</Text>
        </View>
        <View style={[timeCurve.circle, timeCurve.s4_vibration]}>
          <Text>{groupConsultant.calcLifeStage(4)}{groupConsultant.calcLifeStageISK(4)}</Text>
        </View>
        <View style={[timeCurve.circle, timeCurve.s5_vibration]}>
          <Text>{groupConsultant.calcLifeStage(3)}{groupConsultant.calcLifeStageISK(3)}</Text>
        </View>
        <View style={[timeCurve.circle, timeCurve.s6_vibration]}>
          <Text>{groupConsultant.calcLifeStage(2)}{groupConsultant.calcLifeStageISK(2)}</Text>
        </View>
        <View style={[timeCurve.circle, timeCurve.s7_vibration]}>
          <Text>{groupConsultant.calcLifeStage(1)}{groupConsultant.calcLifeStageISK(1)}</Text>
        </View>

        <View style={[timeCurve.item, timeCurve.s1_begining]}>
          <Text>{groupConsultant.getYearTimeCurve()}</Text>
        </View>
        <View style={[timeCurve.item, timeCurve.s2_begining]}>
          <Text>{groupConsultant.calcLifeStageDuration(1)}</Text>
        </View>
        <View style={[timeCurve.item, timeCurve.s3_begining]}>
          <Text>{groupConsultant.calcLifeStageDuration(2)}</Text>
        </View>
        <View style={[timeCurve.item, timeCurve.s4_begining]}>
          <Text>{groupConsultant.calcLifeStageDuration(3)}</Text>
        </View>
        <View style={[timeCurve.item, timeCurve.s5_begining]}>
          <Text>{groupConsultant.calcLifeStageDuration(4)}</Text>
        </View>
        <View style={[timeCurve.item, timeCurve.s6_begining]}>
          <Text>{groupConsultant.calcLifeStageDuration(5)}</Text>
        </View>
        <View style={[timeCurve.item, timeCurve.s7_begining]}>
          <Text>{groupConsultant.calcLifeStageDuration(6)}</Text>
        </View>
        <View style={[timeCurve.item, timeCurve.ending]}>
          <Text>En adelante...
          </Text>
        </View>
      </View>
    </View>
  )
}
export const timeCurve = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '505px',
    left: '9px',
    width: '535px',
    fontSize: '12px',
    textAlign: 'center',
    // color: '#fff'
  },
  wrap: {
    position: 'relative'
  },
  item: {
    position: 'absolute',
    // backgroundColor: '#00ff0080',

  },
  s1_duration: {

    top: '125px', // +14
    left: '82px',
    width: '20px',
    height: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  s2_duration: {

    top: '107px',
    left: '194px',
    width: '20px',
    height: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  s3_duration: {

    top: '78px',
    left: '248px',
    width: '20px',
    height: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  s4_duration: {

    top: '62px',
    left: '306px',
    width: '20px',
    height: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  s5_duration: {

    top: '78px',
    left: '354px',
    width: '20px',
    height: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  s6_duration: {
    top: '107px',
    left: '411px',
    width: '20px',
    height: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  s7_duration: {
    top: '125px',
    left: '470px',
    width: '20px',
    height: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: '20px',
    height: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',

  },
  s1_vibration: {
    top: '105px', // +14
    left: '82px',
  },
  s2_vibration: {
    top: '87px',
    left: '194px',
  },
  s3_vibration: {
    top: '58px',
    left: '248px',
  },
  s4_vibration: {
    top: '42px',
    left: '306px',
  },
  s5_vibration: {
    top: '57px',
    left: '354px',
  },
  s6_vibration: {
    top: '87px',
    left: '411px',
  },
  s7_vibration: {
    top: '102px',
    left: '470px',
  },

  s1_begining: {
    top: '142px',
    left: '10px',
    fontSize:'8px'
  },
  s2_begining: {
    top: '142px',
    left: '165px',
    fontSize:'8px'
  },
  s3_begining: {
    top: '142px',
    left: '222px',
    fontSize:'8px'
  },
  s4_begining: {
    top: '142px',
    left: '277px',
    fontSize:'8px'
  },
  s5_begining: {
    top: '142px',
    left: '331px',
    fontSize:'8px'
  },
  s6_begining: {
    top: '142px',
    left: '387px',
    fontSize:'8px'
  },
  s7_begining: {
    top: '142px',
    left: '450px',
    fontSize:'8px'
  },
  ending: {
    top: '142px',
    left: '480px',
    fontSize:'8px'
  },
})