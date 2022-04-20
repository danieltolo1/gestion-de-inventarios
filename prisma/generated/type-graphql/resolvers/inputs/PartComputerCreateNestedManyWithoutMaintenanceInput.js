"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerCreateNestedManyWithoutMaintenanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerCreateManyMaintenanceInputEnvelope_1 = require("../inputs/PartComputerCreateManyMaintenanceInputEnvelope");
const PartComputerCreateOrConnectWithoutMaintenanceInput_1 = require("../inputs/PartComputerCreateOrConnectWithoutMaintenanceInput");
const PartComputerCreateWithoutMaintenanceInput_1 = require("../inputs/PartComputerCreateWithoutMaintenanceInput");
const PartComputerWhereUniqueInput_1 = require("../inputs/PartComputerWhereUniqueInput");
let PartComputerCreateNestedManyWithoutMaintenanceInput = class PartComputerCreateNestedManyWithoutMaintenanceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerCreateWithoutMaintenanceInput_1.PartComputerCreateWithoutMaintenanceInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerCreateNestedManyWithoutMaintenanceInput.prototype, "create", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerCreateOrConnectWithoutMaintenanceInput_1.PartComputerCreateOrConnectWithoutMaintenanceInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerCreateNestedManyWithoutMaintenanceInput.prototype, "connectOrCreate", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerCreateManyMaintenanceInputEnvelope_1.PartComputerCreateManyMaintenanceInputEnvelope, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerCreateManyMaintenanceInputEnvelope_1.PartComputerCreateManyMaintenanceInputEnvelope)
], PartComputerCreateNestedManyWithoutMaintenanceInput.prototype, "createMany", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerWhereUniqueInput_1.PartComputerWhereUniqueInput], {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerCreateNestedManyWithoutMaintenanceInput.prototype, "connect", void 0);
PartComputerCreateNestedManyWithoutMaintenanceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerCreateNestedManyWithoutMaintenanceInput", {
        isAbstract: true
    })
], PartComputerCreateNestedManyWithoutMaintenanceInput);
exports.PartComputerCreateNestedManyWithoutMaintenanceInput = PartComputerCreateNestedManyWithoutMaintenanceInput;
