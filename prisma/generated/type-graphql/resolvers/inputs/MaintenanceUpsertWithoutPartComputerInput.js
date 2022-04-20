"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceUpsertWithoutPartComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MaintenanceCreateWithoutPartComputerInput_1 = require("../inputs/MaintenanceCreateWithoutPartComputerInput");
const MaintenanceUpdateWithoutPartComputerInput_1 = require("../inputs/MaintenanceUpdateWithoutPartComputerInput");
let MaintenanceUpsertWithoutPartComputerInput = class MaintenanceUpsertWithoutPartComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceUpdateWithoutPartComputerInput_1.MaintenanceUpdateWithoutPartComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceUpdateWithoutPartComputerInput_1.MaintenanceUpdateWithoutPartComputerInput)
], MaintenanceUpsertWithoutPartComputerInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceCreateWithoutPartComputerInput_1.MaintenanceCreateWithoutPartComputerInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceCreateWithoutPartComputerInput_1.MaintenanceCreateWithoutPartComputerInput)
], MaintenanceUpsertWithoutPartComputerInput.prototype, "create", void 0);
MaintenanceUpsertWithoutPartComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceUpsertWithoutPartComputerInput", {
        isAbstract: true
    })
], MaintenanceUpsertWithoutPartComputerInput);
exports.MaintenanceUpsertWithoutPartComputerInput = MaintenanceUpsertWithoutPartComputerInput;
