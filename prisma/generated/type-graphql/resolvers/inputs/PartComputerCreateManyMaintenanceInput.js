"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerCreateManyMaintenanceInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let PartComputerCreateManyMaintenanceInput = class PartComputerCreateManyMaintenanceInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PartComputerCreateManyMaintenanceInput.prototype, "id_partComputer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PartComputerCreateManyMaintenanceInput.prototype, "productId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PartComputerCreateManyMaintenanceInput.prototype, "computerId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], PartComputerCreateManyMaintenanceInput.prototype, "locationId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PartComputerCreateManyMaintenanceInput.prototype, "name_part", void 0);
PartComputerCreateManyMaintenanceInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerCreateManyMaintenanceInput", {
        isAbstract: true
    })
], PartComputerCreateManyMaintenanceInput);
exports.PartComputerCreateManyMaintenanceInput = PartComputerCreateManyMaintenanceInput;
