function calcMin(array) {
  const preparedArray = []
  array.forEach((item) => {
    if (item['stage']) {
      preparedArray.push(item)
    }
  })
  if (preparedArray.length > 0) {
    let max = preparedArray[0]
    preparedArray.forEach((item) => {
      if (item['stage'] && item['stage'] < max['stage']) {
        max = item
      }
    })
    return max
  } else {
    return {date: null, stage: null, value: null, refel: null, props: null}
  }
};

function calcMax(array) {
  const preparedArray = []
  array.forEach((item) => {
    if (item['stage']) {
      preparedArray.push(item)
    }
  })
  if (preparedArray.length > 0) {
    let max = preparedArray[0]
    preparedArray.forEach((item) => {
      if (item['stage'] && item['stage'] > max['stage']) {
        max = item
      }
    })
    return max
  } else {
    return {date: null, stage: null, value: null, refel: null, props: null}
  }
}

function calcAverage(array) {
  const values = []
  array.forEach((item) => {
    if (item['stage']) {
      values.push(item['stage'])
    }
    
  })
  let sum = 0
  values.forEach((item) => {
    sum = sum + item
  })
  const res = sum / values.length
  return res.toFixed(2);
}

module.exports = {calcMax, calcMin, calcAverage}