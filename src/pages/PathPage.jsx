import { useSelector } from 'react-redux';
import { UnselectedConsultant, PathMonth } from '../components/';
import moment from 'moment/min/moment-with-locales'
moment.locale("es-mx")

import { useConsultant, dateSelect } from '../hooks';
import {  nowWeekNumber, capitalize } from '../resources/';
import { TiPlus } from "react-icons/ti";

import green_arrow from '../assets/icons/green-arrow.svg'
import arrow_bk from '../assets/arrow_bk.svg'

const PathPage = () => {
  const { userActive } = useSelector(state => state.users);
  const {newDate} = dateSelect()
  const isEmpty = Object.keys(userActive).length === 0;
  const { consultant } = useConsultant()

  if( isEmpty ){
    return <UnselectedConsultant />
  }

  const now = moment()

  const cicle = [
    {
      vibration: consultant.calcPersonalYear( newDate.year()-4 ),
      year: newDate.year()-4
    },
    {
      vibration: consultant.calcPersonalYear( newDate.year()-3 ),
      year: newDate.year()-3
    },
    {
      vibration: consultant.calcPersonalYear( newDate.year()-2 ),
      year: newDate.year()-2
    },
    {
      vibration: consultant.calcPersonalYear( newDate.year()-1 ),
      year: newDate.year()-1
    },
    {
      vibration: consultant.calcPersonalYear( newDate.year() ),
      year: newDate.year()
    },
    {
      vibration: consultant.calcPersonalYear( newDate.year()+1 ),
      year: newDate.year()+1
    },
    {
      vibration: consultant.calcPersonalYear( newDate.year()+2 ),
      year: newDate.year()+2
    },
    {
      vibration: consultant.calcPersonalYear( newDate.year()+3 ),
      year: newDate.year()+3
    },
    {
      vibration: consultant.calcPersonalYear( newDate.year()+4 ),
      year: newDate.year()+4
    },
    {
      vibration: consultant.calcPersonalYear( newDate.year()+5 ),
      year: newDate.year()+5
    },
  ]

  let m1, m2, m3, m4, cm1, cm2, cm3, cm4 = ''
  let start, end =''
  const listOfMonths = consultant.getCustomMonths()
  const index = listOfMonths.findIndex(i => i === 'Enero')

  const quater1 = consultant.getQuaterOne()
  const quater2 = consultant.getQuaterTwo(newDate.year())
  const quater3 = consultant.getQuaterThree(newDate.year())

  const lastYear = newDate.year()-1

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

  const currentMonth = listOfMonths.findIndex(i => i === capitalize( actualMonth ) )
  const listOfMonths3 = listOfMonths.map( e =>  e.substring(0, 3) )
  // console.log(actualMonth);
  // console.log(currentMonth);
  const currentMonthName = capitalize(listOfMonths[currentMonth])

  switch(index){
    case 0:
      m1 = listOfMonths3[index]+ ' - '+ listOfMonths3[4]
      m2= listOfMonths3[5]+ ' - '+ listOfMonths3[8]
      m3= listOfMonths3[9]+ ' - '+ listOfMonths3[11]
      cm1 = quater1+quater1Karmico
      cm2 = quater2+quater2Karmico
      cm3 = quater3+quater3Karmico
      if(currentMonth>=0&&currentMonth<=4){ism1=true}
      if(currentMonth>=5&&currentMonth<=8){ism2=true}
      if(currentMonth>=9&&currentMonth<=11){ism3=true}
    break;
    case 1:
      m1 = listOfMonths3[index]+ ' - '+ listOfMonths3[4]
      m2= listOfMonths3[5]+ ' - '+ listOfMonths3[8]
      m3= listOfMonths3[9]+ ' - '+ listOfMonths3[11]
      m4= listOfMonths3[index-1]
      cm1 = quater1LastYear+quater1Karmico
      cm2 = quater2LastYear+quater2KarmicoLast
      cm3 = quater3LastYear+quater3KarmicoLast
      cm4 = quater1+quater1Karmico
      start = listOfMonths3[index]
      end = listOfMonths3[4]
      if(currentMonth>=1&&currentMonth<=4){ism1=true}
      if(currentMonth>=5&&currentMonth<=8){ism2=true}
      if(currentMonth>=9&&currentMonth<=11){ism3=true}
      if(currentMonth===0){ism4=true}
    break;
    case 2:
    case 3:
      m1 = listOfMonths3[index]+ ' - '+ listOfMonths3[4]
      m2= listOfMonths3[5]+ ' - '+ listOfMonths3[8]
      m3= listOfMonths3[9]+ ' - '+ listOfMonths3[11]
      m4= listOfMonths3[0]+ ' - '+ listOfMonths3[index-1]
      cm1 = quater1LastYear+quater1Karmico
      cm2 = quater2LastYear+quater2KarmicoLast
      cm3 = quater3LastYear+quater3KarmicoLast
      cm4 = quater1+quater1Karmico
      if(currentMonth>=3&&currentMonth<=4){ism1=true}
      if(currentMonth>=5&&currentMonth<=8){ism2=true}
      if(currentMonth>=9&&currentMonth<=11){ism3=true}
      if(currentMonth>=0&&currentMonth<=2){ism4=true}
    break;
    case 4:
      m1 = listOfMonths3[index]
      m2= listOfMonths3[5]+ ' - '+ listOfMonths3[8]
      m3= listOfMonths3[9]+ ' - '+ listOfMonths3[11]
      m4= listOfMonths3[0]+ ' - '+ listOfMonths3[index-1]
      cm1 = quater1LastYear+quater1Karmico
      cm2 = quater2LastYear+quater2KarmicoLast
      cm3 = quater3LastYear+quater3KarmicoLast
      cm4 = quater1+quater1Karmico
      if(currentMonth===4){ism1=true}
      if(currentMonth>=5&&currentMonth<=8){ism2=true}
      if(currentMonth>=9&&currentMonth<=11){ism3=true}
      if(currentMonth>=0&&currentMonth<=7){ism4=true}
    break;
    case 5:
      m1 = listOfMonths3[index] +' - ' + listOfMonths3[8]
      m2= listOfMonths3[9]+ ' - '+ listOfMonths3[11]
      m3= listOfMonths3[12]+ ' - '+ listOfMonths3[4]
      cm1 = quater2LastYear+quater2KarmicoLast
      cm2 = quater3LastYear+quater3KarmicoLast
      cm3 = quater1+quater1Karmico
      if(currentMonth>=5&&currentMonth<=8){ism1=true}
      if(currentMonth>=9&&currentMonth<=11){ism2=true}
      if(currentMonth>=0&&currentMonth<=4){ism3=true}

    break;
    case 6:
      m1 = listOfMonths3[index] +' - ' + listOfMonths3[8]
      m2= listOfMonths3[9]+ ' - '+ listOfMonths3[11]
      m3= listOfMonths3[12]+ ' - '+ listOfMonths3[4]
      m4=  listOfMonths3[index-1]
      cm1 = quater2LastYear+quater2KarmicoLast
      cm2 = quater3LastYear+quater3KarmicoLast
      cm3 = quater1+quater1Karmico
      cm4 = quater2+quater2Karmico
      if(currentMonth>=6&&currentMonth<=8){ism1=true}
      if(currentMonth>=9&&currentMonth<=11){ism2=true}
      if(currentMonth>=0&&currentMonth<=4){ism3=true}
      if(currentMonth===5){ism4=true}
    break;
    case 7:
      m1 = listOfMonths3[index] +' - ' + listOfMonths3[8]
      m2= listOfMonths3[9]+ ' - '+ listOfMonths3[11]
      m3= listOfMonths3[12]+ ' - '+ listOfMonths3[4]
      m4= listOfMonths3[5]+ ' - '+ listOfMonths3[index-1]
      cm1 = quater2LastYear+quater2KarmicoLast
      cm2 = quater3LastYear+quater3KarmicoLast
      cm3 = quater1+quater1Karmico
      cm4=quater2+quater2Karmico
      if(currentMonth>=7&&currentMonth<=8){ism1=true}
      if(currentMonth>=9&&currentMonth<=11){ism2=true}
      if(currentMonth>=0&&currentMonth<=4){ism3=true}
      if(currentMonth>=5&&currentMonth<=index-1){ism4=true}
    break;
    case 8:
      m1 = listOfMonths3[index]
      m2= listOfMonths3[9]+ ' - '+ listOfMonths3[11]
      m3= listOfMonths3[12]+ ' - '+ listOfMonths3[4]
      m4= listOfMonths3[5]+ ' - '+ listOfMonths3[index-1]

      cm1 = quater2LastYear+quater2KarmicoLast
      cm2 = quater3LastYear+quater3KarmicoLast
      cm3 = quater1+quater1Karmico
      cm4 = quater2+quater2Karmico
      if(currentMonth===8){ism1=true}
      if(currentMonth>=9&&currentMonth<=11){ism2=true}
      if(currentMonth>=0&&currentMonth<=4){ism3=true}
      if(currentMonth>=5&&currentMonth<=7){ism4=true}
    break;
    case 9:
      m1 = listOfMonths3[index] +' - ' + listOfMonths3[11]
      m2= listOfMonths3[0]+ ' - '+ listOfMonths3[4]
      m3= listOfMonths3[5]+ ' - '+ listOfMonths3[8]
      cm1 = quater3LastYear+quater3KarmicoLast
      cm2 = quater1+quater1Karmico
      cm3 = quater2+quater2Karmico
      if(currentMonth>=index&&currentMonth<=11){ism1=true}
      if(currentMonth>=0&&currentMonth<=4){ism2=true}
      if(currentMonth>=5&&currentMonth<=8){ism3=true}

    break;
    case 10:
      m1 = listOfMonths3[index] +' - ' + listOfMonths3[11]
      m2= listOfMonths3[0]+ ' - '+ listOfMonths3[4]
      m3= listOfMonths3[5]+ ' - '+ listOfMonths3[8]
      m4=  listOfMonths3[index-1]
      cm1 = quater3LastYear+quater3KarmicoLast
      cm2 = quater1+quater1Karmico
      cm3 = quater2+quater2Karmico
      cm4=quater3+quater3Karmico
      if(currentMonth>=index&&currentMonth<=11){ism1=true}
      if(currentMonth>=0&&currentMonth<=4){ism2=true}
      if(currentMonth>=5&&currentMonth<=8){ism3=true}
      if(currentMonth===index-1){ism4=true}
    break;
    case 11:
      m1 = listOfMonths3[index]
      m2= listOfMonths3[0]+ ' - '+ listOfMonths3[4]
      m3= listOfMonths3[5]+ ' - '+ listOfMonths3[8]
      m4= listOfMonths3[9]+ ' - '+ listOfMonths3[index-1]
      cm1 = quater3LastYear+quater3KarmicoLast
      cm2 = quater1+quater1Karmico
      cm3 = quater2+quater2Karmico
      cm4=quater3+quater3Karmico
      if(currentMonth===index){ism1=true}
      if(currentMonth>=0&&currentMonth<=4){ism2=true}
      if(currentMonth>=5&&currentMonth<=8){ism3=true}
      if(currentMonth>=9&&currentMonth<=index-1){ism4=true}
    break;

  }


  const activeStage = consultant.getLifeStageNumber(newDate.year())
  // console.log('start => '+start)
  // console.log('end => '+end)

  const currentWeek = nowWeekNumber(newDate)

  return(
    <>
      <div className='grid grid-cols-24 mt-8 mx-14 gap-6 pt-10'>

        <div className='col-span-24 mb-5'>
          <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
            <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-main p-2'>
              <TiPlus className='text-2xl'/>
            </div>
            Ciclo de 9 años
          </div>
          <div className='pinnacle-wrap px-8 py-8'>
            <div className='grid grid-cols-16 text-center text-gray-500'>
              <div className='col-start-3 col-span-full row-start-2 row-end-6 relative'>
                <div className='absolute z-10 centered-axis-x w-full'>
                  <img src={arrow_bk} alt='arrow_bk' />
                </div>
              </div>
              <div className='col-start-1 col-span-2 row-start-2'>{ now.year() }</div>
              <div className='col-start-1 col-span-2 row-start-3 h-10 bg-red flex justify-center items-center text-black text-xl font-bold rounded-md border-4 border-red'>
                Año {consultant.calcPersonalYear()}
              </div>
              <div className='col-start-1 col-span-2 row-start-5 h-9 arrow-down-cicle'></div>
              <div className='col-start-1 col-span-2 row-start-6 text-13 font-bold'>
                Autonomía Independencia
              </div>

              <div className='col-start-4 col-span-2 row-start-2 text-13 font-bold'>{now.year() - 9}</div>
              <div className='col-start-4 col-span-2 row-start-3 relative'>
                <div className='absolute z-10 centered-axis-x'>
                  <div className="w-10 h-10 text-xl font-black text-black flex justify-center items-center bg-red border border-red rounded-full inner-shadow">
                    {consultant.calcPersonalYear()}
                  </div>
                </div>
              </div>
              <div className='col-start-4 col-span-2 row-start-5 h-9 arrow-down-line'></div>
              <div className='col-start-4 col-span-2 row-start-6 h-9 arrow-down-cicle'></div>
              <div className='col-start-4 col-span-2 row-start-7 text-13 font-bold'>
                Graduación<br/>
                Empiezo a trabajar
              </div>

              <div className='col-start-6 row-start-1 text-13 font-medium'>
                + 9 años
              </div>
              <div className='col-start-6 row-start-2 flex items-center justify-center'>
                <img src={green_arrow} alt="green arrow" />
              </div>

              <div className='col-start-7 col-span-2 row-start-2 text-13 font-bold'>{now.year()}</div>
              <div className='col-start-7 col-span-2 row-start-3 relative'>
                <div className='absolute z-10 centered-axis-x'>
                  <div className="w-10 h-10 text-xl font-black text-black flex justify-center items-center bg-red border border-red rounded-full inner-shadow">
                    {consultant.calcPersonalYear()}
                  </div>
                </div>
              </div>
              <div className='col-start-7 col-span-2 row-start-5 h-9 arrow-down-cicle'></div>
              <div className='col-start-7 col-span-2 row-start-6 text-13 font-bold'>
                Me independizo<br/>
                y emprendo
              </div>

              <div className='col-start-9 row-start-1 text-13 font-medium'>
                + 9 años
              </div>
              <div className='col-start-9 row-start-2 flex items-center justify-center'>
                <img src={green_arrow} alt="green arrow" />
              </div>

              <div className='col-start-10 col-span-2 row-start-2 text-13 font-bold'>{now.year() + 9}</div>
              <div className='col-start-10 col-span-2 row-start-3 relative'>
                <div className='absolute z-10 centered-axis-x'>
                  <div className="w-10 h-10 text-xl font-black text-black flex justify-center items-center bg-red border border-red rounded-full inner-shadow">
                    {consultant.calcPersonalYear()}
                  </div>
                </div>
              </div>
              <div className='col-start-10 col-span-2 row-start-5 h-9 arrow-down-line'></div>
              <div className='col-start-10 col-span-2 row-start-6 h-9 arrow-down-cicle'></div>
              <div className='col-start-10 col-span-2 row-start-7 text-13 font-bold'>
                Creo mi propia<br/>
                marca
              </div>

              <div className='col-start-12 row-start-1 text-13 font-medium'>
                + 9 años
              </div>
              <div className='col-start-12 row-start-2 flex items-center justify-center'>
                <img src={green_arrow} alt="green arrow" />
              </div>

              <div className='col-start-13 col-span-2 row-start-2 text-13 font-bold'>{now.year() + 18}</div>
              <div className='col-start-13 col-span-2 row-start-3 relative'>
                <div className='absolute z-10 centered-axis-x'>
                  <div className="w-10 h-10 text-xl font-black text-black flex justify-center items-center bg-red border border-red rounded-full inner-shadow">
                    {consultant.calcPersonalYear()}
                  </div>
                </div>
              </div>
              <div className='col-start-13 col-span-2 row-start-5 h-9 arrow-down-cicle'></div>
              <div className='col-start-13 col-span-2 row-start-6 text-13 font-bold'>
                Me independizo<br/>
                del negocio
              </div>

            </div>
          </div>
        </div>

        <div className='col-span-24 mb-10'>
          <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
            <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-green-s p-2'>
              <TiPlus className='text-2xl'/>
            </div>
            Etapa de Aprendizaje
          </div>
          <div className='pinnacle-wrap px-8 py-8'>
            <div className='grid grid-cols-10 border-b-2 border-gray-400 border-dashed mb-3 pb-2'>
              <div className='col-span-3 text-13 font-black pt-3'>
                1. Etapa de Vida
              </div>
              <div className='col-span-7 flex justify-between'>
                <div
                  className={`
                    relative w-12 h-12 text-xl font-black text-black flex justify-center items-center border border-green rounded-full inner-shadow
                    ${activeStage === 1 ? 'bg-green path-stage-active' : 'bg-white' }
                  `}
                >
                  {consultant.calcLifeStage(1)}{consultant.calcLifeStageISK(1)}
                </div>
                <div
                  className={`
                    relative w-12 h-12 text-xl font-black text-black flex justify-center items-center border border-green rounded-full inner-shadow
                    ${activeStage === 2 ? 'bg-green path-stage-active' : 'bg-white' }
                  `}
                >
                  {consultant.calcLifeStage(2)}{consultant.calcLifeStageISK(2)}
                </div>
                <div
                  className={`
                    relative w-12 h-12 text-xl font-black text-black flex justify-center items-center border border-green rounded-full inner-shadow
                    ${activeStage === 3 ? 'bg-green path-stage-active' : 'bg-white' }
                  `}
                >
                  {consultant.calcLifeStage(3)}{consultant.calcLifeStageISK(3)}
                </div>
                <div
                  className={`
                    relative w-12 h-12 text-xl font-black text-black flex justify-center items-center border border-green rounded-full inner-shadow
                    ${activeStage === 4 ? 'bg-green path-stage-active' : 'bg-white' }
                  `}
                >
                  {consultant.calcLifeStage(4)}{consultant.calcLifeStageISK(4)}
                </div>
                <div
                  className={`
                    relative w-12 h-12 text-xl font-black text-black flex justify-center items-center border border-green rounded-full inner-shadow
                    ${activeStage === 5 ? 'bg-green path-stage-active' : 'bg-white' }
                  `}
                >
                  {consultant.calcLifeStage(3)}{consultant.calcLifeStageISK(3)}
                </div>
                <div
                  className={`
                    relative w-12 h-12 text-xl font-black text-black flex justify-center items-center border border-green rounded-full inner-shadow
                    ${activeStage === 6 ? 'bg-green path-stage-active' : 'bg-white' }
                  `}
                >
                  {consultant.calcLifeStage(2)}{consultant.calcLifeStageISK(2)}
                </div>
                <div
                  className={`
                    relative w-12 h-12 text-xl font-black text-black flex justify-center items-center border border-green rounded-full inner-shadow
                    ${activeStage === 7 ? 'bg-green path-stage-active' : 'bg-white' }
                  `}
                >
                  {consultant.calcLifeStage(1)}{consultant.calcLifeStageISK(1)}
                </div>
              </div>
            </div>
            <div className='grid grid-cols-10 border-b-2 border-gray-400 border-dashed mb-3 pt-4 pb-2'>
              <div className='col-span-3 text-13 font-black pt-3'>
                2. Año Personal
              </div>
              <div className='col-span-7 grid grid-cols-10 gap-x-6 border-4 border-b-0 border-secondary'>
                <div className='bg-purple-30 text-13 font-bold flex items-center justify-center col-span-10 h-7'>
                  CICLO DE 9 AÑOS
                </div>

                { cicle.map( ( cicle, i ) =>
                  <>
                    <div
                      className={`
                        row-start-2 text-xl font-bold flex items-center justify-center rounded-md h-10 relative mt-6
                        ${(cicle.vibration === 22 || cicle.vibration === 44) ? 'col-span-2' : '' }
                        ${newDate.year() === cicle.year ? 'bg-secondary path-personal-vibration-active' : 'bg-purple-30'}
                      `}
                    >
                      {cicle.vibration}{consultant.calcPersonalYearISK(cicle.year)}
                    </div>
                    <div
                      className={`
                        row-start-3 text-13 font-bold text-center my-1 relative
                        ${now.year() === cicle.year ? 'text-secondary path-personal-year-active' : 'text-gray-400'}
                      `}
                    >
                      {cicle.year}
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className='grid grid-cols-10 border-b-2 border-gray-400 border-dashed mb-3 pt-3 pb-12'>
              <div className='col-span-3 text-13 font-black pt-3'>
                3. Cuatrimestres
              </div>
              <div className='col-span-7 border-4 border-b-0 border-green'>
                <div className='bg-green-30 text-13 font-bold flex items-center justify-center h-7'>
                CUATRIMESTRES
                </div>

                <div className="flex justify-between mt-5">
                  <div
                    className={
                      `cicle-year bg-green-30 text-xl font-bold flex items-center justify-center rounded-md w-10 h-10
                      ${ism1 ? 'quater-active': ''}`
                    }
                  >
                    {cm1}
                    <div
                      className={`path-quarter-des ${ism1 ? 'path-quater-active': ''}`}
                    >{m1.toUpperCase()}</div>
                  </div>
                  <div
                    className={
                      `cicle-year bg-green-30 text-xl font-bold flex items-center justify-center rounded-md w-10 h-10
                      ${ism2 ? 'quater-active': ''}`
                    }
                  >
                    {cm2}
                    <div
                      className={`path-quarter-des ${ism2 ? 'path-quater-active': ''}`}
                    >{m2.toUpperCase()}</div>
                  </div>
                  <div
                    className={
                      `cicle-year bg-green-30 text-xl font-bold flex items-center justify-center rounded-md w-10 h-10
                      ${ism3 ? 'quater-active': ''}`
                    }
                  >
                    {cm3}
                    <div
                      className={`path-quarter-des ${ism3 ? 'path-quater-active': ''}`}
                    >{m3.toUpperCase()}</div>
                  </div>
                  {(m4 !==undefined)?<div
                    className={
                      `cicle-year bg-green-30 text-xl font-bold flex items-center justify-center rounded-md w-10 h-10
                      ${ism4 ? 'quater-active': ''}`
                    }
                  >
                    {cm4}
                    <div
                      className={`path-quarter-des ${ism4 ? 'path-quater-active': ''}`}
                    >{m4.toUpperCase()}</div>
                  </div>:''}
                </div>
              </div>
            </div>
            <div className='grid grid-cols-10 border-b-2 border-gray-400 border-dashed mb-3 pt-4 pb-12'>
              <div className='col-span-3 text-13 font-black pt-3 h-7'>
                4. Meses Personales
              </div>
              <div className='col-span-7 border-4 border-b-0 border-gold'>
                <div className='bg-gold-30 text-13 font-bold flex items-center justify-center h-7'>
                MESES PERSONALES
                </div>
                <PathMonth consultant={consultant}/>
              </div>
            </div>
            <div className='grid grid-cols-10 mb-3 pt-3 pb-12'>
              <div className='col-span-3 text-13 font-black pt-3 h-7'>
                5. Semanas Personales
              </div>
              <div className='col-span-7 border-4 border-b-0 border-blue-week'>
                <div className='bg-blue-week text-13 font-bold flex items-center justify-center h-7'>
                SEMANAS PERSONALES {currentWeek}
                </div>

                <div className="flex justify-between mt-5">
                  <div
                    className={`
                      cicle-year bg-blue-week text-xl font-bold flex items-center justify-center rounded-md w-10 h-10
                      ${currentWeek === 1 ? 'week-active' : ''}
                    `}
                  >
                    {consultant.calcSelectPersonalWeek(newDate.month()+1,1,newDate.year())}{consultant.calcSelectPersonalWeekISK(newDate.month()+1,1,newDate.year())}
                    <div
                      className={`path-week-des ${currentWeek === 1 ? 'path-week-active' : ''}`}
                    >1-7 { currentMonthName }</div>
                  </div>
                  <div
                    className={`
                      cicle-year bg-blue-week text-xl font-bold flex items-center justify-center rounded-md w-10 h-10
                      ${currentWeek === 2 ? 'week-active' : ''}
                    `}
                  >
                    {consultant.calcSelectPersonalWeek(newDate.month()+1,2,newDate.year())}{consultant.calcSelectPersonalWeekISK(newDate.month()+1,2,newDate.year())}
                    <div
                      className={`path-week-des ${currentWeek === 2 ? 'path-week-active' : ''}`}
                    >8-14 { currentMonthName }</div>
                  </div>
                  <div
                    className={`
                      cicle-year bg-blue-week text-xl font-bold flex items-center justify-center rounded-md w-10 h-10
                      ${currentWeek === 3 ? 'week-active' : ''}
                    `}
                  >
                    {consultant.calcSelectPersonalWeek(newDate.month()+1,3,newDate.year())}{consultant.calcSelectPersonalWeekISK(newDate.month()+1,3,newDate.year())}
                    <div
                      className={`path-week-des ${currentWeek === 3 ? 'path-week-active' : ''}`}
                    >15-21 { currentMonthName }</div>
                  </div>
                  <div
                    className={`
                      cicle-year bg-blue-week text-xl font-bold flex items-center justify-center rounded-md w-10 h-10
                      ${currentWeek === 4 ? 'week-active' : ''}
                    `}
                  >
                    {consultant.calcSelectPersonalWeek(newDate.month()+1,4,newDate.year())}{consultant.calcSelectPersonalWeekISK(newDate.month()+1,4,newDate.year())}
                    <div
                      className={`path-week-des ${currentWeek === 4 ? 'path-week-active' : ''}`}
                    >22-{moment(now2).endOf('month').format('DD') } { currentMonthName }</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PathPage;