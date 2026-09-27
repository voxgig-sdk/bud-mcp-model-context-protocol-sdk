# BudMcpModelContextProtocol SDK feature factory

from budmcpmodelcontextprotocol_sdk.feature.base_feature import BudMcpModelContextProtocolBaseFeature
from budmcpmodelcontextprotocol_sdk.feature.debug_feature import BudMcpModelContextProtocolDebugFeature
from budmcpmodelcontextprotocol_sdk.feature.idempotency_feature import BudMcpModelContextProtocolIdempotencyFeature
from budmcpmodelcontextprotocol_sdk.feature.metrics_feature import BudMcpModelContextProtocolMetricsFeature
from budmcpmodelcontextprotocol_sdk.feature.paging_feature import BudMcpModelContextProtocolPagingFeature
from budmcpmodelcontextprotocol_sdk.feature.ratelimit_feature import BudMcpModelContextProtocolRatelimitFeature
from budmcpmodelcontextprotocol_sdk.feature.retry_feature import BudMcpModelContextProtocolRetryFeature
from budmcpmodelcontextprotocol_sdk.feature.test_feature import BudMcpModelContextProtocolTestFeature
from budmcpmodelcontextprotocol_sdk.feature.timeout_feature import BudMcpModelContextProtocolTimeoutFeature


_FEATURES = {
    "base": lambda: BudMcpModelContextProtocolBaseFeature(),
    "debug": lambda: BudMcpModelContextProtocolDebugFeature(),
    "idempotency": lambda: BudMcpModelContextProtocolIdempotencyFeature(),
    "metrics": lambda: BudMcpModelContextProtocolMetricsFeature(),
    "paging": lambda: BudMcpModelContextProtocolPagingFeature(),
    "ratelimit": lambda: BudMcpModelContextProtocolRatelimitFeature(),
    "retry": lambda: BudMcpModelContextProtocolRetryFeature(),
    "test": lambda: BudMcpModelContextProtocolTestFeature(),
    "timeout": lambda: BudMcpModelContextProtocolTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
