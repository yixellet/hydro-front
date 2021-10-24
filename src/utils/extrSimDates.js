function extractDays(array, dayNumber) {
  /**
   * Извлекает из массива ежедневных наблюдений array {array}
   * наблюдения, дата которых равна dayNumber
   * 
   * @param {array} array Массив наблюдений за год
   * @param {number} dayNumber День
   * 
   * @returns {array}
   */
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
          res.push({"date": '', "stage": null, "props": null})
        }
        res.push(item)
      }
    }
  })
  return res;
};

export default extractDays;