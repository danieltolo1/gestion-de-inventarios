"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventarioCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let InventarioCount = class InventarioCount {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InventarioCount.prototype, "movimientoInventario", void 0);
InventarioCount = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("InventarioCount", {
        isAbstract: true
    })
], InventarioCount);
exports.InventarioCount = InventarioCount;
