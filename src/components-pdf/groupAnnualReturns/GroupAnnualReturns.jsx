import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { capitalize } from '../../resources';
import { GroupAnnualReturn } from './GroupAnnualReturn';

export const GroupAnnualReturns = ({ groupConsultant, newDate }) => {
  const annualReturnCurrent = groupConsultant.annualReturn(newDate.year())
  const annualReturnLastYear = groupConsultant.annualReturn(newDate.year() - 1)
  const annualReturnNextYear = groupConsultant.annualReturn(newDate.year() + 1)

  const now = newDate.year()
  const annualReturn = groupConsultant.annualReturn(now)
  const personalYear = groupConsultant.calcPersonalYear(now)
  const yearsOld = groupConsultant.getYearsOld(now)

  const y1 = newDate.year() - 4
  const annualReturnY1 = groupConsultant.annualReturn(y1)
  const personalYearY1 = groupConsultant.calcPersonalYear(y1)
  const yearsOldY1 = groupConsultant.getYearsOld(y1)

  const y2 = newDate.year() - 3
  const annualReturnY2 = groupConsultant.annualReturn(y2)
  const personalYearY2 = groupConsultant.calcPersonalYear(y2)
  const yearsOldY2 = groupConsultant.getYearsOld(y2)

  const y3 = newDate.year() - 2
  const annualReturnY3 = groupConsultant.annualReturn(y3)
  const personalYearY3 = groupConsultant.calcPersonalYear(y3)
  const yearsOldY3 = groupConsultant.getYearsOld(y3)

  const y4 = newDate.year() - 1
  const annualReturnY4 = groupConsultant.annualReturn(y4)
  const personalYearY4 = groupConsultant.calcPersonalYear(y4)
  const yearsOldY4 = groupConsultant.getYearsOld(y4)

  const y6 = newDate.year() + 1
  const annualReturnY6 = groupConsultant.annualReturn(y6)
  const personalYearY6 = groupConsultant.calcPersonalYear(y6)
  const yearsOldY6 = groupConsultant.getYearsOld(y6)

  const y7 = newDate.year() + 2
  const annualReturnY7 = groupConsultant.annualReturn(y7)
  const personalYearY7 = groupConsultant.calcPersonalYear(y7)
  const yearsOldY7 = groupConsultant.getYearsOld(y7)

  const y8 = newDate.year() + 3
  const annualReturnY8 = groupConsultant.annualReturn(y8)
  const personalYearY8 = groupConsultant.calcPersonalYear(y8)
  const yearsOldY8 = groupConsultant.getYearsOld(y8)

  const y9 = newDate.year() + 4
  const annualReturnY9 = groupConsultant.annualReturn(y9)
  const personalYearY9 = groupConsultant.calcPersonalYear(y9)
  const yearsOldY9 = groupConsultant.getYearsOld(y9)

  return (
    <View style={data.container}>
      <View style={[data.wrap]}>
        <View style={[data.return, data.return_1]}>
          <GroupAnnualReturn
            annualReturn={annualReturnCurrent}
            personalYear={personalYearY1}
            yearsOld={yearsOldY1}
            year={y1}
            top={0}
            left={0} />
        </View>
        <View style={[data.return, data.return_2]}>
          <GroupAnnualReturn
            annualReturn={annualReturnCurrent}
            personalYear={personalYearY2}
            yearsOld={yearsOldY2}
            year={y2}
            top={0}
            left={177} />
        </View>
        <View style={[data.return, data.return_1]}>
          <GroupAnnualReturn
            annualReturn={annualReturnCurrent}
            personalYear={personalYearY3}
            yearsOld={yearsOldY3}
            year={y3}
            top={0}
            left={353} />
        </View>
        <View style={[data.return, data.return_1]}>
          <GroupAnnualReturn
            annualReturn={annualReturnCurrent}
            personalYear={personalYearY4}
            yearsOld={yearsOldY4}
            year={y4}
            top={138}
            left={0} />
        </View>
        <View style={[data.return, data.return_1]}>
          <GroupAnnualReturn
            annualReturn={annualReturnCurrent}
            personalYear={personalYear}
            yearsOld={yearsOld}
            year={now}
            top={138}
            left={177} />
        </View>
        <View style={[data.return, data.return_1]}>
          <GroupAnnualReturn
            annualReturn={annualReturnCurrent}
            personalYear={personalYearY6}
            yearsOld={yearsOldY6}
            year={y6}
            top={138}
            left={353} />
        </View>
        <View style={[data.return, data.return_1]}>
          <GroupAnnualReturn
            annualReturn={annualReturnCurrent}
            personalYear={personalYearY7}
            yearsOld={yearsOldY7}
            year={y7}
            top={275}
            left={0} />
        </View>
        <View style={[data.return, data.return_1]}>
          <GroupAnnualReturn
            annualReturn={annualReturnCurrent}
            personalYear={personalYearY8}
            yearsOld={yearsOldY8}
            year={y8}
            top={275}
            left={177} />
        </View>
        <View style={[data.return, data.return_1]}>
          <GroupAnnualReturn
            annualReturn={annualReturnCurrent}
            personalYear={personalYearY9}
            yearsOld={yearsOldY9}
            year={y9}
            top={275}
            left={353} />
        </View>
      </View>
    </View>
  )
}
export const data = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '262px',
    left: '15px',
    width: '533px',
  },
  wrap: {
    backgroundColor: 'blue',
    position: 'absolute'
  },
})