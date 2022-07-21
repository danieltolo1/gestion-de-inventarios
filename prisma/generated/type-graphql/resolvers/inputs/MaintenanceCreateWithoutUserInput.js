"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaintenanceCreateWithoutUserInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerCreateNestedOneWithoutMaintenanceInput_1 = require("../inputs/ComputerCreateNestedOneWithoutMaintenanceInput");
const ProductCreateNestedManyWithoutMaintenanceInput_1 = require("../inputs/ProductCreateNestedManyWithoutMaintenanceInput");
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
    TypeGraphQL.Field(_type => ComputerCreateNestedOneWithoutMaintenanceInput_1.ComputerCreateNestedOneWithoutMaintenanceInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ComputerCreateNestedOneWithoutMaintenanceInput_1.ComputerCreateNestedOneWithoutMaintenanceInput)
], MaintenanceCreateWithoutUserInput.prototype, "computer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutMaintenanceInput_1.ProductCreateNestedManyWithoutMaintenanceInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductCreateNestedManyWithoutMaintenanceInput_1.ProductCreateNestedManyWithoutMaintenanceInput)
], MaintenanceCreateWithoutUserInput.prototype, "product", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], MaintenanceCreateWithoutUserInput.prototype, "observation", void 0);
MaintenanceCreateWithoutUserInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("MaintenanceCreateWithoutUserInput", {
        isAbstract: true
    })
], MaintenanceCreateWithoutUserInput);
exports.MaintenanceCreateWithoutUserInput = MaintenanceCreateWithoutUserInput;
