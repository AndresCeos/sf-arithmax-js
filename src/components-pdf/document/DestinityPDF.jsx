import {
  DestinityTable,
  DestinityNumericalValues
} from '..';

import nameImage from '../assets/destinity-table.jpg'
import nameImage2 from '../assets/destinity-table2.jpg'

export const DestinityPDF = (consultant, date) => {


  const table = consultant.getDestinityTable()
  const table1 = table.slice(0, 30);
  const table2 = table.slice(30, 60);
  const table3 = table.slice(60, 90);

  return [
    {
      bg: nameImage,
      children: <>
        <DestinityTable consultant={consultant} date={date} table={table1} slice={0} start={0} />
        <DestinityTable consultant={consultant} date={date} table={table2} slice={1} start={30} />
      </>
    },
    {
      bg: nameImage2,
      children: <>
        <DestinityTable consultant={consultant} date={date} table={table1} slice={0} start={60} />
        <DestinityNumericalValues consultant={consultant} date={date} />

      </>
    }
  ]
}
