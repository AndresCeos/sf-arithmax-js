import moment from 'moment/min/moment-with-locales'
moment.locale("es-mx")

export class Group {
  constructor(group, groupDate){
    this.group = group
    this.karmicos = [13, 14, 16, 19]
    this.NOW = moment()
    this.groupDate = parseInt(groupDate)
  }

  getGroup(){
    console.log('Grupo => '+this.group)
    console.log('Fecha de inte => '+this.groupDate);
  }
  getYearTimeCurve(){
    return this.groupDate
  }
  getYearsOld( yearToCalculate = null ){
    yearToCalculate = yearToCalculate || this.NOW.year()
    return yearToCalculate - this.NOW.year() //.year()
  }

  getA(){
    const partnerGroup = this.group
    let A = 0
    partnerGroup.forEach(a =>{
      let birthDate = a.getBirthDate()
      A+=birthDate.month()+1
    })
    return this.reduceNumber(A)
  }

  getAISK(){
    const partnerGroup = this.group
    let A = 0
    partnerGroup.forEach(a =>{
      let birthDate = a.getBirthDate()
      A+=birthDate.month()+1
    })
    let reduceISK = this.reduceNumberISK(A)
    return this.karmicos.includes(reduceISK)?'*':''
  }

  getB(){
    const partnerGroup = this.group
    let B = 0
    partnerGroup.forEach(b =>{
      let birthDate = b.getBirthDate()
      B+=birthDate.date()
    })
    return this.reduceNumber(B)
  }

  getBISK(){
    const partnerGroup = this.group
    let B = 0
    partnerGroup.forEach(b =>{
      let birthDate = b.getBirthDate()
      B+=birthDate.date()
    })
    let reduceISK = this.reduceNumberISK(B)
    return this.karmicos.includes(reduceISK)?'*':''
  }

  getC(){
    const partnerGroup = this.group
    let C = 0
    partnerGroup.forEach(c =>{
      let birthDate = c.getBirthDate()
      C+=birthDate.year()
    })
    return this.reduceNumber(C)
  }

  getCISK(){
    const partnerGroup = this.group
    let C = 0
    partnerGroup.forEach(c =>{
      let birthDate = c.getBirthDate()
      C+=birthDate.year()
    })
    let reduceISK = this.reduceNumberISK(C)
    return this.karmicos.includes(reduceISK)?'*':''
  }

  getD(){
    return this.reduceNumber(
      this.getA() +
      this.getB() +
      this.getC()
    );
  }

  getDISK(){
    const D =  this.reduceNumberISK(
      this.getA() +
      this.getB() +
      this.getC()
    )
    return this.karmicos.includes(D)? '*': ''
  }

  getE(){
    return this.reduceNumber(
      this.getA() +
      this.getB()
    );
  }
  getEISK(){
    const E =  this.reduceNumberISK(
      this.getA() +
      this.getB()
    )
    return this.karmicos.includes(E)?'*' : ''
  }

  getF(){
    return this.reduceNumber(
      this.getC() +
      this.getB()
    );
  }
  getFISK(){
    const F =  this.reduceNumberISK(
      this.getC() +
      this.getB()
    )
    return this.karmicos.includes(F)?'*':''
  }

  getG(){
    return this.reduceNumber(
      this.getE() +
      this.getF()
    );
  }
  getGISK(){
    const G = this.reduceNumberISK(
      this.getE() +
      this.getF()
    )
    return this.karmicos.includes(G)?'*' : ''
  }

  getH(){
    return this.reduceNumber(
      this.getA() +
      this.getC()
    );
  }
  getHISK(){
    const H =  this.reduceNumberISK(
      this.getA() +
      this.getC()
    )
    return this.karmicos.includes(H)?'*':''
  }

  getI(){
    return this.reduceNumber(
      this.getE() +
      this.getF() +
      this.getG()
    );
  }
  getIISK(){
    const I=  this.reduceNumberISK(
      this.getE() +
      this.getF() +
      this.getG()
    )
    return this.karmicos.includes(I)?'*': ''
  }

  getJ(){
    return this.reduceNumber(
      this.getH() +
      this.getD()
    );
  }
  getJISK(){
    const J =  this.reduceNumberISK(
      this.getH() +
      this.getD()
    )
    return this.karmicos.includes(J)? '*': ''
  }



