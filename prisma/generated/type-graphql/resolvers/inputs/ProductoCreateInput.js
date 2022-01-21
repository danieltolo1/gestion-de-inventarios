"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const InventarioCreateNestedOneWithoutProductoInput_1 = require("../inputs/InventarioCreateNestedOneWithoutProductoInput");
let ProductoCreateInput = class ProductoCreateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductoCreateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductoCreateInput.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductoCreateInput.prototype, "foto", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioCreateNestedOneWithoutProductoInput_1.InventarioCreateNestedOneWithoutProductoInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioCreateNestedOneWithoutProductoInput_1.InventarioCreateNestedOneWithoutProductoInput)
], ProductoCreateInput.prototype, "inventario", void 0);
ProductoCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductoCreateInput", {
        isAbstract: true
    })
], ProductoCreateInput);
exports.ProductoCreateInput = ProductoCreateInput;
