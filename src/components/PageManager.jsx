import { Routes, Route } from "react-router-dom"

import { StatusBar } from "./StatusBar"
import { useConsultant } from '../hooks';

import bk from '../assets/bk.jpg'

import HomePage from "../pages/HomePage"
import ConsultantPage from "../pages/ConsultantPage"
import PinnaclePage from "../pages/PinnaclePage"
import PathPage from "../pages/PathPage";
import NamePage from "../pages/NamePage";
import CreateNamePage from "../pages/CreateNamePage";
import DestinityTablePage from "../pages/DestinityTablePage";
import VibrationTimePage from "../pages/VibrationTimePage";
import AnnualReturnsPage from "../pages/AnnualReturnsPage";
import TimeCirclePage from "../pages/TimeCirclePage";
import CalendarPage from "../pages/CalendarPage";
import CalendarMonthPage from "../pages/CalendarMonthPage";
import SinastryPage from "../pages/SinastryPage";
import SinastryVibrationTimePage from "../pages/SinastryVibrationTimePage";
import SinastryAnnualReturnsPage from "../pages/SinastryAnnualReturnsPage";
import SinastryDestinityTablePage from "../pages/SinastryDestinityTablePage";
import CompatibilityTablePage from "../pages/CompatibilityTablePage";
import ConfigPage from "../pages/ConfigPage";

export const PageManager = () => {
  const { consultant } = useConsultant()

  return(
    <section id="App-content" style={{ backgroundImage: `url("${bk}")` }}>

      <StatusBar consultant={consultant} />

      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/consultante" element={ <ConsultantPage /> } />
        <Route path="/pinaculo" element={ <PinnaclePage /> } />
        <Route path="/camino" element={ <PathPage /> } />
        <Route path="/nombre" element={ <NamePage /> } />
        <Route path="/crear_nombre" element={<CreateNamePage /> } />
        <Route path="/destino" element={ <DestinityTablePage /> } />
        <Route path="/tiempo" element={ <VibrationTimePage /> } />
        <Route path="/retornos" element={ <AnnualReturnsPage /> } />
        <Route path="/circulo_tiempo" element={ <TimeCirclePage /> } />
        <Route path="/calendario" element={ <CalendarPage /> } />
        <Route path="/calendarioMensual" element={ <CalendarMonthPage /> } />

        <Route path="/sinastria" element={ <SinastryPage /> } />
        <Route path="/sinastria_vibracion" element={ <SinastryVibrationTimePage /> } />
        <Route path="/sinastria_retornos" element={ <SinastryAnnualReturnsPage /> } />
        <Route path="/sinastria_destino" element={ <SinastryDestinityTablePage /> } />
        <Route path="/sinastria_compatibilidad" element={ <CompatibilityTablePage /> } />
        <Route path="/config" element={ <ConfigPage /> } />

      </Routes>
    </section>
  )
}