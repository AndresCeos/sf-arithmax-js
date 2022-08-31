import moment from 'moment/min/moment-with-locales'
moment.locale("es-mx")

const now = moment()
export const clientConfig = {
  siteUrl: 'https://app.numerologia-cotidiana.com'
}
const getAllMonths = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const getAllMonthsEnglish = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export const ciclePhrases = {
  1: [
    'Dejando atrás al niño modelo, para saber ¿Quién soy?.',
    'Creando a un nuevo "YO" más independiente y seguro.',
    'Autoafirmando mi liderazgo e individualidad en el mundo.',
    'Liberaciones y búsqueda de mi propio emprendimiento.',
  ],
  11: [
    'Obligado a madurar y asumir la responsabilidad de mi vida.',
    'Aprendiendo a construir una mejor versión de mi mismo.',
    'Salgo de mis fronteras, cambiando mi mentalidad y visión de vida. ',
    'Apertura de consciencia y conexión con algo más elevado.',
  ],
  3: [
    'Enamorándome de mi vida y apresurándome a experimentar.',
    'Saliendo de todo lo que me somete, para aprender a elegir ¿Qué quiero?',
    'Expreso mis deseos, sin importar el que dirán. Aprendo a decir "NO".',
    'Me Aperturo a pararme sobre el escenario y tomar el micrófono.',
  ],
  4: [
    'Saliendo de estructuras rígidas, opresivas o desordenadas en la vida.',
    'Reordenando mi vida y construyendo una nueva estructura',
    'Confronto mis limitaciones, me activo y derrumbo los muros que me contienen.',
    'Construyo un nuevo orden en mi vida, con estructuras mas sanas y equilibradas.',
  ],
  5: [
    'Me aventuro a ir tras mi pasión y luchar por lo que quiero.',
    'Cambios sorpresivos que me mueven a una nueva realidad.',
    'Necesidad de sentirme vivo e ir en busca de una nueva pasión.',
    'Redireccionando hacia una realidad más libre y auténtica.',
  ],
  6: [
    'Aprendo a construir relaciones emocionales, solidarias, profundas y productivas.',
    'Conecto con mi amor propio y me permito poner mi semilla en el mundo. Soy fértil.',
    'Aprendo a atender mis necesidades,  antes que las de los demás. Me valoro.',
    'Momento de crear y conectar con mi tribu, permitiéndome nutrirlos y ser nutrido.',
  ],
  7: [
    'Asumo responsabilidades y compromisos de vida.',
    'Me perfecciono, aprendo y/o enseño profundizando mi sabiduría.',
    'Me especializo y comprometo en elevar y trasmitir mi conocimiento.',
    'Suelto responsabilidades para comprometerme con mi proyecto de vida.',
  ],
  8: [
    'Desarrollo autoridad y liderazgo en base a mi disciplina, enfoque y determinación. ',
    'Salgo del control, domino y opresión de una autoridad y tomo el liderazgo de mi vida.',
    'Me empodero y construyo mi propio esenario de abundancia y seguridad.',
    'Materializo mi potencial y talento, construyendo un proyecto propio más ambicioso.',
  ],
  9: [
    'Fin de un camino. Crecimiento obligado, sales al mundo por ti mismo.',
    'Asumo mi madurez para ir en busca de autonomía e independencia del clan.',
    'Me identifico con un ideal más grande que "YO". Reconocimiento y notoriedad por lo que hago.',
    'Conecto con mi lado humanista, en busca de una vida con sentido y propósito.',
  ]
}

export const formatDate = dateStr => {
  const date = moment(dateStr)
  console.log(date.format('MMMM'));
  let index = getAllMonthsEnglish.findIndex(i => i === date.format('MMMM'))
  return `${date.date()} de ${date.format('MMMM')} ${date.year()}`
}

export const currentDate = (date = null) => {
  date = date || now
  let index = getAllMonthsEnglish.findIndex(i => i === date.format('MMMM'))
  return `${date.date()} ${getAllMonths[index]} ${date.year()}`
}

export const pageName = location => {
  location = location.replace('/', '')
  switch (location) {
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
  const prefixes = [1, 2, 3, 4, 5];
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

export const sanitize = (text) => {
  return text
    .toString()
    .normalize('NFD')  // split an accented letter in the base letter and the acent
    .replace(/[\u0300-\u036f]/g, '')  // remove all previously split accents
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
};