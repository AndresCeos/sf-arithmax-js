import {
  AnnualReturns, CreateBreakdown, CreateName,
  CreateNumeric, CreatePinnacle, CreateTable
} from '..';
import createName from '../assets/create-name.jpg';

export const CreateNamePDF = ({ createNameObj }) => {
  return {
    bg: createName,
    children: <>
      <CreateName consultant={createNameObj} />
      <CreateNumeric consultant={createNameObj} />
      <CreateTable consultant={createNameObj} />
      <CreatePinnacle consultant={createNameObj} />
      <CreateBreakdown consultant={createNameObj} />
      <AnnualReturns consultant={createNameObj} />
              </>
  }
}
