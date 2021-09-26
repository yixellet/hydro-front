function ddToDms(ddd) {
  const dd = Math.trunc(ddd)
  const mm = Math.trunc((ddd - dd) * 60)
  const ss = ((ddd - dd) * 60 - mm) * 60
  return dd + '\u00b0' + mm + '\u0027' + ss.toFixed(2) + '\u0022'
}

export default ddToDms;