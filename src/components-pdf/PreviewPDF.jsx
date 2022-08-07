import { Document, Page, Text, View, Image, PDFViewer } from '@react-pdf/renderer';
import { ncReport } from './styles';

import pdf_logo from '../assets/LOGO_PDF.png';
import {
  PinnacleName, Pinnacle, PinnaclePotential, VibrationTimeStage, VibrationTimeQuarterM, VibrationTimeCycle,
  VibrationTimeQuarterY
} from '../components-pdf/';

import { dateSelect, useConsultant } from '../hooks';
import { useSelector } from 'react-redux';
import { UnselectedConsultant } from '../components/UnselectedConsultant';
import moment from 'moment/min/moment-with-locales'
import { BridgeStage } from './BridgeStage';
import { AnnualReturns } from './AnnualReturns';
moment.locale("es-mx")

import pinnacleImage from './assets/pinnacle.jpg'

export const PreviewPDF = () => {

  const Template = ({ children }) => (
    <Document >
      <Page size={[612, 795]} style={ncReport.page}  >
        <Image src={pinnacleImage} style={ncReport.pageBackground}></Image>
        <View style={ncReport.header}>
          <View style={ncReport.header_consultor}>
            <Text style={ncReport.header_input}>Tu nombre aquí</Text>
            <Text style={ncReport.header_input}>Laura Ludivina Rodriguez Martinez</Text>
          </View>
          <View style={ncReport.header_date}>
            <Text>FECHA DE CONSULTA:</Text>
            <Text style={ncReport.header_input_date}>-</Text>
            <Text>FECHA DE NACIMIENTO:</Text>
            <Text style={ncReport.header_input_date}>-</Text>
          </View>
          <View style={ncReport.header_age}>
            <Text>Edad</Text>
            <Text style={ncReport.header_input_age}>-</Text>
          </View>
          <View style={ncReport.header_custom_logo}>
            <Text>Tu logo de Consultor Numerológico aquí.</Text>
          </View>
        </View>
        <View style={ncReport.sidebar}>
          <Text style={ncReport.page_number}>1</Text>
          <Text style={ncReport.page_copy_1} >Copyright 2022, Laura L. Rodríguez. Prohibida su reproducción y distribución.</Text>
          <Text style={ncReport.page_copy_2} >Este Software esta licenciado para uso exclusivo de: Laura Ludivina Rodríguez Martínez.</Text>
          <Text style={ncReport.page_copy_3} >www.numerlogia-cotidiana.com</Text>
          <Text style={ncReport.page_copy_4} >consulta@numerologia-cotidiana.com</Text>
          <Text style={ncReport.page_copy_5} >Tels: (81) 2086-7071 / 2086-7072</Text>
        </View>

        <View style={ncReport.content}>
          {children}
        </View>
      </Page>
    </Document>
  )

  const { userActive } = useSelector(state => state.users);
  const isEmpty = Object.keys(userActive).length === 0;
  const { consultant } = useConsultant()
  const { newDate } = dateSelect()
  const now = moment()

  if (isEmpty) {
    return <UnselectedConsultant />
  }

  return (
    <>
      <PDFViewer width='100%' height='100%'>
        <Template consultant={consultant}>
          <PinnacleName consultant={consultant}></PinnacleName>
          <PinnaclePotential consultant={consultant}></PinnaclePotential>
          <Pinnacle consultant={consultant}></Pinnacle>
          <BridgeStage consultant={consultant}></BridgeStage>
          <AnnualReturns consultant={consultant} />
          {/*
          <VibrationTimeStage consultant={consultant} newDate={newDate}></VibrationTimeStage>
          <VibrationTimeQuarterM consultant={consultant} newDate={newDate}></VibrationTimeQuarterM>
          <VibrationTimeCycle consultant={consultant} newDate={newDate}></VibrationTimeCycle>
          <VibrationTimeQuarterY consultant={consultant} newDate={newDate}></VibrationTimeQuarterY>
          */}
        </Template>
      </PDFViewer>
    </>
  )
}
