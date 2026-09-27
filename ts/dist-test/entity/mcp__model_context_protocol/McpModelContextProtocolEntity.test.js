"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('McpModelContextProtocolEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when BUD_MCP_MODEL_CONTEXT_PROTOCOL_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('BUD_MCP_MODEL_CONTEXT_PROTOCOL_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.BudMcpModelContextProtocolSDK.test();
        const ent = testsdk.McpModelContextProtocol();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.BUD_MCP_MODEL_CONTEXT_PROTOCOL_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'mcp__model_context_protocol.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "data": { "a": true, "h": "Data", "n": "data", "r": false, "t": "`$OBJECT`", "key$": "data", "index$": 0 }, "operation_id": { "a": true, "h": "Operation Id", "n": "operation_id", "r": false, "t": "`$STRING`", "key$": "operation_id", "index$": 1 } }, "name": "mcp__model_context_protocol", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /bud-api-mcp/url", "source": "openapi3", "version": 2 }, "g": { "header": [{ "a": true, "ex": "8711bbef-b357-4c2d-97ca-0d9df4206e9a", "k": "header", "n": "x_client_id", "or": "x_client_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "c3339af9-2426-44d4-9c4d-ddb8fd281e23", "k": "header", "n": "x_customer_id", "or": "x_customer_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "US/Pacific", "k": "header", "n": "x_timezone", "or": "x_timezone", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "POST", "o": "/bud-api-mcp/url", "q": { "exist": ["x_client_id", "x_customer_id", "x_timezone"] }, "r": {}, "s": [{ "lit": "bud-api-mcp" }, { "lit": "url" }], "t": { "req": "`reqdata`", "res": "`body.data`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "mcp__model_context_protocol", "name__orig": "mcp__model_context_protocol", "Name": "McpModelContextProtocol", "name_": "mcp_model_context_protocol", "name-": "mcp-model-context-protocol", "NAME": "MCP__MODEL_CONTEXT_PROTOCOL", "index$": 0 }, { "active": true, "entity": "mcp__model_context_protocol", "key$": "BasicMcpModelContextProtocolFlow", "kind": "basic", "name": "BasicMcpModelContextProtocolFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "mcp__model_context_protocol_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'McpModelContextProtocol', { "POST /bud-api-mcp/url": { "protocol": "http", "parameters": [{ "in": "header", "name": "X-Client-Id", "schema": { "type": "string" }, "required": true, "description": "The API Client Identifier (Service Application Identifier).", "example": "8711bbef-b357-4c2d-97ca-0d9df4206e9a", "index$": 0 }, { "in": "header", "name": "X-Customer-Id", "schema": { "type": "string", "format": "uuid" }, "required": true, "description": "A unique identifier for a Customer, as registered on Bud's platform.", "example": "c3339af9-2426-44d4-9c4d-ddb8fd281e23", "index$": 1 }, { "in": "header", "name": "X-Timezone", "schema": { "type": "string", "format": "tz database identifier" }, "required": true, "description": "The [tz database identifier](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List) for the user's timezone.", "examples": { "Los Angeles, CA, USA": { "value": "US/Pacific" }, "UK": { "value": "Europe/London" } }, "x-ref": "#/components/parameters/HeaderTimezone", "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const mcp__model_context_protocol_ref01_ent = client.McpModelContextProtocol();
        let mcp__model_context_protocol_ref01_data = setup.data.new.mcp__model_context_protocol['mcp__model_context_protocol_ref01'];
        mcp__model_context_protocol_ref01_data = (await mcp__model_context_protocol_ref01_ent.create(mcp__model_context_protocol_ref01_data)).data();
        (0, node_assert_1.default)(null != mcp__model_context_protocol_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/mcp__model_context_protocol/McpModelContextProtocolTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.BudMcpModelContextProtocolSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['mcp__model_context_protocol01', 'mcp__model_context_protocol02', 'mcp__model_context_protocol03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'BUD_MCP_MODEL_CONTEXT_PROTOCOL_TEST_MCP_MODEL_CONTEXT_PROTOCOL_ENTID': idmap,
        'BUD_MCP_MODEL_CONTEXT_PROTOCOL_TEST_LIVE': 'FALSE',
        'BUD_MCP_MODEL_CONTEXT_PROTOCOL_TEST_EXPLAIN': 'FALSE',
        'BUD_MCP_MODEL_CONTEXT_PROTOCOL_APIKEY': '',
    });
    idmap = env['BUD_MCP_MODEL_CONTEXT_PROTOCOL_TEST_MCP_MODEL_CONTEXT_PROTOCOL_ENTID'];
    const live = 'TRUE' === env.BUD_MCP_MODEL_CONTEXT_PROTOCOL_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['BUD_MCP_MODEL_CONTEXT_PROTOCOL_TEST_MCP_MODEL_CONTEXT_PROTOCOL_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.BudMcpModelContextProtocolSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.BUD_MCP_MODEL_CONTEXT_PROTOCOL_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.BUD_MCP_MODEL_CONTEXT_PROTOCOL_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=McpModelContextProtocolEntity.test.js.map