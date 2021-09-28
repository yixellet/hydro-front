function calcMin(array) {
  let max = array[0]
  array.forEach((item) => {
    if (item['stage'] > max['stage']) {
      max = item
    }
  })
  return max
};

function calcMax(array) {
  let min = array[0]
  array.forEach((item) => {
    if (item['stage'] < min['stage']) {
      min = item
    }
  })
  return min
};

function calcAverage(array) {
  const values = []
  array.forEach((item) => {
    values.push(Number(item['stage']))
  })
  let sum = 0
  values.forEach((item) => {
    sum = sum + item
  })
  const res = sum / values.length
  return res.toFixed(2);
}

module.exports = {calcMax, calcMin, calcAverage}