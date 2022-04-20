"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerCreateOrConnectWithoutStateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerCreateWithoutStateInput_1 = require("../inputs/ComputerCreateWithoutStateInput");
const ComputerWhereUniqueInput_1 = require("../inputs/ComputerWhereUniqueInput");
let ComputerCreateOrConnectWithoutStateInput = class ComputerCreateOrConnectWithoutStateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerWhereUniqueInput_1.ComputerWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerWhereUniqueInput_1.ComputerWhereUniqueInput)
], ComputerCreateOrConnectWithoutStateInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerCreateWithoutStateInput_1.ComputerCreateWithoutStateInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerCreateWithoutStateInput_1.ComputerCreateWithoutStateInput)
], ComputerCreateOrConnectWithoutStateInput.prototype, "create", void 0);
ComputerCreateOrConnectWithoutStateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerCreateOrConnectWithoutStateInput", {
        isAbstract: true
    })
], ComputerCreateOrConnectWithoutStateInput);
exports.ComputerCreateOrConnectWithoutStateInput = ComputerCreateOrConnectWithoutStateInput;
