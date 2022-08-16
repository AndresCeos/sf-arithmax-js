import { Text, View } from '@react-pdf/renderer';
import { StyleSheet } from '@react-pdf/renderer';
import moment from 'moment/min/moment-with-locales'
moment.locale("es-mx")

export const CalendarMonths = ({consultant, newDate}) =>{
  const enero = consultant.getAllDaysInMonth(1)
  const febrero = consultant.getAllDaysInMonth(2)
  const marzo = consultant.getAllDaysInMonth(3)
  const abril = consultant.getAllDaysInMonth(4)
  const mayo = consultant.getAllDaysInMonth(5)
  const septiembre = consultant.getAllDaysInMonth(9)
  const junio = consultant.getAllDaysInMonth(6)
  const julio = consultant.getAllDaysInMonth(7)
  const agosto = consultant.getAllDaysInMonth(8)
  const octubre = consultant.getAllDaysInMonth(10)
  const noviembre = consultant.getAllDaysInMonth(11)
  const diciembre = consultant.getAllDaysInMonth(12)
  const daysCustom = consultant.getDaysOfWeekCustom(1)
  console.log(daysCustom);


  const now = moment()

  const MonthsInDay = ({month}) =>{
    let mes = consultant.getAllDaysInMonth(month)
    let sem1 = mes.slice(0,7)
    let sem2 = mes.slice(7,14)
    let sem3 = mes.slice(14,21)
    let sem4 = mes.slice(21, 27)
    let sem5 = mes.slice(27)
    let daysOfWeek = consultant.getDaysOfWeekCustom(month)
    return(
      <>
          <View style={calendar.daysRow}>
            {sem1.map((day,index)=>
              <View>
                <Text style={calendar.days}>{day}</Text>
              </View>
              )}
          </View>
          <View style={calendar.daysRow}>
            {sem2.map((day,index)=>
              <View>
                <Text style={calendar.days}>{day}</Text>
              </View>
              )}
          </View>
          <View style={calendar.daysRow}>
          {sem3.map((day,index)=>
          <View>
            <Text style={calendar.days}>{day}</Text>
          </View>
          )}
          </View>
          <View style={calendar.daysRow}>
          {sem4.map((day,index)=>
          <View>
            <Text style={calendar.days}>{day}</Text>
          </View>
          )}
          </View>
          <View style={calendar.daysRow}>
          {sem5.map((day,index)=>
          <View>
            <Text style={calendar.days}>{day}</Text>
          </View>
          )}
          </View>
            
      </>
    )

  }
  const allMonths = consultant.getAllMonths()


  return(
    <View style={calendar.container}>
      {/*daysInMonth.map((day) =>
        <View>
          <Text>{day}</Text>
        </View>
        ) */}
        <View style={[calendar.wrap, calendar.wrap1]}>
          <View style={calendar.head}><Text style={calendar.headMonth}>{allMonths[0]} {consultant.calcPersonalMonth(1, newDate.year())}{consultant.calcPersonalMonthISK(1, newDate.year())}/{consultant.calcUniversalMonth(1, newDate.year())}{consultant.calcUniversalMonthISK(1, newDate.year())}</Text></View>
          <View style={calendar.head}><Text style={calendar.headQuater}>Cuatrimestre: {consultant.getQuaterMonth(1, newDate.year())}{consultant.getQuaterMonthISK(1, newDate.year())}</Text></View>
            <View style={calendar.week1}>
              <Text style={calendar.weektext}>1a Sem</Text>
              <Text style={[calendar.weektext, {fontWeight:'bold'}]}>{consultant.calcSelectPersonalWeek(1,1, newDate.year())}{consultant.calcSelectPersonalWeekISK(1,1, newDate.year())}/{consultant.calcUniversalWeek(1, 1, newDate.year())}{consultant.calcUniversalWeekISK(1,1, newDate.year())}</Text>
            </View>
            <View style={calendar.week2}>
              <Text style={calendar.weektext}>2a Sem</Text>
              <Text style={[calendar.weektext, {fontWeight:'bold'}]}>{consultant.calcSelectPersonalWeek(1,2, newDate.year())}{consultant.calcSelectPersonalWeekISK(1,2, newDate.year())}/{consultant.calcUniversalWeek(1, 2, newDate.year())}{consultant.calcUniversalWeekISK(1,2, newDate.year())}</Text>
            </View>
            <View style={calendar.week3}>
              <Text style={calendar.weektext}>3a Sem</Text>
              <Text style={[calendar.weektext, {fontWeight:'bold'}]}>{consultant.calcSelectPersonalWeek(1,3, newDate.year())}{consultant.calcSelectPersonalWeekISK(1,3, newDate.year())}/{consultant.calcUniversalWeek(1, 3, newDate.year())}{consultant.calcUniversalWeekISK(1,3, newDate.year())}</Text>
            </View>
            <View style={calendar.week4}>
              <Text style={calendar.weektext}>4a Sem</Text>
              <Text style={[calendar.weektext, {fontWeight:'bold'}]}>{consultant.calcSelectPersonalWeek(1,4, newDate.year())}{consultant.calcSelectPersonalWeekISK(1,4, newDate.year())}/{consultant.calcUniversalWeek(1, 4, newDate.year())}{consultant.calcUniversalWeekISK(1,4, newDate.year())}</Text>
            </View>
            {enero.length>28?
            <View style={calendar.week5}>
              <Text style={calendar.weektext}>4a Sem</Text>
              <Text style={[calendar.weektext, {fontWeight:'bold'}]}>{consultant.calcSelectPersonalWeek(1,4, newDate.year())}{consultant.calcSelectPersonalWeekISK(1,4, newDate.year())}/{consultant.calcUniversalWeek(1, 4, newDate.year())}{consultant.calcUniversalWeekISK(1,4, newDate.year())}</Text>
            </View>:''}
            <View style={calendar.daysContainer}>
            <MonthsInDay month={1}/>
            </View>
            
        </View>

        <View style={[calendar.wrap,calendar.wrap2 ]}>
          <View style={calendar.head}><Text style={calendar.headMonth}>{allMonths[1]} {consultant.calcPersonalMonth(2, newDate.year())}{consultant.calcPersonalMonthISK(2, newDate.year())}/{consultant.calcUniversalMonth(2, newDate.year())}{consultant.calcUniversalMonthISK(2, newDate.year())}</Text></View>
          <View style={calendar.head}><Text style={calendar.headQuater}>Cuatrimestre: {consultant.getQuaterMonth(2, newDate.year())}{consultant.getQuaterMonthISK(2, newDate.year())}</Text></View>
          <View style={calendar.week1}>
            <Text style={calendar.weektext}>1a Sem</Text>
            <Text style={[calendar.weektext, {fontWeight:'bold'}]}>{consultant.calcSelectPersonalWeek(2,1, newDate.year())}{consultant.calcSelectPersonalWeekISK(2,1, newDate.year())}/{consultant.calcUniversalWeek(2, 1, newDate.year())}{consultant.calcUniversalWeekISK(2,1, newDate.year())}</Text>
          </View>
          <View style={calendar.week2}>
            <Text style={calendar.weektext}>2a Sem</Text>
            <Text style={[calendar.weektext, {fontWeight:'bold'}]}>{consultant.calcSelectPersonalWeek(2,2, newDate.year())}{consultant.calcSelectPersonalWeekISK(2,2, newDate.year())}/{consultant.calcUniversalWeek(2, 2, newDate.year())}{consultant.calcUniversalWeekISK(2,2, newDate.year())}</Text>
          </View>
          <View style={calendar.week3}>
            <Text style={calendar.weektext}>3a Sem</Text>
            <Text style={[calendar.weektext, {fontWeight:'bold'}]}>{consultant.calcSelectPersonalWeek(2,3, newDate.year())}{consultant.calcSelectPersonalWeekISK(2,3, newDate.year())}/{consultant.calcUniversalWeek(2, 3, newDate.year())}{consultant.calcUniversalWeekISK(2,3, newDate.year())}</Text>
          </View>
          <View style={calendar.week4}>
            <Text style={calendar.weektext}>4a Sem</Text>
            <Text style={[calendar.weektext, {fontWeight:'bold'}]}>{consultant.calcSelectPersonalWeek(2,4, newDate.year())}{consultant.calcSelectPersonalWeekISK(2,4, newDate.year())}/{consultant.calcUniversalWeek(2, 4, newDate.year())}{consultant.calcUniversalWeekISK(2,4, newDate.year())}</Text>
          </View>
          {febrero.length>28?
          <View style={calendar.week5}>
            <Text style={calendar.weektext}>4a Sem</Text>
            <Text style={[calendar.weektext, {fontWeight:'bold'}]}>{consultant.calcSelectPersonalWeek(2,4, newDate.year())}{consultant.calcSelectPersonalWeekISK(2,4, newDate.year())}/{consultant.calcUniversalWeek(2, 4, newDate.year())}{consultant.calcUniversalWeekISK(2,4, newDate.year())}</Text>
          </View>:''}
        </View>

        <View style={[calendar.wrap,calendar.wrap3]}>
          <View style={calendar.head}><Text style={calendar.headMonth}>{allMonths[2]} {consultant.calcPersonalMonth(3, newDate.year())}{consultant.calcPersonalMonthISK(3, newDate.year())}/{consultant.calcUniversalMonth(3, newDate.year())}{consultant.calcUniversalMonthISK(3, newDate.year())}</Text></View>
          <View style={calendar.head}><Text style={calendar.headQuater}>Cuatrimestre: {consultant.getQuaterMonth(3, newDate.year())}{consultant.getQuaterMonthISK(3, newDate.year())}</Text></View>
          <View style={calendar.week1}>
            <Text style={calendar.weektext}>1a Sem</Text>
            <Text style={[calendar.weektext, {fontWeight:'bold'}]}>{consultant.calcSelectPersonalWeek(3,1, newDate.year())}{consultant.calcSelectPersonalWeekISK(3,1, newDate.year())}/{consultant.calcUniversalWeek(3, 1, newDate.year())}{consultant.calcUniversalWeekISK(3,1, newDate.year())}</Text>
          </View>
          <View style={calendar.week2}>
            <Text style={calendar.weektext}>2a Sem</Text>
            <Text style={[calendar.weektext, {fontWeight:'bold'}]}>{consultant.calcSelectPersonalWeek(3,2, newDate.year())}{consultant.calcSelectPersonalWeekISK(3,2, newDate.year())}/{consultant.calcUniversalWeek(3, 2, newDate.year())}{consultant.calcUniversalWeekISK(3,2, newDate.year())}</Text>
          </View>
          <View style={calendar.week3}>
            <Text style={calendar.weektext}>3a Sem</Text>
            <Text style={[calendar.weektext, {fontWeight:'bold'}]}>{consultant.calcSelectPersonalWeek(3,3, newDate.year())}{consultant.calcSelectPersonalWeekISK(3,3, newDate.year())}/{consultant.calcUniversalWeek(3, 3, newDate.year())}{consultant.calcUniversalWeekISK(3,3, newDate.year())}</Text>
          </View>
          <View style={calendar.week4}>
            <Text style={calendar.weektext}>4a Sem</Text>
            <Text style={[calendar.weektext, {fontWeight:'bold'}]}>{consultant.calcSelectPersonalWeek(3,4, newDate.year())}{consultant.calcSelectPersonalWeekISK(3,4, newDate.year())}/{consultant.calcUniversalWeek(3, 4, newDate.year())}{consultant.calcUniversalWeekISK(3,4, newDate.year())}</Text>
          </View>
          {marzo.length>28?
          <View style={calendar.week5}>
            <Text style={calendar.weektext}>4a Sem</Text>
            <Text style={[calendar.weektext, {fontWeight:'bold'}]}>{consultant.calcSelectPersonalWeek(3,4, newDate.year())}{consultant.calcSelectPersonalWeekISK(3,4, newDate.year())}/{consultant.calcUniversalWeek(3, 4, newDate.year())}{consultant.calcUniversalWeekISK(3,4, newDate.year())}</Text>
          </View>:''}
        </View>

        <View style={[calendar.wrap,calendar.wrap4]}>
          <View style={calendar.head}><Text style={calendar.headMonth}>{allMonths[3]} {consultant.calcPersonalMonth(4, newDate.year())}{consultant.calcPersonalMonthISK(4, newDate.year())}/{consultant.calcUniversalMonth(4, newDate.year())}{consultant.calcUniversalMonthISK(4, newDate.year())}</Text></View>
          <View style={calendar.head}><Text style={calendar.headQuater}>Cuatrimestre: {consultant.getQuaterMonth(4, newDate.year())}{consultant.getQuaterMonthISK(4, newDate.year())}</Text></View>
          <View style={calendar.week1}>
            <Text style={calendar.weektext}>1a Sem</Text>
            <Text style={[calendar.weektext, {fontWeight:'bold'}]}>{consultant.calcSelectPersonalWeek(4,1, newDate.year())}{consultant.calcSelectPersonalWeekISK(4,1, newDate.year())}/{consultant.calcUniversalWeek(4, 1, newDate.year())}{consultant.calcUniversalWeekISK(4,1, newDate.year())}</Text>
          </View>
          <View style={calendar.week2}>
            <Text style={calendar.weektext}>2a Sem</Text>
            <Text style={[calendar.weektext, {fontWeight:'bold'}]}>{consultant.calcSelectPersonalWeek(4,2, newDate.year())}{consultant.calcSelectPersonalWeekISK(4,2, newDate.year())}/{consultant.calcUniversalWeek(4, 2, newDate.year())}{consultant.calcUniversalWeekISK(4,2, newDate.year())}</Text>
          </View>
          <View style={calendar.week3}>
            <Text style={calendar.weektext}>3a Sem</Text>
            <Text style={[calendar.weektext, {fontWeight:'bold'}]}>{consultant.calcSelectPersonalWeek(4,3, newDate.year())}{consultant.calcSelectPersonalWeekISK(4,3, newDate.year())}/{consultant.calcUniversalWeek(4, 3, newDate.year())}{consultant.calcUniversalWeekISK(4,3, newDate.year())}</Text>
          </View>
          <View style={calendar.week4}>
            <Text style={calendar.weektext}>4a Sem</Text>
            <Text style={[calendar.weektext, {fontWeight:'bold'}]}>{consultant.calcSelectPersonalWeek(4,4, newDate.year())}{consultant.calcSelectPersonalWeekISK(4,4, newDate.year())}/{consultant.calcUniversalWeek(4, 4, newDate.year())}{consultant.calcUniversalWeekISK(4,4, newDate.year())}</Text>
          </View>
          {abril.length>28?
          <View style={calendar.week5}>
            <Text style={calendar.weektext}>4a Sem</Text>
            <Text style={[calendar.weektext, {fontWeight:'bold'}]}>{consultant.calcSelectPersonalWeek(4,4, newDate.year())}{consultant.calcSelectPersonalWeekISK(4,4, newDate.year())}/{consultant.calcUniversalWeek(4, 4, newDate.year())}{consultant.calcUniversalWeekISK(4,4, newDate.year())}</Text>
          </View>:''}
        </View>

        <View style={[calendar.wrap,calendar.wrap5]}>
          <View style={calendar.head}><Text style={calendar.headMonth}>{allMonths[4]} {consultant.calcPersonalMonth(5, newDate.year())}{consultant.calcPersonalMonthISK(5, newDate.year())}/{consultant.calcUniversalMonth(5, newDate.year())}{consultant.calcUniversalMonthISK(5, newDate.year())}</Text></View>
          <View style={calendar.head}><Text style={calendar.headQuater}>Cuatrimestre: {consultant.getQuaterMonth(5, newDate.year())}{consultant.getQuaterMonthISK(5, newDate.year())}</Text></View>
          <View style={calendar.week1}>
            <Text style={calendar.weektext}>1a Sem</Text>
            <Text style={[calendar.weektext, {fontWeight:'bold'}]}>{consultant.calcSelectPersonalWeek(5,1, newDate.year())}{consultant.calcSelectPersonalWeekISK(5,1, newDate.year())}/{consultant.calcUniversalWeek(5, 1, newDate.year())}{consultant.calcUniversalWeekISK(5,1, newDate.year())}</Text>
          </View>
          <View style={calendar.week2}>
            <Text style={calendar.weektext}>2a Sem</Text>
            <Text style={[calendar.weektext, {fontWeight:'bold'}]}>{consultant.calcSelectPersonalWeek(5,2, newDate.year())}{consultant.calcSelectPersonalWeekISK(5,2, newDate.year())}/{consultant.calcUniversalWeek(5, 2, newDate.year())}{consultant.calcUniversalWeekISK(5,2, newDate.year())}</Text>
          </View>
          <View style={calendar.week3}>
            <Text style={calendar.weektext}>3a Sem</Text>
            <Text style={[calendar.weektext, {fontWeight:'bold'}]}>{consultant.calcSelectPersonalWeek(5,3, newDate.year())}{consultant.calcSelectPersonalWeekISK(5,3, newDate.year())}/{consultant.calcUniversalWeek(5, 3, newDate.year())}{consultant.calcUniversalWeekISK(5,3, newDate.year())}</Text>
          </View>
          <View style={calendar.week4}>
            <Text style={calendar.weektext}>4a Sem</Text>
            <Text style={[calendar.weektext, {fontWeight:'bold'}]}>{consultant.calcSelectPersonalWeek(5,4, newDate.year())}{consultant.calcSelectPersonalWeekISK(5,4, newDate.year())}/{consultant.calcUniversalWeek(5, 4, newDate.year())}{consultant.calcUniversalWeekISK(5,4, newDate.year())}</Text>
          </View>
          {mayo.length>28?
          <View style={calendar.week5}>
            <Text style={calendar.weektext}>4a Sem</Text>
            <Text style={[calendar.weektext, {fontWeight:'bold'}]}>{consultant.calcSelectPersonalWeek(5,4, newDate.year())}{consultant.calcSelectPersonalWeekISK(5,4, newDate.year())}/{consultant.calcUniversalWeek(5, 4, newDate.year())}{consultant.calcUniversalWeekISK(5,4, newDate.year())}</Text>
          </View>:''}
        </View>

        <View style={[calendar.wrap,calendar.wrap6]}>
          <View style={calendar.head}><Text style={calendar.headMonth}>{allMonths[5]} {consultant.calcPersonalMonth(6, newDate.year())}{consultant.calcPersonalMonthISK(6, newDate.year())}/{consultant.calcUniversalMonth(6, newDate.year())}{consultant.calcUniversalMonthISK(6, newDate.year())}</Text></View>
          <View style={calendar.head}><Text style={calendar.headQuater}>Cuatrimestre: {consultant.getQuaterMonth(6, newDate.year())}{consultant.getQuaterMonthISK(6, newDate.year())}</Text></View>
          <View style={calendar.week1}>
            <Text style={calendar.weektext}>1a Sem</Text>
            <Text style={[calendar.weektext, {fontWeight:'bold'}]}>{consultant.calcSelectPersonalWeek(6,1, newDate.year())}{consultant.calcSelectPersonalWeekISK(6,1, newDate.year())}/{consultant.calcUniversalWeek(6, 1, newDate.year())}{consultant.calcUniversalWeekISK(6,1, newDate.year())}</Text>
          </View>
          <View style={calendar.week2}>
            <Text style={calendar.weektext}>2a Sem</Text>
            <Text style={[calendar.weektext, {fontWeight:'bold'}]}>{consultant.calcSelectPersonalWeek(6,2, newDate.year())}{consultant.calcSelectPersonalWeekISK(6,2, newDate.year())}/{consultant.calcUniversalWeek(6, 2, newDate.year())}{consultant.calcUniversalWeekISK(6,2, newDate.year())}</Text>
          </View>
          <View style={calendar.week3}>
            <Text style={calendar.weektext}>3a Sem</Text>
            <Text style={[calendar.weektext, {fontWeight:'bold'}]}>{consultant.calcSelectPersonalWeek(6,3, newDate.year())}{consultant.calcSelectPersonalWeekISK(6,3, newDate.year())}/{consultant.calcUniversalWeek(6, 3, newDate.year())}{consultant.calcUniversalWeekISK(6,3, newDate.year())}</Text>
          </View>
          <View style={calendar.week4}>
            <Text style={calendar.weektext}>4a Sem</Text>
            <Text style={[calendar.weektext, {fontWeight:'bold'}]}>{consultant.calcSelectPersonalWeek(6,4, newDate.year())}{consultant.calcSelectPersonalWeekISK(6,4, newDate.year())}/{consultant.calcUniversalWeek(6, 4, newDate.year())}{consultant.calcUniversalWeekISK(6,4, newDate.year())}</Text>
          </View>
          {junio.length>28?
          <View style={calendar.week5}>
            <Text style={calendar.weektext}>4a Sem</Text>
            <Text style={[calendar.weektext, {fontWeight:'bold'}]}>{consultant.calcSelectPersonalWeek(6,4, newDate.year())}{consultant.calcSelectPersonalWeekISK(6,4, newDate.year())}/{consultant.calcUniversalWeek(6, 4, newDate.year())}{consultant.calcUniversalWeekISK(6,4, newDate.year())}</Text>
          </View>:''}
        </View>

        <View style={[calendar.wrap,calendar.wrap7]}>
          <View style={calendar.head}><Text style={calendar.headMonth}>{allMonths[6]} {consultant.calcPersonalMonth(7, newDate.year())}{consultant.calcPersonalMonthISK(7, newDate.year())}/{consultant.calcUniversalMonth(7, newDate.year())}{consultant.calcUniversalMonthISK(7, newDate.year())}</Text></View>
          <View style={calendar.head}><Text style={calendar.headQuater}>Cuatrimestre: {consultant.getQuaterMonth(7, newDate.year())}{consultant.getQuaterMonthISK(7, newDate.year())}</Text></View>
          <View style={calendar.week1}>
            <Text style={calendar.weektext}>1a Sem</Text>
            <Text style={[calendar.weektext, {fontWeight:'bold'}]}>{consultant.calcSelectPersonalWeek(7,1, newDate.year())}{consultant.calcSelectPersonalWeekISK(7,1, newDate.year())}/{consultant.calcUniversalWeek(7, 1, newDate.year())}{consultant.calcUniversalWeekISK(7,1, newDate.year())}</Text>
          </View>
          <View style={calendar.week2}>
            <Text style={calendar.weektext}>2a Sem</Text>
            <Text style={[calendar.weektext, {fontWeight:'bold'}]}>{consultant.calcSelectPersonalWeek(7,2, newDate.year())}{consultant.calcSelectPersonalWeekISK(7,2, newDate.year())}/{consultant.calcUniversalWeek(7, 2, newDate.year())}{consultant.calcUniversalWeekISK(7,2, newDate.year())}</Text>
          </View>
          <View style={calendar.week3}>
            <Text style={calendar.weektext}>3a Sem</Text>
            <Text style={[calendar.weektext, {fontWeight:'bold'}]}>{consultant.calcSelectPersonalWeek(7,3, newDate.year())}{consultant.calcSelectPersonalWeekISK(7,3, newDate.year())}/{consultant.calcUniversalWeek(7, 3, newDate.year())}{consultant.calcUniversalWeekISK(7,3, newDate.year())}</Text>
          </View>
          <View style={calendar.week4}>
            <Text style={calendar.weektext}>4a Sem</Text>
            <Text style={[calendar.weektext, {fontWeight:'bold'}]}>{consultant.calcSelectPersonalWeek(7,4, newDate.year())}{consultant.calcSelectPersonalWeekISK(7,4, newDate.year())}/{consultant.calcUniversalWeek(7, 4, newDate.year())}{consultant.calcUniversalWeekISK(7,4, newDate.year())}</Text>
          </View>
          {julio.length>28?
          <View style={calendar.week5}>
            <Text style={calendar.weektext}>4a Sem</Text>
            <Text style={[calendar.weektext, {fontWeight:'bold'}]}>{consultant.calcSelectPersonalWeek(7,4, newDate.year())}{consultant.calcSelectPersonalWeekISK(7,4, newDate.year())}/{consultant.calcUniversalWeek(7, 4, newDate.year())}{consultant.calcUniversalWeekISK(7,4, newDate.year())}</Text>
          </View>:''}
        </View>

        <View style={[calendar.wrap,calendar.wrap8]}>
          <View style={calendar.head}><Text style={calendar.headMonth}>{allMonths[7]} {consultant.calcPersonalMonth(8, newDate.year())}{consultant.calcPersonalMonthISK(8, newDate.year())}/{consultant.calcUniversalMonth(8, newDate.year())}{consultant.calcUniversalMonthISK(8, newDate.year())}</Text></View>
          <View style={calendar.head}><Text style={calendar.headQuater}>Cuatrimestre: {consultant.getQuaterMonth(8, newDate.year())}{consultant.getQuaterMonthISK(8, newDate.year())}</Text></View>
          <View style={calendar.week1}>
            <Text style={calendar.weektext}>1a Sem</Text>
            <Text style={[calendar.weektext, {fontWeight:'bold'}]}>{consultant.calcSelectPersonalWeek(8,1, newDate.year())}{consultant.calcSelectPersonalWeekISK(8,1, newDate.year())}/{consultant.calcUniversalWeek(8, 1, newDate.year())}{consultant.calcUniversalWeekISK(8,1, newDate.year())}</Text>
          </View>
          <View style={calendar.week2}>
            <Text style={calendar.weektext}>2a Sem</Text>
            <Text style={[calendar.weektext, {fontWeight:'bold'}]}>{consultant.calcSelectPersonalWeek(8,2, newDate.year())}{consultant.calcSelectPersonalWeekISK(8,2, newDate.year())}/{consultant.calcUniversalWeek(8, 2, newDate.year())}{consultant.calcUniversalWeekISK(8,2, newDate.year())}</Text>
          </View>
          <View style={calendar.week3}>
            <Text style={calendar.weektext}>3a Sem</Text>
            <Text style={[calendar.weektext, {fontWeight:'bold'}]}>{consultant.calcSelectPersonalWeek(8,3, newDate.year())}{consultant.calcSelectPersonalWeekISK(8,3, newDate.year())}/{consultant.calcUniversalWeek(8, 3, newDate.year())}{consultant.calcUniversalWeekISK(8,3, newDate.year())}</Text>
          </View>
          <View style={calendar.week4}>
            <Text style={calendar.weektext}>4a Sem</Text>
            <Text style={[calendar.weektext, {fontWeight:'bold'}]}>{consultant.calcSelectPersonalWeek(8,4, newDate.year())}{consultant.calcSelectPersonalWeekISK(8,4, newDate.year())}/{consultant.calcUniversalWeek(8, 4, newDate.year())}{consultant.calcUniversalWeekISK(8,4, newDate.year())}</Text>
          </View>
          {agosto.length>28?
          <View style={calendar.week5}>
            <Text style={calendar.weektext}>4a Sem</Text>
            <Text style={[calendar.weektext, {fontWeight:'bold'}]}>{consultant.calcSelectPersonalWeek(8,4, newDate.year())}{consultant.calcSelectPersonalWeekISK(8,4, newDate.year())}/{consultant.calcUniversalWeek(8, 4, newDate.year())}{consultant.calcUniversalWeekISK(8,4, newDate.year())}</Text>
          </View>:''}
        </View>


    </View>
  )
}

