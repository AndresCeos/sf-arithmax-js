import moment from 'moment/min/moment-with-locales'
moment.locale("es-mx")

export class Universal{
  /**
   * @param {string} date - Date in string format
   */
  constructor( date = null ){
    this.date = date == null ? new Date() : new Date(date)
    this.NOW = moment()
    this.karmicos = [13, 14, 16, 19]
  }

  /**
   * @param {string} date - Date in string format
   */
  setDate( date ){
    this.date = new Date(date)
  }

  /*  Función adaptada a Redux */
  calcUniversalDay(dayToCalculate = null, monthToCalculate = null,yearToCalculate = null){
    monthToCalculate = monthToCalculate || this.NOW.month() + 1
    dayToCalculate = dayToCalculate || this.NOW.date()
    yearToCalculate = yearToCalculate || this.NOW.year()
    return this.reduceNumber(
      this.calcUniversalYear(yearToCalculate)+
      monthToCalculate+
      dayToCalculate
    )
  }
  /* Universal  Day Karmico*/
  calcUniversalDayISK(dayToCalculate = null, monthToCalculate= null, yearToCalculate= null){
    const universalDay = this.reduceNumberISK(  this.calcUniversalYear(yearToCalculate) + dayToCalculate + monthToCalculate )
    return this.karmicos.includes( universalDay ) ? '*' : '';
  }
   /* Función adaptada a Redux  */
  calcCurrentUniversalWeek( dayToCalculate = null, monthToCalculate=null, yearToCalculate=null){
    dayToCalculate = dayToCalculate || this.NOW.date()
    monthToCalculate = monthToCalculate || this.NOW.month()+1
    yearToCalculate = yearToCalculate || this.NOW.year()

    let sumUniversalWeekOne = this.reduceNumber(this.reduceNumber(yearToCalculate) + this.reduceNumber(monthToCalculate));
    if(dayToCalculate >= 1 && dayToCalculate <= 7){
      return sumUniversalWeekOne;
    }

    let sumUniversalWeekTwo = this.reduceNumber(this.reduceNumber(yearToCalculate) + sumUniversalWeekOne);
    if(dayToCalculate>= 8 && dayToCalculate <= 14){
      return sumUniversalWeekTwo;
    }

    let sumUniversalWeekThree = this.reduceNumber(sumUniversalWeekTwo + sumUniversalWeekOne);
    if(dayToCalculate>= 15 && dayToCalculate <= 21){
      return sumUniversalWeekThree;
    }

    let sumUniversalWeekFour = this.reduceNumber( this.reduceNumber(monthToCalculate) + sumUniversalWeekOne);
    if(dayToCalculate>= 22 ){
      return sumUniversalWeekFour;
    }
  }
  /* Current Universal Week Karmico*/
  calcCurrentUniversalWeekISK( dayToCalculate = null, monthToCalculate=null, yearToCalculate=null){

    let sumUniversalWeekOne = this.reduceNumberISK(yearToCalculate + monthToCalculate);
    if(dayToCalculate >= 1 && dayToCalculate <= 7){
      return this.karmicos.includes(sumUniversalWeekOne)? '*': '';
    }

    let sumUniversalWeekTwo = this.reduceNumberISK(yearToCalculate + sumUniversalWeekOne);
    if(dayToCalculate>= 8 && dayToCalculate <= 14){
      return this.karmicos.includes(sumUniversalWeekTwo)? '*': '';
    }

    let sumUniversalWeekThree = this.reduceNumberISK(sumUniversalWeekTwo + sumUniversalWeekOne);
    if(dayToCalculate>= 15 && dayToCalculate <= 21){
      return this.karmicos.includes(sumUniversalWeekThree)? '*': '';
    }

    let sumUniversalWeekFour = this.reduceNumberISK(monthToCalculate + sumUniversalWeekOne);
    if(dayToCalculate>= 22 ){
      return this.karmicos.includes(sumUniversalWeekFour)? '*': '';
    }

  }
   /*  Función adaptada a Redux */
  calcUniversalWeek(monthToCalculate = null, weekToCalculate, yearToCalculate= null ){
    monthToCalculate = monthToCalculate || this.NOW.month() + 1
    yearToCalculate = yearToCalculate || this.NOW.year()
    let weekOne =monthToCalculate + this.calcUniversalYear(yearToCalculate)
    if(weekToCalculate === 1 ){ return this.reduceNumber(weekOne)}
    let weekTwo = this.calcUniversalYear(yearToCalculate) + weekOne
    if(weekToCalculate === 2){ return this.reduceNumber(weekTwo) }
    let weekThr = weekOne + weekTwo
    if(weekToCalculate === 3){ return this.reduceNumber(weekThr )}
    let weekFou =monthToCalculate + weekOne
    if(weekToCalculate === 4){ return this.reduceNumber(weekFou) }
  }
  /* Universal Week Karmico*/
  calcUniversalWeekISK(monthToCalculate = null, weekToCalculate, yearToCalculate= null){
    let weekOne =monthToCalculate + this.calcUniversalYear(yearToCalculate)
    if(weekToCalculate === 1 ){
      const universalWeekOne =  this.reduceNumberISK(weekOne)
      return this.karmicos.includes(universalWeekOne) ? '*': '';
    }
    let weekTwo = this.calcUniversalYear(yearToCalculate) + weekOne
    if(weekToCalculate === 2){
      const universalWeekTwo = this.reduceNumberISK(weekTwo)
      return this.karmicos.includes(universalWeekTwo) ? '*': '';
    }
    let weekThr = weekOne + weekTwo
    if(weekToCalculate === 3){
      const universalWeekThree = this.reduceNumberISK(weekThr)
      return this.karmicos.includes(universalWeekThree) ? '*' : '';
    }
    let weekFou =monthToCalculate + weekOne
    if(weekToCalculate === 4){ 
      const universalweekFou = this.reduceNumberISK(weekFou)
      return this.karmicos.includes(universalweekFou) ? '*': '';
    }
  }

