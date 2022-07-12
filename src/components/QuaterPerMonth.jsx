import { useSelector } from 'react-redux';
import { capitalize } from '../resources';
import { dateSelect } from '../hooks';

import moment from 'moment/min/moment-with-locales'
moment.locale("es-mx")

export const QuaterPerMonth = ({consultant}) =>{

  const {newDate} = dateSelect()

  const listOfMonths = consultant.getCustomMonths()
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
  const personalYearISK = consultant.calcPersonalYearISK(newDate.year())

  let m1, m2, m3, m4, cm1, cm2, cm3, cm4 = ''
  let ism1, ism2, ism3, ism4 = false
  const now2 = moment()

  const personalYear = consultant.calcPersonalYear(newDate.year())
  const actualMonth = newDate.format('MMMM');
  const index = listOfMonths.findIndex(i => i === 'Enero')
  const currentMonth = listOfMonths.findIndex(i => i === capitalize(actualMonth))
  switch(index){
    case 0:
      m1 = 'De '+listOfMonths[index]+ ' a '+ listOfMonths[4]
      m2= 'De '+listOfMonths[5]+ ' a '+ listOfMonths[8]
      m3= 'De '+listOfMonths[9]+ ' a '+ listOfMonths[11]
      cm1 = personalYear+personalYearISK +'/'+quater1+quater1Karmico
      cm2 = personalYear+personalYearISK +'/'+quater2+quater2Karmico
      cm3 = personalYear+personalYearISK +'/'+quater3+quater3Karmico
      if(currentMonth>=0&&currentMonth<=4){ism1=true}
      if(currentMonth>=5&&currentMonth<=8){ism2=true}
      if(currentMonth>=9&&currentMonth<=11){ism3=true}
    break;
    case 1:
      m1 = 'De '+listOfMonths[index]+ ' a '+ listOfMonths[4]
      m2= 'De '+listOfMonths[5]+ ' a '+ listOfMonths[8]
      m3= 'De '+listOfMonths[9]+ ' a '+ listOfMonths[11]
      m4= 'En '+listOfMonths[index-1]
      cm1 = personalYear+personalYearISK +'/'+quater1LastYear+quater1Karmico
      cm2 = personalYear+personalYearISK +'/'+quater2LastYear+quater2KarmicoLast
      cm3 = personalYear+personalYearISK +'/'+quater3LastYear+quater3KarmicoLast
      cm4 = personalYear+personalYearISK +'/'+quater1+quater1Karmico
      if(currentMonth>=1&&currentMonth<=4&&now2.year() === newDate.year()){ism1=true}
      if(currentMonth>=5&&currentMonth<=8&&now2.year() === newDate.year()){ism2=true}
      if(currentMonth>=9&&currentMonth<=11&&now2.year() === newDate.year()){ism3=true}
      if(currentMonth===0&&now2.year() === newDate.year()){ism4=true}
    break;
    case 2:
    case 3:
      m1 = 'De '+listOfMonths[index]+ ' a '+ listOfMonths[4]
      m2= 'De '+listOfMonths[5]+ ' a '+ listOfMonths[8]
      m3= 'De '+listOfMonths[9]+ ' a '+ listOfMonths[11]
      m4= 'De '+listOfMonths[0]+ ' a '+ listOfMonths[index-1]
      cm1 = personalYear+personalYearISK +'/'+quater1LastYear+quater1Karmico
      cm2 = personalYear+personalYearISK +'/'+quater2LastYear+quater2KarmicoLast
      cm3 = personalYear+personalYearISK +'/'+quater3LastYear+quater3KarmicoLast
      cm4 = personalYear+personalYearISK +'/'+quater1+quater1Karmico
      if(currentMonth>=3&&currentMonth<=4){ism1=true}
      if(currentMonth>=5&&currentMonth<=8){ism2=true}
      if(currentMonth>=9&&currentMonth<=11){ism3=true}
      if(currentMonth>=0&&currentMonth<=2){ism4=true}
    break;
    case 4:
      m1 = 'En '+listOfMonths[index]
      m2= 'De '+listOfMonths[5]+ ' a '+ listOfMonths[8]
      m3= 'De '+listOfMonths[9]+ ' a '+ listOfMonths[11]
      m4= 'De '+listOfMonths[0]+ ' a '+ listOfMonths[index-1]
      cm1 = personalYear+personalYearISK +'/'+quater1LastYear+quater1Karmico
      cm2 = personalYear+personalYearISK +'/'+quater2LastYear+quater2KarmicoLast
      cm3 = personalYear+personalYearISK +'/'+quater3LastYear+quater3KarmicoLast
      cm4 = personalYear+personalYearISK +'/'+quater1+quater1Karmico
      if(currentMonth===4){ism1=true}
      if(currentMonth>=5&&currentMonth<=8){ism2=true}
      if(currentMonth>=9&&currentMonth<=11){ism3=true}
      if(currentMonth>=0&&currentMonth<=7){ism4=true}
    break;
    case 5:
      m1 = 'De '+listOfMonths[index] +' a ' + listOfMonths[8]
      m2= 'De '+listOfMonths[9]+ ' a '+ listOfMonths[11]
      m3= 'De '+listOfMonths[12]+ ' a '+ listOfMonths[4]
      cm1 = personalYear+personalYearISK +'/'+quater2LastYear+quater2KarmicoLast
      cm2 = personalYear+personalYearISK +'/'+quater3LastYear+quater3KarmicoLast
      cm3 = personalYear+personalYearISK +'/'+quater1+quater1Karmico
      if(currentMonth>=5&&currentMonth<=8){ism1=true}
      if(currentMonth>=9&&currentMonth<=11){ism2=true}
      if(currentMonth>=0&&currentMonth<=4){ism3=true}

    break;
    case 6:
      m1 = 'De '+listOfMonths[index] +' a ' + listOfMonths[8]
      m2= 'De '+listOfMonths[9]+ ' a '+ listOfMonths[11]
      m3= 'De '+listOfMonths[12]+ ' a '+ listOfMonths[4]
      m4= 'En '+ listOfMonths[index-1]
      cm1 = personalYear+personalYearISK +'/'+quater2LastYear+quater2KarmicoLast
      cm2 = personalYear+personalYearISK +'/'+quater3LastYear+quater3KarmicoLast
      cm3 = personalYear+personalYearISK +'/'+quater1+quater1Karmico
      cm4 = personalYear+personalYearISK +'/'+quater2+quater2Karmico
      if(currentMonth>=6&&currentMonth<=8){ism1=true}
      if(currentMonth>=9&&currentMonth<=11){ism2=true}
      if(currentMonth>=0&&currentMonth<=4){ism3=true}
      if(currentMonth===5){ism4=true}
    break;
    case 7:
      m1 = 'De '+listOfMonths[index] +' a ' + listOfMonths[8]
      m2= 'De '+listOfMonths[9]+ ' a '+ listOfMonths[11]
      m3= 'De '+listOfMonths[12]+ ' a '+ listOfMonths[4]
      m4= 'De '+listOfMonths[5]+ ' a '+ listOfMonths[index-1]
      cm1 = personalYear+personalYearISK +'/'+quater2LastYear+quater2KarmicoLast
      cm2 = personalYear+personalYearISK +'/'+quater3LastYear+quater3KarmicoLast
      cm3 = personalYear+personalYearISK +'/'+quater1+quater1Karmico
      cm4=personalYear+personalYearISK +'/'+quater2+quater2Karmico
      if(currentMonth>=7&&currentMonth<=8){ism1=true}
      if(currentMonth>=9&&currentMonth<=11){ism2=true}
      if(currentMonth>=0&&currentMonth<=4){ism3=true}
      if(currentMonth>=5&&currentMonth<=index-1){ism4=true}
    break;
    case 8:
      m1 = 'En '+listOfMonths[index]
      m2= 'De '+listOfMonths[9]+ ' a '+ listOfMonths[11]
      m3= 'De '+listOfMonths[12]+ ' a '+ listOfMonths[4]
      m4= 'De '+listOfMonths[5]+ ' a '+ listOfMonths[index-1]

      cm1 = personalYear+personalYearISK +'/'+quater2LastYear+quater2KarmicoLast
      cm2 = personalYear+personalYearISK +'/'+quater3LastYear+quater3KarmicoLast
      cm3 = personalYear+personalYearISK +'/'+quater1+quater1Karmico
      cm4 = personalYear+personalYearISK +'/'+quater2+quater2Karmico
      if(currentMonth===8){ism1=true}
      if(currentMonth>=9&&currentMonth<=11){ism2=true}
      if(currentMonth>=0&&currentMonth<=4){ism3=true}
      if(currentMonth>=5&&currentMonth<=7){ism4=true}
    break;
    case 9:
      m1 = 'De '+listOfMonths[index] +' a ' + listOfMonths[11]
      m2= 'De '+listOfMonths[0]+ ' a '+ listOfMonths[4]
        m3= 'De '+listOfMonths[5]+ ' a '+ listOfMonths[8]
      cm1 = personalYear+personalYearISK +'/'+quater3LastYear+quater3KarmicoLast
      cm2 = personalYear+personalYearISK +'/'+quater1+quater1Karmico
      cm3 = personalYear+personalYearISK +'/'+quater2+quater2Karmico
      if(currentMonth>=index&&currentMonth<=11){ism1=true}
      if(currentMonth>=0&&currentMonth<=4){ism2=true}
      if(currentMonth>=5&&currentMonth<=8){ism3=true}

    break;
    case 10:
      m1 = 'De '+listOfMonths[index] +' a ' + listOfMonths[11]
      m2= 'De '+listOfMonths[0]+ ' a '+ listOfMonths[4]
        m3= 'De '+listOfMonths[5]+ ' a '+ listOfMonths[8]
      m4= 'En '+ listOfMonths[index-1]
      cm1 = personalYear+personalYearISK +'/'+quater3LastYear+quater3KarmicoLast
      cm2 = personalYear+personalYearISK +'/'+quater1+quater1Karmico
      cm3 = personalYear+personalYearISK +'/'+quater2+quater2Karmico
      cm4=personalYear+personalYearISK +'/'+quater3+quater3Karmico
      if(currentMonth>=index&&currentMonth<=11){ism1=true}
      if(currentMonth>=0&&currentMonth<=4){ism2=true}
      if(currentMonth>=5&&currentMonth<=8){ism3=true}
      if(currentMonth===index-1){ism4=true}
    break;
    case 11:
      m1 = 'En '+listOfMonths[index]
      m2= 'De '+listOfMonths[0]+ ' a '+ listOfMonths[4]
        m3= 'De '+listOfMonths[5]+ ' a '+ listOfMonths[8] 
      m4= 'De '+listOfMonths[9]+ ' a '+ listOfMonths[index-1]
      cm1 = personalYear+personalYearISK +'/'+quater3LastYear+quater3KarmicoLast
      cm2 = personalYear+personalYearISK +'/'+quater1+quater1Karmico
      cm3 = personalYear+personalYearISK +'/'+quater2+quater2Karmico
      cm4=personalYear+personalYearISK +'/'+quater3+quater3Karmico
      if(currentMonth===index){ism1=true}
      if(currentMonth>=0&&currentMonth<=4){ism2=true}
      if(currentMonth>=5&&currentMonth<=8){ism3=true}
      if(currentMonth>=9&&currentMonth<=index-1){ism4=true}
    break;

  }
  // console.log(cm4 +'-'+m4);

return(
  <div className='h-full'>
    <div className='items-center text-black flex justify-center text-xl font-bold bg-black bg-opacity-15 border-t border-solid border-gray-300 h-14 text-xl '>{newDate.year()}</div>
    <div>
      <div className={` ${ism1?'text-black bg-black bg-opacity-15 ':'text-gray-500'} items-center  font-bold border-t border-gray-300 flex justify-center  h-14 text-xl`}>{m1}</div>
      <div className= {`${ism1?'text-black bg-black bg-opacity-15 ':'text-gray-500'} items-center flex justify-center border-t border-gray-300 font-bold h-12 text-xl`}>{cm1}</div>
    </div>
    <div>
      <div className={`${ism2?'text-black bg-black bg-opacity-15 ':'text-gray-500'} items-center font-bold border-t border-gray-300 flex justify-center h-14 text-xl`}>{m2}</div>
      <div className={`${ism2?'text-black bg-black bg-opacity-15 ':'text-gray-500'} items-center flex justify-center border-t border-gray-300 font-bold h-12 text-xl`}>{cm2}</div>
    </div>
    <div>
      <div className={`${ism3?'text-black bg-black bg-opacity-15 ':'text-gray-500'} items-center font-bold border-t border-gray-300 flex justify-center  h-14 text-xl`}>{m3}</div>
      <div className={`${ism3?'text-black bg-black bg-opacity-15 ':'text-gray-500'} items-center flex justify-center border-t border-gray-300 font-bold h-12 text-xl`}>{cm3}</div>
    </div>
    {(cm4!=='')?
      <div>
        <div className={`${ism4?'text-black bg-black bg-opacity-15 ':'text-gray-500'} items-center font-bold border-t border-gray-300 flex justify-center h-14 text-xl`}>{m4}</div>
        <div className={`${ism4?'text-black bg-black bg-opacity-15 ':'text-gray-500'} items-center flex justify-center border-t border-gray-300 font-bold h-12 text-xl`}>{cm4}</div>
      </div>
      :''
    }
  </div>
)

}