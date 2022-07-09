import moment from 'moment/min/moment-with-locales'
moment.locale("es-mx")

export class Synastry{
  constructor(consultant, partner) {
    this.consultant = consultant
    this.partner = partner
    this.NOW = moment()
    this.yearMeet =  moment(partner.yearMeet)
    this.birthDate = moment(partner.birthDate)
    this.karmicos = [13, 14, 16, 19]
  }
  getYearMeet(){
    return this.yearMeet.year()
  }

  getYearsOld( yearToCalculate = null ){
    yearToCalculate = yearToCalculate || this.NOW.year()
    return yearToCalculate - this.yearMeet.year()
  }

  getA(){
    const birthDate = this.consultant.getBirthDate()
    const partnerBirthDate = this.partner.getBirthDate()
    return this.reduceNumber( birthDate.month() + 1 + partnerBirthDate.month() + 1 );
  }

  getB(){
    const birthDate = this.consultant.getBirthDate()
    const partnerBirthDate = this.partner.getBirthDate()

    return this.reduceNumber( birthDate.date() + partnerBirthDate.date() );
  }
  getBISK(){
    const birthDate = this.consultant.getBirthDate()
    const partnerBirthDate = this.partner.getBirthDate()
    const B = this.reduceNumberISK( birthDate.date() + partnerBirthDate.date())
    return this.karmicos.includes( B ) ? '*' : ''
  }
  getC(){
    const birthDate = this.consultant.getBirthDate()
    const partnerBirthDate = this.partner.getBirthDate()

    return this.reduceNumber( birthDate.year() + partnerBirthDate.year() );
  }
  getCISK(){
    // todo
  }
  getD(){
    return this.reduceNumber(
      this.getA() +
      this.getB() +
      this.getC()
    );
  }
  getDISK(){
    // todo
  }

  getE(){
    return this.reduceNumber(
      this.getA() +
      this.getB()
    );
  }
  getEISK(){
    //  todo
  }

  getF(){
    return this.reduceNumber(
      this.getC() +
      this.getB()
    );
  }
  getFISK(){
    // todo
  }

  getG(){
    return this.reduceNumber(
      this.getE() +
      this.getF()
    );
  }
  getGISK(){
    // todo
  }

  getH(){
    return this.reduceNumber(
      this.getA() +
      this.getC()
    );
  }
  getHISK(){
    // todo
  }

  getI(){
    return this.reduceNumber(
      this.getE() +
      this.getF() +
      this.getG()
    );
  }
  getIISK(){
    // todo
  }

  getJ(){
    return this.reduceNumber(
      this.getH() +
      this.getD()
    );
  }
  getJISK(){
    // todo
  }

  getAs(){
    const birthDate = this.consultant.getBirthDate()
    const partnerBirthDate = this.partner.getBirthDate()

    return this.reduceNumberForSub( birthDate.month() + 1 + partnerBirthDate.month() + 1 );
  }

  getBs(){
    const birthDate = this.consultant.getBirthDate()
    const partnerBirthDate = this.partner.getBirthDate()

    return this.reduceNumberForSub( birthDate.date() + partnerBirthDate.date() );
  }

  getCs(){
    const birthDate = this.consultant.getBirthDate()
    const partnerBirthDate = this.partner.getBirthDate()

    return this.reduceNumberForSub( birthDate.year() + partnerBirthDate.year() );
  }

  getK(){
    return Math.abs(this.reduceNumber(
      this.getAs() -
      this.getBs()
    ));
  }

  getL(){
    return Math.abs(this.reduceNumber(
      this.getBs() -
      this.getCs()
    ));
  }

  getM(){
    return Math.abs(this.reduceNumber(
      this.getK() -
      this.getL()
    ));
  }

  getN(){
    return Math.abs(this.reduceNumber(
      this.getAs() -
      this.getCs()
    ));
  }

