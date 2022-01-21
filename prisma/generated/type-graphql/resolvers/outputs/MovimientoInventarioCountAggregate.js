"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovimientoInventarioCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let MovimientoInventarioCountAggregate = class MovimientoInventarioCountAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MovimientoInventarioCountAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MovimientoInventarioCountAggregate.prototype, "inventarioId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MovimientoInventarioCountAggregate.prototype, "cantidad", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MovimientoInventarioCountAggregate.prototype, "tipoMovimiento", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MovimientoInventarioCountAggregate.prototype, "fecha", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MovimientoInventarioCountAggregate.prototype, "usuarioId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], MovimientoInventarioCountAggregate.prototype, "_all", void 0);
MovimientoInventarioCountAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("MovimientoInventarioCountAggregate", {
        isAbstract: true
    })
], MovimientoInventarioCountAggregate);
exports.MovimientoInventarioCountAggregate = MovimientoInventarioCountAggregate;
