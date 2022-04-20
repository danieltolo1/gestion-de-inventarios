"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerCreateNestedManyWithoutSoftwarecomputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerCreateManySoftwarecomputerInputEnvelope_1 = require("../inputs/ComputerCreateManySoftwarecomputerInputEnvelope");
const ComputerCreateOrConnectWithoutSoftwarecomputerInput_1 = require("../inputs/ComputerCreateOrConnectWithoutSoftwarecomputerInput");
const ComputerCreateWithoutSoftwarecomputerInput_1 = require("../inputs/ComputerCreateWithoutSoftwarecomputerInput");
const ComputerWhereUniqueInput_1 = require("../inputs/ComputerWhereUniqueInput");
let ComputerCreateNestedManyWithoutSoftwarecomputerInput = class ComputerCreateNestedManyWithoutSoftwarecomputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerCreateWithoutSoftwarecomputerInput_1.ComputerCreateWithoutSoftwarecomputerInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerCreateNestedManyWithoutSoftwarecomputerInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerCreateOrConnectWithoutSoftwarecomputerInput_1.ComputerCreateOrConnectWithoutSoftwarecomputerInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerCreateNestedManyWithoutSoftwarecomputerInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerCreateManySoftwarecomputerInputEnvelope_1.ComputerCreateManySoftwarecomputerInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerCreateManySoftwarecomputerInputEnvelope_1.ComputerCreateManySoftwarecomputerInputEnvelope)
], ComputerCreateNestedManyWithoutSoftwarecomputerInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [ComputerWhereUniqueInput_1.ComputerWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], ComputerCreateNestedManyWithoutSoftwarecomputerInput.prototype, "connect", void 0);
ComputerCreateNestedManyWithoutSoftwarecomputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerCreateNestedManyWithoutSoftwarecomputerInput", {
        isAbstract: true
    })
], ComputerCreateNestedManyWithoutSoftwarecomputerInput);
exports.ComputerCreateNestedManyWithoutSoftwarecomputerInput = ComputerCreateNestedManyWithoutSoftwarecomputerInput;
