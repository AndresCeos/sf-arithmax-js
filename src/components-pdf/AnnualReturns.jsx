import { Text, View, StyleSheet } from '@react-pdf/renderer'

import moment from 'moment';
import { AnnualReturn } from './AnnualReturn';

export const AnnualReturns = ({ consultant }) => {
  const newDate = moment()

  const annualReturnCurrent = consultant.annualReturn(newDate.year())
  const annualReturnLastYear = consultant.annualReturn(newDate.year() - 1)
  const annualReturnNextYear = consultant.annualReturn(newDate.year() + 1)

  return (
    <View style={annualReturn.container}>
      <View style={annualReturn.wrap}>
        <View style={annualReturn.return_1}>
          <AnnualReturn annualReturn={annualReturnLastYear} />
        </View>
        <View style={annualReturn.return_2}>
          <AnnualReturn annualReturn={annualReturnCurrent} />
        </View>
        <View style={annualReturn.return_3}>
          <AnnualReturn annualReturn={annualReturnNextYear} />
        </View>
      </View>
    </View>
  )
}

export const annualReturn = StyleSheet.create({
  container: {
    // backgroundColor: '#ff0000',
    position: 'absolute',
    top: '75px',
    width: '119px',
    left: '425px',
    fontSize: '10px',

  },
  wrap: {
    position: 'relative'
  },
  return_1: {
    position: 'absolute',
    top: '0px',
    height: '150px',
    width: '119px',
    // backgroundColor: '#ff000012',
  },
  return_2: {
    position: 'absolute',
    top: '150px',
    height: '148px',
    width: '119px',
    // backgroundColor: '#00ff0012',
  },
  return_3: {
    position: 'absolute',
    top: '298px',
    height: '148px',
    width: '119px',
    // backgroundColor: '#0000ff12',
  },
})