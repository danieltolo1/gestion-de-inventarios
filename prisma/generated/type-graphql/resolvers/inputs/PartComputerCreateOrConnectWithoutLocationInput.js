"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerCreateOrConnectWithoutLocationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerCreateWithoutLocationInput_1 = require("../inputs/PartComputerCreateWithoutLocationInput");
const PartComputerWhereUniqueInput_1 = require("../inputs/PartComputerWhereUniqueInput");
let PartComputerCreateOrConnectWithoutLocationInput = class PartComputerCreateOrConnectWithoutLocationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput)
], PartComputerCreateOrConnectWithoutLocationInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerCreateWithoutLocationInput_1.PartComputerCreateWithoutLocationInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerCreateWithoutLocationInput_1.PartComputerCreateWithoutLocationInput)
], PartComputerCreateOrConnectWithoutLocationInput.prototype, "create", void 0);
PartComputerCreateOrConnectWithoutLocationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerCreateOrConnectWithoutLocationInput", {
        isAbstract: true
    })
], PartComputerCreateOrConnectWithoutLocationInput);
exports.PartComputerCreateOrConnectWithoutLocationInput = PartComputerCreateOrConnectWithoutLocationInput;
