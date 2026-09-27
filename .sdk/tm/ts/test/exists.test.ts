
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { BudMcpModelContextProtocolSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = BudMcpModelContextProtocolSDK.test()
    equal(testsdk instanceof BudMcpModelContextProtocolSDK, true,
      'BudMcpModelContextProtocolSDK.test() must return a client synchronously')
  })

})
