"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventarioMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let InventarioMaxAggregate = class InventarioMaxAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InventarioMaxAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InventarioMaxAggregate.prototype, "cantidad", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    (0, tslib_1.__metadata)("design:type", String)
], InventarioMaxAggregate.prototype, "productoId", void 0);
InventarioMaxAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("InventarioMaxAggregate", {
        isAbstract: true
    })
], InventarioMaxAggregate);
exports.InventarioMaxAggregate = InventarioMaxAggregate;
