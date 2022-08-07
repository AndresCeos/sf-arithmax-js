import { Document, Page, Text, View, Image, PDFViewer } from '@react-pdf/renderer';
import { configReport, ncReport } from './styles';

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
      <Page size={[612, 795]} style={configReport.page}  >
        <Image src={pinnacleImage} style={configReport.pageBackground}></Image>
        <View style={configReport.header}>

          <View style={configReport.header_consultor_name}>
            <Text>{consultant.fullName}</Text>
          </View>
          <View style={configReport.header_consultant_name}>
            <Text>Laura Ludivina Rodriguez Martinez</Text>
          </View>

          <View style={configReport.header_date}>
            <Text>-</Text>
          </View>
          <View style={configReport.header_birth_date}>
            <Text>-</Text>
          </View>
          <View style={configReport.header_age}>
            <Text>-</Text>
          </View>
        </View>

        {/* <View style={ncReport.sidebar}>
          <Text style={ncReport.page_number}>1</Text>
          <Text style={ncReport.page_copy_1} >Copyright 2022, Laura L. Rodríguez. Prohibida su reproducción y distribución.</Text>
          <Text style={ncReport.page_copy_2} >Este Software esta licenciado para uso exclusivo de: Laura Ludivina Rodríguez Martínez.</Text>
          <Text style={ncReport.page_copy_3} >www.numerlogia-cotidiana.com</Text>
          <Text style={ncReport.page_copy_4} >consulta@numerologia-cotidiana.com</Text>
          <Text style={ncReport.page_copy_5} >Tels: (81) 2086-7071 / 2086-7072</Text>
        </View> */}

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
