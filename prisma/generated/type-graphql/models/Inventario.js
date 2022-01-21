"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventario = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
const InventarioCount_1 = require("../resolvers/outputs/InventarioCount");
let Inventario = class Inventario {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Inventario.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Inventario.prototype, "cantidad", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Inventario.prototype, "productoId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => InventarioCount_1.InventarioCount, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", InventarioCount_1.InventarioCount)
], Inventario.prototype, "_count", void 0);
Inventario = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("Inventario", {
        isAbstract: true
    })
], Inventario);
exports.Inventario = Inventario;
