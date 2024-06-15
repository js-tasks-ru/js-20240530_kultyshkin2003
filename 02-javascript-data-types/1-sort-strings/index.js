/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  let sortedArr;

  const sortingLc = (firstParam, secondParam) => firstParam.localeCompare(secondParam, ['ru', 'en'], {caseFirst: 'upper'})

  const sortsMethods = {
    asc: (arr) => [...arr].sort((a, b) => sortingLc(a, b)),
    desc: (arr) => [...arr].sort((a, b) => sortingLc(b, a))
  };

  sortedArr = sortsMethods[param](arr);

  return sortedArr;

}
