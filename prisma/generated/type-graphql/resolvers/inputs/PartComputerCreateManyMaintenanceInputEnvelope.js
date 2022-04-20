"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerCreateManyMaintenanceInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerCreateManyMaintenanceInput_1 = require("../inputs/PartComputerCreateManyMaintenanceInput");
let PartComputerCreateManyMaintenanceInputEnvelope = class PartComputerCreateManyMaintenanceInputEnvelope {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [PartComputerCreateManyMaintenanceInput_1.PartComputerCreateManyMaintenanceInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], PartComputerCreateManyMaintenanceInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], PartComputerCreateManyMaintenanceInputEnvelope.prototype, "skipDuplicates", void 0);
PartComputerCreateManyMaintenanceInputEnvelope = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerCreateManyMaintenanceInputEnvelope", {
        isAbstract: true
    })
], PartComputerCreateManyMaintenanceInputEnvelope);
exports.PartComputerCreateManyMaintenanceInputEnvelope = PartComputerCreateManyMaintenanceInputEnvelope;
