"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerCreateOrConnectWithoutPartComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerCreateWithoutPartComputerInput_1 = require("../inputs/ComputerCreateWithoutPartComputerInput");
const ComputerWhereUniqueInput_1 = require("../inputs/ComputerWhereUniqueInput");
let ComputerCreateOrConnectWithoutPartComputerInput = class ComputerCreateOrConnectWithoutPartComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerWhereUniqueInput_1.ComputerWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerWhereUniqueInput_1.ComputerWhereUniqueInput)
], ComputerCreateOrConnectWithoutPartComputerInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerCreateWithoutPartComputerInput_1.ComputerCreateWithoutPartComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerCreateWithoutPartComputerInput_1.ComputerCreateWithoutPartComputerInput)
], ComputerCreateOrConnectWithoutPartComputerInput.prototype, "create", void 0);
ComputerCreateOrConnectWithoutPartComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerCreateOrConnectWithoutPartComputerInput", {
        isAbstract: true
    })
], ComputerCreateOrConnectWithoutPartComputerInput);
exports.ComputerCreateOrConnectWithoutPartComputerInput = ComputerCreateOrConnectWithoutPartComputerInput;