  calcName(){
  const partnerGroup = this.group
  let resultCalcName =0
  partnerGroup.forEach( g => {
    resultCalcName+= g.calcName()
  });
  return this.reduceNumber(resultCalcName)
  }

/** Calculate Name */
  calcNameISK(){
    const partnerGroup = this.group
    let resultCalcName = 0
    partnerGroup.forEach( g => {
      resultCalcName+= g.calcName()
    });
    let resultISK = this.reduceNumberISK(resultCalcName)
    return this.karmicos.includes(resultISK)? '*': ''
    }
 /** Calculate Soul */
  calcSoulNumber(){
    const partnerGroup = this.group
    let soul  = 0
    partnerGroup.forEach( g => {
      soul+= g.calcSoulNumber()
    });
    return this.reduceNumber(soul)
    }

  calcSoulNumberISK(){
    const partnerGroup = this.group
    let soul = 0
    partnerGroup.forEach( g => {
      soul+= g.calcSoulNumber()
    });
    let soulISK = this.reduceNumberISK(soul)
    return this.karmicos.includes(soulISK)? '*': ''
    }
 /** Calculate Soul Expression */
  calcSoulExpresion(){
    const partnerGroup = this.group
    let soul  = 0
    partnerGroup.forEach( g => {
      soul+= g.calcSoulExpresion()
    });
    return this.reduceNumber(soul)
  }

  calcSoulExpresionISK(){
    const partnerGroup = this.group
    let soul = 0
    partnerGroup.forEach( g => {
      soul+= g.calcSoulExpresion()
    });
    let soulISK = this.reduceNumberISK(soul)
    return this.karmicos.includes(soulISK)? '*': ''
  }
  /** Calculate Maturity */
  calcMaturity(){
    const partnerGroup = this.group
    let soul  = 0
    partnerGroup.forEach( g => {
      soul+= g.calcMaturity()
    });
    return this.reduceNumber(soul)
  }

  calcMaturityISK(){
    const partnerGroup = this.group
    let soul = 0
    partnerGroup.forEach( g => {
      soul+= g.calcMaturity()
    });
    let soulISK = this.reduceNumberISK(soul)
    return this.karmicos.includes(soulISK)? '*': ''
  }
  calcPersonalYear(yearToCalculate = null){
    yearToCalculate = yearToCalculate || this.NOW.year()
    return this.reduceNumber(
      this.getA() +
      this.getB() +
      yearToCalculate
    )
  }
  calcPersonalYearISK(yearToCalculate= null){
    const personalYear = this.reduceNumberISK(this.getA() + this.getB() + yearToCalculate )
    return this.karmicos.includes( personalYear ) ? '*' : '';
  }
  /**
   * calculate personal month
   * @returns {Number} sumPersonalMonth
   */
  calcPersonalMonth( monthToCalculate=null,yearToCalculate= null){
    yearToCalculate = yearToCalculate || this.NOW.year()
    monthToCalculate = monthToCalculate || this.NOW.month()+1
    let personalYear = this.calcPersonalYear(yearToCalculate)
    const personalMonth = this.reduceNumber( personalYear +monthToCalculate )
    return personalMonth
  }
  /** Personal Month Karmico */
  calcPersonalMonthISK( monthToCalculate=null,yearToCalculate= null){
    yearToCalculate = yearToCalculate || this.NOW.year()
    monthToCalculate = monthToCalculate || this.NOW.month()+1
    let personalYear = this.calcPersonalYear(yearToCalculate)
    const personalMonth = this.reduceNumberISK( personalYear +monthToCalculate )
    return this.karmicos.includes(personalMonth)? '*': '';
  }

