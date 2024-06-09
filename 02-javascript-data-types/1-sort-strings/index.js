/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  let sortedArr;

  const sortsMethods = {
    asc: (arr) => {
      return [...arr].sort((a, b) => {
        return a.localeCompare(b, ['ru', 'en'], {caseFirst: 'upper'});
      });
    },
    desc: (arr) => {
      return [...arr].sort((a, b) => {
        return b.localeCompare(a, ['ru', 'en'], {caseFirst: 'upper'});
      });
    }
  };

  sortedArr = sortsMethods[param](arr);

  return sortedArr;
}
