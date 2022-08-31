import { Text, View, StyleSheet } from '@react-pdf/renderer';
import { capitalize } from '../../resources';

export const SynastryData = ({ synastry, newDate }) => {
  const consultant = synastry.consultant
  const partner = synastry.partner
  return (
    <View style={data.container}>
      <View style={data.partners}>
        <Text style={[data.textName, { top: 18 }]}>{consultant.fullNameView}</Text>
        <Text style={[data.textBirth, { top: 18 }]}>{consultant.getFormBirthDate()}</Text>
        <Text style={[data.textAge, { top: 18 }]}>{consultant.getYearsOld(newDate.year())}</Text>
      </View>
      <View style={data.partners}>
        <Text style={[data.textName, { top: 45 }]}>{partner.fullNameView}</Text>
        <Text style={[data.textBirth, { top: 45 }]}>{partner.getFormBirthDate()}</Text>
        <Text style={[data.textAge, { top: 45 }]}>{partner.getYearsOld(newDate.year())}</Text>
      </View>
      <View>
        <Text style={[data.textYear]}>{partner.yearMeet}</Text>
      </View>
    </View>
  )
}
export const data = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '30px',
    left: '15px',
    width: '533px'
  },
  textName: {
    fontSize: '7px',
    color: '#7E7E7E',
    position: 'absolute',
    width: '240px',
    left: '80px'
  },
  textBirth: {
    fontSize: '7px',
    color: '#7E7E7E',
    position: 'absolute',
    width: '50px',
    right: '65px'
  },
  textAge: {
    fontSize: '7px',
    color: '#7E7E7E',
    position: 'absolute',
    width: '20px',
    right: '10px'
  },
  partners: {
    display: 'flex',
    flexDirection: 'row'
  },
  textYear: {
    fontSize: '7px',
    color: '#7E7E7E',
    position: 'absolute',
    left: '140px',
    top: 75
  }
})