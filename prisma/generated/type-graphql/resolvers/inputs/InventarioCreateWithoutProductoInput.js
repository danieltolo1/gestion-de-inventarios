"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventarioCreateWithoutProductoInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MovimientoInventarioCreateNestedManyWithoutInventarioInput_1 = require("../inputs/MovimientoInventarioCreateNestedManyWithoutInventarioInput");
let InventarioCreateWithoutProductoInput = class InventarioCreateWithoutProductoInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InventarioCreateWithoutProductoInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InventarioCreateWithoutProductoInput.prototype, "cantidad", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioCreateNestedManyWithoutInventarioInput_1.MovimientoInventarioCreateNestedManyWithoutInventarioInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioCreateNestedManyWithoutInventarioInput_1.MovimientoInventarioCreateNestedManyWithoutInventarioInput)
], InventarioCreateWithoutProductoInput.prototype, "movimientoInventario", void 0);
InventarioCreateWithoutProductoInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("InventarioCreateWithoutProductoInput", {
        isAbstract: true
    })
], InventarioCreateWithoutProductoInput);
exports.InventarioCreateWithoutProductoInput = InventarioCreateWithoutProductoInput;
