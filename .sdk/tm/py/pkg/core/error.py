# BudMcpModelContextProtocol SDK error

from __future__ import annotations


class BudMcpModelContextProtocolError(Exception):
    def __init__(self, code="", msg="", ctx=None):
        super().__init__(msg)
        self.is_sdk_error = True
        self.sdk = "BudMcpModelContextProtocol"
        self.code = code
        self.msg = msg
        self.ctx = ctx
        self.result = None
        self.spec = None

    def __str__(self):
        return self.msg
