export class Hoge {
  foo = 1
  bar = true
  static hoo = 1
  getFoo () {
    return this.foo
  }
  getBar () {
    return this.bar
  }
}
const a = { x: 1, y: 2 }
const b = { z: 3 }
export const spread = {...a, ...b}
