import { useSelector } from "react-redux";
import Person from "../resources/Person";

export const useGroup = () => {
  const { userActive } = useSelector(state => state.users);
  let group = []
  userActive.group.forEach( p => {
    const { names: name, lastName, scdLastName, date: birthDate } = p
    console.log(p);
    let person = new Person({name, lastName, scdLastName, birthDate})
    group.push(person)
  })
  return { group }
}