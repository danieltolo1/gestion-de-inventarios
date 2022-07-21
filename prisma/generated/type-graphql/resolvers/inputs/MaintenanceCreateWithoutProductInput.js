"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceCreateWithoutProductInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerCreateNestedOneWithoutMaintenanceInput_1 = require("../inputs/ComputerCreateNestedOneWithoutMaintenanceInput");
const UserCreateNestedOneWithoutMantenanceInput_1 = require("../inputs/UserCreateNestedOneWithoutMantenanceInput");
let MaintenanceCreateWithoutProductInput = class MaintenanceCreateWithoutProductInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], MaintenanceCreateWithoutProductInput.prototype, "date_maintenance", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MaintenanceCreateWithoutProductInput.prototype, "jworkerNameFirm", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutMantenanceInput_1.UserCreateNestedOneWithoutMantenanceInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateNestedOneWithoutMantenanceInput_1.UserCreateNestedOneWithoutMantenanceInput)
], MaintenanceCreateWithoutProductInput.prototype, "user", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerCreateNestedOneWithoutMaintenanceInput_1.ComputerCreateNestedOneWithoutMaintenanceInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerCreateNestedOneWithoutMaintenanceInput_1.ComputerCreateNestedOneWithoutMaintenanceInput)
], MaintenanceCreateWithoutProductInput.prototype, "computer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MaintenanceCreateWithoutProductInput.prototype, "observation", void 0);
MaintenanceCreateWithoutProductInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceCreateWithoutProductInput", {
        isAbstract: true
    })
], MaintenanceCreateWithoutProductInput);
exports.MaintenanceCreateWithoutProductInput = MaintenanceCreateWithoutProductInput;
