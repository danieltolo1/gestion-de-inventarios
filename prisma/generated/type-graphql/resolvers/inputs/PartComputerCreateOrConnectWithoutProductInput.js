"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerCreateOrConnectWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerCreateWithoutProductInput_1 = require("../inputs/PartComputerCreateWithoutProductInput");
const PartComputerWhereUniqueInput_1 = require("../inputs/PartComputerWhereUniqueInput");
let PartComputerCreateOrConnectWithoutProductInput = class PartComputerCreateOrConnectWithoutProductInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput)
], PartComputerCreateOrConnectWithoutProductInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerCreateWithoutProductInput_1.PartComputerCreateWithoutProductInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerCreateWithoutProductInput_1.PartComputerCreateWithoutProductInput)
], PartComputerCreateOrConnectWithoutProductInput.prototype, "create", void 0);
PartComputerCreateOrConnectWithoutProductInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerCreateOrConnectWithoutProductInput", {
        isAbstract: true
    })
], PartComputerCreateOrConnectWithoutProductInput);
exports.PartComputerCreateOrConnectWithoutProductInput = PartComputerCreateOrConnectWithoutProductInput;