  /**
   * calculate personal week
   * @returns {Number} sumPersonalWeek
   */
  calcPersonalWeek(dayToCalculate= null,monthToCalculate= null,yearToCalculate= null){
    yearToCalculate = yearToCalculate || this.NOW.year()
    monthToCalculate = monthToCalculate || this.NOW.month()+1
    dayToCalculate = dayToCalculate || this.NOW.date()
    let sumPersonalWeekOne = this.reduceNumber(this.calcPersonalYear(yearToCalculate) +monthToCalculate)
    if(dayToCalculate >= 1 && dayToCalculate  <= 7){
      return sumPersonalWeekOne;
    }
    let sumPersonalWeekTwo = this.reduceNumber(this.calcPersonalYear(yearToCalculate) + sumPersonalWeekOne)
    if(dayToCalculate>= 8 && dayToCalculate <= 14){
      return sumPersonalWeekTwo;
    }

    let sumPersonalWeekThree = this.reduceNumber(sumPersonalWeekTwo + sumPersonalWeekOne);
    if((dayToCalculate) >= 15 && dayToCalculate <= 21){
      return sumPersonalWeekThree;
    }

    let sumPersonalWeekFour = this.reduceNumber(monthToCalculate + sumPersonalWeekOne);
    if(dayToCalculate >= 22 ){
      return sumPersonalWeekFour;
    }
  }
  /** Personal Week Karmico */
  calcPersonalWeekISK(dayToCalculate= null,monthToCalculate= null,yearToCalculate= null){
    yearToCalculate = yearToCalculate || this.NOW.year()
    monthToCalculate = monthToCalculate || this.NOW.month()+1
    dayToCalculate = dayToCalculate || this.NOW.date()
    let sumPersonalWeekOne = this.reduceNumberISK(this.calcPersonalYear(yearToCalculate) +monthToCalculate)
    if(dayToCalculate >= 1 && dayToCalculate  <= 7){
      return this.karmicos.includes(sumPersonalWeekOne)? '*': '';
    }
    let sumPersonalWeekTwo = this.reduceNumberISK(this.calcPersonalYear(yearToCalculate) + sumPersonalWeekOne)
    if(dayToCalculate>= 8 && dayToCalculate <= 14){
      return this.karmicos.includes(sumPersonalWeekTwo)? '*': '';
    }

    let sumPersonalWeekThree = this.reduceNumberISK(sumPersonalWeekTwo + sumPersonalWeekOne);
    if((dayToCalculate) >= 15 && dayToCalculate <= 21){
      return this.karmicos.includes(sumPersonalWeekThree)? '*': '';
    }

    let sumPersonalWeekFour = this.reduceNumberISK(monthToCalculate + sumPersonalWeekOne);
    if(dayToCalculate >= 22 ){
      return this.karmicos.includes(sumPersonalWeekFour)? '*': '';
    }
  }

  calcPersonalDay(dayToCalculate= null,monthToCalculate= null,yearToCalculate= null){
    yearToCalculate = yearToCalculate || this.NOW.year()
    monthToCalculate = monthToCalculate || this.NOW.month()+1
    dayToCalculate = dayToCalculate || this.NOW.date()
    return this.reduceNumber(
      this.calcPersonalYear(yearToCalculate) +
      monthToCalculate +
      dayToCalculate
    )
  }
  /** Personal Day Karmico */
  calcPersonalDayISK(dayToCalculate= null,monthToCalculate= null,yearToCalculate= null){
    yearToCalculate = yearToCalculate || this.NOW.year()
    monthToCalculate = monthToCalculate || this.NOW.month()+1
    dayToCalculate = dayToCalculate || this.NOW.date()
    const personalDay =  this.reduceNumberISK(this.calcPersonalYear(yearToCalculate) +monthToCalculate +dayToCalculate)
    return this.karmicos.includes(personalDay)? '*':'';
  }

  getLifeStage(yearToCalculate = null){
    yearToCalculate = yearToCalculate || this.NOW.year()
    let start = this.groupDate
    let duration = 9 - this.calcPersonalYear(start)
    let stageOneEnd = start + duration
    if(duration === 0){
      stageOneEnd = stageOneEnd +9
    }
    let stageOne = this.getE()
    if( start<= yearToCalculate && yearToCalculate <= stageOneEnd ){
      return stageOne;
    }

    let stageTwo = this.getF()
    let stageTwoEnd = stageOneEnd + 9
    if( stageOneEnd <= yearToCalculate && yearToCalculate <= stageTwoEnd ){
      return stageTwo;
    }

    let stageThr = this.getG()
    let stageThrEnd = stageTwoEnd + 9
    if( stageTwoEnd <= yearToCalculate && yearToCalculate <= stageThrEnd ){
      return stageThr;
    }

    let stageFou = this.getH()
    let stageFouEnd = stageThrEnd + 9
    if( stageThrEnd <= yearToCalculate &&yearToCalculate <= stageFouEnd ){
      return stageFou;
    }

    if( stageFouEnd <= yearToCalculate && yearToCalculate <= (stageFouEnd + 9) ){
      return stageThr;
    }
    if( (stageFouEnd + 9) <= yearToCalculate && yearToCalculate <= (stageFouEnd + 18) ){
      return stageTwo;
    }
    if( (stageFouEnd + 18) <= yearToCalculate ){
      return stageOne;
    }
  }

