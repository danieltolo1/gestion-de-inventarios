"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerCreateNestedOneWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerCreateOrConnectWithoutProductInput_1 = require("../inputs/PartComputerCreateOrConnectWithoutProductInput");
const PartComputerCreateWithoutProductInput_1 = require("../inputs/PartComputerCreateWithoutProductInput");
const PartComputerWhereUniqueInput_1 = require("../inputs/PartComputerWhereUniqueInput");
let PartComputerCreateNestedOneWithoutProductInput = class PartComputerCreateNestedOneWithoutProductInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerCreateWithoutProductInput_1.PartComputerCreateWithoutProductInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerCreateWithoutProductInput_1.PartComputerCreateWithoutProductInput)
], PartComputerCreateNestedOneWithoutProductInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerCreateOrConnectWithoutProductInput_1.PartComputerCreateOrConnectWithoutProductInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerCreateOrConnectWithoutProductInput_1.PartComputerCreateOrConnectWithoutProductInput)
], PartComputerCreateNestedOneWithoutProductInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput)
], PartComputerCreateNestedOneWithoutProductInput.prototype, "connect", void 0);
PartComputerCreateNestedOneWithoutProductInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerCreateNestedOneWithoutProductInput", {
        isAbstract: true
    })
], PartComputerCreateNestedOneWithoutProductInput);
exports.PartComputerCreateNestedOneWithoutProductInput = PartComputerCreateNestedOneWithoutProductInput;
