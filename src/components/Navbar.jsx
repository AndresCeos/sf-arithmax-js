import { saveAs } from 'file-saver';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { dateSelect, useConsultant, useGroup } from '../hooks';
import { setDate, setIsEditing } from '../store/slices/users/users';

import Swal from 'sweetalert2';
import addUser from '../assets/icons/add_user.svg';
import changeDateIcon from '../assets/icons/change_date.svg';
import groupData from '../assets/icons/group_data.svg';
import mail from '../assets/icons/mail.svg';
import partnerData from '../assets/icons/partner_data.svg';
import printReports from '../assets/icons/print_reports.svg';
import saveReport from '../assets/icons/save_report.svg';
import updateUser from '../assets/icons/update_user.svg';
import Logo from '../assets/logo.png';

import { pdf, PDFViewer } from '@react-pdf/renderer';
import moment from 'moment/min/moment-with-locales';
import { AnnualReturnsPDF, CalendarPDF, CircleTimePDF, CompatibilityTablePDF, CreateNamePDF, DestinityPDF, GroupAnnualReturnsPDF, GroupPinnaclePDF, GroupVibrationTimePDF, LifePathPDF, MonthPDF, NamePDF, PDF, PinnaclePDF, SynastryAnnualReturnsPDF, SynastryDestinityPDF, SynastryPinnaclePDF, SynastryVibrationTimePDF, TimeVibrationPDF } from '../components-pdf/document';
import { Group, Person, sanitize, Synastry } from '../resources';
import Modal from './Modal';
import { Notifications } from './Notifications';


