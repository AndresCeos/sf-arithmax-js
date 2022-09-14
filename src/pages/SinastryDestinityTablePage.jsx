import { useDispatch, useSelector } from 'react-redux';

import { SinastryDestinyTable, UnselectedConsultant, UserPartnerSelect } from '../components';

import { Person } from '../resources';

import { TiPlus } from 'react-icons/ti';
import { useConsultant } from '../hooks';
import { setIsSelectPartner } from '../store/slices/users/users';

const SinastyDestinityTablePage = () => {
  const { userActive, userPartnerActive, isSelectPartner } = useSelector(state => state.users);
  const { consultant } = useConsultant()
  const dispatch = useDispatch()

  const isUnselectedConsultant = Object.keys(userActive).length === 0;
  if (isUnselectedConsultant) {
    return <UnselectedConsultant />
  }

  const hasPartners = Object.keys(userActive.partner).length > 0;
  if (!hasPartners) {
    dispatch(setIsSelectPartner(false))
  }

  const isSelectedPartner = Object.keys(userPartnerActive).length > 0;

  if (!isSelectedPartner) {
    return (
      <div className='grid grid-cols-12 mx-14 gap-6 mt-8 pt-10'>
        <UserPartnerSelect />
        <div className="col-span-12 text-center text-black">Agrega/Selecciona una pareja para ver esta información</div>
      </div>
    )
  }

  const partner = new Person({
    name: userPartnerActive.names,
    lastName: userPartnerActive.lastName,
    scdLastName: userPartnerActive.scdLastName,
    birthDate: userPartnerActive.date,
    yearMeet: userPartnerActive.yearMeet
  })

  if (partner === undefined) {
    return <UnselectedConsultant />
  }

  const ageMeet = userPartnerActive.yearMeet - consultant.birthDate.year()
  const t = consultant.getDestinityTable()
  const table = t.slice(ageMeet)

  const table1 = table.slice(0, 11);
  const table2 = table.slice(11, 22);
  const table3 = table.slice(22, 33);
  const table4 = table.slice(33, 44);

  const ageMeetP = userPartnerActive.yearMeet - partner.birthDate.year()
  let tP
  let partnerTable = []
  let partnerTable1 = []
  let partnerTable2 = []
  let partnerTable3 = []
  let partnerTable4 = []

  if (isSelectedPartner) {
    tP = partner.getDestinityTable()
    partnerTable = tP.slice(ageMeetP)
    partnerTable1 = partnerTable.slice(0, 11);
    partnerTable2 = partnerTable.slice(11, 22);
    partnerTable3 = partnerTable.slice(22, 33);
    partnerTable4 = partnerTable.slice(33, 44);
  }


  return (
    <div className='grid grid-cols-12 mx-14 gap-6 mt-8 pt-10'>

      <UserPartnerSelect />

      {(isSelectedPartner)

        ? (
          <div className='col-span-12 mb-5'>
            <div className='bg-black text-white text-base font-bold h-8 flex justify-start items-center rounded-tl-2xl rounded-tr-2xl'>
              <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-gold p-2'>
                <TiPlus className='text-2xl' />
              </div>
              Tabla del Destino de la Pareja
            </div>
            <div className='pinnacle-wrap px-8 py-3'>

              <SinastryDestinyTable
                table={table1}
                start={0 + ageMeet}
                consultant={consultant}
                partner={partner}
                tableP={partnerTable1}
                startP={0 + ageMeetP}
              />
              <SinastryDestinyTable
                table={table2}
                start={11 + ageMeet}
                consultant={consultant}
                partner={partner}
                tableP={partnerTable2}
                startP={11 + ageMeetP}
              />
              <SinastryDestinyTable
                table={table3}
                start={22 + ageMeet}
                consultant={consultant}
                partner={partner}
                tableP={partnerTable3}
                startP={22 + ageMeetP}
              />
              <SinastryDestinyTable
                table={table4}
                start={33 + ageMeet}
                consultant={consultant}
                partner={partner}
                tableP={partnerTable4}
                startP={33 + ageMeetP}
              />
            </div>
          </div>
        )
        : <div className="col-span-12 text-center">Agrega/Selecciona una pareja para ver esta información</div>
      }

    </div>
  )
}

export default SinastyDestinityTablePage;