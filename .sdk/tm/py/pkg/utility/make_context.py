# BudMcpModelContextProtocol SDK utility: make_context

from projectname_sdk.core.context import BudMcpModelContextProtocolContext


def make_context_util(ctxmap, basectx):
    return BudMcpModelContextProtocolContext(ctxmap, basectx)
