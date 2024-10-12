export default function cleanSet(set, startString) {
  if (!startString || !set || typeof startString !== 'string' || !(set instanceof Set)) {
    return '';
  }

  const filteredValues = [...set].filter((val) => typeof val === 'string' && val.startsWith(startString));
  return filteredValues.map((val) => val.slice(startString.length)).join('-');
}
