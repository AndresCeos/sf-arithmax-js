import { Text, View, StyleSheet } from "@react-pdf/renderer"

export const PinnacleTimeCurve = ({ consultant }) => {
  return (
    <View style={timeCurve.container}>
      <View style={timeCurve.wrap}>
        <View style={[timeCurve.item, timeCurve.s1_duration]}>
          <Text>Del nacimiento a los {consultant.calcLifeStageDuration(1) - consultant.birthDate.year()}</Text>
        </View>
        <View style={[timeCurve.item, timeCurve.s2_duration]}>
          <Text>{consultant.calcLifeStageDuration(1) - consultant.birthDate.year()} - {consultant.calcLifeStageDuration(1) - consultant.birthDate.year() + 9}</Text>
        </View>
        <View style={[timeCurve.item, timeCurve.s3_duration]}>
          <Text>{consultant.calcLifeStageDuration(1) - consultant.birthDate.year() + 9} - {consultant.calcLifeStageDuration(1) - consultant.birthDate.year() + 18}</Text>
        </View>
        <View style={[timeCurve.item, timeCurve.s4_duration]}>
          <Text>{consultant.calcLifeStageDuration(1) - consultant.birthDate.year() + 18} - {consultant.calcLifeStageDuration(1) - consultant.birthDate.year() + 27}</Text>
        </View>
        <View style={[timeCurve.item, timeCurve.s5_duration]}>
          <Text>{consultant.calcLifeStageDuration(1) - consultant.birthDate.year() + 27} - {consultant.calcLifeStageDuration(1) - consultant.birthDate.year() + 36}</Text>
        </View>
        <View style={[timeCurve.item, timeCurve.s6_duration]}>
          <Text>{consultant.calcLifeStageDuration(1) - consultant.birthDate.year() + 36} - {consultant.calcLifeStageDuration(1) - consultant.birthDate.year() + 45}</Text>
        </View>
        <View style={[timeCurve.item, timeCurve.s7_duration]}>
          <Text>{consultant.calcLifeStageDuration(1) - consultant.birthDate.year() + 45} - ...</Text>
        </View>
        <View style={[timeCurve.circle, timeCurve.s1_vibration]}>
          <Text>{consultant.calcLifeStage(1)}{consultant.calcLifeStageISK(1)}</Text>
        </View>
        <View style={[timeCurve.circle, timeCurve.s2_vibration]}>
          <Text>{consultant.calcLifeStage(2)}{consultant.calcLifeStageISK(2)}</Text>
        </View>
        <View style={[timeCurve.circle, timeCurve.s3_vibration]}>
          <Text>{consultant.calcLifeStage(3)}{consultant.calcLifeStageISK(3)}</Text>
        </View>
        <View style={[timeCurve.circle, timeCurve.s4_vibration]}>
          <Text>{consultant.calcLifeStage(4)}{consultant.calcLifeStageISK(4)}</Text>
        </View>
        <View style={[timeCurve.circle, timeCurve.s5_vibration]}>
          <Text>{consultant.calcLifeStage(3)}{consultant.calcLifeStageISK(3)}</Text>
        </View>
        <View style={[timeCurve.circle, timeCurve.s6_vibration]}>
          <Text>{consultant.calcLifeStage(2)}{consultant.calcLifeStageISK(2)}</Text>
        </View>
        <View style={[timeCurve.circle, timeCurve.s7_vibration]}>
          <Text>{consultant.calcLifeStage(1)}{consultant.calcLifeStageISK(1)}</Text>
        </View>

        <View style={[timeCurve.item, timeCurve.s1_begining]}>
          <Text>{consultant.getYearTimeCurve()}</Text>
        </View>
        <View style={[timeCurve.item, timeCurve.s2_begining]}>
          <Text>{consultant.calcLifeStageDuration(1)}</Text>
        </View>
        <View style={[timeCurve.item, timeCurve.s3_begining]}>
          <Text>{consultant.calcLifeStageDuration(2)}</Text>
        </View>
        <View style={[timeCurve.item, timeCurve.s4_begining]}>
          <Text>{consultant.calcLifeStageDuration(3)}</Text>
        </View>
        <View style={[timeCurve.item, timeCurve.s5_begining]}>
          <Text>{consultant.calcLifeStageDuration(4)}</Text>
        </View>
        <View style={[timeCurve.item, timeCurve.s6_begining]}>
          <Text>{consultant.calcLifeStageDuration(5)}</Text>
        </View>
        <View style={[timeCurve.item, timeCurve.s7_begining]}>
          <Text>{consultant.calcLifeStageDuration(6)}</Text>
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
    top: '531px',
    left: '9px',
    width: '535px',
    fontSize: '8px',
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
    width: '155px',
    top: '76px',
    left: '18px',
  },
  s2_duration: {
    width: '51px',
    top: '50px',
    left: '175px',
  },
  s3_duration: {
    width: '51px',
    top: '33px',
    left: '232px',
  },
  s4_duration: {
    width: '51px',
    top: '15px',
    left: '287px',
  },
  s5_duration: {
    width: '51px',
    top: '34px',
    left: '341px',
  },
  s6_duration: {
    width: '51px',
    top: '55px',
    left: '397px',
  },
  s7_duration: {
    width: '51px',
    top: '79px',
    left: '460px',
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
  },
  s2_begining: {
    top: '142px',
    left: '165px',
  },
  s3_begining: {
    top: '142px',
    left: '222px',
  },
  s4_begining: {
    top: '142px',
    left: '277px',
  },
  s5_begining: {
    top: '142px',
    left: '331px',
  },
  s6_begining: {
    top: '142px',
    left: '387px',
  },
  s7_begining: {
    top: '142px',
    left: '450px',
  },
  ending: {
    top: '142px',
    left: '480px',
  },
})