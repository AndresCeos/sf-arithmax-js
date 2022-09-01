import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { capitalize } from '../../resources';
import { SynastryAnnualReturn } from './SynastryAnnualReturn';

export const SynastryAnnualReturns = ({ synastry, newDate }) => {
  const annualReturnCurrent = synastry.annualReturn(newDate.year())
  const annualReturnLastYear = synastry.annualReturn(newDate.year() - 1)
  const annualReturnNextYear = synastry.annualReturn(newDate.year() + 1)

  const now = newDate.year()
  const annualReturn = synastry.annualReturn(now)
  const personalYear = synastry.calcPersonalYear(now)
  const yearsOld = synastry.getYearsOld(now)

  const y1 = newDate.year() - 4
  const annualReturnY1 = synastry.annualReturn(y1)
  const personalYearY1 = synastry.calcPersonalYear(y1)
  const yearsOldY1 = synastry.getYearsOld(y1)

  const y2 = newDate.year() - 3
  const annualReturnY2 = synastry.annualReturn(y2)
  const personalYearY2 = synastry.calcPersonalYear(y2)
  const yearsOldY2 = synastry.getYearsOld(y2)

  const y3 = newDate.year() - 2
  const annualReturnY3 = synastry.annualReturn(y3)
  const personalYearY3 = synastry.calcPersonalYear(y3)
  const yearsOldY3 = synastry.getYearsOld(y3)

  const y4 = newDate.year() - 1
  const annualReturnY4 = synastry.annualReturn(y4)
  const personalYearY4 = synastry.calcPersonalYear(y4)
  const yearsOldY4 = synastry.getYearsOld(y4)

  const y6 = newDate.year() + 1
  const annualReturnY6 = synastry.annualReturn(y6)
  const personalYearY6 = synastry.calcPersonalYear(y6)
  const yearsOldY6 = synastry.getYearsOld(y6)

  const y7 = newDate.year() + 2
  const annualReturnY7 = synastry.annualReturn(y7)
  const personalYearY7 = synastry.calcPersonalYear(y7)
  const yearsOldY7 = synastry.getYearsOld(y7)

  const y8 = newDate.year() + 3
  const annualReturnY8 = synastry.annualReturn(y8)
  const personalYearY8 = synastry.calcPersonalYear(y8)
  const yearsOldY8 = synastry.getYearsOld(y8)

  const y9 = newDate.year() + 4
  const annualReturnY9 = synastry.annualReturn(y9)
  const personalYearY9 = synastry.calcPersonalYear(y9)
  const yearsOldY9 = synastry.getYearsOld(y9)

  return (
    <View style={data.container}>
      <View style={[data.wrap]}>
        <View style={[data.return, data.return_1]}>
          <SynastryAnnualReturn
            annualReturn={annualReturnCurrent}
            personalYear={personalYearY1}
            yearsOld={yearsOldY1}
            year={y1}
            top={0}
            left={0} />
        </View>
        <View style={[data.return, data.return_2]}>
          <SynastryAnnualReturn
            annualReturn={annualReturnCurrent}
            personalYear={personalYearY2}
            yearsOld={yearsOldY2}
            year={y2}
            top={0}
            left={177} />
        </View>
        <View style={[data.return, data.return_1]}>
          <SynastryAnnualReturn
            annualReturn={annualReturnCurrent}
            personalYear={personalYearY1}
            yearsOld={yearsOldY1}
            year={y1}
            top={0}
            left={353} />
        </View>
        <View style={[data.return, data.return_1]}>
          <SynastryAnnualReturn
            annualReturn={annualReturnCurrent}
            personalYear={personalYearY1}
            yearsOld={yearsOldY1}
            year={y1}
            top={138}
            left={0} />
        </View>
        <View style={[data.return, data.return_1]}>
          <SynastryAnnualReturn
            annualReturn={annualReturnCurrent}
            personalYear={personalYearY1}
            yearsOld={yearsOldY1}
            year={y1}
            top={138}
            left={177} />
        </View>
        <View style={[data.return, data.return_1]}>
          <SynastryAnnualReturn
            annualReturn={annualReturnCurrent}
            personalYear={personalYearY1}
            yearsOld={yearsOldY1}
            year={y1}
            top={138}
            left={353} />
        </View>
        <View style={[data.return, data.return_1]}>
          <SynastryAnnualReturn
            annualReturn={annualReturnCurrent}
            personalYear={personalYearY1}
            yearsOld={yearsOldY1}
            year={y1}
            top={275}
            left={0} />
        </View>
        <View style={[data.return, data.return_1]}>
          <SynastryAnnualReturn
            annualReturn={annualReturnCurrent}
            personalYear={personalYearY1}
            yearsOld={yearsOldY1}
            year={y1}
            top={275}
            left={177} />
        </View>
        <View style={[data.return, data.return_1]}>
          <SynastryAnnualReturn
            annualReturn={annualReturnCurrent}
            personalYear={personalYearY1}
            yearsOld={yearsOldY1}
            year={y1}
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
    top: '151px',
    left: '12px',
    width: '533px',
  },
  wrap: {
    backgroundColor: 'blue',
    position: 'absolute'
  },
})