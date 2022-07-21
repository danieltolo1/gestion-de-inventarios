"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerCreateNestedOneWithoutMaintenanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerCreateOrConnectWithoutMaintenanceInput_1 = require("../inputs/ComputerCreateOrConnectWithoutMaintenanceInput");
const ComputerCreateWithoutMaintenanceInput_1 = require("../inputs/ComputerCreateWithoutMaintenanceInput");
const ComputerWhereUniqueInput_1 = require("../inputs/ComputerWhereUniqueInput");
let ComputerCreateNestedOneWithoutMaintenanceInput = class ComputerCreateNestedOneWithoutMaintenanceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerCreateWithoutMaintenanceInput_1.ComputerCreateWithoutMaintenanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerCreateWithoutMaintenanceInput_1.ComputerCreateWithoutMaintenanceInput)
], ComputerCreateNestedOneWithoutMaintenanceInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerCreateOrConnectWithoutMaintenanceInput_1.ComputerCreateOrConnectWithoutMaintenanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerCreateOrConnectWithoutMaintenanceInput_1.ComputerCreateOrConnectWithoutMaintenanceInput)
], ComputerCreateNestedOneWithoutMaintenanceInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerWhereUniqueInput_1.ComputerWhereUniqueInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerWhereUniqueInput_1.ComputerWhereUniqueInput)
], ComputerCreateNestedOneWithoutMaintenanceInput.prototype, "connect", void 0);
ComputerCreateNestedOneWithoutMaintenanceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerCreateNestedOneWithoutMaintenanceInput", {
        isAbstract: true
    })
], ComputerCreateNestedOneWithoutMaintenanceInput);
exports.ComputerCreateNestedOneWithoutMaintenanceInput = ComputerCreateNestedOneWithoutMaintenanceInput;
