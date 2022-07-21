"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerCreateOrConnectWithoutMaintenanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerCreateWithoutMaintenanceInput_1 = require("../inputs/ComputerCreateWithoutMaintenanceInput");
const ComputerWhereUniqueInput_1 = require("../inputs/ComputerWhereUniqueInput");
let ComputerCreateOrConnectWithoutMaintenanceInput = class ComputerCreateOrConnectWithoutMaintenanceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerWhereUniqueInput_1.ComputerWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerWhereUniqueInput_1.ComputerWhereUniqueInput)
], ComputerCreateOrConnectWithoutMaintenanceInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerCreateWithoutMaintenanceInput_1.ComputerCreateWithoutMaintenanceInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerCreateWithoutMaintenanceInput_1.ComputerCreateWithoutMaintenanceInput)
], ComputerCreateOrConnectWithoutMaintenanceInput.prototype, "create", void 0);
ComputerCreateOrConnectWithoutMaintenanceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerCreateOrConnectWithoutMaintenanceInput", {
        isAbstract: true
    })
], ComputerCreateOrConnectWithoutMaintenanceInput);
exports.ComputerCreateOrConnectWithoutMaintenanceInput = ComputerCreateOrConnectWithoutMaintenanceInput;
