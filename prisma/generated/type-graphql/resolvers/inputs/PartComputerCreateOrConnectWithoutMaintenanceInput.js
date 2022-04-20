"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerCreateOrConnectWithoutMaintenanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerCreateWithoutMaintenanceInput_1 = require("../inputs/PartComputerCreateWithoutMaintenanceInput");
const PartComputerWhereUniqueInput_1 = require("../inputs/PartComputerWhereUniqueInput");
let PartComputerCreateOrConnectWithoutMaintenanceInput = class PartComputerCreateOrConnectWithoutMaintenanceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput)
], PartComputerCreateOrConnectWithoutMaintenanceInput.prototype, "where", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerCreateWithoutMaintenanceInput_1.PartComputerCreateWithoutMaintenanceInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerCreateWithoutMaintenanceInput_1.PartComputerCreateWithoutMaintenanceInput)
], PartComputerCreateOrConnectWithoutMaintenanceInput.prototype, "create", void 0);
PartComputerCreateOrConnectWithoutMaintenanceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerCreateOrConnectWithoutMaintenanceInput", {
        isAbstract: true
    })
], PartComputerCreateOrConnectWithoutMaintenanceInput);
exports.PartComputerCreateOrConnectWithoutMaintenanceInput = PartComputerCreateOrConnectWithoutMaintenanceInput;
