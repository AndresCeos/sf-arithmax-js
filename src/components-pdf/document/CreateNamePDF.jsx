import {
  CreateName,
  CreateNumeric,
  CreateTable,
  CreatePinnacle,
  CreateBreakdown,
  AnnualReturns
} from '..';

import createName from '../assets/create-name.jpg'

export const CreateNamePDF = (consultant) => {
  return {
    bg: createName,
    children: <>
      <CreateName consultant={consultant} />
      <CreateNumeric consultant={consultant} />
      <CreateTable consultant={consultant} />
      <CreatePinnacle consultant={consultant} />
      <CreateBreakdown consultant={consultant} />
      <AnnualReturns consultant={consultant} />
    </>
  }
}
