"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventarioCreateWithoutMovimientoInventarioInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductoCreateNestedOneWithoutInventarioInput_1 = require("../inputs/ProductoCreateNestedOneWithoutInventarioInput");
let InventarioCreateWithoutMovimientoInventarioInput = class InventarioCreateWithoutMovimientoInventarioInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InventarioCreateWithoutMovimientoInventarioInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InventarioCreateWithoutMovimientoInventarioInput.prototype, "cantidad", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoCreateNestedOneWithoutInventarioInput_1.ProductoCreateNestedOneWithoutInventarioInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductoCreateNestedOneWithoutInventarioInput_1.ProductoCreateNestedOneWithoutInventarioInput)
], InventarioCreateWithoutMovimientoInventarioInput.prototype, "producto", void 0);
InventarioCreateWithoutMovimientoInventarioInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("InventarioCreateWithoutMovimientoInventarioInput", {
        isAbstract: true
    })
], InventarioCreateWithoutMovimientoInventarioInput);
exports.InventarioCreateWithoutMovimientoInventarioInput = InventarioCreateWithoutMovimientoInventarioInput;
