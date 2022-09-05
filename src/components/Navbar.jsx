import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { dateSelect, useConsultant, useGroup } from '../hooks';
import { setDate, setIsEditing } from '../store/slices/users/users';

import Swal from 'sweetalert2';
import addUser from '../assets/icons/add_user.svg';
import bell from '../assets/icons/bell.svg';
import changeDateIcon from '../assets/icons/change_date.svg';
import groupData from '../assets/icons/group_data.svg';
import mail from '../assets/icons/mail.svg';
import partnerData from '../assets/icons/partner_data.svg';
import saveReport from '../assets/icons/save_report.svg';
import updateUser from '../assets/icons/update_user.svg';
import Logo from '../assets/logo.png';

import { PDFDownloadLink } from '@react-pdf/renderer';
import moment from 'moment/min/moment-with-locales';
import { AnnualReturnsPDF, CalendarPDF, CircleTimePDF, CompatibilityTablePDF, CreateNamePDF, DestinityPDF, GroupAnnualReturnsPDF, GroupPinnaclePDF, GroupVibrationTimePDF, LifePathPDF, MonthPDF, NamePDF, PDF, PinnaclePDF, SynastryAnnualReturnsPDF, SynastryPinnaclePDF, SynastryVibrationTimePDF, TimeVibrationPDF } from '../components-pdf/document';
import { Group, Person, sanitize, Synastry } from '../resources';


