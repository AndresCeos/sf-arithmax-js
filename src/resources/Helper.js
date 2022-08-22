import moment from 'moment/min/moment-with-locales'
moment.locale("es-mx")

const now = moment()
export const clientConfig = {
  siteUrl: 'https://app.numerologia-cotidiana.com'
}
const getAllMonths = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const getAllMonthsEnglish = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


export const formatDate = dateStr => {
  const date = moment( dateStr )
  let month =date.format('MMMM')
  //let index = getAllMonthsEnglish.findIndex(i => i === date.format('MMMM'))
  return `${date.date()} de ${capitalize(month)} ${date.year()}`
}

export const currentDate = (date = null) => {
  date = date || now
  let index = getAllMonthsEnglish.findIndex(i => i === date.format('MMMM'))
  return `${date.date()} ${getAllMonths[index]} ${date.year()}`
}

export const pageName = location => {
  location = location.replace('/', '')
  switch( location ){
    case 'pinaculo': return 'Pináculo'
    case 'nombre': return 'Análisis Numerológico del Nombre'
    case 'ajusteNombre': return 'Ajuste Numerológico del Nombre'
    case 'retornos': return 'Retornos Anuales'
    case 'destino': return 'Tabla del Destino'
    case 'sinastria': return 'Análisis Numerológico de Pareja'
    case 'retornosPareja': return 'Retornos Anuales en Pareja'
    default: return location
  }
}

export const nowWeekNumber = (date = now) => {
  const prefixes = [1,2,3,4,5];
  const week = prefixes[0 | moment(date).date() / 7]
  return week < 5 ? week : 4
}

export const formBirthDate = date => {
  // console.log( {date} )
  const birthDate = moment(date)
  return `${birthDate.date()}/${birthDate.format("MM")}/${birthDate.year()}`
}

export const calcAge = (date, yearToCalculate) => {
  const birthDate = moment(date)
  yearToCalculate = yearToCalculate || moment().year()
  // console.log( {date, yearToCalculate} )
  return yearToCalculate - birthDate.year()
}

export const capitalize = (str = "") => {
  // console.log( str )
  return str.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
}