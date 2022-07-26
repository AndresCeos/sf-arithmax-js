import moment from 'moment/min/moment-with-locales'
moment.locale("es-mx")

export class Person{
  constructor({name = "", lastName = "", scdLastName = "", birthDate = null, yearMeet = "" }) {
    this.name = name
    this.lastName = lastName
    this.scdLastName = scdLastName
    this.fullName = `${name} ${lastName} ${scdLastName}`
    this.birthDate = moment(birthDate)
    this.karmicos = [13, 14, 16, 19]
    this.NOW = moment()
    this.yearMeet = yearMeet
  }
  getYearTimeCurve(){
    return this.birthDate.year()
  }

  getInitials(){
    const names = this.name.split(' ')
    let initials = names.map( el => el.toUpperCase().charAt(0) + ', ')
    initials += this.lastName.toUpperCase().charAt(0) + ', '
    initials += this.scdLastName.toUpperCase().charAt(0)
    return initials //.replaceAll(',', '')
  }

  getFormBirthDate(){
    return `${this.birthDate.date()}/${this.birthDate.format("MM")}/${this.birthDate.year()}`
  }

  getBirthDate(){
    return this.birthDate
  }

  getYearOfBirth(){
    return this.birthDate.year()
  }

  getFormattedBirthDate(){
    return `${this.birthDate.date()} de ${this.birthDate.format("MMMM")} ${this.birthDate.year()}`
  }

  getYearsOld( yearToCalculate = null ){
    yearToCalculate = yearToCalculate || this.NOW.year()
    let age = yearToCalculate - this.birthDate.year()
    if(age<1){age = 0}
    return age
  }
  getNameCheck(){
    const names = this.fullName.toString().toLowerCase().split(' ')
    let nameValues = 0
    let namev = 0
    names.map( el =>  {
      const vowels = el.split('')
      let val = 0
      let val2 = 0
      vowels.map(element => {
        val += this.consonantValues( element )
      })
      vowels.map(element => {
        val2 += this.vowelsValues( element )
      })
      nameValues += val
      namev+= val2
    })
    return this.reduceNumber(nameValues+namev)
  }
  getSoulCheck(){
    const names = this.fullName.toString().toLowerCase().split(' ')
    let nameValues = 0
    names.map( el =>  {
      const vowels = el.split('')
      let val = 0
      vowels.map(element => {
        val += this.vowelsValues( element )
      })
      nameValues += val
    })
    return this.reduceNumber(nameValues)
  }
  getExpressionSoulCheck(){
    const names = this.fullName.toString().toLowerCase().split(' ')
    let nameValues = 0
    names.map( el =>  {
      const vowels = el.split('')
      let val = 0
      vowels.map(element => {
        val += this.consonantValues( element )
      })
      nameValues += val
    })
    return this.reduceNumber(nameValues)
  }

  /**
    * calculate name
    * @returns {Number} name value
    */
  calcName() {
    return this.reduceNumber( this.calcNameFull() )
  }
  calcNameFull() {
    const names = this.name.toString().toLowerCase().toLowerCase().split(' ')
    let namesValues = []
    let consultantValues = []
    names.map( el =>  {
      const letters = el.split('')
      let vowels = 0
      let consonants = 0
      letters.map(element => {
        vowels += this.vowelsValues( element )
        consonants += this.consonantValues( element )
      })
      namesValues.push(this.reduceNumber(vowels))
      consultantValues.push(this.reduceNumber(consonants))
    })

    const lastnameConst = this.lastName.toString().toLowerCase().toLowerCase().split('')
    let lastnameVowelsValues = 0
    let lastnameConstValues = 0
    lastnameConst.forEach(element => {
      lastnameVowelsValues += this.vowelsValues( element )
      lastnameConstValues += this.consonantValues( element )
    })
    namesValues.push(this.reduceNumber(lastnameVowelsValues))
    consultantValues.push(this.reduceNumber(lastnameConstValues))

    const scdLastnameConst = this.scdLastName.toString().toLowerCase().toLowerCase().split('')

    let scdLastnameVowelsValues = 0
    let scdLastnameConstValues = 0
    scdLastnameConst.forEach(element => {
      scdLastnameVowelsValues += this.vowelsValues( element )
      scdLastnameConstValues += this.consonantValues( element )
    })
    namesValues.push(this.reduceNumber(scdLastnameVowelsValues))
    consultantValues.push(this.reduceNumber(scdLastnameConstValues))

    // console.log(names)

    // console.log(namesValues)
    // console.log(consultantValues)

    let total = 0
    for (let index = 0; index < namesValues.length; index++) {
      total += this.reduceNumber(namesValues[index] + consultantValues[index])
    }

    return total
  }
  calcNameISK(){
    const nameLetters = this.name.toString().toLowerCase().toLowerCase().split('')
    let nameVowelsValues = 0
    nameLetters.forEach( e => nameVowelsValues += this.vowelsValues( e ) )
    let nameConsonantsValue = 0
    nameLetters.forEach( e => nameConsonantsValue += this.consonantValues( e ) )
    const nameValue = this.reduceNumber(nameVowelsValues + nameConsonantsValue)

    const lastnameLetters = `${this.lastName.toString().toLowerCase()} ${this.scdLastName.toString().toLowerCase()}`.toLowerCase().split('')
    let lastnameVowelsValues = 0
    lastnameLetters.forEach( e => lastnameVowelsValues += this.vowelsValues( e ) )
    let lastnameConsonantsValue = 0
    lastnameLetters.forEach( e => lastnameConsonantsValue += this.consonantValues( e ) )
    const lastnameValue = this.reduceNumber(lastnameVowelsValues + lastnameConsonantsValue)

    const name = this.reduceNumberISK( nameValue + lastnameValue )
    return this.karmicos.includes( name ) ? '*' : '';
  }

  calcInitials() {
    const nameLetters = this.getInitials().toString().toLowerCase().toLowerCase().split('')
    let nameVowelsValues = 0
    nameLetters.forEach( e => nameVowelsValues += this.vowelsValues( e ) )
    let nameConsonantsValue = 0
    nameLetters.forEach( e => nameConsonantsValue += this.consonantValues( e ) )
    const nameValue = this.reduceNumber(nameVowelsValues + nameConsonantsValue)

    return this.reduceNumber(nameValue)
  }

  calcSoulNumber(){
    return this.reduceNumber(this.calcSoulNumberFull())
  }

  calcSoulNumberFull(){
    let nameValues = 0
    const names = this.name.toString().toLowerCase().toLowerCase().split(' ')
    names.map( el =>  {
      const vowels = el.split('')
      let val = 0
      vowels.map(element => {
        val += this.vowelsValues( element )
      })
      nameValues += this.reduceNumber( val )
    })

    const lastnameLetters = this.lastName.toString().toLowerCase().toLowerCase().split('')
    let lastnameVowelsValues = 0
    lastnameLetters.forEach(element => {
      lastnameVowelsValues += this.vowelsValues( element )
    })
    nameValues += this.reduceNumber( lastnameVowelsValues )

    const scdLastnameLetters = this.scdLastName.toString().toLowerCase().toLowerCase().split('')
    let scdLastnameVowelsValues = 0
    scdLastnameLetters.forEach(element => {
      scdLastnameVowelsValues += this.vowelsValues( element )
    })
    nameValues += this.reduceNumber( scdLastnameVowelsValues )

    return nameValues
  }

  calcSoulNumberISK(){
    const nameLetters = this.name.toString().toLowerCase().toLowerCase().split('')
    let nameVowelsValues = 0
    nameLetters.forEach(element => {
      nameVowelsValues += this.vowelsValues( element )
    })

    const lastnameLetters = `${this.lastName.toString().toLowerCase()} ${this.scdLastName.toString().toLowerCase()}`.toLowerCase().split('')
    let lastnameVowelsValues = 0
    lastnameLetters.forEach(element => {
      lastnameVowelsValues += this.vowelsValues( element )
    })
    const soulNumber = this.reduceNumberISK( nameVowelsValues + lastnameVowelsValues )
    return this.karmicos.includes( soulNumber ) ? '*' : ''
  }

  calcSoulExpresion(){
    return this.reduceNumber( this.calcSoulExpresionFull() )
  }

  calcSoulExpresionFull(){
    let nameValues = 0
    const names = this.name.toString().toLowerCase().toLowerCase().split(' ')
    names.map( el =>  {
      const vowels = el.split('')
      let val = 0
      vowels.map(element => {
        val += this.consonantValues( element )
      })
      nameValues += this.reduceNumber( val )
    })

    const lastnameConst = this.lastName.toString().toLowerCase().toLowerCase().split('')
    let lastnameVowelsValues = 0
    lastnameConst.forEach(element => {
      lastnameVowelsValues += this.consonantValues( element )
    })
    nameValues += this.reduceNumber( lastnameVowelsValues )

    const scdLastnameConst = this.scdLastName.toString().toLowerCase().toLowerCase().split('')
    let scdLastnameVowelsValues = 0
    scdLastnameConst.forEach(element => {
      scdLastnameVowelsValues += this.consonantValues( element )
    })
    nameValues += this.reduceNumber( scdLastnameVowelsValues )

    return nameValues
  }

