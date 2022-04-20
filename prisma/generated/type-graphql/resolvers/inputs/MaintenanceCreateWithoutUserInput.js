"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerCreateNestedManyWithoutMaintenanceInput_1 = require("../inputs/PartComputerCreateNestedManyWithoutMaintenanceInput");
let MaintenanceCreateWithoutUserInput = class MaintenanceCreateWithoutUserInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], MaintenanceCreateWithoutUserInput.prototype, "date_maintenance", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MaintenanceCreateWithoutUserInput.prototype, "jworkerNameFirm", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerCreateNestedManyWithoutMaintenanceInput_1.PartComputerCreateNestedManyWithoutMaintenanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerCreateNestedManyWithoutMaintenanceInput_1.PartComputerCreateNestedManyWithoutMaintenanceInput)
], MaintenanceCreateWithoutUserInput.prototype, "partComputer", void 0);
MaintenanceCreateWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceCreateWithoutUserInput", {
        isAbstract: true
    })
], MaintenanceCreateWithoutUserInput);
exports.MaintenanceCreateWithoutUserInput = MaintenanceCreateWithoutUserInput;
