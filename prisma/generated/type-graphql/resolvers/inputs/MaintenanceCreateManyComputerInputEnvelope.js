"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceCreateManyComputerInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MaintenanceCreateManyComputerInput_1 = require("../inputs/MaintenanceCreateManyComputerInput");
let MaintenanceCreateManyComputerInputEnvelope = class MaintenanceCreateManyComputerInputEnvelope {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceCreateManyComputerInput_1.MaintenanceCreateManyComputerInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MaintenanceCreateManyComputerInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], MaintenanceCreateManyComputerInputEnvelope.prototype, "skipDuplicates", void 0);
MaintenanceCreateManyComputerInputEnvelope = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceCreateManyComputerInputEnvelope", {
        isAbstract: true
    })
], MaintenanceCreateManyComputerInputEnvelope);
exports.MaintenanceCreateManyComputerInputEnvelope = MaintenanceCreateManyComputerInputEnvelope;
