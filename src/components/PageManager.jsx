import { Routes, Route } from 'react-router-dom'

import { StatusBar } from './StatusBar'
import { useConsultant } from '../hooks';

import bk from '../assets/bk.jpg'

import HomePage from '../pages/HomePage'
import ConsultantPage from '../pages/ConsultantPage'
import PinnaclePage from '../pages/PinnaclePage'
import PathPage from '../pages/PathPage';
import NamePage from '../pages/NamePage';
import CreateNamePage from '../pages/CreateNamePage';
import DestinityTablePage from '../pages/DestinityTablePage';
import VibrationTimePage from '../pages/VibrationTimePage';
import AnnualReturnsPage from '../pages/AnnualReturnsPage';
import TimeCirclePage from '../pages/TimeCirclePage';
import CalendarPage from '../pages/CalendarPage';
import CalendarMonthPage from '../pages/CalendarMonthPage';
import SinastryPage from '../pages/SinastryPage';
import SinastryVibrationTimePage from '../pages/SinastryVibrationTimePage';
import SinastryAnnualReturnsPage from '../pages/SinastryAnnualReturnsPage';
import SinastryDestinityTablePage from '../pages/SinastryDestinityTablePage';
import CompatibilityTablePage from '../pages/CompatibilityTablePage';
import GroupAnnualReturnsPage from '../pages/GroupsAnnualReturnsPage';
import GroupPinnaclePage from '../pages/GroupPinnaclePage';
import GroupVibrationTimePage from '../pages/GroupVibrationTimePage';
import ConfigPage from '../pages/ConfigPage';
import { PreviewPDF } from '../components-pdf/PreviewPDF'
import { fetchStatus } from '../store/slices/auth/thunks'; import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import SupportPage from '../pages/SupportPage';
import ManualPage from '../pages/ManualPage';
import PoliticasPage from './PoliticasPage';


export const PageManager = () => {
  const { consultant } = useConsultant()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStatus())
  }, [dispatch, consultant])

  return (
    <section id="App-content" style={{ backgroundImage: `url("${bk}")` }}>

      <StatusBar consultant={consultant} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/consultante" element={<ConsultantPage />} />
        <Route path="/pinaculo" element={<PinnaclePage />} />
        <Route path="/camino" element={<PathPage />} />
        <Route path="/nombre" element={<NamePage />} />
        <Route path="/crear_nombre" element={<CreateNamePage />} />
        <Route path="/destino" element={<DestinityTablePage />} />
        <Route path="/tiempo" element={<VibrationTimePage />} />
        <Route path="/retornos" element={<AnnualReturnsPage />} />
        <Route path="/circulo_tiempo" element={<TimeCirclePage />} />
        <Route path="/calendario" element={<CalendarPage />} />
        <Route path="/calendarioMensual" element={<CalendarMonthPage />} />

        <Route path="/sinastria" element={<SinastryPage />} />
        <Route path="/sinastria_vibracion" element={<SinastryVibrationTimePage />} />
        <Route path="/sinastria_retornos" element={<SinastryAnnualReturnsPage />} />
        <Route path="/sinastria_destino" element={<SinastryDestinityTablePage />} />
        <Route path="/sinastria_compatibilidad" element={<CompatibilityTablePage />} />

        <Route path="/group_pinnacle" element={<GroupPinnaclePage />} />
        <Route path="/group_vibracion" element={<GroupVibrationTimePage />} />
        <Route path="/group_retornos" element={<GroupAnnualReturnsPage />} />

        <Route path="/config" element={<ConfigPage />} />

        <Route path="/pdf" element={<PreviewPDF />} />
        <Route path="/soporte" element={<SupportPage />} />
        <Route path="/manual" element={<ManualPage />} />
        <Route path="/politicas" element={<PoliticasPage />} />

      </Routes>
    </section>
  )
}