  /** Life Stage Karmica */
  getLifeStageISK(yearToCalculate = null){
    yearToCalculate = yearToCalculate || this.NOW.year()
    let start = this.groupDate
    let duration = 9 - this.calcPersonalYear(start)
    let stageOneEnd = start + duration
    if(duration === 0){
      stageOneEnd = stageOneEnd +9
    }
    let stageOne = this.reduceNumberISK(this.getA() +this.getB())
    if( start<= yearToCalculate && yearToCalculate <= stageOneEnd ){
      return this.karmicos.includes(stageOne)? '*':'';
    }

    let stageTwo = this.reduceNumberISK( this.getC() +this.getB())
    let stageTwoEnd = stageOneEnd + 9
    if( stageOneEnd <= yearToCalculate && yearToCalculate <= stageTwoEnd ){
      return this.karmicos.includes(stageTwo)? '*':'';
    }

    let stageThr = this.reduceNumberISK(this.getE() +this.getF())
    let stageThrEnd = stageTwoEnd + 9
    if( stageTwoEnd <= yearToCalculate && yearToCalculate <= stageThrEnd ){
      return this.karmicos.includes(stageThr)? '*':'';
    }

    let stageFou = this.reduceNumberISK(this.getA() +this.getC())
    let stageFouEnd = stageThrEnd + 9
    if( stageThrEnd <= yearToCalculate &&yearToCalculate <= stageFouEnd ){
      return this.karmicos.includes(stageFou)? '*':'';
    }

    if( stageFouEnd <= yearToCalculate && yearToCalculate <= (stageFouEnd + 9) ){
      return this.karmicos.includes(stageThr)? '*':'';
    }
    if( (stageFouEnd + 9) <= yearToCalculate && yearToCalculate <= (stageFouEnd + 18) ){
      return this.karmicos.includes(stageTwo)? '*':'';
    }
    if( (stageFouEnd + 18) <= yearToCalculate ){
      return this.karmicos.includes(stageOne)? '*':'';
    }
  }

  

  /**
   * calculate first quater
   * @returns {Number} quater one
   */
    getQuaterOne(){
      return this.getC()
    }
    /* Quater One Karmico  */
    getQuaterOneISK(){
      return this.getCISK()
    }

    /**
     * calculate second quater
     * @returns {Number} quater two
     */
    getQuaterTwo(yearToCalculate = null){
      yearToCalculate = yearToCalculate || this.NOW.year()
      return this.reduceNumber( yearToCalculate - this.getD() )
    }
    /* Quater Two Karmico  */
    getQuaterTwoISK(yearToCalculate = null){
      const quaterTwo =  this.reduceNumberISK( yearToCalculate - this.getD() )
      return this.karmicos.includes(quaterTwo)? '*': '';
    }
    /**
     * calculate third quater
     * @returns {Number} quater three
     */
    getQuaterThree(yearToCalculate = null){
      yearToCalculate = yearToCalculate || this.NOW.year()
      return this.reduceNumber(this.getQuaterOne() + this.getQuaterTwo(yearToCalculate))
    }
    /* Quater Three Karmico  */
    getQuaterThreeISK(yearToCalculate = null){
      const quaterThr=  this.reduceNumberISK(this.getQuaterOne() + this.getQuaterTwo(yearToCalculate))
      return this.karmicos.includes(quaterThr)? '*': '';
    }


