package core

type BudMcpModelContextProtocolError struct {
	IsBudMcpModelContextProtocolError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewBudMcpModelContextProtocolError(code string, msg string, ctx *Context) *BudMcpModelContextProtocolError {
	return &BudMcpModelContextProtocolError{
		IsBudMcpModelContextProtocolError: true,
		Sdk:              "BudMcpModelContextProtocol",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *BudMcpModelContextProtocolError) Error() string {
	return e.Msg
}
