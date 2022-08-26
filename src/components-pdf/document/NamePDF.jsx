import {
  NameValues,
  NamePotential,
  NameTable,
  NameActive,
  NameInhabitants,
  NameCycle,
  NameBalance,
  NameFrequencyPotential
} from '..';

import nameImage from '../assets/name.jpg'
import nameImage2 from '../assets/name2.jpg'

export const NamePDF = (consultant, date) => {
  return [
    {
      bg: nameImage,
      children: <>
        <NameValues consultant={consultant} />
        <NamePotential consultant={consultant} />
        <NameTable consultant={consultant} />
        <NameActive consultant={consultant} />
        <NameInhabitants consultant={consultant} />
      </>
    },
    {
      bg: nameImage2,
      children: <>
        <NameCycle consultant={consultant} date={date} />
        <NameBalance consultant={consultant} />
        <NameFrequencyPotential consultant={consultant} />
      </>
    }
  ]
}
