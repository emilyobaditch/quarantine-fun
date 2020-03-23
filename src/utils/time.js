import moment from 'moment'

export const getCountUpValues = () => {
  const then = moment('2020-03-15T00:00:00', moment.HTML5_FMT.DATETIME_LOCAL_SECONDS)
  const now = moment()

  const countdown = moment(now - then)
  const days = countdown.format('D')
  const hours = countdown.format('HH')
  const minutes = countdown.format('mm')
  const seconds = countdown.format('ss')

  return { seconds, minutes, hours, days }
}
