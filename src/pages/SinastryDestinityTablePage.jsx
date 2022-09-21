import { useDispatch, useSelector } from 'react-redux';

import { DestinityTable, SinastryDestinyTable, UnselectedConsultant, UserPartnerSelect } from '../components';

import { Person } from '../resources';

import { useState } from 'react';
import { TiPlus } from 'react-icons/ti';
import { useConsultant } from '../hooks';
import { setIsSelectPartner } from '../store/slices/users/users';

const SinastyDestinityTablePage = () => {
  const { userActive, userPartnerActive, isSelectPartner } = useSelector(state => state.users);
  const { consultant } = useConsultant()
  const dispatch = useDispatch()
  const [partnerActive, setPartnerActive] = useState(true)
  const [personOneActive, setPersonOneActive] = useState(false)
  const [personTwoActive, setPersonTwoActive] = useState(false)

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
      <div className='grid grid-cols-12 mx-14 gap-6 mt-8 pt-10 relative'>
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
  const table1C = t.slice(0, 30);
  const table2C = t.slice(30, 60);
  const table3C = t.slice(60, 90);
  const table4C = t.slice(90, 120);
  const nameCycles = consultant.calcNameCycles()
  const nameSubCycles = consultant.calcNameSubCycles()

  const ageMeetP = userPartnerActive.yearMeet - partner.birthDate.year()
  let tP
  let partnerTable = []
  let partnerTable1 = []
  let partnerTable2 = []
  let partnerTable3 = []
  let partnerTable4 = []
  let table1P
  let table2P
  let table3P
  let table4P
  let nameCyclesP
  let nameSubCyclesP


  if (isSelectedPartner) {
    tP = partner.getDestinityTable()
    partnerTable = tP.slice(ageMeetP)
    partnerTable1 = partnerTable.slice(0, 11);
    partnerTable2 = partnerTable.slice(11, 22);
    partnerTable3 = partnerTable.slice(22, 33);
    partnerTable4 = partnerTable.slice(33, 44);

    table1P = tP.slice(0, 30);
    table2P = tP.slice(30, 60);
    table3P = tP.slice(60, 90);
    table4P = tP.slice(90, 120);

    nameCyclesP = partner.calcNameCycles()
    nameSubCyclesP = partner.calcNameSubCycles()
  }
  const selectParner = () => {
    setPartnerActive(true)
    setPersonOneActive(false)
    setPersonTwoActive(false)
  }
  const selectPersonOne = () => {
    setPartnerActive(false)
    setPersonOneActive(true)
    setPersonTwoActive(false)
  }
  const selectPersonTwo = () => {
    setPartnerActive(false)
    setPersonOneActive(false)
    setPersonTwoActive(true)
  }


  return (
    <div className='grid grid-cols-12 mx-14 gap-6 mt-8 pt-10'>

      <UserPartnerSelect />

      {(isSelectedPartner)

        ? (
          <div className='col-span-12 mb-5 relative'>
            <div className='bg-black text-white text-base font-bold h-8 flex  justify-between items-center rounded-tl-2xl rounded-tr-2xl'>
              <div className='flex justify-center items-center'>
                <div className='w-9 h-9 flex justify-center items-center rounded-full -ml-3 mr-2 bg-gold p-2'>
                <TiPlus className='text-2xl' />
                </div>
              Tabla del Destino de la Pareja
              </div>
              <div className='flex justify-center items-center'>
                <button
                className={` font-bold h-10 mb-1 rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl text-13 px-2  ml-2 flex justify-center items-center ${
                  !partnerActive ? 'bg-gray-400' : 'bg-yellow'} `}
                  onClick={selectParner}
                >Pareja
                </button>
                <button
                className={` font-bold h-10 mb-1 rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl text-13 px-2  ml-2 flex justify-center items-center ${
                  !personOneActive ? 'bg-gray-400' : 'bg-yellow'} `}
                  onClick={selectPersonOne}
                >Persona 1
                </button>
                <button
                className={` font-bold h-10 mb-1 rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl text-13 px-2  ml-2 flex justify-center items-center ${
                  !personTwoActive ? 'bg-gray-400' : 'bg-yellow'} `}
                  onClick={selectPersonTwo}
                >Persona 2
                </button>
              </div>
            </div>
            <div className='pinnacle-wrap px-8 py-3'>
              {partnerActive && (
              <>
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
              </>
              )}
              {personOneActive
                && (
<>
                  <DestinityTable table={table1C} start={0} consultant={consultant} nameCycles={nameCycles} nameSubCycles={nameSubCycles} />
                  <DestinityTable table={table2C} start={30} consultant={consultant} nameCycles={nameCycles} nameSubCycles={nameSubCycles} />
                  <DestinityTable table={table3C} start={60} consultant={consultant} nameCycles={nameCycles} nameSubCycles={nameSubCycles} />
                  <DestinityTable table={table4C} start={90} consultant={consultant} nameCycles={nameCycles} nameSubCycles={nameSubCycles} />
</>
)
              }
              {personTwoActive
                && (
<>
                  <DestinityTable table={table1P} start={0} consultant={partner} nameCycles={nameCyclesP} nameSubCycles={nameSubCyclesP} />
                  <DestinityTable table={table2P} start={30} consultant={partner} nameCycles={nameCyclesP} nameSubCycles={nameSubCyclesP} />
                  <DestinityTable table={table3P} start={60} consultant={partner} nameCycles={nameCyclesP} nameSubCycles={nameSubCyclesP} />
                  <DestinityTable table={table4P} start={90} consultant={partner} nameCycles={nameCyclesP} nameSubCycles={nameSubCyclesP} />
</>
)
              }
            </div>
          </div>
        )
        : <div className="col-span-12 text-center">Agrega/Selecciona una pareja para ver esta información</div>
      }

    </div>
  )
}

export default SinastyDestinityTablePage;