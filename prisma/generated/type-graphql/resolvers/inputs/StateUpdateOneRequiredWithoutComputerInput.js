"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateUpdateOneRequiredWithoutComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const StateCreateOrConnectWithoutComputerInput_1 = require("../inputs/StateCreateOrConnectWithoutComputerInput");
const StateCreateWithoutComputerInput_1 = require("../inputs/StateCreateWithoutComputerInput");
const StateUpdateWithoutComputerInput_1 = require("../inputs/StateUpdateWithoutComputerInput");
const StateUpsertWithoutComputerInput_1 = require("../inputs/StateUpsertWithoutComputerInput");
const StateWhereUniqueInput_1 = require("../inputs/StateWhereUniqueInput");
let StateUpdateOneRequiredWithoutComputerInput = class StateUpdateOneRequiredWithoutComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateCreateWithoutComputerInput_1.StateCreateWithoutComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateCreateWithoutComputerInput_1.StateCreateWithoutComputerInput)
], StateUpdateOneRequiredWithoutComputerInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateCreateOrConnectWithoutComputerInput_1.StateCreateOrConnectWithoutComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateCreateOrConnectWithoutComputerInput_1.StateCreateOrConnectWithoutComputerInput)
], StateUpdateOneRequiredWithoutComputerInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateUpsertWithoutComputerInput_1.StateUpsertWithoutComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateUpsertWithoutComputerInput_1.StateUpsertWithoutComputerInput)
], StateUpdateOneRequiredWithoutComputerInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateWhereUniqueInput_1.StateWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateWhereUniqueInput_1.StateWhereUniqueInput)
], StateUpdateOneRequiredWithoutComputerInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateUpdateWithoutComputerInput_1.StateUpdateWithoutComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateUpdateWithoutComputerInput_1.StateUpdateWithoutComputerInput)
], StateUpdateOneRequiredWithoutComputerInput.prototype, "update", void 0);
StateUpdateOneRequiredWithoutComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("StateUpdateOneRequiredWithoutComputerInput", {
        isAbstract: true
    })
], StateUpdateOneRequiredWithoutComputerInput);
exports.StateUpdateOneRequiredWithoutComputerInput = StateUpdateOneRequiredWithoutComputerInput;
