"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventarioCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let InventarioCountAggregate = class InventarioCountAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InventarioCountAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InventarioCountAggregate.prototype, "cantidad", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InventarioCountAggregate.prototype, "productoId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], InventarioCountAggregate.prototype, "_all", void 0);
InventarioCountAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("InventarioCountAggregate", {
        isAbstract: true
    })
], InventarioCountAggregate);
exports.InventarioCountAggregate = InventarioCountAggregate;
