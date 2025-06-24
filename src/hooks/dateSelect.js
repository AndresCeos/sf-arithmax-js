import moment from 'moment'
import { useSelector } from 'react-redux'

export const dateSelect = () => {
  const { dateSelected } = useSelector(state => state.users)
  const serializableDate = JSON.parse(dateSelected)
  const newDate = moment(serializableDate)
  return { newDate }
}