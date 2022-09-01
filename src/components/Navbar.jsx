import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { dateSelect, useConsultant, useGroup } from "../hooks";
import { setDate, setIsEditing } from '../store/slices/users/users';

import Logo from '../assets/logo.png'
import add_user from '../assets/icons/add_user.svg'
import update_user from '../assets/icons/update_user.svg'
import change_date from '../assets/icons/change_date.svg'
import partner_data from '../assets/icons/partner_data.svg'
import group_data from '../assets/icons/group_data.svg'
import notes from '../assets/icons/notes.svg'
import save_report from '../assets/icons/save_report.svg'
import print_reports from '../assets/icons/print_reports.svg'
import mail from '../assets/icons/mail.svg'
import bell from '../assets/icons/bell.svg'
import Swal from "sweetalert2";

import moment from 'moment/min/moment-with-locales'
import { Document, Page, Text, View, PDFDownloadLink, Image } from '@react-pdf/renderer';
import { exampleRreport } from "../components-pdf/styles";
import { AnnualReturnsPDF, CalendarPDF, CircleTimePDF, CompatibilityTablePDF, CreateNamePDF, DestinityPDF, GroupAnnualReturnsPDF, GroupPinnaclePDF, GroupVibrationTimePDF, LifePathPDF, MonthPDF, NamePDF, PDF, PinnaclePDF, SynastryAnnualReturnsPDF, SynastryPinnaclePDF, SynastryVibrationTimePDF, TimeVibrationPDF } from "../components-pdf/document";
import { Person, sanitize, Group, Synastry } from "../resources";


export const Navbar = () => {
  const { newDate } = dateSelect()
  const { names: userNames } = useSelector(state => state.auth);
  const { consultant } = useConsultant()
  const now = moment()
  const { userActive,userPartnerActive,isSelectPartner } = useSelector(state => state.users);
  const isEmpty = Object.keys(userActive).length === 0;

  const { names, lastName, scdLastName, date, email, webSite, phone } = useSelector(state => state.auth)
  const sidebar = { email, webSite, phone }
  const {group} = useGroup()
  const groupDate = userActive.dateGroup
  const groupConsult = new Group(group,groupDate )

  console.log(isSelectPartner)

  const partner = new Person({
    name: userPartnerActive.names,
    lastName:userPartnerActive.lastName,
    scdLastName: userPartnerActive.scdLastName,
    birthDate: userPartnerActive.date,
    yearMeet :userPartnerActive.yearMeet
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
        let date = document.getElementById('newDate').value
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
    'sinastria_compatibilidad',
    'sinastria_vibracion',
    'group_pinnacle',
    'group_vibracion',
    'group_retornos'
  ]

  const path = location?.pathname.split('/')[1]
  const existDownloadPDF = () => {
    return reportList.includes(path)
  }
  let isDownloadPDFEnabled = existDownloadPDF() && !isEmpty

  if(location.pathname.includes('group')&&!isEmpty){
    console.log('estoy en los grupos')
    const isEmptyG = Object.keys(userActive.group).length === 0;
    isDownloadPDFEnabled = existDownloadPDF() && !isEmptyG
  }
  if(location.pathname.includes('sinastria')&&!isEmpty){
    console.log('estoy en las parejas')
    const isEmptyP = Object.keys(userActive.partner).length === 0;
    isDownloadPDFEnabled = existDownloadPDF() && (!isEmptyP&&isSelectPartner)
  }
  let config, docName, profile, MyPDF;
  console.log(isDownloadPDFEnabled);
  if (isDownloadPDFEnabled) {



    const reports = {
      'pinaculo': PinnaclePDF(consultant),
      'camino': LifePathPDF(consultant, newDate),
      'nombre': NamePDF(consultant, newDate),
      'crear_nombre': CreateNamePDF(consultant),
      'destino': DestinityPDF(consultant, newDate),
      'tiempo': TimeVibrationPDF(consultant, newDate),
      'retornos': AnnualReturnsPDF(consultant, newDate),
      'circulo_tiempo': CircleTimePDF(consultant, newDate),
      'calendario': CalendarPDF(consultant, newDate),
      'calendarioMensual': MonthPDF(consultant, newDate, newDate.month()+1),
      'sinastria': SynastryPinnaclePDF(synastry, newDate),
      'sinastria_retornos': SynastryAnnualReturnsPDF(synastry, newDate),
      'sinastria_compatibilidad': CompatibilityTablePDF(synastry,newDate),
      'sinastria_vibracion': SynastryVibrationTimePDF(synastry, newDate),
      'group_pinnacle': GroupPinnaclePDF(groupConsult, newDate),
      'group_vibracion':GroupVibrationTimePDF(groupConsult, newDate),
      'group_retornos':GroupAnnualReturnsPDF(groupConsult, newDate)
    }
    docName = sanitize(`${path} ${consultant.fullName}`)
    config = Array.isArray(reports[path]) ? [...reports[path]] : [reports[path]]
    profile = new Person({ name: names, lastName, scdLastName, birthDate: date })
    MyPDF = () => (
      <PDF consultant={consultant} config={config} profile={profile} date={newDate} sidebar={sidebar} />
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
                    src={add_user}
                    alt="add_user"
                    className="mb-1"
                  />
                  Ingresar<br />Datos
                </Link>
              </li>
              <li className="flex items-center">
                <Link className="flex flex-col justify-center text-center items-center text-white hover:bg-indigo-900 h-full px-3"
                  to="consultante" onClick={handlerEdit}>
                  <img
                    src={update_user}
                    className="mb-1"
                    alt="update_user"
                  />
                  Actualizar<br />Datos
                </Link>
              </li>
              <li className="flex items-center">
                <button className="flex flex-col justify-center text-center items-center text-white hover:bg-indigo-900 h-full px-3"
                  onClick={changeDate}>
                  <img
                    src={change_date}
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
                    src={partner_data}
                    className="mb-1"
                    alt="partner_data"
                  />
                  Datos<br />de Pareja
                </Link>
              </li>
              <li className="flex items-center">
                <Link className="flex flex-col justify-center text-center items-center text-white hover:bg-indigo-900 h-full px-3"
                  to="/group_pinnacle">
                  <img
                    src={group_data}
                    className="mb-1"
                    alt="group_data"
                  />
                  Datos<br />de Grupo
                </Link>
              </li>

              <li className="flex items-center">
                {isDownloadPDFEnabled ?
                  <PDFDownloadLink
                    document={<MyPDF />}
                    fileName={docName}
                    className="flex flex-col justify-center text-center items-center text-white hover:bg-indigo-900 h-full px-3">
                    <img
                      src={save_report}
                      className="mb-1"
                      alt="save_report"
                    />
                    Guardar<br />reporte
                  </PDFDownloadLink> :
                  <button className="flex flex-col justify-center text-center items-center text-white h-full px-3 opacity-30 cursor-auto">
                    <img
                      src={save_report}
                      className="mb-1"
                      alt="save_report"
                    />
                    Guardar<br />reporte
                  </button>
                }
              </li>
              <li className="flex items-center">
                <button className="flex flex-col justify-center text-center items-center text-white hover:bg-indigo-900 h-full px-3">
                  <img
                    src={print_reports}
                    className="mb-1"
                    alt="print_reports"
                  />
                  Imprimir<br />Reportes
                </button>
              </li>
              <li className="flex items-center ml-20">
                <img
                  src={mail}
                  alt="email"
                />
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
    </>
  );
};