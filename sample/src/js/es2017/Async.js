/**
 * Async Function
 *
 */
async function asyncFunction () {
  const response = await fetch('https://api.github.com/orgs/mediba-system')
  const json = response.json()
  return json
}

export default asyncFunction
