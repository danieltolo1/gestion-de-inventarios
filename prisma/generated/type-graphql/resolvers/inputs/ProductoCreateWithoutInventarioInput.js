"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoCreateWithoutInventarioInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let ProductoCreateWithoutInventarioInput = class ProductoCreateWithoutInventarioInput {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductoCreateWithoutInventarioInput.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductoCreateWithoutInventarioInput.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], ProductoCreateWithoutInventarioInput.prototype, "foto", void 0);
ProductoCreateWithoutInventarioInput = (0, tslib_1.__decorate)([
    TypeGraphQL.InputType("ProductoCreateWithoutInventarioInput", {
        isAbstract: true
    })
], ProductoCreateWithoutInventarioInput);
exports.ProductoCreateWithoutInventarioInput = ProductoCreateWithoutInventarioInput;
