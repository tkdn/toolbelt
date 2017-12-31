import { add, mathPow, promise } from '../src/module'

describe('test suite.', () => {
  before(() => {
    document.body.innerHTML = window.__html__['sample/__test__/fixtures/sample.html']
  })
  after(() => {
    document.body.innerHTML = ''
  })
  it('document test', () => {
    const actual = document.querySelector('h1').textContent
    assert(actual === 'Sample')
  })
  it('func test 1', () => {
    const actual = add(1, 2)
    assert(actual === 3)
  })
  it('func test 2', () => {
    const actual = mathPow(2, 2)
    assert(actual === 4)
  })
  it('Promise test', done => {
    promise.then(val => {
      assert(val === 'ok')
      done()
    })
  })
  it('Async/Await test', async () => {
    async function hoge() {
      return 1
    }
    hoge()
    const val = await promise
    assert(val === 'ok')
  })
})
