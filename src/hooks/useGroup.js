import { useSelector } from 'react-redux';
import Person from '../resources/Person';

export const useGroup = () => {
  const { userActive } = useSelector(state => state.users);
  const isEmpty = Object.keys(userActive).length === 0;
  const group = []
  if (!isEmpty) {
    userActive.group.forEach(p => {
      const { names: name, lastName, scdLastName, date: birthDate } = p
      console.log(p);
      const person = new Person({ name, lastName, scdLastName, birthDate })
      group.push(person)
    })
  }

  return { group }
}