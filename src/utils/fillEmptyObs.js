export default function fillEmptyObs(obs) {
  /**
   * Заполняет пустые дни в массиве годовых наблюдений
   */
  const year = new Date(obs[0]['date']).getFullYear()
  const yearDates = []
  const startDate = new Date(year, 0, 1)
  while (startDate.getFullYear() < year+1) {
    yearDates.push(new Date(startDate.toString()))
    startDate.setDate(startDate.getDate() + 1)
  }

  const res = []
  yearDates.forEach((dateq) => {
    const observation = obs.find((o) => {
      const obsDate = new Date(o['date'])
      return obsDate.getMonth() === dateq.getMonth() && obsDate.getDate() === dateq.getDate()
    })
    res.push(observation ? 
            {
              date: new Date(observation['date']), 
              stage: observation['stage'],
              value: observation['value'],
              refel: observation['refel'],
              props: observation['props']
            }:
            {date: dateq, stage: null, value: null, refel: null, props: null}
    )
  })
  return(res)
}