"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventarioCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const MovimientoInventarioCreateNestedManyWithoutInventarioInput_1 = require("../inputs/MovimientoInventarioCreateNestedManyWithoutInventarioInput");
const ProductoCreateNestedOneWithoutInventarioInput_1 = require("../inputs/ProductoCreateNestedOneWithoutInventarioInput");
let InventarioCreateInput = class InventarioCreateInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InventarioCreateInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InventarioCreateInput.prototype, "cantidad", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoCreateNestedOneWithoutInventarioInput_1.ProductoCreateNestedOneWithoutInventarioInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductoCreateNestedOneWithoutInventarioInput_1.ProductoCreateNestedOneWithoutInventarioInput)
], InventarioCreateInput.prototype, "producto", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => MovimientoInventarioCreateNestedManyWithoutInventarioInput_1.MovimientoInventarioCreateNestedManyWithoutInventarioInput, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", MovimientoInventarioCreateNestedManyWithoutInventarioInput_1.MovimientoInventarioCreateNestedManyWithoutInventarioInput)
], InventarioCreateInput.prototype, "movimientoInventario", void 0);
InventarioCreateInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("InventarioCreateInput", {
        isAbstract: true
    })
], InventarioCreateInput);
exports.InventarioCreateInput = InventarioCreateInput;
