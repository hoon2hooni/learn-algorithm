export function solution(param: string) {
  function recursion(param: string) {
    if (param.length <= 4) {
      return +param[param.length - 1] % 2 !== 0 ? true : false;
    }
    return +param[param.length - 1] % 2 !== 0
      ? true
      : recursion(param.slice(4));
  }
  return recursion(param);
}
