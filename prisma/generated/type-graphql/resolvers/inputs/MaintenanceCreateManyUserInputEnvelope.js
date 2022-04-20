"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceCreateManyUserInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MaintenanceCreateManyUserInput_1 = require("../inputs/MaintenanceCreateManyUserInput");
let MaintenanceCreateManyUserInputEnvelope = class MaintenanceCreateManyUserInputEnvelope {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => [MaintenanceCreateManyUserInput_1.MaintenanceCreateManyUserInput], {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Array)
], MaintenanceCreateManyUserInputEnvelope.prototype, "data", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], MaintenanceCreateManyUserInputEnvelope.prototype, "skipDuplicates", void 0);
MaintenanceCreateManyUserInputEnvelope = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceCreateManyUserInputEnvelope", {
        isAbstract: true
    })
], MaintenanceCreateManyUserInputEnvelope);
exports.MaintenanceCreateManyUserInputEnvelope = MaintenanceCreateManyUserInputEnvelope;
