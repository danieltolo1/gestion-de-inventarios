"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const LocationOrderByWithRelationInput_1 = require("../inputs/LocationOrderByWithRelationInput");
const MaintenanceOrderByRelationAggregateInput_1 = require("../inputs/MaintenanceOrderByRelationAggregateInput");
const Product_TypeOrderByWithRelationInput_1 = require("../inputs/Product_TypeOrderByWithRelationInput");
const StateOrderByWithRelationInput_1 = require("../inputs/StateOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ProductOrderByWithRelationInput = class ProductOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductOrderByWithRelationInput.prototype, "id_product", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductOrderByWithRelationInput.prototype, "internal_code", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductOrderByWithRelationInput.prototype, "serial_number", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductOrderByWithRelationInput.prototype, "imei", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductOrderByWithRelationInput.prototype, "observation", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductOrderByWithRelationInput.prototype, "picture", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductOrderByWithRelationInput.prototype, "model", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => Product_TypeOrderByWithRelationInput_1.Product_TypeOrderByWithRelationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Product_TypeOrderByWithRelationInput_1.Product_TypeOrderByWithRelationInput)
], ProductOrderByWithRelationInput.prototype, "product_type", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductOrderByWithRelationInput.prototype, "product_typeId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductOrderByWithRelationInput.prototype, "size", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductOrderByWithRelationInput.prototype, "tecnology", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductOrderByWithRelationInput.prototype, "conectivity", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => StateOrderByWithRelationInput_1.StateOrderByWithRelationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", StateOrderByWithRelationInput_1.StateOrderByWithRelationInput)
], ProductOrderByWithRelationInput.prototype, "state", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductOrderByWithRelationInput.prototype, "stateId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => LocationOrderByWithRelationInput_1.LocationOrderByWithRelationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", LocationOrderByWithRelationInput_1.LocationOrderByWithRelationInput)
], ProductOrderByWithRelationInput.prototype, "location", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductOrderByWithRelationInput.prototype, "locationId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductOrderByWithRelationInput.prototype, "historial", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MaintenanceOrderByRelationAggregateInput_1.MaintenanceOrderByRelationAggregateInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MaintenanceOrderByRelationAggregateInput_1.MaintenanceOrderByRelationAggregateInput)
], ProductOrderByWithRelationInput.prototype, "maintenance", void 0);
ProductOrderByWithRelationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductOrderByWithRelationInput", {
        isAbstract: true
    })
], ProductOrderByWithRelationInput);
exports.ProductOrderByWithRelationInput = ProductOrderByWithRelationInput;
