"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerUpdateOneRequiredWithoutPartComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerCreateOrConnectWithoutPartComputerInput_1 = require("../inputs/ComputerCreateOrConnectWithoutPartComputerInput");
const ComputerCreateWithoutPartComputerInput_1 = require("../inputs/ComputerCreateWithoutPartComputerInput");
const ComputerUpdateWithoutPartComputerInput_1 = require("../inputs/ComputerUpdateWithoutPartComputerInput");
const ComputerUpsertWithoutPartComputerInput_1 = require("../inputs/ComputerUpsertWithoutPartComputerInput");
const ComputerWhereUniqueInput_1 = require("../inputs/ComputerWhereUniqueInput");
let ComputerUpdateOneRequiredWithoutPartComputerInput = class ComputerUpdateOneRequiredWithoutPartComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerCreateWithoutPartComputerInput_1.ComputerCreateWithoutPartComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerCreateWithoutPartComputerInput_1.ComputerCreateWithoutPartComputerInput)
], ComputerUpdateOneRequiredWithoutPartComputerInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerCreateOrConnectWithoutPartComputerInput_1.ComputerCreateOrConnectWithoutPartComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerCreateOrConnectWithoutPartComputerInput_1.ComputerCreateOrConnectWithoutPartComputerInput)
], ComputerUpdateOneRequiredWithoutPartComputerInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerUpsertWithoutPartComputerInput_1.ComputerUpsertWithoutPartComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerUpsertWithoutPartComputerInput_1.ComputerUpsertWithoutPartComputerInput)
], ComputerUpdateOneRequiredWithoutPartComputerInput.prototype, "upsert", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerWhereUniqueInput_1.ComputerWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerWhereUniqueInput_1.ComputerWhereUniqueInput)
], ComputerUpdateOneRequiredWithoutPartComputerInput.prototype, "connect", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerUpdateWithoutPartComputerInput_1.ComputerUpdateWithoutPartComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerUpdateWithoutPartComputerInput_1.ComputerUpdateWithoutPartComputerInput)
], ComputerUpdateOneRequiredWithoutPartComputerInput.prototype, "update", void 0);
ComputerUpdateOneRequiredWithoutPartComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerUpdateOneRequiredWithoutPartComputerInput", {
        isAbstract: true
    })
], ComputerUpdateOneRequiredWithoutPartComputerInput);
exports.ComputerUpdateOneRequiredWithoutPartComputerInput = ComputerUpdateOneRequiredWithoutPartComputerInput;
