function extractDays(array, dayNumber) {
  //const months = [1,2,3,4,5,6,7,8,9,10,11,12]
  const res = []
  array.forEach((item) => {
    const day = Number(item['date'].split('-')[2])
    //const month = Number(item[0].split('-')[1])
    if (day === dayNumber) {
      res.push(item)
    }
  })
  return res;
};

export default extractDays;