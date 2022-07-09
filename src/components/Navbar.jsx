import React from "react";
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { setDate } from '../store/slices/users/users';

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

export const Navbar = () => {
  const { dateSelected } = useSelector(state => state.users);
  const { names } = useSelector(state => state.auth);

  const dispatch = useDispatch();
  const changeDate = () =>{
    Swal.fire({
      title:'Ingrese Nueva Fecha',
      icon: 'info',
      html:
        `<input  type="date" id="newDate" class="border-1 border-black p-1" value="${dateSelected.format('YYYY-MM-DD')}"   />`,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:'Aplicar',
      cancelButtonText:'Cancelar',
    }).then((result)=>{
      if(result.isConfirmed){
        let date = document.getElementById('newDate').value
        dispatch(setDate(date))
      }
    })
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
                <button className="flex flex-col justify-center text-center items-center text-white hover:bg-indigo-900 h-full px-3"
                >
                  <img
                    src={update_user}
                    className="mb-1"
                    alt="update_user"
                  />
                  Actualizar<br />Datos
                </button>
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
                <button className="flex flex-col justify-center text-center items-center text-white hover:bg-indigo-900 h-full px-3">
                  <img
                    src={group_data}
                    className="mb-1"
                    alt="group_data"
                  />
                  Datos<br />de Grupo
                </button>
              </li>
              <li className="flex items-center">
                <button className="flex flex-col justify-center text-center items-center text-white hover:bg-indigo-900 h-full px-3">
                  <img
                    src={notes}
                    className="mb-1"
                    alt="notes"
                  />
                  Notas<br />de Consulta
                </button>
              </li>
              <li className="flex items-center">
                <button className="flex flex-col justify-center text-center items-center text-white hover:bg-indigo-900 h-full px-3">
                  <img
                    src={save_report}
                    className="mb-1"
                    alt="save_report"
                  />
                  Guardar<br />reporte
                </button>
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
                Hola! <strong className="ml-2">{names}</strong>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};