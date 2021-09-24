function extractDays(array, dayNumber) {
  const res = []
  array.forEach((item) => {
    const day = Number(item['date'].split('-')[2])
    const month = Number(item['date'].split('-')[1])
    if (day === dayNumber) {
      if (month === res.length + 1) {
        res.push(item)
      } else {
        const delta = month - res.length
        for(let i=1; i<delta; i++) {
          res.push({"date": "", "value": ''})
        }
        res.push(item)
      }
    }
  })
  return res;
};

export default extractDays;