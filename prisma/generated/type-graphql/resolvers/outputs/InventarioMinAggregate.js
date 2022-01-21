"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventarioMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let InventarioMinAggregate = class InventarioMinAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InventarioMinAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InventarioMinAggregate.prototype, "cantidad", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InventarioMinAggregate.prototype, "productoId", void 0);
InventarioMinAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("InventarioMinAggregate", {
        isAbstract: true
    })
], InventarioMinAggregate);
exports.InventarioMinAggregate = InventarioMinAggregate;
