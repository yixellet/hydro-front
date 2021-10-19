export default function fillEmptyObs(obs) {
  const year = new Date(obs[0]['date']).getFullYear()
  const startDate = new Date(year, 0, 1)
  const res = []
  while (startDate.getFullYear() === year) {
    console.log(startDate)
    const observation = obs.find((observ) => {
      return new Date(observ['date']).getTime() === startDate.getTime()
    })
    if (observation) {
      res.push({date: startDate, stage: observation['stage'], props: observation['props']})
    } else {
      res.push({date: startDate, stage: null, props: null})
    }
    startDate.setDate(startDate.getDate() + 1)
  }
}