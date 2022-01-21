"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const InventarioOrderByWithRelationInput_1 = require("../inputs/InventarioOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ProductoOrderByWithRelationInput = class ProductoOrderByWithRelationInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductoOrderByWithRelationInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductoOrderByWithRelationInput.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductoOrderByWithRelationInput.prototype, "foto", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioOrderByWithRelationInput_1.InventarioOrderByWithRelationInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioOrderByWithRelationInput_1.InventarioOrderByWithRelationInput)
], ProductoOrderByWithRelationInput.prototype, "inventario", void 0);
ProductoOrderByWithRelationInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductoOrderByWithRelationInput", {
        isAbstract: true
    })
], ProductoOrderByWithRelationInput);
exports.ProductoOrderByWithRelationInput = ProductoOrderByWithRelationInput;
