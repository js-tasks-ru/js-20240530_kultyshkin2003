/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  const keys = path.split(".");

  return function getVal(obj) {
    let curVal = obj;

    for (const key of keys) {
      if (!Object.keys(curVal).includes(key)) return;
      curVal = curVal[key];
    }

    return curVal;
  };
}
