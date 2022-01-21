"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoUpsertWithoutInventarioInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const ProductoCreateWithoutInventarioInput_1 = require("../inputs/ProductoCreateWithoutInventarioInput");
const ProductoUpdateWithoutInventarioInput_1 = require("../inputs/ProductoUpdateWithoutInventarioInput");
let ProductoUpsertWithoutInventarioInput = class ProductoUpsertWithoutInventarioInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoUpdateWithoutInventarioInput_1.ProductoUpdateWithoutInventarioInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductoUpdateWithoutInventarioInput_1.ProductoUpdateWithoutInventarioInput)
], ProductoUpsertWithoutInventarioInput.prototype, "update", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => ProductoCreateWithoutInventarioInput_1.ProductoCreateWithoutInventarioInput, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", ProductoCreateWithoutInventarioInput_1.ProductoCreateWithoutInventarioInput)
], ProductoUpsertWithoutInventarioInput.prototype, "create", void 0);
ProductoUpsertWithoutInventarioInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductoUpsertWithoutInventarioInput", {
        isAbstract: true
    })
], ProductoUpsertWithoutInventarioInput);
exports.ProductoUpsertWithoutInventarioInput = ProductoUpsertWithoutInventarioInput;
