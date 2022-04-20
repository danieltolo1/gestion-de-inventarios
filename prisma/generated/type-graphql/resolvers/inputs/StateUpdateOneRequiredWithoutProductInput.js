"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateUpdateOneRequiredWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const StateCreateOrConnectWithoutProductInput_1 = require("../inputs/StateCreateOrConnectWithoutProductInput");
const StateCreateWithoutProductInput_1 = require("../inputs/StateCreateWithoutProductInput");
const StateUpdateWithoutProductInput_1 = require("../inputs/StateUpdateWithoutProductInput");
const StateUpsertWithoutProductInput_1 = require("../inputs/StateUpsertWithoutProductInput");
const StateWhereUniqueInput_1 = require("../inputs/StateWhereUniqueInput");
let StateUpdateOneRequiredWithoutProductInput = class StateUpdateOneRequiredWithoutProductInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateCreateWithoutProductInput_1.StateCreateWithoutProductInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateCreateWithoutProductInput_1.StateCreateWithoutProductInput)
], StateUpdateOneRequiredWithoutProductInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateCreateOrConnectWithoutProductInput_1.StateCreateOrConnectWithoutProductInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateCreateOrConnectWithoutProductInput_1.StateCreateOrConnectWithoutProductInput)
], StateUpdateOneRequiredWithoutProductInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateUpsertWithoutProductInput_1.StateUpsertWithoutProductInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateUpsertWithoutProductInput_1.StateUpsertWithoutProductInput)
], StateUpdateOneRequiredWithoutProductInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateWhereUniqueInput_1.StateWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateWhereUniqueInput_1.StateWhereUniqueInput)
], StateUpdateOneRequiredWithoutProductInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateUpdateWithoutProductInput_1.StateUpdateWithoutProductInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateUpdateWithoutProductInput_1.StateUpdateWithoutProductInput)
], StateUpdateOneRequiredWithoutProductInput.prototype, "update", void 0);
StateUpdateOneRequiredWithoutProductInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("StateUpdateOneRequiredWithoutProductInput", {
        isAbstract: true
    })
], StateUpdateOneRequiredWithoutProductInput);
exports.StateUpdateOneRequiredWithoutProductInput = StateUpdateOneRequiredWithoutProductInput;
