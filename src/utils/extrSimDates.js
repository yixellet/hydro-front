function extractDays(array, dayNumber) {
  const res = []
  array.forEach((item) => {
    const date = new Date(item.date)
    const day = date.getDate()
    const month = date.getMonth()+1
    if (day === dayNumber) {
      if (month === res.length + 1) {
        res.push(item)
      } else {
        const delta = month - res.length
        for(let i=1; i<delta; i++) {
          res.push({"date": '', "state": ''})
        }
        res.push(item)
      }
    }
  })
  return res;
};

export default extractDays;