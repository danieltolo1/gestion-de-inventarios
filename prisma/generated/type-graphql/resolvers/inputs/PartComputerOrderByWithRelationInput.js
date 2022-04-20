"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PartComputerOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ComputerOrderByWithRelationInput_1 = require("../inputs/ComputerOrderByWithRelationInput");
const LocationOrderByWithRelationInput_1 = require("../inputs/LocationOrderByWithRelationInput");
const MaintenanceOrderByWithRelationInput_1 = require("../inputs/MaintenanceOrderByWithRelationInput");
const ProductOrderByWithRelationInput_1 = require("../inputs/ProductOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let PartComputerOrderByWithRelationInput = class PartComputerOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PartComputerOrderByWithRelationInput.prototype, "id_partComputer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductOrderByWithRelationInput_1.ProductOrderByWithRelationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ProductOrderByWithRelationInput_1.ProductOrderByWithRelationInput)
], PartComputerOrderByWithRelationInput.prototype, "product", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PartComputerOrderByWithRelationInput.prototype, "productId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ComputerOrderByWithRelationInput_1.ComputerOrderByWithRelationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", ComputerOrderByWithRelationInput_1.ComputerOrderByWithRelationInput)
], PartComputerOrderByWithRelationInput.prototype, "computer", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PartComputerOrderByWithRelationInput.prototype, "computerId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationOrderByWithRelationInput_1.LocationOrderByWithRelationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationOrderByWithRelationInput_1.LocationOrderByWithRelationInput)
], PartComputerOrderByWithRelationInput.prototype, "location", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PartComputerOrderByWithRelationInput.prototype, "locationId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceOrderByWithRelationInput_1.MaintenanceOrderByWithRelationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceOrderByWithRelationInput_1.MaintenanceOrderByWithRelationInput)
], PartComputerOrderByWithRelationInput.prototype, "maintenance", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PartComputerOrderByWithRelationInput.prototype, "maintenanceId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], PartComputerOrderByWithRelationInput.prototype, "name_part", void 0);
PartComputerOrderByWithRelationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("PartComputerOrderByWithRelationInput", {
        isAbstract: true
    })
], PartComputerOrderByWithRelationInput);
exports.PartComputerOrderByWithRelationInput = PartComputerOrderByWithRelationInput;
