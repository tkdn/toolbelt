/**
 * @param {Number} x
 * @param {Number} y
 */
export function add(x, y) {
  return x + y
}

/**
 * @param {Number} x
 * @param {Number} y
 */
export function mathPow(x, y) {
  return x ** y
}

export const promise = new Promise(resolve => {
  setTimeout(() => {
    resolve('ok')
  }, 1000)
})
