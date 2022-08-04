import { useSelector } from "react-redux";
import { UnselectedConsultant, UserPartnerSelect } from "../components";
import { dateSelect, useConsultant } from "../hooks"

const  GroupPinnaclePage = () =>{
  const { userActive, userPartnerActive, isSelectPartner } = useSelector(state => state.users);
  const isEmpty = Object.keys(userActive).length === 0;
  const { consultant } = useConsultant()
  const {newDate} = dateSelect()
  if( isEmpty ){
    return<UnselectedConsultant />
  }
return(
  <div className='grid grid-cols-12 mx-14 gap-6 mt-8 pt-10'>
    <UserPartnerSelect isGroup />
  </div>
)
}
export default GroupPinnaclePage