  calcSoulExpresionISK(){
    const nameConsonants = this.name.toString().toLowerCase().toLowerCase().split('')
    let nameConsonantsValue = 0
    nameConsonants.forEach(element => {
      nameConsonantsValue += this.consonantValues( element )
    })
    const lastnameConsonants = `${this.lastName.toString().toLowerCase()} ${this.scdLastName.toString().toLowerCase()}`.toLowerCase().split('')
    let lastnameConsonantsValue = 0
    lastnameConsonants.forEach(element => {
      lastnameConsonantsValue += this.consonantValues( element )
    })
    const soulExp = this.reduceNumberISK(nameConsonantsValue + lastnameConsonantsValue)

    return this.karmicos.includes( soulExp ) ? '*' : ''
  }

  calcMaturity(){
    return this.reduceNumber(
      this.getD() +
      this.calcName()
    )
  }

  calcMaturityISK(){
    const maturity = this.reduceNumberISK(
      this.getD() +
      this.calcName()
    )
    return this.karmicos.includes( maturity ) ? '*' : ''
  }

  /**
    * calculate personal year
    * @param {Number} yearToCalculate
    * @returns {Number} personalYear
    */
    /*  Función adaptada a Redux */
  calcPersonalYear( yearToCalculate = null ) {
    yearToCalculate = yearToCalculate || this.NOW.year()
    const personalYear = this.reduceNumber( yearToCalculate + this.birthDate.month() + 1 + this.birthDate.date() )
    return personalYear
  }
  /* Personal  Year Karmico*/
  calcPersonalYearISK(yearToCalculate= null){
    const personalYear = this.reduceNumberISK(yearToCalculate + this.birthDate.month() + 1 + this.birthDate.date() )
    return this.karmicos.includes( personalYear ) ? '*' : '';
  }

  /**
   * calculate personal month
   * @param {Number} monthToCalculate
   * @returns {Number} personalMonth
   */
  /*  Función adaptada a Redux */
  calcPersonalMonth( monthToCalculate = null, yearToCalculate=null ){
    monthToCalculate = monthToCalculate || this.NOW.month() + 1
    yearToCalculate = yearToCalculate || this.NOW.year()
    return this.reduceNumber( this.calcPersonalYear(yearToCalculate) + monthToCalculate )
  }
  /* Personal Month Karmico */
  calcPersonalMonthISK(monthToCalculate = null, yearToCalculate=null){
    const personalMonth = this.reduceNumberISK(this.calcPersonalYear(yearToCalculate)+ monthToCalculate)
    return this.karmicos.includes(personalMonth)? '*':'';
  }

/**
   * calculate personal week
   *
   * reduce birth date day to one digit
   * @returns {Number}
   */
  /* Función adaptada a Redux  */
  calcPersonalWeek( dayToCalculate = null, monthToCalculate=null, yearToCalculate=null){
    dayToCalculate = dayToCalculate || this.NOW.date()
    monthToCalculate = monthToCalculate || this.NOW.month()+1
    yearToCalculate = yearToCalculate || this.NOW.year()

    let personalYear = this.calcPersonalYear(yearToCalculate);
    let sumPersonalWeekOne = this.reduceNumber(personalYear + monthToCalculate);
    if(dayToCalculate >= 1 && dayToCalculate <= 7){
      return sumPersonalWeekOne;
    }

    let sumPersonalWeekTwo = this.reduceNumber(personalYear + sumPersonalWeekOne);
    if(dayToCalculate>= 8 && dayToCalculate <= 14){
      return sumPersonalWeekTwo;
    }

    let sumPersonalWeekThree = this.reduceNumber(sumPersonalWeekTwo + sumPersonalWeekOne);
    if(dayToCalculate>= 15 && dayToCalculate <= 21){
      return sumPersonalWeekThree;
    }

    let sumPersonalWeekFour = this.reduceNumber(monthToCalculate + sumPersonalWeekOne);
    if(dayToCalculate>= 22 ){
      return sumPersonalWeekFour;
    }

    return `${sumPersonalWeekOne} ${sumPersonalWeekTwo} ${sumPersonalWeekThree} ${sumPersonalWeekFour}`;
  }
  /* Personal Week Karmico*/
  calcPersonalWeekISK( dayToCalculate = null, monthToCalculate=null, yearToCalculate=null){

    let personalYear = this.calcPersonalYear(yearToCalculate);
    let sumPersonalWeekOne = this.reduceNumberISK(personalYear + monthToCalculate);
    if(dayToCalculate >= 1 && dayToCalculate <= 7){
      return this.karmicos.includes(sumPersonalWeekOne)? '*': '';
    }

    let sumPersonalWeekTwo = this.reduceNumberISK(personalYear + sumPersonalWeekOne);
    if(dayToCalculate>= 8 && dayToCalculate <= 14){
      return this.karmicos.includes(sumPersonalWeekTwo)? '*': '';
    }

    let sumPersonalWeekThree = this.reduceNumberISK(sumPersonalWeekTwo + sumPersonalWeekOne);
    if(dayToCalculate>= 15 && dayToCalculate <= 21){
      return this.karmicos.includes(sumPersonalWeekThree)? '*': '';
    }

    let sumPersonalWeekFour = this.reduceNumberISK(monthToCalculate + sumPersonalWeekOne);
    if(dayToCalculate>= 22 ){
      return this.karmicos.includes(sumPersonalWeekFour)? '*': '';
    }

    return `${sumPersonalWeekOne} ${sumPersonalWeekTwo} ${sumPersonalWeekThree} ${sumPersonalWeekFour}`;
  }

  /**
   * calculate personal day
   * @param {Number} dayToCalculate
   * @returns {Number} sumPersonalDay
   */
  /*  Función adaptada a Redux */
  calcPersonalDay( dayToCalculate = null, monthToCalculate= null, yearToCalculate= null ){
    dayToCalculate = dayToCalculate || this.NOW.date()
    monthToCalculate = monthToCalculate || this.NOW.month() + 1
    yearToCalculate = yearToCalculate || this.NOW.year()
    return this.reduceNumber( this.calcPersonalYear(yearToCalculate) + dayToCalculate + monthToCalculate)
  }