   /*  Función adaptada a Redux */
  calcUniversalMonth(monthToCalculate= null, yearToCalculate = null){
    monthToCalculate = monthToCalculate || this.NOW.month() + 1
    yearToCalculate = yearToCalculate || this.NOW.year()
    return this.reduceNumber(this.calcUniversalYear(yearToCalculate) + monthToCalculate)
  }
   /* Universal Month Karmico */
  calcUniversalMonthISK(monthToCalculate= null, yearToCalculate = null){
    const universalMonth = this.reduceNumberISK(this.calcUniversalYear(yearToCalculate) + monthToCalculate)
    return this.karmicos.includes(universalMonth) ? '*': '';
  }

   /*  Función adaptada a Redux */
  calcUniversalYear(yearToCalculate = null){
    yearToCalculate = yearToCalculate || this.NOW.year()
    return this.reduceNumber(yearToCalculate)
  }
  /* Universal Year Karmico*/
  calcUniversalYearISK(yearToCalculate= null){
    const universalYear  = this.calcUniversalYear(yearToCalculate)
    return this.karmicos.includes(universalYear) ? '*': '';
  }

  reduceNumberWithOut11(reduceSum){
    while( reduceSum > 9 && reduceSum !== 22){
      reduceSum = reduceSum.toString().split('').reduce((r,c)=>r += parseInt(c), 0);
    }
    return reduceSum;
  }

  reduceNumber(reduceSum){
    while( reduceSum > 9 && ! ( reduceSum === 22 || reduceSum === 11 ) ){
      reduceSum = reduceSum.toString().split('').reduce((r,c)=>r += parseInt(c), 0);
    }
    return reduceSum;
  }
  reduceNumberISK(reduceSum){
    while( reduceSum > 9 && ! this.karmicos.includes( reduceSum ) ){
      reduceSum = reduceSum.toString().toLowerCase().split('').reduce((r,c)=>r += parseInt(c), 0);
    }
    return parseInt(reduceSum);
  }
}
export default Universal
// module.exports = Universal;