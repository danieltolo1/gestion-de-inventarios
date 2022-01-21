"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let Producto = class Producto {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Producto.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Producto.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Producto.prototype, "foto", void 0);
Producto = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("Producto", {
        isAbstract: true
    })
], Producto);
exports.Producto = Producto;
