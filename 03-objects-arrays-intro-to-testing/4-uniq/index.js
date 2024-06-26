/**
 * uniq - returns array of uniq values:
 * @param {*[]} arr - the array of primitive values
 * @returns {*[]} - the new array with uniq values
 */
export function uniq(arr) {
  if (!arr) return [];

  const uniqArr = [];
  const setArr = new Set(arr);

  setArr.forEach((value, valueAgain, set) => {
    uniqArr.push(value);
  });

  return uniqArr;
}
