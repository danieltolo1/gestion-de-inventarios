"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerCreateOrConnectWithoutLocationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerCreateWithoutLocationInput_1 = require("../inputs/ComputerCreateWithoutLocationInput");
const ComputerWhereUniqueInput_1 = require("../inputs/ComputerWhereUniqueInput");
let ComputerCreateOrConnectWithoutLocationInput = class ComputerCreateOrConnectWithoutLocationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerWhereUniqueInput_1.ComputerWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerWhereUniqueInput_1.ComputerWhereUniqueInput)
], ComputerCreateOrConnectWithoutLocationInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerCreateWithoutLocationInput_1.ComputerCreateWithoutLocationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerCreateWithoutLocationInput_1.ComputerCreateWithoutLocationInput)
], ComputerCreateOrConnectWithoutLocationInput.prototype, "create", void 0);
ComputerCreateOrConnectWithoutLocationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerCreateOrConnectWithoutLocationInput", {
        isAbstract: true
    })
], ComputerCreateOrConnectWithoutLocationInput);
exports.ComputerCreateOrConnectWithoutLocationInput = ComputerCreateOrConnectWithoutLocationInput;
