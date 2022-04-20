"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceCreateWithoutPartComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const UserCreateNestedOneWithoutMantenanceInput_1 = require("../inputs/UserCreateNestedOneWithoutMantenanceInput");
let MaintenanceCreateWithoutPartComputerInput = class MaintenanceCreateWithoutPartComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], MaintenanceCreateWithoutPartComputerInput.prototype, "date_maintenance", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MaintenanceCreateWithoutPartComputerInput.prototype, "jworkerNameFirm", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutMantenanceInput_1.UserCreateNestedOneWithoutMantenanceInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateNestedOneWithoutMantenanceInput_1.UserCreateNestedOneWithoutMantenanceInput)
], MaintenanceCreateWithoutPartComputerInput.prototype, "user", void 0);
MaintenanceCreateWithoutPartComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceCreateWithoutPartComputerInput", {
        isAbstract: true
    })
], MaintenanceCreateWithoutPartComputerInput);
exports.MaintenanceCreateWithoutPartComputerInput = MaintenanceCreateWithoutPartComputerInput;