  getO(){
    return this.reduceNumber(
      this.getM() +
      this.getK() +
      this.getL()
    );
  }
  getP(){
    return this.reduceNumber(
      this.getD() +
      this.getO()
    );
  }
  getQ(){
    return this.reduceNumber(
      this.getM() +
      this.getK()
    );
  }
  getR(){
    return this.reduceNumber(
      this.getM() +
      this.getL()
    );
  }
  getS(){
    return this.reduceNumber(
      this.getQ() +
      this.getR()
    );
  }
  getW(){
    const appearances= [
      this.getK(),
      this.getO(),
      this.getL(),
      this.getM(),
      this.getN(),
      this.getQ(),
      this.getR(),
      this.getS(),
      this.getP(),
    ]
    const occurrences = appearances.reduce(function (acc, curr) {
      return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
    }, {});

    let w = 0;
    let W = ''
    Object.values(occurrences).forEach( el => el === 3 ? w++ : w )
    if( w === 1 ){
      Object.entries(occurrences).map( (el, i) => {
        if( el[1] === 3 ){
          W = parseInt(el[0]) * 3
        }
      })

    }
    return W === '' ? '' : this.reduceNumber(W)
  }

  calcReaction(){
    return this.reduceNumber(
      this.consultant.calcReaction() +
      this.partner.calcReaction()
    )
  }
  calcReactionISK(){
    // todo
  }
  calcSynthesis(){
    return this.reduceNumber(
      this.consultant.calcSynthesis() +
      this.partner.calcSynthesis()
    )
  }
  calcSynthesisISK(){
    // todo
  }
  calcGift(){
    return this.reduceNumber(
      parseInt(this.consultant.calcGift()) +
      parseInt(this.partner.calcGift())
    )
  }
  calcGiftISK(){
    // todo
  }

  calcName(){
    return this.reduceNumber(
      this.consultant.calcName() +
      this.partner.calcName()
    )
  }
  calcNameISK(){ // todo
  }
  calcSoulNumber(){
    return this.reduceNumber(
      this.consultant.calcSoulNumber() +
      this.partner.calcSoulNumber()
    )
  }
  calcSoulNumberISK(){
    const soul = this.reduceNumberISK(this.consultant.calcSoulNumber() +this.partner.calcSoulNumber())
    return this.karmicos.includes(soul)? '*': '';
  }
  calcSoulExpresion(){
    return this.reduceNumber(
      this.consultant.calcSoulExpresion() +
      this.partner.calcSoulExpresion()
    )
  }
  calcSoulExpresionISK(){
    const soul = this.reduceNumberISK(this.consultant.calcSoulExpresion() +this.partner.calcSoulExpresion())
    return this.karmicos.includes(soul)? '*': '';
  }
  calcMaturity(){
    return this.reduceNumber(
      this.consultant.calcMaturity() +
      this.partner.calcMaturity()
    )
  }
  calcMaturityISK(){
    // todo
  }

