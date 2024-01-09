// 8-clean_set.js

export default function cleanSet(inputSet, startString) {
  if (!(inputSet instanceof Set) || typeof startString !== 'string') {
    throw new Error('Invalid input. Please provide a Set and a startString.');
  }

  const filteredValues = Array.from(inputSet)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length));

  return filteredValues.join('-');
}
