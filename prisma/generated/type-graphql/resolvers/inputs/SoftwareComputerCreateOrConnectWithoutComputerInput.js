"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftwareComputerCreateOrConnectWithoutComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const SoftwareComputerCreateWithoutComputerInput_1 = require("../inputs/SoftwareComputerCreateWithoutComputerInput");
const SoftwareComputerWhereUniqueInput_1 = require("../inputs/SoftwareComputerWhereUniqueInput");
let SoftwareComputerCreateOrConnectWithoutComputerInput = class SoftwareComputerCreateOrConnectWithoutComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerWhereUniqueInput_1.SoftwareComputerWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerWhereUniqueInput_1.SoftwareComputerWhereUniqueInput)
], SoftwareComputerCreateOrConnectWithoutComputerInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SoftwareComputerCreateWithoutComputerInput_1.SoftwareComputerCreateWithoutComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", SoftwareComputerCreateWithoutComputerInput_1.SoftwareComputerCreateWithoutComputerInput)
], SoftwareComputerCreateOrConnectWithoutComputerInput.prototype, "create", void 0);
SoftwareComputerCreateOrConnectWithoutComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("SoftwareComputerCreateOrConnectWithoutComputerInput", {
        isAbstract: true
    })
], SoftwareComputerCreateOrConnectWithoutComputerInput);
exports.SoftwareComputerCreateOrConnectWithoutComputerInput = SoftwareComputerCreateOrConnectWithoutComputerInput;