  calcCurrentQuater(monthToCalculate = null, yearToCalculate = null){
    yearToCalculate = yearToCalculate || this.NOW.year()
    monthToCalculate = monthToCalculate || this.NOW
    String.prototype.capitalize = function() {
      return this.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase(); });
    }
    const listOfMonths = this.getCustomMonths()
    const actualMonth = monthToCalculate.format('MMMM');
    const index = listOfMonths.findIndex(i => i === actualMonth.capitalize())
    const indexEnero = listOfMonths.findIndex(i => i === 'Enero')
    if(index<5){return this.getQuaterOne()}
    if (index>4&&index<9) {
      if(index >indexEnero){
        return this.getQuaterTwo(yearToCalculate-1)
      }else{
        return this.getQuaterTwo(yearToCalculate)
      }
    }
    if(index>8){
      if(index >indexEnero){
        return this.getQuaterThree(yearToCalculate-1)
      }else{
        return this.getQuaterThree(yearToCalculate)
      }
      }
  }
  /** Current Quater Karmico */
  calcCurrentQuaterISK(monthToCalculate = null, yearToCalculate = null){
    yearToCalculate = yearToCalculate || this.NOW.year()
    monthToCalculate = monthToCalculate || this.NOW
    String.prototype.capitalize = function() {
      return this.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase(); });
    }
    const listOfMonths = this.getCustomMonths()
    const actualMonth = monthToCalculate.format('MMMM');
    const index = listOfMonths.findIndex(i => i === actualMonth.capitalize())
    const indexEnero = listOfMonths.findIndex(i => i === 'Enero')
    if(index<5){return this.getQuaterOneISK()}
    if (index>4&&index<9) {
      if(index >indexEnero){
        return this.getQuaterTwoISK(yearToCalculate-1)
      }else{
        return this.getQuaterTwoISK(yearToCalculate)
      }
    }
    if(index>8){
      if(index >indexEnero){
        return this.getQuaterThreeISK(yearToCalculate-1)
      }else{
        return this.getQuaterThreeISK(yearToCalculate)
      }
      }
  }

  getCustomMonths(){
    let sumBirthdates = 0
    this.group.forEach(m=>{
      let birth = m.getBirthDate()
      sumBirthdates+=birth.month()+1
    })
    let reduce;
    if(sumBirthdates===19){
      reduce = 10;
    }else{
      reduce = this.reduceMonth(sumBirthdates)
    }
    // console.log(reduce);
    let reduceIndex = reduce -1
    const months = this.getAllMonths()
    const listOfMonths = []
    for (let index = 0; index < 13; index++) {
      if(reduceIndex>11 ){
        reduceIndex = 0;
      }
      listOfMonths.push(months[reduceIndex])
      reduceIndex++;
    }
    return listOfMonths
  }

  /**
   * calculate current stage name
   * @returns {Number} stage
   */

   getLifeStageNumber(yearToCalculate= null){
    yearToCalculate = yearToCalculate|| this.NOW.year()
    const start = this.groupDate
    let duration = 9 - this.calcPersonalYear(yearToCalculate)
    let stageOneEnd = start + duration
    if(duration === 0){
      stageOneEnd = stageOneEnd +9
    }
    // let stageOne = this.getE()
    if( start<= yearToCalculate && yearToCalculate <= stageOneEnd ){
      return 1;
    }

    // let stageTwo = this.getF()
    let stageTwoEnd = stageOneEnd + 9
    if( stageOneEnd <= yearToCalculate && yearToCalculate <= stageTwoEnd ){
      return 2;
    }

    // let stageThr = this.getG()
    let stageThrEnd = stageTwoEnd + 9
    if( stageTwoEnd <= yearToCalculate && yearToCalculate <= stageThrEnd ){
      return 3;
    }

    // const stageFou = this.getH()
    let stageFouEnd = stageThrEnd + 9
    if( stageThrEnd <= yearToCalculate && yearToCalculate <= stageFouEnd ){
      return 4;
    }

    if( stageFouEnd <= yearToCalculate && yearToCalculate <= (stageFouEnd + 9) ){
      return 5;
    }
    if( (stageFouEnd + 9) <= yearToCalculate && yearToCalculate <= (stageFouEnd + 18) ){
      return 6;
    }
    if( (stageFouEnd + 18) <= yearToCalculate ){
      return 7;
    }
  }
  

  /**
   * calculate life stages
   * AKA: 1 => E
   * AKA: 2 => F
   * AKA: 3 => G
   * AKA: 4 => H
   * @returns {Number}
   */
   calcLifeStage( stage = 1 ){
    const stageOne =this.getE()
    if( stage === 1 ) return stageOne

    const stageTwo = this.getF()
    if( stage === 2 ) return stageTwo

    const stageThr =this.getG()
    if( stage === 3 ) return stageThr

    const stageFou = this.getH()
    if( stage === 4 ) return stageFou

    if( stage === 5 ) return stageThr
    if( stage === 6 ) return stageTwo
    if( stage === 7 ) return stageOne
  }
  calcLifeStageISK( stage = 1 ){
    const stageOne = this.reduceNumberISK(this.getA() +this.getB())
    if( stage === 1 ) return this.karmicos.includes(stageOne)? '*': '';

    const stageTwo =  this.reduceNumberISK(this.getC() + this.getB())
    if( stage === 2 ) return this.karmicos.includes(stageTwo)? '*': '';

    const stageThr = this.reduceNumberISK(this.getE() + this.getF())
    if( stage === 3 ) return this.karmicos.includes(stageThr)? '*': '';

    const stageFou =  this.reduceNumberISK(this.getA() +this.getC())
    if( stage === 4 ) return this.karmicos.includes(stageFou)? '*': '';

    if( stage === 5 ) return this.karmicos.includes(stageThr)? '*': '';
    if( stage === 6 ) return this.karmicos.includes(stageTwo)? '*': '';
    if( stage === 7 ) return this.karmicos.includes(stageOne)? '*': '';
  }

  calcLifeStageDuration( stage = 1){
    let start = this.groupDate
    let stageOne = 9 - this.calcPersonalYear(start)
    let stageOneEnd = start + stageOne
    if(stageOne === 0){
      stageOneEnd = stageOneEnd +9
    }

    if( stage === 1 ){
        return stageOneEnd
    }
    if( stage < 8 ){
      const stageEnd = stageOneEnd + Math.abs((stage - 1) * 9)
      return stageEnd
    }

    return 0
  }

  getAllMonths(){
    return ['Enero', 'Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
  }

  reduceMonth(reduceSum){
    if(reduceSum !== 11 || reduceSum !==12  ){
      reduceSum = reduceSum.toString().split('').reduce((r,c)=>r += parseInt(c), 0);
    }
    return parseInt(reduceSum);
  }

  /**
 * get nine year cycle
 * @returns {Number} nineYearCycle
 */
  getNineYearCycleStage(yearToCalculate = null){
    yearToCalculate=yearToCalculate|| this.NOW.year()
    let fisrtValue = false
    let firstYear
    let nineYearCycle =[]
    for (let index = 0; index <=9; index++) {
      let personalYear = this.calcPersonalYear(yearToCalculate - index)
      if(personalYear === 9&&fisrtValue===false){
        nineYearCycle.push(yearToCalculate - index)
          firstYear = yearToCalculate - index
          fisrtValue = true
      }
    }
    for (let index = 1; index <=9; index++) {
      nineYearCycle[index] = firstYear+index
    }
    return nineYearCycle
  }

  /**
   * get nine year cycle
   * @returns {Number} nineYearCycle
   */
  getNineYearCycle(yearToCalculate=null){
    yearToCalculate =yearToCalculate|| this.NOW.year()
    const nineYearCycle = [
      yearToCalculate-4,
      yearToCalculate-3,
      yearToCalculate-2,
      yearToCalculate-1,
      yearToCalculate,
      yearToCalculate+1,
      yearToCalculate+2,
      yearToCalculate+3,
      yearToCalculate+4
    ]
    return nineYearCycle
  }

  getSumHierarchy(a,b){
    return this.reduceNumber(a+b)
  }
  getResHierarchy(a,b){
    (a===11)?a=2:a=a;
    (a===22)?a=4:a=a;
    (b===11)?b=2:b=b;
    (b===22)?b=4:b=b;
    let res = this.reduceNumber(a-b)
    return Math.abs(res)
  }

  reduceNumber(reduceSum){
    while( reduceSum > 9 && ! ( reduceSum === 22 || reduceSum === 11 ) ){
      reduceSum = reduceSum.toString().split('').reduce((r,c)=>r += parseInt(c), 0);
    }
    return parseInt(reduceSum);
  }

  reduceNumberISK(reduceSum){
    while( reduceSum > 9 && ! this.karmicos.includes( reduceSum ) ){
      reduceSum = reduceSum.toString().toLowerCase().split('').reduce((r,c)=>r += parseInt(c), 0);
    }
    return parseInt(reduceSum);
  }
   reduceNumberForSub(reduceSum){
    while( reduceSum > 9 ){
      reduceSum = reduceSum.toString().split('').reduce((r,c)=>r += parseInt(c), 0);
    }
    return reduceSum;
  }
}