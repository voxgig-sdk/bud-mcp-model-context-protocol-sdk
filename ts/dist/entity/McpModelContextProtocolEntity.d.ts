import { BudMcpModelContextProtocolEntityBase } from '../BudMcpModelContextProtocolEntityBase';
import type { BudMcpModelContextProtocolSDK } from '../BudMcpModelContextProtocolSDK';
import type { Control } from '../types';
import type { McpModelContextProtocol, McpModelContextProtocolCreateData } from '../BudMcpModelContextProtocolTypes';
declare class McpModelContextProtocolEntity extends BudMcpModelContextProtocolEntityBase<McpModelContextProtocol> {
    constructor(client: BudMcpModelContextProtocolSDK, entopts: any);
    make(this: McpModelContextProtocolEntity): McpModelContextProtocolEntity;
    create(this: any, reqdata?: McpModelContextProtocolCreateData, ctrl?: Control): Promise<McpModelContextProtocolEntity>;
}
export { McpModelContextProtocolEntity };
