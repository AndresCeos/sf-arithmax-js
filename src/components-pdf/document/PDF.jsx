import { Document, Page, Text, View, Image, PDFViewer } from '@react-pdf/renderer';
import { configReport } from '../styles';

export const PDF = ({ consultant, config }) => {

  return (
    <PDFViewer width='100%' height='100%' style={{ height: 800 }}>
      <Document >
        {config.map((e) =>
          <Page size={[612, 795]} style={configReport.page}>
            {e.bg && <Image src={e.bg} style={configReport.pageBackground}></Image>}

            <View style={configReport.header}>
              <View style={configReport.header_consultor_name}>
                <Text>Laura Ludivina Rodriguez Martinez</Text>
              </View>
              <View style={configReport.header_consultant_name}>
                <Text>{consultant.fullName}</Text>
              </View>
              <View style={configReport.header_date}>
                <Text>-</Text>
              </View>
              <View style={configReport.header_birth_date}>
                <Text>{consultant.getFormBirthDate()}</Text>
              </View>
              <View style={configReport.header_age}>
                <Text>{consultant.getYearsOld()}</Text>
              </View>
            </View>
            <View style={configReport.content}>
              {e.children}
            </View>
          </Page>
        )}
      </Document>
    </PDFViewer>
  )
}
