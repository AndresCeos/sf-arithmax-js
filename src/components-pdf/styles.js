import {StyleSheet, Font} from '@react-pdf/renderer';
import OpenSans from '../assets/fonts/OpenSans/OpenSans-Regular.ttf'
import OpenSansItalic from '../assets/fonts/OpenSans/OpenSans-Italic.ttf'
import OpenSansBold from '../assets/fonts/OpenSans/OpenSans-Bold.ttf'
import OpenSansBoldItalic from '../assets/fonts/OpenSans/OpenSans-BoldItalic.ttf'

export const exampleRreport = StyleSheet.create({
  page:{
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section:{
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  pageBackground:{
    position: 'absolute',
    minWidth: '100%',
    minHeight: '100%',
    display: 'block',
    height: '100%',
    width: '100%',
    zIndex:2,
  },
  text:{
    position: 'absolute',
    top:'300px',
    left:'90px',
    display:'block',
    color:'white',
    fontSize:30,
    zIndex:1,
  },
  pinaculo:{
    position: 'absolute',
    top:'300px',
    left:'90px',
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

export const ncReport = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    width: '1000%'
  },
  header: {
    backgroundColor: '#D8C7EB',
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

export const pinnacleName = StyleSheet.create({
  container:{
    position: 'absolute',
    top:'10px',
    left:'10px',
    fontSize: '7px',
    width: '271px'
  },
  bar: {
    backgroundColor: '#000',
    fontWeight: 'bold',
    color: '#fff',
    padding: '3px',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px'
  },
  wrap: {
    border: '1px solid gray',
    borderBottomRightRadius: '5px',
    borderBottomLeftRadius: '5px',
    borderTopWidth: 0,
    display: 'flex',
    flexDirection: 'row'
  },
})

export const pinnaclePotential = StyleSheet.create({
  container:{
    position: 'absolute',
    top:'10px',
    left:'290px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    fontSize: '7px',
    width: '240px',
  },
  bar: {
    backgroundColor: '#000',
    fontWeight: 'bold',
    color: '#fff',
    padding: '3px',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px'
  },
  wrap: {
    border: '1px solid gray',
    borderBottomRightRadius: '5px',
    borderBottomLeftRadius: '5px',
    borderTopWidth: 0,
    display: 'flex',
    flexDirection: 'row'
  },
  item: {

  },
  title: {

  },
  circle: {

  },
})

export const pinnacle = StyleSheet.create({
  container:{
    position: 'absolute',
    top:'300px',
    left:'90px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr'
  },letter:{
    width: '30px',
    height: '30px',
    paddingTop: '5px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid #000',
    // borderRadius: '50%',
    position: 'absolute',
  },
  A:{
    top: '163px',
    left: '21px',
  },
  B: {
    top: '163px',
    left: '112px',
  },
  C:{
    top: '163px',
    left: '202px',
  },
  D:{
    top: '163px',
    left: '292px',
  },
  E:{
    top: '112px',
    left: '67px',
  },
  I:{
    top: '109px',
    left: '111px',
  },
  F:{
    top: '112px',
    left: '156px',
  },
  G:{
    top: '57px',
    left: '111px',
  },
  H:{
    top: '4px',
    left: '111px',
  },
  J:{
    top: '89px',
    left: '229px',
  },
  O:{
    top: '225px',
    left: '111px',
  },
  K:{
    top: '225px',
    left: '66px',
  },
  L:{
    top: '225px',
    left: '158px',
  },
  M:{
    top: '271px',
    left: '111px',
  },
  N:{
    top: '320px',
    left: '111px',
  },
  R:{
    top: '370px',
    left: '111px',
  },
  Q:{
    top: '370px',
    left: '65px',
  },
  S:{
    top: '370px',
    left: '158px',
  },
  P:{
    top: '320px',
    left: '35px',
  },
  W:{
    top: '271px',
    left: '4px',
  },
  ausensias: {
    top: '320px',
    left: '198px',
    width: '90px'
  },
  reaccion: {
    top: '4px',
    left: '292px',
  },
  sintesis: {
    top: '69px',
    left: '292px',
  },
  regalo: {
    top: '109px',
    left: '292px',
  },
});