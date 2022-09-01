import  { Text, View, StyleSheet } from '@react-pdf/renderer';

export const GroupEnergy = ({groupConsultant, newDate})=>{
  const currentYear = newDate.year()
  const currentMonth = newDate.month()+1
  const currentDay = newDate.date()

return(
  <View style={energy.container}>
    <View ><Text style={[energy.text,{top:30,left:30}]}>{groupConsultant.getLifeStage(currentYear)}{groupConsultant.getLifeStageISK(currentYear)}</Text></View>
    <View ><Text style={[energy.text,{top:35,left:85}]}>{groupConsultant.calcPersonalYear(currentYear)}{groupConsultant.calcPersonalYearISK(currentYear)}</Text></View>
    <View ><Text style={[energy.text,{top:40,left:140}]}>{groupConsultant.calcCurrentQuater(newDate, currentYear)}{groupConsultant.calcCurrentQuaterISK(newDate, currentYear)}</Text></View>
    <View ><Text style={[energy.text,{top:50,left:200}]}>{groupConsultant.calcPersonalMonth(currentMonth, currentYear)}{groupConsultant.calcPersonalMonthISK(currentMonth, currentYear)}</Text></View>
    <View ><Text style={[energy.text,{top:65,left:255}]}>{groupConsultant.calcPersonalWeek(currentDay,currentMonth, currentYear)}{groupConsultant.calcPersonalWeekISK(currentDay,currentMonth, currentYear)}</Text></View>
    <View ><Text style={[energy.text,{top:75,left:320}]}>{groupConsultant.calcPersonalDay(currentDay,currentMonth, currentYear)}{groupConsultant.calcPersonalDayISK(currentDay,currentMonth, currentYear)}</Text></View>

  </View>
)
}
export const energy = StyleSheet.create({
  container:{
    position:'absolute',
    top:'260px',
    left:'15px',
    width:'356px'
  },
  text:{
    position:'absolute',
    fontSize:'12px'
  }
})