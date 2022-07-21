"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputerUpsertWithoutMaintenanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerCreateWithoutMaintenanceInput_1 = require("../inputs/ComputerCreateWithoutMaintenanceInput");
const ComputerUpdateWithoutMaintenanceInput_1 = require("../inputs/ComputerUpdateWithoutMaintenanceInput");
let ComputerUpsertWithoutMaintenanceInput = class ComputerUpsertWithoutMaintenanceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerUpdateWithoutMaintenanceInput_1.ComputerUpdateWithoutMaintenanceInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerUpdateWithoutMaintenanceInput_1.ComputerUpdateWithoutMaintenanceInput)
], ComputerUpsertWithoutMaintenanceInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerCreateWithoutMaintenanceInput_1.ComputerCreateWithoutMaintenanceInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerCreateWithoutMaintenanceInput_1.ComputerCreateWithoutMaintenanceInput)
], ComputerUpsertWithoutMaintenanceInput.prototype, "create", void 0);
ComputerUpsertWithoutMaintenanceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ComputerUpsertWithoutMaintenanceInput", {
        isAbstract: true
    })
], ComputerUpsertWithoutMaintenanceInput);
exports.ComputerUpsertWithoutMaintenanceInput = ComputerUpsertWithoutMaintenanceInput;
