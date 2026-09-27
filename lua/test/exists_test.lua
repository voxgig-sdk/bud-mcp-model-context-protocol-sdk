-- BudMcpModelContextProtocol SDK exists test

local sdk = require("bud-mcp-model-context-protocol_sdk")

describe("BudMcpModelContextProtocolSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
