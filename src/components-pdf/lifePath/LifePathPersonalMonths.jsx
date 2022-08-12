import { Text, View, StyleSheet } from "@react-pdf/renderer"
import moment from 'moment/min/moment-with-locales'
import { nowWeekNumber, capitalize } from '../../resources';
moment.locale("es-mx")

export const LifePathPersonalMonths = ({ consultant }) => {
  const now = moment()
  const newDate = moment()

  // const {newDate} = dateSelect()
  const listOfMonths = consultant.getCustomMonths()
  const allMonths = consultant.getAllMonths()
  const index = listOfMonths.findIndex(i => i === 'Enero')
  let quaterOne = []
  let quaterTwo = []
  let quaterThree = []
  let quaterFour = []

  const actualMonth = newDate.format('MMMM');
  switch (index) {
    case 0:
      quaterOne = [listOfMonths[0], listOfMonths[1], listOfMonths[2], listOfMonths[3], listOfMonths[4]]
      quaterTwo = [listOfMonths[5], listOfMonths[6], listOfMonths[7], listOfMonths[8]]
      quaterThree = [listOfMonths[9], listOfMonths[10], listOfMonths[11]]
      break;
    case 1:
      quaterOne = [listOfMonths[1], listOfMonths[2], listOfMonths[3], listOfMonths[4]]
      quaterTwo = [listOfMonths[5], listOfMonths[6], listOfMonths[7], listOfMonths[8]]
      quaterThree = [listOfMonths[9], listOfMonths[10], listOfMonths[11]]
      quaterFour = [listOfMonths[0]]
      break;
    case 2:
    case 3:
      quaterOne = [listOfMonths[3], listOfMonths[4]]
      quaterTwo = [listOfMonths[5], listOfMonths[6], listOfMonths[7], listOfMonths[8]]
      quaterThree = [listOfMonths[9], listOfMonths[10], listOfMonths[11]]
      quaterFour = [listOfMonths[0], listOfMonths[1], listOfMonths[2]]
      break;
    case 4:
      quaterOne = [listOfMonths[4]]
      quaterTwo = [listOfMonths[5], listOfMonths[6], listOfMonths[7], listOfMonths[8]]
      quaterThree = [listOfMonths[9], listOfMonths[10], listOfMonths[11]]
      quaterFour = [listOfMonths[0], listOfMonths[1], listOfMonths[2], listOfMonths[3]]
      break;
    case 5:
      quaterOne = [listOfMonths[5], listOfMonths[6], listOfMonths[7], listOfMonths[8]]
      quaterTwo = [listOfMonths[9], listOfMonths[10], listOfMonths[11]]
      quaterThree = [listOfMonths[0], listOfMonths[1], listOfMonths[2], listOfMonths[3], listOfMonths[4]]
      break;
    case 6:
      quaterOne = [listOfMonths[6], listOfMonths[7], listOfMonths[8]]
      quaterTwo = [listOfMonths[9], listOfMonths[10], listOfMonths[11]]
      quaterThree = [listOfMonths[0], listOfMonths[1], listOfMonths[2], listOfMonths[3], listOfMonths[4]]
      quaterFour = [listOfMonths[5]]
      break;
    case 7:
      quaterOne = [listOfMonths[7], listOfMonths[8]]
      quaterTwo = [listOfMonths[9], listOfMonths[10], listOfMonths[11]]
      quaterThree = [listOfMonths[0], listOfMonths[1], listOfMonths[2], listOfMonths[3], listOfMonths[4]]
      quaterFour = [listOfMonths[5], listOfMonths[6]]
      break;
    case 8:
      quaterOne = [listOfMonths[8]]
      quaterTwo = [listOfMonths[9], listOfMonths[10], listOfMonths[11]]
      quaterThree = [listOfMonths[0], listOfMonths[1], listOfMonths[2], listOfMonths[3], listOfMonths[4]]
      quaterFour = [listOfMonths[5], listOfMonths[6], listOfMonths[7]]
      break;
    case 9:
      quaterOne = [listOfMonths[9], listOfMonths[10], listOfMonths[11]]
      quaterTwo = [listOfMonths[0], listOfMonths[1], listOfMonths[2], listOfMonths[3], listOfMonths[4]]
      quaterThree = [listOfMonths[5], listOfMonths[6], listOfMonths[7], listOfMonths[8]]
      break;
    case 10:
      quaterOne = [listOfMonths[10], listOfMonths[11]]
      quaterTwo = [listOfMonths[0], listOfMonths[1], listOfMonths[2], listOfMonths[3], listOfMonths[4]]
      quaterThree = [listOfMonths[5], listOfMonths[6], listOfMonths[7], listOfMonths[8]]
      quaterFour = [listOfMonths[9]]
      break;
    case 11:
      quaterOne = [listOfMonths[11]]
      quaterTwo = [listOfMonths[0], listOfMonths[1], listOfMonths[2], listOfMonths[3], listOfMonths[4]]
      quaterThree = [listOfMonths[5], listOfMonths[6], listOfMonths[7], listOfMonths[8]]
      quaterFour = [listOfMonths[9], listOfMonths[10]]
      break;

  }
  let isQuaterOne = quaterOne.find(month => month == capitalize(actualMonth))
  let isQuaterTwo = quaterTwo.find(month => month == capitalize(actualMonth))
  let isQuaterThree = quaterThree.find(month => month == capitalize(actualMonth))
  let isQuaterFour = quaterFour.find(month => month == capitalize(actualMonth))
  console.log('Cuatri 1 => ' + isQuaterOne);
  console.log('Cuatri 2 => ' + isQuaterTwo);
  console.log('Cuatri 3 => ' + isQuaterThree);
  console.log('Cuatri 4 => ' + isQuaterFour);
  if (isQuaterOne !== undefined) {
    return (
      <View style={lifePath.container}>
        <View style={lifePath.wrap}>
          <View style={lifePath.personalYears}>
            {quaterOne.map((mes, i) => {
              console.log(allMonths, mes, i)
              let index = allMonths.findIndex(i => i === mes)
              return (
                <View style={lifePath.itemWrap}>
                  <View style={lifePath.item}>
                    <Text>{consultant.calcPersonalMonth(index + 1, newDate.year())}{consultant.calcPersonalMonthISK(index + 1, newDate.year())}</Text>
                  </View>
                  <View style={lifePath.year}>
                    <Text>{mes.toUpperCase()}</Text>
                  </View>
                </View>
              )
            })}
          </View>
        </View>
      </View>
    )
    return (
      <div className="flex justify-between mt-5">
        {quaterOne.map((mes, i) => {
          let index = allMonths.findIndex(i => i === mes)
          return (
            <div
              className={`
                cicle-year bg-gold-30 text-xl font-bold flex items-center justify-center rounded-md w-10 h-10
                ${mes.toUpperCase() === actualMonth.toUpperCase() ? 'month-active' : ''}
              `}
            >
              {consultant.calcPersonalMonth(index + 1, newDate.year())}{consultant.calcPersonalMonthISK(index + 1, newDate.year())}
              <div
                className={`path-month-des ${mes.toUpperCase() === actualMonth.toUpperCase() ? 'path-month-active' : ''}`}
              >{mes.toUpperCase()}</div>
            </div>
          )
        })}
      </div>
    )
  }
  if (isQuaterTwo !== undefined) {
    return (
      <View style={lifePath.container}>
        <View style={lifePath.wrap}>
          <View style={lifePath.personalYears}>
            {quaterTwo.map((mes, i) => {
              console.log(allMonths, mes, i)
              let index = allMonths.findIndex(i => i === mes)
              return (
                <View style={lifePath.itemWrap}>
                  <View style={lifePath.item}>
                    <Text>{consultant.calcPersonalMonth(index + 1, newDate.year())}{consultant.calcPersonalMonthISK(index + 1, newDate.year())}</Text>
                  </View>
                  <View style={lifePath.year}>
                    <Text>{mes.toUpperCase()}</Text>
                  </View>
                </View>
              )
            })}
          </View>
        </View>
      </View>
    )
    return (
      <div className="flex justify-between mt-5">
        {quaterTwo.map((mes, i) => {
          let index = allMonths.findIndex(i => i === mes)
          {/* console.log(mes); */ }
          return (
            <div
              className={`
                cicle-year bg-gold-30 text-xl font-bold flex items-center justify-center rounded-md w-10 h-10
                ${mes.toUpperCase() === actualMonth.toUpperCase() ? 'month-active' : ''}
              `}
            >
              {consultant.calcPersonalMonth(index + 1, newDate.year())}{consultant.calcPersonalMonthISK(index + 1, newDate.year())}
              <div
                className={`path-month-des ${mes.toUpperCase() === actualMonth.toUpperCase() ? 'path-month-active' : ''}`}
              >{mes.toUpperCase()}</div>
            </div>
          )
        })}
      </div>
    )
  }
  if (isQuaterThree !== undefined) {
    return (
      <View style={lifePath.container}>
        <View style={lifePath.wrap}>
          <View style={lifePath.personalYears}>
            {quaterThree.map((mes, i) => {
              console.log(allMonths, mes, i)
              let index = allMonths.findIndex(i => i === mes)
              return (
                <View style={lifePath.itemWrap}>
                  <View style={lifePath.item}>
                    <Text>{consultant.calcPersonalMonth(index + 1, newDate.year())}{consultant.calcPersonalMonthISK(index + 1, newDate.year())}</Text>
                  </View>
                  <View style={lifePath.year}>
                    <Text>{mes.toUpperCase()}</Text>
                  </View>
                </View>
              )
            })}
          </View>
        </View>
      </View>
    )
    return (
      <div className="flex justify-between mt-5">
        {quaterThree.map((mes, i) => {
          let index = allMonths.findIndex(i => i === mes)
          return (
            <div
              className={`
                cicle-year bg-gold-30 text-xl font-bold flex items-center justify-center rounded-md w-10 h-10
                ${mes.toUpperCase() === actualMonth.toUpperCase() ? 'month-active' : ''}
              `}
            >
              {consultant.calcPersonalMonth(index + 1, newDate.year())}{consultant.calcPersonalMonthISK(index + 1, newDate.year())}
              <div
                className={`path-month-des ${mes.toUpperCase() === actualMonth.toUpperCase() ? 'path-month-active' : ''}`}
              >{mes.toUpperCase()}</div>
            </div>
          )
        })}
      </div>
    )
  }
  if (isQuaterFour !== undefined) {
    return (
      <View style={lifePath.container}>
        <View style={lifePath.wrap}>
          <View style={lifePath.personalYears}>
            {quaterFour.map((mes, i) => {
              console.log(allMonths, mes, i)
              let index = allMonths.findIndex(i => i === mes)
              return (
                <View style={lifePath.itemWrap}>
                  <View style={lifePath.item}>
                    <Text>{consultant.calcPersonalMonth(index + 1, newDate.year())}{consultant.calcPersonalMonthISK(index + 1, newDate.year())}</Text>
                  </View>
                  <View style={lifePath.year}>
                    <Text>{mes.toUpperCase()}</Text>
                  </View>
                </View>
              )
            })}
          </View>
        </View>
      </View>
    )
    return (
      <div className="flex justify-between mt-5">
        {quaterFour.map((mes, i) => {
          let index = allMonths.findIndex(i => i === mes)
          return (
            <div
              className={`
                cicle-year bg-gold-30 text-xl font-bold flex items-center justify-center rounded-md w-10 h-10
                ${mes.toUpperCase() === actualMonth.toUpperCase() ? 'month-active' : ''}
              `}
            >
              {consultant.calcPersonalMonth(index + 1, newDate.year())}{consultant.calcPersonalMonthISK(index + 1, newDate.year())}
              <div
                className={`path-month-des ${mes.toUpperCase() === actualMonth.toUpperCase() ? 'path-month-active' : ''}`}
              >{mes.toUpperCase()}</div>
            </div>
          )
        })}
      </div>
    )
  }


  return (
    <View style={lifePath.container}>
      <View style={lifePath.wrap}>
        <View style={lifePath.personalYears}>
          <View style={lifePath.itemWrap}>
            <View style={lifePath.item}>
              <Text>-</Text>
            </View>
            <View style={lifePath.year}>
              <Text>-</Text>
            </View>
          </View>
          <View style={lifePath.itemWrap}>
            <View style={lifePath.item}>
              <Text>-</Text>
            </View>
            <View style={lifePath.year}>
              <Text>-</Text>
            </View>
          </View>
          <View style={lifePath.itemWrap}>
            <View style={lifePath.item}>
              <Text>-</Text>
            </View>
            <View style={lifePath.year}>
              <Text>-</Text>
            </View>
          </View>
          <View style={lifePath.itemWrap}>
            <View style={lifePath.item}>
              <Text>-</Text>
            </View>
            <View style={lifePath.year}>
              <Text>-</Text>
            </View>
          </View>
          <View style={lifePath.itemWrap}>
            <View style={lifePath.item}>
              <Text>-</Text>
            </View>
            <View style={lifePath.year}>
              <Text>-</Text>
            </View>
          </View>
          <View style={lifePath.itemWrap}>
            <View style={lifePath.item}>
              <Text>-</Text>
            </View>
            <View style={lifePath.year}>
              <Text>-</Text>
            </View>
          </View>
          <View style={lifePath.itemWrap}>
            <View style={lifePath.item}>
              <Text>-</Text>
            </View>
            <View style={lifePath.year}>
              <Text>-</Text>
            </View>
          </View>
          <View style={lifePath.itemWrap}>
            <View style={lifePath.item}>
              <Text>-</Text>
            </View>
            <View style={lifePath.year}>
              <Text>-</Text>
            </View>
          </View>
          <View style={lifePath.itemWrap}>
            <View style={lifePath.item}>
              <Text>-</Text>
            </View>
            <View style={lifePath.year}>
              <Text>-</Text>
            </View>
          </View>
          <View style={lifePath.itemWrap}>
            <View style={lifePath.item}>
              <Text>-</Text>
            </View>
            <View style={lifePath.year}>
              <Text>-</Text>
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
    top: '413px',
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
    backgroundColor: '#F5E2A7',
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