  /**
   * calculate personal year
   * @returns {Number} sumPersonalYear
   */
  calcPersonalYear(yearToCalculate = null){
    yearToCalculate = yearToCalculate || this.NOW.year()
    return this.reduceNumber(
      this.getA() +
      this.getB() +
      yearToCalculate
    )
  }
  /* Personal  Year Karmico*/
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
  /**
   * calculate personal day
   * @returns {Number} sumPersonalDay
   */
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
    const personalDay =  this.reduceNumberISK(this.calcPersonalYear(yearToCalculate) +monthToCalculate +dayToCalculate)
    return this.karmicos.includes(personalDay)? '*':'';
  }
  hasDoubleStage(){
    let yearBirthDate = this.birthDate.year() +this.partner.birthDate.year()
    let monthBirthDate =  (this.birthDate.month()+1) +  (this.partner.birthDate.month()+1)
    let dayBirthDate =  this.birthDate.date() + this.partner.birthDate.date()

    const reducedYear = this.reduceNumber(yearBirthDate)
    const reducedMonth = this.reduceNumber(monthBirthDate)
    const reducedDay = this.reduceNumber(dayBirthDate)

    let etapa_1 = yearBirthDate +monthBirthDate+dayBirthDate
    let etapa_2 = reducedYear+reducedMonth+reducedDay
    let reduce_stage_1 = this.reduceNumber(etapa_1)
    let reduce_stage_2 = this.reduceNumber(etapa_2)
    // console.log('etapa 1 => '+ this.reduceNumber(etapa_1))
    // console.log('etapa 2 => '+ this.reduceNumber(etapa_2))
    if(reduce_stage_1 === reduce_stage_2){
      return false;
    }else{
      return true;
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

  calcDurationStage(stage){
    let stageOne = 9 - this.reduceNumberForSub(this.getA() +this.getB())
    // let stageOneEnd =  stageOne
    // if(stageOne === 0){
    //   stageOneEnd = stageOneEnd +9
    // }
    if( stage === 1 ) return `De 0 a los ${stageOne}`
    const stageTwo = stageOne +9
    if( stage === 2 ) return `${stageOne} a los ${stageTwo}`

    const stageThr =stageTwo+9
    if( stage === 3 ) return `${stageTwo} a los ${stageThr}`

    const stageFou = stageThr+9
    if( stage === 4 ) return `${stageThr} a los ${stageFou}`
    const stageFive = stageFou +9
    if( stage === 5 ) return `${stageFou} a los ${stageFive}`
    if( stage === 6 ) return `${stageFive+9} a los ${stageFive+18}`
    if( stage === 7 ) return `${stageFive+18} a ...`
  }
calcDurationStage(stage){
    let stageOne = 9 - this.reduceNumberForSub(this.getA() +this.getB())
    // let stageOneEnd =  stageOne
    // if(stageOne === 0){
    //   stageOneEnd = stageOneEnd +9
    // }
    if( stage === 1 ) return `De 0 a los ${stageOne}`
    const stageTwo = stageOne +9
    if( stage === 2 ) return `${stageOne} a los ${stageTwo}`

    const stageThr =stageTwo+9
    if( stage === 3 ) return `${stageTwo} a los ${stageThr}`

    const stageFou = stageThr+9
    if( stage === 4 ) return `${stageThr} a los ${stageFou}`
    const stageFive = stageFou +9
    if( stage === 5 ) return `${stageFou} a los ${stageFive}`
    if( stage === 6 ) return `${stageFive+9} a los ${stageFive+18}`
    if( stage === 7 ) return `${stageFive+18} a ...`
  }


  calcLifeStageDuration( stage = 1){
    let start = this.yearMeet.year()
    let stageOne = 9 - this.reduceNumberForSub(this.getA() +this.getB())
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
  calcDoubleLifeStageDuration( stage = 1){
    let start = this.yearMeet.year()
    let stageOne = 9 - this.reduceNumberForSub(this.getA() +this.getB())
    let stageOneEnd = start + stageOne
    if(stageOne === 0){
      stageOneEnd = stageOneEnd +9
    }
    if( stage === 1 ) return stageOneEnd

    if( stage < 8 ){
      const stageEnd = stageOneEnd + Math.abs((stage - 1) * 9)
      return stageEnd
    }

    return 0
  }

  /**
   * calculate current satge number
   * @returns {Number} stage
   */
  getLifeStage(yearToCalculate = null){
    yearToCalculate = yearToCalculate || this.NOW.year()
    let start = this.yearMeet.year()
    let duration = 9 - this.reduceNumberForSub(this.getA() +this.getB())
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
    let start = this.yearMeet.year()
    let duration = 9 - this.reduceNumberForSub(this.getA() +this.getB())
    let stageOneEnd = start + duration
    if(duration === 0){
      stageOneEnd = stageOneEnd +9
    }
    let stageOne = this.getE()
    if( start<= yearToCalculate && yearToCalculate <= stageOneEnd ){
      return this.karmicos.includes(stageOne)? '*':'';
    }

    let stageTwo = this.getF()
    let stageTwoEnd = stageOneEnd + 9
    if( stageOneEnd <= yearToCalculate && yearToCalculate <= stageTwoEnd ){
      return this.karmicos.includes(stageTwo)? '*':'';
    }

    let stageThr = this.getG()
    let stageThrEnd = stageTwoEnd + 9
    if( stageTwoEnd <= yearToCalculate && yearToCalculate <= stageThrEnd ){
      return this.karmicos.includes(stageThr)? '*':'';
    }

    let stageFou = this.getH()
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
   * calculate current satge number
   * @returns {Number} stage
   */
  getLifeStageNumber(){
    const start = this.yearMeet.year()
    let duration = 9 - this.reduceNumberForSub(this.getA() +this.getB())
    let stageOneEnd = start + duration
    if(duration === 0){
      stageOneEnd = stageOneEnd +9
    }
    // let stageOne = this.getE()
    if( start<= this.NOW.year() && this.NOW.year() <= stageOneEnd ){
      return 1;
    }

    // let stageTwo = this.getF()
    let stageTwoEnd = stageOneEnd + 9
    if( stageOneEnd <= this.NOW.year() && this.NOW.year() <= stageTwoEnd ){
      return 2;
    }

    // let stageThr = this.getG()
    let stageThrEnd = stageTwoEnd + 9
    if( stageTwoEnd <= this.NOW.year() && this.NOW.year() <= stageThrEnd ){
      return 3;
    }

    // const stageFou = this.getH()
    let stageFouEnd = stageThrEnd + 9
    if( stageThrEnd <= this.NOW.year() && this.NOW.year() <= stageFouEnd ){
      return 4;
    }

    if( stageFouEnd <= this.NOW.year() && this.NOW.year() <= (stageFouEnd + 9) ){
      return 5;
    }
    if( (stageFouEnd + 9) <= this.NOW.year() && this.NOW.year() <= (stageFouEnd + 18) ){
      return 6;
    }
    if( (stageFouEnd + 18) <= this.NOW.year() ){
      return 7;
    }
  }
  getDoubleLifeStageNumber(){
    const start = this.yearMeet.year()
    let duration = 9 - this.reduceNumberForSub(this.getA() +this.getB())
    let stageOneEnd = start + duration
    if(duration === 0){
      stageOneEnd = stageOneEnd +9
    }
    // const stageOne = this.reduceNumber( reducedMonth + reducedDay )
    if( start <= this.NOW.year() && this.NOW.year() <= stageOneEnd ){
      return 1;
    }

    // const stageTwo = this.reduceNumber( dayBirthDate + yearBirthDate )
    const stageTwoEnd = stageOneEnd + 9
    if( stageOneEnd <= this.NOW.year() && this.NOW.year() <= stageTwoEnd ){
      return 2;
    }

    // const stageThr = this.reduceNumber( stageOne + stageTwo )
    const stageThrEnd = stageTwoEnd + 9
    if( stageTwoEnd <= this.NOW.year() && this.NOW.year() <= stageThrEnd ){
      return 3;
    }

    // const stageFou = this.reduceNumber( monthBirthDate + yearBirthDate )
    const stageFouEnd = stageThrEnd + 9
    if( stageThrEnd <= this.NOW.year() && this.NOW.year() <= stageFouEnd ){
      return 4;
    }

    if( stageFouEnd <= this.NOW.year() && this.NOW.year() <= (stageFouEnd + 9) ){
      return 5;
    }
    if( (stageFouEnd + 9) <= this.NOW.year() && this.NOW.year() <= (stageFouEnd + 18) ){
      return 6;
    }
    if( (stageFouEnd + 18) <= this.NOW.year() ){
      return 7;
    }
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

  getCycleCustom(stage){
    let start = this.yearMeet.year()
    let stageOne = 9 - this.reduceNumberForSub(this.getA() +this.getB())
    if(stageOne === 0){
      stageOne = stageOne +9
    }
    const cycleStage = []
    if(stage === 1){
      for(let i =0;i<stageOne;i++){
        cycleStage.push(start)
        start++
      }
    }
    if(stage< 8&&stage!==1){
      let stageStart = this.calcLifeStageDuration(stage) -9
      for(let i =0;i<9;i++){
        cycleStage.push(stageStart)
        stageStart++
      }
    }
    return cycleStage

  }


  getAllMonths(){
    return ['Enero', 'Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
  }

  getCustomMonths(){
    let consultantBirthate = this.consultant.getBirthDate()
    let partnerBirthate = this.partner.getBirthDate()
    let sumBirthdates =(consultantBirthate.month()+1) + (partnerBirthate.month()+1)
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
   * calculate first quater
   * @returns {Number} quater one
   */
  getQuaterOne(){
    return this.getC()
  }
  /* Quater One Karmico  */
  getQuaterOneISK(){
    const birthDate = this.consultant.getBirthDate()
    const partnerBirthDate = this.partner.getBirthDate()
    const quaterOne = this.reduceNumberISK( birthDate.year() + partnerBirthDate.year() );
    return this.karmicos.includes(quaterOne)? '*': '';
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
  /**
   * calculate current quater
   * @param {Number} yearToCalculate
   * @returns {Number} current quater
   */
  calcCurrentQuater(monthToCalculate = null, yearToCalculate = null){
    yearToCalculate = yearToCalculate || this.NOW.year()
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

  annualReturn( yearToCalculate = null ){
    yearToCalculate = yearToCalculate || this.NOW.year()
    const yearMeetDate = moment( this.partner.yearMeet )
    const age = yearToCalculate - yearMeetDate.year()
    const A = this.partner.reduceNumber(yearToCalculate)
    const B = this.partner.reduceNumber(
      yearToCalculate +
      this.partner.reduceNumber( this.consultant.birthDate.month() + this.partner.birthDate.month() + 2 ) +
      this.partner.reduceNumber( this.consultant.birthDate.date() + this.partner.birthDate.date() )
    )
    const C = this.reduceNumber(
      (
        this.consultant.birthDate.year() +
        this.partner.birthDate.year()
      ) -
      yearToCalculate
    )
    const D = this.reduceNumber( A + B )
    const E = this.reduceNumber( B + C )
    const F = this.reduceNumber( D + E )
    const G = this.reduceNumber( D + E + F )
    const H = this.reduceNumber( A + C )

    return { yearToCalculate, age, A, B, C, D, E, F, G, H}
  }

  /*
   * helper
   * reduce number to one digit except if is 11 or 22
   */
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
    return parseInt(reduceSum);

  }
  reduceMonth(reduceSum){
    if(reduceSum !== 11 || reduceSum !==12  ){
      reduceSum = reduceSum.toString().split('').reduce((r,c)=>r += parseInt(c), 0);
    }
    return parseInt(reduceSum);
  }
  getAbsences(){
    const appearances= [
      this.getA(),
      this.getB(),
      this.getC(),
      this.getD(),
      this.getE(),
      this.getG(),
      this.getH(),
      this.getI(),
      this.getJ(),
      this.getK(),
      this.getL(),
      this.getM(),
      this.getN(),
      this.getO(),
      this.getP(),
      this.getQ(),
      this.getR(),
      this.getS(),
      this.getW(),
    ]
    const occurrences = appearances.reduce(function (acc, curr) {
      if( curr !== '' & curr !== 0 ){
        return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
      }
      return acc
    }, {});

    const base = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    let intersection = base.filter(x => ! Object.keys(occurrences).includes(x));
    return intersection.toString()
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
}
export default Synastry