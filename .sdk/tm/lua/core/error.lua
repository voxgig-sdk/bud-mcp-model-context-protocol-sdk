-- BudMcpModelContextProtocol SDK error

local BudMcpModelContextProtocolError = {}
BudMcpModelContextProtocolError.__index = BudMcpModelContextProtocolError


function BudMcpModelContextProtocolError.new(code, msg, ctx)
  local self = setmetatable({}, BudMcpModelContextProtocolError)
  self.is_sdk_error = true
  self.sdk = "BudMcpModelContextProtocol"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function BudMcpModelContextProtocolError:error()
  return self.msg
end


function BudMcpModelContextProtocolError:__tostring()
  return self.msg
end


return BudMcpModelContextProtocolError
