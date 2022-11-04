import { useSelector } from 'react-redux';
import Person from '../resources/Person';

export const useConsultant = () => {
  const { userActive } = useSelector(state => state.users);
  const { id, names: name, lastName, scdLastName, date: birthDate } = userActive
  const consultant = new Person({ id, name, lastName, scdLastName, birthDate })
  return { consultant }
}