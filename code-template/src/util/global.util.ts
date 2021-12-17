export function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten)
  }, [])
}

export function capitalize(s: string) {
  return s && s[0].toUpperCase() + s.slice(1).toLowerCase()
}
