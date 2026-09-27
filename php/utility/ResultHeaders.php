<?php
declare(strict_types=1);

// BudMcpModelContextProtocol SDK utility: result_headers

class BudMcpModelContextProtocolResultHeaders
{
    public static function call(BudMcpModelContextProtocolContext $ctx): ?BudMcpModelContextProtocolResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
