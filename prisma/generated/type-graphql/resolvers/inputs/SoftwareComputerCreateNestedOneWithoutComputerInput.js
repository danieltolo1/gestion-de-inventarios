"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareComputerCreateNestedOneWithoutComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SoftwareComputerCreateOrConnectWithoutComputerInput_1 = require("../inputs/SoftwareComputerCreateOrConnectWithoutComputerInput");
const SoftwareComputerCreateWithoutComputerInput_1 = require("../inputs/SoftwareComputerCreateWithoutComputerInput");
const SoftwareComputerWhereUniqueInput_1 = require("../inputs/SoftwareComputerWhereUniqueInput");
let SoftwareComputerCreateNestedOneWithoutComputerInput = class SoftwareComputerCreateNestedOneWithoutComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerCreateWithoutComputerInput_1.SoftwareComputerCreateWithoutComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerCreateWithoutComputerInput_1.SoftwareComputerCreateWithoutComputerInput)
], SoftwareComputerCreateNestedOneWithoutComputerInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerCreateOrConnectWithoutComputerInput_1.SoftwareComputerCreateOrConnectWithoutComputerInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerCreateOrConnectWithoutComputerInput_1.SoftwareComputerCreateOrConnectWithoutComputerInput)
], SoftwareComputerCreateNestedOneWithoutComputerInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerWhereUniqueInput_1.SoftwareComputerWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerWhereUniqueInput_1.SoftwareComputerWhereUniqueInput)
], SoftwareComputerCreateNestedOneWithoutComputerInput.prototype, "connect", void 0);
SoftwareComputerCreateNestedOneWithoutComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SoftwareComputerCreateNestedOneWithoutComputerInput", {
        isAbstract: true
    })
], SoftwareComputerCreateNestedOneWithoutComputerInput);
exports.SoftwareComputerCreateNestedOneWithoutComputerInput = SoftwareComputerCreateNestedOneWithoutComputerInput;
