function dateToStr(sdate, type) {
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ]
  const date = new Date(sdate)
  const year = date.getFullYear()
  const month = months[date.getMonth()]
  const day = date.getDate()
  let res
  if (type === 'word') {
    res = day + ' ' + month + ' ' + year + ' г.'
  } else if (type === 'dots') {
    res = day + '.' + String(Number(date.getMonth())+1) + '.' + year + ' г.'
  }
  return res
};

function extractMonth(array, month) {
  const res = []
  array.forEach((item) => {
    const date = new Date(item['date'])
    if (date.getMonth() === month) {
      res.push(item)
    }
  })
  return res
}

module.exports = { dateToStr, extractMonth };