export const calendar = StyleSheet.create({
  container:{
    position:'absolute'
  },
  wrap:{
    position:'relative'
  },
  wrap1:{
    top:'0px',
    left:'15px'
  },
  wrap2:{
    top:'0px',
    left:'260px'
  },
  wrap3:{
    top:'154px',
    left:'15px'
  },
  wrap4:{
    top:'153px',
    left:'260px'
  },
  wrap5:{
    top:'305px',
    left:'15px'
  },
  wrap6:{
    top:'305px',
    left:'260px'
  },
  wrap7:{
    top:'456px',
    left:'15px'
  },
  wrap8:{
    top:'456px',
    left:'260px'
  },
  head:{
    width:'100px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  week1:{
    width:'33px',
    display:'block',
    top:'112px',
    left:'28px',
    position:'absolute'
  },
  week2:{
    width:'33px',
    display:'block',
    top:'129px',
    left:'28px',
    position:'absolute'
  },
  week3:{
    width:'33px',
    display:'block',
    top:'145px',
    left:'28px',
    position:'absolute'
  },
  week4:{
    width:'33px',
    display:'block',
    top:'164px',
    left:'28px',
    position:'absolute'
  },
  week5:{
    width:'33px',
    display:'block',
    top:'181px',
    left:'28px',
    position:'absolute'
  },
  days:{
    fontSize:'6px'
  },
  daysRow:{
    display:'flex',
    flexDirection:'row'
  },
  daysContainer:{
    width:'175px',
    top:'112px',
    display:'flex',
    flexDirection:'column',
    left:'60px',
    position:'absolute'
  },
  weektext:{
    fontSize:'7px',
    textAlign:'center',
    color:'#000'
  },
  headMonth:{
    top:'85px',
    left:'50px',
    fontSize:'10px',
    color:'#fff',
    position:'absolute'
  },
  headQuater:{
    top:'85px',
    left:'165px',
    fontSize:'10px',
    color:'#fff',
    position:'absolute'
  }
})