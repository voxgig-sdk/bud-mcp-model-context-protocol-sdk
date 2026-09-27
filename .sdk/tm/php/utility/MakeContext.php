<?php
declare(strict_types=1);

// BudMcpModelContextProtocol SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class BudMcpModelContextProtocolMakeContext
{
    public static function call(array $ctxmap, ?BudMcpModelContextProtocolContext $basectx): BudMcpModelContextProtocolContext
    {
        return new BudMcpModelContextProtocolContext($ctxmap, $basectx);
    }
}
