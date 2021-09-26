function dateToStr(sdate) {
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
  return day + ' ' + month + ' ' + year + ' г.'
};

export default dateToStr;