export const Navbar = () => {
  const { newDate } = dateSelect()
  const { names: userNames } = useSelector(state => state.auth);
  const { consultant } = useConsultant()
  const now = moment()
  const { userActive, userPartnerActive } = useSelector(state => state.users);
  const isEmpty = Object.keys(userActive).length === 0;
  const [modal, setModal] = useState(false)
  const [availableReports, setAvailableReports] = useState({})
  const [availableReportsSelected, setAvailableReportsSelected] = useState([])
  const [previewDocument, setPreviewDocument] = useState(false)
  const { name: createName, date: createDate } = useSelector(state => state.users.createName)
  const isSelectedPartner = Object.keys(userPartnerActive).length > 0;

  const { names, lastName, scdLastName, date, email, webSite, phone, logoURL } = useSelector(state => state.auth)
  const sidebar = { email, webSite, phone }
  const { group } = useGroup()
  const groupDate = userActive.dateGroup
  const groupConsult = new Group(group, groupDate)

  const createNameData = {
    name: createName || `${userActive.names} ${userActive.lastName} ${userActive.scdLastName}`,
    lastName: '',
    scdLastName: '',
    birthDate: createDate || userActive.date,
  }
  const createNameObj = new Person(createNameData)

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
    'sinastria_destino',
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
    const isEmptyG = Object.keys(userActive.group).length === 0;
    const groupCap = groupConsult.group
    isDownloadPDFEnabled = existDownloadPDF() && (!isEmptyG && groupCap.length >= 3)
  }
  if (location.pathname.includes('sinastria') && !isEmpty) {
    const isEmptyP = Object.keys(userActive.partner).length === 0;
    isDownloadPDFEnabled = existDownloadPDF() && (!isEmptyP && isSelectedPartner)
  }
  let profile;
  if (isDownloadPDFEnabled) {
    profile = new Person({ name: names, lastName, scdLastName, birthDate: date })
  }

  const printSingleReport = async () => {
    const reports = {
      pinaculo: PinnaclePDF,
      camino: LifePathPDF,
      nombre: NamePDF,
      crear_nombre: CreateNamePDF,
      destino: DestinityPDF,
      tiempo: TimeVibrationPDF,
      retornos: AnnualReturnsPDF,
      circulo_tiempo: CircleTimePDF,
      calendario: CalendarPDF,
      calendarioMensual: MonthPDF,
      sinastria: SynastryPinnaclePDF,
      sinastria_retornos: SynastryAnnualReturnsPDF,
      sinastria_destino: SynastryDestinityPDF,
      sinastria_compatibilidad: CompatibilityTablePDF,
      sinastria_vibracion: SynastryVibrationTimePDF,
      group_pinnacle: GroupPinnaclePDF,
      group_vibracion: GroupVibrationTimePDF,
      group_retornos: GroupAnnualReturnsPDF,
    }

    const config = [Object.entries(reports).filter(i => i[0] === path)[0][1]]
    console.log({ config })
    // eslint-disable-next-line react/no-unstable-nested-components
    const MyPDF = () => (
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
        createNameObj={createNameObj}
      />
    )

    const blob = await pdf((
      <MyPDF />
    )).toBlob();
    saveAs(blob, sanitize(`${path} ${consultant.fullName}`));
  }

  const openModal = () => {
    setModal(true)
    let reportListType = '';
    const reports = {
      personal: {
        pinaculo: { name: 'Pináculo', fn: PinnaclePDF },
        camino: { name: 'Camino de Vida', fn: LifePathPDF },
        nombre: { name: 'Nombre', fn: NamePDF },
        // crear_nombre: { name: 'Crear Nombre', fn: CreateNamePDF },
        destino: { name: 'Tabla del Destino', fn: DestinityPDF },
        tiempo: { name: 'Vibración de Tiempo', fn: TimeVibrationPDF },
        retornos: { name: 'Retornos Anuales', fn: AnnualReturnsPDF },
        circulo_tiempo: { name: 'Circulo del Tiempo', fn: CircleTimePDF },
        calendario: { name: 'Calendario Anual', fn: CalendarPDF },
        calendarioMensual: { name: 'Calendario Mensual', fn: MonthPDF }
      },
      sinastria: {
        sinastria: { name: 'Análisis', fn: SynastryPinnaclePDF },
        sinastria_vibracion: { name: 'Vibración del Tiempo', fn: SynastryVibrationTimePDF },
        sinastria_retornos: { name: 'Retornos Anuales', fn: SynastryAnnualReturnsPDF },
        sinastria_destino: { name: 'Tabla del Destino Pareja', fn: SynastryDestinityPDF },
        sinastria_compatibilidad: { name: 'Tabla del Compatibilidad', fn: CompatibilityTablePDF },
      },
      grupo: {
        group_pinnacle: { name: 'Pináculo', fn: GroupPinnaclePDF },
        group_vibracion: { name: 'Vibración del Tiempo', fn: GroupVibrationTimePDF },
        group_retornos: { name: 'Retornos Anuales', fn: GroupAnnualReturnsPDF },
      }
    }
    for (const kind in reports) {
      // eslint-disable-next-line no-prototype-builtins
      if (reports[kind].hasOwnProperty(path)) {
        reportListType = reports[kind]
      }
    }
    setAvailableReports(reportListType)
  }
  const closeModal = () => {
    setModal(false)
    setAvailableReportsSelected([])
    setPreviewDocument(false)
  }

  const handleSelectedReports = (e) => {
    const report = e.target
    if (report.checked === true) {
      setAvailableReportsSelected([...availableReportsSelected, report.name])
    } else {
      const arrayReport = availableReportsSelected.filter(i => i !== report.name)
      setAvailableReportsSelected(arrayReport)
    }
  }

  const printButton = () => {
    return (
      <button
        className={`bg-main text-white px-3 py-1 rounded-sm ${previewDocument && 'opacity-60'}`}
        onClick={() => { setPreviewDocument(true) }}
      >
        Generar reportes
      </button>
    )
  }

  const printReportPreview = () => {
    // setIsDocumentLoading(true)
    const config = availableReportsSelected.map(report => availableReports[report].fn)
    // eslint-disable-next-line react/no-unstable-nested-components
    const MyPDF = () => (
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
        createNameObj={createNameObj}
      />
    )
    return (
      <PDFViewer width='100%' height='95%'>
        <MyPDF />
      </PDFViewer>
    )
  }


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

              <li className="flex items-center">{isDownloadPDFEnabled
                ? (
                  <button
                    onClick={printSingleReport}
                    className="flex flex-col justify-center text-center items-center text-white hover:bg-indigo-900 h-full px-3"
                  >
                    <img
                      src={saveReport}
                      className="mb-1"
                      alt="save_report"
                    />
                    Guardar<br />reporte
                  </button>
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
              <li className="flex items-center">
                {isDownloadPDFEnabled
                  ? (
                    <button
                      onClick={openModal}
                      className="flex flex-col justify-center text-center items-center text-white hover:bg-indigo-900 h-full px-3"
                    >
                      <img
                        src={printReports}
                        className="mb-1"
                        alt="printReports"
                      />
                      Imprimir<br />Reportes
                    </button>
                  )
                  : (
                    <button className="flex flex-col justify-center text-center items-center text-white opacity-30 cursor-auto h-full px-3">
                      <img
                        src={printReports}
                        className="mb-1"
                        alt="printReports"
                      />
                      Imprimir<br />Reportes
                    </button>
                  )}
              </li>
              <li className="flex items-center ml-20">
                <a href="https://app.numerologia-cotidiana.com/formulario-de-soporte-arithmax/" target="_blank" rel="noreferrer">
                  <img
                    src={mail}
                    alt="email"
                  />
                </a>
              </li>
              <li className="flex items-center ml-7">
                <Notifications />
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
      {
        (modal) ? (
          <Modal class={`${previewDocument && 'w-5/6 h-5/6'}`}>
            <div className='flex justify-between gap-3 mb-4'>
              <h4>
                {!previewDocument
                  ? 'Selecciona los reportes que quieres imprimir' : 'Reportes'}
              </h4>
              <button className='border rounded-full hover:bg-purple-300' onClick={closeModal}>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {!previewDocument
              && Object.entries(availableReports).map(item => (
                <div key={`ck_${item[0]}`} className="flex items-center mb-4">
                  <input
                    onChange={handleSelectedReports}
                    id={`ck_${item[0]}`}
                    type="checkbox"
                    name={item[0]}
                    className="w-4 h-4 text-purple-600 bg-gray-100 rounded border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600"
                  />
                  <label htmlFor={`ck_${item[0]}`} className="ml-2 text-sm font-medium text-gray-900">{item[1].name}</label>
                </div>
              ))
            }
            {(availableReportsSelected.length > 0 && !previewDocument) && printButton()}
            {previewDocument && (
              <div className='absolute top-20 text-center w-full text-gray-500 z-0'>
                cargando..
              </div>
            )}
            {previewDocument && <div className='absolute left-0 right-0 mx-auto top-20 z-50 w-11/12 h-5/6'>{printReportPreview()}</div>}
          </Modal>
        ) : null
      }
    </>
  );
};