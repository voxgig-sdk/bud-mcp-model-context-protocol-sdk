<?php
declare(strict_types=1);

// BudMcpModelContextProtocol SDK utility: result_body

class BudMcpModelContextProtocolResultBody
{
    public static function call(BudMcpModelContextProtocolContext $ctx): ?BudMcpModelContextProtocolResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
