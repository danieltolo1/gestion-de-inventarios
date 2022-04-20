"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerCreateNestedOneWithoutPartComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerCreateOrConnectWithoutPartComputerInput_1 = require("../inputs/ComputerCreateOrConnectWithoutPartComputerInput");
const ComputerCreateWithoutPartComputerInput_1 = require("../inputs/ComputerCreateWithoutPartComputerInput");
const ComputerWhereUniqueInput_1 = require("../inputs/ComputerWhereUniqueInput");
let ComputerCreateNestedOneWithoutPartComputerInput = class ComputerCreateNestedOneWithoutPartComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerCreateWithoutPartComputerInput_1.ComputerCreateWithoutPartComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerCreateWithoutPartComputerInput_1.ComputerCreateWithoutPartComputerInput)
], ComputerCreateNestedOneWithoutPartComputerInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerCreateOrConnectWithoutPartComputerInput_1.ComputerCreateOrConnectWithoutPartComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerCreateOrConnectWithoutPartComputerInput_1.ComputerCreateOrConnectWithoutPartComputerInput)
], ComputerCreateNestedOneWithoutPartComputerInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerWhereUniqueInput_1.ComputerWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerWhereUniqueInput_1.ComputerWhereUniqueInput)
], ComputerCreateNestedOneWithoutPartComputerInput.prototype, "connect", void 0);
ComputerCreateNestedOneWithoutPartComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerCreateNestedOneWithoutPartComputerInput", {
        isAbstract: true
    })
], ComputerCreateNestedOneWithoutPartComputerInput);
exports.ComputerCreateNestedOneWithoutPartComputerInput = ComputerCreateNestedOneWithoutPartComputerInput;