  /* Personal  Day Karmico*/
  calcPersonalDayISK(dayToCalculate = null, monthToCalculate= null, yearToCalculate= null){
    const personalDay = this.reduceNumberISK(  this.calcPersonalYear(yearToCalculate) + dayToCalculate + monthToCalculate )
    return this.karmicos.includes( personalDay ) ? '*' : '';
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
  /*  Función adaptada a Redux */
  calcSelectPersonalWeek(monthToCalculate = null, weekToCalculate, yearToCalculate=null ){
    monthToCalculate = monthToCalculate || this.NOW.month() + 1
    yearToCalculate = yearToCalculate || this.NOW.year()
    let weekOne = monthToCalculate + this.calcPersonalYear(yearToCalculate)
    if(weekToCalculate === 1 ){ return this.reduceNumber(weekOne)}
    let weekTwo = this.calcPersonalYear(yearToCalculate) + weekOne
    if(weekToCalculate === 2){ return this.reduceNumber(weekTwo) }
    let weekThr = this.reduceNumber( this.reduceNumber(weekOne) + this.reduceNumber(weekTwo))
    if(weekToCalculate === 3){ return this.reduceNumber(weekThr )}
    let weekFou = this.reduceNumber(monthToCalculate + this.reduceNumber(weekOne))
    if(weekToCalculate === 4){ return this.reduceNumber(weekFou) }
  }
  /* Personal Week Karmico */
  calcSelectPersonalWeekISK(monthToCalculate = null, weekToCalculate, yearToCalculate=null){
    let weekOne = monthToCalculate + this.calcPersonalYear(yearToCalculate)
    if(weekToCalculate === 1 ){
      const personalWeekOne = this.reduceNumberISK(weekOne)
      return this.karmicos.includes(personalWeekOne) ? '*' : '';
    }
    let weekTwo = this.calcPersonalYear(yearToCalculate) + weekOne
    if(weekToCalculate === 2){
      const personalWeekTwo = this.reduceNumberISK(weekTwo)
      return this.karmicos.includes(personalWeekTwo) ? '*' : '';
    }
    let weekThr = this.reduceNumber( this.reduceNumber(weekOne) + this.reduceNumber(weekTwo))
    if(weekToCalculate === 3){
      const personalWeekThr = this.reduceNumberISK(weekThr)
      return this.karmicos.includes(personalWeekThr) ? '*': '';
    }
    let weekFou = this.reduceNumber(monthToCalculate + this.reduceNumber(weekOne))
    if(weekToCalculate === 4){
      const personalWeekFou = this.reduceNumberISK(weekFou)
      return this.karmicos.includes(personalWeekFou) ? '*': '';
    }
  }

  /**
   * calculate karma number
   * AKA: A
   * reduce birth date month to one digit
   * @returns {Number}
   */
  calcKarma(){
    return this.reduceNumber( this.birthDate.month() + 1 );
  }
  getA(){ return this.calcKarma() }

  /**
   * calculate personal number
   * AKA: B
   * reduce birth date day to one digit
   * @returns {Number}
   */
  calcPersonalNumber(){
    return this.reduceNumber( this.birthDate.date() )
  }
  getB(){ return this.calcPersonalNumber() }
  getBISK(){
    const B = this.reduceNumberISK( this.birthDate.date() )
    return this.karmicos.includes( B ) ? '*' : '';
  }

  /**
   * calculate past life number
   * AKA: C
   * reduce birth date year to one digit
   * @returns {Number}
   */
  calcPastLife(){
    return this.reduceNumber( this.birthDate.year() )
  }
  getC(){ return this.calcPastLife() }
  getCISK(){
    const C = this.reduceNumberISK( this.birthDate.year() )
    return this.karmicos.includes( C ) ? '*' : '';
  }

  /**
   * calculate personality number
   * AKA: D
   * reduce sum of birth date numbers to one digit
   * @returns {Number}
   */
  calcPersonalityNumber(){
    return this.reduceNumber(
      this.birthDate.date() +
      this.birthDate.month() + 1 +
      this.birthDate.year()
    )
  }
  getD(){ return this.calcPersonalityNumber() }
  getDISK(){
    const D = this.reduceNumberISK(
      this.birthDate.date() +
      this.birthDate.month() + 1 +
      this.birthDate.year()
    )
    return this.karmicos.includes( D ) ? '*' : '';
  }
  getDCheck(){
    let yearReduce = this.reduceNumber(this.birthDate.year())
    let monthReduce = this.reduceNumber(this.birthDate.month()+1)
    let dayReduce = this.reduceNumber(this.birthDate.date())
    let sumReduce = this.reduceNumber(yearReduce + monthReduce + dayReduce)
    return sumReduce

  }
  getHCheck(){
    let monthReduce = this.birthDate.month() + 1
    let yearReduce = this.birthDate.year()
    let sumReduce = this.reduceNumber(monthReduce + yearReduce)
    return sumReduce
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
    const reducedYear = this.reduceNumber(this.birthDate.year())
    const reducedMonth = this.reduceNumber(this.birthDate.month() + 1)
    const reducedDay = this.reduceNumber(this.birthDate.date())

    const stageOne = this.reduceNumber( reducedMonth + reducedDay )
    if( stage === 1 ) return stageOne

    const stageTwo = this.reduceNumber( reducedDay + reducedYear )
    if( stage === 2 ) return stageTwo

    const stageThr = this.reduceNumber( stageOne + stageTwo )
    if( stage === 3 ) return stageThr

    const stageFou = this.reduceNumber( this.birthDate.month() + 1 + this.birthDate.year() )
    if( stage === 4 ) return stageFou

    if( stage === 5 ) return stageThr
    if( stage === 6 ) return stageTwo
    if( stage === 7 ) return stageOne
  }
  /** Life Stage Karmico */
  calcLifeStageISK( stage = 1 ){
    const reducedYear = this.reduceNumber(this.birthDate.year())
    const reducedMonth = this.reduceNumber(this.birthDate.month() + 1)
    const reducedDay = this.reduceNumber(this.birthDate.date())

    const stageOne = this.reduceNumberISK( reducedMonth + reducedDay )
    if( stage === 1 ) return this.karmicos.includes(stageOne)? '*': '';

    const stageTwo = this.reduceNumberISK( reducedDay + reducedYear )
    if( stage === 2 ) return this.karmicos.includes(stageTwo)? '*': '';

    const stageThr = this.reduceNumberISK( stageOne + stageTwo )
    if( stage === 3 ) return this.karmicos.includes(stageThr)? '*': '';

    const stageFou = this.reduceNumberISK( this.birthDate.month() + 1 + this.birthDate.year() )
    if( stage === 4 ) return this.karmicos.includes(stageFou)? '*': '';

    if( stage === 5 ) return this.karmicos.includes(stageThr)? '*': '';
    if( stage === 6 ) return this.karmicos.includes(stageTwo)? '*': '';
    if( stage === 7 ) return this.karmicos.includes(stageOne)? '*': '';
  }

  getE(){ return this.calcLifeStage(1) }
  getEISK(){
    const reducedMonth = this.reduceNumber(this.birthDate.month() + 1)
    const reducedDay = this.reduceNumber(this.birthDate.date())
    const stageOne = this.reduceNumberISK( reducedMonth + reducedDay )

    return this.karmicos.includes( stageOne ) ? '*' : '';
  }
  getF(){ return this.calcLifeStage(2) }
  getFISK(){
    const reducedDay = this.reduceNumber(this.birthDate.date())
    const reducedYear = this.reduceNumber(this.birthDate.year())
    const stageTwo = this.reduceNumberISK( reducedDay + reducedYear )

    return this.karmicos.includes( stageTwo ) ? '*' : '';
  }
  getG(){ return this.calcLifeStage(3) }
  getGISK(){
    const stageThr = this.reduceNumberISK( this.getE() + this.getF() )

    return this.karmicos.includes( stageThr ) ? '*' : '';
  }
  getH(){ return this.calcLifeStage(4) }
  getHISK(){
    const stageFou = this.reduceNumberISK( this.birthDate.month() + 1 + this.birthDate.year() )

    return this.karmicos.includes( stageFou ) ? '*' : '';
  }
  hasDoubleStage(){
    let yearBirthDate = this.birthDate.year()
    let monthBirthDate =  this.birthDate.month()+1
    let dayBirthDate =  this.birthDate.date()

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


  calcLifeStageDuration( stage = 1){
    const year = this.birthDate.year()
    const month = this.birthDate.month() + 1
    const day = this.birthDate.date()

    const reduced = this.reduceNumber(year + month + day)

    const stageOneEnd = year + 36 - reduced
    if( stage === 1 ) return stageOneEnd

    if( stage < 8 ){
      const stageEnd = stageOneEnd + Math.abs((stage - 1) * 9)
      return stageEnd
    }

    return 0
  }
  calcDoubleLifeStageDuration( stage = 1){
    const year = this.birthDate.year()
    const month = this.birthDate.month() + 1
    const day = this.birthDate.date()

    const yearReduce = this.reduceNumber(year)
    const monthReduce = this.reduceNumber(month)
    const dayReduce = this.reduceNumber(day)

    const reduced = this.reduceNumber(yearReduce + monthReduce + dayReduce)

    const stageOneEnd = year + 36 - reduced
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
  /* Función adaptada a Redux */
  getLifeStage(yearToCompare = null){
    yearToCompare = yearToCompare || this.NOW.year()
    let yearBirthDate = this.birthDate.year()
    let monthBirthDate =  this.birthDate.month()+1
    let dayBirthDate =  this.birthDate.date()

    const reducedYear = this.reduceNumber(yearBirthDate)
    const reducedMonth = this.reduceNumber(monthBirthDate)
    const reducedDay = this.reduceNumber(dayBirthDate)

    const reduceSum = this.reduceNumberForSub( reducedYear + reducedMonth + reducedDay )

    const stageOne = this.reduceNumber( reducedMonth + reducedDay )
    const stageOneEnd = yearBirthDate + 36 - reduceSum;
    if( yearBirthDate <= yearToCompare && yearToCompare <= stageOneEnd ){
      return stageOne;
    }

    const stageTwo = this.reduceNumber( dayBirthDate + yearBirthDate )
    const stageTwoEnd = stageOneEnd + 9
    if( stageOneEnd <= yearToCompare && yearToCompare <= stageTwoEnd ){
      return stageTwo;
    }

    const stageThr = this.reduceNumber( stageOne + stageTwo )
    const stageThrEnd = stageTwoEnd + 9
    if( stageTwoEnd <= yearToCompare && yearToCompare <= stageThrEnd ){
      return stageThr;
    }

    const stageFou = this.reduceNumber( monthBirthDate + yearBirthDate )
    const stageFouEnd = stageThrEnd + 9
    if( stageThrEnd <= yearToCompare && yearToCompare <= stageFouEnd ){
      return stageFou;
    }

    if( stageFouEnd <= yearToCompare && yearToCompare <= (stageFouEnd + 9) ){
      return stageThr;
    }
    if( (stageFouEnd + 9) <= yearToCompare && yearToCompare <= (stageFouEnd + 18) ){
      return stageTwo;
    }
    if( (stageFouEnd + 18) <= yearToCompare ){
      return stageOne;
    }
  }
  /* Life Stage Karmico  */
  getLifeStageISK(yearToCompare = null){

    let yearBirthDate = this.birthDate.year()
    let monthBirthDate =  this.birthDate.month()+1
    let dayBirthDate =  this.birthDate.date()

    const reducedYear = this.reduceNumber(yearBirthDate)
    const reducedMonth = this.reduceNumber(monthBirthDate)
    const reducedDay = this.reduceNumber(dayBirthDate)

    const reduceSum = this.reduceNumberForSub( reducedYear + reducedMonth + reducedDay )

    const stageOne = this.reduceNumberISK( reducedMonth + reducedDay )
    const stageOneEnd = yearBirthDate + 36 - reduceSum;
    if( yearBirthDate <= yearToCompare && yearToCompare <= stageOneEnd ){
      return this.karmicos.includes(stageOne)? '*': '';
    }

    const stageTwo = this.reduceNumberISK( dayBirthDate + yearBirthDate )
    const stageTwoEnd = stageOneEnd + 9
    if( stageOneEnd <= yearToCompare && yearToCompare <= stageTwoEnd ){
      return this.karmicos.includes(stageTwo)? '*': '';
    }

    const stageThr = this.reduceNumber( stageOne + stageTwo )
    const stageThrEnd = stageTwoEnd + 9
    if( stageTwoEnd <= yearToCompare && yearToCompare <= stageThrEnd ){
      return this.karmicos.includes(stageThr)? '*': '';
    }

    const stageFou = this.reduceNumber( monthBirthDate + yearBirthDate )
    const stageFouEnd = stageThrEnd + 9
    if( stageThrEnd <= yearToCompare && yearToCompare <= stageFouEnd ){
      return this.karmicos.includes(stageFou)? '*': '';
    }

    if( stageFouEnd <= yearToCompare && yearToCompare <= (stageFouEnd + 9) ){
      return this.karmicos.includes(stageThr)? '*': '';
    }
    if( (stageFouEnd + 9) <= yearToCompare && yearToCompare <= (stageFouEnd + 18) ){
      return this.karmicos.includes(stageTwo)? '*': '';
    }
    if( (stageFouEnd + 18) <= yearToCompare ){
      return this.karmicos.includes(stageOne)? '*': '';
    }
  }

  /**
   * calculate current stage name
   * @returns {Number} stage
   */

  getLifeStageNumber(yearToCalculate = null){
    yearToCalculate =yearToCalculate || this.NOW.year()
    let yearBirthDate = this.birthDate.year()
    let monthBirthDate =  this.birthDate.month()+1
    let dayBirthDate =  this.birthDate.date()

    const reducedYear = this.reduceNumber(yearBirthDate)
    const reducedMonth = this.reduceNumber(monthBirthDate)
    const reducedDay = this.reduceNumber(dayBirthDate)

    const reduceSum = this.reduceNumberForSub( reducedYear + reducedMonth + reducedDay )
    // console.log('unic =>'+reduceSum)
    // const stageOne = this.reduceNumber( reducedMonth + reducedDay )
    const stageOneEnd = yearBirthDate + 36 - reduceSum;
    if( yearBirthDate <= yearToCalculate && yearToCalculate <= stageOneEnd ){
      return 1;
    }

    // const stageTwo = this.reduceNumber( dayBirthDate + yearBirthDate )
    const stageTwoEnd = stageOneEnd + 9
    if( stageOneEnd <= yearToCalculate && yearToCalculate <= stageTwoEnd ){
      return 2;
    }

    // const stageThr = this.reduceNumber( stageOne + stageTwo )
    const stageThrEnd = stageTwoEnd + 9
    if( stageTwoEnd <= yearToCalculate && yearToCalculate <= stageThrEnd ){
      return 3;
    }

    // const stageFou = this.reduceNumber( monthBirthDate + yearBirthDate )
    const stageFouEnd = stageThrEnd + 9
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

  getDoubleLifeStageNumber(yearToCalculate = null){
    yearToCalculate = yearToCalculate || this.NOW.year()
    let yearBirthDate = this.birthDate.year()
    let monthBirthDate =  this.birthDate.month()+1
    let dayBirthDate =  this.birthDate.date()

    const reducedYear = this.reduceNumber(yearBirthDate)
    const reducedMonth = this.reduceNumber(monthBirthDate)
    const reducedDay = this.reduceNumber(dayBirthDate)

    //const reduceSum = this.reduceNumber( yearBirthDate + monthBirthDate + dayBirthDate )
    const reduceSum = this.reduceNumber( reducedYear + reducedMonth + reducedDay )
    // console.log('double =>'+reduceSum)
    // const stageOne = this.reduceNumber( reducedMonth + reducedDay )
    const stageOneEnd = yearBirthDate + 36 - reduceSum;
    if( yearBirthDate <= yearToCalculate && yearToCalculate <= stageOneEnd ){
      return 1;
    }

    // const stageTwo = this.reduceNumber( dayBirthDate + yearBirthDate )
    const stageTwoEnd = stageOneEnd + 9
    if( stageOneEnd <= yearToCalculate && yearToCalculate <= stageTwoEnd ){
      return 2;
    }

    // const stageThr = this.reduceNumber( stageOne + stageTwo )
    const stageThrEnd = stageTwoEnd + 9
    if( stageTwoEnd <= yearToCalculate && yearToCalculate <= stageThrEnd ){
      return 3;
    }

    // const stageFou = this.reduceNumber( monthBirthDate + yearBirthDate )
    const stageFouEnd = stageThrEnd + 9
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
   * calculate unconscious number
   * AKA: I
   * reduce sum of first three life stages
   * @returns {Number}
   */
  calcUnconsciousNumber(){
    return this.reduceNumber(
      this.calcLifeStage() +
      this.calcLifeStage(2) +
      this.calcLifeStage(3)
    )
  }
  getI(){ return this.calcUnconsciousNumber() }
  getIISK(){
    const unconsciousNumber = this.reduceNumberISK(
      this.calcLifeStage() +
      this.calcLifeStage(2) +
      this.calcLifeStage(3)
    )
    return this.karmicos.includes( unconsciousNumber ) ? '*' : '';
  }

  /**
   * calculate subconscious number
   * AKA: J
   * reduce sum of fourth life stage and personality number
   * @returns {Number}
   */
  calcSubconsciousNumber(){
    return this.reduceNumber(
      this.calcPersonalityNumber() +
      this.calcLifeStage(4)
    )
  }
  getJ(){ return this.calcSubconsciousNumber() }
  getJISK(){
    const subconsciousNumber = this.reduceNumberISK(
      this.calcPersonalityNumber() +
      this.calcLifeStage(4)
    )
    return this.karmicos.includes( subconsciousNumber ) ? '*' : '';
  }


  /**
   * calculate life goals
   * AKA: 1 => K
   * AKA: 2 => L
   * AKA: 3 => M
   * AKA: 4 => N
   * @returns {Number}
   */
  calcLifeGoal( goal = 1){
    let sumDay = this.reduceNumber(this.birthDate.date())
    sumDay = this.sumNumbers( sumDay )
    let sumMonth = this.reduceNumber(this.birthDate.month() + 1)
    sumMonth = this.sumNumbers( sumMonth )
    let sumYear = this.reduceNumber(this.birthDate.year())
    sumYear = this.sumNumbers( sumYear )

    let goalOne = Math.abs( sumMonth - sumDay )
    if( goal === 1 ) return goalOne

    let goalTwo = Math.abs( sumDay - sumYear )
    if( goal === 2 ) return goalTwo

    goalOne = this.sumNumbers( goalOne )
    goalTwo = this.sumNumbers( goalTwo )
    const goalThr = Math.abs( goalOne - goalTwo )
    if( goal === 3 ) return goalThr

    const goalFou = Math.abs( sumMonth - sumYear )
    if( goal === 4 ) return goalFou
  }
  getK(){ return this.calcLifeGoal(1) }
  getL(){ return this.calcLifeGoal(2) }
  getM(){ return this.calcLifeGoal(3) }
  getN(){ return this.calcLifeGoal(4) }


  /**
   * calculate negative subconscious number
   * AKA: O
   * reduce sum of first three life goals
   * @returns {Number}
   */
  calcNegativeUnconsciousNumber(){
    return this.reduceNumber(
      this.calcLifeGoal() +
      this.calcLifeGoal(2) +
      this.calcLifeGoal(3)
    )
  }
  getO(){ return this.calcNegativeUnconsciousNumber() }

  /**
   * calculate shade number
   * AKA: P
   * reduce sum of personality number and negative subconscious number
   * @returns {Number}
   */
  calcShadeNumber(){
    return this.reduceNumber(
      this.calcPersonalityNumber() +
      this.calcNegativeUnconsciousNumber()
    )
  }
  getP(){ return this.calcShadeNumber() }

  /**
   * AKA: Q
   * reduce sum of first and third life goal
   * @returns {Number}
   */
  calcQ(){
    return this.reduceNumber(
      this.calcLifeGoal() +
      this.calcLifeGoal(3)
    )
  }
  getQ(){ return this.calcQ() }

  /**
   * AKA: R
   * reduce sum of second and third life goal
   * @returns {Number}
   */
  calcR(){
    return this.reduceNumber(
      this.calcLifeGoal(2) +
      this.calcLifeGoal(3)
    )
  }
  getR(){ return this.calcR() }

  /**
   * AKA: S
   * reduce sum of Q and R
   * @returns {Number}
   */
  calcS(){
    return this.reduceNumber(
      this.calcQ() +
      this.calcR()
    )
  }
  getS(){ return this.calcS() }

  /**
   *
   *
   * @returns {Number}
   */
  calcW(){
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
  getW(){ return this.calcW() }

  getAbsencesName(){
    const appearances = this.getAppearances();
    const absents = Object.entries(appearances).filter( (el, i) => el[1].a === 0 )
    const absentsTxt = Object.entries(absents).map( (el, i) => el[1][0] )
    return absentsTxt.join(' ') //.toString().replaceAll(',', ', ')
    // const alpabeth = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    // const name = this.fullName.toString().toLowerCase().toLowerCase().split('')
    // const absents = alpabeth.filter( (el) => ! name.includes(el) )
    // return absents.toString()
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
    return intersection.join(' ') //.toString().replaceAll(',', ', ')
  }

  calcReaction(){
    return this.reduceNumber(
      this.getB() + this.getD()
    )
  }

  calcReactionISK(){
    const reaction = this.reduceNumberISK(
      this.getB() + this.getD()
    )
    return this.karmicos.includes( reaction ) ? '*' : '';
  }

  calcSynthesis(){
    return this.reduceNumber(
      this.getA() +
      this.getB() +
      this.getC() +
      this.getD() +
      this.calcReaction()
    )
  }

  calcSynthesisISK(){
    const synthesis = this.reduceNumberISK(
      this.getA() +
      this.getB() +
      this.getC() +
      this.getD() +
      this.calcReaction()
    )
    return this.karmicos.includes( synthesis ) ? '*' : '';
  }

  calcGift(){
    let gift = this.reduceNumber(
      parseInt(this.birthDate.year().toString()[2]) +
      parseInt(this.birthDate.year().toString()[3])
    )
    if( gift === 0 ){
      gift = this.birthDate.year().toString()[1]
    }
    if( gift === 0 ){
      gift = this.birthDate.year().toString()[0]
    }

    return gift
  }

  calcGiftISK(){
    let gift = this.reduceNumberISK(
      parseInt(this.birthDate.year().toString()[2]) +
      parseInt(this.birthDate.year().toString()[3])
    )
    if( gift === 0 ){
      gift = this.birthDate.year().toString()[1]
    }
    if( gift === 0 ){
      gift = this.birthDate.year().toString()[0]
    }

    return this.karmicos.includes( gift ) ? '*' : '';
  }

  annualReturn( yearToCalculate = null ){
    yearToCalculate = yearToCalculate || this.NOW.year()
    const age = ( yearToCalculate - this.birthDate.year() )
    const a = this.reduceNumber(yearToCalculate)
    const aK = this.reduceNumberISK(yearToCalculate)
    const A = `${a}${this.karmicos.includes( aK ) ? '*' : ''}`
    const b = this.calcPersonalYear(yearToCalculate)
    const bK = this.reduceNumberISK( yearToCalculate + this.birthDate.month() + 1 + this.birthDate.date() )
    const B = `${b}${this.karmicos.includes( bK ) ? '*' : ''}`
    const c = this.reduceNumber(age)
    const cK = this.reduceNumberISK(age)
    const C = `${c}${this.karmicos.includes( cK ) ? '*' : ''}`
    const d = this.reduceNumber( a + b )
    const dK = this.reduceNumberISK( a + b )
    const D = `${d}${this.karmicos.includes( dK ) ? '*' : ''}`
    const e = this.reduceNumber( b + c )
    const eK = this.reduceNumberISK( b + c )
    const E = `${e}${this.karmicos.includes( eK ) ? '*' : ''}`
    const f = this.reduceNumber( d + e )
    const fK = this.reduceNumberISK( d + e )
    const F = `${f}${this.karmicos.includes( fK ) ? '*' : ''}`
    const g = this.reduceNumber( d + e + f )
    const gK = this.reduceNumberISK( d + e + f )
    const G = `${g}${this.karmicos.includes( gK ) ? '*' : ''}`
    const h = this.reduceNumber( a + c )
    const hK = this.reduceNumberISK( a + c )
    const H = `${h}${this.karmicos.includes( hK ) ? '*' : ''}`

    return { yearToCalculate, age, A, B, C, D, E, F, G, H }
  }

  nameCount(){
    const full = this.fullName.split(' ').join('') //.replaceAll(' ', '')
    return full.length
  }

  calcNameCycles(){
    return [1, 2, 3, 4].map( i => this.nameCount() * i)
  }
  calcNameSubCycles(){
    const factor = ( this.nameCount() / 2 ) / 2;
    const subCycles = [];
    let current = factor;
    while (current < 120 ) {
      subCycles.push( Math.round( current ) )
      current += factor;
    }

    return subCycles
  }

  calcOneDigitYearsOld(){
    return this.reduceNumber( this.getYearsOld() )
  }



  /*
   * helper
   * reduce number to one digit except if is 11 or 22
   */
  reduceNumber(reduceSum){
    while( reduceSum > 9 && ! ( reduceSum === 22 || reduceSum === 11 ) ){
      reduceSum = reduceSum.toString().toLowerCase().split('').reduce((r,c)=>r += parseInt(c), 0);
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

  sumNumbers( sumNumbers ){
    sumNumbers = sumNumbers.toString().toLowerCase().split('').reduce((r,c)=>r += parseInt(c), 0);
    return sumNumbers;
  }

  vowelsValues($c){
    switch ($c) {
      case 'a': return 1;
      case 'e': return 5;
      case 'i': return 9;
      case 'o': return 6;
      case 'u': return 3;
      case 'á': return 1;
      case 'é': return 5;
      case 'í': return 9;
      case 'ó': return 6;
      case 'ú': return 3;
      default: return 0;
    }
  }

  consonantValues($c){
    switch ($c) {
      case 'b': return 2;
      case 'c': return 3;
      case 'd': return 4;
      case 'f': return 6;
      case 'g': return 7;
      case 'h': return 8;
      case 'j': return 1;
      case 'k': return 11;
      case 'l': return 3;
      case 'm': return 4;
      case 'n': return 5;
      case 'ñ': return 5;
      case 'p': return 7;
      case 'q': return 8;
      case 'r': return 9;
      case 's': return 1;
      case 't': return 2;
      case 'v': return 22;
      case 'w': return 5;
      case 'x': return 6;
      case 'y': return 7;
      case 'z': return 8;
      default: return 0;
    }
  }

  letterValue($x){
    switch ( $x ) {
      case 'a': return 1;
      case 'e': return 5;
      case 'i': return 9;
      case 'o': return 6;
      case 'u': return 3;
      case 'b': return 2;
      case 'c': return 3;
      case 'd': return 4;
      case 'f': return 6;
      case 'g': return 7;
      case 'h': return 8;
      case 'j': return 1;
      case 'k': return 11;
      case 'l': return 3;
      case 'm': return 4;
      case 'n': return 5;
      case 'ñ': return 5;
      case 'p': return 7;
      case 'q': return 8;
      case 'r': return 9;
      case 's': return 1;
      case 't': return 2;
      case 'v': return 22;
      case 'w': return 5;
      case 'x': return 6;
      case 'y': return 7;
      case 'z': return 8;
      default: return 0;
    }
  }

  inclusionValue($x){
    switch ( $x ) {
      case 'a': return 1;
      case 'j': return 1;
      case 's': return 1;
      case 'b': return 2;
      case 'k': return 2;
      case 't': return 2;
      case 'c': return 3;
      case 'l': return 3;
      case 'u': return 3;
      case 'd': return 4;
      case 'm': return 4;
      case 'v': return 22;
      case 'e': return 5;
      case 'n': return 5;
      case 'ñ': return 5;
      case 'w': return 5;
      case 'f': return 6;
      case 'o': return 6;
      case 'x': return 6;
      case 'g': return 7;
      case 'p': return 7;
      case 'y': return 7;
      case 'h': return 8;
      case 'q': return 8;
      case 'z': return 8;
      case 'r': return 9;
      case 'i': return 9;
      default: return 0;
    }
  }

  getUngroupName( name = this.fullName ){
    let ungroupName = []
    // let ungroupNameV = 0
    // let ungroupNameC = 0
    name.toLowerCase().split('').forEach( el => {
      if( el !== ' ' ){
        // ungroupNameV += this.vowelsValues(el)
        // ungroupNameC += this.consonantValues(el)
        ungroupName.push({
          v: this.vowelsValues(el),
          L: el.toUpperCase(),
          c: this.consonantValues(el)
        })
      }
    })
    return ungroupName
  }

  getUngroupNameValues( name = this.fullName ){
    let ungroupName = []
    let ungroupNameV = 0
    let ungroupNameC = 0
    name.toLowerCase().split('').forEach( el => {
      if( el !== ' ' ){
        ungroupNameV += this.vowelsValues(el)
        ungroupNameC += this.consonantValues(el)
      }
    })
    ungroupName.push({ v: ungroupNameV, L: '', c: ungroupNameC })
    return ungroupName
  }
  getUngroupNameTotal( name = this.fullName ){
    let ungroupName = []
    let ungroupNameV = 0
    let ungroupNameC = 0
    name.toLowerCase().split('').forEach( el => {
      if( el !== ' ' ){
        ungroupNameV += this.vowelsValues(el)
        ungroupNameC += this.consonantValues(el)
      }
    })
    ungroupName.push({
      v: this.reduceNumber(ungroupNameV),
      L: this.reduceNumber(ungroupNameV + ungroupNameC),
      c: this.reduceNumber(ungroupNameC),
      vA: ungroupNameV,
      LA: ungroupNameV + ungroupNameC,
      cA: ungroupNameC,
    })
    return ungroupName
  }
  getUngroupNameTotalFull( name = this.fullName ){
    let ungroupName = []
    let ungroupNameV = 0
    let ungroupNameC = 0
    name.toLowerCase().split('').forEach( el => {
      if( el !== ' ' ){
        ungroupNameV += this.vowelsValues(el)
        ungroupNameC += this.consonantValues(el)
      }
    })
    ungroupName.push({
      v: this.reduceNumberISK(ungroupNameV),
      L: this.reduceNumberISK(ungroupNameV + ungroupNameC),
      c: ungroupNameC
    })
    return ungroupName
  }

  getAppearances(){
    let appearances = {
      1: { a: 0, v: 'AJS' },
      2: { a: 0, v: 'BKT' },
      3: { a: 0, v: 'CLU' },
      4: { a: 0, v: 'DMV' },
      5: { a: 0, v: 'ENW' },
      6: { a: 0, v: 'FOX' },
      7: { a: 0, v: 'GPY' },
      8: { a: 0, v: 'HQZ' },
      9: { a: 0, v: 'IR' },
    }
    this.fullName.toLowerCase().split('').forEach( el => {
      if( el !== ' ' ){
        const val = this.reduceNumberForSub(this.inclusionValue(el))
        appearances[val]['a']++
      }
    })
    return appearances
  }

  getNameSetting(){
    let nameSetting = []
    const name = `${this.fullName.toLowerCase()} ${this.fullName.toLowerCase()}`
    name.split('').forEach( el => {
      const lValue = this.inclusionValue(el)
      for (let i = 1; i <= lValue; i++) {
        nameSetting.push({
          pmN: this.reduceNumber(i),
          pmD: lValue,
          pmC: el.toUpperCase()
        })
      }
    })

    return nameSetting.slice(0, 124)
  }

  getDestinityTable(){
    const pmLetters = `${this.name.toString().toLowerCase()}`.toLowerCase().split('')

    const pMLetters = `${this.lastName.toString().toLowerCase()}`.toLowerCase().split('')

    const pfLetters = `${this.scdLastName.toString().toLowerCase()}`.toLowerCase().split('')

    let destinity = []
    do{
      pmLetters.forEach( el => {
        const lValue = this.letterValue(el)
        for (let i = 1; i <= lValue; i++) {
          destinity.push({
            pmN: this.reduceNumber(i),
            pmD: lValue,
            pmC: el.toUpperCase()
          })
        }
      })
    } while( destinity.length < 120 )
 
    let ipMLetters = 0
    do{
      pMLetters.forEach( el => {
        const lValue = this.letterValue(el)
        for (let i = 1; i <= lValue; i++) {
          if( destinity[ipMLetters] ){
            destinity[ipMLetters].pMN = this.reduceNumber(i)
            destinity[ipMLetters].pMD = lValue
            destinity[ipMLetters].pMC = el.toUpperCase()
            ipMLetters++
          }
        }
      })
    } while( ipMLetters < 120 )

    let ipfLetters = 0
      do{
      pfLetters.forEach( el => {
        const lValue = this.letterValue(el)
        for (let i = 1; i <= lValue; i++) {
          if( destinity[ipfLetters] ){
            destinity[ipfLetters].pfN = this.reduceNumber(i)
            destinity[ipfLetters].pfD = lValue
            destinity[ipfLetters].pfC = el.toUpperCase()
            ipfLetters++
          }
        }
      })
  } while( ipfLetters < 120 )

    return destinity.slice(0, 122)

  }

  getAllMonths(){
    return ['Enero', 'Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
  }

  getCustomMonths(){
    let indexMonth = this.birthDate.month()
    const months = this.getAllMonths()
    const listOfMonths = []
    for (let index = 0; index < 13; index++) {
      if(indexMonth>11 ){
        indexMonth = 0;
      }
      listOfMonths.push(months[indexMonth])
      indexMonth++;
    }
    return listOfMonths
  }

  /**
   * get nine year cycle
   * @returns {Number} nineYearCycle
   */
  /* Función adaptada a Redux */
  getNineYearCycle(yearToCalculate = null){
    yearToCalculate =yearToCalculate || this.NOW.year()
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

  /**
   * calculate first quater
   * @returns {Number} quater one
   */
  getQuaterOne(){
    return this.calcPastLife()
  }
  /* Quater One Karmico*/
  getQuaterOneISK(){
    const quaterOne =this.reduceNumberISK(this.birthDate.year())
    return this.karmicos.includes(quaterOne)? '*':'';
  }

  /**
   * calculate second quater
   * @param {Number} yearToCalculate
   * @returns {Number} quater two
   */
  getQuaterTwo(yearToCalculate = null){
    yearToCalculate = yearToCalculate || this.NOW.year()
    return this.reduceNumber(yearToCalculate - this.calcPersonalityNumber())
  }
  /* Quater Two Karmico */
  getQuaterTwoISK(yearToCalculate = null){
    const quaterTwo =  this.reduceNumberISK(yearToCalculate - this.calcPersonalityNumber())
    return this.karmicos.includes(quaterTwo)? '*': '';
  }

  /**
   * calculate third quater
   * @param {Number} yearToCalculate
   * @returns {Number} quater three
   */
  getQuaterThree(yearToCalculate = null){
    yearToCalculate = yearToCalculate || this.NOW.year()
    return this.reduceNumber(this.getQuaterOne() + this.getQuaterTwo(yearToCalculate))
  }
  /* Quater Three Karmico */
  getQuaterThreeISK(yearToCalculate = null){
    const quaterThree =  this.reduceNumberISK(this.getQuaterOne() + this.getQuaterTwo(yearToCalculate))
    return this.karmicos.includes(quaterThree)? '*': '';
  }

  /**
   * calculate current quater
   * @param {Number} yearToCalculate
   * @returns {Number} current quater
   */
  calcCurrentQuater(monthToCalculate=null, yearToCalculate = null){
    yearToCalculate = yearToCalculate || this.NOW.year()
    String.prototype.capitalize = function() {
      return this.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase(); });
    }
    const listOfMonths = this.getCustomMonths()
    const actualMonth = monthToCalculate.format('MMMM');
    const birthDateMonth = this.birthDate.format('MMMM')
    const index = listOfMonths.findIndex(i => i === actualMonth.capitalize())
    const indexEnero = listOfMonths.findIndex(i => i === 'Enero')
    if(index<5){
      if(birthDateMonth === actualMonth&&this.birthDate.date()>20){
        return this.getQuaterThree(yearToCalculate-1)
      }else{
        return this.getQuaterOne()
      }
    }
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
  /* Current Quater Karmico */
  calcCurrentQuaterISK(monthToCalculate=null, yearToCalculate = null){
    String.prototype.capitalize = function() {
      return this.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase(); });
    }
    const listOfMonths = this.getCustomMonths()
    const actualMonth = monthToCalculate.format('MMMM');
    const birthDateMonth = this.birthDate.format('MMMM')
    const index = listOfMonths.findIndex(i => i === actualMonth.capitalize())
    const indexEnero = listOfMonths.findIndex(i => i === 'Enero')
    if(index<5){
      if(birthDateMonth === actualMonth&&this.birthDate.date()>20){
        return this.getQuaterThreeISK(yearToCalculate-1)
      }else{
        return this.getQuaterOneISK()
      }
    }
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
  getDaysOfWeek(){
    return  ['Lun','Mar', 'Mié', 'Jue', 'Vie','Sáb','Dom']
  }
  /* Función adaptada de Redux*/
  getQuaterMonth(month, year){
    String.prototype.capitalize = function() {
      return this.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase(); });
    }
    const quaterMonth = this.NOW.month(month-1).format('MMMM')
    const monthIndex = this.getCustomMonths().findIndex(i =>i === quaterMonth.capitalize())
    const indexEnero =  this.getCustomMonths().findIndex(i => i === 'Enero')
    switch(month){
      case 1:
        if(monthIndex<5){
          if(monthIndex>=indexEnero){
            return this.getQuaterOne(year-1)
          }else{
            return this.getQuaterOne(year)
          }
        }
        if(monthIndex>4&&monthIndex<9){
          if(monthIndex>=indexEnero){
            return this.getQuaterTwo(year-1)
          }else{
            return this.getQuaterTwo(year)
          }
        }
        if(monthIndex>8){
          if(monthIndex>=indexEnero){
            return this.getQuaterThree(year-1)
          }else{
            return this.getQuaterThree(year)
          }
        }
      break;
      case 2:
        if(monthIndex<5){
          if(monthIndex>=indexEnero){
            return this.getQuaterOne(year-1)
          }else{
            return this.getQuaterOne(year)
          }
        }
        if(monthIndex>4&&monthIndex<9){
          if(monthIndex>=indexEnero){
            return this.getQuaterTwo(year-1)
          }else{
            return this.getQuaterTwo(year)
          }
        }
        if(monthIndex>8){
          if(monthIndex>=indexEnero){
            return this.getQuaterThree(year-1)
          }else{
            return this.getQuaterThree(year)
          }
        }
      break;
      case 3:
        if(monthIndex<5){
          if(monthIndex>=indexEnero){
            return this.getQuaterOne(year-1)
          }else{
            return this.getQuaterOne(year)
          }
        }
        if(monthIndex>4&&monthIndex<9){
          if(monthIndex>=indexEnero){
            return this.getQuaterTwo(year-1)
          }else{
            return this.getQuaterTwo(year)
          }
        }
        if(monthIndex>8){
          if(monthIndex>=indexEnero){
            return this.getQuaterThree(year-1)
          }else{
            return this.getQuaterThree(year)
          }
        }
      break;
      case 4:
        if(monthIndex<5){
          if(monthIndex>=indexEnero){
            return this.getQuaterOne(year-1)
          }else{
            return this.getQuaterOne(year)
          }
        }
        if(monthIndex>4&&monthIndex<9){
          if(monthIndex>=indexEnero){
            return this.getQuaterTwo(year-1)
          }else{
            return this.getQuaterTwo(year)
          }
        }
        if(monthIndex>8){
          if(monthIndex>=indexEnero){
            return this.getQuaterThree(year-1)
          }else{
            return this.getQuaterThree(year)
          }
        }
      break;
      case 5:
        if(monthIndex<5){
          if(monthIndex>=indexEnero){
            return this.getQuaterOne(year-1)
          }else{
            return this.getQuaterOne(year)
          }
        }
        if(monthIndex>4&&monthIndex<9){
          if(monthIndex>=indexEnero){
            return this.getQuaterTwo(year-1)
          }else{
            return this.getQuaterTwo(year)
          }
        }
        if(monthIndex>8){
          if(monthIndex>=indexEnero){
            return this.getQuaterThree(year-1)
          }else{
            return this.getQuaterThree(year)
          }
        }
      break;
      case 6:
        if(monthIndex<5){
          if(monthIndex>=indexEnero){
            return this.getQuaterOne(year-1)
          }else{
            return this.getQuaterOne(year)
          }
        }
        if(monthIndex>4&&monthIndex<9){
          if(monthIndex>=indexEnero){
            return this.getQuaterTwo(year-1)
          }else{
            return this.getQuaterTwo(year)
          }
        }
        if(monthIndex>8){
          if(monthIndex>=indexEnero){
            return this.getQuaterThree(year-1)
          }else{
            return this.getQuaterThree(year)
          }
        }
      break;
      case 7:
        if(monthIndex<5){
          if(monthIndex>=indexEnero){
            return this.getQuaterOne(year-1)
          }else{
            return this.getQuaterOne(year)
          }
        }
        if(monthIndex>4&&monthIndex<9){
          if(monthIndex>=indexEnero){
            return this.getQuaterTwo(year-1)
          }else{
            return this.getQuaterTwo(year)
          }
        }
        if(monthIndex>8){
          if(monthIndex>=indexEnero){
            return this.getQuaterThree(year-1)
          }else{
            return this.getQuaterThree(year)
          }
        }
      break;
      case 8:
        if(monthIndex<5){
          if(monthIndex>=indexEnero){
            return this.getQuaterOne(year-1)
          }else{
            return this.getQuaterOne(year)
          }
        }
        if(monthIndex>4&&monthIndex<9){
          if(monthIndex>=indexEnero){
            return this.getQuaterTwo(year-1)
          }else{
            return this.getQuaterTwo(year)
          }
        }
        if(monthIndex>8){
          if(monthIndex>=indexEnero){
            return this.getQuaterThree(year-1)
          }else{
            return this.getQuaterThree(year)
          }
        }
      break;
      case 9:
        if(monthIndex<5){
          if(monthIndex>=indexEnero){
            return this.getQuaterOne(year-1)
          }else{
            return this.getQuaterOne(year)
          }
        }
        if(monthIndex>4&&monthIndex<9){
          if(monthIndex>=indexEnero){
            return this.getQuaterTwo(year-1)
          }else{
            return this.getQuaterTwo(year)
          }
        }
        if(monthIndex>8){
          if(monthIndex>=indexEnero){
            return this.getQuaterThree(year-1)
          }else{
            return this.getQuaterThree(year)
          }
        }
      break;
      case 10:
        if(monthIndex<5){
          if(monthIndex>=indexEnero){
            return this.getQuaterOne(year-1)
          }else{
            return this.getQuaterOne(year)
          }
        }
        if(monthIndex>4&&monthIndex<9){
          if(monthIndex>=indexEnero){
            return this.getQuaterTwo(year-1)
          }else{
            return this.getQuaterTwo(year)
          }
        }
        if(monthIndex>8){
          if(monthIndex>=indexEnero){
            return this.getQuaterThree(year-1)
          }else{
            return this.getQuaterThree(year)
          }
        }
      break;
      case 11:
        if(monthIndex<5){
          if(monthIndex>=indexEnero){
            return this.getQuaterOne(year-1)
          }else{
            return this.getQuaterOne(year)
          }
        }
        if(monthIndex>4&&monthIndex<9){
          if(monthIndex>=indexEnero){
            return this.getQuaterTwo(year-1)
          }else{
            return this.getQuaterTwo(year)
          }
        }
        if(monthIndex>8){
          if(monthIndex>=indexEnero){
            return this.getQuaterThree(year-1)
          }else{
            return this.getQuaterThree(year)
          }
        }
      break;
      case 12:
        if(monthIndex<5){
          if(monthIndex>=indexEnero){
            return this.getQuaterOne(year-1)
          }else{
            return this.getQuaterOne(year)
          }
        }
        if(monthIndex>4&&monthIndex<9){
          if(monthIndex>=indexEnero){
            return this.getQuaterTwo(year-1)
          }else{
            return this.getQuaterTwo(year)
          }
        }
        if(monthIndex>8){
          if(monthIndex>=indexEnero){
            return this.getQuaterThree(year-1)
          }else{
            return this.getQuaterThree(year)
          }
        }
      break;
    }
  }
  /* Quater Month Karmico */
  getQuaterMonthISK(month, year){
    String.prototype.capitalize = function() {
      return this.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase(); });
    }
    const quaterMonth = this.NOW.month(month-1).format('MMMM')
    const monthIndex = this.getCustomMonths().findIndex(i =>i === quaterMonth.capitalize())
    const indexEnero =  this.getCustomMonths().findIndex(i => i === 'Enero')
    switch(month){
      case 1:
        if(monthIndex<5){
          if(monthIndex>=indexEnero){
            return this.getQuaterOneISK(year-1)
          }else{
            return this.getQuaterOneISK(year)
          }
        }
        if(monthIndex>4&&monthIndex<9){
          if(monthIndex>=indexEnero){
            return this.getQuaterTwoISK(year-1)
          }else{
            return this.getQuaterTwoISK(year)
          }
        }
        if(monthIndex>8){
          if(monthIndex>=indexEnero){
            return this.getQuaterThreeISK(year-1)
          }else{
            return this.getQuaterThreeISK(year)
          }
        }
      break;
      case 2:
        if(monthIndex<5){
          if(monthIndex>=indexEnero){
            return this.getQuaterOneISK(year-1)
          }else{
            return this.getQuaterOneISK(year)
          }
        }
        if(monthIndex>4&&monthIndex<9){
          if(monthIndex>=indexEnero){
            return this.getQuaterTwoISK(year-1)
          }else{
            return this.getQuaterTwoISK(year)
          }
        }
        if(monthIndex>8){
          if(monthIndex>=indexEnero){
            return this.getQuaterThreeISK(year-1)
          }else{
            return this.getQuaterThreeISK(year)
          }
        }
      break;
      case 3:
        if(monthIndex<5){
          if(monthIndex>=indexEnero){
            return this.getQuaterOneISK(year-1)
          }else{
            return this.getQuaterOneISK(year)
          }
        }
        if(monthIndex>4&&monthIndex<9){
          if(monthIndex>=indexEnero){
            return this.getQuaterTwoISK(year-1)
          }else{
            return this.getQuaterTwoISK(year)
          }
        }
        if(monthIndex>8){
          if(monthIndex>=indexEnero){
            return this.getQuaterThreeISK(year-1)
          }else{
            return this.getQuaterThreeISK(year)
          }
        }
      break;
      case 4:
        if(monthIndex<5){
          if(monthIndex>=indexEnero){
            return this.getQuaterOneISK(year-1)
          }else{
            return this.getQuaterOneISK(year)
          }
        }
        if(monthIndex>4&&monthIndex<9){
          if(monthIndex>=indexEnero){
            return this.getQuaterTwoISK(year-1)
          }else{
            return this.getQuaterTwoISK(year)
          }
        }
        if(monthIndex>8){
          if(monthIndex>=indexEnero){
            return this.getQuaterThreeISK(year-1)
          }else{
            return this.getQuaterThreeISK(year)
          }
        }
      break;
      case 5:
        if(monthIndex<5){
          if(monthIndex>=indexEnero){
            return this.getQuaterOneISK(year-1)
          }else{
            return this.getQuaterOneISK(year)
          }
        }
        if(monthIndex>4&&monthIndex<9){
          if(monthIndex>=indexEnero){
            return this.getQuaterTwoISK(year-1)
          }else{
            return this.getQuaterTwoISK(year)
          }
        }
        if(monthIndex>8){
          if(monthIndex>=indexEnero){
            return this.getQuaterThreeISK(year-1)
          }else{
            return this.getQuaterThreeISK(year)
          }
        }
      break;
      case 6:
        if(monthIndex<5){
          if(monthIndex>=indexEnero){
            return this.getQuaterOneISK(year-1)
          }else{
            return this.getQuaterOneISK(year)
          }
        }
        if(monthIndex>4&&monthIndex<9){
          if(monthIndex>=indexEnero){
            return this.getQuaterTwoISK(year-1)
          }else{
            return this.getQuaterTwoISK(year)
          }
        }
        if(monthIndex>8){
          if(monthIndex>=indexEnero){
            return this.getQuaterThreeISK(year-1)
          }else{
            return this.getQuaterThree(year)
          }
        }
      break;
      case 7:
        if(monthIndex<5){
          if(monthIndex>=indexEnero){
            return this.getQuaterOneISK(year-1)
          }else{
            return this.getQuaterOneISK(year)
          }
        }
        if(monthIndex>4&&monthIndex<9){
          if(monthIndex>=indexEnero){
            return this.getQuaterTwoISK(year-1)
          }else{
            return this.getQuaterTwoISK(year)
          }
        }
        if(monthIndex>8){
          if(monthIndex>=indexEnero){
            return this.getQuaterThreeISK(year-1)
          }else{
            return this.getQuaterThreeISK(year)
          }
        }
      break;
      case 8:
        if(monthIndex<5){
          if(monthIndex>=indexEnero){
            return this.getQuaterOneISK(year-1)
          }else{
            return this.getQuaterOneISK(year)
          }
        }
        if(monthIndex>4&&monthIndex<9){
          if(monthIndex>=indexEnero){
            return this.getQuaterTwoISK(year-1)
          }else{
            return this.getQuaterTwoISK(year)
          }
        }
        if(monthIndex>8){
          if(monthIndex>=indexEnero){
            return this.getQuaterThreeISK(year-1)
          }else{
            return this.getQuaterThreeISK(year)
          }
        }
      break;
      case 9:
        if(monthIndex<5){
          if(monthIndex>=indexEnero){
            return this.getQuaterOneISK(year-1)
          }else{
            return this.getQuaterOneISK(year)
          }
        }
        if(monthIndex>4&&monthIndex<9){
          if(monthIndex>=indexEnero){
            return this.getQuaterTwoISK(year-1)
          }else{
            return this.getQuaterTwoISK(year)
          }
        }
        if(monthIndex>8){
          if(monthIndex>=indexEnero){
            return this.getQuaterThreeISK(year-1)
          }else{
            return this.getQuaterThreeISK(year)
          }
        }
      break;
      case 10:
        if(monthIndex<5){
          if(monthIndex>=indexEnero){
            return this.getQuaterOneISK(year-1)
          }else{
            return this.getQuaterOneISK(year)
          }
        }
        if(monthIndex>4&&monthIndex<9){
          if(monthIndex>=indexEnero){
            return this.getQuaterTwoISK(year-1)
          }else{
            return this.getQuaterTwoISK(year)
          }
        }
        if(monthIndex>8){
          if(monthIndex>=indexEnero){
            return this.getQuaterThreeISK(year-1)
          }else{
            return this.getQuaterThreeISK(year)
          }
        }
      break;
      case 11:
        if(monthIndex<5){
          if(monthIndex>=indexEnero){
            return this.getQuaterOneISK(year-1)
          }else{
            return this.getQuaterOneISK(year)
          }
        }
        if(monthIndex>4&&monthIndex<9){
          if(monthIndex>=indexEnero){
            return this.getQuaterTwoISK(year-1)
          }else{
            return this.getQuaterTwoISK(year)
          }
        }
        if(monthIndex>8){
          if(monthIndex>=indexEnero){
            return this.getQuaterThreeISK(year-1)
          }else{
            return this.getQuaterThreeISK(year)
          }
        }
      break;
      case 12:
        if(monthIndex<5){
          if(monthIndex>=indexEnero){
            return this.getQuaterOneISK(year-1)
          }else{
            return this.getQuaterOneISK(year)
          }
        }
        if(monthIndex>4&&monthIndex<9){
          if(monthIndex>=indexEnero){
            return this.getQuaterTwoISK(year-1)
          }else{
            return this.getQuaterTwoISK(year)
          }
        }
        if(monthIndex>8){
          if(monthIndex>=indexEnero){
            return this.getQuaterThreeISK(year-1)
          }else{
            return this.getQuaterThreeISK(year)
          }
        }
      break;
    }
  }
  getAllDaysInMonth(month, year){
    return  Array.from(Array(moment(`${year}-${month}`).daysInMonth()), (_, i) => i + 1)
  }

  getDaysOfWeekCustom(month, year){
    String.prototype.capitalize = function() {
      return this.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase(); });
    }
    const daysInMonth = this.getAllDaysInMonth(month, year)
    let daysCustom =[]
    const dayInWeek = this.getDaysOfWeek()
    let firstDay = this.NOW.date(daysInMonth[0]).format('ddd')
    firstDay = firstDay.replace(/\./g,'')
    let dayIndex = this.getDaysOfWeek().findIndex(i => i === firstDay.capitalize())
    for(let i= 0; i<7; i++){
      if(dayIndex>6){
        dayIndex = 0
      }
        daysCustom.push(dayInWeek[dayIndex])
        dayIndex++
    }
    return daysCustom
  }
  compatibilityObject(){
    const table = {
      1:{pn:[1,5,7,11],pc:[2,3,9],pd:[4,6,22],pne:[8]},
      2:{pn:[2,4,8,22],pc:[1,3,6,9],pd:[5,7,11],pne:[]},
      3:{pn:[3, 6 , 9],pc:[1, 2 ,5],pd:[4, 7, 8, 11,22],pne:[]},
      4:{pn:[2, 4, 8 , 22],pc:[6, 7,11],pd:[1, 3, 5,9],pne:[]},
      5:{pn:[1, 5, 7,11],pc:[3,9],pd:[2,4,6,22],pne:[8]},
      6:{pn:[3,6,9],pc:[2,4,8,22],pd:[1,5,7,11],pne:[]},
      7:{pn:[1,5,7,11],pc:[4,22],pd:[2, 3,6,8,9],pne:[]},
      8:{pn:[2, 4, 8 , 22],pc:[6],pd:[3, 7, 9 , 11],pne:[1,5]},
      9:{pn:[3, 6 , 9],pc:[1, 2 , 5],pd:[4, 7, 8, 11 , 22],pne:[]},
      11:{pn:[1,5,7,11],pc:[4, 8 , 22],pd:[2, 3, 6 , 9],pne:[]},
      22:{pn:[2, 4, 8 , 22],pc:[6, 7 , 11],pd:[1, 3, 5 , 9],pne:[]}
    }
    return table;
  }
  getCompatibility( number, partnerN){
    const table = this.compatibilityObject()
    const tableNumber = table[number]
    for( const [ k, v] of  Object.entries(tableNumber)){
      if(v.includes(partnerN)){
        return k.toUpperCase();
      }
    }

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



}

// module.exports = Person
export default Person