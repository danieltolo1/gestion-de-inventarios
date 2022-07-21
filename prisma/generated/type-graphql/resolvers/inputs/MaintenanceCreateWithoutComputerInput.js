"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceCreateWithoutComputerInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductCreateNestedManyWithoutMaintenanceInput_1 = require("../inputs/ProductCreateNestedManyWithoutMaintenanceInput");
const UserCreateNestedOneWithoutMantenanceInput_1 = require("../inputs/UserCreateNestedOneWithoutMantenanceInput");
let MaintenanceCreateWithoutComputerInput = class MaintenanceCreateWithoutComputerInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Date)
], MaintenanceCreateWithoutComputerInput.prototype, "date_maintenance", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MaintenanceCreateWithoutComputerInput.prototype, "jworkerNameFirm", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => UserCreateNestedOneWithoutMantenanceInput_1.UserCreateNestedOneWithoutMantenanceInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", UserCreateNestedOneWithoutMantenanceInput_1.UserCreateNestedOneWithoutMantenanceInput)
], MaintenanceCreateWithoutComputerInput.prototype, "user", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutMaintenanceInput_1.ProductCreateNestedManyWithoutMaintenanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductCreateNestedManyWithoutMaintenanceInput_1.ProductCreateNestedManyWithoutMaintenanceInput)
], MaintenanceCreateWithoutComputerInput.prototype, "product", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MaintenanceCreateWithoutComputerInput.prototype, "observation", void 0);
MaintenanceCreateWithoutComputerInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceCreateWithoutComputerInput", {
        isAbstract: true
    })
], MaintenanceCreateWithoutComputerInput);
exports.MaintenanceCreateWithoutComputerInput = MaintenanceCreateWithoutComputerInput;
