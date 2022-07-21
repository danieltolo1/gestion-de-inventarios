"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerCreateNestedOneWithoutMaintenanceInput_1 = require("../inputs/ComputerCreateNestedOneWithoutMaintenanceInput");
const ProductCreateNestedManyWithoutMaintenanceInput_1 = require("../inputs/ProductCreateNestedManyWithoutMaintenanceInput");
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
    TypeGraphQL.Field(_type => ComputerCreateNestedOneWithoutMaintenanceInput_1.ComputerCreateNestedOneWithoutMaintenanceInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerCreateNestedOneWithoutMaintenanceInput_1.ComputerCreateNestedOneWithoutMaintenanceInput)
], MaintenanceCreateInput.prototype, "computer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutMaintenanceInput_1.ProductCreateNestedManyWithoutMaintenanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductCreateNestedManyWithoutMaintenanceInput_1.ProductCreateNestedManyWithoutMaintenanceInput)
], MaintenanceCreateInput.prototype, "product", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MaintenanceCreateInput.prototype, "observation", void 0);
MaintenanceCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceCreateInput", {
        isAbstract: true
    })
], MaintenanceCreateInput);
exports.MaintenanceCreateInput = MaintenanceCreateInput;
