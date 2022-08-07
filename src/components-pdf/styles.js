import { StyleSheet, Font } from '@react-pdf/renderer';
import OpenSans from '../assets/fonts/OpenSans/OpenSans-Regular.ttf'
import OpenSansItalic from '../assets/fonts/OpenSans/OpenSans-Italic.ttf'
import OpenSansBold from '../assets/fonts/OpenSans/OpenSans-Bold.ttf'
import OpenSansBoldItalic from '../assets/fonts/OpenSans/OpenSans-BoldItalic.ttf'

import pinnacleReport from './assets/pinnacle.jpg'

export const exampleRreport = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  pageBackground: {
    position: 'absolute',
    minWidth: '100%',
    minHeight: '100%',
    display: 'block',
    height: '100%',
    width: '100%',
    zIndex: 2,
  },
  text: {
    position: 'absolute',
    top: '300px',
    left: '90px',
    display: 'block',
    color: 'white',
    fontSize: 30,
    zIndex: 1,
  },
  pinaculo: {
    position: 'absolute',
    top: '300px',
    left: '90px',
    gridTemplateColumns: 'repeat(8, minmax(0, 1fr))'
  }
});

Font.register({
  family: 'Open Sans',
  fonts: [
    {
      src: OpenSans
    },
    {
      src: OpenSansItalic,
      fontStyle: 'italic'
    },
    {
      src: OpenSansBold,
      fontWeight: 'bold'
    },
    {
      src: OpenSansBoldItalic,
      fontWeight: 'bold',
      fontStyle: 'italic'
    }
  ]
})

export const configReport = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    width: '1000%'
  },
  pageBackground: {
    position: "absolute",
    minWidth: "100%",
    minHeight: "100%",
    display: "block",
    height: "100%",
    width: "100%",
  },
  header: {
    color: '#000000',
    fontSize: '7px',
    fontFamily: 'Open Sans',
    width: '795px',
    height: '88px',
    position: 'relative'
  },
  header_consultor_name: {
    position: 'absolute',
    left: '148px',
    top: '34px',
    // backgroundColor: '#ff0000',
    width: '155px',
  },
  header_consultant_name: {
    position: 'absolute',
    left: '148px',
    top: '64px',
    // backgroundColor: '#ff0000',
    width: '155px',
  },
  header_date: {
    position: 'absolute',
    left: '325px',
    top: '34px',
    // backgroundColor: '#ff0000',
    width: '118px',
  },
  header_birth_date: {
    position: 'absolute',
    left: '325px',
    top: '64px',
    // backgroundColor: '#ff0000',
    width: '118px',
  },
  header_age: {
    position: 'absolute',
    left: '462px',
    top: '64px',
    // backgroundColor: '#ff0000',
    width: '15px',
  },
})

export const ncReport = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    width: '1000%'
  },
  pageBackground: {
    position: "absolute",
    minWidth: "100%",
    minHeight: "100%",
    display: "block",
    height: "100%",
    width: "100%",
  },
  header: {
    // backgroundColor: '#D8C7EB',
    color: '#000000',
    fontSize: '12px',
    fontFamily: 'Open Sans',
    width: '1000px',
    height: '90px',
    position: 'relative'
  },
  header_logo: {
    position: 'absolute',
    top: '10px',
    left: '0px',
  },
  pdf_logo_description: {
    fontSize: '7px',
    paddingTop: '10px',
    paddingBottom: '15px',
    paddingLeft: '10px',
    fontStyle: 'italic',
    color: '#663366'
  },
  pdf_logo_description_bold: {
    fontWeight: 'bold',
    paddingLeft: '12px'
  },
  pdf_logo: {
    width: '120px',
    height: '50px',
    objectFit: 'cover',
  },
  header_consultor: {
    left: '145px',
    top: '20px',
    fontSize: '7px',
    fontWeight: 'bold',
  },
  header_input: {
    backgroundColor: '#fff',
    marginTop: '3px',
    marginBottom: '6px',
    padding: '2px 8px',
    borderRadius: '15px',
    border: '1px solid #7E7E7E',
    fontWeight: '400',
    width: '165px'
  },
  header_date: {
    position: 'absolute',
    left: '320px',
    top: '20px',
    fontSize: '7px',
    fontWeight: 'bold',
  },
  header_input_date: {
    backgroundColor: '#fff',
    marginTop: '3px',
    marginBottom: '6px',
    padding: '2px 8px',
    borderRadius: '15px',
    border: '1px solid #7E7E7E',
    fontWeight: '400',
    width: '130px'
  },
  header_age: {
    position: 'absolute',
    left: '460px',
    top: '55px',
    fontSize: '7px',
    fontWeight: 'bold',
  },
  header_input_age: {
    backgroundColor: '#fff',
    marginTop: '3px',
    marginBottom: '6px',
    padding: '2px 8px',
    borderRadius: '15px',
    border: '1px solid #7E7E7E',
    fontWeight: '400',
    width: '22px'
  },
  header_custom_logo: {
    backgroundColor: '#fff',
    width: '90px',
    height: '57px',
    position: 'absolute',
    left: '495px',
    top: '25px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '7px',
    textAlign: 'center',
  },
  sidebar: {
    position: 'absolute',
    backgroundColor: '#663357',
    width: '55px',
    top: '90px',
    left: 0,
    height: '751.8px',
    display: 'block',
    fontWeight: 'bold',
    color: '#fff',
  },
  page_number: {
    position: 'absolute',
    marginTop: '10px',
    marginLeft: '15px',
    width: '20px',
    height: '20px',
    backgroundColor: '#fff',
    color: '#663357',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: '15px'
  },
  page_copy_1: {
    position: 'absolute',
    left: '-130px',
    bottom: '180px',
    width: '300px',
    transform: 'rotate(-90deg)',
    fontSize: '7px',
  },
  page_copy_2: {
    position: 'absolute',
    left: '-115px',
    bottom: '180px',
    width: '300px',
    transform: 'rotate(-90deg)',
    fontSize: '7px',
  },
  page_copy_3: {
    position: 'absolute',
    left: '-130px',
    bottom: '520px',
    width: '300px',
    transform: 'rotate(-90deg)',
    fontSize: '7px',
  },
  page_copy_4: {
    position: 'absolute',
    left: '-115px',
    bottom: '520px',
    width: '300px',
    transform: 'rotate(-90deg)',
    fontSize: '7px',
  },
  page_copy_5: {
    position: 'absolute',
    left: '-130px',
    bottom: '670px',
    width: '300px',
    transform: 'rotate(-90deg)',
    fontSize: '7px',
  },
  content: {
    marginLeft: '55px',
    height: '751.8px',
  }
});