import {
  AnnualReturns, CreateBreakdown, CreateName,
  CreateNumeric, CreatePinnacle, CreateTable, NameCycle
} from '..';
import createName2 from '../assets/create-name-2.jpg';
import createName from '../assets/create-name.jpg';

export const CreateNamePDF = ({ createNameObj, newDate }) => {
  return [{
    bg: createName,
    children: <>
      <CreateName consultant={createNameObj} />
      <CreateNumeric consultant={createNameObj} />
      <CreateTable consultant={createNameObj} />
      <CreatePinnacle consultant={createNameObj} />
      <CreateBreakdown consultant={createNameObj} />
      <AnnualReturns consultant={createNameObj} />
    </>
  },
  {
    bg: createName2,
    children: <NameCycle consultant={createNameObj} date={newDate} />
  }]
}
