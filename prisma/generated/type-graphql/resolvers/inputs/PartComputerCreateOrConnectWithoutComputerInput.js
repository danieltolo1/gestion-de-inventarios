"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerCreateOrConnectWithoutComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerCreateWithoutComputerInput_1 = require("../inputs/PartComputerCreateWithoutComputerInput");
const PartComputerWhereUniqueInput_1 = require("../inputs/PartComputerWhereUniqueInput");
let PartComputerCreateOrConnectWithoutComputerInput = class PartComputerCreateOrConnectWithoutComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput)
], PartComputerCreateOrConnectWithoutComputerInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerCreateWithoutComputerInput_1.PartComputerCreateWithoutComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerCreateWithoutComputerInput_1.PartComputerCreateWithoutComputerInput)
], PartComputerCreateOrConnectWithoutComputerInput.prototype, "create", void 0);
PartComputerCreateOrConnectWithoutComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerCreateOrConnectWithoutComputerInput", {
        isAbstract: true
    })
], PartComputerCreateOrConnectWithoutComputerInput);
exports.PartComputerCreateOrConnectWithoutComputerInput = PartComputerCreateOrConnectWithoutComputerInput;
