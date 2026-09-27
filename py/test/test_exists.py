# BudMcpModelContextProtocol SDK exists test

import pytest
from budmcpmodelcontextprotocol_sdk import BudMcpModelContextProtocolSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = BudMcpModelContextProtocolSDK.test(None, None)
        assert testsdk is not None
