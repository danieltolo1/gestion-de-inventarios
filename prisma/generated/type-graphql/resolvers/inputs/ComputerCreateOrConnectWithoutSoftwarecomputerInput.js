"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerCreateOrConnectWithoutSoftwarecomputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerCreateWithoutSoftwarecomputerInput_1 = require("../inputs/ComputerCreateWithoutSoftwarecomputerInput");
const ComputerWhereUniqueInput_1 = require("../inputs/ComputerWhereUniqueInput");
let ComputerCreateOrConnectWithoutSoftwarecomputerInput = class ComputerCreateOrConnectWithoutSoftwarecomputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerWhereUniqueInput_1.ComputerWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerWhereUniqueInput_1.ComputerWhereUniqueInput)
], ComputerCreateOrConnectWithoutSoftwarecomputerInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerCreateWithoutSoftwarecomputerInput_1.ComputerCreateWithoutSoftwarecomputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerCreateWithoutSoftwarecomputerInput_1.ComputerCreateWithoutSoftwarecomputerInput)
], ComputerCreateOrConnectWithoutSoftwarecomputerInput.prototype, "create", void 0);
ComputerCreateOrConnectWithoutSoftwarecomputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerCreateOrConnectWithoutSoftwarecomputerInput", {
        isAbstract: true
    })
], ComputerCreateOrConnectWithoutSoftwarecomputerInput);
exports.ComputerCreateOrConnectWithoutSoftwarecomputerInput = ComputerCreateOrConnectWithoutSoftwarecomputerInput;
