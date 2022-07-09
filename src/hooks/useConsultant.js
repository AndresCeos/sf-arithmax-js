import { useSelector } from "react-redux";
import Person from "../resources/Person";

export const useConsultant = () => {
  const { userActive } = useSelector(state => state.users);
  const { names: name, lastName, scdLastName, date: birthDate } = userActive
  const consultant = new Person({name, lastName, scdLastName, birthDate})
  return { consultant }
}