export const Navbar = () => {
  const { newDate } = dateSelect()
  const { names: userNames } = useSelector(state => state.auth);
  const { consultant } = useConsultant()
  const now = moment()
  const { userActive, userPartnerActive, isSelectPartner } = useSelector(state => state.users);
  const isEmpty = Object.keys(userActive).length === 0;
  // const [modal, setModal] = useState(false)

  const { names, lastName, scdLastName, date, email, webSite, phone, logoURL } = useSelector(state => state.auth)
  const sidebar = { email, webSite, phone }
  const { group } = useGroup()
  const groupDate = userActive.dateGroup
  const groupConsult = new Group(group, groupDate)

  const partner = new Person({
    name: userPartnerActive.names,
    lastName: userPartnerActive.lastName,
    scdLastName: userPartnerActive.scdLastName,
    birthDate: userPartnerActive.date,
    yearMeet: userPartnerActive.yearMeet
  })

  const synastry = new Synastry(consultant, partner)

  const dispatch = useDispatch();
  const changeDate = () => {
    Swal.fire({
      title: 'Seleccione la fecha que quieras consultar',
      icon: 'info',
      html:
        `<input  type="date" id="newDate" class="border-1 border-black p-1" value="${newDate.format('YYYY-MM-DD')}"   />`,
      showCloseButton: true,
      showCancelButton: true,
      showDenyButton: true,
      denyButtonText: 'Seleccionar',
      focusConfirm: false,
      confirmButtonText: 'Hoy',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#693061',
      denyButtonColor: '#9F5D9B',
      cancelButtonColor: '#ff0000'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(setDate(now))
      }
      if (result.isDenied) {
        const date = document.getElementById('newDate').value
        dispatch(setDate(date))
      }
    })
  }
  const handlerEdit = () => {
    dispatch(setIsEditing(true))
  }

  const location = useLocation()

  const reportList = [
    'pinaculo',
    'camino',
    'nombre',
    'crear_nombre',
    'destino',
    'tiempo',
    'retornos',
    'circulo_tiempo',
    'calendario',
    'calendarioMensual',
    'sinastria',
    'sinastria_retornos',
    // 'sinastria_destino',
    'sinastria_compatibilidad',
    'sinastria_vibracion',
    'group_pinnacle',
    'group_vibracion',
    'group_retornos'
  ]

  const path = location.pathname.split('/')[1]
  const existDownloadPDF = () => {
    return reportList.includes(path)
  }
  let isDownloadPDFEnabled = existDownloadPDF() && !isEmpty

  if (location.pathname.includes('group') && !isEmpty) {
    console.log('estoy en los grupos')
    const isEmptyG = Object.keys(userActive.group).length === 0;
    const groupCap = groupConsult.group
    isDownloadPDFEnabled = existDownloadPDF() && (!isEmptyG && groupCap.length >= 3)
  }
  if (location.pathname.includes('sinastria') && !isEmpty) {
    console.log('estoy en las parejas')
    const isEmptyP = Object.keys(userActive.partner).length === 0;
    isDownloadPDFEnabled = existDownloadPDF() && (!isEmptyP && isSelectPartner)
  }
  let config;
  let docName;
  let profile;
  let MyPDF;
  let AllPDF;
  let configAll;

  if (isDownloadPDFEnabled) {
    const reports = {
      pinaculo: PinnaclePDF, // (consultant),
      camino: LifePathPDF, // (consultant, newDate),
      nombre: NamePDF, // (consultant, newDate),
      crear_nombre: CreateNamePDF, // (consultant),
      destino: DestinityPDF, // (consultant, newDate),
      tiempo: TimeVibrationPDF, // (consultant, newDate),
      retornos: AnnualReturnsPDF, // (consultant, newDate),
      circulo_tiempo: CircleTimePDF, // (consultant, newDate),
      calendario: CalendarPDF, // (consultant, newDate),
      calendarioMensual: MonthPDF, // (consultant, newDate, newDate.month, //() + 1),
      sinastria: SynastryPinnaclePDF, // (synastry, newDate),
      sinastria_retornos: SynastryAnnualReturnsPDF, // (synastry, newDate),
      // 'sinastria_destino': SynastryDestinityPDF, //(synastry, newDate),
      sinastria_compatibilidad: CompatibilityTablePDF, // (synastry, newDate),
      sinastria_vibracion: SynastryVibrationTimePDF, // (synastry, newDate),
      group_pinnacle: GroupPinnaclePDF, // (groupConsult, newDate),
      group_vibracion: GroupVibrationTimePDF, // (groupConsult, newDate),
      group_retornos: GroupAnnualReturnsPDF, // (groupConsult, newDate)
    }
    docName = sanitize(`${path} ${consultant.fullName}`)
    config = Array.isArray(reports[path]) ? [...reports[path]] : [reports[path]]
    profile = new Person({ name: names, lastName, scdLastName, birthDate: date })
    MyPDF = () => (
      <PDF
        consultant={consultant}
        config={config}
        profile={profile}
        date={newDate}
        sidebar={sidebar}
        synastry={synastry}
        groupConsult={groupConsult}
        newDate={newDate}
        month={newDate.month() + 1}
        logoURL={logoURL}
      />
    )
    AllPDF = () => (
      <PDF consultant={consultant} config={config} profile={profile} date={newDate} sidebar={sidebar} />
    )
  }
  // let arrayReport = []
  // const addToArray = (event) => {
  //   let report = event.target
  //   if (report.checked === true) {
  //     arrayReport = [...arrayReport, report.name]
  //   } else {
  //     arrayReport = arrayReport.filter(i => i !== report.name)
  //   }
  //   console.log(arrayReport);
  //   const reports = {
  //     'pinaculo': PinnaclePDF(consultant),
  //     'camino': LifePathPDF(consultant, newDate),
  //     'nombre': NamePDF(consultant, newDate),
  //     'crear_nombre': CreateNamePDF(consultant),
  //     'destino': DestinityPDF(consultant, newDate),
  //     'tiempo': TimeVibrationPDF(consultant, newDate),
  //     'retornos': AnnualReturnsPDF(consultant, newDate),
  //     'circulo_tiempo': CircleTimePDF(consultant, newDate),
  //     'calendario': CalendarPDF(consultant, newDate),
  //     'calendarioMensual': MonthPDF(consultant, newDate, newDate.month() + 1),
  //     'sinastria': SynastryPinnaclePDF(synastry, newDate),
  //     'sinastria_retornos': SynastryAnnualReturnsPDF(synastry, newDate),
  //     'sinastria_compatibilidad': CompatibilityTablePDF(synastry, newDate),
  //     'sinastria_vibracion': SynastryVibrationTimePDF(synastry, newDate),
  //     'group_pinnacle': GroupPinnaclePDF(groupConsult, newDate),
  //     'group_vibracion': GroupVibrationTimePDF(groupConsult, newDate),
  //     'group_retornos': GroupAnnualReturnsPDF(groupConsult, newDate)
  //   }

  // }
  // const openModal = () => {
  //   setModal(true)
  // }
  // const closeModal = () => {
  //   setModal(false)
  // }


  return (
    <>
      <nav id="App-nabvar" className="bg-white border-gray-200">
        <div className="flex flex-wrap justify-between items-center mx-auto">
          <Link to="/" className="flex">
            <img
              src={Logo}
              id="App-logo"
              alt="app-logo"
            />
          </Link>
          <div
            className="hidden w-full md:block md:w-auto mr-3"
            id="main-menu"
          >
            <ul className="flex flex-col md:flex-row md:space-x-6 md:mt-0 text-xs font-medium h-full">
              <li className="flex items-center">
                <Link
                  className="flex flex-col justify-center text-center items-center text-white hover:bg-indigo-900 h-full px-3"
                  to="/consultante"
                >
                  <img
                    src={addUser}
                    alt="add_user"
                    className="mb-1"
                  />
                  Ingresar<br />Datos
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  className="flex flex-col justify-center text-center items-center text-white hover:bg-indigo-900 h-full px-3"
                  to="consultante"
                  onClick={handlerEdit}
                >
                  <img
                    src={updateUser}
                    className="mb-1"
                    alt="update_user"
                  />
                  Actualizar<br />Datos
                </Link>
              </li>
              <li className="flex items-center">
                <button
                  className="flex flex-col justify-center text-center items-center text-white hover:bg-indigo-900 h-full px-3"
                  onClick={changeDate}
                >
                  <img
                    src={changeDateIcon}
                    className="mb-1"
                    alt="change_date"
                  />
                  Cambiar<br />Fecha
                </button>
              </li>
              <li className="flex items-center">
                <Link
                  className="flex flex-col justify-center text-center items-center text-white hover:bg-indigo-900 h-full px-3"
                  to="/sinastria"
                >
                  <img
                    src={partnerData}
                    className="mb-1"
                    alt="partner_data"
                  />
                  Datos<br />de Pareja
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  className="flex flex-col justify-center text-center items-center text-white hover:bg-indigo-900 h-full px-3"
                  to="/group_pinnacle"
                >
                  <img
                    src={groupData}
                    className="mb-1"
                    alt="group_data"
                  />
                  Datos<br />de Grupo
                </Link>
              </li>

              <li className="flex items-center">
                {isDownloadPDFEnabled
                  ? (
                    <PDFDownloadLink
                      document={<MyPDF />}
                      fileName={docName}
                      className="flex flex-col justify-center text-center items-center text-white hover:bg-indigo-900 h-full px-3"
                    >
                      <img
                        src={saveReport}
                        className="mb-1"
                        alt="save_report"
                      />
                      Guardar<br />reporte
                    </PDFDownloadLink>
                  )
                  : (
                    <button className="flex flex-col justify-center text-center items-center text-white h-full px-3 opacity-30 cursor-auto">
                      <img
                        src={saveReport}
                        className="mb-1"
                        alt="save_report"
                      />
                      Guardar<br />reporte
                    </button>
                  )
                }
              </li>
              {/* <li className="flex items-center">
                {isDownloadPDFEnabled ?
                  <button
                    onClick={openModal}
                    className="flex flex-col justify-center text-center items-center text-white hover:bg-indigo-900 h-full px-3">
                    <img
                      src={print_reports}
                      className="mb-1"
                      alt="print_reports"
                    />
                    Guardar<br />reporte
                  </button> :
                  <button className="flex flex-col justify-center text-center items-center text-white opacity-30 cursor-auto h-full px-3">
                    <img
                      src={print_reports}
                      className="mb-1"
                      alt="print_reports"
                    />
                    Imprimir<br />Reportes
                  </button>}
              </li> */}
              <li className="flex items-center ml-20">
                <a href="https://app.numerologia-cotidiana.com/formulario-de-soporte-arithmax/" target="_blank" rel="noreferrer">
                  <img
                    src={mail}
                    alt="email"
                  />
                </a>
              </li>
              <li className="flex items-center ml-7">
                <img
                  src={bell}
                  alt="notification"
                />
              </li>
              <li className="flex items-center ml-6">
                <img
                  src="https://www.worldometers.info/img/flags/small/tn_mx-flag.gif"
                  className="flag"
                  alt="country"
                />
              </li>
              <li className="flex items-center mx-4 text-white">|</li>
              <li className="flex items-center text-sm text-white">
                Hola! <strong className="ml-2">{userNames}</strong>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* {(modal) ? <form className="fromReport ">
        <h4>Selecciona los reportes </h4><span><a onClick={closeModal}>X</a></span>
        <div className="flex items-center"> <input name="pinaculo" onChange={(e) => { addToArray(e) }} type="checkbox" /> pinaculo</div>
        <div className="flex items-center"> <input name="camino" onChange={(e) => { addToArray(e) }} type="checkbox" /> camino</div>
        <div className="flex items-center"><input name="nombre" onChange={(e) => { addToArray(e) }} type="checkbox" />nombre</div>
        <div className="flex items-center"><input name="crear_nombre" onChange={(e) => { addToArray(e) }} type="checkbox" />crear_nombre</div>
        <div className="flex items-center"><input name="destino" onChange={(e) => { addToArray(e) }} type="checkbox" />destino</div>
        <div className="flex items-center"><input name="tiempo" onChange={(e) => { addToArray(e) }} type="checkbox" />tiempo</div>
        <div className="flex items-center"><input name="retornos" onChange={(e) => { addToArray(e) }} type="checkbox" />retornos</div>
        <div className="flex items-center"><input name="circulo_tiempo" onChange={(e) => { addToArray(e) }} type="checkbox" />circulo_tiempo</div>
        <div className="flex items-center"><input name="calendario" onChange={(e) => { addToArray(e) }} type="checkbox" />calendario</div>
        <div className="flex items-center"><input name="calendarioMensual" onChange={(e) => { addToArray(e) }} type="checkbox" />calendarioMensual</div>
      </form> : null} */}
    </>
  );
};