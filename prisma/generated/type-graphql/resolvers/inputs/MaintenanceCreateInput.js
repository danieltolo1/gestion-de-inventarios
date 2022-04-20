"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const PartComputerCreateNestedManyWithoutMaintenanceInput_1 = require("../inputs/PartComputerCreateNestedManyWithoutMaintenanceInput");
const UserCreateNestedOneWithoutMantenanceInput_1 = require("../inputs/UserCreateNestedOneWithoutMantenanceInput");
let MaintenanceCreateInput = class MaintenanceCreateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], MaintenanceCreateInput.prototype, "date_maintenance", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MaintenanceCreateInput.prototype, "jworkerNameFirm", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutMantenanceInput_1.UserCreateNestedOneWithoutMantenanceInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateNestedOneWithoutMantenanceInput_1.UserCreateNestedOneWithoutMantenanceInput)
], MaintenanceCreateInput.prototype, "user", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => PartComputerCreateNestedManyWithoutMaintenanceInput_1.PartComputerCreateNestedManyWithoutMaintenanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", PartComputerCreateNestedManyWithoutMaintenanceInput_1.PartComputerCreateNestedManyWithoutMaintenanceInput)
], MaintenanceCreateInput.prototype, "partComputer", void 0);
MaintenanceCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceCreateInput", {
        isAbstract: true
    })
], MaintenanceCreateInput);
exports.MaintenanceCreateInput = MaintenanceCreateInput;
