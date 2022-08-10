import { Text, View, StyleSheet } from "@react-pdf/renderer"
import moment from 'moment/min/moment-with-locales'
import { nowWeekNumber, capitalize } from '../../resources';
moment.locale("es-mx")

export const LifePathQuarters = ({ consultant }) => {
  // @TODO: refactor
  const now = moment()
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

  let m1, m2, m3, m4, cm1, cm2, cm3, cm4 = ''
  let start, end = ''
  const listOfMonths = consultant.getCustomMonths()
  const index = listOfMonths.findIndex(i => i === 'Enero')

  const quater1 = consultant.getQuaterOne()
  const quater2 = consultant.getQuaterTwo(newDate.year())
  const quater3 = consultant.getQuaterThree(newDate.year())

  const lastYear = newDate.year() - 1

  const quater1LastYear = consultant.getQuaterOne()
  const quater2LastYear = consultant.getQuaterTwo(lastYear)
  const quater3LastYear = consultant.getQuaterThree(lastYear)

  const quater1Karmico = consultant.getQuaterOneISK()
  const quater2Karmico = consultant.getQuaterTwoISK(newDate.year())
  const quater3Karmico = consultant.getQuaterThreeISK(newDate.year())
  const quater2KarmicoLast = consultant.getQuaterTwoISK(lastYear)
  const quater3KarmicoLast = consultant.getQuaterThreeISK(lastYear)


  const quater1NextYear = consultant.getQuaterOne()
  // const quater2NextYear = consultant.getQuaterTwo(now.add(1, 'year'))

  let ism1 = false, ism2 = false, ism3 = false, ism4 = false
  const now2 = moment()

  const personalYear = consultant.calcPersonalYear()
  // String.prototype.capitalize = function() {
  //   return this.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase(); });
  // }
  const actualMonth = newDate.format('MMMM');

  const currentMonth = listOfMonths.findIndex(i => i === capitalize(actualMonth))
  const listOfMonths3 = listOfMonths.map(e => e.substring(0, 3))
  // console.log(actualMonth);
  // console.log(currentMonth);
  const currentMonthName = capitalize(listOfMonths[currentMonth])

  switch (index) {
    case 0:
      m1 = listOfMonths3[index] + ' - ' + listOfMonths3[4]
      m2 = listOfMonths3[5] + ' - ' + listOfMonths3[8]
      m3 = listOfMonths3[9] + ' - ' + listOfMonths3[11]
      cm1 = quater1 + quater1Karmico
      cm2 = quater2 + quater2Karmico
      cm3 = quater3 + quater3Karmico
      if (currentMonth >= 0 && currentMonth <= 4) { ism1 = true }
      if (currentMonth >= 5 && currentMonth <= 8) { ism2 = true }
      if (currentMonth >= 9 && currentMonth <= 11) { ism3 = true }
      break;
    case 1:
      m1 = listOfMonths3[index] + ' - ' + listOfMonths3[4]
      m2 = listOfMonths3[5] + ' - ' + listOfMonths3[8]
      m3 = listOfMonths3[9] + ' - ' + listOfMonths3[11]
      m4 = listOfMonths3[index - 1]
      cm1 = quater1LastYear + quater1Karmico
      cm2 = quater2LastYear + quater2KarmicoLast
      cm3 = quater3LastYear + quater3KarmicoLast
      cm4 = quater1 + quater1Karmico
      start = listOfMonths3[index]
      end = listOfMonths3[4]
      if (currentMonth >= 1 && currentMonth <= 4) { ism1 = true }
      if (currentMonth >= 5 && currentMonth <= 8) { ism2 = true }
      if (currentMonth >= 9 && currentMonth <= 11) { ism3 = true }
      if (currentMonth === 0) { ism4 = true }
      break;
    case 2:
    case 3:
      m1 = listOfMonths3[index] + ' - ' + listOfMonths3[4]
      m2 = listOfMonths3[5] + ' - ' + listOfMonths3[8]
      m3 = listOfMonths3[9] + ' - ' + listOfMonths3[11]
      m4 = listOfMonths3[0] + ' - ' + listOfMonths3[index - 1]
      cm1 = quater1LastYear + quater1Karmico
      cm2 = quater2LastYear + quater2KarmicoLast
      cm3 = quater3LastYear + quater3KarmicoLast
      cm4 = quater1 + quater1Karmico
      if (currentMonth >= 3 && currentMonth <= 4) { ism1 = true }
      if (currentMonth >= 5 && currentMonth <= 8) { ism2 = true }
      if (currentMonth >= 9 && currentMonth <= 11) { ism3 = true }
      if (currentMonth >= 0 && currentMonth <= 2) { ism4 = true }
      break;
    case 4:
      m1 = listOfMonths3[index]
      m2 = listOfMonths3[5] + ' - ' + listOfMonths3[8]
      m3 = listOfMonths3[9] + ' - ' + listOfMonths3[11]
      m4 = listOfMonths3[0] + ' - ' + listOfMonths3[index - 1]
      cm1 = quater1LastYear + quater1Karmico
      cm2 = quater2LastYear + quater2KarmicoLast
      cm3 = quater3LastYear + quater3KarmicoLast
      cm4 = quater1 + quater1Karmico
      if (currentMonth === 4) { ism1 = true }
      if (currentMonth >= 5 && currentMonth <= 8) { ism2 = true }
      if (currentMonth >= 9 && currentMonth <= 11) { ism3 = true }
      if (currentMonth >= 0 && currentMonth <= 7) { ism4 = true }
      break;
    case 5:
      m1 = listOfMonths3[index] + ' - ' + listOfMonths3[8]
      m2 = listOfMonths3[9] + ' - ' + listOfMonths3[11]
      m3 = listOfMonths3[12] + ' - ' + listOfMonths3[4]
      cm1 = quater2LastYear + quater2KarmicoLast
      cm2 = quater3LastYear + quater3KarmicoLast
      cm3 = quater1 + quater1Karmico
      if (currentMonth >= 5 && currentMonth <= 8) { ism1 = true }
      if (currentMonth >= 9 && currentMonth <= 11) { ism2 = true }
      if (currentMonth >= 0 && currentMonth <= 4) { ism3 = true }

      break;
    case 6:
      m1 = listOfMonths3[index] + ' - ' + listOfMonths3[8]
      m2 = listOfMonths3[9] + ' - ' + listOfMonths3[11]
      m3 = listOfMonths3[12] + ' - ' + listOfMonths3[4]
      m4 = listOfMonths3[index - 1]
      cm1 = quater2LastYear + quater2KarmicoLast
      cm2 = quater3LastYear + quater3KarmicoLast
      cm3 = quater1 + quater1Karmico
      cm4 = quater2 + quater2Karmico
      if (currentMonth >= 6 && currentMonth <= 8) { ism1 = true }
      if (currentMonth >= 9 && currentMonth <= 11) { ism2 = true }
      if (currentMonth >= 0 && currentMonth <= 4) { ism3 = true }
      if (currentMonth === 5) { ism4 = true }
      break;
    case 7:
      m1 = listOfMonths3[index] + ' - ' + listOfMonths3[8]
      m2 = listOfMonths3[9] + ' - ' + listOfMonths3[11]
      m3 = listOfMonths3[12] + ' - ' + listOfMonths3[4]
      m4 = listOfMonths3[5] + ' - ' + listOfMonths3[index - 1]
      cm1 = quater2LastYear + quater2KarmicoLast
      cm2 = quater3LastYear + quater3KarmicoLast
      cm3 = quater1 + quater1Karmico
      cm4 = quater2 + quater2Karmico
      if (currentMonth >= 7 && currentMonth <= 8) { ism1 = true }
      if (currentMonth >= 9 && currentMonth <= 11) { ism2 = true }
      if (currentMonth >= 0 && currentMonth <= 4) { ism3 = true }
      if (currentMonth >= 5 && currentMonth <= index - 1) { ism4 = true }
      break;
    case 8:
      m1 = listOfMonths3[index]
      m2 = listOfMonths3[9] + ' - ' + listOfMonths3[11]
      m3 = listOfMonths3[12] + ' - ' + listOfMonths3[4]
      m4 = listOfMonths3[5] + ' - ' + listOfMonths3[index - 1]

      cm1 = quater2LastYear + quater2KarmicoLast
      cm2 = quater3LastYear + quater3KarmicoLast
      cm3 = quater1 + quater1Karmico
      cm4 = quater2 + quater2Karmico
      if (currentMonth === 8) { ism1 = true }
      if (currentMonth >= 9 && currentMonth <= 11) { ism2 = true }
      if (currentMonth >= 0 && currentMonth <= 4) { ism3 = true }
      if (currentMonth >= 5 && currentMonth <= 7) { ism4 = true }
      break;
    case 9:
      m1 = listOfMonths3[index] + ' - ' + listOfMonths3[11]
      m2 = listOfMonths3[0] + ' - ' + listOfMonths3[4]
      m3 = listOfMonths3[5] + ' - ' + listOfMonths3[8]
      cm1 = quater3LastYear + quater3KarmicoLast
      cm2 = quater1 + quater1Karmico
      cm3 = quater2 + quater2Karmico
      if (currentMonth >= index && currentMonth <= 11) { ism1 = true }
      if (currentMonth >= 0 && currentMonth <= 4) { ism2 = true }
      if (currentMonth >= 5 && currentMonth <= 8) { ism3 = true }

      break;
    case 10:
      m1 = listOfMonths3[index] + ' - ' + listOfMonths3[11]
      m2 = listOfMonths3[0] + ' - ' + listOfMonths3[4]
      m3 = listOfMonths3[5] + ' - ' + listOfMonths3[8]
      m4 = listOfMonths3[index - 1]
      cm1 = quater3LastYear + quater3KarmicoLast
      cm2 = quater1 + quater1Karmico
      cm3 = quater2 + quater2Karmico
      cm4 = quater3 + quater3Karmico
      if (currentMonth >= index && currentMonth <= 11) { ism1 = true }
      if (currentMonth >= 0 && currentMonth <= 4) { ism2 = true }
      if (currentMonth >= 5 && currentMonth <= 8) { ism3 = true }
      if (currentMonth === index - 1) { ism4 = true }
      break;
    case 11:
      m1 = listOfMonths3[index]
      m2 = listOfMonths3[0] + ' - ' + listOfMonths3[4]
      m3 = listOfMonths3[5] + ' - ' + listOfMonths3[8]
      m4 = listOfMonths3[9] + ' - ' + listOfMonths3[index - 1]
      cm1 = quater3LastYear + quater3KarmicoLast
      cm2 = quater1 + quater1Karmico
      cm3 = quater2 + quater2Karmico
      cm4 = quater3 + quater3Karmico
      if (currentMonth === index) { ism1 = true }
      if (currentMonth >= 0 && currentMonth <= 4) { ism2 = true }
      if (currentMonth >= 5 && currentMonth <= 8) { ism3 = true }
      if (currentMonth >= 9 && currentMonth <= index - 1) { ism4 = true }
      break;

  }

  return (
    <View style={lifePath.container}>
      <View style={lifePath.wrap}>
        <View style={lifePath.personalYears}>
          <View style={lifePath.itemWrap}>
            <View style={lifePath.item}>
              <Text> {cm1} </Text>
            </View>
            <View style={lifePath.year}>
              <Text> {m1.toUpperCase()} </Text>
            </View>
          </View>
          <View style={lifePath.itemWrap}>
            <View style={lifePath.item}>
              <Text> {cm2} </Text>
            </View>
            <View style={lifePath.year}>
              <Text> {m2.toUpperCase()} </Text>
            </View>
          </View>
          <View style={lifePath.itemWrap}>
            <View style={lifePath.item}>
              <Text> {cm3} </Text>
            </View>
            <View style={lifePath.year}>
              <Text> {m3.toUpperCase()} </Text>
            </View>
          </View>
          {(m4 !== undefined) && (<View style={lifePath.itemWrap}>
            <View style={lifePath.item}>
              <Text>{cm4}</Text>
            </View>
            <View style={lifePath.year}>
              <Text>{m4.toUpperCase()}</Text>
            </View>
          </View>)}
        </View>
      </View>
    </View>
  )
}


export const lifePath = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '339px',
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
    backgroundColor: '#BEE1D1',
  },
  year: {
    position: 'absolute',
    top: '20px',
    left: '-10px',
    width: '45px',
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